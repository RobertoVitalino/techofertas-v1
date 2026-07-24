import { Header } from '@/components/Header'
import { getCertificateByVerificationCode } from '@/lib/certificates'
import { CheckCircle2, XCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

const COURSE_TITLE =
  'Segurança da Informação: do Zero à Proteção na Prática'

export const metadata: Metadata = {
  title: 'Verificar certificado',
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export default async function VerifyCertificatePage({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params
  const certificate = await getCertificateByVerificationCode(code)

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-2xl px-4 py-16">
        <section className="rounded-3xl border border-sky-200 bg-white/85 p-8 text-center shadow-sm">
          {certificate ? (
            <>
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-white">
                <CheckCircle2 size={28} />
              </span>
              <h1 className="mt-5 text-2xl font-black text-emerald-950">
                Certificado válido
              </h1>
              <dl className="mt-6 space-y-3 text-left text-sm">
                <div className="rounded-xl border border-slate-200 p-3">
                  <dt className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Aluno
                  </dt>
                  <dd className="mt-1 font-bold text-slate-900">
                    {certificate.customer.name}
                  </dd>
                </div>
                <div className="rounded-xl border border-slate-200 p-3">
                  <dt className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Curso
                  </dt>
                  <dd className="mt-1 font-bold text-slate-900">
                    {COURSE_TITLE}
                  </dd>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-200 p-3">
                    <dt className="text-xs font-black uppercase tracking-wide text-slate-500">
                      Carga horária
                    </dt>
                    <dd className="mt-1 font-bold text-slate-900">
                      {certificate.hoursTotal}
                    </dd>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-3">
                    <dt className="text-xs font-black uppercase tracking-wide text-slate-500">
                      Emitido em
                    </dt>
                    <dd className="mt-1 font-bold text-slate-900">
                      {formatDate(certificate.issuedAt)}
                    </dd>
                  </div>
                </div>
              </dl>
            </>
          ) : (
            <>
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-rose-600 text-white">
                <XCircle size={28} />
              </span>
              <h1 className="mt-5 text-2xl font-black text-rose-950">
                Código não encontrado
              </h1>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Não encontramos nenhum certificado com este código de
                verificação.
              </p>
            </>
          )}
        </section>
      </div>
    </main>
  )
}
