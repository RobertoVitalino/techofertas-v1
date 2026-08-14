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
    priceCents: 3990,
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
  digitacao: {
    slug: 'digitacao',
    title: 'Digitação: Curso de Digitação por Toque do Zero',
    hoursTotal: '6h',
    priceCents: 3990,
    requiresFinalExam: false,
    landingHref: '/curso-digitacao',
  },
  'ingles-basico': {
    slug: 'ingles-basico',
    title: 'Inglês Básico: do Zero à Conversação do Dia a Dia',
    hoursTotal: '16h',
    priceCents: 3990,
    requiresFinalExam: true,
    landingHref: '/curso-ingles-basico',
    examHref: '/curso-ingles-basico/prova-final',
  },
  'informatica-concursos': {
    slug: 'informatica-concursos',
    title: 'Informática para Concursos Públicos',
    hoursTotal: '10h',
    priceCents: 3990,
    requiresFinalExam: true,
    landingHref: '/curso-informatica-concursos',
    examHref: '/curso-informatica-concursos/prova-final',
  },
  'matematica-concursos': {
    slug: 'matematica-concursos',
    title: 'Matemática Básica para Concursos Públicos',
    hoursTotal: '10h',
    priceCents: 3990,
    requiresFinalExam: true,
    landingHref: '/curso-matematica-concursos',
    examHref: '/curso-matematica-concursos/prova-final',
  },
  'ia-no-dia-a-dia': {
    slug: 'ia-no-dia-a-dia',
    title: 'IA no Dia a Dia: ChatGPT, Gemini e Copilot na Prática',
    hoursTotal: '7h',
    priceCents: 3990,
    requiresFinalExam: false,
    landingHref: '/curso-ia-no-dia-a-dia',
  },
}

export function getCourseConfig(courseSlug: string) {
  const config = courseRegistry[courseSlug]

  if (!config) {
    throw new Error(`Unknown course slug: ${courseSlug}`)
  }

  return config
}
