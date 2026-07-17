import { CourseProgress } from '@/components/CourseProgress'
import { Header } from '@/components/Header'
import { LessonQuiz } from '@/components/LessonQuiz'
import {
  getSecurityLesson,
  securityCourseLessons,
  securityCourseModules,
} from '@/lib/security-course'
import { requireCustomer } from '@/lib/require-customer'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  ExternalLink,
  ListChecks,
} from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const lesson = getSecurityLesson(params.slug)

  return lesson
    ? {
        title: `${lesson.title} | Curso Vitalino Tech`,
        description: lesson.summary,
      }
    : {}
}

export default async function SecurityLessonPage({
  params,
}: {
  params: { slug: string }
}) {
  const lesson = getSecurityLesson(params.slug)

  if (!lesson) notFound()

  await requireCustomer(
    `/curso-seguranca-da-informacao/aulas/${lesson.slug}`,
  )

  const currentIndex = securityCourseLessons.findIndex(
    (item) => item.slug === lesson.slug,
  )
  const previousLesson = securityCourseLessons[currentIndex - 1]
  const nextLesson = securityCourseLessons[currentIndex + 1]
  const lessonSlugs = securityCourseLessons.map((item) => item.slug)

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-8">
        <a
          className="inline-flex items-center gap-2 text-sm font-black text-sky-700 hover:text-sky-900"
          href="/curso-seguranca-da-informacao"
        >
          <ArrowLeft size={17} /> Voltar ao curso
        </a>

        <div className="mt-6 grid gap-6 lg:grid-cols-[270px_1fr]">
          <aside className="space-y-4 lg:sticky lg:top-36 lg:self-start">
            <CourseProgress lessonSlugs={lessonSlugs} />

            <nav className="max-h-[62vh] overflow-y-auto rounded-2xl border border-sky-200 bg-white/85 p-3 shadow-sm">
              <strong className="block px-2 pb-2 text-sm">Conteúdo do curso</strong>
              {securityCourseModules.map((module, moduleIndex) => (
                <div
                  className={`mt-2 rounded-lg ${module.emphasis ? 'bg-rose-50 p-1' : ''}`}
                  key={module.slug}
                >
                  <p
                    className={`px-2 py-1 text-[10px] font-black uppercase tracking-wide ${
                      module.emphasis ? 'text-rose-700' : 'text-slate-500'
                    }`}
                  >
                    Módulo {moduleIndex + 1}{module.emphasis ? ' · destaque antifraude' : ''}
                  </p>
                  {module.lessons.map((item) => (
                    <a
                      className={`mt-1 block rounded-lg px-2 py-2 text-xs font-bold leading-5 transition ${
                        item.slug === lesson.slug
                          ? module.emphasis
                            ? 'bg-rose-700 text-white'
                            : 'bg-sky-700 text-white'
                          : module.emphasis
                            ? 'text-rose-950 hover:bg-rose-100'
                            : 'text-slate-700 hover:bg-sky-50 hover:text-sky-800'
                      }`}
                      href={`/curso-seguranca-da-informacao/aulas/${item.slug}`}
                      key={item.slug}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </aside>

          <article className="space-y-6">
            <header className="rounded-3xl border border-sky-200 bg-gradient-to-br from-white via-sky-50 to-indigo-50 p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-sky-700">
                <span className="rounded-full bg-sky-100 px-3 py-1">
                  Módulo {lesson.moduleIndex + 1} · Aula {lesson.lessonIndex + 1}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 size={15} /> {lesson.duration}
                </span>
                {lesson.module.emphasis ? (
                  <span className="rounded-full bg-rose-100 px-3 py-1 text-rose-800">
                    Módulo especial: prevenção a golpes bancários
                  </span>
                ) : null}
              </div>
              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                {lesson.title}
              </h1>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {lesson.summary}
              </p>
            </header>

            <section className="rounded-2xl border border-sky-200 bg-white/85 p-5 shadow-sm sm:p-6">
              <h2 className="text-xl font-black">Objetivos da aula</h2>
              <ul className="mt-4 space-y-3">
                {lesson.objectives.map((objective) => (
                  <li className="flex items-start gap-2 text-sm text-slate-700" key={objective}>
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={18} />
                    {objective}
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-4">
              {lesson.keyPoints.map((point, index) => (
                <div
                  className="rounded-2xl border border-sky-200 bg-white/85 p-5 shadow-sm sm:p-6"
                  key={point.title}
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sky-100 text-sm font-black text-sky-800">
                      {index + 1}
                    </span>
                    <div>
                      <h2 className="text-lg font-black">{point.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-700 text-white">
                  <ListChecks size={21} />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-indigo-700">
                    Atividade prática
                  </p>
                  <h2 className="text-lg font-black">{lesson.activity.title}</h2>
                </div>
              </div>
              <ol className="mt-5 space-y-3">
                {lesson.activity.steps.map((step, index) => (
                  <li className="flex items-start gap-3 text-sm leading-6 text-slate-700" key={step}>
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-200 text-xs font-black text-indigo-900">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>

            <LessonQuiz
              answer={lesson.quiz.answer}
              explanation={lesson.quiz.explanation}
              lessonSlug={lesson.slug}
              options={lesson.quiz.options}
              question={lesson.quiz.question}
            />

            <a
              className="inline-flex items-center gap-2 text-sm font-black text-sky-700 hover:text-sky-900"
              href={lesson.reference.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              Referência: {lesson.reference.label} <ExternalLink size={16} />
            </a>

            <nav className="grid gap-3 border-t border-sky-200 pt-6 sm:grid-cols-2">
              {previousLesson ? (
                <a
                  className="rounded-2xl border border-sky-200 bg-white/85 p-4 text-sm font-bold transition hover:border-sky-400 hover:bg-sky-50"
                  href={`/curso-seguranca-da-informacao/aulas/${previousLesson.slug}`}
                >
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <ArrowLeft size={14} /> Aula anterior
                  </span>
                  <strong className="mt-1 block">{previousLesson.title}</strong>
                </a>
              ) : (
                <span />
              )}

              {nextLesson ? (
                <a
                  className="rounded-2xl border border-sky-200 bg-sky-700 p-4 text-sm font-bold text-white transition hover:bg-sky-800 sm:text-right"
                  href={`/curso-seguranca-da-informacao/aulas/${nextLesson.slug}`}
                >
                  <span className="flex items-center justify-end gap-1 text-xs text-sky-100">
                    Próxima aula <ArrowRight size={14} />
                  </span>
                  <strong className="mt-1 block">{nextLesson.title}</strong>
                </a>
              ) : (
                <a
                  className="rounded-2xl border border-emerald-200 bg-emerald-600 p-4 text-sm font-bold text-white sm:text-right"
                  href="/curso-seguranca-da-informacao"
                >
                  <span className="text-xs text-emerald-100">Curso concluído</span>
                  <strong className="mt-1 block">Revisar todos os módulos</strong>
                </a>
              )}
            </nav>
          </article>
        </div>
      </div>
    </main>
  )
}
