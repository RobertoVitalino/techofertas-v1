import 'server-only'

import { CUSTOMER_SESSION_COOKIE, verifyCustomerSessionToken } from '@/lib/customer-auth'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function requireCustomer() {
  const session = cookies().get(CUSTOMER_SESSION_COOKIE)?.value
  const customerId = await verifyCustomerSessionToken(session)

  if (!customerId) {
    redirect('/entrar?next=%2Fminha-conta')
  }

  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
    select: {
      id: true,
      name: true,
      email: true,
      username: true,
      createdAt: true,
    },
  })

  if (!customer) {
    redirect('/entrar?erro=sessao&next=%2Fminha-conta')
  }

  return customer
}
