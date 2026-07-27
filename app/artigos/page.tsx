import { Header } from '@/components/Header'
import { articles } from '@/lib/blog'
import { ArrowRight, Clock3, Newspaper } from 'lucide-react'

export const metadata = {
  title: 'Artigos e guias de compra',
  description:
    'Guias práticos de compra e manutenção de notebooks, periféricos, câmeras de segurança e mais, escritos pela Vitalino Tech.',
}

export default function ArticlesPage() {
  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-5xl px-4 py-10">
        <p className="text-xs font-black uppercase tracking-[.18em] text-brand-600">
          Conteúdo
        </p>
        <h1 className="mt-2 text-3xl font-black sm:text-4xl">
          Artigos e guias de compra
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Guias práticos para ajudar você a escolher melhor e cuidar do que já
          tem, sem enrolação.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {articles.map((article) => (
            <a
              className="flex flex-col rounded-2xl border border-brand-200 bg-white/85 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              href={`/artigos/${article.slug}`}
              key={article.slug}
            >
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-brand-700">
                <Newspaper size={13} /> {article.category}
              </span>
              <h2 className="mt-4 text-lg font-black leading-snug">
                {article.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs font-bold text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 size={14} /> {article.readTimeMinutes} min de leitura
                </span>
                <span className="inline-flex items-center gap-1 text-brand-600">
                  Ler artigo <ArrowRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
