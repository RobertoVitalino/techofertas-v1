import { CopyButton } from '@/components/CopyButton'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/require-admin'
import { MousePointerClick, Send, TrendingUp } from 'lucide-react'

export const dynamic = 'force-dynamic'

const SOURCE_LABELS: Record<string, string> = {
  site: 'Site (vitrine)',
  produto: 'Página do produto',
  telegram: 'Telegram',
  whatsapp: 'WhatsApp',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  youtube: 'YouTube',
  pinterest: 'Pinterest',
  facebook: 'Facebook',
  email: 'E-mail',
  google: 'Google',
}

export default async function AdminOffersPage() {
  await requireAdmin()

  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

  const [totalClicks, bySource, byProduct, whatsappPosts, telegramCount] = await Promise.all([
    prisma.affiliateClick.count({ where: { createdAt: { gte: since } } }),
    prisma.affiliateClick.groupBy({
      by: ['source'],
      where: { createdAt: { gte: since } },
      _count: { _all: true },
    }),
    prisma.affiliateClick.groupBy({
      by: ['productId'],
      where: { createdAt: { gte: since }, productId: { not: null } },
      _count: { _all: true },
      orderBy: { _count: { productId: 'desc' } },
      take: 10,
    }),
    prisma.offerPost.findMany({
      where: { channel: 'whatsapp' },
      orderBy: { createdAt: 'desc' },
      take: 10,
    }),
    prisma.offerPost.count({ where: { channel: 'telegram', createdAt: { gte: since } } }),
  ])

  const productIds = byProduct.map((row) => row.productId).filter((id): id is number => id !== null)
  const products = await prisma.product.findMany({
    where: { id: { in: productIds } },
    select: { id: true, title: true, price: true },
  })
  const productById = new Map(products.map((product) => [product.id, product]))
  const sources = [...bySource].sort((a, b) => b._count._all - a._count._all)
  const largestSource = sources[0]?._count._all || 1

  return (
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-400">Crescimento</p>
      <h1 className="mt-2 text-3xl font-black sm:text-4xl">Ofertas e cliques</h1>
      <p className="mt-2 text-slate-400">Últimos 30 dias: de onde vêm os cliques nos links de afiliado e o que o robô de ofertas publicou.</p>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
          <MousePointerClick className="text-brand-400" />
          <p className="mt-4 text-sm text-slate-400">Cliques em &quot;Comprar&quot;</p>
          <strong className="text-3xl">{totalClicks}</strong>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
          <TrendingUp className="text-emerald-400" />
          <p className="mt-4 text-sm text-slate-400">Melhor origem</p>
          <strong className="text-3xl">{sources[0] ? SOURCE_LABELS[sources[0].source] ?? sources[0].source : '—'}</strong>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
          <Send className="text-violet-400" />
          <p className="mt-4 text-sm text-slate-400">Posts no Telegram</p>
          <strong className="text-3xl">{telegramCount}</strong>
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-white/[.04] p-6">
          <h2 className="text-xl font-black">Cliques por origem</h2>
          {sources.length === 0 ? (
            <p className="mt-4 text-sm text-slate-400">Ainda não há cliques registrados.</p>
          ) : (
            <div className="mt-6 grid gap-5">
              {sources.map((row) => (
                <div key={row.source}>
                  <div className="mb-2 flex justify-between gap-4 text-sm">
                    <strong>{SOURCE_LABELS[row.source] ?? row.source}</strong>
                    <span className="text-slate-400">{row._count._all} cliques</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-600 to-cyan-400"
                      style={{ width: `${Math.max(6, (row._count._all / largestSource) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[.04] p-6">
          <h2 className="text-xl font-black">Produtos mais clicados</h2>
          {byProduct.length === 0 ? (
            <p className="mt-4 text-sm text-slate-400">Ainda não há cliques registrados.</p>
          ) : (
            <ol className="mt-4 grid gap-3 text-sm">
              {byProduct.map((row, index) => {
                const product = row.productId ? productById.get(row.productId) : undefined
                return (
                  <li key={row.productId ?? index} className="flex items-start justify-between gap-4 border-t border-white/10 pt-3">
                    <span className="line-clamp-2"><strong className="text-brand-400">{index + 1}.</strong> {product?.title ?? 'Produto removido do catálogo'}</span>
                    <span className="shrink-0 font-bold">{row._count._all}</span>
                  </li>
                )
              })}
            </ol>
          )}
        </section>
      </div>

      <section className="mt-8 rounded-2xl border border-white/10 bg-white/[.04] p-6">
        <h2 className="text-xl font-black">Mensagens prontas para o WhatsApp</h2>
        <p className="mt-1 text-sm text-slate-400">O robô gera uma mensagem a cada publicação. Copie e cole no seu canal ou grupo do WhatsApp.</p>
        {whatsappPosts.length === 0 ? (
          <p className="mt-4 text-sm text-slate-400">Nenhuma mensagem gerada ainda. Elas aparecem aqui depois que o robô rodar.</p>
        ) : (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {whatsappPosts.map((post) => (
              <article key={post.id} className="flex flex-col rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs text-slate-500">
                  {post.createdAt.toLocaleString('pt-BR', { timeZone: 'America/Campo_Grande' })}
                </p>
                <pre className="mt-2 flex-1 whitespace-pre-wrap font-sans text-sm text-slate-200">{post.text}</pre>
                <div className="mt-3">
                  <CopyButton text={post.text} label="Copiar para o WhatsApp" />
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
