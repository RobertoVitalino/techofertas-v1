'use client'

import { markLessonCompleteAction } from '@/lib/course-progress-actions'
import { CheckCircle2, CircleAlert } from 'lucide-react'
import { useState } from 'react'
import { notifyLessonCompleted } from './CourseProgress'

type Question = {
  id: string
  format: 'certo-errado' | 'multipla-escolha'
  statement: string
  options: string[]
  answer: number
  explanation: string
}

export function QuestionBank({
  lessonSlug,
  questions,
}: {
  lessonSlug: string
  questions: Question[]
}) {
  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs font-black uppercase tracking-[.16em] text-blue-700">
          Banco de questões
        </p>
        <h2 className="mt-1 text-xl font-black">
          Pratique com {questions.length} questões estilo banca
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Responda pelo menos uma questão corretamente para concluir a aula.
        </p>
      </div>

      {questions.map((question, index) => (
        <QuestionCard
          index={index}
          key={question.id}
          lessonSlug={lessonSlug}
          question={question}
        />
      ))}
    </section>
  )
}

function QuestionCard({
  lessonSlug,
  question,
  index,
}: {
  lessonSlug: string
  question: Question
  index: number
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null)

  async function checkAnswer() {
    if (selected === null) return
    const isCorrect = selected === question.answer
    setResult(isCorrect ? 'correct' : 'incorrect')

    if (isCorrect) {
      notifyLessonCompleted(lessonSlug)
      try {
        await markLessonCompleteAction(lessonSlug)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-blue-800">
          Questão {index + 1}
        </span>
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-indigo-800">
          {question.format === 'certo-errado' ? 'Certo ou Errado' : 'Múltipla escolha'}
        </span>
      </div>

      <p className="mt-3 text-base font-bold leading-7">{question.statement}</p>

      <div className="mt-4 grid gap-3">
        {question.options.map((option, optionIndex) => (
          <label
            className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm transition ${
              selected === optionIndex
                ? 'border-blue-500 bg-blue-50'
                : 'border-slate-200 bg-white hover:border-blue-300'
            }`}
            key={option}
          >
            <input
              checked={selected === optionIndex}
              className="mt-0.5"
              name={`${lessonSlug}-${question.id}`}
              onChange={() => {
                setSelected(optionIndex)
                setResult(null)
              }}
              type="radio"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <button
        className="mt-4 rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-black text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={selected === null}
        onClick={checkAnswer}
        type="button"
      >
        Verificar resposta
      </button>

      {result && (
        <div
          className={`mt-4 flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
            result === 'correct'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
              : 'border-amber-200 bg-amber-50 text-amber-900'
          }`}
        >
          {result === 'correct' ? (
            <CheckCircle2 className="mt-0.5 shrink-0" size={20} />
          ) : (
            <CircleAlert className="mt-0.5 shrink-0" size={20} />
          )}
          <div>
            <strong className="block">
              {result === 'correct' ? 'Resposta correta!' : 'Ainda não. Revise e tente de novo.'}
            </strong>
            <p>{question.explanation}</p>
          </div>
        </div>
      )}
    </div>
  )
}
