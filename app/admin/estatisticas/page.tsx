import { requireAdmin } from '@/lib/require-admin'
import { prisma } from '@/lib/prisma'
import { BarChart3, Package, Tags, Users } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function AdminStatisticsPage() {
  await requireAdmin()
  const [productCount, customerCount, grouped] = await Promise.all([prisma.product.count(), prisma.customer.count(), prisma.product.groupBy({ by: ['category'], _count: { category: true } })])
  const categories = grouped.sort((a, b) => b._count.category - a._count.category)
  const largestCategory = categories[0]?._count.category || 1
  return <div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-400">Indicadores</p><h1 className="mt-2 text-3xl font-black sm:text-4xl">Estatísticas</h1><p className="mt-2 text-slate-400">Dados atuais do catálogo e da base de clientes.</p><section className="mt-8 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><Package className="text-brand-400" /><p className="mt-4 text-sm text-slate-400">Produtos</p><strong className="text-3xl">{productCount}</strong></div><div className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><Tags className="text-emerald-400" /><p className="mt-4 text-sm text-slate-400">Categorias</p><strong className="text-3xl">{categories.length}</strong></div><div className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><Users className="text-violet-400" /><p className="mt-4 text-sm text-slate-400">Clientes</p><strong className="text-3xl">{customerCount}</strong></div></section><section className="mt-8 rounded-2xl border border-white/10 bg-white/[.04] p-6"><div className="flex items-center gap-3"><BarChart3 className="text-brand-400" /><h2 className="text-xl font-black">Produtos por categoria</h2></div><div className="mt-7 grid gap-5">{categories.map((category) => <div key={category.category}><div className="mb-2 flex justify-between gap-4 text-sm"><strong>{category.category}</strong><span className="text-slate-400">{category._count.category} produtos</span></div><div className="h-2.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-brand-600 to-cyan-400" style={{ width: `${Math.max(8, (category._count.category / largestCategory) * 100)}%` }} /></div></div>)}</div></section></div>
}
