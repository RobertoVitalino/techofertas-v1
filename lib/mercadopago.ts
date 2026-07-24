import 'server-only'

const MERCADOPAGO_API = 'https://api.mercadopago.com'
const DEFAULT_CERTIFICATE_PRICE_CENTS = 2990

function getAccessToken() {
  const token = process.env.MERCADOPAGO_ACCESS_TOKEN

  if (!token) {
    throw new Error('MERCADOPAGO_ACCESS_TOKEN must be configured')
  }

  return token
}

function getWebhookSecret() {
  const secret = process.env.MERCADOPAGO_WEBHOOK_SECRET

  if (!secret) {
    throw new Error('MERCADOPAGO_WEBHOOK_SECRET must be configured')
  }

  return secret
}

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
}

export function getCertificatePriceCents() {
  const raw = Number(process.env.CERTIFICATE_PRICE_CENTS)

  return Number.isSafeInteger(raw) && raw > 0
    ? raw
    : DEFAULT_CERTIFICATE_PRICE_CENTS
}

export async function createCertificatePreference({
  externalReference,
  payerEmail,
  payerName,
}: {
  externalReference: string
  payerEmail: string
  payerName: string
}) {
  const siteUrl = getSiteUrl()

  const response = await fetch(`${MERCADOPAGO_API}/checkout/preferences`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
    body: JSON.stringify({
      items: [
        {
          title: 'Certificado - Curso de Segurança da Informação',
          quantity: 1,
          currency_id: 'BRL',
          unit_price: getCertificatePriceCents() / 100,
        },
      ],
      payer: { email: payerEmail, name: payerName },
      external_reference: externalReference,
      back_urls: {
        success: `${siteUrl}/curso-seguranca-da-informacao/certificado?status=success`,
        pending: `${siteUrl}/curso-seguranca-da-informacao/certificado?status=pending`,
        failure: `${siteUrl}/curso-seguranca-da-informacao/certificado?status=failure`,
      },
      auto_return: 'approved',
      notification_url: `${siteUrl}/api/mercadopago/webhook`,
    }),
  })

  if (!response.ok) {
    const bodyText = await response.text()

    throw new Error(
      `Mercado Pago preference creation failed with status ${response.status}: ${bodyText}`,
    )
  }

  return response.json() as Promise<{ id: string; init_point: string }>
}

export async function fetchMercadoPagoPayment(paymentId: string) {
  const response = await fetch(`${MERCADOPAGO_API}/v1/payments/${paymentId}`, {
    headers: { Authorization: `Bearer ${getAccessToken()}` },
  })

  if (!response.ok) {
    throw new Error(
      `Mercado Pago payment lookup failed with status ${response.status}`,
    )
  }

  return response.json() as Promise<{
    id: number
    status: string
    external_reference: string | null
  }>
}

function toHex(bytes: ArrayBuffer) {
  return Array.from(new Uint8Array(bytes), (byte) =>
    byte.toString(16).padStart(2, '0'),
  ).join('')
}

function safeEqual(left: string, right: string) {
  if (left.length !== right.length) return false

  let difference = 0

  for (let index = 0; index < left.length; index += 1) {
    difference |= left.charCodeAt(index) ^ right.charCodeAt(index)
  }

  return difference === 0
}

/**
 * Mercado Pago signs webhooks as `x-signature: ts=<unix>,v1=<hmac>`, where the
 * HMAC-SHA256 is computed over `id:<data.id>;request-id:<x-request-id>;ts:<ts>;`
 * using the integration's webhook secret (per Mercado Pago's documented scheme).
 */
export async function verifyMercadoPagoWebhookSignature({
  signatureHeader,
  requestId,
  dataId,
}: {
  signatureHeader: string | null
  requestId: string | null
  dataId: string
}) {
  if (!signatureHeader || !requestId || !dataId) return false

  const parts = new Map(
    signatureHeader.split(',').map((part) => {
      const [key, value] = part.split('=').map((piece) => piece.trim())

      return [key, value] as const
    }),
  )

  const ts = parts.get('ts')
  const receivedSignature = parts.get('v1')

  if (!ts || !receivedSignature) return false

  const manifest = `id:${dataId};request-id:${requestId};ts:${ts};`

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(getWebhookSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const signatureBytes = await crypto.subtle.sign(
    'HMAC',
    key,
    new TextEncoder().encode(manifest),
  )
  const expectedSignature = toHex(signatureBytes)

  return safeEqual(expectedSignature, receivedSignature)
}
