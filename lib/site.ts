export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Vitalino Tech'
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://techofertas-v1.vercel.app'
).replace(/\/$/, '')
export const SITE_DESCRIPTION =
  'Produtos de informática selecionados com acesso direto aos anúncios no Mercado Livre, assistência técnica especializada e curso gratuito de segurança da informação.'
export const SITE_OG_IMAGE = `${SITE_URL}/banner-produtos-destaque.jpg`
