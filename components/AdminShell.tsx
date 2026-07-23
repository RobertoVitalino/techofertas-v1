import { ADMIN_SESSION_COOKIE } from '@/lib/admin-auth'
import { revokeAdminSession } from '@/lib/admin-session'
import {
  BarChart3,
  ExternalLink,
  Image as ImageIcon,
  LogOut,
  Newspaper,
  Package,
  Settings,
  Tags,
  Users,
  Zap,
} from 'lucide-react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const adminLinks = [
  { label: 'Produtos', href: '/admin/produtos', icon: Package },
  { label: 'Categorias', href: '/admin/categorias', icon: Tags },
  { label: 'Artigos', href: '/admin/artigos', icon: Newspaper },
  { label: 'Banners', href: '/admin/banners', icon: ImageIcon },
  { label: 'Usuários', href: '/admin/usuarios', icon: Users },
  { label: 'Estatísticas', href: '/admin/estatisticas', icon: BarChart3 },
  { label: 'Configurações', href: '/admin/configuracoes', icon: Settings },
]

async function logoutAdmin() {
  'use server'

  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value

  await revokeAdminSession(token)
  cookieStore.delete(ADMIN_SESSION_COOKIE)
  redirect('/login')
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#05070b] lg:grid lg:grid-cols-[270px_1fr]">
      <aside className="border-b border-white/10 bg-[#080c14] p-4 lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r lg:p-5">
        <a href="/admin/produtos" className="flex items-center gap-3 rounded-2xl px-2 py-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600"><Zap size={23} /></span>
          <span><strong className="block text-lg">Vitalino Tech</strong><span className="text-xs text-slate-400">Painel Administrativo</span></span>
        </a>

        <nav className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1" aria-label="Navegação administrativa">
          {adminLinks.map(({ label, href, icon: Icon }) => (
            <a key={href} href={href} className="flex items-center gap-2 rounded-xl border border-transparent bg-white/[.04] px-3 py-2.5 text-sm font-bold text-slate-300 transition hover:border-brand-500/30 hover:bg-brand-600/15 hover:text-white">
              <Icon size={18} /> {label}
            </a>
          ))}
        </nav>

        <div className="mt-5 grid gap-2 border-t border-white/10 pt-5 lg:absolute lg:bottom-5 lg:left-5 lg:right-5">
          <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-sm font-bold text-slate-300 hover:border-white/20 hover:text-white"><ExternalLink size={17} /> Abrir loja</a>
          <form action={logoutAdmin}>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-sm font-bold text-slate-300 hover:border-red-400/40 hover:text-red-300"><LogOut size={17} /> Sair</button>
          </form>
        </div>
      </aside>

      <main className="min-w-0 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">{children}</main>
    </div>
  )
}
