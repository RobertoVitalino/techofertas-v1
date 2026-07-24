import 'server-only'

import { prisma } from '@/lib/prisma'

export async function getCompletedLessonSlugs(customerId: number) {
  const rows = await prisma.lessonProgress.findMany({
    where: { customerId },
    select: { lessonSlug: true },
  })

  return rows.map((row) => row.lessonSlug)
}
