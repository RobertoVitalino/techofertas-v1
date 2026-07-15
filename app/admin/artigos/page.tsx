import { requireAdmin } from '@/lib/require-admin'
import { ExternalLink, Newspaper } from 'lucide-react'

const articles = [
  ['Como escolher o melhor notebook para trabalho e estudo', 'Guia'],
  ['5 celulares com melhor custo-benefício para comprar online', 'Review'],
  ['Guia completo para montar um PC gamer gastando menos', 'Tutorial'],
  ['Como a inteligência artificial pode ajudar pequenos negócios', 'Tecnologia'],
]

export default async function AdminArticlesPage() {
  await requireAdmin()
  return <div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-400">Conteúdo</p><h1 className="mt-2 text-3xl font-black sm:text-4xl">Artigos</h1><p className="mt-2 text-slate-400">Conteúdos publicados na seção de blog da loja.</p><section className="mt-8 grid gap-4 md:grid-cols-2">{articles.map(([title, type]) => <article key={title} className="rounded-2xl border border-white/10 bg-white/[.04] p-6"><div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-500/15 text-violet-300"><Newspaper size={21} /></span><span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">Publicado</span></div><p className="mt-5 text-xs font-bold uppercase tracking-wider text-brand-400">{type}</p><h2 className="mt-2 text-xl font-black">{title}</h2><a href="/#blog" target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white"><ExternalLink size={16} /> Ver no site</a></article>)}</section></div>
}
