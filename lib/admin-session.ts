import 'server-only'

import {
  ADMIN_SESSION_IDLE_SECONDS,
  createAdminSessionToken,
  verifyAdminSessionToken,
} from '@/lib/admin-auth'
import { prisma } from '@/lib/prisma'

export async function createAdminSession() {
  const session = await createAdminSessionToken()

  await prisma.adminSession.create({
    data: {
      id: session.sessionHash,
      expiresAt: session.expiresAt,
    },
  })

  return session.token
}

export async function isAdminSessionActive(token?: string) {
  const verified = await verifyAdminSessionToken(token)

  if (!verified) return false

  const session = await prisma.adminSession.findUnique({
    where: { id: verified.sessionHash },
  })

  if (!session) return false

  const now = new Date()
  const idleDeadline = new Date(
    now.getTime() - ADMIN_SESSION_IDLE_SECONDS * 1000,
  )

  if (
    session.revokedAt ||
    session.expiresAt <= now ||
    session.lastSeenAt <= idleDeadline
  ) {
    if (!session.revokedAt) {
      await prisma.adminSession.update({
        where: { id: session.id },
        data: { revokedAt: now },
      })
    }

    return false
  }

  if (now.getTime() - session.lastSeenAt.getTime() >= 5 * 60 * 1000) {
    await prisma.adminSession.update({
      where: { id: session.id },
      data: { lastSeenAt: now },
    })
  }

  return true
}

export async function revokeAdminSession(token?: string) {
  const verified = await verifyAdminSessionToken(token)

  if (!verified) return

  await prisma.adminSession.updateMany({
    where: { id: verified.sessionHash, revokedAt: null },
    data: { revokedAt: new Date() },
  })
}
