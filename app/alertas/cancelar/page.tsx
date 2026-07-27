import { Header } from '@/components/Header'
import { unsubscribeFromDealAlerts } from '@/lib/deal-alerts'
import { CheckCircle2, XCircle } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Cancelar alertas de ofertas',
}

export default async function CancelDealAlertsPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>
}) {
  const { token } = await searchParams
  const subscriber = token ? await unsubscribeFromDealAlerts(token) : null

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-lg px-4 py-16">
        <section className="rounded-3xl border border-brand-200 bg-white/85 p-8 text-center shadow-sm">
          {subscriber ? (
            <>
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-white">
                <CheckCircle2 size={28} />
              </span>
              <h1 className="mt-5 text-2xl font-black">Inscrição cancelada</h1>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Você não vai mais receber os alertas de ofertas por e-mail. Se
                mudar de ideia, pode se cadastrar novamente a qualquer momento
                pela página inicial.
              </p>
            </>
          ) : (
            <>
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-rose-600 text-white">
                <XCircle size={28} />
              </span>
              <h1 className="mt-5 text-2xl font-black">Link inválido</h1>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Não encontramos essa inscrição. O link pode já ter sido usado
                ou estar incorreto.
              </p>
            </>
          )}

          <a
            className="mt-6 inline-block text-sm font-bold text-brand-600 hover:text-brand-700"
            href="/"
          >
            Voltar para a loja
          </a>
        </section>
      </div>
    </main>
  )
}
