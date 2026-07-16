type Product = {
  id: number
  title: string
  price: string
  oldPrice: string
  discount: string
  category: string
  image: string
  rating: number
  affiliate: string
  store?: string
  installments?: string
  shipping?: string
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
      <span className="absolute left-3 top-3 z-10 rounded-md bg-emerald-500 px-2 py-0.5 text-[10px] font-black text-black">
        {product.discount}
      </span>

      <a href={detailsUrl} aria-label={`Ver detalhes de ${product.title}`}>
        <div className="grid h-32 place-items-center overflow-hidden rounded-lg bg-white/5">
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

      <h3 className="mt-1 min-h-[48px] text-sm font-bold leading-4 hover:text-brand-500">
        <a href={detailsUrl}>{product.title}</a>
      </h3>

      <p className="mt-2 text-xl font-black leading-none text-emerald-400">
        {product.price}
      </p>

      <p className="mt-1 text-xs text-slate-500 line-through">{product.oldPrice}</p>

      {product.installments && (
        <p className="mt-1.5 text-[11px] leading-4 text-slate-300">
          💳 {product.installments}
        </p>
      )}

      {product.shipping && (
        <p className="mt-0.5 text-[11px] leading-4 text-emerald-400">
          🚚 {product.shipping}
        </p>
      )}

      {product.store && (
        <p className="mt-0.5 text-[11px] leading-4 text-slate-400">Loja: {product.store}</p>
      )}

      <div className="mt-2 flex items-center gap-0.5 text-sm text-yellow-400">
        ★★★★★
        <span className="text-slate-400">({product.rating})</span>
      </div>

      <div className="mt-auto pt-3">
        <a
          href={product.affiliate}
          target="_blank"
          rel="noreferrer"
          className="block rounded-lg bg-brand-600 px-3 py-2.5 text-center text-xs font-bold transition hover:bg-brand-500"
        >
          Ver oferta
        </a>
      </div>
    </article>
  )
}
