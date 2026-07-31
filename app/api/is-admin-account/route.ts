import { ADMIN_SESSION_COOKIE } from '@/lib/admin-auth'
import { isAdminSessionActive } from '@/lib/admin-session'
import { extractCookieValues, findFirstValidCookieValue } from '@/lib/session-cookie'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const headerStore = await headers()
  const candidates = extractCookieValues(
    headerStore.get('cookie'),
    ADMIN_SESSION_COOKIE,
  )
  const isAdmin = Boolean(
    await findFirstValidCookieValue(candidates, isAdminSessionActive),
  )

  return NextResponse.json(
    { isAdmin },
    { headers: { 'Cache-Control': 'private, no-store' } },
  )
}
