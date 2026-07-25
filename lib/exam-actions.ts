'use server'

import { isCourseFullyCompleted } from '@/lib/certificates'
import {
  COMPUTING_FINAL_EXAM_PASSING_SCORE,
  computingFinalExamQuestions,
} from '@/lib/computing-final-exam'
import { computingCourseLessons } from '@/lib/computing-course'
import { prisma } from '@/lib/prisma'
import { requireCustomer } from '@/lib/require-customer'

export type ExamSubmitResult =
  | { error: string }
  | { score: number; total: number; passed: boolean }

export async function submitFinalExamAction(
  answers: Record<string, number>,
): Promise<ExamSubmitResult> {
  const customer = await requireCustomer('/curso-computacao-basica/prova-final')

  const lessonSlugs = computingCourseLessons.map((lesson) => lesson.slug)
  const completed = await isCourseFullyCompleted(customer.id, lessonSlugs)

  if (!completed) {
    return {
      error: 'Conclua todas as aulas do curso antes de fazer a prova final.',
    }
  }

  let score = 0

  for (const question of computingFinalExamQuestions) {
    if (answers[question.id] === question.answer) {
      score += 1
    }
  }

  const passed = score >= COMPUTING_FINAL_EXAM_PASSING_SCORE

  await prisma.examAttempt.create({
    data: {
      customerId: customer.id,
      courseSlug: 'computacao-basica',
      score,
      totalQuestions: computingFinalExamQuestions.length,
      passed,
    },
  })

  return { score, total: computingFinalExamQuestions.length, passed }
}
