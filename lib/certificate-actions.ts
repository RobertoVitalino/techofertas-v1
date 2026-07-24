'use server'

import { getCertificateStatus, isCourseFullyCompleted } from '@/lib/certificates'
import {
  createCertificatePreference,
  getCertificatePriceCents,
} from '@/lib/mercadopago'
import { prisma } from '@/lib/prisma'
import { requireCustomer } from '@/lib/require-customer'

export async function createCertificateCheckoutAction(): Promise<
  | { error: string }
  | { checkoutUrl: string }
> {
  const customer = await requireCustomer('/curso-seguranca-da-informacao')

  const completed = await isCourseFullyCompleted(customer.id)

  if (!completed) {
    return {
      error: 'Conclua todas as aulas do curso antes de emitir o certificado.',
    }
  }

  const status = await getCertificateStatus(customer.id)

  if (status.state === 'issued') {
    return { error: 'Você já possui um certificado emitido.' }
  }

  if (status.state === 'pending' && status.checkoutUrl) {
    return { checkoutUrl: status.checkoutUrl }
  }

  const externalReference = crypto.randomUUID()

  const purchase = await prisma.certificatePurchase.create({
    data: {
      customerId: customer.id,
      externalReference,
      amountCents: getCertificatePriceCents(),
    },
  })

  try {
    const preference = await createCertificatePreference({
      externalReference,
      payerEmail: customer.email,
      payerName: customer.name,
    })

    await prisma.certificatePurchase.update({
      where: { id: purchase.id },
      data: {
        mpPreferenceId: preference.id,
        checkoutUrl: preference.init_point,
      },
    })

    return { checkoutUrl: preference.init_point }
  } catch (error) {
    console.error('Failed to create Mercado Pago preference', error)

    await prisma.certificatePurchase.update({
      where: { id: purchase.id },
      data: { status: 'cancelled' },
    })

    return {
      error:
        'Não foi possível iniciar o pagamento agora. Tente novamente em instantes.',
    }
  }
}
