import {
  CUSTOMER_SESSION_COOKIE,
  CUSTOMER_SESSION_DURATION_SECONDS,
  createCustomerSessionToken,
  normalizeCustomerEmail,
  verifyCustomerPassword,
} from '@/lib/customer-auth'
import { prisma } from '@/lib/prisma'
import {
  ArrowLeft,
  CheckCircle2,
  LockKeyhole,
  LogIn,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Zap,
} from 'lucide-react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

function getSafeDestination(value: FormDataEntryValue | string | null | undefined) {
  const destination = String(value || '/minha-conta')

  return destination.startsWith('/') &&
    !destination.startsWith('//') &&
    !destination.startsWith('/admin')
    ? destination
    : '/minha-conta'
}

async function loginCustomer(formData: FormData) {
  'use server'

  const email = normalizeCustomerEmail(String(formData.get('email') || ''))
  const password = String(formData.get('password') || '')
  const destination = getSafeDestination(formData.get('next'))
  const customer = await prisma.customer.findUnique({ where: { email } })

  if (!customer || !(await verifyCustomerPassword(password, customer.passwordHash))) {
    redirect(`/entrar?erro=credenciais&next=${encodeURIComponent(destination)}`)
  }

  let session: string

  try {
    session = await createCustomerSessionToken(customer.id)
  } catch {
    redirect('/entrar?erro=configuracao')
  }

  cookies().set(CUSTOMER_SESSION_COOKIE, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: CUSTOMER_SESSION_DURATION_SECONDS,
  })

  redirect(destination)
}

export default function CustomerLoginPage({
  searchParams,
}: {
  searchParams?: { erro?: string; next?: string }
}) {
  const destination = getSafeDestination(searchParams?.next)
  const hasInvalidCredentials = searchParams?.erro === 'credenciais'
  const hasConfigurationError = searchParams?.erro === 'configuracao'
  const hasExpiredSession = searchParams?.erro === 'sessao'

  return (
    <main className="min-h-screen bg-grid px-4 py-8 sm:py-12">
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#080c14] shadow-2xl shadow-black/40 lg:grid-cols-[1.05fr_.95fr]">
        <aside className="relative hidden overflow-hidden border-r border-white/10 bg-gradient-to-br from-brand-700 via-brand-800 to-[#07101f] p-12 lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

          <a href="/" className="relative flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/15">
              <Zap size={23} />
            </span>
            <span>
              <strong className="block text-xl">Vitalino Tech</strong>
              <span className="text-xs text-blue-100/70">Sua conta de ofertas</span>
            </span>
          </a>

          <div className="relative my-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
              <Sparkles size={15} /> Experiência personalizada
            </span>
            <h1 className="mt-6 max-w-lg text-4xl font-black leading-tight xl:text-5xl">
              Suas ofertas favoritas em um só lugar.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-blue-100/75">
              Entre para organizar seus dados e aproveitar uma experiência feita para você.
            </p>

            <div className="mt-9 grid gap-4 text-sm text-blue-50/90">
              <p className="flex items-center gap-3">
                <CheckCircle2 size={19} className="text-emerald-300" /> Acesso rápido e seguro
              </p>
              <p className="flex items-center gap-3">
                <CheckCircle2 size={19} className="text-emerald-300" /> Ofertas e novidades personalizadas
              </p>
              <p className="flex items-center gap-3">
                <CheckCircle2 size={19} className="text-emerald-300" /> Seus dados protegidos
              </p>
            </div>
          </div>

          <p className="relative flex items-center gap-2 text-sm text-blue-100/60">
            <ShieldCheck size={18} /> Ambiente protegido pela Vitalino Tech
          </p>
        </aside>

        <section className="flex items-center p-6 sm:p-10 lg:p-14">
          <div className="mx-auto w-full max-w-md">
            <a
              href="/"
              className="mb-9 inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition hover:text-white lg:hidden"
            >
              <ArrowLeft size={17} /> Voltar para a loja
            </a>

            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/20 text-brand-400">
              <LockKeyhole size={28} />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-400">
              Área do cliente
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Bem-vindo de volta</h2>
            <p className="mt-3 text-slate-400">Entre com seu e-mail e senha para acessar sua conta.</p>

            <form action={loginCustomer} className="mt-8 grid gap-5">
              <input type="hidden" name="next" value={destination} />

              <label className="grid gap-2 text-sm font-bold" htmlFor="customer-email">
                E-mail
                <input
                  id="customer-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  placeholder="voce@email.com"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold" htmlFor="customer-password">
                <span className="flex items-center justify-between gap-4">
                  Senha
                  <a href="/recuperar-senha" className="font-medium text-brand-400 hover:text-brand-300">
                    Esqueci minha senha
                  </a>
                </span>
                <input
                  id="customer-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  placeholder="Digite sua senha"
                />
              </label>

              {hasInvalidCredentials ? (
                <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
                  E-mail ou senha incorretos. Verifique os dados e tente novamente.
                </p>
              ) : null}

              {hasConfigurationError ? (
                <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100" role="alert">
                  O acesso está temporariamente indisponível. Tente novamente em instantes.
                </p>
              ) : null}

              {hasExpiredSession ? (
                <p className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-sm text-blue-100" role="alert">
                  Sua sessão expirou. Entre novamente para continuar.
                </p>
              ) : null}

              <button className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3.5 font-bold transition hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-[#080c14]">
                <LogIn size={19} /> Entrar na minha conta
              </button>
            </form>

            <div className="my-7 flex items-center gap-4 text-xs uppercase tracking-wider text-slate-500">
              <span className="h-px flex-1 bg-white/10" /> ou <span className="h-px flex-1 bg-white/10" />
            </div>

            <a
              href={`/cadastro?next=${encodeURIComponent(destination)}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3.5 font-bold transition hover:border-brand-500/60 hover:bg-brand-500/10"
            >
              <ShoppingBag size={19} /> Criar minha conta grátis
            </a>

            <a href="/" className="mt-7 hidden items-center justify-center gap-2 text-sm text-slate-400 hover:text-white lg:flex">
              <ArrowLeft size={16} /> Voltar para a loja
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
