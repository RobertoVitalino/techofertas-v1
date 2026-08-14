import { ComputingCoursePromo } from '@/components/ComputingCoursePromo'
import { DealAlertSignup } from '@/components/DealAlertSignup'
import { EnglishCoursePromo } from '@/components/EnglishCoursePromo'
import { ExamPrepCoursePromo } from '@/components/ExamPrepCoursePromo'
import { ExcelCoursePromo } from '@/components/ExcelCoursePromo'
import { HardwareCoursePromo } from '@/components/HardwareCoursePromo'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { MathExamCoursePromo } from '@/components/MathExamCoursePromo'
import { Categories, News, Products, Services } from '@/components/Sections'
import { SecurityCoursePromo } from '@/components/SecurityCoursePromo'
import { TypingCoursePromo } from '@/components/TypingCoursePromo'
import { prisma } from '@/lib/prisma'
import { SITE_DESCRIPTION, SITE_NAME, SITE_OG_IMAGE, SITE_URL } from '@/lib/site'
import { Github, Mail, MapPin, Phone } from 'lucide-react'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
}

export default async function Home() {
  const dbProducts = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: SITE_OG_IMAGE,
    description: SITE_DESCRIPTION,
    email: 'devrobertovitalino@gmail.com',
    telephone: '+5567984793793',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'MS',
      addressCountry: 'BR',
    },
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  }

  return (
    <main className="site-light-theme">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        type="application/ld+json"
      />
      <Header />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-8">
        <Hero />
        <Services />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ComputingCoursePromo />
          <SecurityCoursePromo />
          <ExcelCoursePromo />
          <HardwareCoursePromo />
          <TypingCoursePromo />
          <EnglishCoursePromo />
          <ExamPrepCoursePromo />
          <MathExamCoursePromo />
        </div>
        <News />
        <Categories />
        <DealAlertSignup />
        <Products products={dbProducts} variant="catalog" />
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
            <nav className="mt-3 grid gap-2 text-sm text-slate-400" aria-label="Links institucionais">
              <a href="/#produtos-por-categoria" className="transition hover:text-white">Produtos e ofertas</a>
              <a href="/artigos" className="transition hover:text-white">Artigos e guias</a>
              <a href="/curso-seguranca-da-informacao" className="transition hover:text-white">Curso gratuito</a>
              <a href="/sobre" className="transition hover:text-white">Sobre mim</a>
              <a href="/privacidade" className="transition hover:text-white">Política de Privacidade</a>
              <a href="/termos" className="transition hover:text-white">Termos de Uso</a>
            </nav>
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
