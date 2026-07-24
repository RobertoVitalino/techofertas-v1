'use client'

import { markLessonCompleteAction } from '@/lib/course-progress-actions'
import { CheckCircle2, CircleAlert } from 'lucide-react'
import { useState } from 'react'
import { notifyLessonCompleted } from './CourseProgress'

type LessonQuizProps = {
  lessonSlug: string
  question: string
  options: string[]
  answer: number
  explanation: string
}
export function LessonQuiz({
  lessonSlug,
  question,
  options,
  answer,
  explanation,
}: LessonQuizProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null)

  async function checkAnswer() {
    if (selected === null) return
    const isCorrect = selected === answer
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
    <section className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm sm:p-6">
      <p className="text-xs font-black uppercase tracking-[.16em] text-sky-700">
        Revisão da aula
      </p>
      <h2 className="mt-2 text-xl font-black">{question}</h2>

      <div className="mt-5 grid gap-3">
        {options.map((option, index) => (
          <label
            className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm transition ${
              selected === index
                ? 'border-sky-500 bg-sky-50'
                : 'border-slate-200 bg-white hover:border-sky-300'
            }`}
            key={option}
          >
            <input
              checked={selected === index}
              className="mt-0.5"
              name={`quiz-${lessonSlug}`}
              onChange={() => {
                setSelected(index)
                setResult(null)
              }}
              type="radio"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <button
        className="mt-5 rounded-xl bg-sky-700 px-5 py-3 text-sm font-black text-white transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-50"
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
              {result === 'correct'
                ? 'Resposta correta — aula concluída!'
                : 'Ainda não. Revise o conteúdo e tente novamente.'}
            </strong>
            <p>{explanation}</p>
          </div>
        </div>
      )}
    </section>
  )
}
