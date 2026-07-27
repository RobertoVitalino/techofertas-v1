import { CourseProgress } from '@/components/CourseProgress'
import { Header } from '@/components/Header'
import { LessonQuestionForm } from '@/components/LessonQuestionForm'
import { LessonQuiz } from '@/components/LessonQuiz'
import { getCompletedLessonSlugs } from '@/lib/course-progress'
import {
  excelCourseLessons,
  excelCourseModules,
  getExcelLesson,
} from '@/lib/excel-course'
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const lesson = getExcelLesson(slug)

  return lesson
    ? {
        title: lesson.title,
        description: lesson.summary,
      }
    : {}
}

export default async function ExcelLessonPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const lesson = getExcelLesson(slug)

  if (!lesson) notFound()

  const customer = await requireCustomer(`/curso-excel/aulas/${lesson.slug}`)
  const completedLessons = await getCompletedLessonSlugs(customer.id)

  const currentIndex = excelCourseLessons.findIndex(
    (item) => item.slug === lesson.slug,
  )
  const previousLesson = excelCourseLessons[currentIndex - 1]
  const nextLesson = excelCourseLessons[currentIndex + 1]
  const lessonSlugs = excelCourseLessons.map((item) => item.slug)
  const lessonVideo = lesson.video

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-8">
        <a
          className="inline-flex items-center gap-2 text-sm font-black text-violet-700 hover:text-violet-900"
          href="/curso-excel"
        >
          <ArrowLeft size={17} /> Voltar ao curso
        </a>

        <div className="mt-6 grid gap-6 lg:grid-cols-[270px_1fr]">
          <aside className="order-2 space-y-4 lg:order-none lg:sticky lg:top-36 lg:self-start">
            <CourseProgress
              initialCompleted={completedLessons}
              lessonSlugs={lessonSlugs}
            />

            <nav className="rounded-2xl border border-violet-200 bg-white/85 p-3 shadow-sm lg:max-h-[62vh] lg:overflow-y-auto">
              <strong className="block px-2 pb-2 text-sm">Conteúdo do curso</strong>
              {excelCourseModules.map((module, moduleIndex) => (
                <div className="mt-2 rounded-lg" key={module.slug}>
                  <p className="px-2 py-1 text-[10px] font-black uppercase tracking-wide text-slate-500">
                    Módulo {moduleIndex + 1}
                  </p>
                  {module.lessons.map((item) => (
                    <a
                      className={`mt-1 block rounded-lg px-2 py-2 text-xs font-bold leading-5 transition ${
                        item.slug === lesson.slug
                          ? 'bg-violet-700 text-white'
                          : 'text-slate-700 hover:bg-violet-50 hover:text-violet-800'
                      }`}
                      href={`/curso-excel/aulas/${item.slug}`}
                      key={item.slug}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </aside>

          <article className="order-1 space-y-6 lg:order-none">
            <header className="rounded-3xl border border-violet-200 bg-gradient-to-br from-white via-violet-50 to-indigo-50 p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-violet-700">
                <span className="rounded-full bg-violet-100 px-3 py-1">
                  Módulo {lesson.moduleIndex + 1} · Aula {lesson.lessonIndex + 1}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 size={15} /> {lesson.duration}
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                {lesson.title}
              </h1>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {lesson.summary}
              </p>
            </header>

            {lessonVideo ? (
              <section className="overflow-hidden rounded-2xl border border-violet-200 bg-black shadow-sm">
                <div className="aspect-video w-full">
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                    referrerPolicy="strict-origin-when-cross-origin"
                    src={`https://www.youtube.com/embed/${lessonVideo.youtubeId}`}
                    title={lessonVideo.title}
                  />
                </div>
                <p className="bg-white/95 px-4 py-3 text-xs font-bold text-slate-600">
                  Vídeo da aula: {lessonVideo.title}
                </p>
              </section>
            ) : null}

            <section className="rounded-2xl border border-violet-200 bg-white/85 p-5 shadow-sm sm:p-6">
              <h2 className="text-xl font-black">Objetivos da aula</h2>
              <ul className="mt-4 space-y-3">
                {lesson.objectives.map((objective) => (
                  <li className="flex items-start gap-2 text-sm text-slate-700" key={objective}>
                    <CheckCircle2 className="mt-0.5 shrink-0 text-violet-600" size={18} />
                    {objective}
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-4">
              {lesson.keyPoints.map((point, index) => (
                <div
                  className="rounded-2xl border border-violet-200 bg-white/85 p-5 shadow-sm sm:p-6"
                  key={point.title}
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet-100 text-sm font-black text-violet-800">
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
              className="inline-flex items-center gap-2 text-sm font-black text-violet-700 hover:text-violet-900"
              href={lesson.reference.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              Referência: {lesson.reference.label} <ExternalLink size={16} />
            </a>

            <LessonQuestionForm
              courseSlug="excel"
              lessonSlug={lesson.slug}
            />

            <nav className="grid gap-3 border-t border-violet-200 pt-6 sm:grid-cols-2">
              {previousLesson ? (
                <a
                  className="rounded-2xl border border-violet-200 bg-white/85 p-4 text-sm font-bold transition hover:border-violet-400 hover:bg-violet-50"
                  href={`/curso-excel/aulas/${previousLesson.slug}`}
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
                  className="rounded-2xl border border-violet-200 bg-violet-700 p-4 text-sm font-bold text-white transition hover:bg-violet-800 sm:text-right"
                  href={`/curso-excel/aulas/${nextLesson.slug}`}
                >
                  <span className="flex items-center justify-end gap-1 text-xs text-violet-100">
                    Próxima aula <ArrowRight size={14} />
                  </span>
                  <strong className="mt-1 block">{nextLesson.title}</strong>
                </a>
              ) : (
                <a
                  className="rounded-2xl border border-indigo-200 bg-indigo-600 p-4 text-sm font-bold text-white sm:text-right"
                  href="/curso-excel/prova-final"
                >
                  <span className="text-xs text-indigo-100">Curso concluído</span>
                  <strong className="mt-1 block">Fazer a prova final</strong>
                </a>
              )}
            </nav>
          </article>
        </div>
      </div>
    </main>
  )
}
