'use client'

import { markLessonCompleteAction } from '@/lib/course-progress-actions'
import { CheckCircle2, CircleAlert, RotateCcw, Target, Timer, Zap } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { notifyLessonCompleted } from './CourseProgress'

type TypingDrillProps = {
  lessonSlug: string
  text: string
  minWpm: number
  minAccuracy: number
}

export function TypingDrill({ lessonSlug, text, minWpm, minAccuracy }: TypingDrillProps) {
  const [input, setInput] = useState('')
  const [startedAt, setStartedAt] = useState<number | null>(null)
  const [finished, setFinished] = useState(false)
  const [finalStats, setFinalStats] = useState<{ wpm: number; accuracy: number; passed: boolean } | null>(null)
  const [elapsedMs, setElapsedMs] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const startedAtRef = useRef<number | null>(null)

  useEffect(() => {
    if (!startedAt || finished) return

    const interval = setInterval(() => setElapsedMs(Date.now() - startedAt), 200)
    return () => clearInterval(interval)
  }, [startedAt, finished])

  useEffect(() => {
    inputRef.current?.setSelectionRange(input.length, input.length)
  }, [input])

  const correctChars = useMemo(() => {
    let count = 0
    for (let i = 0; i < input.length; i += 1) {
      if (input[i] === text[i]) count += 1
    }
    return count
  }, [input, text])

  const liveAccuracy = input.length > 0 ? Math.round((correctChars / input.length) * 100) : 100
  const liveMinutes = elapsedMs / 60000
  const liveWpm = liveMinutes > 0 ? Math.round(correctChars / 5 / liveMinutes) : 0

  function handleChange(value: string) {
    if (finished || value.length > text.length) return

    if (!startedAtRef.current && value.length > 0) {
      startedAtRef.current = Date.now()
      setStartedAt(startedAtRef.current)
    }

    setInput(value)

    if (value.length === text.length) {
      const endTime = Date.now()
      const totalMinutes = (endTime - (startedAtRef.current ?? endTime)) / 60000
      let finalCorrect = 0
      for (let i = 0; i < value.length; i += 1) {
        if (value[i] === text[i]) finalCorrect += 1
      }
      const finalAccuracy = Math.round((finalCorrect / value.length) * 100)
      const finalWpm = totalMinutes > 0 ? Math.round(finalCorrect / 5 / totalMinutes) : 0
      const passed = finalWpm >= minWpm && finalAccuracy >= minAccuracy

      setFinished(true)
      setFinalStats({ wpm: finalWpm, accuracy: finalAccuracy, passed })

      if (passed) {
        notifyLessonCompleted(lessonSlug)
        markLessonCompleteAction(lessonSlug).catch(() => undefined)
      }
    }
  }

  function reset() {
    startedAtRef.current = null
    setInput('')
    setStartedAt(null)
    setFinished(false)
    setFinalStats(null)
    setElapsedMs(0)
    inputRef.current?.focus()
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <p className="text-xs font-black uppercase tracking-[.16em] text-slate-500">
        Exercício de digitação
      </p>
      <h2 className="mt-2 text-lg font-black">Digite o texto abaixo</h2>

      <div className="mt-4 flex flex-wrap gap-3 text-xs font-bold text-slate-500">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5">
          <Timer size={14} /> {(elapsedMs / 1000).toFixed(1)}s
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5">
          <Zap size={14} /> {finished ? finalStats?.wpm : liveWpm} PPM
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5">
          <Target size={14} /> {finished ? finalStats?.accuracy : liveAccuracy}% de precisão
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5">
          Meta: {minWpm} PPM · {minAccuracy}%
        </span>
      </div>

      <div
        className="mt-4 select-none rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-lg leading-8 tracking-wide"
        onClick={() => inputRef.current?.focus()}
      >
        {text.split('').map((char, index) => {
          let className = 'text-slate-400'

          if (index < input.length) {
            className =
              input[index] === char
                ? 'text-emerald-700 bg-emerald-100'
                : 'text-rose-700 bg-rose-200 underline'
          } else if (index === input.length) {
            className = 'bg-sky-300 text-slate-900'
          }

          return (
            <span className={className} key={index}>
              {char === ' ' ? ' ' : char}
            </span>
          )
        })}
      </div>

      <input
        aria-label="Digite o texto do exercício"
        autoComplete="off"
        autoCorrect="off"
        className="sr-only"
        disabled={finished}
        onChange={(event) => handleChange(event.target.value)}
        onPaste={(event) => event.preventDefault()}
        ref={inputRef}
        spellCheck={false}
        value={input}
      />

      {!finished ? (
        <p className="mt-3 text-xs text-slate-500">
          Clique no texto acima e comece a digitar.
        </p>
      ) : (
        <div
          className={`mt-4 flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
            finalStats?.passed
              ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
              : 'border-amber-200 bg-amber-50 text-amber-900'
          }`}
        >
          {finalStats?.passed ? (
            <CheckCircle2 className="mt-0.5 shrink-0" size={20} />
          ) : (
            <CircleAlert className="mt-0.5 shrink-0" size={20} />
          )}
          <div>
            <strong className="block">
              {finalStats?.passed ? 'Muito bem — aula concluída!' : 'Quase lá, tente novamente'}
            </strong>
            <p>
              Você digitou a {finalStats?.wpm} PPM com {finalStats?.accuracy}% de precisão. A
              meta desta aula é {minWpm} PPM e {minAccuracy}% de precisão.
            </p>
          </div>
        </div>
      )}

      <button
        className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-black text-slate-700 transition hover:border-slate-400"
        onClick={reset}
        type="button"
      >
        <RotateCcw size={14} /> Reiniciar exercício
      </button>
    </section>
  )
}
