import { ArrowRight, BookOpenCheck, Clock3, Keyboard } from 'lucide-react'
import { typingCourseStats } from '@/lib/typing-course'

export function TypingCoursePromo() {
  return (
    <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-950 via-slate-950 to-slate-900 p-5 text-white shadow-lg shadow-rose-950/15">
      <span className="inline-flex items-center gap-2 rounded-full border border-rose-300/30 bg-rose-900/85 px-3 py-1 text-[11px] font-black uppercase tracking-[.14em] text-rose-100">
        <Keyboard size={14} /> Curso gratuito
      </span>
      <h2 className="mt-3 text-lg font-black leading-snug sm:text-xl">
        Digitação: Curso de Digitação por Toque do Zero
      </h2>
      <p className="mt-2 text-xs leading-6 text-slate-200 sm:text-sm">
        Aprenda a digitar sem olhar para o teclado, com exercícios de
        velocidade e precisão medidos em tempo real em cada aula.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold text-rose-100">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-rose-300/30 bg-rose-900/85 px-2.5 py-1.5">
          <BookOpenCheck size={14} /> {typingCourseStats.modules} módulos e{' '}
          {typingCourseStats.lessons} aulas
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-rose-300/30 bg-rose-900/85 px-2.5 py-1.5">
          <Clock3 size={14} /> {typingCourseStats.workload.replace('h', ' horas')}
        </span>
      </div>

      <div className="mt-auto pt-4">
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-rose-500 px-4 py-2.5 text-xs font-black text-white transition hover:bg-rose-400"
          href="/curso-digitacao"
        >
          Acessar o curso <ArrowRight size={15} />
        </a>
      </div>
    </section>
  )
}
