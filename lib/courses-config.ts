export type CourseConfig = {
  slug: string
  title: string
  hoursTotal: string
  priceCents: number
  requiresFinalExam: boolean
  landingHref: string
  examHref?: string
}

export const courseRegistry: Record<string, CourseConfig> = {
  'seguranca-da-informacao': {
    slug: 'seguranca-da-informacao',
    title: 'Segurança da Informação: do Zero à Proteção na Prática',
    hoursTotal: '21h',
    priceCents: 2990,
    requiresFinalExam: false,
    landingHref: '/curso-seguranca-da-informacao',
  },
  'computacao-basica': {
    slug: 'computacao-basica',
    title: 'Computação Básica: do Zero ao Dia a Dia Digital',
    hoursTotal: '18h',
    priceCents: 3990,
    requiresFinalExam: true,
    landingHref: '/curso-computacao-basica',
    examHref: '/curso-computacao-basica/prova-final',
  },
}

export function getCourseConfig(courseSlug: string) {
  const config = courseRegistry[courseSlug]

  if (!config) {
    throw new Error(`Unknown course slug: ${courseSlug}`)
  }

  return config
}
