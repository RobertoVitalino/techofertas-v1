import { NextRequest, NextResponse } from 'next/server'
import {
  ADMIN_SESSION_COOKIE,
  verifyAdminSessionToken,
} from '@/lib/admin-auth'
import {
  CUSTOMER_SESSION_COOKIE,
  verifyCustomerSessionToken,
} from '@/lib/customer-auth'

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const session = request.cookies.get(ADMIN_SESSION_COOKIE)?.value

    if (await verifyAdminSessionToken(session)) {
      return NextResponse.next()
    }

    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set(
      'next',
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
    )

    return NextResponse.redirect(loginUrl)
  }

  const customerSession = request.cookies.get(CUSTOMER_SESSION_COOKIE)?.value

  if (await verifyCustomerSessionToken(customerSession)) {
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
  matcher: ['/admin/:path*', '/minha-conta/:path*'],
}
