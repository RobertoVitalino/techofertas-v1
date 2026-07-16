import { Header } from '@/components/Header'
import { prisma } from '@/lib/prisma'
import { CheckCircle2, ExternalLink, Store } from 'lucide-react'
import { notFound } from 'next/navigation'

function isImagePath(value: string) {
  return (
    value.startsWith('/produtos/') ||
    value.startsWith('http://') ||
    value.startsWith('https://')
  )
}

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const product = await prisma.product.findUnique({
    where: { id: Number(params.id) },
  })

  if (!product) {
    notFound()
  }

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[.045] p-6">
          {isImagePath(product.image) ? (
            <img
              src={product.image}
              alt={product.title}
              className="h-[420px] w-full rounded-2xl object-contain"
            />
          ) : (
            <div
              className="grid h-[420px] place-items-center text-9xl"
              role="img"
              aria-label={product.title}
            >
              {product.image}
            </div>
          )}
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-brand-500">
            {product.category}
          </p>

          <h1 className="mt-3 text-4xl font-black leading-tight">
            {product.title}
          </h1>

          <div className="mt-7 rounded-2xl border border-sky-200 bg-white/80 p-5 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[.14em] text-sky-700">
              Consulte as condições atuais
            </p>
            <h2 className="mt-2 text-xl font-black">
              Preço atualizado no Mercado Livre
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Para garantir que você veja o valor correto, o preço, os descontos
              e as condições de pagamento são apresentados diretamente no
              anúncio original do produto.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={17} />
                Consulte preço, desconto e parcelamento vigentes.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={17} />
                Confira frete, prazo e disponibilidade para sua região.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={17} />
                A compra e o pagamento são concluídos no Mercado Livre.
              </li>
            </ul>

            <p className="mt-4 flex items-center gap-2 text-sm font-bold text-slate-600">
              <Store size={17} /> Loja: {product.store}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={product.affiliate}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-4 text-center font-black hover:bg-brand-500"
            >
              Ver preço atualizado <ExternalLink size={18} />
            </a>

            <a
              href="/"
              className="rounded-xl border border-white/10 px-6 py-4 text-center font-bold hover:bg-white/10"
            >
              Voltar para produtos
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
