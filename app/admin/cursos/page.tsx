import { computingCourseLessons } from '@/lib/computing-course'
import { courseRegistry } from '@/lib/courses-config'
import { excelCourseLessons } from '@/lib/excel-course'
import { hardwareCourseLessons } from '@/lib/hardware-course'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/require-admin'
import { securityCourseLessons } from '@/lib/security-course'
import { typingCourseLessons } from '@/lib/typing-course'
import {
  Award,
  BookOpenCheck,
  Coins,
  FileSpreadsheet,
  GraduationCap,
  Keyboard,
  ShieldCheck,
  UserCheck,
  UserPlus,
  Users,
  Wrench,
} from 'lucide-react'

export const dynamic = 'force-dynamic'

const courseDefs = [
  {
    slug: 'seguranca-da-informacao',
    icon: ShieldCheck,
    color: {
      text: 'text-sky-400',
      bg: 'bg-sky-500/15',
      bar: 'from-sky-500 to-cyan-400',
      border: 'border-sky-500/20',
    },
    lessonSlugs: securityCourseLessons.map((lesson) => lesson.slug),
  },
  {
    slug: 'computacao-basica',
    icon: BookOpenCheck,
    color: {
      text: 'text-emerald-400',
      bg: 'bg-emerald-500/15',
      bar: 'from-emerald-500 to-teal-400',
      border: 'border-emerald-500/20',
    },
    lessonSlugs: computingCourseLessons.map((lesson) => lesson.slug),
  },
  {
    slug: 'excel',
    icon: FileSpreadsheet,
    color: {
      text: 'text-violet-400',
      bg: 'bg-violet-500/15',
      bar: 'from-violet-500 to-indigo-400',
      border: 'border-violet-500/20',
    },
    lessonSlugs: excelCourseLessons.map((lesson) => lesson.slug),
  },
  {
    slug: 'montagem-manutencao',
    icon: Wrench,
    color: {
      text: 'text-orange-400',
      bg: 'bg-orange-500/15',
      bar: 'from-orange-500 to-amber-400',
      border: 'border-orange-500/20',
    },
    lessonSlugs: hardwareCourseLessons.map((lesson) => lesson.slug),
  },
  {
    slug: 'digitacao',
    icon: Keyboard,
    color: {
      text: 'text-rose-400',
      bg: 'bg-rose-500/15',
      bar: 'from-rose-500 to-pink-400',
      border: 'border-rose-500/20',
    },
    lessonSlugs: typingCourseLessons.map((lesson) => lesson.slug),
  },
]

function formatBRL(cents: number) {
  return (cents / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export default async function AdminCoursesPage() {
  await requireAdmin()

  const [lessonProgress, certificates, examAttempts, enrollments] = await Promise.all([
    prisma.lessonProgress.findMany({ select: { customerId: true, lessonSlug: true } }),
    prisma.certificate.findMany({ select: { customerId: true, courseSlug: true } }),
    prisma.examAttempt.findMany({
      where: { passed: true },
      select: { customerId: true, courseSlug: true },
    }),
    prisma.courseEnrollment.findMany({ select: { customerId: true, courseSlug: true } }),
  ])

  const completedByCustomer = new Map<number, Set<string>>()
  for (const row of lessonProgress) {
    const set = completedByCustomer.get(row.customerId) ?? new Set<string>()
    set.add(row.lessonSlug)
    completedByCustomer.set(row.customerId, set)
  }

  const courses = courseDefs.map((course) => {
    const config = courseRegistry[course.slug]
    let started = 0
    let finished = 0

    for (const completed of Array.from(completedByCustomer.values())) {
      const done = course.lessonSlugs.filter((slug) => completed.has(slug)).length

      if (done > 0) started += 1
      if (done === course.lessonSlugs.length) finished += 1
    }

    const certificatesIssued = certificates.filter(
      (certificate) => certificate.courseSlug === course.slug,
    ).length
    const examPassedCount = new Set(
      examAttempts
        .filter((attempt) => attempt.courseSlug === course.slug)
        .map((attempt) => attempt.customerId),
    ).size
    const enrolledCount = enrollments.filter(
      (enrollment) => enrollment.courseSlug === course.slug,
    ).length
    const completionRate = started > 0 ? Math.round((finished / started) * 100) : 0
    const revenueCents = certificatesIssued * config.priceCents

    return {
      ...course,
      config,
      started,
      finished,
      completionRate,
      certificatesIssued,
      examPassedCount,
      enrolledCount,
      revenueCents,
    }
  })

  const totalStarted = new Set(completedByCustomer.keys()).size
  const totalEnrolled = new Set(enrollments.map((enrollment) => enrollment.customerId)).size
  const totalCertificates = certificates.length
  const totalRevenueCents = courses.reduce((sum, course) => sum + course.revenueCents, 0)

  return (
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-400">Formação</p>
      <h1 className="mt-2 text-3xl font-black sm:text-4xl">Cursos</h1>
      <p className="mt-2 text-slate-400">
        Desempenho de cada curso: quem começou, quem concluiu, certificados e receita.
      </p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
          <UserPlus className="text-sky-400" />
          <p className="mt-4 text-sm text-slate-400">Inscritos em algum curso</p>
          <strong className="text-3xl">{totalEnrolled}</strong>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
          <Users className="text-brand-400" />
          <p className="mt-4 text-sm text-slate-400">Alunos ativos em algum curso</p>
          <strong className="text-3xl">{totalStarted}</strong>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
          <Award className="text-amber-400" />
          <p className="mt-4 text-sm text-slate-400">Certificados emitidos (todos os cursos)</p>
          <strong className="text-3xl">{totalCertificates}</strong>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
          <Coins className="text-emerald-400" />
          <p className="mt-4 text-sm text-slate-400">Receita em certificados</p>
          <strong className="text-3xl">{formatBRL(totalRevenueCents)}</strong>
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => {
          const Icon = course.icon

          return (
            <article
              className={`flex h-full flex-col rounded-3xl border ${course.color.border} bg-white/[.04] p-6`}
              key={course.slug}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${course.color.bg} ${course.color.text}`}
                >
                  <Icon size={24} />
                </span>
                <div>
                  <h2 className="text-lg font-black leading-snug">{course.config.title}</h2>
                  <p className="mt-1 text-xs font-bold text-slate-400">
                    {course.lessonSlugs.length} aulas · Certificado por{' '}
                    {formatBRL(course.config.priceCents)}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs font-bold text-slate-400">
                <span>Taxa de conclusão</span>
                <span className={course.color.text}>{course.completionRate}%</span>
              </div>
              <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${course.color.bar}`}
                  style={{ width: `${Math.max(course.completionRate, course.started > 0 ? 4 : 0)}%` }}
                />
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-black/20 p-3">
                  <dt className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                    <UserPlus size={13} /> Inscritos
                  </dt>
                  <dd className="mt-1 text-xl font-black">{course.enrolledCount}</dd>
                </div>
                <div className="rounded-xl bg-black/20 p-3">
                  <dt className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                    <UserCheck size={13} /> Começaram
                  </dt>
                  <dd className="mt-1 text-xl font-black">{course.started}</dd>
                </div>
                <div className="rounded-xl bg-black/20 p-3">
                  <dt className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                    <GraduationCap size={13} /> Concluíram
                  </dt>
                  <dd className="mt-1 text-xl font-black">{course.finished}</dd>
                </div>
                {course.config.requiresFinalExam ? (
                  <div className="rounded-xl bg-black/20 p-3">
                    <dt className="text-xs font-bold text-slate-400">Aprovados na prova</dt>
                    <dd className="mt-1 text-xl font-black">{course.examPassedCount}</dd>
                  </div>
                ) : null}
                <div className="rounded-xl bg-black/20 p-3">
                  <dt className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                    <Award size={13} /> Certificados
                  </dt>
                  <dd className="mt-1 text-xl font-black">{course.certificatesIssued}</dd>
                </div>
              </dl>

              <div className="mt-auto pt-4">
                <div className="flex items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
                  <span className="text-xs font-bold text-emerald-300">Receita de certificados</span>
                  <strong className="text-emerald-200">{formatBRL(course.revenueCents)}</strong>
                </div>

                <a
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-xs font-bold text-slate-300 transition hover:border-white/20 hover:text-white"
                  href={course.config.landingHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ver página do curso
                </a>
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}
