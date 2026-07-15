import { CUSTOMER_SESSION_COOKIE } from '@/lib/customer-auth'
import { requireCustomer } from '@/lib/require-customer'
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Heart,
  LogOut,
  Mail,
  ShieldCheck,
  ShoppingBag,
  UserRound,
  Zap,
} from 'lucide-react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

async function logoutCustomer() {
  'use server'

  cookies().delete(CUSTOMER_SESSION_COOKIE)
  redirect('/')
}

export default async function CustomerAccountPage({
  searchParams,
}: {
  searchParams?: { 'boas-vindas'?: string }
}) {
  const customer = await requireCustomer()
  const firstName = customer.name.split(' ')[0] || customer.name
  const initials = customer.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

  return (
    <main className="min-h-screen bg-grid">
      <header className="border-b border-white/10 bg-[#05070b]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <a href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600"><Zap size={22} /></span>
            <span><strong className="block text-lg">Vitalino Tech</strong><span className="text-xs text-slate-400">Área do cliente</span></span>
          </a>
          <div className="flex items-center gap-3">
            <a href="/" className="hidden rounded-xl border border-white/10 px-4 py-2.5 text-sm font-bold text-slate-300 hover:border-white/20 hover:text-white sm:block">Voltar à loja</a>
            <form action={logoutCustomer}>
              <button className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-bold text-slate-300 hover:border-red-400/40 hover:text-red-300"><LogOut size={17} /> Sair</button>
            </form>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {searchParams?.['boas-vindas'] === '1' ? (
          <div className="mb-7 flex items-start gap-3 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-5 py-4 text-emerald-100">
            <ShieldCheck className="mt-0.5 shrink-0" size={21} />
            <div><strong className="block">Sua conta foi criada com sucesso!</strong><span className="text-sm text-emerald-100/75">Você já está conectado e pode aproveitar sua área de cliente.</span></div>
          </div>
        ) : null}

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-brand-700/30 via-white/[.04] to-transparent p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8">
          <div className="grid h-20 w-20 place-items-center rounded-2xl bg-brand-600 text-2xl font-black shadow-xl shadow-brand-900/30">{initials || <UserRound />}</div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-400">Minha conta</p>
            <h1 className="mt-2 text-3xl font-black sm:text-4xl">Olá, {firstName}!</h1>
            <p className="mt-2 text-slate-400">Gerencie seus dados e acompanhe sua experiência na Vitalino Tech.</p>
          </div>
          <a href="/#produtos-por-categoria" className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 font-bold hover:bg-brand-500">Ver ofertas <ArrowRight size={18} /></a>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <section className="rounded-3xl border border-white/10 bg-white/[.04] p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div><p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-400">Perfil</p><h2 className="mt-2 text-2xl font-black">Meus dados</h2></div>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-400"><UserRound size={22} /></span>
            </div>
            <dl className="mt-7 grid gap-5">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4"><dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Nome completo</dt><dd className="mt-1 font-bold">{customer.name}</dd></div>
              {customer.username ? <div className="rounded-2xl border border-white/10 bg-black/20 p-4"><dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Nome de usuário</dt><dd className="mt-1 font-bold">@{customer.username}</dd></div> : null}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4"><dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><Mail size={14} /> E-mail</dt><dd className="mt-1 break-all font-bold">{customer.email}</dd></div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4"><dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><CalendarDays size={14} /> Cliente desde</dt><dd className="mt-1 font-bold">{new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(customer.createdAt)}</dd></div>
            </dl>
          </section>

          <div className="grid gap-6">
            <section className="rounded-3xl border border-white/10 bg-white/[.04] p-6">
              <div className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-rose-500/15 text-rose-300"><Heart size={22} /></span><div><h2 className="text-lg font-black">Favoritos</h2><p className="mt-1 text-sm leading-relaxed text-slate-400">Em breve você poderá salvar as ofertas que mais gostou.</p></div></div>
            </section>
            <section className="rounded-3xl border border-white/10 bg-white/[.04] p-6">
              <div className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-amber-300"><Bell size={22} /></span><div><h2 className="text-lg font-black">Alertas de ofertas</h2><p className="mt-1 text-sm leading-relaxed text-slate-400">Novos alertas e oportunidades serão exibidos aqui.</p></div></div>
            </section>
            <section className="rounded-3xl border border-brand-500/20 bg-brand-500/10 p-6">
              <div className="flex items-start gap-4"><ShoppingBag className="mt-1 shrink-0 text-brand-300" size={23} /><div><h2 className="font-black">Continue explorando</h2><p className="mt-1 text-sm text-blue-100/70">Confira os produtos selecionados e encontre sua próxima oferta.</p><a href="/#produtos-por-categoria" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-300 hover:text-white">Ir para produtos <ArrowRight size={16} /></a></div></div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
