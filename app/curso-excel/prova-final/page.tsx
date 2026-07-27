import { FinalExamForm } from '@/components/FinalExamForm'
import { Header } from '@/components/Header'
import { hasPassedFinalExam, isCourseFullyCompleted } from '@/lib/certificates'
import { excelCourseLessons } from '@/lib/excel-course'
import {
  EXCEL_FINAL_EXAM_PASSING_SCORE,
  excelFinalExamQuestions,
} from '@/lib/excel-final-exam'
import { requireCustomer } from '@/lib/require-customer'
import { CheckCircle2, GraduationCap, LockKeyhole } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Prova final — Excel',
}

export default async function ExcelFinalExamPage() {
  const customer = await requireCustomer('/curso-excel/prova-final')
  const lessonSlugs = excelCourseLessons.map((lesson) => lesson.slug)
  const [lessonsComplete, alreadyPassed] = await Promise.all([
    isCourseFullyCompleted(customer.id, lessonSlugs),
    hasPassedFinalExam(customer.id, 'excel'),
  ])

  const questionsForClient = excelFinalExamQuestions.map((question) => ({
    id: question.id,
    question: question.question,
    options: question.options,
  }))

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-700 text-white">
            <GraduationCap size={22} />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[.16em] text-violet-700">
              Excel na Prática
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
              href="/curso-excel"
            >
              Voltar para o curso
            </a>
          </section>
        ) : alreadyPassed ? (
          <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-center">
            <CheckCircle2 className="mx-auto text-emerald-700" size={32} />
            <h2 className="mt-3 text-xl font-black text-emerald-950">
              Você já passou na prova final!
            </h2>
            <p className="mt-2 text-sm leading-6 text-emerald-900/80">
              Agora é só emitir o seu certificado na página do curso.
            </p>
            <a
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-black text-white hover:bg-emerald-800"
              href="/curso-excel"
            >
              Ir para o curso
            </a>
          </section>
        ) : (
          <>
            <p className="mb-6 text-sm leading-6 text-slate-600">
              {questionsForClient.length} questões sobre todo o conteúdo do
              curso. É preciso acertar pelo menos{' '}
              {EXCEL_FINAL_EXAM_PASSING_SCORE} para aprovar. Você pode refazer
              a prova quantas vezes precisar.
            </p>
            <FinalExamForm
              courseHref="/curso-excel"
              courseSlug="excel"
              passingScore={EXCEL_FINAL_EXAM_PASSING_SCORE}
              questions={questionsForClient}
            />
          </>
        )}
      </div>
    </main>
  )
}
