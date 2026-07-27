import { ArrowRight, BookOpenCheck, Clock3, Laptop } from 'lucide-react'
import { computingCourseStats } from '@/lib/computing-course'

export function ComputingCoursePromo() {
  return (
    <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 p-5 text-white shadow-lg shadow-emerald-950/15">
      <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-emerald-900/85 px-3 py-1 text-[11px] font-black uppercase tracking-[.14em] text-teal-100">
        <Laptop size={14} /> Curso gratuito
      </span>
      <h2 className="mt-3 text-lg font-black leading-snug sm:text-xl">
        Computação Básica: do Zero ao Dia a Dia Digital
      </h2>
      <p className="mt-2 text-xs leading-6 text-slate-200 sm:text-sm">
        Use o computador com confiança: sistema operacional, arquivos,
        internet, e-mail, Word, Excel e PowerPoint, com vídeo em cada aula.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold text-emerald-100">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-teal-300/30 bg-emerald-900/85 px-2.5 py-1.5">
          <BookOpenCheck size={14} /> {computingCourseStats.modules} módulos e{' '}
          {computingCourseStats.lessons} aulas
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-teal-300/30 bg-emerald-900/85 px-2.5 py-1.5">
          <Clock3 size={14} /> {computingCourseStats.workload.replace('h', ' horas')}
        </span>
      </div>

      <div className="mt-auto pt-4">
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-xs font-black text-white transition hover:bg-emerald-400"
          href="/curso-computacao-basica"
        >
          Acessar o curso <ArrowRight size={15} />
        </a>
      </div>
    </section>
  )
}
