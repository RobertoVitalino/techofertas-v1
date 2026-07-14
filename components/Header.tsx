import { Heart, Menu, Search, ShoppingCart, UserRound, Zap } from 'lucide-react'

const links = [
  { label: 'Início', href: '/#início' },
  { label: 'Categorias', href: '/#categorias' },
  { label: 'Ofertas do dia', href: '/#ofertas-do-dia' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Serviços', href: '/#serviços' },
  { label: 'Contato', href: '/#contato' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070b]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <a href="/" className="flex shrink-0 items-center gap-3" aria-label="Vitalino Tech - Página inicial">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600">
            <Zap size={22} />
          </span>
          <span>
            <strong className="block text-xl">Vitalino Tech</strong>
            <span className="hidden text-xs text-slate-400 sm:block">
              Transformando ideias em soluções digitais.
            </span>
          </span>
        </a>

        <form
          action="/buscar"
          className="hidden flex-1 items-center rounded-xl border border-white/10 bg-white/5 px-3 lg:flex"
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
            className="rounded-lg bg-white/10 px-4 py-2 text-xs hover:bg-white/15"
          >
            Buscar
          </button>
        </form>

        <div className="hidden items-center gap-4 md:flex">
          <UserRound size={20} />
          <Heart size={20} />
          <div className="relative">
            <ShoppingCart size={21} />
            <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-brand-600 text-xs">
              2
            </span>
          </div>
        </div>

        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg p-2 hover:bg-white/10" aria-label="Abrir menu">
            <Menu />
          </summary>
          <div className="absolute right-0 top-12 w-[min(88vw,22rem)] rounded-2xl border border-white/10 bg-[#0a0e16] p-4 shadow-2xl">
            <form
              action="/buscar"
              className="flex items-center rounded-xl border border-white/10 bg-white/5 px-3"
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
              {links.map((link) => (
                <a
                  className="rounded-lg px-3 py-2 text-sm font-bold text-slate-300 hover:bg-white/10 hover:text-white"
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

      <nav className="hidden border-t border-white/10 md:block">
        <div className="mx-auto flex max-w-7xl gap-8 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-300">
          {links.map((link, index) => (
            <a
              className={index === 0 ? 'text-brand-500' : 'hover:text-white'}
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
