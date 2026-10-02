import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { sendCourseReminderEmails } from './lib/course-reminder-email-utils.mjs'
import { courseRegistry } from '../lib/courses-config.ts'
import { securityCourseLessons } from '../lib/security-course.ts'
import { computingCourseLessons } from '../lib/computing-course.ts'
import { excelCourseLessons } from '../lib/excel-course.ts'
import { hardwareCourseLessons } from '../lib/hardware-course.ts'
import { typingCourseLessons } from '../lib/typing-course.ts'
import { englishCourseLessons } from '../lib/english-course.ts'
import { examPrepLessons } from '../lib/exam-prep-course.ts'
import { mathExamLessons } from '../lib/math-exam-course.ts'
import { iaCourseLessons } from '../lib/ia-no-dia-a-dia-course.ts'

const prisma = new PrismaClient()
const dryRun = process.argv.includes('--dry-run')

const courseLessonSlugs = {
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

function buildReminders(enrolledSlugs, completedLessonSlugs, certifiedCourseSlugs) {
  const incomplete = []
  const certificatePending = []

  for (const courseSlug of enrolledSlugs) {
    const lessonSlugs = courseLessonSlugs[courseSlug]
    const config = courseRegistry[courseSlug]

    if (!lessonSlugs || !config) continue

    const completed = lessonSlugs.filter((slug) => completedLessonSlugs.has(slug)).length
    const reminder = {
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

async function main() {
  const customersWithEnrollment = await prisma.customer.findMany({
    where: { courseEnrollments: { some: {} } },
    select: { id: true, name: true, email: true },
  })

  const reminders = []

  for (const customer of customersWithEnrollment) {
    const [enrollments, lessonProgress, certificates] = await Promise.all([
      prisma.courseEnrollment.findMany({
        where: { customerId: customer.id },
        select: { courseSlug: true },
      }),
      prisma.lessonProgress.findMany({
        where: { customerId: customer.id },
        select: { lessonSlug: true },
      }),
      prisma.certificate.findMany({
        where: { customerId: customer.id },
        select: { courseSlug: true },
      }),
    ])

    const { incomplete, certificatePending } = buildReminders(
      enrollments.map((enrollment) => enrollment.courseSlug),
      new Set(lessonProgress.map((row) => row.lessonSlug)),
      new Set(certificates.map((certificate) => certificate.courseSlug)),
    )

    if (incomplete.length > 0 || certificatePending.length > 0) {
      reminders.push({
        customerId: customer.id,
        name: customer.name,
        email: customer.email,
        incomplete,
        certificatePending,
      })
    }
  }

  await sendCourseReminderEmails(reminders, { dryRun })
}

main()
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
