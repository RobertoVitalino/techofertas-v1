import { ArrowRight, ShieldCheck, Truck, CreditCard, Link as LinkIcon } from 'lucide-react'
import Image from 'next/image'
export function Hero(){
 const benefits=[['Melhores ofertas','Os menores preços',ShieldCheck],['Compra segura','Ambiente protegido',ShieldCheck],['Entrega rápida','Para todo o Brasil',Truck],['Parcele em até 12x','No cartão de crédito',CreditCard],['Links de afiliado','Comissão rastreável',LinkIcon]]
 return <section id="início" className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07101d] p-8 md:p-12 bg-grid">
   <div className="absolute inset-0 bg-gradient-to-r from-[#07101d] via-[#07101d]/90 to-transparent" />
   <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
    <div><span className="rounded-full bg-yellow-500/15 px-3 py-1 text-xs font-bold text-yellow-300">VITALINO TECH</span><h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight md:text-6xl">As melhores ofertas de tecnologia <span className="text-brand-500">você encontra aqui!</span></h1><p className="mt-5 max-w-xl text-lg text-slate-300">Compare preços, divulgue produtos de afiliados e apresente seus serviços de TI em uma plataforma moderna.</p><a href="#ofertas-do-dia" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 font-bold hover:bg-brand-500">Ver ofertas <ArrowRight size={18}/></a></div>
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
   <div className="relative mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{benefits.map(([t,d,Icon]:any)=><div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-4"><Icon className="text-brand-500"/><strong className="mt-2 block text-sm">{t}</strong><p className="text-xs text-slate-400">{d}</p></div>)}</div>
  </section>
}
