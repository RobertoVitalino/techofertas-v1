'use client'

import {
  adminDeleteCustomerAction,
  adminResetCustomerPasswordAction,
  adminRevokeCustomerSessionsAction,
} from '@/lib/admin-customer-actions'
import { Check, Copy, KeyRound, Loader2, LogOut, Trash2, X } from 'lucide-react'
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
  const [temporaryPassword, setTemporaryPassword] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

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

  function handleResetPassword() {
    if (
      !window.confirm(
        `Gerar uma nova senha temporária para "${customerLabel}"? As sessões atuais serão encerradas e a pessoa precisará usar a nova senha para entrar.`,
      )
    ) {
      return
    }

    setError(null)
    setCopied(false)
    startTransition(async () => {
      const result = await adminResetCustomerPasswordAction(customerId)

      if ('error' in result) {
        setError(result.error)
        return
      }

      setTemporaryPassword(result.temporaryPassword)
      router.refresh()
    })
  }

  function handleCopyPassword() {
    if (!temporaryPassword) return

    navigator.clipboard.writeText(temporaryPassword).then(() => {
      setCopied(true)
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
    <div className="flex flex-col items-end gap-2">
      <div className="flex items-center justify-end gap-2">
        {error ? <span className="text-xs font-bold text-red-400">{error}</span> : null}
        {isPending ? <Loader2 className="animate-spin text-slate-400" size={16} /> : null}
        <button
          className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-xs font-bold text-slate-300 hover:border-sky-400/40 hover:text-sky-300 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isPending}
          onClick={handleResetPassword}
          title="Gerar uma nova senha temporária para esta conta"
          type="button"
        >
          <KeyRound size={13} /> Redefinir senha
        </button>
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

      {temporaryPassword ? (
        <div className="flex items-center gap-2 rounded-lg border border-sky-400/40 bg-sky-500/10 px-3 py-2 text-xs">
          <span className="font-bold text-slate-300">Nova senha:</span>
          <code className="rounded bg-black/30 px-2 py-1 font-mono text-sm text-sky-200">
            {temporaryPassword}
          </code>
          <button
            className="flex items-center gap-1 rounded border border-white/10 px-2 py-1 font-bold text-slate-300 hover:border-sky-400/40 hover:text-sky-300"
            onClick={handleCopyPassword}
            title="Copiar senha"
            type="button"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? 'Copiado' : 'Copiar'}
          </button>
          <button
            className="text-slate-400 hover:text-slate-200"
            onClick={() => setTemporaryPassword(null)}
            title="Fechar"
            type="button"
          >
            <X size={14} />
          </button>
        </div>
      ) : null}
    </div>
  )
}
