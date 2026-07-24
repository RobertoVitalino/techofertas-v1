'use client'

import { createCertificateCheckoutAction } from '@/lib/certificate-actions'
import { Award, Download, Loader2 } from 'lucide-react'
import { useState, useTransition } from 'react'

type Props = {
  eligible: boolean
  status: 'none' | 'pending' | 'issued'
  verificationCode?: string
  priceLabel: string
}

export function CertificateCta({
  eligible,
  status,
  verificationCode,
  priceLabel,
}: Props) {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  function handleCheckout() {
    setError(null)
    startTransition(async () => {
      const result = await createCertificateCheckoutAction()

      if ('error' in result) {
        setError(result.error)
        return
      }

      window.location.href = result.checkoutUrl
    })
  }

  if (!eligible) {
    return (
      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <div className="flex items-start gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-300 text-slate-700">
            <Award size={22} />
          </span>
          <div>
            <h2 className="text-lg font-black text-slate-700">
              Certificado de conclusão
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Conclua as <strong>31 aulas</strong> do curso para liberar a
              emissão do certificado (R$ {priceLabel}).
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (status === 'issued' && verificationCode) {
    return (
      <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
        <div className="flex items-start gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-600 text-white">
            <Award size={22} />
          </span>
          <div>
            <h2 className="text-lg font-black text-emerald-900">
              Certificado emitido
            </h2>
            <p className="mt-1 text-sm leading-6 text-emerald-900/80">
              Parabéns por concluir o curso! Seu certificado em PDF está
              disponível para download.
            </p>
            <a
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-700"
              href={`/api/certificado/${verificationCode}`}
            >
              <Download size={16} /> Baixar certificado
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-700 text-white">
          <Award size={22} />
        </span>
        <div className="flex-1">
          <h2 className="text-lg font-black text-sky-950">
            Certificado de conclusão
          </h2>
          <p className="mt-1 text-sm leading-6 text-sky-900/80">
            {status === 'pending'
              ? 'Seu pagamento está sendo processado. Isso pode levar alguns minutos.'
              : `Você concluiu todas as aulas! Emita seu certificado em PDF por R$ ${priceLabel}.`}
          </p>
          {error ? (
            <p className="mt-2 text-sm font-bold text-rose-700">{error}</p>
          ) : null}
          <button
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-sky-700 px-5 py-3 text-sm font-black text-white transition hover:bg-sky-800 disabled:opacity-60"
            disabled={isPending}
            onClick={handleCheckout}
            type="button"
          >
            {isPending ? (
              <Loader2 className="animate-spin" size={16} />
            ) : (
              <Award size={16} />
            )}
            {status === 'pending' ? 'Continuar pagamento' : 'Emitir certificado'}
          </button>
        </div>
      </div>
    </section>
  )
}
