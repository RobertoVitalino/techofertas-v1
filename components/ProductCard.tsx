import { ExternalLink, Store } from 'lucide-react'
import { TrackedLink } from './TrackedLink'

type Product = {
  id: number
  title: string
  category: string
  image: string
  affiliate: string
  store?: string
  price: string
  oldPrice: string
  discount: string
  installments: string
}

function isImagePath(value: string) {
  return (
    value.startsWith('/produtos/') ||
    value.startsWith('http://') ||
    value.startsWith('https://')
  )
}

export function ProductCard({ product }: { product: Product }) {
  const detailsUrl = `/produto/${product.id}`
  const hasDiscount = product.discount && product.discount !== '-0%'

  return (
    <article className="card-hover relative flex h-full flex-col rounded-xl border border-white/10 bg-gradient-to-br from-white/[.08] to-white/[.03] p-3">
      <a href={detailsUrl} aria-label={`Ver detalhes de ${product.title}`}>
        <div className="grid h-40 place-items-center overflow-hidden rounded-lg bg-white/5">
          {isImagePath(product.image) ? (
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-5xl" role="img" aria-label={product.title}>
              {product.image}
            </span>
          )}
        </div>
      </a>

      <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-brand-500">
        {product.category}
      </p>

      <h3 className="mt-1 line-clamp-2 h-[2.3rem] text-sm font-bold leading-[1.15rem] hover:text-brand-500">
        <a href={detailsUrl}>{product.title}</a>
      </h3>

      <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50/80 p-2.5">
        <p className="text-[10px] font-black uppercase tracking-wide text-sky-800">
          Preço e disponibilidade
        </p>
        <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          {hasDiscount && (
            <span className="text-xs text-slate-500 line-through">
              {product.oldPrice}
            </span>
          )}
          <span className="text-lg font-black text-slate-900">
            {product.price}
          </span>
          {hasDiscount && (
            <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-black text-emerald-700">
              {product.discount}
            </span>
          )}
        </div>
        {product.installments && (
          <p className="mt-0.5 truncate text-[11px] text-slate-600">
            {product.installments}
          </p>
        )}
      </div>

      {product.store && (
        <p className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-500">
          <Store size={13} /> Compra realizada no {product.store}
        </p>
      )}

      <div className="mt-auto pt-3">
        <TrackedLink
          eventName="affiliate_click"
          eventData={{ product: product.title, store: product.store ?? '' }}
          href={product.affiliate}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-3 py-2.5 text-center text-xs font-bold transition hover:bg-brand-500"
        >
          Comprar <ExternalLink size={14} />
        </TrackedLink>
      </div>
    </article>
  )
}
