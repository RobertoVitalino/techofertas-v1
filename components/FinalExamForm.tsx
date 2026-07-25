'use client'

import { submitFinalExamAction } from '@/lib/exam-actions'
import { CheckCircle2, CircleAlert, Loader2 } from 'lucide-react'
import { useState, useTransition } from 'react'

type Question = {
  id: string
  question: string
  options: string[]
}

type Result = { score: number; total: number; passed: boolean }

export function FinalExamForm({
  questions,
  passingScore,
}: {
  questions: Question[]
  passingScore: number
}) {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === questions.length

  function handleSubmit() {
    setError(null)
    startTransition(async () => {
      const response = await submitFinalExamAction(answers)

      if ('error' in response) {
        setError(response.error)
        return
      }

      setResult(response)
    })
  }

  if (result) {
    return (
      <section
        className={`rounded-3xl border p-6 text-center sm:p-8 ${
          result.passed
            ? 'border-emerald-200 bg-emerald-50'
            : 'border-amber-200 bg-amber-50'
        }`}
      >
        <span
          className={`mx-auto grid h-14 w-14 place-items-center rounded-full text-white ${
            result.passed ? 'bg-emerald-600' : 'bg-amber-600'
          }`}
        >
          {result.passed ? <CheckCircle2 size={28} /> : <CircleAlert size={28} />}
        </span>
        <h2 className="mt-5 text-2xl font-black">
          {result.passed ? 'Você foi aprovado!' : 'Ainda não foi dessa vez'}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Você acertou {result.score} de {result.total} questões (mínimo para
          aprovar: {passingScore}).
        </p>
        {result.passed ? (
          <a
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-black text-white transition hover:bg-emerald-700"
            href="/curso-computacao-basica"
          >
            Ir emitir meu certificado
          </a>
        ) : (
          <button
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-sm font-black text-white transition hover:bg-amber-700"
            onClick={() => {
              setAnswers({})
              setResult(null)
            }}
            type="button"
          >
            Tentar novamente
          </button>
        )}
      </section>
    )
  }

  return (
    <div className="space-y-5">
      {questions.map((question, index) => (
        <section
          className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm sm:p-6"
          key={question.id}
        >
          <p className="text-xs font-black uppercase tracking-[.16em] text-emerald-700">
            Questão {index + 1} de {questions.length}
          </p>
          <h2 className="mt-2 text-lg font-black">{question.question}</h2>

          <div className="mt-4 grid gap-3">
            {question.options.map((option, optionIndex) => (
              <label
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm transition ${
                  answers[question.id] === optionIndex
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-slate-200 bg-white hover:border-emerald-300'
                }`}
                key={option}
              >
                <input
                  checked={answers[question.id] === optionIndex}
                  className="mt-0.5"
                  name={`exam-${question.id}`}
                  onChange={() =>
                    setAnswers((current) => ({
                      ...current,
                      [question.id]: optionIndex,
                    }))
                  }
                  type="radio"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </section>
      ))}

      <div className="sticky bottom-4 rounded-2xl border border-emerald-200 bg-white/95 p-4 shadow-lg backdrop-blur">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm font-bold text-slate-700">
            {answeredCount} de {questions.length} questões respondidas
          </p>
          {error ? <p className="text-sm font-bold text-rose-700">{error}</p> : null}
          <button
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-black text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!allAnswered || isPending}
            onClick={handleSubmit}
            type="button"
          >
            {isPending ? <Loader2 className="animate-spin" size={16} /> : null}
            Enviar prova
          </button>
        </div>
      </div>
    </div>
  )
}
