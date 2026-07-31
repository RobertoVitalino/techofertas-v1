import { NextRequest, NextResponse } from 'next/server'
import {
  ADMIN_SESSION_COOKIE,
  verifyAdminSessionToken,
} from '@/lib/admin-auth'
import {
  CUSTOMER_SESSION_COOKIE,
  verifyCustomerSessionToken,
} from '@/lib/customer-auth'
import { extractCookieValues, findFirstValidCookieValue } from '@/lib/session-cookie'

export async function proxy(request: NextRequest) {
  const cookieHeader = request.headers.get('cookie')

  if (request.nextUrl.pathname.startsWith('/admin')) {
    const candidates = extractCookieValues(cookieHeader, ADMIN_SESSION_COOKIE)

    if (await findFirstValidCookieValue(candidates, verifyAdminSessionToken)) {
      return NextResponse.next()
    }

    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set(
      'next',
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
    )

    return NextResponse.redirect(loginUrl)
  }

  const customerCandidates = extractCookieValues(
    cookieHeader,
    CUSTOMER_SESSION_COOKIE,
  )

  if (
    await findFirstValidCookieValue(customerCandidates, verifyCustomerSessionToken)
  ) {
    return NextResponse.next()
  }

  const loginUrl = new URL('/entrar', request.url)
  loginUrl.searchParams.set(
    'next',
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
  )

  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/minha-conta/:path*',
    '/curso-seguranca-da-informacao/aulas/:path*',
  ],
}
