'use server'

import { prisma } from '@/lib/prisma'
import { getCurrentCustomer } from '@/lib/require-customer'

export async function markLessonCompleteAction(lessonSlug: string) {
  const customer = await getCurrentCustomer()

  if (!customer) return

  await prisma.lessonProgress.upsert({
    where: { customerId_lessonSlug: { customerId: customer.id, lessonSlug } },
    create: { customerId: customer.id, lessonSlug },
    update: {},
  })
}
