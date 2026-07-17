import { CourseProgress } from '@/components/CourseProgress'
import { Header } from '@/components/Header'
import {
  securityCourseLessons,
  securityCourseModules,
  securityCourseSources,
  securityCourseStats,
} from '@/lib/security-course'
import { getCurrentCustomer } from '@/lib/require-customer'
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  ExternalLink,
  LockKeyhole,
  ShieldCheck,
  Siren,
  Target,
  UserPlus,
} from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Curso de Segurança da Informação | Vitalino Tech',
  description:
    `Curso gratuito de segurança da informação com ${securityCourseStats.modules} módulos, ${securityCourseStats.lessons} aulas, atividades práticas e revisão de aprendizagem.`,
}

export default async function SecurityCoursePage() {
  const customer = await getCurrentCustomer()
  const lessonSlugs = securityCourseLessons.map((lesson) => lesson.slug)
  const firstLesson = securityCourseLessons[0]
  const firstLessonHref = `/curso-seguranca-da-informacao/aulas/${firstLesson.slug}`

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-7xl space-y-10 px-4 py-8">
        <section className="overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-900 p-7 text-white shadow-2xl shadow-sky-950/20 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-400/15 px-3 py-1 text-xs font-black uppercase tracking-[.16em] text-sky-200">
                <ShieldCheck size={16} /> Curso gratuito com cadastro
              </span>
              <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight sm:text-5xl">
                Segurança da Informação: do Zero à Proteção na Prática
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                Uma formação introdutória e prática para proteger pessoas,
                computadores, pequenos negócios e dados. Aprenda no seu ritmo com
                atividades aplicáveis, perguntas de revisão e referências oficiais.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold">
                <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2">
                  <BookOpenCheck size={18} /> {securityCourseStats.modules} módulos ·{' '}
                  {securityCourseStats.lessons} aulas
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2">
                  <Clock3 size={18} /> Carga horária aproximada:{' '}
                  {securityCourseStats.workload}
                </span>
              </div>

              {customer ? (
                <a
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-sky-400 px-6 py-3 font-black text-slate-950 transition hover:bg-sky-300"
                  href={firstLessonHref}
                >
                  Começar pela primeira aula <ArrowRight size={18} />
                </a>
              ) : (
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-6 py-3 font-black text-slate-950 transition hover:bg-sky-300"
                    href={`/cadastro?next=${encodeURIComponent(firstLessonHref)}`}
                  >
                    <UserPlus size={18} /> Criar conta grátis e começar
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-black text-white transition hover:bg-white/15"
                    href={`/entrar?next=${encodeURIComponent(firstLessonHref)}`}
                  >
                    <LockKeyhole size={18} /> Já tenho cadastro
                  </a>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-cyan-300/30 bg-sky-950/80 p-5 shadow-lg shadow-black/20">
              <strong className="text-lg text-cyan-100">Você vai aprender a:</strong>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-100">
                {[
                  'Proteger senhas, contas, computadores, celulares e redes.',
                  'Reconhecer falso gerente, falsa central e golpes bancários.',
                  'Organizar dados, backups, LGPD e resposta a incidentes.',
                  'Usar NIST CSF 2.0 e OWASP Top 10:2025 como referência.',
                ].map((item) => (
                  <li className="flex items-start gap-2" key={item}>
                    <CheckCircle2 className="mt-1 shrink-0 text-sky-300" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {customer ? (
          <CourseProgress lessonSlugs={lessonSlugs} />
        ) : (
          <section className="flex flex-col gap-4 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <LockKeyhole className="mt-0.5 shrink-0 text-amber-700" size={22} />
              <div>
                <h2 className="font-black text-amber-950">Cadastro gratuito necessário</h2>
                <p className="mt-1 text-sm leading-6 text-amber-900/80">
                  A apresentação é pública. Para abrir as aulas, fazer as atividades e
                  acompanhar o progresso, crie sua conta ou entre com seu cadastro.
                </p>
              </div>
            </div>
            <a
              className="shrink-0 rounded-xl bg-amber-700 px-5 py-3 text-center text-sm font-black text-white hover:bg-amber-800"
              href={`/cadastro?next=${encodeURIComponent(firstLessonHref)}`}
            >
              Fazer meu cadastro
            </a>
          </section>
        )}

        <section>
          <div className="mb-5">
            <p className="text-xs font-black uppercase tracking-[.18em] text-sky-700">
              Programa completo
            </p>
            <h2 className="mt-2 text-3xl font-black">Módulos e aulas</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Siga a ordem sugerida ou abra diretamente o assunto que deseja
              estudar. Cada aula inclui conceitos, atividade e revisão.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {securityCourseModules.map((module, moduleIndex) => (
              <article
                className={`rounded-3xl border p-5 shadow-sm ${
                  module.emphasis
                    ? 'border-rose-300 bg-gradient-to-br from-rose-50 via-amber-50 to-white ring-2 ring-rose-200'
                    : 'border-sky-200 bg-white/85'
                }`}
                key={module.slug}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-black text-white ${
                      module.emphasis ? 'bg-rose-700' : 'bg-sky-700'
                    }`}
                  >
                    {String(moduleIndex + 1).padStart(2, '0')}
                  </span>
                  <div>
                    {module.emphasis ? (
                      <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-rose-700 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-white">
                        <Siren size={13} /> Módulo especial em destaque
                      </span>
                    ) : null}
                    <h3 className="text-lg font-black">{module.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {module.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-2">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <a
                      className={`group flex items-center justify-between gap-4 rounded-xl border p-3 transition ${
                        module.emphasis
                          ? 'border-rose-200 bg-white/80 hover:border-rose-400 hover:bg-rose-50'
                          : 'border-slate-200 bg-slate-50/80 hover:border-sky-400 hover:bg-sky-50'
                      }`}
                      href={`/curso-seguranca-da-informacao/aulas/${lesson.slug}`}
                      key={lesson.slug}
                    >
                      <div>
                        <span
                          className={`text-[10px] font-black uppercase tracking-wide ${
                            module.emphasis ? 'text-rose-700' : 'text-sky-700'
                          }`}
                        >
                          Aula {moduleIndex + 1}.{lessonIndex + 1}
                        </span>
                        <strong className="mt-0.5 block text-sm leading-5">
                          {lesson.title}
                        </strong>
                      </div>
                      <div className="flex shrink-0 items-center gap-2 text-xs text-slate-500">
                        {lesson.duration}
                        <ArrowRight
                          className="transition group-hover:translate-x-1"
                          size={15}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-600 text-white">
              <Target size={22} />
            </span>
            <h2 className="mt-4 text-xl font-black">Para quem é este curso?</h2>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Pessoas que desejam se proteger, profissionais iniciantes de TI,
              equipes administrativas, prestadores de serviço, empreendedores e
              pequenos negócios que ainda não possuem um programa formal de
              segurança.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-xl font-black">Aviso importante</h2>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Este é um curso livre de caráter educacional. Ele não substitui
              análise técnica, jurídica ou resposta profissional a incidentes. Não
              concede certificação oficial ou reconhecimento acadêmico.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-sky-200 bg-white/85 p-6">
          <h2 className="text-xl font-black">Referências principais</h2>
          <p className="mt-2 text-sm text-slate-600">
            O conteúdo foi estruturado a partir de materiais oficiais e públicos.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {securityCourseSources.map((source) => (
              <a
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-3 text-sm font-bold text-sky-700 transition hover:border-sky-400 hover:bg-sky-50"
                href={source.href}
                key={source.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {source.label} <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
