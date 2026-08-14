import { ArrowRight, BookOpenCheck, Clock3, Sparkles } from 'lucide-react'
import { iaCourseStats } from '@/lib/ia-no-dia-a-dia-course'

export function AICoursePromo() {
  return (
    <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-fuchsia-200 bg-gradient-to-br from-violet-950 via-slate-950 to-fuchsia-950 p-5 text-white shadow-lg shadow-violet-950/15">
      <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-violet-900/85 px-3 py-1 text-[11px] font-black uppercase tracking-[.14em] text-fuchsia-100">
        <Sparkles size={14} /> Curso gratuito
      </span>
      <h2 className="mt-3 text-lg font-black leading-snug sm:text-xl">
        IA no Dia a Dia: ChatGPT, Gemini e Copilot na Prática
      </h2>
      <p className="mt-2 text-xs leading-6 text-slate-200 sm:text-sm">
        Escreva prompts melhores, use IA no trabalho e nos estudos, e
        aprenda a se proteger de golpes e deepfakes. Tudo em texto, sem vídeo.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold text-fuchsia-100">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-fuchsia-300/30 bg-violet-900/85 px-2.5 py-1.5">
          <BookOpenCheck size={14} /> {iaCourseStats.modules} módulos e{' '}
          {iaCourseStats.lessons} aulas
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-fuchsia-300/30 bg-violet-900/85 px-2.5 py-1.5">
          <Clock3 size={14} /> {iaCourseStats.workload.replace('h', ' horas')}
        </span>
      </div>

      <div className="mt-auto pt-4">
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-500 px-4 py-2.5 text-xs font-black text-white transition hover:bg-fuchsia-400"
          href="/curso-ia-no-dia-a-dia"
        >
          Acessar o curso <ArrowRight size={15} />
        </a>
      </div>
    </section>
  )
}
