import { requireAdmin } from '@/lib/require-admin'
import { prisma } from '@/lib/prisma'
import { ArrowRight, Tags } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function AdminCategoriesPage() {
  await requireAdmin()
  const grouped = await prisma.product.groupBy({ by: ['category'], _count: { category: true } })
  const categories = grouped.sort((left, right) => right._count.category - left._count.category)

  return <div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-400">Organização</p><h1 className="mt-2 text-3xl font-black sm:text-4xl">Categorias</h1><p className="mt-2 text-slate-400">Distribuição real dos produtos publicados.</p><section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{categories.map((category) => <div key={category.category} className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-400"><Tags size={21} /></span><strong className="text-2xl">{category._count.category}</strong></div><h2 className="mt-5 text-xl font-black">{category.category}</h2><p className="mt-1 text-sm text-slate-400">produtos nesta seção</p><a href={`/buscar?q=${encodeURIComponent(category.category)}`} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center gap-2 text-sm font-bold text-brand-400 hover:text-white">Ver na loja <ArrowRight size={16} /></a></div>)}</section></div>
}
