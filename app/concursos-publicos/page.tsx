import { Header } from '@/components/Header'
import { courseRegistry } from '@/lib/courses-config'
import { examPrepStats } from '@/lib/exam-prep-course'
import { mathExamStats } from '@/lib/math-exam-course'
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Calculator,
  Clock3,
  GraduationCap,
  Landmark,
} from 'lucide-react'

export const metadata = {
  title: 'Cursos para Concursos Públicos',
  description:
    'Cursos gratuitos de preparação para concursos públicos: informática e matemática básica com raciocínio lógico, revisão direto ao ponto e questões estilo banca.',
}

const courses = [
  {
    slug: 'informatica-concursos',
    icon: Landmark,
    accent: 'cyan' as const,
    stats: examPrepStats,
    summary:
      'Revisão direto ao ponto para concursos da área policial e em geral, com dicas de banca e questões estilo Certo/Errado.',
  },
  {
    slug: 'matematica-concursos',
    icon: Calculator,
    accent: 'indigo' as const,
    stats: mathExamStats,
    summary:
      'Matemática básica e raciocínio lógico para concursos: frações, porcentagem, regra de três, juros, equações e lógica proposicional.',
  },
]

const accentClasses = {
  cyan: {
    border: 'border-cyan-200',
    badgeBg: 'bg-cyan-700',
    text: 'text-cyan-700',
    button: 'bg-cyan-700 hover:bg-cyan-800',
  },
  indigo: {
    border: 'border-indigo-200',
    badgeBg: 'bg-indigo-700',
    text: 'text-indigo-700',
    button: 'bg-indigo-700 hover:bg-indigo-800',
  },
}

export default function ConcursosPublicosPage() {
  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em] text-slate-500">
            Preparação gratuita
          </p>
          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            Cursos para Concursos Públicos
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Revisão direto ao ponto dos assuntos que mais caem em prova, com
            dicas de banca e banco de questões estilo Certo/Errado e
            múltipla escolha. Conteúdo gratuito, certificado opcional e
            pago à parte.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {courses.map((course) => {
            const config = courseRegistry[course.slug]
            const Icon = course.icon
            const accent = accentClasses[course.accent]
            const priceLabel = (config.priceCents / 100).toLocaleString(
              'pt-BR',
              { minimumFractionDigits: 2 },
            )

            return (
              <article
                className={`flex flex-col rounded-3xl border ${accent.border} bg-white/85 p-6 shadow-sm sm:p-8`}
                key={course.slug}
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl ${accent.badgeBg} text-white`}
                >
                  <Icon size={24} />
                </span>
                <h2 className="mt-4 text-2xl font-black">{config.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {course.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-3 text-xs font-bold">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700">
                    <BookOpenCheck size={14} /> {course.stats.topics} tópicos ·{' '}
                    {course.stats.questions} questões
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700">
                    <Clock3 size={14} /> {course.stats.workload}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700">
                    <GraduationCap size={14} /> Com simulado final
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-100 px-3 py-1.5 text-amber-800">
                    <Award size={14} /> Certificado por R$ {priceLabel}
                  </span>
                </div>

                <a
                  className={`mt-auto pt-6 inline-flex items-center justify-center gap-2 rounded-xl ${accent.button} px-6 py-3 text-sm font-black text-white transition`}
                  href={config.landingHref}
                >
                  Conhecer o curso <ArrowRight size={18} />
                </a>
              </article>
            )
          })}
        </div>

        <p className="text-sm text-slate-500">
          Procurando outros cursos? Confira também o{' '}
          <a className="font-bold text-brand-600 hover:text-brand-700" href="/cursos">
            catálogo completo de cursos
          </a>{' '}
          da Vitalino Tech.
        </p>
      </div>
    </main>
  )
}
