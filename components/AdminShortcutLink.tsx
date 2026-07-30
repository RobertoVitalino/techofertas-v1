'use client'

import { LayoutDashboard } from 'lucide-react'
import { useEffect, useState } from 'react'

export function AdminShortcutLink({ variant }: { variant: 'desktop' | 'mobile' }) {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    let cancelled = false

    fetch('/api/is-admin-account')
      .then((response) => response.json())
      .then((data: { isAdmin: boolean }) => {
        if (!cancelled) setIsAdmin(Boolean(data.isAdmin))
      })
      .catch(() => undefined)

    return () => {
      cancelled = true
    }
  }, [])

  if (!isAdmin) return null

  if (variant === 'mobile') {
    return (
      <a
        className="mb-2 flex items-center gap-2 rounded-lg bg-brand-600/15 px-3 py-2.5 text-sm font-bold text-brand-300 hover:bg-brand-600/25 hover:text-white"
        href="/admin"
      >
        <LayoutDashboard size={18} /> Painel Admin
      </a>
    )
  }

  return (
    <a
      className="flex items-center gap-2 rounded-lg bg-brand-600/15 px-3 py-2 text-sm font-bold text-brand-700 transition hover:bg-brand-600/25"
      href="/admin"
      aria-label="Ir para o painel administrativo"
    >
      <LayoutDashboard size={20} />
      <span>Painel Admin</span>
    </a>
  )
}
