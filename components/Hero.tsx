import { ArrowRight, ExternalLink, Link as LinkIcon, ShieldCheck, Store, Wrench } from 'lucide-react'
import Image from 'next/image'
export function Hero(){
 const benefits=[['Produtos selecionados','Informática e tecnologia',ShieldCheck],['Links diretos','Acesso ao anúncio original',LinkIcon],['Preço atualizado','Consulte no Mercado Livre',ExternalLink],['Compra no parceiro','Pagamento no Mercado Livre',Store],['Assistência técnica','Manutenção especializada',Wrench]]
 return <section id="início" className="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100 p-8 text-slate-900 shadow-xl shadow-sky-900/10 md:p-12 bg-grid">
   <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-sky-50/25 to-transparent" />
   <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
    <div><span className="rounded-full bg-sky-700 px-3 py-1 text-xs font-bold text-white">VITALINO TECH</span><h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight md:text-6xl">As melhores ofertas de tecnologia <span className="text-sky-700">você encontra aqui!</span></h1><p className="mt-5 max-w-xl text-lg text-slate-700">Encontre produtos de informática, acesse os anúncios originais no Mercado Livre e conheça nossos serviços de manutenção.</p><a href="#produtos-por-categoria" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-sky-700 px-6 py-3 font-bold text-white shadow-lg shadow-sky-700/20 transition hover:bg-sky-600">Ver produtos <ArrowRight size={18}/></a></div>
    <div className="relative">
     <div className="mx-auto aspect-[4/3] max-w-xl overflow-hidden rounded-3xl border border-brand-500/30 shadow-2xl shadow-brand-950/40">
      <Image
       src="/banner-produtos-destaque.jpg"
       alt="Monitor, headset e mouse gamer em destaque"
       width={1448}
       height={1086}
       priority
       sizes="(min-width: 1024px) 50vw, 100vw"
       className="h-full w-full object-cover"
      />
     </div>
    </div>
   </div>
   <div className="relative mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{benefits.map(([t,d,Icon]:any)=><div key={t} className="rounded-2xl border border-sky-200 bg-white/75 p-4 shadow-sm"><Icon className="text-sky-700"/><strong className="mt-2 block text-sm">{t}</strong><p className="text-xs text-slate-600">{d}</p></div>)}</div>
  </section>
}
