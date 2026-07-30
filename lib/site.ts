export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Vitalino Tech'
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://techofertas-v1.vercel.app'
).replace(/\/$/, '')
export const SITE_DESCRIPTION =
  'Produtos de informática selecionados com acesso direto aos anúncios no Mercado Livre, assistência técnica especializada e curso gratuito de segurança da informação.'
export const SITE_OG_IMAGE = `${SITE_URL}/banner-produtos-destaque.jpg`

function resolveSessionCookieDomain() {
  try {
    const hostname = new URL(SITE_URL).hostname

    if (hostname === 'localhost' || hostname.endsWith('.vercel.app')) {
      return undefined
    }

    return `.${hostname.replace(/^www\./, '')}`
  } catch {
    return undefined
  }
}

// Prefixed with a dot so the session cookie is shared between the apex
// domain and the www subdomain, instead of being locked to whichever host
// the user happened to log in on.
export const SESSION_COOKIE_DOMAIN = resolveSessionCookieDomain()
