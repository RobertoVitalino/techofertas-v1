'use client'

import {
  adminDeleteCustomerAction,
  adminRevokeCustomerSessionsAction,
} from '@/lib/admin-customer-actions'
import { Loader2, LogOut, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

export function AdminUserActions({
  customerId,
  customerLabel,
}: {
  customerId: number
  customerLabel: string
}) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  function handleRevoke() {
    if (
      !window.confirm(
        `Encerrar todas as sessões de "${customerLabel}"? A pessoa precisará fazer login novamente.`,
      )
    ) {
      return
    }

    setError(null)
    startTransition(async () => {
      const result = await adminRevokeCustomerSessionsAction(customerId)

      if ('error' in result) {
        setError(result.error)
        return
      }

      router.refresh()
    })
  }

  function handleDelete() {
    if (
      !window.confirm(
        `Excluir permanentemente a conta de "${customerLabel}"? Essa ação não pode ser desfeita e remove todo o progresso, certificados e dados dessa conta.`,
      )
    ) {
      return
    }

    setError(null)
    startTransition(async () => {
      const result = await adminDeleteCustomerAction(customerId)

      if ('error' in result) {
        setError(result.error)
        return
      }

      router.refresh()
    })
  }

  return (
    <div className="flex items-center justify-end gap-2">
      {error ? <span className="text-xs font-bold text-red-400">{error}</span> : null}
      {isPending ? <Loader2 className="animate-spin text-slate-400" size={16} /> : null}
      <button
        className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-xs font-bold text-slate-300 hover:border-amber-400/40 hover:text-amber-300 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isPending}
        onClick={handleRevoke}
        title="Encerrar todas as sessões desta conta"
        type="button"
      >
        <LogOut size={13} /> Encerrar sessões
      </button>
      <button
        className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-xs font-bold text-slate-300 hover:border-red-400/40 hover:text-red-300 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isPending}
        onClick={handleDelete}
        title="Excluir permanentemente esta conta"
        type="button"
      >
        <Trash2 size={13} /> Excluir
      </button>
    </div>
  )
}
