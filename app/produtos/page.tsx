import { Header } from '@/components/Header'
import { Products } from '@/components/Sections'
import { prisma } from '@/lib/prisma'
import { ArrowLeft } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-8">
        <a
          className="mb-6 inline-flex items-center gap-2 text-sm font-black text-sky-700 hover:text-sky-900"
          href="/"
        >
          <ArrowLeft size={17} /> Voltar para a página inicial
        </a>

        <Products products={products} variant="catalog" />
      </div>

      <footer className="mt-12 border-t border-sky-200 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-slate-600">
          Vitalino Tech · Produtos de informática com acesso direto ao Mercado
          Livre.
        </div>
      </footer>
    </main>
  )
}
