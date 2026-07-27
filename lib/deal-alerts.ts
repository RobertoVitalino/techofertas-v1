import 'server-only'

import { prisma } from '@/lib/prisma'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type SubscribeResult =
  | { success: true }
  | { success: false; error: string }

export async function subscribeToDealAlerts(rawEmail: string): Promise<SubscribeResult> {
  const email = rawEmail.trim().toLowerCase()

  if (!EMAIL_PATTERN.test(email)) {
    return { success: false, error: 'Informe um e-mail válido.' }
  }

  const existing = await prisma.dealAlertSubscriber.findUnique({ where: { email } })

  if (existing && !existing.unsubscribedAt) {
    return { success: true }
  }

  if (existing) {
    await prisma.dealAlertSubscriber.update({
      where: { email },
      data: { unsubscribedAt: null },
    })

    return { success: true }
  }

  await prisma.dealAlertSubscriber.create({
    data: { email, unsubscribeToken: crypto.randomUUID() },
  })

  return { success: true }
}

export async function unsubscribeFromDealAlerts(token: string) {
  const subscriber = await prisma.dealAlertSubscriber.findUnique({
    where: { unsubscribeToken: token },
  })

  if (!subscriber || subscriber.unsubscribedAt) return subscriber

  return prisma.dealAlertSubscriber.update({
    where: { unsubscribeToken: token },
    data: { unsubscribedAt: new Date() },
  })
}

export async function getActiveDealAlertSubscribers() {
  return prisma.dealAlertSubscriber.findMany({
    where: { unsubscribedAt: null },
    select: { email: true, unsubscribeToken: true },
  })
}
