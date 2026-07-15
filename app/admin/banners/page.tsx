import { requireAdmin } from '@/lib/require-admin'
import { ExternalLink, Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'

export default async function AdminBannersPage() {
  await requireAdmin()
  return <div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-400">Destaques visuais</p><h1 className="mt-2 text-3xl font-black sm:text-4xl">Banners</h1><p className="mt-2 text-slate-400">Visualize os materiais ativos na página principal.</p><section className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[.04]"><div className="relative aspect-[4/3] max-h-[650px] w-full overflow-hidden"><Image src="/banner-produtos-destaque.jpg" alt="Banner de produtos em destaque" fill sizes="(min-width: 1024px) 70vw, 100vw" className="object-cover" priority /></div><div className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-400"><ImageIcon size={21} /></span><div><h2 className="font-black">Banner principal de produtos</h2><p className="text-sm text-slate-400">Ativo na página inicial</p></div></div><a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-bold hover:border-white/20"><ExternalLink size={17} /> Ver na loja</a></div></section></div>
}
