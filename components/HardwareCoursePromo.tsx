import { ArrowRight, BookOpenCheck, Clock3, Wrench } from 'lucide-react'
import { hardwareCourseStats } from '@/lib/hardware-course'

export function HardwareCoursePromo() {
  return (
    <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-950 via-slate-950 to-stone-950 p-5 text-white shadow-lg shadow-orange-950/15">
      <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-900/85 px-3 py-1 text-[11px] font-black uppercase tracking-[.14em] text-orange-100">
        <Wrench size={14} /> Curso gratuito
      </span>
      <h2 className="mt-3 text-lg font-black leading-snug sm:text-xl">
        Montagem e Manutenção de Computadores e Notebooks
      </h2>
      <p className="mt-2 text-xs leading-6 text-slate-200 sm:text-sm">
        Monte um PC do zero, configure a BIOS, faça manutenção preventiva e
        diagnostique problemas comuns, com vídeo em cada aula.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold text-orange-100">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-300/30 bg-orange-900/85 px-2.5 py-1.5">
          <BookOpenCheck size={14} /> {hardwareCourseStats.modules} módulos e{' '}
          {hardwareCourseStats.lessons} aulas
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-300/30 bg-orange-900/85 px-2.5 py-1.5">
          <Clock3 size={14} /> {hardwareCourseStats.workload.replace('h', ' horas')}
        </span>
      </div>

      <div className="mt-auto pt-4">
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-xs font-black text-white transition hover:bg-orange-400"
          href="/curso-montagem-manutencao"
        >
          Acessar o curso <ArrowRight size={15} />
        </a>
      </div>
    </section>
  )
}
