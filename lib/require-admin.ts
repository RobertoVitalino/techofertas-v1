import 'server-only'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { ADMIN_SESSION_COOKIE } from '@/lib/admin-auth'
import { isAdminSessionActive } from '@/lib/admin-session'
import { extractCookieValues, findFirstValidCookieValue } from '@/lib/session-cookie'

export async function requireAdmin() {
  const headerStore = await headers()
  const candidates = extractCookieValues(
    headerStore.get('cookie'),
    ADMIN_SESSION_COOKIE,
  )
  const isActive = await findFirstValidCookieValue(candidates, isAdminSessionActive)

  if (!isActive) {
    redirect('/login?next=%2Fadmin')
  }
}
