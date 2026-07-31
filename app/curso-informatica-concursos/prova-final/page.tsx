import { FinalExamForm } from '@/components/FinalExamForm'
import { Header } from '@/components/Header'
import { hasPassedFinalExam, isCourseFullyCompleted } from '@/lib/certificates'
import {
  EXAM_PREP_FINAL_EXAM_PASSING_SCORE,
  examPrepFinalExamQuestions,
} from '@/lib/exam-prep-final-exam'
import { examPrepLessons } from '@/lib/exam-prep-course'
import { requireCustomer } from '@/lib/require-customer'
import { CheckCircle2, GraduationCap, LockKeyhole } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Simulado final — Informática para Concursos',
}

export default async function ExamPrepFinalExamPage() {
  const customer = await requireCustomer('/curso-informatica-concursos/prova-final')
  const lessonSlugs = examPrepLessons.map((topic) => topic.slug)
  const [lessonsComplete, alreadyPassed] = await Promise.all([
    isCourseFullyCompleted(customer.id, lessonSlugs),
    hasPassedFinalExam(customer.id, 'informatica-concursos'),
  ])

  const questionsForClient = examPrepFinalExamQuestions.map((question) => ({
    id: question.id,
    question: question.question,
    options: question.options,
  }))

  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-700 text-white">
            <GraduationCap size={22} />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[.16em] text-cyan-700">
              Informática para Concursos
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
              href="/curso-informatica-concursos"
            >
              Voltar para o curso
            </a>
          </section>
        ) : alreadyPassed ? (
          <section className="rounded-3xl border border-cyan-200 bg-cyan-50 p-6 text-center">
            <CheckCircle2 className="mx-auto text-cyan-700" size={32} />
            <h2 className="mt-3 text-xl font-black text-cyan-950">
              Você já passou no simulado final!
            </h2>
            <p className="mt-2 text-sm leading-6 text-cyan-900/80">
              Agora é só emitir o seu certificado na página do curso.
            </p>
            <a
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-cyan-700 px-5 py-3 text-sm font-black text-white hover:bg-cyan-800"
              href="/curso-informatica-concursos"
            >
              Ir para o curso
            </a>
          </section>
        ) : (
          <>
            <p className="mb-6 text-sm leading-6 text-slate-600">
              {questionsForClient.length} questões misturando todos os
              tópicos, estilo Certo/Errado e múltipla escolha. É preciso
              acertar pelo menos {EXAM_PREP_FINAL_EXAM_PASSING_SCORE} para
              aprovar. Você pode refazer o simulado quantas vezes precisar.
            </p>
            <FinalExamForm
              courseHref="/curso-informatica-concursos"
              courseSlug="informatica-concursos"
              passingScore={EXAM_PREP_FINAL_EXAM_PASSING_SCORE}
              questions={questionsForClient}
            />
          </>
        )}
      </div>
    </main>
  )
}
