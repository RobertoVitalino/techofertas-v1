import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import {
  fetchMarketplacePage,
  formatBRL,
  parseMarketplacePage,
  runPool,
} from './lib/marketplace-utils.mjs'

const prisma = new PrismaClient()
const dryRun = process.argv.includes('--dry-run')
const verbose = process.argv.includes('--verbose')

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
