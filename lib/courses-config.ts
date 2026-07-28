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
  excel: {
    slug: 'excel',
    title: 'Excel na Prática: do Básico às Tabelas Dinâmicas',
    hoursTotal: '18h',
    priceCents: 3990,
    requiresFinalExam: true,
    landingHref: '/curso-excel',
    examHref: '/curso-excel/prova-final',
  },
  'montagem-manutencao': {
    slug: 'montagem-manutencao',
    title: 'Montagem e Manutenção de Computadores e Notebooks',
    hoursTotal: '19h',
    priceCents: 3990,
    requiresFinalExam: true,
    landingHref: '/curso-montagem-manutencao',
    examHref: '/curso-montagem-manutencao/prova-final',
  },
}

export function getCourseConfig(courseSlug: string) {
  const config = courseRegistry[courseSlug]

  if (!config) {
    throw new Error(`Unknown course slug: ${courseSlug}`)
  }

  return config
}
