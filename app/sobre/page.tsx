import { Header } from '@/components/Header'
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Code2,
  GraduationCap,
  Laptop,
  Mail,
  MapPin,
  Phone,
  Wrench,
} from 'lucide-react'

export const metadata = {
  title: 'Sobre mim',
  description:
    'Conheça Roberto Vitalino: desenvolvedor de software e técnico em informática por trás da Vitalino Tech.',
}

const devSkills = [
  'Next.js e React',
  'TypeScript e Node.js',
  'Java',
  'Tailwind CSS',
  'Prisma e PostgreSQL',
]

const supportSkills = [
  'Montagem e manutenção de computadores e notebooks',
  'Diagnóstico e resolução de problemas de hardware e software',
  'Formatação, otimização e configuração de sistemas',
  'Redes e configuração de equipamentos domésticos',
]

const highlights = [
  {
    icon: Code2,
    title: 'Desenvolvimento de sites e sistemas',
    description:
      'Esta própria loja, a área de cursos, o painel administrativo e a emissão de certificados foram desenvolvidos do zero, com um cuidado grande em performance, segurança e experiência de uso.',
  },
  {
    icon: GraduationCap,
    title: 'Conteúdo educacional gratuito',
    description:
      'Crio e mantenho os cursos gratuitos da Vitalino Tech — de segurança da informação a montagem e manutenção de computadores — pensando em quem está começando do zero.',
  },
  {
    icon: Wrench,
    title: 'Suporte técnico na prática',
    description:
      'Além de programar, atendo pessoalmente demandas de manutenção e montagem de computadores — o que também está por trás do curso de hardware do site.',
  },
]

export default function AboutPage() {
  return (
    <main className="site-light-theme min-h-screen">
      <Header />

      <div className="mx-auto max-w-5xl space-y-10 px-4 py-8">
        <section className="overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-7 text-white shadow-2xl shadow-indigo-950/20 sm:p-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <span className="grid h-24 w-24 shrink-0 place-items-center rounded-3xl border border-indigo-300/30 bg-indigo-900/60 text-3xl font-black text-indigo-100 shadow-lg shadow-black/20">
              RV
            </span>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-950/80 px-3 py-1 text-xs font-black uppercase tracking-[.16em] text-indigo-100 shadow-sm shadow-black/20">
                Sobre mim
              </span>
              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Roberto Vitalino
              </h1>
              <p className="mt-2 text-base font-bold text-indigo-200">
                Desenvolvedor de software e técnico em informática
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                Sou o responsável pela Vitalino Tech: programo cada parte deste
                site, crio os cursos gratuitos e também atendo na prática
                serviços de manutenção e montagem de computadores. Gosto de
                unir as duas pontas — quem entende de código e quem entende de
                hardware raramente é a mesma pessoa, e essa mistura acaba
                dando mais consistência para tudo que eu construo.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold">
                <a
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-400 px-5 py-2.5 text-slate-950 transition hover:bg-indigo-300"
                  href="mailto:devrobertovitalino@gmail.com"
                >
                  <Mail size={17} /> Enviar e-mail
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/30 bg-indigo-950/80 px-5 py-2.5 text-indigo-50 shadow-sm shadow-black/20 transition hover:bg-indigo-900"
                  href="https://wa.me/5567984793793"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Phone size={17} /> Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <p className="text-xs font-black uppercase tracking-[.18em] text-indigo-700">
            O que eu faço
          </p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            Três frentes, um só objetivo
          </h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm"
                key={item.title}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-100 text-indigo-700">
                  <item.icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-indigo-200 bg-white/85 p-6 shadow-sm">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-700 text-white">
              <Code2 size={22} />
            </span>
            <h2 className="mt-4 text-xl font-black">Desenvolvimento</h2>
            <ul className="mt-4 space-y-3">
              {devSkills.map((skill) => (
                <li className="flex items-start gap-2 text-sm text-slate-700" key={skill}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={18} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-700 text-white">
              <Laptop size={22} />
            </span>
            <h2 className="mt-4 text-xl font-black">Suporte técnico</h2>
            <ul className="mt-4 space-y-3">
              {supportSkills.map((skill) => (
                <li className="flex items-start gap-2 text-sm text-slate-700" key={skill}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-orange-600" size={18} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-900 text-white">
                <Boxes size={22} />
              </span>
              <div>
                <h2 className="text-lg font-black">Precisa de um projeto ou de um reparo?</h2>
                <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600">
                  Desenvolvimento de sites e sistemas ou manutenção de
                  computadores e notebooks — fale comigo e vamos entender o
                  que você precisa.
                </p>
              </div>
            </div>
            <a
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-black text-white transition hover:bg-slate-800"
              href="https://wa.me/5567984793793"
              rel="noopener noreferrer"
              target="_blank"
            >
              Chamar no WhatsApp <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <Mail size={16} /> devrobertovitalino@gmail.com
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone size={16} /> (67) 98479-3793
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} /> Mato Grosso do Sul
            </span>
          </div>
        </section>
      </div>
    </main>
  )
}
