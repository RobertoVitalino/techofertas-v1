import { ADMIN_SESSION_COOKIE } from '@/lib/admin-auth'
import { isAdminSessionActive } from '@/lib/admin-session'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const cookieStore = await cookies()
  const session = cookieStore.get(ADMIN_SESSION_COOKIE)?.value
  const isAdmin = await isAdminSessionActive(session)

  return NextResponse.json(
    { isAdmin },
    { headers: { 'Cache-Control': 'private, no-store' } },
  )
}
