'use server'

import {
  getCertificateStatus,
  hasPassedFinalExam,
  isCourseFullyCompleted,
} from '@/lib/certificates'
import { getCourseConfig } from '@/lib/courses-config'
import { createCertificatePreference } from '@/lib/mercadopago'
import { prisma } from '@/lib/prisma'
import { requireCustomer } from '@/lib/require-customer'

export async function createCertificateCheckoutAction(
  courseSlug: string,
  lessonSlugs: string[],
): Promise<{ error: string } | { checkoutUrl: string }> {
  const config = getCourseConfig(courseSlug)
  const customer = await requireCustomer(config.landingHref)

  const completed = await isCourseFullyCompleted(customer.id, lessonSlugs)

  if (!completed) {
    return {
      error: 'Conclua todas as aulas do curso antes de emitir o certificado.',
    }
  }

  if (config.requiresFinalExam) {
    const passedExam = await hasPassedFinalExam(customer.id, courseSlug)

    if (!passedExam) {
      return {
        error: 'Você precisa passar na prova final antes de emitir o certificado.',
      }
    }
  }

  const status = await getCertificateStatus(customer.id, courseSlug)

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
      courseSlug,
      externalReference,
      amountCents: config.priceCents,
    },
  })

  try {
    const preference = await createCertificatePreference({
      externalReference,
      payerEmail: customer.email,
      payerName: customer.name,
      title: `Certificado - ${config.title}`,
      amountCents: config.priceCents,
      returnPath: `${config.landingHref}/certificado`,
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
