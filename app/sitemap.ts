import { articles } from '@/lib/blog'
import { computingCourseLessons } from '@/lib/computing-course'
import { englishCourseLessons } from '@/lib/english-course'
import { examPrepLessons } from '@/lib/exam-prep-course'
import { excelCourseLessons } from '@/lib/excel-course'
import { hardwareCourseLessons } from '@/lib/hardware-course'
import { securityCourseLessons } from '@/lib/security-course'
import { SITE_URL } from '@/lib/site'
import { typingCourseLessons } from '@/lib/typing-course'
import type { MetadataRoute } from 'next'

const staticRoutes = [
  { path: '', priority: 1, changeFrequency: 'daily' as const },
  { path: '/artigos', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/cursos', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/curso-seguranca-da-informacao', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/curso-computacao-basica', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/curso-excel', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/curso-montagem-manutencao', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/curso-digitacao', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/curso-ingles-basico', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/curso-informatica-concursos', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/sobre', priority: 0.4, changeFrequency: 'monthly' as const },
  { path: '/privacidade', priority: 0.2, changeFrequency: 'yearly' as const },
  { path: '/termos', priority: 0.2, changeFrequency: 'yearly' as const },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...securityCourseLessons.map((lesson) => ({
      url: `${SITE_URL}/curso-seguranca-da-informacao/aulas/${lesson.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
    ...computingCourseLessons.map((lesson) => ({
      url: `${SITE_URL}/curso-computacao-basica/aulas/${lesson.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
    ...excelCourseLessons.map((lesson) => ({
      url: `${SITE_URL}/curso-excel/aulas/${lesson.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
    ...hardwareCourseLessons.map((lesson) => ({
      url: `${SITE_URL}/curso-montagem-manutencao/aulas/${lesson.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
    ...typingCourseLessons.map((lesson) => ({
      url: `${SITE_URL}/curso-digitacao/aulas/${lesson.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
    ...englishCourseLessons.map((lesson) => ({
      url: `${SITE_URL}/curso-ingles-basico/aulas/${lesson.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
    ...examPrepLessons.map((topic) => ({
      url: `${SITE_URL}/curso-informatica-concursos/aulas/${topic.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
    ...articles.map((article) => ({
      url: `${SITE_URL}/artigos/${article.slug}`,
      lastModified: article.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
