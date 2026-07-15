import { requireAdmin } from '@/lib/require-admin'
import { prisma } from '@/lib/prisma'
import { PlusCircle } from 'lucide-react'
import { revalidatePath } from 'next/cache'

export const dynamic = 'force-dynamic'

async function deleteProduct(formData: FormData) {
  'use server'
  await requireAdmin()
  const id = Number(formData.get('id'))
  if (!Number.isSafeInteger(id) || id <= 0) return
  await prisma.product.delete({ where: { id } })
  revalidatePath('/admin')
  revalidatePath('/admin/produtos')
  revalidatePath('/')
}

export default async function AdminProductsPage() {
  await requireAdmin()
  const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } })

  return <div className="mx-auto max-w-7xl">
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-400">Catálogo</p><h1 className="mt-2 text-3xl font-black sm:text-4xl">Produtos</h1><p className="mt-2 text-slate-400">{products.length} ofertas cadastradas.</p></div><a href="/admin/produtos/novo" className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 font-bold hover:bg-brand-500"><PlusCircle size={19} /> Novo produto</a></div>
    <section className="mt-8 rounded-2xl border border-white/10 bg-white/[.04] p-5"><div className="overflow-x-auto"><table className="w-full min-w-[820px] text-left text-sm"><thead className="text-slate-400"><tr><th className="py-3">Produto</th><th>Categoria</th><th>Preço</th><th>Desconto</th><th>Loja</th><th>Ações</th></tr></thead><tbody>{products.map((product) => <tr key={product.id} className="border-t border-white/10"><td className="py-4 font-bold">{product.title}</td><td>{product.category}</td><td className="text-emerald-400">{product.price}</td><td>{product.discount}</td><td>{product.store}</td><td className="flex gap-2 py-4"><a href={`/admin/produtos/${product.id}/editar`} className="rounded-lg bg-brand-600 px-3 py-2 text-xs font-bold hover:bg-brand-500">Editar</a><form action={deleteProduct}><input type="hidden" name="id" value={product.id} /><button className="rounded-lg bg-red-600 px-3 py-2 text-xs font-bold hover:bg-red-500">Excluir</button></form></td></tr>)}</tbody></table></div></section>
  </div>
}
