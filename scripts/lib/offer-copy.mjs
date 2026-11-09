// Gera o texto das ofertas (Gemini) e monta as mensagens de Telegram e WhatsApp.

const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models'

const FALLBACK_HOOKS = [
  'Oferta boa que vale conferir antes de acabar!',
  'Preço caiu: dá uma olhada nessa!',
  'Achado do dia para quem estava esperando baixar.',
  'Desconto real no Mercado Livre, confira.',
]

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function cleanHook(text) {
  return String(text)
    .replace(/https?:\/\/\S+/g, '')
    .replace(/R\$\s?[\d.,]+/g, '')
    .replace(/[*_`#]/g, '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 2)
    .join('\n')
    .slice(0, 220)
    .trim()
}

function fallbackHook(product) {
  return FALLBACK_HOOKS[product.id % FALLBACK_HOOKS.length]
}

// A IA escreve só a chamada. Preço, desconto e link vêm do banco,
// para nunca publicar número inventado.
export async function generateHook(product, { apiKey, model } = {}) {
  if (!apiKey) return { hook: fallbackHook(product), source: 'modelo-padrao' }

  const prompt = [
    'Você escreve chamadas curtas para um canal brasileiro de ofertas de tecnologia chamado Vitalino Tech.',
    'Escreva no máximo 2 linhas curtas (até 200 caracteres no total), em português do Brasil, tom animado mas honesto.',
    'Comece com 1 emoji relacionado ao produto. Destaque para quem o produto é útil.',
    'NÃO cite preço, valor, porcentagem, link, frete, estoque ou prazo. NÃO invente especificações que não estejam no título.',
    'Responda só com o texto da chamada, sem aspas.',
    '',
    `Produto: ${product.title}`,
    `Categoria: ${product.category}`,
  ].join('\n')

  try {
    const response = await fetch(`${GEMINI_ENDPOINT}/${model}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.9, maxOutputTokens: 200 },
      }),
      signal: AbortSignal.timeout(30_000),
    })

    if (!response.ok) {
      const body = await response.text()
      throw new Error(`Gemini respondeu ${response.status}: ${body.slice(0, 300)}`)
    }

    const data = await response.json()
    const text = data?.candidates?.[0]?.content?.parts?.map((part) => part.text ?? '').join('') ?? ''
    const hook = cleanHook(text)
    if (!hook) throw new Error('Gemini retornou texto vazio')
    return { hook, source: 'gemini' }
  } catch (error) {
    console.warn(`[aviso] IA indisponível, usando chamada padrão: ${error instanceof Error ? error.message : error}`)
    return { hook: fallbackHook(product), source: 'modelo-padrao' }
  }
}

function hasDiscount(product) {
  return product.discount && product.discount !== '-0%' && product.oldPrice && product.oldPrice !== product.price
}

function hasInstallments(product) {
  return product.installments && !/consulte/i.test(product.installments)
}

export function buildTelegramCaption(product, hook) {
  const lines = [`<b>${escapeHtml(hook)}</b>`, '', `📦 ${escapeHtml(product.title)}`]

  lines.push(
    hasDiscount(product)
      ? `💰 De <s>${escapeHtml(product.oldPrice)}</s> por <b>${escapeHtml(product.price)}</b> (${escapeHtml(product.discount.replace('-', ''))} OFF)`
      : `💰 Por <b>${escapeHtml(product.price)}</b>`,
  )
  if (hasInstallments(product)) lines.push(`💳 ${escapeHtml(product.installments)}`)
  lines.push('', '<i>Preço e estoque podem mudar a qualquer momento. Link de afiliado.</i>')

  return lines.join('\n').slice(0, 1000)
}

export function buildWhatsAppText(product, hook, link) {
  const lines = [`*${hook.replace(/\*/g, '')}*`, '', `📦 ${product.title}`]

  lines.push(
    hasDiscount(product)
      ? `💰 De ~${product.oldPrice}~ por *${product.price}* (${product.discount.replace('-', '')} OFF)`
      : `💰 Por *${product.price}*`,
  )
  if (hasInstallments(product)) lines.push(`💳 ${product.installments}`)
  lines.push('', `🛒 Comprar: ${link}`, '', '_Preço e estoque podem mudar a qualquer momento._')

  return lines.join('\n')
}

// Fotos do Mercado Livre vêm em .webp; o Telegram aceita melhor .jpg.
export function telegramPhotoUrl(image) {
  if (!/^https?:\/\//.test(image ?? '')) return null
  return image.replace(/\.webp(\?.*)?$/i, '.jpg')
}
