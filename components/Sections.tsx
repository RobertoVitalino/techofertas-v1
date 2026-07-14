import { categories, posts, products, services } from '@/lib/data'
import { ProductCard } from './ProductCard'
import { ArrowRight, Star, TrendingUp } from 'lucide-react'

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

        <a className="hidden cursor-pointer text-sm font-bold text-brand-500 md:block">
          Ver todas →
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
        {categories.map(({ name, offers, icon: Icon }) => (
          <div
            className="card-hover group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.075] to-white/[.025] p-5 text-center"
            key={name}
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/15">
              <Icon className="text-brand-500" />
            </div>

            <strong className="mt-4 block">{name}</strong>
            <p className="mt-1 text-sm text-slate-400">{offers} ofertas</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Products({ products }: { products: any[] }) {
  return (
    <section id="ofertas-do-dia">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-black">Ofertas do dia</h2>

          <span className="rounded-lg bg-red-500/20 px-3 py-1 text-xs font-bold text-red-300">
            Termina em 14:32:45
          </span>
        </div>

        <a className="cursor-pointer text-sm font-bold text-brand-500">
          Ver todas ofertas →
        </a>
      </div>

      <div className="mb-4 rounded-2xl border border-brand-500/20 bg-brand-500/10 px-4 py-3 text-sm text-brand-100">
        Produtos cadastrados diretamente no banco de dados.
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/[.045] p-6 text-slate-400">
            Nenhum produto cadastrado ainda.
          </div>
        ) : (
          products.map((p) => <ProductCard key={p.id} product={p} />)
        )}
      </div>
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