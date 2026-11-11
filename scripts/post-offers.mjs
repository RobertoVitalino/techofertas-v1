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
//   npm run offers:post -- --loop       -> modo contínuo: 1 post por hora o dia todo

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
    prisma.product.findMany({ where: { active: true } }),
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
  const dropWindow = Date.now() - 48 * 60 * 60 * 1000
  const minGap = Date.now() - 24 * 60 * 60 * 1000

  // "Baixou de preço" nas últimas 48 h e ainda não divulgado depois da queda
  // (respeitando ao menos 24 h desde o último post do mesmo produto).
  const isFreshDrop = (product) => {
    const droppedAt = product.priceDroppedAt?.getTime()
    if (!droppedAt || droppedAt < dropWindow) return false
    const last = lastPostedAt.get(product.id)?.getTime()
    return !last || (last < droppedAt && last < minGap)
  }

  // Prioridade: baixou de preço > nunca publicados > publicados há mais tempo;
  // em cada grupo, maior desconto primeiro.
  return products
    .map((product) => ({ ...product, priceDrop: isFreshDrop(product) }))
    .filter((product) => {
      if (product.priceDrop) return true
      const last = lastPostedAt.get(product.id)
      return !last || last.getTime() < cutoff
    })
    .sort((a, b) => {
      if (a.priceDrop !== b.priceDrop) return a.priceDrop ? -1 : 1
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

async function publishBatch() {
  const products = await pickProducts()
  if (products.length === 0) {
    console.log(`Nenhuma oferta disponível: todas foram publicadas nos últimos ${REPOST_AFTER_DAYS} dias.`)
    return 0
  }

  let published = 0
  for (const product of products) {
    const { hook, source } = await generateHook(product, { apiKey: GEMINI_API_KEY, model: GEMINI_MODEL })
    const caption = buildTelegramCaption(product, hook, { priceDrop: product.priceDrop })
    const whatsapp = buildWhatsAppText(product, hook, trackedLink(product.id, 'whatsapp'), { priceDrop: product.priceDrop })

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
    published += 1
    console.log(`[ok] ${new Date().toISOString()} Publicado${product.priceDrop ? ' (baixou de preço)' : ''}: ${product.title} (chamada: ${source})`)
  }
  return published
}

// ---------- Modo contínuo (--loop) ----------
// O agendador do GitHub atrasa ou pula execuções frequentes. No modo contínuo,
// uma única execução publica 1 oferta por hora (às hh:37, das 8h às 22h de MS)
// e, perto do limite de 6 h do GitHub, avisa para iniciar a próxima.
const TIME_ZONE = 'America/Campo_Grande'
const FIRST_HOUR = Number(process.env.OFFER_FIRST_HOUR || 8)
const LAST_HOUR = Number(process.env.OFFER_LAST_HOUR || 22)
const SLOT_MINUTE = 37
const MIN_GAP_MS = 50 * 60 * 1000 // evita post duplicado se duas execuções se cruzarem
const LOOP_BUDGET_MS = (5 * 60 + 35) * 60 * 1000

function localClock(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: TIME_ZONE, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(date)
  const get = (type) => Number(parts.find((part) => part.type === type)?.value)
  return { hour: get('hour'), minute: get('minute') }
}

// Milissegundos até o próximo horário de post (hh:37), ou null se já passou o último do dia.
function msUntilNextSlot(now = new Date()) {
  const { hour, minute } = localClock(now)
  let targetHour = minute < SLOT_MINUTE ? hour : hour + 1
  if (targetHour < FIRST_HOUR) targetHour = FIRST_HOUR
  if (targetHour > LAST_HOUR) return null
  const minutesAhead = (targetHour - hour) * 60 + (SLOT_MINUTE - minute)
  return Math.max(0, minutesAhead * 60 * 1000 - now.getSeconds() * 1000)
}

async function lastTelegramPostAt() {
  const last = await prisma.offerPost.findFirst({ where: { channel: 'telegram' }, orderBy: { createdAt: 'desc' } })
  return last?.createdAt ?? null
}

async function publishIfDue() {
  const { hour } = localClock()
  if (hour < FIRST_HOUR || hour > LAST_HOUR) {
    console.log('Fora do horário de posts (8h às 22h37).')
    return
  }
  // Erros de rede/banco num horário não derrubam o turno: tenta de novo na próxima hora.
  try {
    const last = await lastTelegramPostAt()
    if (last && Date.now() - last.getTime() < MIN_GAP_MS) {
      console.log(`[pulo] Último post foi há ${Math.round((Date.now() - last.getTime()) / 60000)} min.`)
      return
    }
    await publishBatch()
  } catch (error) {
    console.error(`[falha] ${error instanceof Error ? error.message : error}`)
  }
}

async function setOutput(name, value) {
  if (!process.env.GITHUB_OUTPUT) return
  const { appendFile } = await import('node:fs/promises')
  await appendFile(process.env.GITHUB_OUTPUT, `${name}=${value}\n`)
}

async function loop() {
  const started = Date.now()
  await publishIfDue()

  while (true) {
    const wait = msUntilNextSlot()
    if (wait === null) {
      console.log('Fim dos horários de hoje. Até amanhã!')
      return
    }
    if (Date.now() - started + wait > LOOP_BUDGET_MS) {
      console.log('Perto do limite de 6 h do GitHub: pedindo uma nova execução para continuar.')
      await setOutput('continue', 'true')
      return
    }
    console.log(`Próximo post em ${Math.round(wait / 60000)} min.`)
    await new Promise((resolve) => setTimeout(resolve, wait + 5_000))
    await publishIfDue()
  }
}

async function main() {
  if (!dryRun && (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHANNEL_ID)) {
    throw new Error('Configure TELEGRAM_BOT_TOKEN e TELEGRAM_CHANNEL_ID no .env (ou nos Secrets do GitHub).')
  }
  if (args.includes('--loop')) return loop()
  await publishBatch()
}

main()
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
