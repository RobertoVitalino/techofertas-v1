import { categories, posts, services } from '@/lib/data'
import { ProductCard } from './ProductCard'
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react'

export function Categories() {
  return (
    <section id="categorias">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black">Categorias em destaque</h2>
          <p className="mt-1 text-sm text-slate-400">
            Encontre rapidamente os produtos mais procurados.
          </p>
        </div>

        <a
          className="hidden text-sm font-bold text-brand-500 md:block"
          href="#produtos-por-categoria"
        >
          Ver produtos do site →
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
        {categories.map(({ name, offers, icon: Icon, affiliate }) => (
          <a
            aria-label={`Ver ofertas de ${name} no Mercado Livre`}
            className="card-hover group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.075] to-white/[.025] p-5 text-center"
            href={affiliate}
            key={name}
            rel="sponsored noopener noreferrer"
            target="_blank"
          >
            <ArrowUpRight
              aria-hidden="true"
              className="absolute right-3 top-3 text-slate-500 transition group-hover:text-brand-500"
              size={16}
            />

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/15">
              <Icon className="text-brand-500" />
            </div>

            <strong className="mt-4 block">{name}</strong>
            <p className="mt-1 text-sm text-slate-400">{offers} ofertas</p>
            <span className="mt-3 block text-xs font-bold text-brand-500">
              Ver no Mercado Livre
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

const categoryOrder = [
  'Notebooks',
  'Impressora',
  'Monitores',
  'Armazenamento',
  'Componentes',
  'Periféricos',
  'Redes',
  'Energia',
]

function categoryId(category: string) {
  return category
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function Products({ products }: { products: any[] }) {
  const groupedProducts = Object.entries(
    products.reduce<Record<string, any[]>>((groups, product) => {
      const category = product.category || 'Outros'
      groups[category] = [...(groups[category] || []), product]
      return groups
    }, {}),
  ).sort(([categoryA], [categoryB]) => {
    const indexA = categoryOrder.indexOf(categoryA)
    const indexB = categoryOrder.indexOf(categoryB)

    if (indexA === -1 && indexB === -1) {
      return categoryA.localeCompare(categoryB, 'pt-BR')
    }

    if (indexA === -1) return 1
    if (indexB === -1) return -1
    return indexA - indexB
  })

  return (
    <section id="produtos-por-categoria" className="scroll-mt-36">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-black">Produtos por seção</h2>
          <p className="mt-1 text-sm text-slate-400">
            Navegue pelas categorias e encontre as melhores ofertas.
          </p>
        </div>

        <span className="w-fit rounded-lg bg-brand-500/15 px-3 py-1 text-xs font-bold text-brand-100">
          {products.length} produtos
        </span>
      </div>

      {products.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[.045] p-6 text-slate-400">
          Nenhum produto cadastrado ainda.
        </div>
      ) : (
        <div className="space-y-8">
          {groupedProducts.map(([category, categoryProducts]) => (
            <section
              className="scroll-mt-36 rounded-3xl border border-white/10 bg-white/[.025] p-4 sm:p-5"
              id={`secao-${categoryId(category)}`}
              key={category}
            >
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-500">
                    Seção
                  </p>
                  <h3 className="mt-1 text-xl font-black">{category}</h3>
                </div>

                <span className="rounded-full bg-white/[.07] px-3 py-1 text-xs font-bold text-slate-300">
                  {categoryProducts.length}{' '}
                  {categoryProducts.length === 1 ? 'produto' : 'produtos'}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </section>
  )
}

export function Services() {
  return (
    <section id="serviços">
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-black">Serviços de TI</h2>
          <p className="mt-1 text-sm text-slate-400">
            Soluções profissionais em tecnologia para pessoas e empresas.
          </p>
        </div>

        <a className="cursor-pointer text-sm font-bold text-brand-500">
          Solicitar orçamento →
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {services.map(({ title, description, icon: Icon }) => (
          <div
            className="card-hover rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.07] to-white/[.025] p-5"
            key={title}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/15">
              <Icon className="text-brand-500" />
            </div>

            <h3 className="mt-4 font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {description}
            </p>

            <a className="mt-4 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-brand-500">
              Saiba mais <ArrowRight size={15} />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Blog() {
  return (
    <section id="blog">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black">Últimos artigos do blog</h2>
          <p className="mt-1 text-sm text-slate-400">
            Conteúdo para atrair visitantes pelo Google.
          </p>
        </div>

        <a className="hidden cursor-pointer text-sm font-bold text-brand-500 md:block">
          Ver blog →
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {posts.map((p) => (
          <article
            className="card-hover rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.07] to-white/[.025] p-5"
            key={p.title}
          >
            <span className="rounded-lg bg-brand-600/20 px-2 py-1 text-xs font-bold text-brand-100">
              {p.tag}
            </span>

            <h3 className="mt-4 font-bold leading-snug">{p.title}</h3>

            <div className="mt-4 flex items-center gap-1 text-sm text-yellow-400">
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} />
            </div>

            <p className="mt-3 text-sm text-slate-400">{p.date}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
