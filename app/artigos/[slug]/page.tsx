import { Header } from '@/components/Header'
import { articles, getArticle } from '@/lib/blog'
import { SITE_NAME, SITE_OG_IMAGE, SITE_URL } from '@/lib/site'
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) return {}

  const url = `${SITE_URL}/artigos/${article.slug}`

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url,
      publishedTime: article.publishedAt,
      siteName: SITE_NAME,
      images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [SITE_OG_IMAGE],
    },
  }
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${value}T00:00:00`))
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) notFound()

  const articleUrl = `${SITE_URL}/artigos/${article.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: SITE_OG_IMAGE },
    },
    image: [SITE_OG_IMAGE],
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
  }

  return (
    <main className="site-light-theme min-h-screen">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <Header />

      <div className="mx-auto max-w-3xl px-4 py-8">
        <a
          className="inline-flex items-center gap-2 text-sm font-black text-brand-600 hover:text-brand-700"
          href="/artigos"
        >
          <ArrowLeft size={17} /> Voltar aos artigos
        </a>

        <article className="mt-6">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-brand-700">
            {article.category}
          </span>
          <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            {article.title}
          </h1>
          <div className="mt-3 flex items-center gap-4 text-xs font-bold text-slate-500">
            <span>{formatDate(article.publishedAt)}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={14} /> {article.readTimeMinutes} min de leitura
            </span>
          </div>

          <p className="mt-6 text-base leading-8 text-slate-700">
            {article.intro}
          </p>

          <div className="mt-8 space-y-8">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-black">{section.heading}</h2>
                <div className="mt-3 space-y-4">
                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      className="text-base leading-7 text-slate-700"
                      key={index}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {article.checklist ? (
            <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
              <h2 className="text-lg font-black text-emerald-950">
                Resumo rápido
              </h2>
              <ul className="mt-4 space-y-2.5">
                {article.checklist.map((item) => (
                  <li
                    className="flex items-start gap-2 text-sm leading-6 text-emerald-950"
                    key={item}
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-emerald-600"
                      size={18}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="mt-8 flex flex-col gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <p className="text-sm font-bold text-brand-900">
              Pronto para ver as opções disponíveis agora?
            </p>
            <a
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-black text-white transition hover:bg-brand-500"
              href={article.ctaHref}
              rel="sponsored noopener noreferrer"
              target="_blank"
            >
              {article.ctaLabel} <ExternalLink size={16} />
            </a>
          </section>

          {article.relatedHref ? (
            <a
              className="mt-5 inline-flex items-center gap-2 text-sm font-black text-brand-600 hover:text-brand-700"
              href={article.relatedHref}
            >
              {article.relatedLabel} <ArrowRight size={16} />
            </a>
          ) : null}
        </article>
      </div>
    </main>
  )
}
