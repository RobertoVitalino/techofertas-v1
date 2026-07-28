import { prisma } from '@/lib/prisma'

export async function isEnrolledInCourse(customerId: number, courseSlug: string) {
  const enrollment = await prisma.courseEnrollment.findUnique({
    where: { customerId_courseSlug: { customerId, courseSlug } },
  })

  return Boolean(enrollment)
}
