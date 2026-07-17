'use client'

import { useEffect, useState } from 'react'

const storageKey = 'vitalino-security-course-progress'
const progressEvent = 'vitalino-course-progress'

function readProgress() {
  if (typeof window === 'undefined') return []

  try {
    const saved = JSON.parse(window.localStorage.getItem(storageKey) || '[]')
    return Array.isArray(saved) ? saved.filter((item) => typeof item === 'string') : []
  } catch {
    return []
  }
}
export function markSecurityLessonComplete(slug: string) {
  const completed = readProgress()
  const next = completed.includes(slug) ? completed : [...completed, slug]
  window.localStorage.setItem(storageKey, JSON.stringify(next))
  window.dispatchEvent(new Event(progressEvent))
}

export function CourseProgress({ lessonSlugs }: { lessonSlugs: string[] }) {
  const [completed, setCompleted] = useState<string[]>([])

  useEffect(() => {
    const refresh = () => setCompleted(readProgress())
    refresh()
    window.addEventListener(progressEvent, refresh)
    window.addEventListener('storage', refresh)

    return () => {
      window.removeEventListener(progressEvent, refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  const completedCount = lessonSlugs.filter((slug) => completed.includes(slug)).length
  const percentage = lessonSlugs.length
    ? Math.round((completedCount / lessonSlugs.length) * 100)
    : 0

  return (
    <div className="rounded-2xl border border-sky-200 bg-white/85 p-4 shadow-sm">
      <div className="flex items-center justify-between gap-4 text-sm">
        <strong>Seu progresso neste dispositivo</strong>
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
        {completedCount} de {lessonSlugs.length} aulas concluídas. O progresso fica
        salvo somente neste navegador.
      </p>
    </div>
  )
}
