import 'server-only'

import { prisma } from '@/lib/prisma'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_WATCHES_PER_EMAIL = 30

export type WatchResult = { success: true } | { success: false; error: string }

export async function watchProductPrice(productId: number, rawEmail: string): Promise<WatchResult> {
  const email = rawEmail.trim().toLowerCase()

  if (!EMAIL_PATTERN.test(email) || email.length > 200) {
    return { success: false, error: 'Informe um e-mail válido.' }
  }

  const product = await prisma.product.findUnique({
    where: { id: productId },
    select: { id: true, price: true, active: true },
  })
  if (!product || !product.active) {
    return { success: false, error: 'Este produto não está mais disponível.' }
  }

  const existing = await prisma.priceWatch.findUnique({
    where: { productId_email: { productId, email } },
  })
  if (existing) {
    if (existing.unsubscribedAt) {
      await prisma.priceWatch.update({
        where: { id: existing.id },
        data: { unsubscribedAt: null, priceAtSignup: product.price },
      })
    }
    return { success: true }
  }

  const activeCount = await prisma.priceWatch.count({ where: { email, unsubscribedAt: null } })
  if (activeCount >= MAX_WATCHES_PER_EMAIL) {
    return { success: false, error: `Você já acompanha ${MAX_WATCHES_PER_EMAIL} produtos. Cancele algum alerta para criar outro.` }
  }

  await prisma.priceWatch.create({
    data: { productId, email, token: crypto.randomUUID(), priceAtSignup: product.price },
  })
  return { success: true }
}

// Cancela um alerta (ou todos os alertas do mesmo e-mail, se all = true).
export async function cancelPriceWatch(token: string, all = false) {
  const watch = await prisma.priceWatch.findUnique({ where: { token } })
  if (!watch) return null

  const now = new Date()
  if (all) {
    await prisma.priceWatch.updateMany({
      where: { email: watch.email, unsubscribedAt: null },
      data: { unsubscribedAt: now },
    })
  } else if (!watch.unsubscribedAt) {
    await prisma.priceWatch.update({ where: { token }, data: { unsubscribedAt: now } })
  }
  return watch
}
