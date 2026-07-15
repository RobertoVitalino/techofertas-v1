import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/require-admin'

async function createProduct(formData: FormData) {
  'use server'

  await requireAdmin()

  await prisma.product.create({
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
  redirect('/admin')
}

export default async function NewProductPage() {
  await requireAdmin()

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-black">Novo Produto</h1>
      <p className="mt-2 text-slate-400">
        Cadastre uma nova oferta da Vitalino Tech.
      </p>

      <form action={createProduct} className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/[.045] p-6">
        <input name="title" placeholder="Nome do produto" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="category" placeholder="Categoria" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="price" placeholder="Preço atual" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="oldPrice" placeholder="Preço antigo" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="discount" placeholder="Desconto. Ex: -15%" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="image" placeholder="Imagem ou emoji. Ex: 💻" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="rating" placeholder="Avaliações. Ex: 128" type="number" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="store" placeholder="Loja. Ex: Mercado Livre" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="installments" placeholder="Parcelamento. Ex: 10x de R$ 299,90" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="shipping" placeholder="Frete. Ex: Frete grátis" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />
        <input name="affiliate" placeholder="Link de afiliado" required className="rounded-xl bg-black/40 px-4 py-3 outline-none" />

        <button className="rounded-xl bg-brand-600 px-4 py-3 font-bold hover:bg-brand-500">
          Salvar Produto
        </button>
      </form>
    </main>
  )
}
