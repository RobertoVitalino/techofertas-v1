import { Header } from '@/components/Header'
import { prisma } from '@/lib/prisma'
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

          <div className="mt-4 flex items-center gap-2 text-yellow-400">
            ★★★★★
            <span className="text-sm text-slate-400">
              ({product.rating} avaliações)
            </span>
          </div>

          <p className="mt-6 text-4xl font-black text-emerald-400">
            {product.price}
          </p>

          <p className="mt-1 text-lg text-slate-500 line-through">
            {product.oldPrice}
          </p>

          <span className="mt-4 inline-block rounded-lg bg-emerald-500 px-3 py-1 text-sm font-black text-black">
            {product.discount} OFF
          </span>

          <div className="mt-6 space-y-2 text-slate-300">
            <p>💳 {product.installments}</p>
            <p>🚚 {product.shipping}</p>
            <p>🏪 Loja: {product.store}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={product.affiliate}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-brand-600 px-6 py-4 text-center font-black hover:bg-brand-500"
            >
              Ver oferta no parceiro
            </a>

            <a
              href="/"
              className="rounded-xl border border-white/10 px-6 py-4 text-center font-bold hover:bg-white/10"
            >
              Voltar para ofertas
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
