import {
  CUSTOMER_SESSION_COOKIE,
  CUSTOMER_SESSION_DURATION_SECONDS,
  createCustomerSessionToken,
  hashCustomerPassword,
  isValidCustomerUsername,
  normalizeCustomerEmail,
  normalizeCustomerUsername,
} from '@/lib/customer-auth'
import { prisma } from '@/lib/prisma'
import { ArrowLeft, CheckCircle2, ShieldCheck, UserPlus, Zap } from 'lucide-react'
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

async function registerCustomer(formData: FormData) {
  'use server'

  const name = String(formData.get('name') || '').trim()
  const email = normalizeCustomerEmail(String(formData.get('email') || ''))
  const username = normalizeCustomerUsername(String(formData.get('username') || ''))
  const password = String(formData.get('password') || '')
  const passwordConfirmation = String(formData.get('passwordConfirmation') || '')
  const acceptedTerms = formData.get('terms') === 'on'
  const destination = getSafeDestination(formData.get('next'))
  const nextParam = `next=${encodeURIComponent(destination)}`

  if (
    name.length < 2 ||
    name.length > 80 ||
    !email.includes('@') ||
    !isValidCustomerUsername(username) ||
    password.length < 8 ||
    password.length > 128 ||
    !acceptedTerms
  ) {
    redirect(`/cadastro?erro=dados&${nextParam}`)
  }

  if (password !== passwordConfirmation) {
    redirect(`/cadastro?erro=senhas&${nextParam}`)
  }

  const existingCustomer = await prisma.customer.findFirst({
    where: {
      OR: [{ email }, { username }],
    },
  })

  if (existingCustomer) {
    redirect(`/cadastro?erro=email&${nextParam}`)
  }

  try {
    const passwordHash = await hashCustomerPassword(password)
    const customer = await prisma.customer.create({
      data: { name, email, username, passwordHash },
    })
    const session = await createCustomerSessionToken(customer.id)

    cookies().set(CUSTOMER_SESSION_COOKIE, session, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: CUSTOMER_SESSION_DURATION_SECONDS,
    })
  } catch {
    redirect(`/cadastro?erro=configuracao&${nextParam}`)
  }

  const separator = destination.includes('?') ? '&' : '?'
  redirect(`${destination}${separator}boas-vindas=1`)
}

export default function RegisterPage({
  searchParams,
}: {
  searchParams?: { erro?: string; next?: string }
}) {
  const destination = getSafeDestination(searchParams?.next)

  return (
    <main className="min-h-screen bg-grid px-4 py-8 sm:py-12">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#080c14] shadow-2xl shadow-black/40 lg:grid-cols-[.9fr_1.1fr]">
        <aside className="relative hidden overflow-hidden border-r border-white/10 bg-gradient-to-br from-[#0a2347] via-brand-800 to-[#07101f] p-12 lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
          <a href="/" className="relative flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/15"><Zap size={23} /></span>
            <strong className="text-xl">Vitalino Tech</strong>
          </a>

          <div className="relative my-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-200">Conta gratuita</p>
            <h1 className="mt-4 text-4xl font-black leading-tight">Crie sua conta e aproveite mais.</h1>
            <p className="mt-5 leading-relaxed text-blue-100/70">
              Tenha um espaço pessoal para acompanhar as novidades e organizar sua experiência na Vitalino Tech.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-blue-50/90">
              <p className="flex gap-3"><CheckCircle2 size={19} className="shrink-0 text-emerald-300" /> Cadastro rápido e gratuito</p>
              <p className="flex gap-3"><CheckCircle2 size={19} className="shrink-0 text-emerald-300" /> Sessão protegida por 30 dias</p>
              <p className="flex gap-3"><CheckCircle2 size={19} className="shrink-0 text-emerald-300" /> Área exclusiva do cliente</p>
            </div>
          </div>

          <p className="relative flex items-center gap-2 text-sm text-blue-100/60"><ShieldCheck size={18} /> Seus dados são protegidos</p>
        </aside>

        <section className="p-6 sm:p-10 lg:p-14">
          <div className="mx-auto max-w-lg">
            <a href="/entrar" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white">
              <ArrowLeft size={17} /> Já tenho uma conta
            </a>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/20 text-brand-400"><UserPlus size={28} /></div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-400">Novo cliente</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Criar minha conta</h2>
            <p className="mt-3 text-slate-400">Preencha seus dados. Leva menos de um minuto.</p>

            <form action={registerCustomer} className="mt-8 grid gap-5">
              <input type="hidden" name="next" value={destination} />
              <label className="grid gap-2 text-sm font-bold" htmlFor="name">
                Nome completo
                <input id="name" name="name" autoComplete="name" minLength={2} maxLength={80} required className="rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" placeholder="Como devemos chamar você?" />
              </label>
              <label className="grid gap-2 text-sm font-bold" htmlFor="register-email">
                E-mail
                <input id="register-email" name="email" type="email" autoComplete="email" required className="rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" placeholder="voce@email.com" />
              </label>
              <label className="grid gap-2 text-sm font-bold" htmlFor="register-username">
                Nome de usuário
                <input id="register-username" name="username" type="text" autoComplete="username" minLength={3} maxLength={30} pattern="[A-Za-z0-9._-]+" required className="rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" placeholder="Escolha seu usuário" />
                <span className="font-normal text-slate-500">Use letras, números, ponto, hífen ou sublinhado.</span>
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold" htmlFor="register-password">
                  Senha
                  <input id="register-password" name="password" type="password" autoComplete="new-password" minLength={8} maxLength={128} required className="rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" placeholder="Mínimo 8 caracteres" />
                </label>
                <label className="grid gap-2 text-sm font-bold" htmlFor="password-confirmation">
                  Confirmar senha
                  <input id="password-confirmation" name="passwordConfirmation" type="password" autoComplete="new-password" minLength={8} maxLength={128} required className="rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" placeholder="Repita a senha" />
                </label>
              </div>

              {searchParams?.erro === 'dados' ? <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">Confira os dados, o nome de usuário e a senha. A senha deve ter pelo menos 8 caracteres e os termos precisam ser aceitos.</p> : null}
              {searchParams?.erro === 'senhas' ? <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">As senhas informadas não são iguais.</p> : null}
              {searchParams?.erro === 'email' ? <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100" role="alert">Este e-mail ou nome de usuário já possui uma conta. Entre com sua senha.</p> : null}
              {searchParams?.erro === 'configuracao' ? <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100" role="alert">Não foi possível criar sua conta agora. Tente novamente em instantes.</p> : null}

              <label className="flex items-start gap-3 text-sm leading-relaxed text-slate-400">
                <input name="terms" type="checkbox" required className="mt-1 h-4 w-4 accent-blue-600" />
                <span>Concordo com os termos de uso e com o tratamento dos meus dados para criação da conta.</span>
              </label>

              <button className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3.5 font-bold transition hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-[#080c14]">
                <UserPlus size={19} /> Criar conta grátis
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-slate-400">
              Já tem cadastro? <a href={`/entrar?next=${encodeURIComponent(destination)}`} className="font-bold text-brand-400 hover:text-brand-300">Entrar na minha conta</a>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
