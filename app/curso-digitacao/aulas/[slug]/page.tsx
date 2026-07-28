import { CourseProgress } from '@/components/CourseProgress'
import { Header } from '@/components/Header'
import { LessonQuestionForm } from '@/components/LessonQuestionForm'
import { TypingDrill } from '@/components/TypingDrill'
import { getCompletedLessonSlugs } from '@/lib/course-progress'
import { isEnrolledInCourse } from '@/lib/enrollment'
import {
  getTypingLesson,
  typingCourseLessons,
  typingCourseModules,
} from '@/lib/typing-course'
import { requireCustomer } from '@/lib/require-customer'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  ExternalLink,
} from 'lucide-react'
import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const lesson = getTypingLesson(slug)

  return lesson
    ? {
        title: lesson.title,
        description: lesson.summary,
      }
    : {}
}

export default async function TypingLessonPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const lesson = getTypingLesson(slug)

  if (!lesson) notFound()

  const customer = await requireCustomer(`/curso-digitacao/aulas/${lesson.slug}`)

  const enrolled = await isEnrolledInCourse(customer.id, 'digitacao')
  if (!enrolled) redirect('/curso-digitacao')

  const completedLessons = await getCompletedLessonSlugs(customer.id)

  const currentIndex = typingCourseLessons.findIndex(
    (item) => item.slug === lesson.slug,
  )
  const previousLesson = typingCourseLessons[currentIndex - 1]
  const nextLesson = typingCourseLessons[currentIndex + 1]
  const lessonSlugs = typingCourseLessons.map((item) => item.slug)
  const lessonVideo = lesson.video

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-8">
        <a
          className="inline-flex items-center gap-2 text-sm font-black text-rose-700 hover:text-rose-900"
          href="/curso-digitacao"
        >
          <ArrowLeft size={17} /> Voltar ao curso
        </a>

        <div className="mt-6 grid gap-6 lg:grid-cols-[270px_1fr]">
          <aside className="order-2 space-y-4 lg:order-none lg:sticky lg:top-36 lg:self-start">
            <CourseProgress
              initialCompleted={completedLessons}
              lessonSlugs={lessonSlugs}
            />

            <nav className="rounded-2xl border border-rose-200 bg-white/85 p-3 shadow-sm lg:max-h-[62vh] lg:overflow-y-auto">
              <strong className="block px-2 pb-2 text-sm">Conteúdo do curso</strong>
              {typingCourseModules.map((module, moduleIndex) => (
                <div className="mt-2 rounded-lg" key={module.slug}>
                  <p className="px-2 py-1 text-[10px] font-black uppercase tracking-wide text-slate-500">
                    Módulo {moduleIndex + 1}
                  </p>
                  {module.lessons.map((item) => (
                    <a
                      className={`mt-1 block rounded-lg px-2 py-2 text-xs font-bold leading-5 transition ${
                        item.slug === lesson.slug
                          ? 'bg-rose-700 text-white'
                          : 'text-slate-700 hover:bg-rose-50 hover:text-rose-800'
                      }`}
                      href={`/curso-digitacao/aulas/${item.slug}`}
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
            <header className="rounded-3xl border border-rose-200 bg-gradient-to-br from-white via-rose-50 to-slate-50 p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-rose-700">
                <span className="rounded-full bg-rose-100 px-3 py-1">
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
              <section className="overflow-hidden rounded-2xl border border-rose-200 bg-black shadow-sm">
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

            <section className="rounded-2xl border border-rose-200 bg-white/85 p-5 shadow-sm sm:p-6">
              <h2 className="text-xl font-black">Objetivos da aula</h2>
              <ul className="mt-4 space-y-3">
                {lesson.objectives.map((objective) => (
                  <li className="flex items-start gap-2 text-sm text-slate-700" key={objective}>
                    <CheckCircle2 className="mt-0.5 shrink-0 text-rose-600" size={18} />
                    {objective}
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-4">
              {lesson.keyPoints.map((point, index) => (
                <div
                  className="rounded-2xl border border-rose-200 bg-white/85 p-5 shadow-sm sm:p-6"
                  key={point.title}
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-rose-100 text-sm font-black text-rose-800">
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

            <TypingDrill
              lessonSlug={lesson.slug}
              minAccuracy={lesson.drill.minAccuracy}
              minWpm={lesson.drill.minWpm}
              text={lesson.drill.text}
            />

            <a
              className="inline-flex items-center gap-2 text-sm font-black text-rose-700 hover:text-rose-900"
              href={lesson.reference.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              Referência: {lesson.reference.label} <ExternalLink size={16} />
            </a>

            <LessonQuestionForm
              courseSlug="digitacao"
              lessonSlug={lesson.slug}
            />

            <nav className="grid gap-3 border-t border-rose-200 pt-6 sm:grid-cols-2">
              {previousLesson ? (
                <a
                  className="rounded-2xl border border-rose-200 bg-white/85 p-4 text-sm font-bold transition hover:border-rose-400 hover:bg-rose-50"
                  href={`/curso-digitacao/aulas/${previousLesson.slug}`}
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
                  className="rounded-2xl border border-rose-200 bg-rose-700 p-4 text-sm font-bold text-white transition hover:bg-rose-800 sm:text-right"
                  href={`/curso-digitacao/aulas/${nextLesson.slug}`}
                >
                  <span className="flex items-center justify-end gap-1 text-xs text-rose-100">
                    Próxima aula <ArrowRight size={14} />
                  </span>
                  <strong className="mt-1 block">{nextLesson.title}</strong>
                </a>
              ) : (
                <a
                  className="rounded-2xl border border-emerald-200 bg-emerald-600 p-4 text-sm font-bold text-white sm:text-right"
                  href="/curso-digitacao"
                >
                  <span className="text-xs text-emerald-100">Curso concluído</span>
                  <strong className="mt-1 block">Emitir meu certificado</strong>
                </a>
              )}
            </nav>
          </article>
        </div>
      </div>
    </main>
  )
}
