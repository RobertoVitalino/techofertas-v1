'use client'

import type { CourseReminder } from '@/lib/course-reminders'
import { Award, BookOpenCheck } from 'lucide-react'
import { useEffect, useState } from 'react'

type Reminders = {
  incomplete: CourseReminder[]
  certificatePending: CourseReminder[]
}

export function CourseReminderBanner() {
  const [reminders, setReminders] = useState<Reminders | null>(null)

  useEffect(() => {
    let cancelled = false

    fetch('/api/minha-conta/lembretes')
      .then((response) => (response.ok ? response.json() : null))
      .then((data: Reminders | null) => {
        if (!cancelled && data) setReminders(data)
      })
      .catch(() => undefined)

    return () => {
      cancelled = true
    }
  }, [])

  if (!reminders) return null

  const certificatePending = reminders.certificatePending[0]
  const incomplete = reminders.incomplete[0]
  const extraCertificatePending = reminders.certificatePending.length - 1
  const extraIncomplete = reminders.incomplete.length - 1

  if (certificatePending) {
    return (
      <a
        className="flex flex-wrap items-center justify-center gap-2 bg-emerald-600 px-4 py-2 text-center text-xs font-bold text-white hover:bg-emerald-700 sm:text-sm"
        href={certificatePending.landingHref}
      >
        <Award size={16} className="shrink-0" />
        Você concluiu o curso &ldquo;{certificatePending.title}&rdquo;! Emita
        seu certificado e conheça outros cursos
        {extraCertificatePending > 0
          ? ` (+${extraCertificatePending} outro${extraCertificatePending > 1 ? 's' : ''})`
          : ''}
        .
      </a>
    )
  }

  if (incomplete) {
    return (
      <a
        className="flex flex-wrap items-center justify-center gap-2 bg-amber-600 px-4 py-2 text-center text-xs font-bold text-white hover:bg-amber-700 sm:text-sm"
        href={incomplete.landingHref}
      >
        <BookOpenCheck size={16} className="shrink-0" />
        Falta pouco! Você concluiu {incomplete.completed} de {incomplete.total}{' '}
        aulas do curso &ldquo;{incomplete.title}&rdquo;
        {extraIncomplete > 0
          ? ` (+${extraIncomplete} outro${extraIncomplete > 1 ? 's' : ''} em andamento)`
          : ''}
        . Continue de onde parou.
      </a>
    )
  }

  return null
}
