import 'server-only'

import { hashSensitiveAuthValue } from '@/lib/customer-auth'
import { prisma } from '@/lib/prisma'
import { headers } from 'next/headers'

export type AuthRateLimitConfig = {
  scope: 'admin-login' | 'customer-login' | 'registration'
  subject: string
  ip: string
  limit: number
  windowSeconds: number
  blockSeconds: number
}

async function getKeys(config: AuthRateLimitConfig) {
  return Promise.all([
    hashSensitiveAuthValue(
      'throttle',
      `${config.scope}:subject:${config.subject}`,
    ),
    hashSensitiveAuthValue('throttle', `${config.scope}:ip:${config.ip}`),
  ])
}

export async function getRequestIp() {
  const requestHeaders = await headers()
  const forwardedFor = requestHeaders.get('x-forwarded-for')

  return (
    forwardedFor?.split(',')[0]?.trim() ||
    requestHeaders.get('x-real-ip') ||
    'unknown'
  )
}

export async function isAuthRateLimited(config: AuthRateLimitConfig) {
  const keys = await getKeys(config)
  const now = new Date()
  const records = await prisma.authThrottle.findMany({
    where: { id: { in: keys } },
  })

  return records.some(
    (record) => record.blockedUntil && record.blockedUntil > now,
  )
}

export async function recordAuthAttempt(config: AuthRateLimitConfig) {
  const keys = await getKeys(config)
  const now = new Date()
  const windowStartedAt = new Date(now.getTime() - config.windowSeconds * 1000)

  await prisma.$transaction(async (transaction) => {
    for (const key of keys) {
      const current = await transaction.authThrottle.findUnique({
        where: { id: key },
      })
      const withinWindow =
        current !== null && current.windowStartedAt > windowStartedAt
      const attempts = current && withinWindow ? current.attempts + 1 : 1
      const blockedUntil =
        attempts >= config.limit
          ? new Date(now.getTime() + config.blockSeconds * 1000)
          : null

      await transaction.authThrottle.upsert({
        where: { id: key },
        create: {
          id: key,
          attempts,
          windowStartedAt: now,
          blockedUntil,
        },
        update: {
          attempts,
          windowStartedAt: withinWindow ? current!.windowStartedAt : now,
          blockedUntil,
        },
      })
    }
  })

  await prisma.authThrottle.deleteMany({
    where: {
      updatedAt: { lt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000) },
    },
  })
}

export async function clearAuthAttempts(config: AuthRateLimitConfig) {
  const keys = await getKeys(config)
  await prisma.authThrottle.deleteMany({ where: { id: { in: keys } } })
}

export async function writeSecurityEvent({
  kind,
  success,
  subject,
  ip,
}: {
  kind: string
  success: boolean
  subject?: string
  ip?: string
}) {
  const [subjectHash, ipHash] = await Promise.all([
    subject ? hashSensitiveAuthValue('event-subject', subject) : null,
    ip ? hashSensitiveAuthValue('event-ip', ip) : null,
  ])

  const retentionDeadline = new Date(
    Date.now() - 90 * 24 * 60 * 60 * 1000,
  )

  await prisma.$transaction([
    prisma.securityEvent.create({
      data: { kind, success, subjectHash, ipHash },
    }),
    prisma.securityEvent.deleteMany({
      where: { createdAt: { lt: retentionDeadline } },
    }),
  ])
}
