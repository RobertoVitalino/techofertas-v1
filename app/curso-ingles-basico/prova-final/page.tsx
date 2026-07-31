import { FinalExamForm } from '@/components/FinalExamForm'
import { Header } from '@/components/Header'
import { hasPassedFinalExam, isCourseFullyCompleted } from '@/lib/certificates'
import {
  ENGLISH_FINAL_EXAM_PASSING_SCORE,
  englishFinalExamQuestions,
} from '@/lib/english-final-exam'
import { englishCourseLessons } from '@/lib/english-course'
import { requireCustomer } from '@/lib/require-customer'
import { CheckCircle2, GraduationCap, LockKeyhole } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Prova final — Inglês Básico',
}

export default async function EnglishFinalExamPage() {
  const customer = await requireCustomer('/curso-ingles-basico/prova-final')
  const lessonSlugs = englishCourseLessons.map((lesson) => lesson.slug)
  const [lessonsComplete, alreadyPassed] = await Promise.all([
    isCourseFullyCompleted(customer.id, lessonSlugs),
    hasPassedFinalExam(customer.id, 'ingles-basico'),
  ])

  const questionsForClient = englishFinalExamQuestions.map((question) => ({
    id: question.id,
    question: question.question,
    options: question.options,
  }))

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-700 text-white">
            <GraduationCap size={22} />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[.16em] text-blue-700">
              Inglês Básico
            </p>
            <h1 className="text-2xl font-black">Prova final</h1>
          </div>
        </div>

        {!lessonsComplete ? (
          <section className="rounded-3xl border border-amber-300 bg-amber-50 p-6 text-center">
            <LockKeyhole className="mx-auto text-amber-700" size={32} />
            <h2 className="mt-3 text-xl font-black text-amber-950">
              Conclua as aulas primeiro
            </h2>
            <p className="mt-2 text-sm leading-6 text-amber-900/80">
              Você precisa concluir as {lessonSlugs.length} aulas do curso
              antes de fazer a prova final.
            </p>
            <a
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-amber-700 px-5 py-3 text-sm font-black text-white hover:bg-amber-800"
              href="/curso-ingles-basico"
            >
              Voltar para o curso
            </a>
          </section>
        ) : alreadyPassed ? (
          <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 text-center">
            <CheckCircle2 className="mx-auto text-blue-700" size={32} />
            <h2 className="mt-3 text-xl font-black text-blue-950">
              Você já passou na prova final!
            </h2>
            <p className="mt-2 text-sm leading-6 text-blue-900/80">
              Agora é só emitir o seu certificado na página do curso.
            </p>
            <a
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-black text-white hover:bg-blue-800"
              href="/curso-ingles-basico"
            >
              Ir para o curso
            </a>
          </section>
        ) : (
          <>
            <p className="mb-6 text-sm leading-6 text-slate-600">
              {questionsForClient.length} questões sobre todo o conteúdo do
              curso. É preciso acertar pelo menos{' '}
              {ENGLISH_FINAL_EXAM_PASSING_SCORE} para aprovar. Você pode
              refazer a prova quantas vezes precisar.
            </p>
            <FinalExamForm
              courseHref="/curso-ingles-basico"
              courseSlug="ingles-basico"
              passingScore={ENGLISH_FINAL_EXAM_PASSING_SCORE}
              questions={questionsForClient}
            />
          </>
        )}
      </div>
    </main>
  )
}
