import { ArrowRight, BookOpenCheck, Clock3, FileSpreadsheet } from 'lucide-react'
import { excelCourseStats } from '@/lib/excel-course'

export function ExcelCoursePromo() {
  return (
    <section className="overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-950 via-slate-950 to-indigo-950 p-5 text-white shadow-lg shadow-violet-950/15">
      <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-violet-900/85 px-3 py-1 text-[11px] font-black uppercase tracking-[.14em] text-violet-100">
        <FileSpreadsheet size={14} /> Curso gratuito
      </span>
      <h2 className="mt-3 text-lg font-black leading-snug sm:text-xl">
        Excel na Prática: do Básico às Tabelas Dinâmicas
      </h2>
      <p className="mt-2 text-xs leading-6 text-slate-200 sm:text-sm">
        Fórmulas, funções essenciais, PROCV/PROCX, gráficos e tabelas
        dinâmicas, com vídeo em cada aula.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold text-violet-100">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-violet-300/30 bg-violet-900/85 px-2.5 py-1.5">
          <BookOpenCheck size={14} /> {excelCourseStats.modules} módulos e{' '}
          {excelCourseStats.lessons} aulas
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-violet-300/30 bg-violet-900/85 px-2.5 py-1.5">
          <Clock3 size={14} /> {excelCourseStats.workload.replace('h', ' horas')}
        </span>
      </div>

      <a
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2.5 text-xs font-black text-white transition hover:bg-violet-400"
        href="/curso-excel"
      >
        Acessar o curso <ArrowRight size={15} />
      </a>
    </section>
  )
}
