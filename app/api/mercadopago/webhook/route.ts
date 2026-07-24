import {
  getRequestIp,
  isAuthRateLimited,
  recordAuthAttempt,
  writeSecurityEvent,
} from '@/lib/auth-rate-limit'
import {
  fetchMercadoPagoPayment,
  verifyMercadoPagoWebhookSignature,
} from '@/lib/mercadopago'
import { prisma } from '@/lib/prisma'

function mapMercadoPagoStatus(mpStatus: string) {
  switch (mpStatus) {
    case 'approved':
      return 'approved'
    case 'rejected':
      return 'rejected'
    case 'cancelled':
      return 'cancelled'
    default:
      return 'pending'
  }
}

function generateVerificationCode() {
  return crypto.randomUUID().replace(/-/g, '').slice(0, 16).toUpperCase()
}

export async function POST(request: Request) {
  const url = new URL(request.url)
  const requestId = request.headers.get('x-request-id')
  const signatureHeader = request.headers.get('x-signature')

  let body: { type?: string; topic?: string; data?: { id?: string } } = {}

  try {
    body = await request.json()
  } catch {
    body = {}
  }

  const paymentId =
    url.searchParams.get('data.id') ||
    url.searchParams.get('id') ||
    body.data?.id ||
    ''
  const topic =
    url.searchParams.get('type') ||
    url.searchParams.get('topic') ||
    body.type ||
    body.topic ||
    ''

  const ip = await getRequestIp()
  const rateLimitConfig = {
    scope: 'mp-webhook' as const,
    subject: paymentId || 'unknown',
    ip,
    limit: 60,
    windowSeconds: 60,
    blockSeconds: 120,
  }

  if (await isAuthRateLimited(rateLimitConfig)) {
    return new Response('Too Many Requests', { status: 429 })
  }

  await recordAuthAttempt(rateLimitConfig)

  if (topic !== 'payment' || !paymentId) {
    return new Response('OK', { status: 200 })
  }

  const signatureValid = await verifyMercadoPagoWebhookSignature({
    signatureHeader,
    requestId,
    dataId: paymentId,
  })

  if (!signatureValid) {
    await writeSecurityEvent({ kind: 'mp-webhook', success: false, ip })

    return new Response('Invalid signature', { status: 401 })
  }

  try {
    const payment = await fetchMercadoPagoPayment(paymentId)

    if (!payment.external_reference) {
      return new Response('OK', { status: 200 })
    }

    const purchase = await prisma.certificatePurchase.findUnique({
      where: { externalReference: payment.external_reference },
    })

    if (!purchase) {
      return new Response('OK', { status: 200 })
    }

    const status = mapMercadoPagoStatus(payment.status)

    await prisma.certificatePurchase.update({
      where: { id: purchase.id },
      data: { status, mpPaymentId: String(payment.id) },
    })

    if (status === 'approved') {
      const existingCertificate = await prisma.certificate.findUnique({
        where: { purchaseId: purchase.id },
      })

      if (!existingCertificate) {
        await prisma.certificate.create({
          data: {
            customerId: purchase.customerId,
            purchaseId: purchase.id,
            verificationCode: generateVerificationCode(),
          },
        })
      }
    }

    await writeSecurityEvent({ kind: 'mp-webhook', success: true, ip })

    return new Response('OK', { status: 200 })
  } catch (error) {
    console.error('Mercado Pago webhook processing failed', error)
    await writeSecurityEvent({ kind: 'mp-webhook', success: false, ip })

    return new Response('Internal Error', { status: 500 })
  }
}
