import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { formatBRL, runPool } from './lib/marketplace-utils.mjs'

const prisma = new PrismaClient()
const dryRun = process.argv.includes('--dry-run')
const verbose = process.argv.includes('--verbose')

const SITE_ID = 'MLB'
const TARGET_COUNT = 20
const MAX_CATEGORY_DEPTH = 6
const DEPARTMENT_CONCURRENCY = 4
const ITEMS_PER_REQUEST = 20

function requireEnv(name) {
  const value = process.env[name]
  if (!value) throw new Error(`Variável de ambiente ausente: ${name}`)
  return value
}

async function fetchJson(url, accessToken) {
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
    signal: AbortSignal.timeout(20_000),
  })

  if (!response.ok) {
    throw new Error(`${url} respondeu ${response.status}`)
  }

  return response.json()
}

// O refresh_token do Mercado Livre é de uso único: cada renovação invalida o
// anterior e emite um novo, que precisa ser persistido para a próxima execução agendada.
async function getValidAccessToken() {
  const stored = await prisma.mercadoLivreToken.findUnique({ where: { id: 1 } })
  const refreshToken = stored?.refreshToken || process.env.MERCADO_LIVRE_REFRESH_TOKEN

  if (!refreshToken) {
    throw new Error(
      'Nenhum refresh token disponível. Defina MERCADO_LIVRE_REFRESH_TOKEN na primeira execução.',
    )
  }

  const response = await fetch('https://api.mercadolibre.com/oauth/token', {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      accept: 'application/json',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: requireEnv('MERCADO_LIVRE_CLIENT_ID'),
      client_secret: requireEnv('MERCADO_LIVRE_CLIENT_SECRET'),
      refresh_token: refreshToken,
    }),
    signal: AbortSignal.timeout(20_000),
  })

  if (!response.ok) {
    throw new Error(`Falha ao renovar token do Mercado Livre (${response.status})`)
  }

  const data = await response.json()

  await prisma.mercadoLivreToken.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresAt: new Date(Date.now() + data.expires_in * 1000),
    },
    update: {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresAt: new Date(Date.now() + data.expires_in * 1000),
    },
  })

  return data.access_token
}

async function fetchDepartments(accessToken) {
  return fetchJson(`https://api.mercadolibre.com/sites/${SITE_ID}/categories`, accessToken)
}

// /highlights só aceita categorias-folha (sem subcategorias). Descemos a
// árvore seguindo sempre o filho com mais itens, sem precisar de IDs fixos.
async function findLeafCategory(departmentId, accessToken) {
  let categoryId = departmentId

  for (let depth = 0; depth < MAX_CATEGORY_DEPTH; depth += 1) {
    const category = await fetchJson(
      `https://api.mercadolibre.com/categories/${categoryId}`,
      accessToken,
    )
    const children = category.children_categories || []

    if (children.length === 0) return categoryId

    categoryId = [...children].sort(
      (a, b) => b.total_items_in_this_category - a.total_items_in_this_category,
    )[0].id
  }

  return categoryId
}

async function fetchBestSellerItemIds(leafCategoryId, accessToken) {
  const data = await fetchJson(
    `https://api.mercadolibre.com/highlights/${SITE_ID}/category/${leafCategoryId}`,
    accessToken,
  )

  return (data.content || [])
    .filter((entry) => entry.type === 'ITEM')
    .map((entry) => entry.id)
}

async function fetchItemDetails(itemIds, accessToken) {
  const items = []

  for (let start = 0; start < itemIds.length; start += ITEMS_PER_REQUEST) {
    const chunk = itemIds.slice(start, start + ITEMS_PER_REQUEST)
    const response = await fetch(
      `https://api.mercadolibre.com/items?ids=${chunk.join(',')}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        signal: AbortSignal.timeout(20_000),
      },
    )

    if (!response.ok) continue

    const results = await response.json()
    for (const result of results) {
      if (result.code === 200 && result.body) items.push(result.body)
    }
  }

  return items
}

function appendAffiliateParam(permalink, mattWord, mattTool) {
  const url = new URL(permalink)
  url.searchParams.set('matt_word', mattWord)
  url.searchParams.set('matt_tool', mattTool)
  return url.toString()
}

function toProductRow(item, departmentName, mattWord, mattTool) {
  const price = item.price
  const oldPrice = item.original_price && item.original_price > price ? item.original_price : price
  const discount = oldPrice > price ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0

  return {
    title: item.title,
    category: departmentName || 'Ofertas',
    price: formatBRL(price),
    oldPrice: formatBRL(oldPrice),
    discount: `-${discount}%`,
    image: (item.thumbnail || '').replace(/^http:/, 'https:'),
    rating: item.sold_quantity || 0,
    store: 'Mercado Livre',
    installments: 'Consulte o parcelamento no anúncio',
    shipping: item.shipping?.free_shipping ? 'Frete grátis' : 'Consulte o frete no anúncio',
    affiliate: appendAffiliateParam(item.permalink, mattWord, mattTool),
  }
}

async function main() {
  const mattWord = requireEnv('MERCADO_LIVRE_MATT_WORD')
  const mattTool = requireEnv('MERCADO_LIVRE_MATT_TOOL')
  const accessToken = await getValidAccessToken()
  const departments = await fetchDepartments(accessToken)
  const candidateDepartmentByItemId = new Map()

  await runPool(departments, DEPARTMENT_CONCURRENCY, async (department) => {
    try {
      const leafId = await findLeafCategory(department.id, accessToken)
      const itemIds = await fetchBestSellerItemIds(leafId, accessToken)

      for (const itemId of itemIds) {
        if (!candidateDepartmentByItemId.has(itemId)) {
          candidateDepartmentByItemId.set(itemId, department.name)
        }
      }

      if (verbose) {
        console.log(`[ok] ${department.name}: ${itemIds.length} candidatos`)
      }
    } catch (error) {
      console.error(
        `[aviso] Departamento "${department.name}" falhou: ${error instanceof Error ? error.message : error}`,
      )
    }
  })

  const items = await fetchItemDetails(
    [...candidateDepartmentByItemId.keys()],
    accessToken,
  )
  const validItems = items.filter(
    (item) => item.status === 'active' && item.available_quantity > 0,
  )
  const selected = validItems
    .sort((a, b) => a.price - b.price)
    .slice(0, TARGET_COUNT)

  if (selected.length < TARGET_COUNT) {
    throw new Error(
      `Apenas ${selected.length} produtos válidos encontrados (esperado ${TARGET_COUNT}). Catálogo não foi alterado.`,
    )
  }

  const rows = selected.map((item) =>
    toProductRow(item, candidateDepartmentByItemId.get(item.id), mattWord, mattTool),
  )

  if (dryRun) {
    console.log(JSON.stringify(rows, null, 2))
    console.log(`Simulação: ${rows.length} produtos seriam publicados.`)
    return
  }

  await prisma.$transaction([
    prisma.product.deleteMany(),
    prisma.product.createMany({ data: rows }),
  ])

  console.log(`Catálogo atualizado com ${rows.length} produtos.`)
}

main()
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
