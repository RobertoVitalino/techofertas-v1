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
  // Linhas com preço, porcentagem ou link são descartadas inteiras:
  // esses dados sempre vêm do banco, nunca da IA.
  return String(text)
    .replace(/[*_`#]/g, '')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !/https?:\/\/|R\$|\d+\s?%/i.test(line))
    .slice(0, 2)
    .join('\n')
    .slice(0, 220)
    .trim()
}

function fallbackHook(product) {
  return FALLBACK_HOOKS[product.id % FALLBACK_HOOKS.length]
}

async function requestGemini(model, apiKey, prompt, { lightThinking }) {
  const generationConfig = { temperature: 0.9, maxOutputTokens: 2048 }
  // É só uma frase curta: pedimos raciocínio mínimo para responder rápido.
  if (lightThinking) generationConfig.thinkingConfig = { thinkingLevel: 'low' }

  const response = await fetch(`${GEMINI_ENDPOINT}/${model}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
    body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig }),
    signal: AbortSignal.timeout(45_000),
  })

  if (!response.ok) {
    const body = await response.text()
    const error = new Error(`Gemini (${model}) respondeu ${response.status}: ${body.slice(0, 300)}`)
    error.status = response.status
    error.body = body
    throw error
  }

  const data = await response.json()
  // Ignora as partes de "pensamento" e fica só com a resposta final.
  return (data?.candidates?.[0]?.content?.parts ?? [])
    .filter((part) => !part.thought)
    .map((part) => part.text ?? '')
    .join('')
}

// Ordem de tentativa. Os modelos "lite" respondem em ~2 s no plano gratuito;
// os maiores vivem congestionados (erro 503). GEMINI_MODEL, se definido, vai na frente.
const DEFAULT_MODELS = ['gemini-flash-lite-latest', 'gemini-3.5-flash-lite', 'gemini-3.5-flash', 'gemini-3.8-flash']

async function callGemini(model, apiKey, prompt) {
  try {
    return await requestGemini(model, apiKey, prompt, { lightThinking: true })
  } catch (error) {
    // Modelo que não aceita a opção de raciocínio: tenta sem ela.
    if (error.status === 400 && /thinking/i.test(error.body ?? '')) {
      return requestGemini(model, apiKey, prompt, { lightThinking: false })
    }
    throw error
  }
}

// A IA escreve só a chamada. Preço, desconto e link vêm do banco,
// para nunca publicar número inventado.
export async function generateHook(product, { apiKey, model } = {}) {
  if (!apiKey) return { hook: fallbackHook(product), source: 'modelo-padrao' }

  const prompt = [
    'Você escreve chamadas curtas para um canal brasileiro de ofertas chamado Vitalino Tech.',
    'Escreva no máximo 2 linhas curtas (até 200 caracteres no total), em português do Brasil, tom animado mas honesto.',
    'Comece com 1 emoji relacionado ao produto. Destaque para quem o produto é útil.',
    'NÃO cite preço, valor, porcentagem, link, frete, estoque ou prazo. NÃO invente especificações que não estejam no título.',
    'Responda só com o texto da chamada, sem aspas.',
    '',
    `Produto: ${product.title}`,
    `Categoria: ${product.category}`,
  ].join('\n')

  const models = [...new Set([model, ...DEFAULT_MODELS].filter(Boolean))]
  const failures = []

  for (const candidate of models) {
    try {
      const hook = cleanHook(await callGemini(candidate, apiKey, prompt))
      if (!hook) throw new Error('texto vazio')
      if (failures.length) console.warn(`[aviso] Usando ${candidate}; falharam antes: ${failures.join(' | ')}`)
      return { hook, source: `gemini:${candidate}` }
    } catch (error) {
      failures.push(`${candidate}: ${error.status ?? ''} ${String(error.message).slice(0, 80)}`.trim())
    }
  }

  console.warn(`[aviso] IA indisponível, usando chamada padrão. Falhas: ${failures.join(' | ')}`)
  return { hook: fallbackHook(product), source: 'modelo-padrao' }
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
