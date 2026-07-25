'use client'

import { submitLessonQuestionAction } from '@/lib/lesson-question-actions'
import { CheckCircle2, Loader2, MessageCircleQuestion } from 'lucide-react'
import { useState, useTransition } from 'react'

export function LessonQuestionForm({
  courseSlug,
  lessonSlug,
}: {
  courseSlug: string
  lessonSlug: string
}) {
  const [value, setValue] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleSubmit() {
    setError(null)
    startTransition(async () => {
      const result = await submitLessonQuestionAction(
        courseSlug,
        lessonSlug,
        value,
      )

      if ('error' in result) {
        setError(result.error)
        return
      }

      setSent(true)
      setValue('')
    })
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-700 text-white">
          <MessageCircleQuestion size={20} />
        </span>
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">
            Ficou com dúvida?
          </p>
          <h2 className="text-lg font-black">
            Envie sua pergunta sobre esta aula
          </h2>
        </div>
      </div>

      {sent ? (
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          <CheckCircle2 className="shrink-0" size={18} />
          Dúvida enviada! Vamos responder o quanto antes.
        </div>
      ) : (
        <>
          <textarea
            className="mt-4 w-full rounded-xl border border-slate-300 bg-white p-3 text-sm outline-none focus:border-slate-500"
            onChange={(event) => setValue(event.target.value)}
            placeholder="Escreva sua dúvida aqui..."
            rows={4}
            value={value}
          />
          {error ? (
            <p className="mt-2 text-sm font-bold text-rose-700">{error}</p>
          ) : null}
          <button
            className="mt-3 inline-flex items-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isPending || !value.trim()}
            onClick={handleSubmit}
            type="button"
          >
            {isPending ? <Loader2 className="animate-spin" size={16} /> : null}
            Enviar dúvida
          </button>
        </>
      )}
    </section>
  )
}
