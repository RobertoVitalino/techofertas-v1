import 'server-only'

import { getCompletedLessonSlugs } from '@/lib/course-progress'
import { prisma } from '@/lib/prisma'
import { securityCourseLessons } from '@/lib/security-course'

export async function isCourseFullyCompleted(customerId: number) {
  const completedSlugs = new Set(await getCompletedLessonSlugs(customerId))

  return securityCourseLessons.every((lesson) => completedSlugs.has(lesson.slug))
}

export type CertificateStatus =
  | { state: 'none' }
  | { state: 'pending'; checkoutUrl: string | null }
  | { state: 'issued'; verificationCode: string }

export async function getCertificateStatus(
  customerId: number,
): Promise<CertificateStatus> {
  const certificate = await prisma.certificate.findFirst({
    where: { customerId },
    select: { verificationCode: true },
  })

  if (certificate) {
    return { state: 'issued', verificationCode: certificate.verificationCode }
  }

  const pendingPurchase = await prisma.certificatePurchase.findFirst({
    where: { customerId, status: 'pending' },
    orderBy: { createdAt: 'desc' },
    select: { checkoutUrl: true },
  })

  if (pendingPurchase) {
    return { state: 'pending', checkoutUrl: pendingPurchase.checkoutUrl }
  }

  return { state: 'none' }
}

export async function getCertificateForCustomer(
  customerId: number,
  verificationCode: string,
) {
  return prisma.certificate.findFirst({
    where: { customerId, verificationCode },
  })
}

export async function getCertificateByVerificationCode(
  verificationCode: string,
) {
  return prisma.certificate.findUnique({
    where: { verificationCode },
    include: { customer: { select: { name: true } } },
  })
}
