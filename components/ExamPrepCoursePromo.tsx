import { ArrowRight, BookOpenCheck, Clock3, ShieldCheck } from 'lucide-react'
import { examPrepStats } from '@/lib/exam-prep-course'

export function ExamPrepCoursePromo() {
  return (
    <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-950 via-slate-950 to-slate-900 p-5 text-white shadow-lg shadow-cyan-950/15">
      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-900/85 px-3 py-1 text-[11px] font-black uppercase tracking-[.14em] text-cyan-100">
        <ShieldCheck size={14} /> Curso gratuito
      </span>
      <h2 className="mt-3 text-lg font-black leading-snug sm:text-xl">
        Informática para Concursos Públicos
      </h2>
      <p className="mt-2 text-xs leading-6 text-slate-200 sm:text-sm">
        Revisão direto ao ponto para concursos da área policial e em geral,
        com dicas de banca e questões estilo Certo/Errado.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold text-cyan-100">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-300/30 bg-cyan-900/85 px-2.5 py-1.5">
          <BookOpenCheck size={14} /> {examPrepStats.topics} tópicos ·{' '}
          {examPrepStats.questions} questões
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-300/30 bg-cyan-900/85 px-2.5 py-1.5">
          <Clock3 size={14} /> {examPrepStats.workload.replace('h', ' horas')}
        </span>
      </div>

      <div className="mt-auto pt-4">
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-black text-white transition hover:bg-cyan-400"
          href="/curso-informatica-concursos"
        >
          Acessar o curso <ArrowRight size={15} />
        </a>
      </div>
    </section>
  )
}
