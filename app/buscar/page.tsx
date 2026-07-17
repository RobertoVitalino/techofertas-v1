import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import { prisma } from '@/lib/prisma'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q = '' } = await searchParams

  const allProducts = await prisma.product.findMany({
  orderBy: {
    createdAt: 'desc',
  },
})

const search = q.toLowerCase()

const products = allProducts.filter((product) => {
  return (
    product.title.toLowerCase().includes(search) ||
    product.category.toLowerCase().includes(search) ||
    product.store.toLowerCase().includes(search)
  )
})

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-3xl font-black">Resultado da busca</h1>

        <p className="mt-2 text-slate-400">
          Buscando por: <strong className="text-slate-900">{q}</strong>
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[.045] p-6 text-slate-400">
              Nenhum produto encontrado.
            </div>
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
    </main>
  )
}
