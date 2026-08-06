import { ArrowRight, BookOpenCheck, Clock3, ShieldCheck } from 'lucide-react'
import { mathExamStats } from '@/lib/math-exam-course'

export function MathExamCoursePromo() {
  return (
    <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-900 p-5 text-white shadow-lg shadow-indigo-950/15">
      <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-900/85 px-3 py-1 text-[11px] font-black uppercase tracking-[.14em] text-indigo-100">
        <ShieldCheck size={14} /> Curso gratuito
      </span>
      <h2 className="mt-3 text-lg font-black leading-snug sm:text-xl">
        Matemática Básica para Concursos Públicos
      </h2>
      <p className="mt-2 text-xs leading-6 text-slate-200 sm:text-sm">
        Frações, porcentagem, regra de três, juros e raciocínio lógico —
        revisão direto ao ponto com questões estilo banca.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold text-indigo-100">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-300/30 bg-indigo-900/85 px-2.5 py-1.5">
          <BookOpenCheck size={14} /> {mathExamStats.topics} tópicos ·{' '}
          {mathExamStats.questions} questões
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-300/30 bg-indigo-900/85 px-2.5 py-1.5">
          <Clock3 size={14} /> {mathExamStats.workload.replace('h', ' horas')}
        </span>
      </div>

      <div className="mt-auto pt-4">
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2.5 text-xs font-black text-white transition hover:bg-indigo-400"
          href="/curso-matematica-concursos"
        >
          Acessar o curso <ArrowRight size={15} />
        </a>
      </div>
    </section>
  )
}
