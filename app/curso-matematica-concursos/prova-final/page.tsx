import { FinalExamForm } from '@/components/FinalExamForm'
import { Header } from '@/components/Header'
import { hasPassedFinalExam, isCourseFullyCompleted } from '@/lib/certificates'
import {
  MATH_EXAM_FINAL_EXAM_PASSING_SCORE,
  mathExamFinalExamQuestions,
} from '@/lib/math-exam-final-exam'
import { mathExamLessons } from '@/lib/math-exam-course'
import { requireCustomer } from '@/lib/require-customer'
import { CheckCircle2, GraduationCap, LockKeyhole } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Simulado final — Matemática para Concursos',
}

export default async function MathExamFinalExamPage() {
  const customer = await requireCustomer('/curso-matematica-concursos/prova-final')
  const lessonSlugs = mathExamLessons.map((topic) => topic.slug)
  const [lessonsComplete, alreadyPassed] = await Promise.all([
    isCourseFullyCompleted(customer.id, lessonSlugs),
    hasPassedFinalExam(customer.id, 'matematica-concursos'),
  ])

  const questionsForClient = mathExamFinalExamQuestions.map((question) => ({
    id: question.id,
    question: question.question,
    options: question.options,
  }))

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-indigo-700 text-white">
            <GraduationCap size={22} />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[.16em] text-indigo-700">
              Matemática para Concursos
            </p>
            <h1 className="text-2xl font-black">Simulado final</h1>
          </div>
        </div>

        {!lessonsComplete ? (
          <section className="rounded-3xl border border-amber-300 bg-amber-50 p-6 text-center">
            <LockKeyhole className="mx-auto text-amber-700" size={32} />
            <h2 className="mt-3 text-xl font-black text-amber-950">
              Conclua os tópicos primeiro
            </h2>
            <p className="mt-2 text-sm leading-6 text-amber-900/80">
              Você precisa concluir os {lessonSlugs.length} tópicos do curso
              antes de fazer o simulado final.
            </p>
            <a
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-amber-700 px-5 py-3 text-sm font-black text-white hover:bg-amber-800"
              href="/curso-matematica-concursos"
            >
              Voltar para o curso
            </a>
          </section>
        ) : alreadyPassed ? (
          <section className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6 text-center">
            <CheckCircle2 className="mx-auto text-indigo-700" size={32} />
            <h2 className="mt-3 text-xl font-black text-indigo-950">
              Você já passou no simulado final!
            </h2>
            <p className="mt-2 text-sm leading-6 text-indigo-900/80">
              Agora é só emitir o seu certificado na página do curso.
            </p>
            <a
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-700 px-5 py-3 text-sm font-black text-white hover:bg-indigo-800"
              href="/curso-matematica-concursos"
            >
              Ir para o curso
            </a>
          </section>
        ) : (
          <>
            <p className="mb-6 text-sm leading-6 text-slate-600">
              {questionsForClient.length} questões misturando todos os
              tópicos, estilo Certo/Errado e múltipla escolha. É preciso
              acertar pelo menos {MATH_EXAM_FINAL_EXAM_PASSING_SCORE} para
              aprovar. Você pode refazer o simulado quantas vezes precisar.
            </p>
            <FinalExamForm
              courseHref="/curso-matematica-concursos"
              courseSlug="matematica-concursos"
              passingScore={MATH_EXAM_FINAL_EXAM_PASSING_SCORE}
              questions={questionsForClient}
            />
          </>
        )}
      </div>
    </main>
  )
}
