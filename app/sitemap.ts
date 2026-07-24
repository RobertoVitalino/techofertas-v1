import type { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'
import { SITE_URL } from '@/lib/site'

const staticRoutes = [
  { path: '', priority: 1, changeFrequency: 'daily' as const },
  { path: '/produtos', priority: 0.9, changeFrequency: 'daily' as const },
  { path: '/curso-seguranca-da-informacao', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/privacidade', priority: 0.2, changeFrequency: 'yearly' as const },
  { path: '/termos', priority: 0.2, changeFrequency: 'yearly' as const },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await prisma.product.findMany({
    select: { id: true, createdAt: true },
  })

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...products.map((product) => ({
      url: `${SITE_URL}/produto/${product.id}`,
      lastModified: product.createdAt,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
