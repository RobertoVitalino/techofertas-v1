import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import {
  buildTelegramCaption,
  buildWhatsAppText,
  generateHook,
  telegramPhotoUrl,
} from './lib/offer-copy.mjs'

// Robô do canal de ofertas.
// Escolhe ofertas do catálogo, gera a chamada com IA (Gemini), publica no
// Telegram e salva a mensagem pronta para o WhatsApp em /admin/ofertas.
//
// Uso:
//   npm run offers:post                 -> publica 1 oferta
//   npm run offers:post -- --quantidade=3
//   npm run offers:post -- --dry-run    -> só mostra, não publica nem salva

const prisma = new PrismaClient()
const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const quantity = Math.min(
  10,
  Math.max(1, Number(args.find((arg) => arg.startsWith('--quantidade='))?.split('=')[1] ?? 1) || 1),
)

const SITE_URL = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vitalinotech.com.br')
  .replace(/\/$/, '')
  .replace('techofertas-v1.vercel.app', 'www.vitalinotech.com.br')
const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const GEMINI_MODEL = process.env.GEMINI_MODEL || ''
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID
const REPOST_AFTER_DAYS = Number(process.env.OFFER_REPOST_AFTER_DAYS || 4)

function discountValue(product) {
  return Number(String(product.discount).replace(/\D/g, '')) || 0
}

function trackedLink(productId, source) {
  return `${SITE_URL}/ir/${productId}?origem=${source}`
}

async function pickProducts() {
  const [products, recentPosts] = await Promise.all([
    prisma.product.findMany(),
    prisma.offerPost.findMany({
      where: { channel: 'telegram' },
      orderBy: { createdAt: 'desc' },
      select: { productId: true, createdAt: true },
    }),
  ])

  const lastPostedAt = new Map()
  for (const post of recentPosts) {
    if (!lastPostedAt.has(post.productId)) lastPostedAt.set(post.productId, post.createdAt)
  }

  const cutoff = Date.now() - REPOST_AFTER_DAYS * 24 * 60 * 60 * 1000

  // Prioridade: nunca publicados > publicados há mais tempo; dentro disso, maior desconto.
  return products
    .filter((product) => {
      const last = lastPostedAt.get(product.id)
      return !last || last.getTime() < cutoff
    })
    .sort((a, b) => {
      const aLast = lastPostedAt.get(a.id)?.getTime() ?? 0
      const bLast = lastPostedAt.get(b.id)?.getTime() ?? 0
      if (aLast !== bLast) return aLast - bLast
      return discountValue(b) - discountValue(a)
    })
    .slice(0, quantity)
}

async function telegram(method, payload) {
  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(30_000),
  })
  const data = await response.json().catch(() => ({}))
  if (!response.ok || !data.ok) {
    throw new Error(`Telegram ${method} falhou: ${data.description ?? response.status}`)
  }
  return data
}

async function postToTelegram(product, caption) {
  const reply_markup = {
    inline_keyboard: [[{ text: '🛒 Ver oferta no Mercado Livre', url: trackedLink(product.id, 'telegram') }]],
  }
  const photo = telegramPhotoUrl(product.image)

  if (photo) {
    try {
      return await telegram('sendPhoto', {
        chat_id: TELEGRAM_CHANNEL_ID,
        photo,
        caption,
        parse_mode: 'HTML',
        reply_markup,
      })
    } catch (error) {
      console.warn(`[aviso] Foto recusada, publicando só o texto: ${error.message}`)
    }
  }

  return telegram('sendMessage', {
    chat_id: TELEGRAM_CHANNEL_ID,
    text: caption,
    parse_mode: 'HTML',
    reply_markup,
  })
}

async function main() {
  if (!dryRun && (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHANNEL_ID)) {
    throw new Error('Configure TELEGRAM_BOT_TOKEN e TELEGRAM_CHANNEL_ID no .env (ou nos Secrets do GitHub).')
  }

  const products = await pickProducts()
  if (products.length === 0) {
    console.log(`Nenhuma oferta disponível: todas foram publicadas nos últimos ${REPOST_AFTER_DAYS} dias.`)
    return
  }

  for (const product of products) {
    const { hook, source } = await generateHook(product, { apiKey: GEMINI_API_KEY, model: GEMINI_MODEL })
    const caption = buildTelegramCaption(product, hook)
    const whatsapp = buildWhatsAppText(product, hook, trackedLink(product.id, 'whatsapp'))

    if (dryRun) {
      console.log(`\n=== [simulação] #${product.id} (chamada: ${source}) ===`)
      console.log('--- Telegram ---\n' + caption)
      console.log('--- WhatsApp ---\n' + whatsapp)
      continue
    }

    await postToTelegram(product, caption)
    await prisma.offerPost.createMany({
      data: [
        { productId: product.id, productTitle: product.title, channel: 'telegram', text: caption },
        { productId: product.id, productTitle: product.title, channel: 'whatsapp', text: whatsapp },
      ],
    })
    console.log(`[ok] Publicado: ${product.title} (chamada: ${source})`)
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
