import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_DURATION_SECONDS,
  createAdminSessionToken,
  verifyAdminCredentials,
} from '@/lib/admin-auth'
import { LockKeyhole, LogIn } from 'lucide-react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

function getSafeDestination(value: FormDataEntryValue | null) {
  const destination = String(value || '/admin')

  return destination.startsWith('/admin') && !destination.startsWith('//')
    ? destination
    : '/admin'
}

async function loginAdmin(formData: FormData) {
  'use server'

  const email = String(formData.get('email') || '')
  const password = String(formData.get('password') || '')
  const destination = getSafeDestination(formData.get('next'))

  if (!(await verifyAdminCredentials(email, password))) {
    redirect(`/login?erro=credenciais&next=${encodeURIComponent(destination)}`)
  }

  let session: string

  try {
    session = await createAdminSessionToken()
  } catch {
    redirect('/login?erro=configuracao')
  }

  cookies().set(ADMIN_SESSION_COOKIE, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: ADMIN_SESSION_DURATION_SECONDS,
  })

  redirect(destination)
}

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { erro?: string; next?: string }
}) {
  const hasInvalidCredentials = searchParams?.erro === 'credenciais'
  const hasConfigurationError = searchParams?.erro === 'configuracao'
  const destination =
    searchParams?.next?.startsWith('/admin') &&
    !searchParams.next.startsWith('//')
      ? searchParams.next
      : '/admin'

  return (
    <main className="flex min-h-screen items-center justify-center bg-grid px-4 py-12">
      <section className="glass w-full max-w-md rounded-3xl p-7 sm:p-9">
        <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/20 text-brand-400">
          <LockKeyhole size={28} />
        </div>

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-400">
          Vitalino Tech
        </p>
        <h1 className="mt-2 text-3xl font-black">Acesso administrativo</h1>
        <p className="mt-3 text-slate-400">
          Entre com suas credenciais para gerenciar produtos e ofertas.
        </p>

        <form action={loginAdmin} className="mt-8 grid gap-4">
          <input type="hidden" name="next" value={destination} />

          <label className="grid gap-2 text-sm font-bold" htmlFor="email">
            E-mail
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-normal outline-none transition focus:border-brand-500"
              placeholder="seu@email.com"
            />
          </label>

          <label className="grid gap-2 text-sm font-bold" htmlFor="password">
            Senha
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-normal outline-none transition focus:border-brand-500"
              placeholder="Digite sua senha"
            />
          </label>

          {hasInvalidCredentials ? (
            <p
              className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
              role="alert"
            >
              E-mail ou senha incorretos. Tente novamente.
            </p>
          ) : null}

          {hasConfigurationError ? (
            <p
              className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100"
              role="alert"
            >
              O acesso ainda não foi configurado. Tente novamente em alguns
              instantes.
            </p>
          ) : null}

          <button className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 font-bold transition hover:bg-brand-500">
            <LogIn size={18} />
            Entrar no painel
          </button>
        </form>

        <a
          href="/"
          className="mt-6 block text-center text-sm text-slate-400 hover:text-white"
        >
          Voltar para a loja
        </a>
      </section>
    </main>
  )
}
