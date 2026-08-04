'use server'

import { ADMIN_SESSION_COOKIE } from '@/lib/admin-auth'
import { isAdminSessionActive } from '@/lib/admin-session'
import { getRequestIp, writeSecurityEvent } from '@/lib/auth-rate-limit'
import { hashCustomerPassword } from '@/lib/customer-auth'
import { revokeAllCustomerSessions } from '@/lib/customer-session'
import { prisma } from '@/lib/prisma'
import { extractCookieValues, findFirstValidCookieValue } from '@/lib/session-cookie'
import { headers } from 'next/headers'

const TEMP_PASSWORD_CHARSET =
  'ABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789'

function generateTemporaryPassword(length = 12) {
  const bytes = crypto.getRandomValues(new Uint8Array(length))

  return Array.from(
    bytes,
    (byte) => TEMP_PASSWORD_CHARSET[byte % TEMP_PASSWORD_CHARSET.length],
  ).join('')
}

async function isRequestFromAdmin() {
  const headerStore = await headers()
  const candidates = extractCookieValues(
    headerStore.get('cookie'),
    ADMIN_SESSION_COOKIE,
  )

  return Boolean(
    await findFirstValidCookieValue(candidates, isAdminSessionActive),
  )
}

type AdminActionResult = { error: string } | { success: true }

export async function adminRevokeCustomerSessionsAction(
  customerId: number,
): Promise<AdminActionResult> {
  if (!(await isRequestFromAdmin())) {
    return { error: 'Não autorizado.' }
  }

  await revokeAllCustomerSessions(customerId)

  return { success: true }
}

export async function adminDeleteCustomerAction(
  customerId: number,
): Promise<AdminActionResult> {
  if (!(await isRequestFromAdmin())) {
    return { error: 'Não autorizado.' }
  }

  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
    select: { email: true },
  })

  if (!customer) {
    return { error: 'Cliente não encontrado.' }
  }

  await prisma.customer.delete({ where: { id: customerId } })

  const ip = await getRequestIp()
  await writeSecurityEvent({
    kind: 'admin_delete_customer',
    success: true,
    subject: customer.email,
    ip,
  }).catch(() => undefined)

  return { success: true as const }
}

type AdminPasswordResetResult =
  | { error: string }
  | { success: true; temporaryPassword: string }

export async function adminResetCustomerPasswordAction(
  customerId: number,
): Promise<AdminPasswordResetResult> {
  if (!(await isRequestFromAdmin())) {
    return { error: 'Não autorizado.' }
  }

  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
    select: { email: true },
  })

  if (!customer) {
    return { error: 'Cliente não encontrado.' }
  }

  const temporaryPassword = generateTemporaryPassword()
  const passwordHash = await hashCustomerPassword(temporaryPassword)

  await prisma.customer.update({
    where: { id: customerId },
    data: { passwordHash, mustChangePassword: true },
  })

  await revokeAllCustomerSessions(customerId)

  const ip = await getRequestIp()
  await writeSecurityEvent({
    kind: 'admin_reset_customer_password',
    success: true,
    subject: customer.email,
    ip,
  }).catch(() => undefined)

  return { success: true, temporaryPassword }
}
