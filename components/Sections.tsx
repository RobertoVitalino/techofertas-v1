import { categories } from '@/lib/data'
import { ProductCard } from './ProductCard'
import { TrackedLink } from './TrackedLink'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Laptop,
  MessageCircle,
  Monitor,
  Printer,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

export function Categories() {
  return (
    <section id="categorias">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black">Categorias em destaque</h2>
          <p className="mt-1 text-sm text-slate-400">
            Encontre rapidamente os produtos mais procurados.
          </p>
        </div>

        <a
          className="hidden text-sm font-bold text-brand-500 md:block"
          href="#produtos-por-categoria"
        >
          Ver produtos do site →
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
        {categories.map(({ name, offers, icon: Icon, affiliate }) => (
          <TrackedLink
            aria-label={`Ver ofertas de ${name} no Mercado Livre`}
            className="card-hover group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.075] to-white/[.025] p-5 text-center"
            eventName="category_click"
            eventData={{ category: name }}
            href={affiliate}
            key={name}
            rel="sponsored noopener noreferrer"
            target="_blank"
          >
            <ArrowUpRight
              aria-hidden="true"
              className="absolute right-3 top-3 text-slate-500 transition group-hover:text-brand-500"
              size={16}
            />

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/15">
              <Icon className="text-brand-500" />
            </div>

            <strong className="mt-4 block">{name}</strong>
            <p className="mt-1 text-sm text-slate-400">{offers} ofertas</p>
            <span className="mt-3 block text-xs font-bold text-brand-500">
              Ver no Mercado Livre
            </span>
          </TrackedLink>
        ))}
      </div>
    </section>
  )
}

const categoryOrder = [
  'Notebooks',
  'Impressora',
  'Monitores',
  'Armazenamento',
  'Componentes',
  'Periféricos',
  'Redes',
  'Energia',
]

function categoryId(category: string) {
  return category
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function Products({
  products,
  variant = 'catalog',
}: {
  products: any[]
  variant?: 'featured' | 'catalog'
}) {
  const isFeatured = variant === 'featured'
  const groupedProducts = Object.entries(
    products.reduce<Record<string, any[]>>((groups, product) => {
      const category = product.category || 'Outros'
      groups[category] = [...(groups[category] || []), product]
      return groups
    }, {}),
  ).sort(([categoryA], [categoryB]) => {
    const indexA = categoryOrder.indexOf(categoryA)
    const indexB = categoryOrder.indexOf(categoryB)

    if (indexA === -1 && indexB === -1) {
      return categoryA.localeCompare(categoryB, 'pt-BR')
    }

    if (indexA === -1) return 1
    if (indexB === -1) return -1
    return indexA - indexB
  })
  const displayedCount = isFeatured
    ? groupedProducts.reduce(
        (total, [, categoryProducts]) =>
          total + Math.min(categoryProducts.length, 2),
        0,
      )
    : products.length

  return (
    <section id="produtos-por-categoria" className="scroll-mt-36">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-black">
            {isFeatured ? 'Produtos em destaque' : 'Catálogo completo'}
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            {isFeatured
              ? 'Uma seleção mais enxuta com dois produtos de cada categoria.'
              : 'Todos os produtos organizados por categoria em um só lugar.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="w-fit rounded-lg bg-brand-500/15 px-3 py-1 text-xs font-bold text-brand-100">
            {displayedCount} produtos
          </span>
          {isFeatured && (
            <a
              className="inline-flex items-center gap-1 text-sm font-black text-brand-500"
              href="/produtos"
            >
              Ver todos os produtos <ArrowRight size={16} />
            </a>
          )}
        </div>
      </div>

      {products.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[.045] p-6 text-slate-400">
          Nenhum produto cadastrado ainda.
        </div>
      ) : (
        <>
          <div
            className={isFeatured ? 'grid gap-5 lg:grid-cols-2' : 'space-y-8'}
          >
            {groupedProducts.map(([category, categoryProducts]) => {
              const visibleProducts = isFeatured
                ? categoryProducts.slice(0, 2)
                : categoryProducts

              return (
                <section
                  className="scroll-mt-36 rounded-3xl border border-white/10 bg-white/[.025] p-4 sm:p-5"
                  id={`secao-${categoryId(category)}`}
                  key={category}
                >
                  <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-500">
                        Seção
                      </p>
                      <h3 className="mt-1 text-xl font-black">{category}</h3>
                    </div>

                    <span className="rounded-full bg-white/[.07] px-3 py-1 text-xs font-bold text-slate-300">
                      {visibleProducts.length}{' '}
                      {isFeatured
                        ? visibleProducts.length === 1
                          ? 'destaque'
                          : 'destaques'
                        : visibleProducts.length === 1
                          ? 'produto'
                          : 'produtos'}
                    </span>
                  </div>

                  <div
                    className={
                      isFeatured
                        ? 'grid gap-4 sm:grid-cols-2'
                        : 'grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
                    }
                  >
                    {visibleProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>

          {isFeatured && (
            <div className="mt-6 text-center">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-6 py-3 text-sm font-black text-white shadow-lg shadow-sky-700/20 transition hover:bg-sky-800"
                href="/produtos"
              >
                Ver catálogo completo com {products.length} produtos
                <ArrowRight size={17} />
              </a>
            </div>
          )}
        </>
      )}
    </section>
  )
}

export function Services() {
  const maintenanceServices = [
    {
      title: 'Manutenção de computadores',
      description:
        'Diagnóstico completo para computadores que travam, aquecem, não ligam ou ficaram lentos. O atendimento pode incluir limpeza interna, troca de pasta térmica, formatação, remoção de vírus, instalação de programas, upgrade de memória ou SSD, troca de componentes e testes de estabilidade.',
      bullets: [
        'Limpeza e prevenção de superaquecimento',
        'Formatação, backup e otimização do sistema',
        'Upgrades e substituição de componentes',
      ],
      image: '/produtos/Placa-Mae-Gigabyte-B760M-Aorus.webp',
      icon: Monitor,
    },
    {
      title: 'Manutenção de notebooks',
      description:
        'Atendimento cuidadoso para notebooks lentos, desligando sozinhos, com falhas no teclado, tela, bateria, carregador ou entrada de energia. Também realizo limpeza do cooler, troca de pasta térmica, instalação de SSD e memória, configuração do sistema e avaliação dos componentes.',
      bullets: [
        'Limpeza interna e controle de temperatura',
        'Troca de SSD, memória, teclado e bateria',
        'Correção de lentidão e falhas do sistema',
      ],
      image: '/produtos/Notebook-ASUS-Vivobook-Go-15.webp',
      icon: Laptop,
    },
    {
      title: 'Manutenção de impressoras',
      description:
        'Diagnóstico de falhas de impressão, atolamento de papel, folhas que não são puxadas, manchas, mensagens de erro e problemas de conexão. Faço instalação por USB ou Wi-Fi, limpeza preventiva e avaliação de cabeçote, roletes, cartuchos e sistema de tinta, conforme o modelo.',
      bullets: [
        'Limpeza, revisão e manutenção preventiva',
        'Configuração de impressão por USB e Wi-Fi',
        'Avaliação de cabeçote, roletes e alimentação',
      ],
      image: '/produtos/Impressora-multifuncional-Epson-L3250.jpg',
      icon: Printer,
    },
  ]

  return (
    <section id="serviços" className="scroll-mt-36">
      <div className="overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-5 shadow-sm sm:p-7">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-black uppercase tracking-[.14em] text-sky-800">
              <Wrench size={15} /> Assistência técnica
            </span>
            <h2 className="mt-4 max-w-3xl text-2xl font-black leading-tight sm:text-3xl">
              Seu computador, notebook ou impressora precisa de manutenção?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Ofereço atendimento técnico para identificar a causa do problema e
              indicar a solução adequada para cada equipamento. O serviço é feito
              com avaliação cuidadosa, explicação clara do diagnóstico e orçamento
              antes da execução, tanto para manutenção corretiva quanto preventiva.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
                <ShieldCheck size={23} />
              </span>
              <div>
                <strong className="block">Atendimento personalizado</strong>
                <span className="text-sm text-slate-500">
                  Para residências e pequenos negócios
                </span>
              </div>
            </div>
            <a
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-700"
              href="https://wa.me/5567984793793?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20manuten%C3%A7%C3%A3o."
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle size={19} /> Pedir orçamento pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {maintenanceServices.map(
            ({ title, description, bullets, image, icon: Icon }) => (
              <article
                className="flex h-full flex-col rounded-2xl border border-sky-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                key={title}
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-24 w-28 shrink-0 place-items-center overflow-hidden rounded-xl border border-slate-100 bg-white p-2">
                    <img
                      alt={`Ilustração de ${title.toLowerCase()}`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      src={image}
                    />
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-100 text-sky-700">
                    <Icon size={22} />
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>

                <ul className="mt-4 space-y-2">
                  {bullets.map((bullet) => (
                    <li
                      className="flex items-start gap-2 text-sm text-slate-700"
                      key={bullet}
                    >
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-emerald-600"
                        size={16}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <a
                  className="mt-5 inline-flex items-center gap-2 text-sm font-black text-sky-700 hover:text-sky-900"
                  href="https://wa.me/5567984793793?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20t%C3%A9cnica."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Solicitar avaliação <ArrowRight size={16} />
                </a>
              </article>
            ),
          )}
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-slate-500">
          O serviço indicado depende da avaliação técnica e das condições do
          equipamento. Peças e componentes, quando necessários, são informados no
          orçamento.
        </p>
      </div>
    </section>
  )
}

// AUTO-NEWS-START (gerado por scripts/update-news.mjs, não editar manualmente)
const featuredNews = [
  {
    title: 'Anthropic lança Claude Opus 5, IA com foco em custo-benefício e tarefas do dia a dia',
    category: 'Inteligência Artificial',
    summary: 'A Anthropic anunciou, nesta sexta-feira (24), o lançamento do Claude Opus 5, seu mais novo modelo de inteligência artificial (IA)',
    image: 'https://olhardigital.com.br/wp-content/uploads/2026/07/anthropic.jpg',
    href: 'https://olhardigital.com.br/2026/07/24/inteligencia-artificial/anthropic-lanca-claude-opus-5-ia-com-foco-em-custo-beneficio-e-tarefas-do-dia-a-dia/',
  },
  {
    title: 'Cientistas criam aparelho portátil que detecta queima de gordura no corpo',
    category: 'Ciência e Espaço',
    summary: 'Estudo mostra avanço no monitoramento corporal e levanta novas possibilidades para entender como o organismo transforma energia',
    image: 'https://olhardigital.com.br/wp-content/uploads/2026/07/dispositivo-movel-portatil-detecta-se-o-corpo-esta-usando-a-gordura-como-fonte-de-energia-scaled.jpg',
    href: 'https://olhardigital.com.br/2026/07/24/ciencia-e-espaco/cientistas-criam-aparelho-portatil-que-detecta-queima-de-gordura-no-corpo/',
  },
  {
    title: 'Liga GG abre inscrições para qualificatória da VPL e oferece caminho para o competitivo de VALORANT',
    category: 'Games e Consoles',
    summary: 'Liga GG está com inscrições abertas para a qualificatória da VPL, torneio que garante vaga no semiprofissional de VALORANT. Saiba como participar.',
    image: 'https://olhardigital.com.br/wp-content/uploads/2026/07/Captura-de-tela-2026-07-24-142646-1.png',
    href: 'https://olhardigital.com.br/2026/07/24/games-e-consoles/liga-gg-abre-inscricoes-para-a-vpl/',
  },
  {
    title: 'Qual é o máximo que um ser humano pode viver?',
    category: 'Ciência e Espaço',
    summary: 'Estudo revela que mutações no DNA podem limitar a vida humana mesmo sem doenças, com uma estimativa de longevidade entre 146 e 194 anos.',
    image: 'https://olhardigital.com.br/wp-content/uploads/2026/05/imagem_2026-05-20T01-59-39.jpg',
    href: 'https://olhardigital.com.br/2026/07/24/ciencia-e-espaco/qual-e-o-maximo-que-um-ser-humano-pode-viver/',
  },
  {
    title: 'Entenda: Como funciona um campeonato de eSports',
    category: 'Games e Consoles',
    summary: 'Esportes eletrônicos, ou eSports, são competições profissionais de games. Veja como funcionam e o que as diferencia dos jogos tradicionais.',
    image: 'https://olhardigital.com.br/wp-content/uploads/2026/07/esport-que-sport-e-esse-202003181234.jpg',
    href: 'https://olhardigital.com.br/2026/07/24/games-e-consoles/entenda-como-funciona-um-campeonato-de-esports/',
  },
]
// AUTO-NEWS-END

export function News() {
  const today = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date())

  return (
    <section id="noticias" className="scroll-mt-36">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-black">Notícias em destaque</h2>
          <p className="mt-1 text-sm text-slate-400">
            As cinco notícias mais lidas no Olhar Digital em {today}.
          </p>
        </div>

        <a
          className="inline-flex items-center gap-1 text-sm font-bold text-brand-500"
          href="https://olhardigital.com.br/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Fonte: Olhar Digital <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {featuredNews.map((news, index) => (
          <article
            className="card-hover flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.07] to-white/[.025] p-4"
            key={news.title}
          >
            <div className="flex items-start gap-3">
              <img
                alt=""
                className="h-14 w-20 shrink-0 rounded-lg border border-white/10 object-cover"
                loading="lazy"
                src={news.image}
              />
              <div className="min-w-0 flex-1">
                <span className="inline-block rounded-lg bg-brand-600/20 px-2 py-1 text-[10px] font-bold text-brand-100">
                  {news.category}
                </span>
                <span className="mt-1 block text-right text-[10px] font-black text-slate-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>

            <h3 className="mt-3 text-sm font-black leading-snug">
              {news.title}
            </h3>
            <p className="mt-2 flex-1 text-xs leading-5 text-slate-400">
              {news.summary}
            </p>

            <a
              aria-label={`Ler ${news.title} no Olhar Digital`}
              className="mt-3 inline-flex items-center gap-1 text-xs font-black text-brand-500"
              href={news.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              Ler notícia <ArrowUpRight size={14} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
