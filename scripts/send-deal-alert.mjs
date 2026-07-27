import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { sendDealAlertToSubscribers } from './lib/deal-alert-utils.mjs'

const prisma = new PrismaClient()
const dryRun = process.argv.includes('--dry-run')

sendDealAlertToSubscribers(prisma, { dryRun })
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
