'use server'

import { isCourseFullyCompleted } from '@/lib/certificates'
import { computingCourseLessons } from '@/lib/computing-course'
import {
  COMPUTING_FINAL_EXAM_PASSING_SCORE,
  computingFinalExamQuestions,
} from '@/lib/computing-final-exam'
import { excelCourseLessons } from '@/lib/excel-course'
import {
  EXCEL_FINAL_EXAM_PASSING_SCORE,
  excelFinalExamQuestions,
} from '@/lib/excel-final-exam'
import { prisma } from '@/lib/prisma'
import { requireCustomer } from '@/lib/require-customer'

export type ExamSubmitResult =
  | { error: string }
  | { score: number; total: number; passed: boolean }

const examRegistry = {
  'computacao-basica': {
    lessonSlugs: computingCourseLessons.map((lesson) => lesson.slug),
    questions: computingFinalExamQuestions,
    passingScore: COMPUTING_FINAL_EXAM_PASSING_SCORE,
    redirectPath: '/curso-computacao-basica/prova-final',
  },
  excel: {
    lessonSlugs: excelCourseLessons.map((lesson) => lesson.slug),
    questions: excelFinalExamQuestions,
    passingScore: EXCEL_FINAL_EXAM_PASSING_SCORE,
    redirectPath: '/curso-excel/prova-final',
  },
} as const

export async function submitFinalExamAction(
  courseSlug: keyof typeof examRegistry,
  answers: Record<string, number>,
): Promise<ExamSubmitResult> {
  const config = examRegistry[courseSlug]
  const customer = await requireCustomer(config.redirectPath)

  const completed = await isCourseFullyCompleted(customer.id, config.lessonSlugs)

  if (!completed) {
    return {
      error: 'Conclua todas as aulas do curso antes de fazer a prova final.',
    }
  }

  let score = 0

  for (const question of config.questions) {
    if (answers[question.id] === question.answer) {
      score += 1
    }
  }

  const passed = score >= config.passingScore

  await prisma.examAttempt.create({
    data: {
      customerId: customer.id,
      courseSlug,
      score,
      totalQuestions: config.questions.length,
      passed,
    },
  })

  return { score, total: config.questions.length, passed }
}
