import { CertificateCta } from '@/components/CertificateCta'
import { CourseProgress } from '@/components/CourseProgress'
import { Header } from '@/components/Header'
import { getCertificateStatus, hasPassedFinalExam, isCourseFullyCompleted } from '@/lib/certificates'
import { getCompletedLessonSlugs } from '@/lib/course-progress'
import { getCourseConfig } from '@/lib/courses-config'
import { enrollInCourseAction } from '@/lib/enrollment-actions'
import { isEnrolledInCourse } from '@/lib/enrollment'
import { mathExamLessons, mathExamStats } from '@/lib/math-exam-course'
import { getCurrentCustomer } from '@/lib/require-customer'
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  GraduationCap,
  ListChecks,
  LockKeyhole,
  ShieldCheck,
  UserPlus,
} from 'lucide-react'

export const dynamic = 'force-dynamic'

const COURSE_SLUG = 'matematica-concursos'

export const metadata = {
  title: 'Curso de Matemática Básica para Concursos Públicos',
  description:
    `Curso gratuito de matemática básica e raciocínio lógico para concursos públicos, com ${mathExamStats.topics} tópicos de revisão, ${mathExamStats.questions} questões estilo banca e simulado final.`,
}

export default async function MathExamCoursePage() {
  const customer = await getCurrentCustomer()
  const completedLessons = customer
    ? await getCompletedLessonSlugs(customer.id)
    : []
  const lessonSlugs = mathExamLessons.map((topic) => topic.slug)
  const firstTopic = mathExamLessons[0]
  const firstTopicHref = `/curso-matematica-concursos/aulas/${firstTopic.slug}`
  const courseConfig = getCourseConfig(COURSE_SLUG)
  const enrolled = customer
    ? await isEnrolledInCourse(customer.id, COURSE_SLUG)
    : false
  const lessonsComplete = customer
    ? await isCourseFullyCompleted(customer.id, lessonSlugs)
    : false
  const examPassed = customer
    ? await hasPassedFinalExam(customer.id, COURSE_SLUG)
    : false
  const certificateStatus = customer
    ? await getCertificateStatus(customer.id, COURSE_SLUG)
    : ({ state: 'none' } as const)
  const certificatePriceLabel = (courseConfig.priceCents / 100).toLocaleString(
    'pt-BR',
    { minimumFractionDigits: 2 },
  )

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-7xl space-y-10 px-4 py-8">
        <section className="overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-7 text-white shadow-2xl shadow-indigo-950/20 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-950/80 px-3 py-1 text-xs font-black uppercase tracking-[.16em] text-indigo-100 shadow-sm shadow-black/20">
                <ShieldCheck size={16} /> Curso gratuito com cadastro
              </span>
              <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight sm:text-5xl">
                Matemática Básica para Concursos Públicos
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                Revisão direto ao ponto dos assuntos de matemática e raciocínio
                lógico que mais caem em provas de concurso. Cada tópico traz
                um vídeo de revisão, resumo teórico, dicas de banca e um
                banco de questões estilo Certo/Errado e múltipla escolha.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold">
                <span className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/30 bg-indigo-950/80 px-4 py-2 shadow-sm shadow-black/20">
                  <BookOpenCheck size={18} /> {mathExamStats.topics} tópicos ·{' '}
                  {mathExamStats.questions} questões de prática
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/30 bg-indigo-950/80 px-4 py-2 shadow-sm shadow-black/20">
                  <Clock3 size={18} /> Carga horária aproximada:{' '}
                  {mathExamStats.workload}
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl border border-amber-300/40 bg-amber-950/40 px-4 py-2 shadow-sm shadow-black/20">
                  <Award size={18} /> Certificado ao final por R$ {certificatePriceLabel}
                </span>
              </div>
              <p className="mt-3 text-xs font-bold text-indigo-100/80">
                O curso é 100% gratuito. Para emitir o certificado é preciso
                concluir os {mathExamStats.topics} tópicos e passar no
                simulado final (70% de acerto). O certificado é opcional e
                pago à parte.
              </p>

              {customer ? (
                enrolled ? (
                  <a
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-400 px-6 py-3 font-black text-slate-950 transition hover:bg-indigo-300"
                    href={firstTopicHref}
                  >
                    Começar pelo primeiro tópico <ArrowRight size={18} />
                  </a>
                ) : (
                  <form action={enrollInCourseAction.bind(null, COURSE_SLUG)}>
                    <button
                      className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-400 px-6 py-3 font-black text-slate-950 transition hover:bg-indigo-300"
                      type="submit"
                    >
                      Inscrever-me no curso <ArrowRight size={18} />
                    </button>
                  </form>
                )
              ) : (
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-400 px-6 py-3 font-black text-slate-950 transition hover:bg-indigo-300"
                    href={`/cadastro?next=${encodeURIComponent(firstTopicHref)}`}
                  >
                    <UserPlus size={18} /> Criar conta grátis e começar
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/30 bg-indigo-950/80 px-6 py-3 font-black text-indigo-50 shadow-sm shadow-black/20 transition hover:bg-indigo-900"
                    href={`/entrar?next=${encodeURIComponent(firstTopicHref)}`}
                  >
                    <LockKeyhole size={18} /> Já tenho cadastro
                  </a>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-indigo-300/30 bg-indigo-950/80 p-5 shadow-lg shadow-black/20">
              <strong className="text-lg text-indigo-100">Você vai revisar:</strong>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-100">
                {[
                  'Frações, decimais, MMC, MDC e conjuntos numéricos.',
                  'Razão, proporção, porcentagem, regra de três e equações.',
                  'Juros simples e compostos com foco em problemas práticos.',
                  'Raciocínio lógico: sequências, proposições e tabela-verdade.',
                ].map((item) => (
                  <li className="flex items-start gap-2" key={item}>
                    <CheckCircle2 className="mt-1 shrink-0 text-indigo-300" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {customer ? (
          enrolled ? (
            <>
              <CourseProgress
                initialCompleted={completedLessons}
                lessonSlugs={lessonSlugs}
              />
              <CertificateCta
                courseSlug={COURSE_SLUG}
                examHref={courseConfig.examHref}
                examPassed={examPassed}
                examRequired={courseConfig.requiresFinalExam}
                lessonSlugs={lessonSlugs}
                lessonsComplete={lessonsComplete}
                priceLabel={certificatePriceLabel}
                status={certificateStatus.state}
                totalLessons={lessonSlugs.length}
                verificationCode={
                  certificateStatus.state === 'issued'
                    ? certificateStatus.verificationCode
                    : undefined
                }
              />
            </>
          ) : (
            <section className="flex flex-col gap-4 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 shrink-0 text-amber-700" size={22} />
                <div>
                  <h2 className="font-black text-amber-950">Inscrição necessária</h2>
                  <p className="mt-1 text-sm leading-6 text-amber-900/80">
                    Antes de abrir os tópicos, faça sua inscrição gratuita no
                    curso para começar a acompanhar seu progresso.
                  </p>
                </div>
              </div>
              <form action={enrollInCourseAction.bind(null, COURSE_SLUG)}>
                <button
                  className="shrink-0 rounded-xl bg-amber-700 px-5 py-3 text-center text-sm font-black text-white hover:bg-amber-800"
                  type="submit"
                >
                  Inscrever-me no curso
                </button>
              </form>
            </section>
          )
        ) : (
          <section className="flex flex-col gap-4 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <LockKeyhole className="mt-0.5 shrink-0 text-amber-700" size={22} />
              <div>
                <h2 className="font-black text-amber-950">Cadastro gratuito necessário</h2>
                <p className="mt-1 text-sm leading-6 text-amber-900/80">
                  A apresentação é pública. Para abrir os tópicos, praticar as
                  questões e acompanhar o progresso, crie sua conta ou entre
                  com seu cadastro.
                </p>
              </div>
            </div>
            <a
              className="shrink-0 rounded-xl bg-amber-700 px-5 py-3 text-center text-sm font-black text-white hover:bg-amber-800"
              href={`/cadastro?next=${encodeURIComponent(firstTopicHref)}`}
            >
              Fazer meu cadastro
            </a>
          </section>
        )}

        <section>
          <div className="mb-5">
            <p className="text-xs font-black uppercase tracking-[.18em] text-indigo-700">
              Programa completo
            </p>
            <h2 className="mt-2 text-3xl font-black">Tópicos de revisão</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Cada tópico traz um vídeo de revisão, resumo teórico, dicas de
              banca e um banco de questões para praticar.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mathExamLessons.map((topic, topicIndex) => (
              <a
                className="group flex items-start gap-4 rounded-2xl border border-indigo-200 bg-white/85 p-4 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50"
                href={`/curso-matematica-concursos/aulas/${topic.slug}`}
                key={topic.slug}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-700 text-sm font-black text-white">
                  {String(topicIndex + 1).padStart(2, '0')}
                </span>
                <div>
                  <strong className="block text-sm leading-5">{topic.title}</strong>
                  <span className="mt-1 flex items-center gap-3 text-xs text-slate-500">
                    {topic.duration}
                    <span className="inline-flex items-center gap-1">
                      <ListChecks size={13} /> {topic.questions.length} questões
                    </span>
                  </span>
                </div>
                <ArrowRight
                  className="ml-auto mt-1 shrink-0 text-indigo-600 transition group-hover:translate-x-1"
                  size={16}
                />
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-700 text-white">
              <BadgeCheck size={22} />
            </span>
            <h2 className="mt-4 text-xl font-black">Para quem é este curso?</h2>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Candidatos a concursos públicos de qualquer área que precisam
              revisar matemática básica e raciocínio lógico. Ideal para quem
              já viu o conteúdo alguma vez no ensino fundamental/médio e
              precisa relembrar e treinar com questões estilo banca.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-600 text-white">
              <GraduationCap size={22} />
            </span>
            <h2 className="mt-4 text-xl font-black">Como funciona o simulado final</h2>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Depois de concluir os {mathExamStats.topics} tópicos, você libera
              um simulado geral misturando questões de todos os assuntos. É
              preciso acertar pelo menos 70% para aprovar — e pode refazer
              quantas vezes precisar. Aprovação libera a emissão do
              certificado.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
