import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const benefits: Array<[string, string, LucideIcon]> = [
    ['Curadoria de tecnologia', 'Produtos selecionados para diferentes necessidades', ShieldCheck],
    ['Anúncios originais', 'Acesso direto aos produtos no Mercado Livre', ExternalLink],
    ['Assistência especializada', 'Computadores, notebooks e impressoras', Wrench],
    ['Conhecimento e proteção', 'Curso prático de segurança da informação', BookOpenCheck],
  ]

  return (
    <section
      id="início"
      className="bg-grid relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100 p-8 text-slate-900 shadow-xl shadow-sky-900/10 md:p-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-sky-50/30 to-transparent" />

      <div className="relative grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-700 px-3 py-1.5 text-xs font-black uppercase tracking-[.14em] text-white">
            <ShieldCheck size={15} /> Tecnologia, confiança e suporte
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] md:text-6xl">
            Tecnologia confiável para sua{' '}
            <span className="text-sky-700">casa, trabalho e negócio.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            A Vitalino Tech reúne produtos de informática selecionados, acesso
            direto aos anúncios no Mercado Livre, assistência técnica
            especializada e formação prática em segurança da informação.
          </p>

          <div className="mt-6 grid gap-2 text-sm font-semibold text-slate-700 sm:grid-cols-2">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="shrink-0 text-emerald-600" size={17} />
              Seleção clara e objetiva
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="shrink-0 text-emerald-600" size={17} />
              Atendimento profissional
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#produtos-por-categoria"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-700 px-6 py-3 font-bold text-white shadow-lg shadow-sky-700/20 transition hover:bg-sky-600"
            >
              Explorar ofertas <ArrowRight size={18} />
            </a>
            <a
              href="#serviços"
              className="inline-flex items-center gap-2 rounded-xl border border-sky-300 bg-white/80 px-6 py-3 font-bold text-sky-900 transition hover:border-sky-400 hover:bg-white"
            >
              <Wrench size={18} /> Conhecer a assistência
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-400/20 to-indigo-500/20 blur-2xl" />
          <div className="relative mx-auto aspect-[4/3] max-w-xl overflow-hidden rounded-3xl border border-sky-300/70 bg-white shadow-2xl shadow-sky-950/20">
            <Image
              src="/banner-produtos-destaque.jpg"
              alt="Monitor, headset e mouse gamer em destaque"
              width={1448}
              height={1086}
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(([title, description, Icon]) => (
          <div
            key={title}
            className="rounded-2xl border border-sky-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm"
          >
            <Icon className="text-sky-700" size={22} />
            <strong className="mt-2 block text-sm">{title}</strong>
            <p className="mt-1 text-xs leading-5 text-slate-600">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
