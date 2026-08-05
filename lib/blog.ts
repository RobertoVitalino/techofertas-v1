export type ArticleSection = {
  heading: string
  paragraphs: string[]
}

export type Article = {
  slug: string
  title: string
  category: string
  excerpt: string
  publishedAt: string
  readTimeMinutes: number
  intro: string
  sections: ArticleSection[]
  checklist?: string[]
  ctaLabel: string
  ctaHref: string
  relatedLabel?: string
  relatedHref?: string
}

export const articles: Article[] = [
  {
    slug: 'melhor-notebook-ate-2000-reais',
    title: 'Melhor notebook até R$ 2.000: guia de compra completo',
    category: 'Notebooks',
    excerpt:
      'O que realmente importa na hora de escolher um notebook barato: memória RAM, tipo de armazenamento, processador e os erros mais comuns que fazem gente pagar caro por pouco.',
    publishedAt: '2026-07-27',
    readTimeMinutes: 6,
    intro:
      'Notebook até R$ 2.000 não precisa ser sinônimo de máquina travando. O segredo é saber onde vale a pena economizar e onde não dá pra abrir mão — a maioria das reclamações vem de escolher errado, não de gastar pouco.',
    sections: [
      {
        heading: 'Memória RAM: o item que mais define a experiência',
        paragraphs: [
          'Para uso do dia a dia (navegador com várias abas, videochamada, Office), o mínimo aceitável hoje é 8GB de RAM. Modelos com 4GB ainda existem no mercado por serem mais baratos, mas travam rápido assim que você abre mais de um programa ao mesmo tempo.',
          'Se o notebook permitir upgrade de memória (verifique na ficha técnica se tem slot livre), vale comprar o modelo com 8GB e considerar upgrade futuro em vez de forçar um com 4GB soldado, que não pode ser trocado.',
        ],
      },
      {
        heading: 'SSD em vez de HD: a troca que mais faz diferença',
        paragraphs: [
          'Um notebook com SSD (mesmo um processador mais simples) inicia e abre programas muito mais rápido do que um com HD tradicional e processador melhor. Se tiver que escolher entre "processador mais forte com HD" ou "processador ok com SSD", fique com o SSD.',
          '256GB de armazenamento é o mínimo confortável para quem usa Windows, salva fotos e instala alguns programas. 128GB pode parecer suficiente na loja, mas enche rápido depois das atualizações do sistema.',
        ],
      },
      {
        heading: 'Processador: não se prenda só ao nome',
        paragraphs: [
          'Intel Core i3/i5 e AMD Ryzen 3/5 são as faixas mais comuns nessa faixa de preço. Mais importante que "i5 ou i3" é a geração: um i5 de geração muito antiga pode render menos que um i3 recente. Quando possível, verifique o número completo do modelo (ex: geração) antes de comparar preços.',
        ],
      },
      {
        heading: 'Erros comuns que fazem gente se arrepender da compra',
        paragraphs: [
          'Comprar só pelo tamanho da tela ou pela cor, ignorando RAM e armazenamento, é o erro mais frequente. Outro erro comum é confiar apenas na nota de "avaliações" sem ler os comentários — muitas notas altas são de quem comprou e ainda não usou o suficiente para notar os travamentos.',
        ],
      },
    ],
    checklist: [
      'Pelo menos 8GB de RAM (ou possibilidade real de upgrade)',
      'SSD de 256GB ou mais — evite HD tradicional se puder',
      'Verifique a geração do processador, não só o nome (i3/i5/Ryzen 3/5)',
      'Leia os comentários de quem já usa há semanas, não só a nota média',
    ],
    ctaLabel: 'Ver ofertas de notebooks no Mercado Livre',
    ctaHref: 'https://meli.la/1gdYbd7',
    relatedLabel: 'Comprou o notebook? Aprenda a tirar o máximo dele no curso gratuito de Computação Básica',
    relatedHref: '/curso-computacao-basica',
  },
  {
    slug: 'mouse-teclado-gamer-sem-gastar-muito',
    title: 'Como escolher um mouse ou teclado gamer sem gastar muito',
    category: 'Games',
    excerpt:
      'DPI alto não é sinônimo de mouse melhor. Entenda o que realmente influencia na hora de jogar e onde dá pra economizar sem perder qualidade.',
    publishedAt: '2026-07-27',
    readTimeMinutes: 5,
    intro:
      'A maior parte do marketing de periférico gamer foca em números grandes (DPI, taxa de polling, RGB) que pouco mudam sua experiência real de jogo. Veja o que de fato importa antes de gastar mais do que precisa.',
    sections: [
      {
        heading: 'DPI alto não é o que faz você jogar melhor',
        paragraphs: [
          'DPI (sensibilidade do sensor) acima de 3.200 já é suficiente pra praticamente qualquer jogo e qualquer monitor. Mouses anunciados com 16.000 ou 20.000 DPI raramente são usados nesse nível — é mais número de marketing do que ganho real de precisão.',
          'O que faz mais diferença no dia a dia é o sensor ser óptico (mais preciso e responsivo) e o mouse ter um peso e formato confortável para sua mão — isso você só sente testando ou lendo relatos de quem já comprou.',
        ],
      },
      {
        heading: 'Teclado mecânico vale a pena?',
        paragraphs: [
          'Teclados mecânicos custam mais, mas duram mais e respondem mais rápido que os de membrana. Se o orçamento for curto, um teclado de membrana decente ainda é uma escolha razoável — o ganho do mecânico é mais notado em jogos competitivos de reação rápida do que em uso geral.',
          'Se for optar por mecânico, switches "red" (lineares, mais silenciosos) costumam agradar mais pra jogos, enquanto "blue" (com clique tátil) são mais indicados pra digitação, mas fazem bem mais barulho.',
        ],
      },
      {
        heading: 'Com ou sem fio?',
        paragraphs: [
          'Para a maioria das pessoas, mouse e teclado com fio ainda são a opção mais confiável e barata, sem risco de latência ou precisar trocar bateria. Sem fio vale a pena principalmente por organização da mesa, não por desempenho — os modelos sem fio bons (com baixa latência) tendem a custar bem mais que a versão com fio equivalente.',
        ],
      },
    ],
    checklist: [
      'DPI acima de 3.200 já é suficiente — não pague a mais só por esse número',
      'Priorize sensor óptico e conforto na mão em vez de specs de marketing',
      'Switch "red" para jogos, "blue" para digitação (se for mecânico)',
      'Com fio costuma ser mais barato e sem risco de latência',
    ],
    ctaLabel: 'Ver ofertas de periféricos gamer no Mercado Livre',
    ctaHref: 'https://meli.la/28K9h8j',
    relatedLabel: 'Quer digitar mais rápido no teclado novo? Faça o curso gratuito de Digitação',
    relatedHref: '/curso-digitacao',
  },
  {
    slug: 'camera-seguranca-wifi-vale-a-pena',
    title: 'Câmera de segurança Wi-Fi em casa: vale a pena? Guia para quem nunca instalou uma',
    category: 'Smart Home',
    excerpt:
      'O que checar antes de comprar (armazenamento, visão noturna, resolução) e os cuidados de segurança digital que a maioria das pessoas esquece ao instalar uma câmera Wi-Fi.',
    publishedAt: '2026-07-27',
    readTimeMinutes: 6,
    intro:
      'Câmeras de segurança Wi-Fi ficaram muito mais baratas e fáceis de instalar — não precisa mais de instalador profissional nem cabeamento. Mas antes de comprar, tem alguns detalhes técnicos e de segurança que fazem toda diferença.',
    sections: [
      {
        heading: 'Armazenamento: cartão SD ou nuvem?',
        paragraphs: [
          'A maioria das câmeras grava em cartão microSD local ou envia para a nuvem (geralmente por assinatura mensal). Cartão SD não tem mensalidade, mas se a câmera for roubada ou danificada, você perde as gravações. Nuvem custa mais no longo prazo, mas guarda o vídeo fora de casa.',
          'Se optar por cartão SD, verifique a capacidade máxima suportada pela câmera antes de comprar o cartão — muitos modelos têm um limite (ex: 128GB ou 256GB) e cartões maiores simplesmente não funcionam.',
        ],
      },
      {
        heading: 'Visão noturna e resolução',
        paragraphs: [
          'Full HD (1080p) já é suficiente para identificar rostos e placas a uma distância razoável. Resoluções menores comprometem a qualidade da gravação justamente no momento em que ela mais importa.',
          'Para visão noturna, prefira modelos com infravermelho de verdade (não só "modo noturno" por software) — é isso que garante imagem utilizável no escuro completo, e não apenas uma imagem mais clara e borrada.',
        ],
      },
      {
        heading: 'Cuidados de segurança que a maioria ignora',
        paragraphs: [
          'Câmeras Wi-Fi são dispositivos conectados à internet, e configuradas errado podem ser acessadas por outras pessoas. Troque sempre a senha padrão de fábrica no primeiro acesso, ative a autenticação em duas etapas se o aplicativo oferecer, e mantenha o firmware da câmera atualizado.',
          'Evite expor a câmera diretamente na internet sem necessidade (definir redirecionamento de porta no roteador) — prefira sempre acessar pelo aplicativo oficial do fabricante, que já cuida dessa parte de forma mais segura.',
        ],
      },
    ],
    checklist: [
      'Decida entre cartão SD (sem mensalidade) ou nuvem (mais segurança contra roubo)',
      'Prefira resolução Full HD (1080p) ou superior',
      'Verifique se a visão noturna é por infravermelho de verdade',
      'Troque a senha padrão de fábrica assim que instalar',
    ],
    ctaLabel: 'Ver ofertas de câmeras e Smart Home no Mercado Livre',
    ctaHref: 'https://meli.la/1s72DRt',
    relatedLabel: 'Aprenda mais sobre segurança digital no curso gratuito',
    relatedHref: '/curso-seguranca-da-informacao',
  },
  {
    slug: 'sinais-computador-precisa-manutencao',
    title: '5 sinais de que seu computador precisa de manutenção (e quando chamar assistência)',
    category: 'Manutenção',
    excerpt:
      'Computador lento, esquentando ou reiniciando sozinho? Veja o que costuma causar cada sintoma e quando vale a pena resolver em casa ou chamar um técnico.',
    publishedAt: '2026-07-27',
    readTimeMinutes: 5,
    intro:
      'Nem todo problema de computador exige levar numa assistência técnica, mas alguns sinais indicam que esperar demais pode custar mais caro — inclusive a perda de arquivos importantes.',
    sections: [
      {
        heading: '1. Ficou lento do nada',
        paragraphs: [
          'Se o computador demora muito mais para abrir programas do que costumava, geralmente é excesso de programas abrindo junto com o sistema, pouco espaço livre no disco, ou (em casos mais raros) infecção por vírus. Vale tentar desinstalar programas que não usa e verificar o espaço livre antes de considerar um problema mais sério.',
        ],
      },
      {
        heading: '2. Está esquentando ou o ventilador fica muito alto',
        paragraphs: [
          'Isso costuma indicar acúmulo de poeira interna ou pasta térmica ressecada — comum em computadores com mais de 2-3 anos sem limpeza. Esse é um caso típico onde vale chamar assistência: mexer nos componentes internos sem experiência pode danificar peças.',
        ],
      },
      {
        heading: '3. Reinicia sozinho ou desliga sem aviso',
        paragraphs: [
          'Pode ser superaquecimento, fonte de energia com problema, ou falha de memória RAM. Esse sintoma não costuma melhorar sozinho e tende a piorar com o tempo — é um dos sinais mais claros de que é hora de uma avaliação técnica.',
        ],
      },
      {
        heading: '4. Tela azul ou travamentos repetidos',
        paragraphs: [
          'Ocasional, pode ser só um programa com bug. Se acontece com frequência, geralmente aponta para problema de hardware (memória, disco) ou drivers desatualizados/incompatíveis — vale diagnóstico antes que o disco perca dados de vez.',
        ],
      },
      {
        heading: '5. Barulhos estranhos no HD (cliques, arranhados)',
        paragraphs: [
          'Esse é o sinal mais urgente da lista. Ruídos incomuns em HDs tradicionais costumam indicar falha mecânica iminente. Faça backup dos arquivos importantes imediatamente e procure assistência — adiar aqui pode significar perder fotos e documentos de vez.',
        ],
      },
    ],
    checklist: [
      'Lentidão: tente liberar espaço e desinstalar programas antes de mais nada',
      'Esquentando ou barulhento: provável limpeza interna — chame um técnico',
      'Reiniciando sozinho: sinal de alerta, procure diagnóstico',
      'Ruído de clique no HD: faça backup agora e busque assistência com urgência',
    ],
    ctaLabel: 'Pedir avaliação técnica pelo WhatsApp',
    ctaHref:
      'https://wa.me/5567984793793?text=Ol%C3%A1%2C%20li%20o%20artigo%20sobre%20manuten%C3%A7%C3%A3o%20e%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o.',
    relatedLabel: 'Quer aprender a fazer manutenção você mesmo? Conheça o curso de Montagem e Manutenção',
    relatedHref: '/curso-montagem-manutencao',
  },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}
