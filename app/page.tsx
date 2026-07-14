import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Blog, Categories, Products, Services } from '@/components/Sections'
import { AdminPreview } from '@/components/AdminPreview'
import { prisma } from '@/lib/prisma'
import { Github, Mail, MapPin, Phone } from 'lucide-react'

export default async function Home() {
  const dbProducts = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <main>
      <Header />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-8">
        <Hero />
        <Categories />
        <Products products={dbProducts} />
        <Services />
        <Blog />
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
              <Mail size={16} /> contato@vitalinotech.com.br
            </p>
            <p className="mt-2 flex gap-2 text-sm text-slate-400">
              <Phone size={16} /> (67) 99999-9999
            </p>
            <p className="mt-2 flex gap-2 text-sm text-slate-400">
              <MapPin size={16} /> Mato Grosso do Sul
            </p>
          </div>

          <div>
            <strong>Links</strong>
            <p className="mt-3 text-sm text-slate-400">
              Produtos • Blog • Serviços • Painel Admin
            </p>
          </div>

          <div>
            <strong>Tecnologias</strong>
            <p className="mt-3 text-sm text-slate-400">
              Next.js, TypeScript, Tailwind CSS, Prisma e SQLite.
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
