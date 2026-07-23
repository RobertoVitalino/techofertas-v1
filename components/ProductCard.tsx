import { ExternalLink, Store } from 'lucide-react'
import { TrackedLink } from './TrackedLink'

type Product = {
  id: number
  title: string
  category: string
  image: string
  affiliate: string
  store?: string
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

  return (
    <article className="card-hover relative flex h-full flex-col rounded-xl border border-white/10 bg-gradient-to-br from-white/[.08] to-white/[.03] p-3">
      <a href={detailsUrl} aria-label={`Ver detalhes de ${product.title}`}>
        <div className="grid h-36 place-items-center overflow-hidden rounded-lg bg-white/5">
          {isImagePath(product.image) ? (
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-contain p-2"
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

      <h3 className="mt-1 min-h-[52px] text-sm font-bold leading-[1.15rem] hover:text-brand-500">
        <a href={detailsUrl}>{product.title}</a>
      </h3>

      <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50/80 p-2.5">
        <p className="text-[10px] font-black uppercase tracking-wide text-sky-800">
          Preço e disponibilidade
        </p>
        <p className="mt-1 text-xs font-bold text-slate-700">
          Consulte os valores atualizados no anúncio
        </p>
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
          Ver preço atualizado <ExternalLink size={14} />
        </TrackedLink>
      </div>
    </article>
  )
}
