import { ArrowRight, BookOpenCheck, Clock3, ShieldCheck } from 'lucide-react'
import { securityCourseStats } from '@/lib/security-course'

export function SecurityCoursePromo() {
  return (
    <section className="overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-950 via-slate-950 to-sky-950 p-5 text-white shadow-lg shadow-indigo-950/15">
      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-sky-900/85 px-3 py-1 text-[11px] font-black uppercase tracking-[.14em] text-cyan-100">
        <ShieldCheck size={14} /> Curso gratuito
      </span>
      <h2 className="mt-3 text-lg font-black leading-snug sm:text-xl">
        Segurança da Informação: do Zero à Proteção na Prática
      </h2>
      <p className="mt-2 text-xs leading-6 text-slate-200 sm:text-sm">
        Proteja contas, dispositivos e dados, reconheça golpes financeiros e
        aplique boas práticas de LGPD, NIST CSF 2.0 e OWASP Top 10:2025.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold text-sky-100">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-300/30 bg-sky-900/85 px-2.5 py-1.5">
          <BookOpenCheck size={14} /> {securityCourseStats.modules} módulos e{' '}
          {securityCourseStats.lessons} aulas
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-300/30 bg-sky-900/85 px-2.5 py-1.5">
          <Clock3 size={14} /> {securityCourseStats.workload.replace('h', ' horas')}
        </span>
      </div>

      <a
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-xs font-black text-white transition hover:bg-sky-400"
        href="/curso-seguranca-da-informacao"
      >
        Acessar o curso <ArrowRight size={15} />
      </a>
    </section>
  )
}
