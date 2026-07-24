import { Header } from '@/components/Header'
import { prisma } from '@/lib/prisma'
import { CheckCircle2, ExternalLink, Store } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

function isImagePath(value: string) {
  return (
    value.startsWith('/produtos/') ||
    value.startsWith('http://') ||
    value.startsWith('https://')
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  })

  if (!product) return {}

  const description = `${product.title} — ${product.category}. Confira o preço atualizado no Mercado Livre.`
  const image = isImagePath(product.image) ? product.image : undefined

  return {
    title: product.title,
    description,
    openGraph: {
      title: product.title,
      description,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      title: product.title,
      description,
      images: image ? [image] : undefined,
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  })

  if (!product) {
    notFound()
  }

  const hasDiscount = product.discount && product.discount !== '-0%'

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
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              {hasDiscount && (
                <span className="text-base text-slate-400 line-through">
                  {product.oldPrice}
                </span>
              )}
              <span className="text-3xl font-black text-slate-900">
                {product.price}
              </span>
              {hasDiscount && (
                <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-black text-emerald-700">
                  {product.discount}
                </span>
              )}
            </div>
            {product.installments && (
              <p className="mt-1 text-sm text-slate-600">{product.installments}</p>
            )}

            <p className="mt-4 text-xs font-black uppercase tracking-[.14em] text-sky-700">
              Consulte as condições atuais
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              O preço acima é o de quando o anúncio foi sincronizado. Para
              garantir o valor exato, o desconto e as condições de pagamento
              atuais, confira diretamente no anúncio original do produto.
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
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-4 text-center font-black text-white hover:bg-brand-500"
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
