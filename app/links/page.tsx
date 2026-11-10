import { normalizeClickSource } from '@/lib/click-tracking'
import { prisma } from '@/lib/prisma'
import { TELEGRAM_CHANNEL_URL } from '@/lib/social'
import { BookOpen, Flame, Globe, MessageCircle, Send, Wrench } from 'lucide-react'
import type { Metadata } from 'next'

// Página de "link na bio" (TikTok, Instagram, YouTube).
// Use vitalinotech.com.br/links?origem=tiktok (ou instagram, youtube) para medir os cliques.

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Links e ofertas dos vídeos',
  description: 'Os produtos dos vídeos da Vitalino Tech, ofertas do dia e canal no Telegram.',
  robots: { index: false },
}

const WHATSAPP_URL =
  'https://wa.me/5567984793793?text=Ol%C3%A1%2C%20vim%20pelas%20redes%20sociais%20e%20gostaria%20de%20um%20or%C3%A7amento.'

export default async function LinksPage({ searchParams }: { searchParams: Promise<{ origem?: string }> }) {
  const { origem } = await searchParams
  const source = origem ? normalizeClickSource(origem) : 'tiktok'

  const videoPosts = await prisma.offerPost.findMany({
    where: { channel: 'video' },
    orderBy: { createdAt: 'desc' },
    select: { productId: true },
    take: 30,
  })
  const ids = videoPosts.map((post) => post.productId).filter((id, index, all) => all.indexOf(id) === index).slice(0, 12)
  const found = await prisma.product.findMany({ where: { id: { in: ids }, active: true } })
  const products = ids.map((id) => found.find((product) => product.id === id)).filter((p) => p !== undefined)

  const links = [
    { href: TELEGRAM_CHANNEL_URL, label: 'Canal de ofertas no Telegram', icon: Send, color: 'bg-sky-500 hover:bg-sky-400' },
    { href: '/melhores/ofertas-de-tecnologia-do-dia', label: 'Maiores descontos de hoje', icon: Flame, color: 'bg-orange-500 hover:bg-orange-400' },
    { href: '/melhores', label: 'Guias de compra', icon: BookOpen, color: 'bg-brand-600 hover:bg-brand-500' },
    { href: WHATSAPP_URL, label: 'Assistência técnica (WhatsApp)', icon: Wrench, color: 'bg-emerald-600 hover:bg-emerald-500' },
    { href: '/', label: 'Site Vitalino Tech', icon: Globe, color: 'bg-slate-700 hover:bg-slate-600' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#062a5c] to-[#0b6bd3] px-4 py-8 text-white">
      <div className="mx-auto max-w-md">
        <header className="text-center">
          <p className="text-2xl font-black text-yellow-300">VITALINO TECH OFERTAS</p>
          <p className="mt-1 text-sm text-sky-100">Ofertas conferidas todo dia no Mercado Livre</p>
        </header>

        {products.length > 0 && (
          <section className="mt-7">
            <h1 className="flex items-center gap-2 text-lg font-black">
              <MessageCircle size={20} /> Produtos dos vídeos
            </h1>
            <div className="mt-3 grid gap-3">
              {products.map((product) => {
                const hasDiscount = product.discount && product.discount !== '-0%' && product.oldPrice !== product.price
                return (
                  <a
                    key={product.id}
                    href={`/ir/${product.id}?origem=${source}`}
                    rel="sponsored noopener"
                    className="flex items-center gap-3 rounded-2xl bg-white p-3 text-slate-900 shadow-lg transition hover:scale-[1.01]"
                  >
                    {/^https?:\/\//.test(product.image) && (
                      <img src={product.image} alt="" className="h-20 w-20 shrink-0 rounded-xl object-contain" loading="lazy" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-sm font-bold leading-5">{product.title}</p>
                      <p className="mt-1 text-xs">
                        {hasDiscount && <span className="mr-1 text-slate-500 line-through">{product.oldPrice}</span>}
                        <span className="text-lg font-black text-emerald-700">{product.price}</span>
                        {hasDiscount && <span className="ml-1 font-black text-emerald-700">{product.discount.replace('-', '')} OFF</span>}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-lg bg-brand-600 px-3 py-2 text-xs font-black text-white">Ver</span>
                  </a>
                )
              })}
            </div>
          </section>
        )}

        <section className="mt-7 grid gap-3">
          {links.map(({ href, label, icon: Icon, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-black shadow-lg ${color}`}
            >
              <Icon size={18} /> {label}
            </a>
          ))}
        </section>

        <p className="mt-8 text-center text-[11px] leading-5 text-sky-100">
          Preços e estoque podem mudar a qualquer momento. A compra é feita no Mercado Livre. Alguns links são de afiliado, sem custo extra para você.
        </p>
      </div>
    </main>
  )
}
