import { CertificateCta } from '@/components/CertificateCta'
import { CourseProgress } from '@/components/CourseProgress'
import { Header } from '@/components/Header'
import { getCertificateStatus, hasPassedFinalExam, isCourseFullyCompleted } from '@/lib/certificates'
import { getCompletedLessonSlugs } from '@/lib/course-progress'
import { getCourseConfig } from '@/lib/courses-config'
import {
  hardwareCourseLessons,
  hardwareCourseModules,
  hardwareCourseStats,
} from '@/lib/hardware-course'
import { getCurrentCustomer } from '@/lib/require-customer'
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  ExternalLink,
  GraduationCap,
  LockKeyhole,
  Target,
  UserPlus,
  Wrench,
} from 'lucide-react'

export const dynamic = 'force-dynamic'

const COURSE_SLUG = 'montagem-manutencao'

export const metadata = {
  title: 'Curso de Montagem e Manutenção de Computadores e Notebooks',
  description: `Curso gratuito de montagem e manutenção de computadores e notebooks com ${hardwareCourseStats.modules} módulos, ${hardwareCourseStats.lessons} aulas em vídeo, atividades práticas e prova final.`,
}

export default async function HardwareCoursePage() {
  const customer = await getCurrentCustomer()
  const completedLessons = customer
    ? await getCompletedLessonSlugs(customer.id)
    : []
  const lessonSlugs = hardwareCourseLessons.map((lesson) => lesson.slug)
  const firstLesson = hardwareCourseLessons[0]
  const firstLessonHref = `/curso-montagem-manutencao/aulas/${firstLesson.slug}`
  const courseConfig = getCourseConfig(COURSE_SLUG)
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
        <section className="overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-950 via-slate-950 to-stone-950 p-7 text-white shadow-2xl shadow-orange-950/20 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-950/80 px-3 py-1 text-xs font-black uppercase tracking-[.16em] text-orange-100 shadow-sm shadow-black/20">
                <Wrench size={16} /> Curso gratuito com cadastro
              </span>
              <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight sm:text-5xl">
                Montagem e Manutenção de Computadores e Notebooks
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                Aprenda a montar um PC do zero, configurar a BIOS, fazer
                manutenção preventiva, diagnosticar problemas comuns e cuidar
                de notebooks — com vídeos, atividades práticas e prova final.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold">
                <span className="inline-flex items-center gap-2 rounded-xl border border-orange-300/30 bg-orange-950/80 px-4 py-2 shadow-sm shadow-black/20">
                  <BookOpenCheck size={18} /> {hardwareCourseStats.modules} módulos ·{' '}
                  {hardwareCourseStats.lessons} aulas
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl border border-orange-300/30 bg-orange-950/80 px-4 py-2 shadow-sm shadow-black/20">
                  <Clock3 size={18} /> Carga horária aproximada:{' '}
                  {hardwareCourseStats.workload}
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl border border-amber-300/40 bg-amber-950/40 px-4 py-2 shadow-sm shadow-black/20">
                  <Award size={18} /> Certificado ao final por R$ {certificatePriceLabel}
                </span>
              </div>
              <p className="mt-3 text-xs font-bold text-orange-100/80">
                O curso é 100% gratuito. Para emitir o certificado é preciso
                concluir as {hardwareCourseStats.lessons} aulas e passar na
                prova final (70% de acerto). O certificado é opcional e pago à
                parte.
              </p>

              {customer ? (
                <a
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 font-black text-slate-950 transition hover:bg-orange-300"
                  href={firstLessonHref}
                >
                  Começar pela primeira aula <ArrowRight size={18} />
                </a>
              ) : (
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 font-black text-slate-950 transition hover:bg-orange-300"
                    href={`/cadastro?next=${encodeURIComponent(firstLessonHref)}`}
                  >
                    <UserPlus size={18} /> Criar conta grátis e começar
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-xl border border-orange-300/30 bg-orange-950/80 px-6 py-3 font-black text-orange-50 shadow-sm shadow-black/20 transition hover:bg-orange-900"
                    href={`/entrar?next=${encodeURIComponent(firstLessonHref)}`}
                  >
                    <LockKeyhole size={18} /> Já tenho cadastro
                  </a>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-orange-300/30 bg-orange-950/80 p-5 shadow-lg shadow-black/20">
              <strong className="text-lg text-orange-100">Você vai aprender a:</strong>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-100">
                {[
                  'Montar um computador do zero, peça por peça.',
                  'Configurar a BIOS/UEFI e instalar o sistema operacional.',
                  'Fazer limpeza, trocar pasta térmica e monitorar temperatura.',
                  'Diagnosticar problemas comuns e cuidar de notebooks.',
                ].map((item) => (
                  <li className="flex items-start gap-2" key={item}>
                    <CheckCircle2 className="mt-1 shrink-0 text-orange-300" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {customer ? (
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
              <LockKeyhole className="mt-0.5 shrink-0 text-amber-700" size={22} />
              <div>
                <h2 className="font-black text-amber-950">Cadastro gratuito necessário</h2>
                <p className="mt-1 text-sm leading-6 text-amber-900/80">
                  A apresentação é pública. Para abrir as aulas, fazer as
                  atividades e acompanhar o progresso, crie sua conta ou entre
                  com seu cadastro.
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
            <p className="text-xs font-black uppercase tracking-[.18em] text-orange-700">
              Programa completo
            </p>
            <h2 className="mt-2 text-3xl font-black">Módulos e aulas</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Cada aula inclui um vídeo, conceitos, atividade prática e
              revisão.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {hardwareCourseModules.map((module, moduleIndex) => (
              <article
                className="rounded-3xl border border-orange-200 bg-white/85 p-5 shadow-sm"
                key={module.slug}
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-700 text-sm font-black text-white">
                    {String(moduleIndex + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-black">{module.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {module.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-2">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <a
                      className="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50/80 p-3 transition hover:border-orange-400 hover:bg-orange-50"
                      href={`/curso-montagem-manutencao/aulas/${lesson.slug}`}
                      key={lesson.slug}
                    >
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wide text-orange-700">
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
          <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-600 text-white">
              <Target size={22} />
            </span>
            <h2 className="mt-4 text-xl font-black">Para quem é este curso?</h2>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Pessoas que querem entender o que há dentro de um computador,
              economizar com pequenos consertos, ou dar os primeiros passos
              para prestar serviços de montagem e manutenção.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-600 text-white">
              <GraduationCap size={22} />
            </span>
            <h2 className="mt-4 text-xl font-black">Como funciona a prova final</h2>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Depois de concluir as {hardwareCourseStats.lessons} aulas, você
              libera uma prova com 20 questões sobre todo o conteúdo do curso.
              É preciso acertar pelo menos 70% para aprovar — e pode refazer
              quantas vezes precisar. Aprovação libera a emissão do
              certificado.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-orange-200 bg-white/85 p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-100 text-orange-700">
              <BarChart3 size={22} />
            </span>
            <h2 className="text-xl font-black">Referência principal</h2>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            O conteúdo foi estruturado a partir de documentação oficial de
            fabricantes como Intel, AMD, Kingston e Western Digital.
          </p>
          <a
            className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-3 text-sm font-bold text-orange-700 transition hover:border-orange-400 hover:bg-orange-50"
            href="https://www.intel.com/content/www/us/en/support.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Intel — Suporte e documentação técnica <ExternalLink size={16} />
          </a>
        </section>
      </div>
    </main>
  )
}
