import 'server-only'

import { CUSTOMER_SESSION_COOKIE, verifyCustomerSessionToken } from '@/lib/customer-auth'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

function getSafeDestination(destination: string) {
  return destination.startsWith('/') &&
    !destination.startsWith('//') &&
    !destination.startsWith('/admin')
    ? destination
    : '/minha-conta'
}

export async function getCurrentCustomer() {
  const session = cookies().get(CUSTOMER_SESSION_COOKIE)?.value
  const customerId = await verifyCustomerSessionToken(session)

  if (!customerId) {
    return null
  }

  return prisma.customer.findUnique({
    where: { id: customerId },
    select: {
      id: true,
      name: true,
      email: true,
      username: true,
      createdAt: true,
    },
  })
}

export async function requireCustomer(destination = '/minha-conta') {
  const safeDestination = getSafeDestination(destination)
  const customer = await getCurrentCustomer()

  if (!customer) {
    redirect(`/entrar?next=${encodeURIComponent(safeDestination)}`)
  }

  return customer
}
