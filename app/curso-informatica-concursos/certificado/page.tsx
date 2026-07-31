import { Header } from '@/components/Header'
import { getCertificateStatus } from '@/lib/certificates'
import { requireCustomer } from '@/lib/require-customer'
import { CheckCircle2, Clock3, Download, XCircle } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Certificado do curso',
}

export default async function ExamPrepCertificateReturnPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>
}) {
  const { status: statusParam } = await searchParams
  const customer = await requireCustomer('/curso-informatica-concursos/certificado')
  const certificateStatus = await getCertificateStatus(
    customer.id,
    'informatica-concursos',
  )

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-2xl px-4 py-16">
        <section className="rounded-3xl border border-cyan-200 bg-white/85 p-8 text-center shadow-sm">
          {certificateStatus.state === 'issued' ? (
            <>
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-cyan-600 text-white">
                <CheckCircle2 size={28} />
              </span>
              <h1 className="mt-5 text-2xl font-black text-cyan-950">
                Pagamento confirmado!
              </h1>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Seu certificado já está disponível para download.
              </p>
              <a
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 text-sm font-black text-white transition hover:bg-cyan-700"
                href={`/api/certificado/${certificateStatus.verificationCode}`}
              >
                <Download size={16} /> Baixar certificado
              </a>
            </>
          ) : statusParam === 'failure' ? (
            <>
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-rose-600 text-white">
                <XCircle size={28} />
              </span>
              <h1 className="mt-5 text-2xl font-black text-rose-950">
                Pagamento não concluído
              </h1>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Não identificamos a confirmação do pagamento. Você pode tentar
                novamente na página do curso.
              </p>
            </>
          ) : (
            <>
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-cyan-700 text-white">
                <Clock3 size={28} />
              </span>
              <h1 className="mt-5 text-2xl font-black text-cyan-950">
                Processando pagamento
              </h1>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Assim que a confirmação chegar do Mercado Pago, seu certificado
                aparecerá automaticamente aqui e na página do curso. Isso costuma
                levar apenas alguns instantes.
              </p>
            </>
          )}

          <a
            className="mt-8 inline-block text-sm font-bold text-cyan-700 hover:text-cyan-900"
            href="/curso-informatica-concursos"
          >
            Voltar para o curso
          </a>
        </section>
      </div>
    </main>
  )
}
