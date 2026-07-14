import { prisma } from '@/lib/prisma'
import { Package, Tags, MousePointerClick, PlusCircle } from 'lucide-react'
import { revalidatePath } from 'next/cache'


async function deleteProduct(formData: FormData) {
  'use server'

  const id = Number(formData.get('id'))

  await prisma.product.delete({
    where: { id },
  })

  revalidatePath('/admin')
  revalidatePath('/')
}

export default async function AdminPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black">Painel Administrativo</h1>
          <p className="mt-2 text-slate-400">
            Gerencie os produtos e ofertas do TechOfertas.
          </p>
        </div>

       <a
  href="/admin/produtos/novo"
  className="flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-3 font-bold hover:bg-brand-500"
>
  <PlusCircle size={18} />
  Novo Produto
</a>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/[.045] p-5">
          <Package className="text-brand-500" />
          <p className="mt-4 text-sm text-slate-400">Total de produtos</p>
          <strong className="text-3xl">{products.length}</strong>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[.045] p-5">
          <Tags className="text-brand-500" />
          <p className="mt-4 text-sm text-slate-400">Categorias</p>
          <strong className="text-3xl">
            {new Set(products.map((p) => p.category)).size}
          </strong>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[.045] p-5">
          <MousePointerClick className="text-brand-500" />
          <p className="mt-4 text-sm text-slate-400">Cliques</p>
          <strong className="text-3xl">0</strong>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[.045] p-5">
          <Package className="text-brand-500" />
          <p className="mt-4 text-sm text-slate-400">Ofertas ativas</p>
          <strong className="text-3xl">{products.length}</strong>
        </div>
      </div>
      <section className="mt-10 rounded-2xl border border-white/10 bg-white/[.045] p-5">
        <h2 className="mb-4 text-xl font-black">Produtos cadastrados</h2>

        {products.length === 0 ? (
          <p className="text-slate-400">Nenhum produto cadastrado.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-slate-400">
                <tr>
                  <th className="py-3">Produto</th>
                  <th>Categoria</th>
                  <th>Preço</th>
                  <th>Desconto</th>
                  <th>Loja</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t border-white/10">
                    <td className="py-4 font-bold">{product.title}</td>
                    <td>{product.category}</td>
                    <td className="text-emerald-400">{product.price}</td>
                    <td>{product.discount}</td>
                    <td>{product.store}</td>
                  <td className="flex gap-2 py-4">
  <a
    href={`/admin/produtos/${product.id}/editar`}
    className="rounded-lg bg-brand-600 px-3 py-2 text-xs font-bold hover:bg-brand-500"
  >
    Editar
  </a>

  <form action={deleteProduct}>
    <input type="hidden" name="id" value={product.id} />
    <button className="rounded-lg bg-red-600 px-3 py-2 text-xs font-bold hover:bg-red-500">
      Excluir
    </button>
  </form>
</td>




                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  )
}