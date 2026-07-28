import { AdminUserActions } from '@/components/AdminUserActions'
import { computingCourseLessons } from '@/lib/computing-course'
import { courseRegistry } from '@/lib/courses-config'
import { excelCourseLessons } from '@/lib/excel-course'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/require-admin'
import { securityCourseLessons } from '@/lib/security-course'
import { Award, CalendarPlus, Users } from 'lucide-react'

export const dynamic = 'force-dynamic'

function getSevenDaysAgo() {
  return new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
}

const courseDefs = [
  {
    slug: 'seguranca-da-informacao',
    title: courseRegistry['seguranca-da-informacao'].title,
    lessonSlugs: securityCourseLessons.map((lesson) => lesson.slug),
    accent: 'text-sky-400',
  },
  {
    slug: 'computacao-basica',
    title: courseRegistry['computacao-basica'].title,
    lessonSlugs: computingCourseLessons.map((lesson) => lesson.slug),
    accent: 'text-emerald-400',
  },
  {
    slug: 'excel',
    title: courseRegistry.excel.title,
    lessonSlugs: excelCourseLessons.map((lesson) => lesson.slug),
    accent: 'text-violet-400',
  },
]

export default async function AdminUsersPage() {
  await requireAdmin()

  const [customers, lessonProgress, certificates] = await Promise.all([
    prisma.customer.findMany({
      orderBy: { createdAt: 'desc' },
      select: { id: true, name: true, email: true, username: true, createdAt: true },
    }),
    prisma.lessonProgress.findMany({
      select: { customerId: true, lessonSlug: true },
    }),
    prisma.certificate.findMany({
      select: { customerId: true, courseSlug: true },
    }),
  ])

  const completedByCustomer = new Map<number, Set<string>>()
  for (const row of lessonProgress) {
    const set = completedByCustomer.get(row.customerId) ?? new Set<string>()
    set.add(row.lessonSlug)
    completedByCustomer.set(row.customerId, set)
  }

  const certifiedByCustomer = new Map<number, Set<string>>()
  for (const row of certificates) {
    const set = certifiedByCustomer.get(row.customerId) ?? new Set<string>()
    set.add(row.courseSlug)
    certifiedByCustomer.set(row.customerId, set)
  }

  const newThisWeek = customers.filter(
    (customer) => customer.createdAt >= getSevenDaysAgo(),
  ).length

  return (
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-400">Clientes</p>
      <h1 className="mt-2 text-3xl font-black sm:text-4xl">Usuários</h1>
      <p className="mt-2 text-slate-400">
        Cadastros, progresso nos cursos e certificados emitidos.
      </p>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
          <Users className="text-brand-400" />
          <p className="mt-4 text-sm text-slate-400">Usuários cadastrados</p>
          <strong className="text-3xl">{customers.length}</strong>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
          <CalendarPlus className="text-emerald-400" />
          <p className="mt-4 text-sm text-slate-400">Novos nos últimos 7 dias</p>
          <strong className="text-3xl">{newThisWeek}</strong>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
          <Award className="text-amber-400" />
          <p className="mt-4 text-sm text-slate-400">Certificados emitidos</p>
          <strong className="text-3xl">{certificates.length}</strong>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-white/10 bg-white/[.04] p-5">
        {customers.length ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="text-slate-400">
                <tr>
                  <th className="py-3">Cliente</th>
                  <th>Cadastro</th>
                  {courseDefs.map((course) => (
                    <th key={course.slug}>{course.title.split(':')[0]}</th>
                  ))}
                  <th className="text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => {
                  const completed = completedByCustomer.get(customer.id) ?? new Set()
                  const certified = certifiedByCustomer.get(customer.id) ?? new Set()

                  return (
                    <tr className="border-t border-white/10" key={customer.id}>
                      <td className="py-4">
                        <strong className="block font-bold">{customer.name}</strong>
                        <span className="text-xs text-slate-400">
                          {customer.username ? `@${customer.username} · ` : ''}
                          {customer.email}
                        </span>
                      </td>
                      <td className="whitespace-nowrap">
                        {new Intl.DateTimeFormat('pt-BR').format(customer.createdAt)}
                      </td>
                      {courseDefs.map((course) => {
                        const done = course.lessonSlugs.filter((slug) =>
                          completed.has(slug),
                        ).length
                        const total = course.lessonSlugs.length
                        const hasCertificate = certified.has(course.slug)

                        return (
                          <td className="whitespace-nowrap" key={course.slug}>
                            <span className={done === total && total > 0 ? 'font-bold text-white' : ''}>
                              {done}/{total}
                            </span>
                            {hasCertificate ? (
                              <span
                                className={`ml-1.5 inline-flex items-center gap-1 text-[10px] font-black uppercase ${course.accent}`}
                              >
                                <Award size={11} /> certificado
                              </span>
                            ) : null}
                          </td>
                        )
                      })}
                      <td className="text-right">
                        <AdminUserActions
                          customerId={customer.id}
                          customerLabel={customer.name}
                        />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid place-items-center py-16 text-center">
            <Users size={36} className="text-slate-500" />
            <h2 className="mt-4 font-black">Nenhum cliente cadastrado</h2>
            <p className="mt-1 text-sm text-slate-400">
              Os novos cadastros aparecerão aqui.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
