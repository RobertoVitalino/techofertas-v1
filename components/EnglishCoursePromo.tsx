import { ArrowRight, BookOpenCheck, Clock3, Globe } from 'lucide-react'
import { englishCourseStats } from '@/lib/english-course'

export function EnglishCoursePromo() {
  return (
    <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950 p-5 text-white shadow-lg shadow-blue-950/15">
      <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-blue-900/85 px-3 py-1 text-[11px] font-black uppercase tracking-[.14em] text-indigo-100">
        <Globe size={14} /> Curso gratuito
      </span>
      <h2 className="mt-3 text-lg font-black leading-snug sm:text-xl">
        Inglês Básico: do Zero à Conversação do Dia a Dia
      </h2>
      <p className="mt-2 text-xs leading-6 text-slate-200 sm:text-sm">
        Alfabeto, números, verbo to be, perguntas, rotina e situações práticas
        de viagem, com vídeo em cada aula.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold text-indigo-100">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-300/30 bg-blue-900/85 px-2.5 py-1.5">
          <BookOpenCheck size={14} /> {englishCourseStats.modules} módulos e{' '}
          {englishCourseStats.lessons} aulas
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-300/30 bg-blue-900/85 px-2.5 py-1.5">
          <Clock3 size={14} /> {englishCourseStats.workload.replace('h', ' horas')}
        </span>
      </div>

      <div className="mt-auto pt-4">
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-xs font-black text-white transition hover:bg-blue-400"
          href="/curso-ingles-basico"
        >
          Acessar o curso <ArrowRight size={15} />
        </a>
      </div>
    </section>
  )
}
