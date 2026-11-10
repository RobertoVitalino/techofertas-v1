'use client'

import { watchProductPriceAction } from '@/lib/price-watch-actions'
import { BellRing, CheckCircle2, Loader2 } from 'lucide-react'
import { useState, useTransition } from 'react'

export function PriceWatchForm({ productId, price }: { productId: number; price: string }) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleSubmit() {
    setError(null)
    startTransition(async () => {
      const result = await watchProductPriceAction(productId, email)
      if (!result.success) {
        setError(result.error)
        return
      }
      setSent(true)
    })
  }

  return (
    <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/80 p-5">
      <div className="flex items-center gap-2">
        <BellRing className="text-amber-600" size={20} />
        <h2 className="font-black text-slate-900">Me avise quando baixar</h2>
      </div>

      {sent ? (
        <p className="mt-3 flex items-center gap-2 text-sm font-bold text-emerald-800">
          <CheckCircle2 size={18} /> Pronto! Avisamos por e-mail se o preço cair abaixo de {price}.
        </p>
      ) : (
        <>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Conferimos o preço todos os dias. Se ficar 5% ou mais abaixo de <strong>{price}</strong>, você recebe um e-mail.
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <input
              aria-label="Seu e-mail"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-amber-500"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="seu@email.com"
              type="email"
              value={email}
            />
            <button
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-black text-white hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isPending || !email.trim()}
              onClick={handleSubmit}
              type="button"
            >
              {isPending ? <Loader2 className="animate-spin" size={16} /> : null}
              Avisar
            </button>
          </div>
          {error ? <p className="mt-2 text-sm font-bold text-rose-700">{error}</p> : null}
          <p className="mt-2 text-[11px] leading-5 text-slate-500">
            Usamos seu e-mail só para este aviso, com link para cancelar em cada mensagem. Veja a{' '}
            <a className="font-bold text-slate-700" href="/privacidade">Política de Privacidade</a>.
          </p>
        </>
      )}
    </section>
  )
}
