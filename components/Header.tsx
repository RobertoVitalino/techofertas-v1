import { Heart, Menu, Search, UserRound, Zap } from 'lucide-react'

const links = [
  { label: 'Início', href: '/#início' },
  { label: 'Categorias', href: '/#categorias' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Notícias', href: '/#noticias' },
  { label: 'Serviços', href: '/#serviços' },
  { label: 'Contato', href: '/#contato' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-200 bg-sky-50/95 text-slate-900 shadow-sm shadow-sky-900/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <a href="/" className="flex shrink-0 items-center gap-3" aria-label="Vitalino Tech - Página inicial">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600">
            <Zap size={22} />
          </span>
          <span>
            <strong className="block text-xl">Vitalino Tech</strong>
            <span className="hidden text-xs text-slate-500 sm:block">
              Transformando ideias em soluções digitais.
            </span>
          </span>
        </a>

        <form
          action="/buscar"
          className="hidden flex-1 items-center rounded-xl border border-sky-200 bg-white/80 px-3 shadow-sm lg:flex"
        >
          <Search className="text-slate-400" size={18} />
          <input
            name="q"
            className="w-full bg-transparent p-3 text-sm outline-none"
            placeholder="Buscar produtos, categorias, marcas..."
            aria-label="Buscar produtos"
          />
          <button
            type="submit"
            className="rounded-lg bg-sky-100 px-4 py-2 text-xs font-bold text-sky-800 hover:bg-sky-200"
          >
            Buscar
          </button>
        </form>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="/minha-conta"
            className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-bold text-slate-700 transition hover:bg-sky-100 hover:text-sky-800"
            aria-label="Entrar ou acessar minha conta"
          >
            <UserRound size={20} />
            <span>Minha conta</span>
          </a>
          <Heart className="text-sky-700" size={20} />
        </div>

        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg p-2 hover:bg-sky-100" aria-label="Abrir menu">
            <Menu />
          </summary>
          <div className="absolute right-0 top-12 w-[min(88vw,22rem)] rounded-2xl border border-sky-200 bg-sky-50 p-4 shadow-2xl shadow-sky-900/15">
            <form
              action="/buscar"
              className="flex items-center rounded-xl border border-sky-200 bg-white px-3"
            >
              <Search className="shrink-0 text-slate-400" size={18} />
              <input
                name="q"
                className="min-w-0 flex-1 bg-transparent p-3 text-sm outline-none"
                placeholder="Buscar produtos..."
                aria-label="Buscar produtos"
              />
              <button type="submit" className="text-xs font-bold text-brand-500">
                Buscar
              </button>
            </form>
            <nav className="mt-3 grid gap-1">
              <a
                className="mb-2 flex items-center gap-2 rounded-lg bg-brand-600/15 px-3 py-2.5 text-sm font-bold text-brand-300 hover:bg-brand-600/25 hover:text-white"
                href="/minha-conta"
              >
                <UserRound size={18} /> Entrar / Minha conta
              </a>
              {links.map((link) => (
                <a
                  className="rounded-lg px-3 py-2 text-sm font-bold text-slate-700 hover:bg-sky-100 hover:text-sky-800"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </details>
      </div>

      <nav className="hidden border-t border-sky-200 md:block">
        <div className="mx-auto flex max-w-7xl gap-8 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-600">
          {links.map((link, index) => (
            <a
              className={index === 0 ? 'text-sky-700' : 'hover:text-sky-800'}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
