'use server'

import { prisma } from '@/lib/prisma'
import { requireCustomer } from '@/lib/require-customer'

const MAX_QUESTION_LENGTH = 2000

export async function submitLessonQuestionAction(
  courseSlug: string,
  lessonSlug: string,
  question: string,
): Promise<{ error: string } | { success: true }> {
  const trimmed = question.trim()

  if (!trimmed) {
    return { error: 'Escreva sua dúvida antes de enviar.' }
  }

  if (trimmed.length > MAX_QUESTION_LENGTH) {
    return { error: 'Sua dúvida é muito longa. Tente resumir um pouco.' }
  }

  const customer = await requireCustomer()

  await prisma.lessonQuestion.create({
    data: {
      customerId: customer.id,
      courseSlug,
      lessonSlug,
      question: trimmed,
    },
  })

  return { success: true }
}
