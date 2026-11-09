import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import {
  fetchMarketplacePage,
  formatBRL,
  parseMarketplacePage,
  parsePrimaryProductCard,
  runPool,
  titleScore,
} from './lib/marketplace-utils.mjs'

// Catálogo automático.
// Para cada produto, abre o link de afiliado e lê o anúncio no Mercado Livre:
//  - atualiza preço, preço antigo, desconto e parcelamento;
//  - marca "baixou de preço" quando cai 5% ou mais (o robô do Telegram prioriza);
//  - depois de 3 verificações seguidas sem encontrar o produto, esconde do site;
//  - se o produto voltar a aparecer, reativa sozinho.
// Se mais da metade das leituras falhar (bloqueio/instabilidade do Mercado Livre),
// nenhum produto é escondido nessa rodada.
//
// Uso: npm run catalog:sync            (aplica)
//      npm run catalog:sync -- --dry-run  (só mostra)

const prisma = new PrismaClient()
const dryRun = process.argv.includes('--dry-run')
const MAX_FAILURES = Number(process.env.CATALOG_MAX_FAILURES || 3)
const PRICE_DROP_RATIO = 0.95
const MIN_TITLE_SCORE = 0.45

function parseBRL(value) {
  const number = Number(String(value ?? '').replace(/[^\d,]/g, '').replace(',', '.'))
  return Number.isFinite(number) && number > 0 ? number : null
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function checkProduct(product) {
  try {
    const html = await fetchMarketplacePage(product.affiliate)
    const primary = parsePrimaryProductCard(html)
    let card = primary

    // Normalmente o produto do link vem em 1º lugar, mas às vezes o Mercado Livre
    // destaca outro item do perfil. Nesse caso, procura o produto certo na página.
    if (titleScore(product.title, primary.title) < MIN_TITLE_SCORE) {
      try {
        card = parseMarketplacePage(html, product.title)
      } catch {
        return { product, status: 'missing', detail: `produto não está mais na página do link (1º item: ${primary.title.slice(0, 50)})` }
      }
    }
    return { product, status: 'ok', card }
  } catch (error) {
    return { product, status: 'error', detail: error instanceof Error ? error.message : String(error) }
  } finally {
    await sleep(400 + Math.random() * 800)
  }
}

async function main() {
  const products = await prisma.product.findMany({ orderBy: { id: 'asc' } })
  const results = []

  await runPool(products, 3, async (product) => {
    results.push(await checkProduct(product))
  })

  const ok = results.filter((r) => r.status === 'ok')
  const failed = results.filter((r) => r.status !== 'ok')
  const blocked = ok.length === 0 || failed.length / results.length > 0.5
  const now = new Date()
  const summary = { atualizados: 0, semMudanca: 0, baixouPreco: 0, reativados: 0, falhas: failed.length, escondidos: 0 }

  for (const { product, card } of ok) {
    const previousPrice = parseBRL(product.price)
    const discount = card.previousPrice > card.currentPrice
      ? Math.round(((card.previousPrice - card.currentPrice) / card.previousPrice) * 100)
      : 0
    const data = {
      price: formatBRL(card.currentPrice),
      oldPrice: formatBRL(Math.max(card.previousPrice, card.currentPrice)),
      discount: `-${discount}%`,
      installments: card.installments || product.installments,
      active: true,
      syncFailures: 0,
      lastSyncedAt: now,
    }
    const dropped = previousPrice !== null && card.currentPrice <= previousPrice * PRICE_DROP_RATIO
    if (dropped) data.priceDroppedAt = now

    const changed = ['price', 'oldPrice', 'discount'].some((field) => product[field] !== data[field])
    if (changed) summary.atualizados += 1
    else summary.semMudanca += 1
    if (dropped) summary.baixouPreco += 1
    if (!product.active) summary.reativados += 1

    const tag = dropped ? '📉 baixou' : changed ? 'atualizado' : 'sem mudança'
    console.log(`[${tag}] #${product.id} ${product.price} -> ${data.price} | ${product.title.slice(0, 50)}`)

    if (!dryRun) await prisma.product.update({ where: { id: product.id }, data })
  }

  for (const { product, status, detail } of failed) {
    console.warn(`[${status === 'missing' ? 'não encontrado' : 'erro'}] #${product.id} ${product.title.slice(0, 50)}: ${detail}`)
    if (blocked) continue

    const syncFailures = product.syncFailures + 1
    const hide = product.active && syncFailures >= MAX_FAILURES
    if (hide) {
      summary.escondidos += 1
      console.warn(`  -> escondido do site após ${syncFailures} verificações sem sucesso`)
    }
    if (!dryRun) {
      await prisma.product.update({
        where: { id: product.id },
        data: { syncFailures, ...(hide ? { active: false } : {}) },
      })
    }
  }

  console.log(
    `\nResumo${dryRun ? ' (simulação)' : ''}: ${ok.length}/${results.length} lidos | ` +
      `${summary.atualizados} atualizados, ${summary.semMudanca} sem mudança, ${summary.baixouPreco} baixaram de preço, ` +
      `${summary.reativados} reativados, ${summary.falhas} falhas, ${summary.escondidos} escondidos.`,
  )

  if (blocked) {
    console.error(
      'Mais da metade das leituras falhou: provável bloqueio ou instabilidade do Mercado Livre. ' +
        'Nenhum produto foi escondido nesta rodada.',
    )
    process.exitCode = 1
  }
}

main()
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
