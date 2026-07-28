'use server'

import { getCourseConfig } from '@/lib/courses-config'
import { prisma } from '@/lib/prisma'
import { requireCustomer } from '@/lib/require-customer'
import { redirect } from 'next/navigation'

export async function enrollInCourseAction(courseSlug: string) {
  const config = getCourseConfig(courseSlug)
  const customer = await requireCustomer(config.landingHref)

  await prisma.courseEnrollment.upsert({
    where: { customerId_courseSlug: { customerId: customer.id, courseSlug } },
    update: {},
    create: { customerId: customer.id, courseSlug },
  })

  redirect(config.landingHref)
}
