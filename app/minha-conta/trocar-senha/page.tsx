import {
  hashCustomerPassword,
  isAcceptableCustomerPassword,
  verifyCustomerPassword,
} from '@/lib/customer-auth'
import { prisma } from '@/lib/prisma'
import { requireCustomer } from '@/lib/require-customer'
import { KeyRound, LockKeyhole, ShieldAlert, Zap } from 'lucide-react'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

function getSafeDestination(value: string | undefined) {
  const destination = String(value || '/minha-conta')

  return destination.startsWith('/') &&
    !destination.startsWith('//') &&
    !destination.startsWith('/admin')
    ? destination
    : '/minha-conta'
}

async function changePassword(formData: FormData) {
  'use server'

  const customer = await requireCustomer('/minha-conta/trocar-senha')
  const destination = getSafeDestination(String(formData.get('next') || ''))
  const currentPassword = String(formData.get('currentPassword') || '')
  const newPassword = String(formData.get('newPassword') || '')
  const confirmPassword = String(formData.get('confirmPassword') || '')

  const errorRedirect = (erro: string) =>
    redirect(
      `/minha-conta/trocar-senha?erro=${erro}&next=${encodeURIComponent(destination)}`,
    )

  const record = await prisma.customer.findUnique({
    where: { id: customer.id },
    select: { passwordHash: true },
  })

  if (!record || !(await verifyCustomerPassword(currentPassword, record.passwordHash))) {
    errorRedirect('atual')
  }

  if (newPassword !== confirmPassword) {
    errorRedirect('confirmacao')
  }

  if (!isAcceptableCustomerPassword(newPassword)) {
    errorRedirect('fraca')
  }

  if (newPassword === currentPassword) {
    errorRedirect('igual')
  }

  await prisma.customer.update({
    where: { id: customer.id },
    data: {
      passwordHash: await hashCustomerPassword(newPassword),
      mustChangePassword: false,
    },
  })

  redirect(
    destination.includes('?')
      ? `${destination}&senha-alterada=1`
      : `${destination}?senha-alterada=1`,
  )
}

export default async function TrocarSenhaPage({
  searchParams,
}: {
  searchParams?: Promise<{ erro?: string; next?: string }>
}) {
  const query = await searchParams
  const customer = await requireCustomer('/minha-conta/trocar-senha')
  const destination = getSafeDestination(query?.next)

  const hasWrongCurrent = query?.erro === 'atual'
  const hasMismatch = query?.erro === 'confirmacao'
  const hasWeakPassword = query?.erro === 'fraca'
  const hasSamePassword = query?.erro === 'igual'

  return (
    <main className="min-h-screen bg-grid px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-lg">
        <a href="/" className="mb-9 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600">
            <Zap size={20} />
          </span>
          <span>
            <strong className="block text-lg">Vitalino Tech</strong>
            <span className="text-xs text-slate-400">Área do cliente</span>
          </span>
        </a>

        <div className="rounded-3xl border border-white/10 bg-white/[.04] p-6 sm:p-8">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/20 text-brand-400">
            <LockKeyhole size={28} />
          </div>
          <h1 className="text-2xl font-black sm:text-3xl">Definir uma nova senha</h1>

          {customer.mustChangePassword ? (
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-amber-400/25 bg-amber-400/10 px-4 py-3 text-amber-100">
              <ShieldAlert className="mt-0.5 shrink-0" size={19} />
              <p className="text-sm leading-relaxed">
                Sua senha foi redefinida temporariamente. Para continuar, escolha uma
                senha definitiva.
              </p>
            </div>
          ) : (
            <p className="mt-3 text-slate-400">
              Digite sua senha atual e escolha uma nova senha para sua conta.
            </p>
          )}

          <form action={changePassword} className="mt-7 grid gap-5">
            <input type="hidden" name="next" value={destination} />

            <label className="grid gap-2 text-sm font-bold" htmlFor="current-password">
              Senha atual
              <input
                id="current-password"
                name="currentPassword"
                type="password"
                autoComplete="current-password"
                required
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                placeholder="Digite sua senha atual"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold" htmlFor="new-password">
              Nova senha
              <input
                id="new-password"
                name="newPassword"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                placeholder="Mínimo de 8 caracteres"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold" htmlFor="confirm-password">
              Confirmar nova senha
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                placeholder="Digite a nova senha novamente"
              />
            </label>

            {hasWrongCurrent ? (
              <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
                Senha atual incorreta. Tente novamente.
              </p>
            ) : null}

            {hasMismatch ? (
              <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
                A confirmação não confere com a nova senha digitada.
              </p>
            ) : null}

            {hasWeakPassword ? (
              <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
                Escolha uma senha com pelo menos 8 caracteres e que não seja muito óbvia.
              </p>
            ) : null}

            {hasSamePassword ? (
              <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
                A nova senha precisa ser diferente da senha atual.
              </p>
            ) : null}

            <button className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3.5 font-bold transition hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-[#080c14]">
              <KeyRound size={19} /> Salvar nova senha
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
