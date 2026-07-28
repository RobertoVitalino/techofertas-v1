import { Header } from '@/components/Header'
import { computingCourseStats } from '@/lib/computing-course'
import { courseRegistry } from '@/lib/courses-config'
import { excelCourseStats } from '@/lib/excel-course'
import { hardwareCourseStats } from '@/lib/hardware-course'
import { securityCourseStats } from '@/lib/security-course'
import { typingCourseStats } from '@/lib/typing-course'
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Clock3,
  FileSpreadsheet,
  GraduationCap,
  Keyboard,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

export const metadata = {
  title: 'Cursos gratuitos',
  description:
    'Cursos gratuitos de segurança da informação, computação básica, Excel, montagem e manutenção de computadores e digitação, com certificado pago opcional.',
}

const courses = [
  {
    slug: 'seguranca-da-informacao',
    icon: ShieldCheck,
    accent: 'sky' as const,
    stats: securityCourseStats,
    summary:
      'Proteja senhas, contas, computadores, celulares e redes. Aprenda a reconhecer golpes bancários e organizar backups.',
  },
  {
    slug: 'computacao-basica',
    icon: BookOpenCheck,
    accent: 'emerald' as const,
    stats: computingCourseStats,
    summary:
      'Do zero ao dia a dia digital: sistema operacional, arquivos, internet, e-mail, Word, Excel, PowerPoint e nuvem.',
  },
  {
    slug: 'excel',
    icon: FileSpreadsheet,
    accent: 'violet' as const,
    stats: excelCourseStats,
    summary:
      'Fórmulas, funções essenciais, PROCV/PROCX, gráficos e tabelas dinâmicas, com um projeto prático de painel financeiro.',
  },
  {
    slug: 'montagem-manutencao',
    icon: Wrench,
    accent: 'orange' as const,
    stats: hardwareCourseStats,
    summary:
      'Monte um PC do zero, configure a BIOS, faça manutenção preventiva, diagnostique problemas comuns e cuide de notebooks.',
  },
  {
    slug: 'digitacao',
    icon: Keyboard,
    accent: 'rose' as const,
    stats: typingCourseStats,
    summary:
      'Aprenda a digitar sem olhar para o teclado, com exercícios de velocidade e precisão medidos em tempo real em cada aula.',
  },
]

const accentClasses = {
  sky: {
    border: 'border-sky-200',
    badgeBg: 'bg-sky-700',
    text: 'text-sky-700',
    button: 'bg-sky-700 hover:bg-sky-800',
  },
  emerald: {
    border: 'border-emerald-200',
    badgeBg: 'bg-emerald-700',
    text: 'text-emerald-700',
    button: 'bg-emerald-700 hover:bg-emerald-800',
  },
  violet: {
    border: 'border-violet-200',
    badgeBg: 'bg-violet-700',
    text: 'text-violet-700',
    button: 'bg-violet-700 hover:bg-violet-800',
  },
  orange: {
    border: 'border-orange-200',
    badgeBg: 'bg-orange-700',
    text: 'text-orange-700',
    button: 'bg-orange-700 hover:bg-orange-800',
  },
  rose: {
    border: 'border-rose-200',
    badgeBg: 'bg-rose-700',
    text: 'text-rose-700',
    button: 'bg-rose-700 hover:bg-rose-800',
  },
}

export default function CoursesHubPage() {
  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em] text-slate-500">
            Formação gratuita
          </p>
          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            Cursos da Vitalino Tech
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Conteúdo gratuito, no seu ritmo, com atividades práticas. O
            certificado de conclusão é opcional e pago à parte, emitido só
            depois de concluir o curso.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    <BookOpenCheck size={14} /> {course.stats.modules} módulos ·{' '}
                    {course.stats.lessons} aulas
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700">
                    <Clock3 size={14} /> {course.stats.workload}
                  </span>
                  {config.requiresFinalExam ? (
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700">
                      <GraduationCap size={14} /> Com prova final
                    </span>
                  ) : null}
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
      </div>
    </main>
  )
}
