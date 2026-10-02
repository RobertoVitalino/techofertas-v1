import 'server-only'

import { computingCourseLessons } from '@/lib/computing-course'
import { courseRegistry } from '@/lib/courses-config'
import { englishCourseLessons } from '@/lib/english-course'
import { examPrepLessons } from '@/lib/exam-prep-course'
import { excelCourseLessons } from '@/lib/excel-course'
import { hardwareCourseLessons } from '@/lib/hardware-course'
import { iaCourseLessons } from '@/lib/ia-no-dia-a-dia-course'
import { mathExamLessons } from '@/lib/math-exam-course'
import { prisma } from '@/lib/prisma'
import { securityCourseLessons } from '@/lib/security-course'
import { typingCourseLessons } from '@/lib/typing-course'

// Mapa de slug do curso -> lista de slugs de aula, usado para calcular
// progresso sem depender de uma coluna courseSlug em LessonProgress (ela
// não existe: cada aula só sabe o próprio slug).
const courseLessonSlugs: Record<string, string[]> = {
  'seguranca-da-informacao': securityCourseLessons.map((lesson) => lesson.slug),
  'computacao-basica': computingCourseLessons.map((lesson) => lesson.slug),
  excel: excelCourseLessons.map((lesson) => lesson.slug),
  'montagem-manutencao': hardwareCourseLessons.map((lesson) => lesson.slug),
  digitacao: typingCourseLessons.map((lesson) => lesson.slug),
  'ingles-basico': englishCourseLessons.map((lesson) => lesson.slug),
  'informatica-concursos': examPrepLessons.map((lesson) => lesson.slug),
  'matematica-concursos': mathExamLessons.map((lesson) => lesson.slug),
  'ia-no-dia-a-dia': iaCourseLessons.map((lesson) => lesson.slug),
}

export type CourseReminder = {
  courseSlug: string
  title: string
  landingHref: string
  completed: number
  total: number
}

export type CustomerCourseReminders = {
  incomplete: CourseReminder[]
  certificatePending: CourseReminder[]
}

function buildReminders(
  enrolledSlugs: string[],
  completedLessonSlugs: Set<string>,
  certifiedCourseSlugs: Set<string>,
): CustomerCourseReminders {
  const incomplete: CourseReminder[] = []
  const certificatePending: CourseReminder[] = []

  for (const courseSlug of enrolledSlugs) {
    const lessonSlugs = courseLessonSlugs[courseSlug]
    const config = courseRegistry[courseSlug]

    if (!lessonSlugs || !config) continue

    const completed = lessonSlugs.filter((slug) =>
      completedLessonSlugs.has(slug),
    ).length
    const reminder: CourseReminder = {
      courseSlug,
      title: config.title,
      landingHref: config.landingHref,
      completed,
      total: lessonSlugs.length,
    }

    if (completed < lessonSlugs.length) {
      incomplete.push(reminder)
    } else if (!certifiedCourseSlugs.has(courseSlug)) {
      certificatePending.push(reminder)
    }
  }

  return { incomplete, certificatePending }
}

/**
 * Calcula, para um único cliente, quais cursos ele ainda não terminou e
 * quais já terminou mas ainda não emitiu certificado. Usado tanto pelo
 * aviso exibido no site (Header) quanto, por cliente, pelo script de
 * e-mail em lote.
 */
export async function getCustomerCourseReminders(
  customerId: number,
): Promise<CustomerCourseReminders> {
  const [enrollments, lessonProgress, certificates] = await Promise.all([
    prisma.courseEnrollment.findMany({
      where: { customerId },
      select: { courseSlug: true },
    }),
    prisma.lessonProgress.findMany({
      where: { customerId },
      select: { lessonSlug: true },
    }),
    prisma.certificate.findMany({
      where: { customerId },
      select: { courseSlug: true },
    }),
  ])

  return buildReminders(
    enrollments.map((enrollment) => enrollment.courseSlug),
    new Set(lessonProgress.map((row) => row.lessonSlug)),
    new Set(certificates.map((certificate) => certificate.courseSlug)),
  )
}

export type CustomerReminderEmail = {
  customerId: number
  name: string
  email: string
  incomplete: CourseReminder[]
  certificatePending: CourseReminder[]
}

/**
 * Versão em lote, para o script de e-mail: percorre todo cliente com
 * pelo menos uma inscrição e devolve só quem tem algum lembrete pendente.
 */
export async function getAllCustomerReminderEmails(): Promise<
  CustomerReminderEmail[]
> {
  const customersWithEnrollment = await prisma.customer.findMany({
    where: { courseEnrollments: { some: {} } },
    select: { id: true, name: true, email: true },
  })

  const results: CustomerReminderEmail[] = []

  for (const customer of customersWithEnrollment) {
    const reminders = await getCustomerCourseReminders(customer.id)

    if (reminders.incomplete.length > 0 || reminders.certificatePending.length > 0) {
      results.push({
        customerId: customer.id,
        name: customer.name,
        email: customer.email,
        ...reminders,
      })
    }
  }

  return results
}
