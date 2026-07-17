import 'server-only'

import {
  CUSTOMER_SESSION_IDLE_SECONDS,
  createCustomerSessionToken,
  verifyCustomerSessionToken,
} from '@/lib/customer-auth'
import { prisma } from '@/lib/prisma'

const sessionCustomerSelect = {
  id: true,
  name: true,
  email: true,
  username: true,
  termsAcceptedAt: true,
  privacyAcceptedAt: true,
  createdAt: true,
  updatedAt: true,
} as const

export async function createCustomerSession(customerId: number) {
  const session = await createCustomerSessionToken(customerId)

  await prisma.customerSession.create({
    data: {
      id: session.sessionHash,
      customerId,
      expiresAt: session.expiresAt,
    },
  })

  return session.token
}

export async function getCustomerFromSessionToken(token?: string) {
  const verified = await verifyCustomerSessionToken(token)

  if (!verified) return null

  const session = await prisma.customerSession.findUnique({
    where: { id: verified.sessionHash },
    include: { customer: { select: sessionCustomerSelect } },
  })

  if (!session || session.customerId !== verified.customerId) return null

  const now = new Date()
  const idleDeadline = new Date(
    now.getTime() - CUSTOMER_SESSION_IDLE_SECONDS * 1000,
  )

  if (
    session.revokedAt ||
    session.expiresAt <= now ||
    session.lastSeenAt <= idleDeadline
  ) {
    if (!session.revokedAt) {
      await prisma.customerSession.update({
        where: { id: session.id },
        data: { revokedAt: now },
      })
    }

    return null
  }

  if (now.getTime() - session.lastSeenAt.getTime() >= 15 * 60 * 1000) {
    await prisma.customerSession.update({
      where: { id: session.id },
      data: { lastSeenAt: now },
    })
  }

  return session.customer
}

export async function revokeCustomerSession(token?: string) {
  const verified = await verifyCustomerSessionToken(token)

  if (!verified) return

  await prisma.customerSession.updateMany({
    where: {
      id: verified.sessionHash,
      customerId: verified.customerId,
      revokedAt: null,
    },
    data: { revokedAt: new Date() },
  })
}

export async function revokeAllCustomerSessions(customerId: number) {
  await prisma.customerSession.updateMany({
    where: { customerId, revokedAt: null },
    data: { revokedAt: new Date() },
  })
}
