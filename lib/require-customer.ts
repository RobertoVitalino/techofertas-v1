import 'server-only'

import { CUSTOMER_SESSION_COOKIE } from '@/lib/customer-auth'
import { getCustomerFromSessionToken } from '@/lib/customer-session'
import { extractCookieValues, findFirstValidCookieValue } from '@/lib/session-cookie'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

function getSafeDestination(destination: string) {
  return destination.startsWith('/') &&
    !destination.startsWith('//') &&
    !destination.startsWith('/admin')
    ? destination
    : '/minha-conta'
}

export async function getCurrentCustomer() {
  const headerStore = await headers()
  const candidates = extractCookieValues(
    headerStore.get('cookie'),
    CUSTOMER_SESSION_COOKIE,
  )

  return findFirstValidCookieValue(candidates, getCustomerFromSessionToken)
}

export async function requireCustomer(destination = '/minha-conta') {
  const safeDestination = getSafeDestination(destination)
  const customer = await getCurrentCustomer()

  if (!customer) {
    redirect(`/entrar?next=${encodeURIComponent(safeDestination)}`)
  }

  return customer
}
