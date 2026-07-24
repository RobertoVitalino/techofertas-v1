import 'dotenv/config'
import { writeFile } from 'node:fs/promises'
import { PrismaClient } from '@prisma/client'
import { runPool } from './lib/marketplace-utils.mjs'

const prisma = new PrismaClient()
const verbose = process.argv.includes('--verbose')

const SITE_ID = 'MLB'
const LEAVES_PER_DEPARTMENT = 6
const MAX_NODES_PER_DEPARTMENT = 24
const DEPARTMENT_CONCURRENCY = 4
const MAX_POSITION = 3
const OUTPUT_FILE = new URL('../bestsellers-candidates.txt', import.meta.url)

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
// anterior e emite um novo, que precisa ser persistido para a próxima execução.
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

// /highlights só aceita categorias-folha (sem subcategorias). Percorremos a
// árvore em largura, priorizando os ramos com mais itens, até juntar algumas
// folhas por departamento — sem precisar de IDs fixos.
async function findLeafCategories(departmentId, accessToken) {
  const leaves = []
  // Busca "melhor-primeiro": sempre explora o ramo com mais itens antes dos
  // outros, para achar categorias estabelecidas (com ranking) antes de
  // esgotar o orçamento de nós em ramos pequenos e sem histórico de vendas.
  const frontier = [{ id: departmentId, priority: Infinity }]
  let visited = 0

  while (
    frontier.length > 0 &&
    leaves.length < LEAVES_PER_DEPARTMENT &&
    visited < MAX_NODES_PER_DEPARTMENT
  ) {
    frontier.sort((a, b) => b.priority - a.priority)
    const { id: categoryId } = frontier.shift()
    visited += 1

    const category = await fetchJson(
      `https://api.mercadolibre.com/categories/${categoryId}`,
      accessToken,
    )
    const children = category.children_categories || []

    if (children.length === 0) {
      leaves.push(categoryId)
      continue
    }

    frontier.push(
      ...children.map((child) => ({
        id: child.id,
        priority: child.total_items_in_this_category || 0,
      })),
    )
  }

  return leaves
}

// PRODUCT/USER_PRODUCT são páginas de catálogo (exigem permissão extra para
// resolver); ficamos só com ITEM, que aponta direto para um anúncio real.
async function fetchTopBestSellers(leafCategoryId, accessToken) {
  const data = await fetchJson(
    `https://api.mercadolibre.com/highlights/${SITE_ID}/category/${leafCategoryId}`,
    accessToken,
  )

  return (data.content || []).filter(
    (entry) => entry.type === 'ITEM' && entry.position <= MAX_POSITION,
  )
}

async function main() {
  const accessToken = await getValidAccessToken()
  const departments = await fetchDepartments(accessToken)
  const candidates = []
  const seenIds = new Set()

  await runPool(departments, DEPARTMENT_CONCURRENCY, async (department) => {
    try {
      const leafIds = await findLeafCategories(department.id, accessToken)
      const entryLists = await Promise.all(
        leafIds.map((leafId) => fetchTopBestSellers(leafId, accessToken)),
      )

      for (const entry of entryLists.flat()) {
        if (seenIds.has(entry.id)) continue
        seenIds.add(entry.id)
        candidates.push({
          id: entry.id,
          position: entry.position,
          department: department.name,
        })
      }

      if (verbose) {
        console.log(`[ok] ${department.name}: ${leafIds.length} folhas`)
      }
    } catch (error) {
      console.error(
        `[aviso] Departamento "${department.name}" falhou: ${error instanceof Error ? error.message : error}`,
      )
    }
  })

  candidates.sort((a, b) => a.department.localeCompare(b.department, 'pt-BR') || a.position - b.position)

  const lines = candidates.map(
    (candidate) =>
      `${candidate.department} (#${candidate.position}) — ${candidate.id} — https://lista.mercadolivre.com.br/${candidate.id}`,
  )

  await writeFile(OUTPUT_FILE, lines.join('\n') + '\n', 'utf8')

  console.log(lines.join('\n'))
  console.log(`\n${candidates.length} candidatos salvos em ${OUTPUT_FILE.pathname}`)
  console.log(
    'Abra os links, escolha 20, gere o link de afiliado de cada um no painel do Mercado Livre\n' +
      'e cole "Título do produto | link de afiliado" (um por linha) em bestsellers-links.txt.\n' +
      'Depois rode: npm run bestsellers:apply',
  )
}

main()
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
