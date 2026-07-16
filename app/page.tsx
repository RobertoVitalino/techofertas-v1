import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Categories, News, Products, Services } from '@/components/Sections'
import { AdminPreview } from '@/components/AdminPreview'
import { prisma } from '@/lib/prisma'
import { Github, Mail, MapPin, Phone } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const dbProducts = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <main className="site-light-theme">
      <Header />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-8">
        <Hero />
        <Categories />
        <Products products={dbProducts} />
        <Services />
        <News />
        <AdminPreview />
      </div>

      <footer id="contato" className="mt-12 scroll-mt-36 border-t border-white/10 bg-black/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4">
          <div>
            <strong className="text-xl">Vitalino Tech</strong>
            <p className="mt-3 text-sm text-slate-400">
              Portal profissional de tecnologia, desenvolvimento de sistemas,
              aplicativos e soluções digitais.
            </p>
          </div>

          <div>
            <strong>Contato</strong>
            <p className="mt-3 flex gap-2 text-sm text-slate-400">
              <Mail size={16} />
              <a
                href="mailto:devrobertovitalino@gmail.com"
                className="transition hover:text-white"
              >
                devrobertovitalino@gmail.com
              </a>
            </p>
            <p className="mt-2 flex gap-2 text-sm text-slate-400">
              <Phone size={16} />
              <a
                href="https://wa.me/5567984793793"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                (67) 98479-3793
              </a>
            </p>
            <p className="mt-2 flex gap-2 text-sm text-slate-400">
              <MapPin size={16} /> Mato Grosso do Sul
            </p>
          </div>

          <div>
            <strong>Links</strong>
            <p className="mt-3 text-sm text-slate-400">
              Produtos • Notícias • Serviços • Painel Admin
            </p>
          </div>

          <div>
            <strong>Tecnologias</strong>
            <p className="mt-3 text-sm text-slate-400">
              Next.js, TypeScript, Tailwind CSS, Prisma e PostgreSQL.
            </p>
            <p className="mt-3 flex gap-2 text-sm text-slate-400">
              <Github size={16} /> Projeto pronto para GitHub e Vercel
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
