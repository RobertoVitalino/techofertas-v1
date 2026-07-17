import { ArrowRight, BookOpenCheck, Clock3, ShieldCheck } from 'lucide-react'
import { securityCourseStats } from '@/lib/security-course'

export function SecurityCoursePromo() {
  return (
    <section className="overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-950 via-slate-950 to-sky-950 p-6 text-white shadow-xl shadow-indigo-950/15 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.3fr_.7fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[.16em] text-sky-200">
            <ShieldCheck size={16} /> Curso gratuito
          </span>
          <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">
            Segurança da Informação: do Zero à Proteção na Prática
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">
            Aprenda a proteger contas, dispositivos, redes e dados, reconhecer
            golpes — com um módulo especial sobre falso gerente e falsas centrais
            bancárias —, organizar backups, responder a incidentes e aplicar boas
            práticas de LGPD, NIST CSF 2.0 e OWASP Top 10:2025.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-xs font-bold text-sky-100">
            <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
              <BookOpenCheck size={16} /> {securityCourseStats.modules} módulos e{' '}
              {securityCourseStats.lessons} aulas
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
              <Clock3 size={16} /> Aproximadamente {securityCourseStats.workload.replace('h', ' horas')}
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-cyan-300/30 bg-sky-900/85 p-5 shadow-lg shadow-black/20">
          <strong className="block text-lg">Acesso gratuito com cadastro</strong>
          <p className="mt-2 text-sm leading-6 text-slate-200">
            Estude no seu ritmo, faça as atividades e acompanhe o progresso no
            próprio navegador. A conta gratuita protege o acesso às aulas.
          </p>
          <a
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-sky-400"
            href="/curso-seguranca-da-informacao"
          >
            Acessar o curso <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}
