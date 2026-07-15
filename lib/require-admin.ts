import 'server-only'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import {
  ADMIN_SESSION_COOKIE,
  verifyAdminSessionToken,
} from '@/lib/admin-auth'

export async function requireAdmin() {
  const session = cookies().get(ADMIN_SESSION_COOKIE)?.value

  if (!(await verifyAdminSessionToken(session))) {
    redirect('/login?next=%2Fadmin')
  }
}
