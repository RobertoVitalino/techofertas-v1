const ALLOWED_SOURCES = new Set([
  'site',
  'produto',
  'telegram',
  'whatsapp',
  'instagram',
  'tiktok',
  'youtube',
  'pinterest',
  'facebook',
  'email',
  'google',
])

const BOT_PATTERN =
  /bot|crawler|spider|preview|facebookexternalhit|whatsapp|telegrambot|slurp|bingpreview|embedly|vercel-screenshot/i

export function normalizeClickSource(value: string | null) {
  const source = (value ?? '').trim().toLowerCase()
  return ALLOWED_SOURCES.has(source) ? source : 'site'
}

export function isLikelyBot(userAgent: string | null) {
  return !userAgent || BOT_PATTERN.test(userAgent)
}

export function trackedProductUrl(productId: number, source: string, baseUrl = '') {
  return `${baseUrl}/ir/${productId}?origem=${encodeURIComponent(source)}`
}
