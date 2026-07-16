import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const dryRun = process.argv.includes('--dry-run')
const verbose = process.argv.includes('--verbose')
const requestHeaders = {
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.7',
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/140.0 Safari/537.36',
}

function decodeJsonString(value) {
  try {
    return JSON.parse(`"${value}"`)
  } catch {
    return value
  }
}

function normalizeWords(value) {
  return new Set(
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .split(' ')
      .filter((word) => word.length > 1),
  )
}

function titleScore(expectedTitle, receivedTitle) {
  const expectedWords = normalizeWords(expectedTitle)
  const receivedWords = normalizeWords(receivedTitle)
  let matchedWeight = 0
  let totalWeight = 0

  for (const word of expectedWords) {
    const weight = /\d/.test(word) ? 3 : word.length >= 6 ? 2 : 1
    const fuzzyNumberMatch =
      word.length >= 2 &&
      /\d/.test(word) &&
      [...receivedWords].some(
        (receivedWord) =>
          receivedWord.startsWith(word) || word.startsWith(receivedWord),
      )

    totalWeight += weight
    if (receivedWords.has(word) || fuzzyNumberMatch) matchedWeight += weight
  }

  return totalWeight ? matchedWeight / totalWeight : 0
}

function identifierWords(value) {
  return [...normalizeWords(value)].filter((word) =>
    /^\d+(?:gb|tb|mb|hz|khz|mhz|ghz|mah|w|v)$/.test(word),
  )
}

function hasIdentifier(receivedWords, identifier) {
  return (
    receivedWords.has(identifier) ||
    [...receivedWords].some(
      (word) => word.startsWith(identifier) || identifier.startsWith(word),
    )
  )
}

function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
    .format(value)
    .replace(/\u00a0/g, ' ')
}

function parseCard(card) {
  const itemId = card.match(/"id":"(MLB\d+)"/)?.[1]
  const rawUrl = card.match(
    /"metadata":\{.*?"url":"((?:\\.|[^"\\])*)"/,
  )?.[1]
  const rawTitle = card.match(
    /"type":"title","id":"title","title":\{"text":"((?:\\.|[^"\\])*)"/,
  )?.[1]
  const priceStart = card.indexOf('"type":"price","id":"price"')

  if (!itemId || !rawTitle || priceStart < 0) return null

  const priceBlock = card.slice(priceStart, priceStart + 5_000)
  const currentMatch = priceBlock.match(
    /"current_price":\{"value":([0-9]+(?:\.[0-9]+)?),"currency":"([A-Z]{3})"/,
  )

  if (!currentMatch || currentMatch[2] !== 'BRL') return null

  const currentPrice = Number(currentMatch[1])
  const previousPrice = Number(
    priceBlock.match(
      /"previous_price":\{"value":([0-9]+(?:\.[0-9]+)?),"currency":"BRL"/,
    )?.[1] || currentPrice,
  )
  const installmentCount = Number(
    priceBlock.match(/"installments":\{"text":"[^"]*?(\d+)x/)?.[1] || 0,
  )
  const installmentPrice = Number(
    priceBlock.match(
      /"key":"price","type":"price","price":\{"value":([0-9]+(?:\.[0-9]+)?),"currency":"BRL"/,
    )?.[1] || 0,
  )
  const discount =
    previousPrice > currentPrice
      ? Math.round(((previousPrice - currentPrice) / previousPrice) * 100)
      : 0

  return {
    itemId,
    title: decodeJsonString(rawTitle),
    searchText: `${decodeJsonString(rawTitle)} ${decodeJsonString(rawUrl || '')}`,
    currentPrice,
    previousPrice,
    discount,
    installments:
      installmentCount > 0 && installmentPrice > 0
        ? `${installmentCount}x de ${formatBRL(installmentPrice)}`
        : null,
  }
}

function parseMarketplacePage(html, expectedTitle) {
  const listMarker = '"polycards":['
  const listStart = html.indexOf(listMarker)

  if (listStart < 0) {
    throw new Error('Lista de produtos não encontrada')
  }

  const list = html.slice(listStart + listMarker.length, listStart + 500_000)
  const cards = list
    .split(/\},\{"unique_id"/)
    .slice(0, 30)
    .map((card, index) => (index === 0 ? card : `{"unique_id"${card}`))
    .map(parseCard)
    .filter(Boolean)

  if (!cards.length) {
    throw new Error('Preço do produto não encontrado')
  }

  const expectedIdentifiers = identifierWords(expectedTitle)
  const rankedCards = cards
    .map((card) => {
      const receivedWords = normalizeWords(card.searchText)
      const missingIdentifiers = expectedIdentifiers.filter(
        (identifier) => !hasIdentifier(receivedWords, identifier),
      )

      return {
        ...card,
        score: titleScore(expectedTitle, card.searchText),
        missingIdentifiers,
      }
    })
    .filter((card) => card.missingIdentifiers.length === 0)
    .sort((left, right) => right.score - left.score)
  const selected = rankedCards[0]

  if (!selected || selected.score < 0.5) {
    throw new Error('Produto correspondente não encontrado')
  }

  return selected
}

function validateAffiliateUrl(value) {
  const url = new URL(value)
  const allowedHost =
    url.hostname === 'meli.la' ||
    url.hostname === 'mercadolivre.com.br' ||
    url.hostname.endsWith('.mercadolivre.com.br')

  if (url.protocol !== 'https:' || !allowedHost) {
    throw new Error('Link de afiliado fora do Mercado Livre')
  }

  return url
}

async function fetchMarketplacePage(affiliate) {
  const url = validateAffiliateUrl(affiliate)
  let lastError

  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const response = await fetch(url, {
        cache: 'no-store',
        headers: requestHeaders,
        redirect: 'follow',
        signal: AbortSignal.timeout(25_000),
      })

      if (!response.ok) {
        throw new Error(`Mercado Livre respondeu ${response.status}`)
      }

      return await response.text()
    } catch (error) {
      lastError = error
      if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 1_500))
    }
  }

  throw lastError
}

async function runPool(items, concurrency, worker) {
  let nextIndex = 0

  async function runWorker() {
    while (nextIndex < items.length) {
      const item = items[nextIndex]
      nextIndex += 1
      await worker(item)
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, runWorker),
  )
}

async function main() {
  const products = await prisma.product.findMany({
    orderBy: { id: 'asc' },
    select: {
      id: true,
      title: true,
      price: true,
      oldPrice: true,
      discount: true,
      installments: true,
      affiliate: true,
    },
  })
  const result = { synchronized: 0, updated: 0, failed: 0 }

  await runPool(products, 4, async (product) => {
    try {
      const html = await fetchMarketplacePage(product.affiliate)
      const marketplace = parseMarketplacePage(html, product.title)
      const nextValues = {
        price: formatBRL(marketplace.currentPrice),
        oldPrice: formatBRL(marketplace.previousPrice),
        discount: `-${marketplace.discount}%`,
        installments: marketplace.installments || product.installments,
      }
      const changed = Object.entries(nextValues).some(
        ([field, value]) => product[field] !== value,
      )

      if (changed && !dryRun) {
        await prisma.product.update({
          where: { id: product.id },
          data: nextValues,
        })
      }

      result.synchronized += 1
      if (changed) result.updated += 1
      console.log(
        `[${changed ? 'atualizado' : 'sem alteração'}] Produto ${product.id}: ${nextValues.price}`,
      )
      if (verbose) {
        console.log(
          `  Correspondência ${Math.round(marketplace.score * 100)}%: ${marketplace.title} (${marketplace.itemId})`,
        )
      }
    } catch (error) {
      result.failed += 1
      console.error(
        `[falha] Produto ${product.id}: ${error instanceof Error ? error.message : 'erro desconhecido'}`,
      )
    }
  })

  console.log(
    `Resumo: ${result.synchronized} sincronizados, ${result.updated} com novos valores e ${result.failed} falhas${dryRun ? ' (simulação)' : ''}.`,
  )

  if (result.synchronized === 0) process.exitCode = 1
}

main()
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
