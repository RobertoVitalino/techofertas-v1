import { requireAdmin } from '@/lib/require-admin'
import { prisma } from '@/lib/prisma'
import { getComputingLesson } from '@/lib/computing-course'
import { getEnglishLesson } from '@/lib/english-course'
import { getExcelLesson } from '@/lib/excel-course'
import { getHardwareLesson } from '@/lib/hardware-course'
import { getSecurityLesson } from '@/lib/security-course'
import { getTypingLesson } from '@/lib/typing-course'
import { revalidatePath } from 'next/cache'
import { MessageCircleQuestion } from 'lucide-react'

export const dynamic = 'force-dynamic'

const courseTitles: Record<string, string> = {
  'seguranca-da-informacao': 'Segurança da Informação',
  'computacao-basica': 'Computação Básica',
  excel: 'Excel',
  'montagem-manutencao': 'Montagem e Manutenção',
  digitacao: 'Digitação',
  'ingles-basico': 'Inglês Básico',
}

const lessonGetters: Record<string, (slug: string) => { title: string } | undefined> = {
  'computacao-basica': getComputingLesson,
  excel: getExcelLesson,
  'montagem-manutencao': getHardwareLesson,
  digitacao: getTypingLesson,
  'ingles-basico': getEnglishLesson,
  'seguranca-da-informacao': getSecurityLesson,
}

function getLessonTitle(courseSlug: string, lessonSlug: string) {
  const lesson = lessonGetters[courseSlug]?.(lessonSlug)

  return lesson?.title ?? lessonSlug
}

async function markQuestionResolved(formData: FormData) {
  'use server'

  await requireAdmin()
  const id = Number(formData.get('id'))
  const resolved = formData.get('resolved') === 'true'

  await prisma.lessonQuestion.update({
    where: { id },
    data: { resolved },
  })

  revalidatePath('/admin/duvidas')
}

export default async function AdminDuvidasPage() {
  await requireAdmin()

  const questions = await prisma.lessonQuestion.findMany({
    orderBy: { createdAt: 'desc' },
    include: { customer: { select: { name: true, email: true } } },
  })

  const pendingCount = questions.filter((question) => !question.resolved).length

  return (
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-400">
        Alunos
      </p>
      <h1 className="mt-2 text-3xl font-black sm:text-4xl">Dúvidas</h1>
      <p className="mt-2 text-slate-400">
        {questions.length} dúvidas recebidas · {pendingCount} pendentes de resposta.
      </p>

      <section className="mt-8 rounded-2xl border border-white/10 bg-white/[.04] p-5">
        {questions.length ? (
          <div className="grid gap-4">
            {questions.map((question) => (
              <article
                key={question.id}
                className={`rounded-xl border p-4 ${
                  question.resolved
                    ? 'border-white/10 bg-white/[.02]'
                    : 'border-brand-500/30 bg-brand-600/10'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      {courseTitles[question.courseSlug] ?? question.courseSlug} ·{' '}
                      {getLessonTitle(question.courseSlug, question.lessonSlug)}
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">
                      {question.customer.name}{' '}
                      <span className="font-normal text-slate-400">
                        ({question.customer.email})
                      </span>
                    </p>
                  </div>
                  <span className="text-xs text-slate-500">
                    {new Intl.DateTimeFormat('pt-BR', {
                      dateStyle: 'short',
                      timeStyle: 'short',
                    }).format(question.createdAt)}
                  </span>
                </div>

                <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-200">
                  {question.question}
                </p>

                <form action={markQuestionResolved} className="mt-4">
                  <input type="hidden" name="id" value={question.id} />
                  <input
                    type="hidden"
                    name="resolved"
                    value={(!question.resolved).toString()}
                  />
                  <button
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                      question.resolved
                        ? 'border border-white/10 text-slate-400 hover:text-white'
                        : 'bg-brand-600 text-white hover:bg-brand-700'
                    }`}
                  >
                    {question.resolved
                      ? 'Marcar como pendente'
                      : 'Marcar como respondida'}
                  </button>
                </form>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid place-items-center py-16 text-center">
            <MessageCircleQuestion size={36} className="text-slate-500" />
            <h2 className="mt-4 font-black">Nenhuma dúvida recebida</h2>
            <p className="mt-1 text-sm text-slate-400">
              As dúvidas enviadas pelos alunos nas aulas aparecerão aqui.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
