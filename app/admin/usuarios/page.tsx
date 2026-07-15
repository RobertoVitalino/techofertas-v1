import { requireAdmin } from '@/lib/require-admin'
import { prisma } from '@/lib/prisma'
import { Users } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function AdminUsersPage() {
  await requireAdmin()
  const customers = await prisma.customer.findMany({ orderBy: { createdAt: 'desc' }, select: { id: true, name: true, email: true, username: true, createdAt: true } })
  return <div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-400">Clientes</p><h1 className="mt-2 text-3xl font-black sm:text-4xl">Usuários</h1><p className="mt-2 text-slate-400">{customers.length} clientes cadastrados na plataforma.</p><section className="mt-8 rounded-2xl border border-white/10 bg-white/[.04] p-5">{customers.length ? <div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="text-slate-400"><tr><th className="py-3">Cliente</th><th>Usuário</th><th>E-mail</th><th>Cadastro</th></tr></thead><tbody>{customers.map((customer) => <tr key={customer.id} className="border-t border-white/10"><td className="py-4 font-bold">{customer.name}</td><td>{customer.username ? `@${customer.username}` : '—'}</td><td>{customer.email}</td><td>{new Intl.DateTimeFormat('pt-BR').format(customer.createdAt)}</td></tr>)}</tbody></table></div> : <div className="grid place-items-center py-16 text-center"><Users size={36} className="text-slate-500" /><h2 className="mt-4 font-black">Nenhum cliente cadastrado</h2><p className="mt-1 text-sm text-slate-400">Os novos cadastros aparecerão aqui.</p></div>}</section></div>
}
