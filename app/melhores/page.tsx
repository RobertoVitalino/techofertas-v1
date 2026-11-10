import { Header } from '@/components/Header'
import { guides } from '@/lib/seo-guides'
import { SITE_URL } from '@/lib/site'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guias de compra: os melhores produtos com preço atualizado',
  description: 'Guias de compra da Vitalino Tech: melhores celulares, notebooks, TVs, fones e acessórios, com preços do Mercado Livre atualizados todo dia.',
  alternates: { canonical: `${SITE_URL}/melhores` },
}

export default function GuidesIndexPage() {
  return (
    <main className="site-light-theme min-h-screen">
      <Header />
      <div className="mx-auto max-w-5xl px-4 py-10">
        <p className="text-xs font-black uppercase tracking-wide text-brand-600">Guias de compra</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Os melhores produtos, com preço atualizado todo dia</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Listas montadas a partir dos produtos mais vendidos do Mercado Livre, com dicas de como escolher. Os preços são
          conferidos automaticamente todas as manhãs.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {guides.map((guide) => (
            <a key={guide.slug} href={`/melhores/${guide.slug}`} className="group rounded-2xl border border-sky-200 bg-white/85 p-5 hover:border-sky-400">
              <h2 className="text-lg font-black text-slate-900 group-hover:text-sky-800">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{guide.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-black text-sky-700">
                Ver lista <ArrowRight size={15} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
