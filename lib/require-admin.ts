import 'server-only'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ADMIN_SESSION_COOKIE } from '@/lib/admin-auth'
import { isAdminSessionActive } from '@/lib/admin-session'

export async function requireAdmin() {
  const cookieStore = await cookies()
  const session = cookieStore.get(ADMIN_SESSION_COOKIE)?.value

  if (!(await isAdminSessionActive(session))) {
    redirect('/login?next=%2Fadmin')
  }
}
