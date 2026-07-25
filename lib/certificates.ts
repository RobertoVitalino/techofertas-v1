import 'server-only'

import { getCompletedLessonSlugs } from '@/lib/course-progress'
import { prisma } from '@/lib/prisma'

export async function isCourseFullyCompleted(
  customerId: number,
  lessonSlugs: string[],
) {
  const completedSlugs = new Set(await getCompletedLessonSlugs(customerId))

  return lessonSlugs.every((slug) => completedSlugs.has(slug))
}

export async function hasPassedFinalExam(customerId: number, courseSlug: string) {
  const attempt = await prisma.examAttempt.findFirst({
    where: { customerId, courseSlug, passed: true },
  })

  return attempt !== null
}

export type CertificateStatus =
  | { state: 'none' }
  | { state: 'pending'; checkoutUrl: string | null }
  | { state: 'issued'; verificationCode: string }

export async function getCertificateStatus(
  customerId: number,
  courseSlug: string,
): Promise<CertificateStatus> {
  const certificate = await prisma.certificate.findFirst({
    where: { customerId, courseSlug },
    select: { verificationCode: true },
  })

  if (certificate) {
    return { state: 'issued', verificationCode: certificate.verificationCode }
  }

  const pendingPurchase = await prisma.certificatePurchase.findFirst({
    where: { customerId, courseSlug, status: 'pending' },
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
