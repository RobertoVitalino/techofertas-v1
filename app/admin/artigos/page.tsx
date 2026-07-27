import { requireAdmin } from '@/lib/require-admin'
import { Newspaper } from 'lucide-react'

export default async function AdminArticlesPage() {
  await requireAdmin()
  return <div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-400">Conteúdo</p><h1 className="mt-2 text-3xl font-black sm:text-4xl">Artigos</h1><p className="mt-2 text-slate-400">O site ainda não tem uma seção de blog/artigos.</p><section className="mt-8 rounded-2xl border border-white/10 bg-white/[.04] p-5"><div className="grid place-items-center py-16 text-center"><Newspaper size={36} className="text-slate-500" /><h2 className="mt-4 font-black">Nenhum artigo publicado</h2><p className="mt-1 max-w-md text-sm text-slate-400">Essa área fica pronta para uso assim que a loja tiver uma seção de blog. Por enquanto não há conteúdo para gerenciar aqui.</p></div></section></div>
}
