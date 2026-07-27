'use client'

import { subscribeToDealAlertsAction } from '@/lib/deal-alerts-actions'
import { BellRing, CheckCircle2, Loader2 } from 'lucide-react'
import { useState, useTransition } from 'react'

export function DealAlertSignup() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleSubmit() {
    setError(null)
    startTransition(async () => {
      const result = await subscribeToDealAlertsAction(email)

      if (!result.success) {
        setError(result.error)
        return
      }

      setSent(true)
      setEmail('')
    })
  }

  return (
    <section className="rounded-2xl border border-brand-200 bg-white/85 p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
          <BellRing size={20} />
        </span>
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-brand-600">
            Alertas de ofertas
          </p>
          <h2 className="text-lg font-black">
            Receba as melhores ofertas por e-mail
          </h2>
        </div>
      </div>

      {sent ? (
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          <CheckCircle2 className="shrink-0" size={18} />
          Cadastro confirmado! Você vai receber nossas próximas ofertas por e-mail.
        </div>
      ) : (
        <>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Cadastre seu e-mail e avisamos toda vez que novas ofertas entrarem no
            site. Você pode cancelar quando quiser.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <input
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-brand-500"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="seu@email.com"
              type="email"
              value={email}
            />
            <button
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-black text-white transition hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isPending || !email.trim()}
              onClick={handleSubmit}
              type="button"
            >
              {isPending ? <Loader2 className="animate-spin" size={16} /> : null}
              Quero receber
            </button>
          </div>
          {error ? (
            <p className="mt-2 text-sm font-bold text-rose-700">{error}</p>
          ) : null}
          <p className="mt-3 text-[11px] leading-5 text-slate-500">
            Ao se cadastrar, você concorda com nossa{' '}
            <a className="font-bold text-slate-700 hover:text-brand-600" href="/privacidade">
              Política de Privacidade
            </a>
            .
          </p>
        </>
      )}
    </section>
  )
}
