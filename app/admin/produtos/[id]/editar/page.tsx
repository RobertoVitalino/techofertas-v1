import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

async function updateProduct(formData: FormData) {
  'use server'

  const id = Number(formData.get('id'))

  await prisma.product.update({
    where: { id },
    data: {
      title: String(formData.get('title')),
      category: String(formData.get('category')),
      price: String(formData.get('price')),
      oldPrice: String(formData.get('oldPrice')),
      discount: String(formData.get('discount')),
      image: String(formData.get('image')),
      rating: Number(formData.get('rating')),
      store: String(formData.get('store')),
      installments: String(formData.get('installments')),
      shipping: String(formData.get('shipping')),
      affiliate: String(formData.get('affiliate')),
    },
  })

  revalidatePath('/')
  revalidatePath('/admin')
  revalidatePath(`/produto/${id}`)
  redirect('/admin')
}

export default async function EditProductPage({
  params,
}: {
  params: { id: string }
}) {
  const product = await prisma.product.findUnique({
    where: { id: Number(params.id) },
  })

  if (!product) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-black">Produto não encontrado</h1>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-black">Editar Produto</h1>
      <p className="mt-2 text-slate-400">
        Atualize os dados do produto cadastrado.
      </p>

      <form action={updateProduct} className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/[.045] p-6">
        <input type="hidden" name="id" defaultValue={product.id} />

        <input name="title" defaultValue={product.title} placeholder="Nome do produto" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="category" defaultValue={product.category} placeholder="Categoria" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="price" defaultValue={product.price} placeholder="Preço atual" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="oldPrice" defaultValue={product.oldPrice} placeholder="Preço antigo" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="discount" defaultValue={product.discount} placeholder="Desconto" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="image" defaultValue={product.image} placeholder="Imagem ou emoji" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="rating" defaultValue={product.rating} type="number" placeholder="Avaliações" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="store" defaultValue={product.store} placeholder="Loja" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="installments" defaultValue={product.installments} placeholder="Parcelamento" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="shipping" defaultValue={product.shipping} placeholder="Frete" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="affiliate" defaultValue={product.affiliate} placeholder="Link de afiliado" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />

        <button className="rounded-xl bg-brand-600 px-4 py-3 font-bold hover:bg-brand-500">
          Salvar Alterações
        </button>
      </form>
    </main>
  )
}
