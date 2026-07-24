import 'dotenv/config'
import { readFile } from 'node:fs/promises'
import { PrismaClient } from '@prisma/client'
import {
  fetchMarketplacePage,
  formatBRL,
  parsePrimaryProductCard,
  runPool,
} from './lib/marketplace-utils.mjs'

const prisma = new PrismaClient()
const dryRun = process.argv.includes('--dry-run')
const TARGET_COUNT = 20
const INPUT_FILE = new URL('../bestsellers-links.txt', import.meta.url)

async function readAffiliateLinks() {
  const content = await readFile(INPUT_FILE, 'utf8').catch(() => {
    throw new Error(
      `Arquivo não encontrado: ${INPUT_FILE.pathname}. Crie-o com uma URL de afiliado por linha.`,
    )
  })

  return content
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

async function main() {
  const affiliateLinks = await readAffiliateLinks()
  const rows = []

  await runPool(affiliateLinks, 4, async (affiliate) => {
    try {
      const html = await fetchMarketplacePage(affiliate)
      const marketplace = parsePrimaryProductCard(html)

      rows.push({
        title: marketplace.title,
        category: 'Mais vendidos',
        price: formatBRL(marketplace.currentPrice),
        oldPrice: formatBRL(marketplace.previousPrice),
        discount: `-${marketplace.discount}%`,
        image: marketplace.image || '🛒',
        rating: 0,
        store: 'Mercado Livre',
        installments: marketplace.installments || 'Consulte o parcelamento no anúncio',
        shipping: 'Consulte o frete no anúncio',
        affiliate,
      })

      console.log(`[ok] ${marketplace.title} — ${formatBRL(marketplace.currentPrice)}`)
    } catch (error) {
      console.error(
        `[falha] ${affiliate}: ${error instanceof Error ? error.message : error}`,
      )
    }
  })

  if (rows.length < TARGET_COUNT) {
    throw new Error(
      `Apenas ${rows.length} de ${affiliateLinks.length} produtos foram lidos com sucesso (esperado ${TARGET_COUNT}). Catálogo não foi alterado.`,
    )
  }

  const selected = rows
    .sort((a, b) => Number(a.price.replace(/\D/g, '')) - Number(b.price.replace(/\D/g, '')))
    .slice(0, TARGET_COUNT)

  if (dryRun) {
    console.log(JSON.stringify(selected, null, 2))
    console.log(`Simulação: ${selected.length} produtos seriam publicados.`)
    return
  }

  await prisma.$transaction([
    prisma.product.deleteMany(),
    prisma.product.createMany({ data: selected }),
  ])

  console.log(`Catálogo atualizado com ${selected.length} produtos.`)
}

main()
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
