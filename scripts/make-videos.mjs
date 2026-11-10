import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { generateHook } from './lib/offer-copy.mjs'
import { synthesizeSpeech } from './lib/tts.mjs'
import {
  imageToDataUri,
  plainText,
  renderVideo,
  saveNarration,
  sceneCta,
  sceneHook,
  scenePrice,
} from './lib/video-render.mjs'

// Gerador de vídeos curtos (Reels, TikTok, Shorts).
// Escolhe ofertas, cria a chamada (Gemini), narra (Gemini TTS), monta o vídeo
// vertical e envia para o seu Telegram privado com a legenda pronta para copiar.
//
// Uso: npm run videos:make -- --quantidade=3
//      npm run videos:make -- --dry-run   (gera os vídeos em ./videos, não envia)

const prisma = new PrismaClient()
const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const quantity = Math.min(5, Math.max(1, Number(args.find((a) => a.startsWith('--quantidade='))?.split('=')[1] ?? 3) || 3))

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const VIDEO_CHAT_ID = process.env.TELEGRAM_VIDEO_CHAT_ID
const CHANNEL_URL = process.env.NEXT_PUBLIC_TELEGRAM_CHANNEL_URL || 'https://t.me/vitalinotechofertas'
const SITE_HOST = 'vitalinotech.com.br'
const REPEAT_AFTER_DAYS = 14

function discountValue(product) {
  return Number(String(product.discount).replace(/\D/g, '')) || 0
}

// "R$ 3.149,00" -> "3149 reais"; "R$ 179,10" -> "179 reais e 10 centavos"
function priceForSpeech(value) {
  const [integer, cents = '00'] = String(value).replace(/[^\d,]/g, '').split(',')
  const reais = `${Number(integer)} reais`
  return Number(cents) > 0 ? `${reais} e ${Number(cents)} centavos` : reais
}

async function pickProducts() {
  const [products, videos] = await Promise.all([
    prisma.product.findMany({ where: { active: true } }),
    prisma.offerPost.findMany({ where: { channel: 'video' }, select: { productId: true, createdAt: true } }),
  ])
  const cutoff = Date.now() - REPEAT_AFTER_DAYS * 24 * 60 * 60 * 1000
  const recent = new Set(videos.filter((v) => v.createdAt.getTime() >= cutoff).map((v) => v.productId))
  const dropWindow = Date.now() - 48 * 60 * 60 * 1000

  return products
    .filter((product) => !recent.has(product.id) && /^https?:\/\//.test(product.image))
    .map((product) => ({ ...product, priceDrop: (product.priceDroppedAt?.getTime() ?? 0) >= dropWindow }))
    .sort((a, b) => (a.priceDrop !== b.priceDrop ? (a.priceDrop ? -1 : 1) : discountValue(b) - discountValue(a)))
    .slice(0, quantity)
}

function socialCaption(product, hook) {
  const hasDiscount = product.discount && product.discount !== '-0%' && product.oldPrice !== product.price
  return [
    hook,
    '',
    product.title,
    hasDiscount ? `💰 De ${product.oldPrice} por ${product.price} (${product.discount.replace('-', '')} OFF)` : `💰 Por ${product.price}`,
    '',
    `🔗 Link da oferta no canal do Telegram: ${CHANNEL_URL.replace(/^https?:\/\//, '')} (link na bio)`,
    'Preço e estoque podem mudar a qualquer momento.',
    '',
    '#ofertas #achadinhos #mercadolivre #promocao #descontos #tecnologia',
  ].join('\n')
}

async function sendToTelegram(file, caption) {
  const form = new FormData()
  form.append('chat_id', VIDEO_CHAT_ID)
  form.append('caption', caption.slice(0, 1000))
  form.append('supports_streaming', 'true')
  form.append('video', new Blob([await readFile(file)], { type: 'video/mp4' }), 'oferta.mp4')
  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendVideo`, {
    method: 'POST',
    body: form,
    signal: AbortSignal.timeout(120_000),
  })
  const data = await response.json().catch(() => ({}))
  if (!response.ok || !data.ok) throw new Error(`Telegram sendVideo falhou: ${data.description ?? response.status}`)
}

async function makeVideo(product, outputDir) {
  const work = await mkdtemp(join(tmpdir(), `video-${product.id}-`))
  try {
    const { hook } = await generateHook(product, { apiKey: GEMINI_API_KEY, model: process.env.GEMINI_MODEL || '' })
    const hasDiscount = product.discount && product.discount !== '-0%' && product.oldPrice !== product.price
    const speech = [
      plainText(hook),
      hasDiscount
        ? `De ${priceForSpeech(product.oldPrice)} por apenas ${priceForSpeech(product.price)}.`
        : `Por apenas ${priceForSpeech(product.price)}.`,
      'O link está no canal Vitalino Tech Ofertas, no Telegram!',
    ].join(' ')

    const imageResponse = await fetch(product.image, { signal: AbortSignal.timeout(30_000) })
    if (!imageResponse.ok) throw new Error(`foto indisponível (${imageResponse.status})`)
    const imageDataUri = await imageToDataUri(Buffer.from(await imageResponse.arrayBuffer()), work)

    const audio = await synthesizeSpeech(speech, { apiKey: GEMINI_API_KEY })
    const narration = audio ? await saveNarration(audio.base64, audio.mimeType, work) : null

    const output = join(outputDir, `oferta-${product.id}.mp4`)
    const { seconds } = await renderVideo({
      dir: work,
      output,
      narration,
      scenes: [
        { svg: sceneHook({ imageDataUri, hook: product.priceDrop ? `Baixou de preço! ${hook}` : hook }), weight: 35 },
        { svg: scenePrice({ imageDataUri, ...product }), weight: 40 },
        { svg: sceneCta({ channelUrl: CHANNEL_URL, siteHost: SITE_HOST }), weight: 25 },
      ],
    })
    return { output, seconds, hook, voice: audio?.model ?? 'sem voz' }
  } finally {
    await rm(work, { recursive: true, force: true })
  }
}

async function main() {
  if (!dryRun && (!TELEGRAM_BOT_TOKEN || !VIDEO_CHAT_ID)) {
    throw new Error('Configure TELEGRAM_BOT_TOKEN e TELEGRAM_VIDEO_CHAT_ID (seu chat privado com o robô).')
  }

  const outputDir = join(process.cwd(), 'videos')
  await (await import('node:fs/promises')).mkdir(outputDir, { recursive: true })
  const products = await pickProducts()
  if (!products.length) {
    console.log('Nenhum produto novo para vídeo hoje.')
    return
  }

  let made = 0
  for (const product of products) {
    try {
      const video = await makeVideo(product, outputDir)
      const caption = socialCaption(product, video.hook)
      console.log(`[ok] ${video.output} (${video.seconds.toFixed(1)} s, voz: ${video.voice}) — ${product.title.slice(0, 50)}`)
      if (dryRun) {
        console.log(caption)
        continue
      }
      await sendToTelegram(video.output, caption)
      await prisma.offerPost.create({
        data: { productId: product.id, productTitle: product.title, channel: 'video', text: caption },
      })
      made += 1
    } catch (error) {
      console.error(`[falha] #${product.id} ${product.title.slice(0, 50)}: ${error instanceof Error ? error.message : error}`)
    }
  }

  if (!dryRun && made === 0) process.exitCode = 1
}

main()
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
