import { CourseProgress } from '@/components/CourseProgress'
import { Header } from '@/components/Header'
import { LessonQuestionForm } from '@/components/LessonQuestionForm'
import { QuestionBank } from '@/components/QuestionBank'
import { getCompletedLessonSlugs } from '@/lib/course-progress'
import { examPrepLessons, getExamPrepTopic } from '@/lib/exam-prep-course'
import { isEnrolledInCourse } from '@/lib/enrollment'
import { requireCustomer } from '@/lib/require-customer'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Lightbulb,
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
  const topic = getExamPrepTopic(slug)

  return topic
    ? {
        title: topic.title,
        description: topic.summary,
      }
    : {}
}

export default async function ExamPrepTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const topic = getExamPrepTopic(slug)

  if (!topic) notFound()

  const customer = await requireCustomer(
    `/curso-informatica-concursos/aulas/${topic.slug}`,
  )

  const enrolled = await isEnrolledInCourse(customer.id, 'informatica-concursos')
  if (!enrolled) redirect('/curso-informatica-concursos')

  const completedLessons = await getCompletedLessonSlugs(customer.id)

  const currentIndex = examPrepLessons.findIndex(
    (item) => item.slug === topic.slug,
  )
  const previousTopic = examPrepLessons[currentIndex - 1]
  const nextTopic = examPrepLessons[currentIndex + 1]
  const lessonSlugs = examPrepLessons.map((item) => item.slug)
  const topicVideo = topic.video

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-8">
        <a
          className="inline-flex items-center gap-2 text-sm font-black text-cyan-700 hover:text-cyan-900"
          href="/curso-informatica-concursos"
        >
          <ArrowLeft size={17} /> Voltar ao curso
        </a>

        <div className="mt-6 grid gap-6 lg:grid-cols-[270px_1fr]">
          <aside className="order-2 space-y-4 lg:order-none lg:sticky lg:top-36 lg:self-start">
            <CourseProgress
              initialCompleted={completedLessons}
              lessonSlugs={lessonSlugs}
            />

            <nav className="rounded-2xl border border-cyan-200 bg-white/85 p-3 shadow-sm lg:max-h-[62vh] lg:overflow-y-auto">
              <strong className="block px-2 pb-2 text-sm">Tópicos do curso</strong>
              {examPrepLessons.map((item, itemIndex) => (
                <a
                  className={`mt-1 block rounded-lg px-2 py-2 text-xs font-bold leading-5 transition ${
                    item.slug === topic.slug
                      ? 'bg-cyan-700 text-white'
                      : 'text-slate-700 hover:bg-cyan-50 hover:text-cyan-800'
                  }`}
                  href={`/curso-informatica-concursos/aulas/${item.slug}`}
                  key={item.slug}
                >
                  {String(itemIndex + 1).padStart(2, '0')}. {item.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="order-1 space-y-6 lg:order-none">
            <header className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-white via-cyan-50 to-slate-50 p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-cyan-700">
                <span className="rounded-full bg-cyan-100 px-3 py-1">
                  Tópico {topic.topicIndex + 1} de {examPrepLessons.length}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 size={15} /> {topic.duration}
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                {topic.title}
              </h1>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {topic.summary}
              </p>
            </header>

            {topicVideo ? (
              <section className="overflow-hidden rounded-2xl border border-cyan-200 bg-black shadow-sm">
                <div className="aspect-video w-full">
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                    referrerPolicy="strict-origin-when-cross-origin"
                    src={`https://www.youtube.com/embed/${topicVideo.youtubeId}`}
                    title={topicVideo.title}
                  />
                </div>
                <p className="bg-white/95 px-4 py-3 text-xs font-bold text-slate-600">
                  Vídeo de revisão: {topicVideo.title}
                </p>
              </section>
            ) : null}

            <section className="grid gap-4">
              {topic.reviewPoints.map((point, index) => (
                <div
                  className="rounded-2xl border border-cyan-200 bg-white/85 p-5 shadow-sm sm:p-6"
                  key={point.title}
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-100 text-sm font-black text-cyan-800">
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

            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-600 text-white">
                  <Lightbulb size={21} />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-amber-700">
                    Dicas de banca
                  </p>
                  <h2 className="text-lg font-black">Pegadinhas mais comuns</h2>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {topic.examTips.map((tip) => (
                  <li className="flex items-start gap-3 text-sm leading-6 text-amber-950" key={tip}>
                    <CheckCircle2 className="mt-0.5 shrink-0 text-amber-700" size={17} />
                    {tip}
                  </li>
                ))}
              </ul>
            </section>

            <QuestionBank lessonSlug={topic.slug} questions={topic.questions} />

            <a
              className="inline-flex items-center gap-2 text-sm font-black text-cyan-700 hover:text-cyan-900"
              href={topic.reference.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              Referência: {topic.reference.label}
            </a>

            <LessonQuestionForm
              courseSlug="informatica-concursos"
              lessonSlug={topic.slug}
            />

            <nav className="grid gap-3 border-t border-cyan-200 pt-6 sm:grid-cols-2">
              {previousTopic ? (
                <a
                  className="rounded-2xl border border-cyan-200 bg-white/85 p-4 text-sm font-bold transition hover:border-cyan-400 hover:bg-cyan-50"
                  href={`/curso-informatica-concursos/aulas/${previousTopic.slug}`}
                >
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <ArrowLeft size={14} /> Tópico anterior
                  </span>
                  <strong className="mt-1 block">{previousTopic.title}</strong>
                </a>
              ) : (
                <span />
              )}

              {nextTopic ? (
                <a
                  className="rounded-2xl border border-cyan-200 bg-cyan-700 p-4 text-sm font-bold text-white transition hover:bg-cyan-800 sm:text-right"
                  href={`/curso-informatica-concursos/aulas/${nextTopic.slug}`}
                >
                  <span className="flex items-center justify-end gap-1 text-xs text-cyan-100">
                    Próximo tópico <ArrowRight size={14} />
                  </span>
                  <strong className="mt-1 block">{nextTopic.title}</strong>
                </a>
              ) : (
                <a
                  className="rounded-2xl border border-amber-200 bg-amber-600 p-4 text-sm font-bold text-white sm:text-right"
                  href="/curso-informatica-concursos/prova-final"
                >
                  <span className="text-xs text-amber-100">Curso concluído</span>
                  <strong className="mt-1 block">Fazer o simulado final</strong>
                </a>
              )}
            </nav>
          </article>
        </div>
      </div>
    </main>
  )
}
