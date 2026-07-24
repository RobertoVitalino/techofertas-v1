'use client'

import { useEffect, useState } from 'react'

const progressEvent = 'vitalino-course-progress'

export function notifyLessonCompleted(slug: string) {
  window.dispatchEvent(new CustomEvent(progressEvent, { detail: { slug } }))
}

export function CourseProgress({
  lessonSlugs,
  initialCompleted,
}: {
  lessonSlugs: string[]
  initialCompleted: string[]
}) {
  const [completed, setCompleted] = useState<string[]>(initialCompleted)

  useEffect(() => {
    function handleProgressEvent(event: Event) {
      const slug = (event as CustomEvent<{ slug: string }>).detail?.slug
      if (!slug) return
      setCompleted((current) => (current.includes(slug) ? current : [...current, slug]))
    }

    window.addEventListener(progressEvent, handleProgressEvent)
    return () => window.removeEventListener(progressEvent, handleProgressEvent)
  }, [])

  const completedCount = lessonSlugs.filter((slug) => completed.includes(slug)).length
  const percentage = lessonSlugs.length
    ? Math.round((completedCount / lessonSlugs.length) * 100)
    : 0

  return (
    <div className="rounded-2xl border border-sky-200 bg-white/85 p-4 shadow-sm">
      <div className="flex items-center justify-between gap-4 text-sm">
        <strong>Seu progresso no curso</strong>
        <span className="font-black text-sky-700">{percentage}%</span>
      </div>
      <div
        aria-label={`${percentage}% do curso concluído`}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={percentage}
        className="mt-3 h-2.5 overflow-hidden rounded-full bg-sky-100"
        role="progressbar"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-slate-500">
        {completedCount} de {lessonSlugs.length} aulas concluídas. Seu progresso fica
        salvo na sua conta e acompanha você em qualquer dispositivo.
      </p>
    </div>
  )
}
