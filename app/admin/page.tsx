import { requireAdmin } from '@/lib/require-admin'
import { prisma } from '@/lib/prisma'
import { ArrowRight, Package, PlusCircle, Tags, Users } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage() {
  await requireAdmin()

  const [products, customerCount] = await Promise.all([
    prisma.product.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.customer.count(),
  ])
  const categoryCount = new Set(products.map((product) => product.category)).size
  const latestProducts = products.slice(0, 5)

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div><p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-400">Visão geral</p><h1 className="mt-2 text-3xl font-black sm:text-4xl">Dashboard</h1><p className="mt-2 text-slate-400">Acompanhe e gerencie todas as áreas da Vitalino Tech.</p></div>
        <a href="/admin/produtos/novo" className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 font-bold hover:bg-brand-500"><PlusCircle size={19} /> Novo produto</a>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/[.045] p-5"><Package className="text-brand-400" /><p className="mt-4 text-sm text-slate-400">Produtos cadastrados</p><strong className="text-3xl">{products.length}</strong></div>
        <div className="rounded-2xl border border-white/10 bg-white/[.045] p-5"><Tags className="text-emerald-400" /><p className="mt-4 text-sm text-slate-400">Categorias ativas</p><strong className="text-3xl">{categoryCount}</strong></div>
        <div className="rounded-2xl border border-white/10 bg-white/[.045] p-5"><Users className="text-violet-400" /><p className="mt-4 text-sm text-slate-400">Clientes cadastrados</p><strong className="text-3xl">{customerCount}</strong></div>
        <div className="rounded-2xl border border-white/10 bg-white/[.045] p-5"><Package className="text-amber-400" /><p className="mt-4 text-sm text-slate-400">Ofertas publicadas</p><strong className="text-3xl">{products.length}</strong></div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Produtos', 'Cadastre, edite ou remova ofertas.', '/admin/produtos'],
          ['Categorias', 'Veja a distribuição do catálogo.', '/admin/categorias'],
          ['Usuários', 'Acompanhe os clientes cadastrados.', '/admin/usuarios'],
          ['Estatísticas', 'Consulte os números atuais do site.', '/admin/estatisticas'],
        ].map(([title, description, href]) => (
          <a key={href} href={href} className="group rounded-2xl border border-white/10 bg-white/[.035] p-5 transition hover:border-brand-500/40 hover:bg-brand-500/10"><strong>{title}</strong><p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p><span className="mt-5 flex items-center gap-2 text-sm font-bold text-brand-400">Acessar <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span></a>
        ))}
      </section>

      <section className="mt-8 rounded-2xl border border-white/10 bg-white/[.035] p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4"><div><h2 className="text-xl font-black">Produtos recentes</h2><p className="mt-1 text-sm text-slate-400">Últimas ofertas adicionadas ao catálogo.</p></div><a href="/admin/produtos" className="text-sm font-bold text-brand-400 hover:text-brand-300">Ver todos</a></div>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[620px] text-left text-sm"><thead className="text-slate-500"><tr><th className="py-3">Produto</th><th>Categoria</th><th>Preço</th><th>Loja</th></tr></thead><tbody>{latestProducts.map((product) => <tr key={product.id} className="border-t border-white/10"><td className="py-4 font-bold">{product.title}</td><td>{product.category}</td><td className="text-emerald-400">{product.price}</td><td>{product.store}</td></tr>)}</tbody></table>
        </div>
      </section>
    </div>
  )
}
