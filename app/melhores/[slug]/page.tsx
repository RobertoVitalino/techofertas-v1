import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import { prisma } from '@/lib/prisma'
import { getGuide, guides, parsePrice, selectGuideProducts } from '@/lib/seo-guides'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import { TELEGRAM_CHANNEL_URL } from '@/lib/social'
import { ArrowLeft, CheckCircle2, Send } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Recalcula no máximo a cada hora: os preços mudam uma vez por dia.
export const revalidate = 3600

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return {}
  const url = `${SITE_URL}/melhores/${guide.slug}`
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: { title: guide.title, description: guide.description, url, siteName: SITE_NAME, type: 'article' },
  }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  const allProducts = await prisma.product.findMany({ where: { active: true } })
  const products = selectGuideProducts(guide, allProducts)
  const updatedAt = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Campo_Grande' })
  const url = `${SITE_URL}/melhores/${guide.slug}`
  const related = guides.filter((other) => other.slug !== guide.slug).slice(0, 6)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: guide.title,
      url,
      itemListElement: products.slice(0, 20).map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.title,
          image: product.image.startsWith('http') ? product.image : undefined,
          url: `${SITE_URL}/produto/${product.id}`,
          offers: {
            '@type': 'Offer',
            price: parsePrice(product.price).toFixed(2),
            priceCurrency: 'BRL',
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/produto/${product.id}`,
          },
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: guide.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ]

  return (
    <main className="site-light-theme min-h-screen">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="mx-auto max-w-7xl px-4 py-8">
        <a className="mb-6 inline-flex items-center gap-2 text-sm font-black text-sky-700 hover:text-sky-900" href="/melhores">
          <ArrowLeft size={17} /> Todos os guias de compra
        </a>

        <header className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-wide text-brand-600">Guia de compra · atualizado em {updatedAt}</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">{guide.title}</h1>
          <p className="mt-4 text-base leading-7 text-slate-700">{guide.intro}</p>
        </header>

        <section className="mt-8">
          <h2 className="text-xl font-black text-slate-900">
            {products.length > 0 ? `${products.length} opções selecionadas` : 'Nenhum produto nesta lista hoje'}
          </h2>
          {products.length === 0 ? (
            <p className="mt-3 text-slate-600">
              Os produtos desta lista mudam conforme os preços do dia. Volte amanhã ou veja o{' '}
              <a className="font-bold text-sky-700" href="/produtos">catálogo completo</a>.
            </p>
          ) : (
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product, index) => (
                <div key={product.id} className="relative">
                  <span className="absolute left-2 top-2 z-10 grid h-7 w-7 place-items-center rounded-full bg-brand-600 text-xs font-black text-white">
                    {index + 1}
                  </span>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900">Como escolher</h2>
          <ul className="mt-4 grid gap-4">
            {guide.tips.map((tip) => (
              <li key={tip.title} className="flex gap-3 rounded-xl border border-sky-200 bg-white/80 p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={20} />
                <div>
                  <h3 className="font-black text-slate-900">{tip.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{tip.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900">Perguntas frequentes</h2>
          <div className="mt-4 grid gap-3">
            {guide.faq.map((item) => (
              <details key={item.q} className="rounded-xl border border-sky-200 bg-white/80 p-4">
                <summary className="cursor-pointer font-black text-slate-900">{item.q}</summary>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <a
          className="mt-10 flex max-w-3xl items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-4 text-sm font-black text-white hover:bg-sky-400"
          href={TELEGRAM_CHANNEL_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Send size={16} /> Receba as ofertas no Telegram assim que o preço cair
        </a>

        <p className="mt-6 max-w-3xl text-xs leading-5 text-slate-500">
          Preços e disponibilidade conferidos diariamente no Mercado Livre e sujeitos a alteração. A compra é feita no
          Mercado Livre. Alguns links são de afiliado: podemos receber uma comissão, sem custo extra para você.
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-black text-slate-900">Outros guias</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((other) => (
              <a key={other.slug} href={`/melhores/${other.slug}`} className="rounded-xl border border-sky-200 bg-white/80 p-4 font-bold text-slate-800 hover:border-sky-400 hover:text-sky-800">
                {other.title}
              </a>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}
