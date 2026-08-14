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
  {
    slug: 'hd-externo-ou-ssd-externo-para-backup',
    title: 'HD externo ou SSD externo para backup: qual escolher?',
    category: 'Armazenamento',
    excerpt:
      'Backup não é opcional. Entenda a diferença real entre HD externo e SSD externo, quanto espaço você precisa e como evitar perder arquivos por escolher o modelo errado.',
    publishedAt: '2026-08-14',
    readTimeMinutes: 5,
    intro:
      'A maioria das pessoas só pensa em backup depois de perder algo importante. Um HD ou SSD externo resolve isso, mas escolher o modelo errado pode significar transferências lentas, disco corrompendo cedo demais ou capacidade insuficiente já no primeiro ano.',
    sections: [
      {
        heading: 'Qual a diferença real entre HD e SSD externo',
        paragraphs: [
          'HD externo usa discos mecânicos: é mais barato por GB e ótimo para guardar grandes volumes de arquivo que você não acessa toda hora (fotos antigas, vídeos, backups completos). SSD externo é eletrônico, não tem partes móveis, é muito mais rápido e mais resistente a quedas — mas custa mais por GB.',
          'Para backup puro (copiar e guardar, sem usar o tempo todo), o HD externo ainda é a opção mais econômica. Para quem carrega o disco todo dia na mochila ou precisa copiar arquivos grandes com frequência, o SSD externo compensa o preço maior pela durabilidade e velocidade.',
        ],
      },
      {
        heading: 'Quanto espaço você realmente precisa',
        paragraphs: [
          '1TB é o ponto de partida razoável hoje — dá para guardar milhares de fotos em alta resolução, documentos e uma boa quantidade de vídeo. Se o objetivo é backup completo do computador (sistema + arquivos), some o espaço já usado no seu PC e dobre essa margem, porque o backup cresce com o tempo.',
          'Evite comprar exatamente o espaço que você usa hoje: arquivo se acumula rápido, e um disco sempre cheio é o motivo mais comum de gente parar de fazer backup.',
        ],
      },
      {
        heading: 'USB 3.0 faz diferença — confira antes de comprar',
        paragraphs: [
          'Discos e cabos USB 2.0 ainda existem no mercado e são bem mais lentos para copiar arquivos grandes. Verifique se o produto menciona USB 3.0 (ou 3.1/3.2) na descrição — o conector costuma ter uma marcação azul por dentro, mas a especificação no anúncio é a forma mais segura de confirmar.',
        ],
      },
      {
        heading: 'A regra que evita perder arquivo de verdade',
        paragraphs: [
          'Um único backup não é backup de verdade — se o disco externo falhar, você perde tudo de novo. A recomendação básica é ter os arquivos em pelo menos dois lugares diferentes: o computador e o disco externo, ou o disco externo e uma nuvem. Guardar o disco externo sempre junto do notebook (na mesma mochila, por exemplo) também anula parte da proteção, já que ambos podem ser perdidos ou roubados juntos.',
        ],
      },
    ],
    checklist: [
      'HD externo para grandes volumes e menor custo; SSD externo para velocidade e resistência',
      '1TB é um bom ponto de partida — evite comprar só o espaço que você usa hoje',
      'Confirme USB 3.0 ou superior na descrição do anúncio',
      'Mantenha uma cópia em outro lugar além do disco externo (nuvem ou outro dispositivo)',
    ],
    ctaLabel: 'Ver ofertas de armazenamento no catálogo',
    ctaHref: '/produtos',
    relatedLabel: 'Aprenda a organizar arquivos e fazer backup no curso gratuito de Computação Básica',
    relatedHref: '/curso-computacao-basica',
  },
  {
    slug: 'como-escolher-power-bank-mah',
    title: 'Como escolher um power bank: o que o mAh realmente significa',
    category: 'Acessórios',
    excerpt:
      'Nem todo power bank de mAh alto carrega mais rápido, e a capacidade anunciada não é a capacidade real entregue ao celular. Entenda antes de comprar.',
    publishedAt: '2026-08-14',
    readTimeMinutes: 4,
    intro:
      'Power bank é um dos acessórios mais comprados sem pesquisa — a maioria das pessoas olha só o número de mAh na embalagem. Só que esse número sozinho não garante quantas vezes ele vai carregar seu celular nem a velocidade da carga.',
    sections: [
      {
        heading: 'O mAh anunciado não é o mAh que chega no celular',
        paragraphs: [
          'Parte da energia se perde na conversão entre a bateria do power bank e a do celular — na prática, um power bank de 10.000mAh costuma entregar algo entre 6.000 e 7.000mAh de carga real, dependendo da eficiência do aparelho. Isso é normal e acontece com qualquer marca, mas explica por que o power bank "acaba" antes do esperado pelas contas simples.',
          'Para ter uma ideia prática: se seu celular tem bateria de 4.000mAh, um power bank de 10.000mAh dá para cerca de 1,5 a 2 cargas completas — não as 2,5 que a conta direta sugeriria.',
        ],
      },
      {
        heading: 'Carga rápida depende da saída (W), não só da capacidade',
        paragraphs: [
          'Um power bank com muito mAh mas saída de energia baixa (5W, por exemplo) carrega o celular devagar, mesmo tendo bateria de sobra. Se o seu celular suporta carga rápida, verifique se o power bank anuncia saída de 18W, 20W ou mais e se é compatível com o padrão do seu aparelho (USB-C PD é o mais comum hoje).',
        ],
      },
      {
        heading: 'Quanto mAh escolher de acordo com o uso',
        paragraphs: [
          'Para uso ocasional (completar a bateria uma vez no dia), 10.000mAh já é suficiente e ainda é leve para carregar na bolsa. Para viagem ou uso intenso fora de casa por vários dias, vale considerar 20.000mAh, mas prepare-se para um power bank mais pesado — a capacidade extra tem peso físico real.',
        ],
      },
      {
        heading: 'Segurança: um detalhe que poucos verificam',
        paragraphs: [
          'Power banks muito baratos e sem marca conhecida têm mais chance de não ter proteção contra curto-circuito ou superaquecimento. Prefira sempre produtos com boas avaliações e comentários recentes de outros compradores — é o sinal mais confiável de que a bateria interna é segura para viajar de avião ou deixar carregando sem supervisão.',
        ],
      },
    ],
    checklist: [
      'Espere entregar cerca de 60-70% do mAh anunciado em carga real',
      'Confira a saída em W — mAh alto não garante carga rápida',
      '10.000mAh para o dia a dia; 20.000mAh+ para viagens mais longas',
      'Prefira modelos com boas avaliações recentes por segurança da bateria',
    ],
    ctaLabel: 'Ver ofertas de power bank e acessórios no catálogo',
    ctaHref: '/produtos',
  },
  {
    slug: 'como-evitar-golpes-whatsapp-instagram',
    title: 'Como evitar golpes no WhatsApp e Instagram: os sinais que a maioria ignora',
    category: 'Segurança Digital',
    excerpt:
      'Golpe do "amigo pedindo dinheiro", clonagem de conta, links falsos de promoção: veja os padrões mais comuns hoje e como se proteger sem precisar entender de tecnologia.',
    publishedAt: '2026-08-14',
    readTimeMinutes: 6,
    intro:
      'Golpes em WhatsApp e Instagram evoluíram muito e não dependem mais de "cair" em algo óbvio. Os mais eficazes hoje imitam perfeitamente uma pessoa conhecida ou uma empresa real. Conhecer os padrões é a melhor defesa, porque nenhum aplicativo bloqueia isso sozinho.',
    sections: [
      {
        heading: 'O golpe do "amigo" pedindo dinheiro',
        paragraphs: [
          'O golpista clona ou copia a foto e o nome de um contato seu (às vezes até rouba o número de verdade) e manda uma mensagem pedindo Pix urgente, geralmente com uma desculpa emocional (acidente, hospital, cartão bloqueado). O sinal mais confiável é o tom da conversa: se a pessoa nunca fala do jeito que o texto está escrito, ou evita ligação de voz/vídeo quando você pede, é golpe.',
          'A regra prática: antes de fazer qualquer Pix pedido por mensagem, ligue para a pessoa por outro meio (uma ligação de voz normal) para confirmar. Golpista quase sempre inventa uma desculpa para não atender chamada.',
        ],
      },
      {
        heading: 'Como identificar uma conta clonada',
        paragraphs: [
          'No WhatsApp, uma conta clonada de verdade (não confundir com "print" de conversa falsa) geralmente aparece porque a vítima original perdeu acesso ao próprio número. Se um contato avisar "me clonaram, não responda a mensagens minhas", leve a sério e ignore qualquer pedido vindo daquele número até a pessoa confirmar por outro canal.',
          'No Instagram, perfis falsos geralmente copiam fotos de um perfil real mas têm poucos seguidores, poucas publicações antigas ou seguem um padrão estranho (só posts recentes, sem interação real). Antes de confiar numa mensagem, vale checar o perfil que está mandando.',
        ],
      },
      {
        heading: 'Links de promoção e "brindes" falsos',
        paragraphs: [
          'Mensagens anunciando prêmios, cupons ou promoções de grandes marcas que pedem para você clicar em um link e informar dados pessoais quase sempre são falsas — empresas sérias não fazem esse tipo de abordagem por WhatsApp sem você ter interagido antes. Desconfie especialmente de links encurtados que escondem o endereço real de destino.',
        ],
      },
      {
        heading: 'Proteções simples que fazem toda diferença',
        paragraphs: [
          'Ative a verificação em duas etapas no WhatsApp (Configurações > Conta > Confirmação em duas etapas) e a autenticação de dois fatores no Instagram — isso impede que alguém entre na sua conta mesmo sabendo sua senha. Nunca compartilhe o código de verificação de 6 dígitos que chega por SMS com ninguém, nem se a pessoa disser que é "suporte" do aplicativo: esse código é a única coisa que protege sua conta de ser roubada.',
        ],
      },
    ],
    checklist: [
      'Pedido de Pix por mensagem: sempre confirme por ligação de voz antes de pagar',
      'Contato avisou que foi clonado? Ignore pedidos vindos daquele número até confirmar por outro canal',
      'Desconfie de promoções e prêmios que pedem clique em link e dados pessoais',
      'Ative verificação em duas etapas no WhatsApp e Instagram, e nunca compartilhe o código de 6 dígitos',
    ],
    ctaLabel: 'Falar no WhatsApp sobre segurança digital',
    ctaHref:
      'https://wa.me/5567984793793?text=Ol%C3%A1%2C%20li%20o%20artigo%20sobre%20golpes%20no%20WhatsApp%20e%20Instagram%20e%20tenho%20uma%20d%C3%BAvida.',
    relatedLabel: 'Curso gratuito e completo de Segurança da Informação — aprenda a se proteger de verdade',
    relatedHref: '/curso-seguranca-da-informacao',
  },
  {
    slug: 'golpe-do-pix-como-funciona-como-evitar',
    title: 'Golpe do Pix: como funciona e como não cair em nenhuma variação dele',
    category: 'Segurança Digital',
    excerpt:
      'Falso motoboy, central bancária falsa, QR Code adulterado e chave Pix trocada: veja as variações mais comuns do golpe do Pix e o que fazer se já caiu em uma.',
    publishedAt: '2026-08-14',
    readTimeMinutes: 6,
    intro:
      'O Pix é instantâneo e, por isso, irreversível na maioria dos casos — é exatamente essa característica que os golpistas exploram. Não existe um único "golpe do Pix": existem várias variações, e conhecer cada uma é o que evita cair nelas.',
    sections: [
      {
        heading: 'Falsa central de atendimento do banco',
        paragraphs: [
          'O golpista liga se passando por funcionário do banco, avisa sobre uma "compra suspeita" e induz a vítima a fazer um Pix para uma "conta segura" ou a informar códigos recebidos por SMS. Nenhum banco pede para você transferir dinheiro para "proteger a conta" nem pede o código de confirmação que chega no seu celular — isso é sempre golpe.',
          'Se receber uma ligação assim, desligue e ligue de volta pelo número oficial do banco (o de trás do cartão ou do aplicativo), nunca pelo número que ligou para você.',
        ],
      },
      {
        heading: 'QR Code adulterado',
        paragraphs: [
          'Em estabelecimentos físicos, golpistas às vezes colam um QR Code falso por cima do original, redirecionando o pagamento para outra conta. Sempre confira o nome do recebedor que aparece no aplicativo antes de confirmar o pagamento — se o nome não bate com o do estabelecimento, cancele.',
        ],
      },
      {
        heading: 'Chave Pix trocada em anúncio de venda',
        paragraphs: [
          'Em compras via marketplace ou redes sociais, o golpista se passa pelo vendedor real (às vezes até clonando a conversa) e manda uma chave Pix diferente da do vendedor original momentos antes do pagamento. Sempre confirme o nome do titular que aparece na tela de confirmação do Pix — se for uma pessoa física diferente do nome da loja, é sinal de alerta.',
        ],
      },
      {
        heading: 'O que fazer se você já caiu no golpe',
        paragraphs: [
          'Aja rápido: contate o banco imediatamente (o Pix tem um mecanismo chamado MED — Mecanismo Especial de Devolução — que pode bloquear e devolver parte do valor se acionado rapidamente após uma fraude comprovada). Registre um boletim de ocorrência, guarde prints da conversa e do comprovante, e formalize a reclamação por escrito com o banco. Quanto mais rápido agir, maior a chance de recuperar o valor.',
        ],
      },
    ],
    checklist: [
      'Banco nunca pede Pix para "proteger a conta" nem pede código de SMS por telefone',
      'Recebeu ligação do banco? Desligue e ligue de volta pelo número oficial',
      'Sempre confira o nome do recebedor na tela antes de confirmar o Pix',
      'Se for vítima, contate o banco imediatamente e peça acionamento do MED',
    ],
    ctaLabel: 'Falar no WhatsApp sobre segurança digital',
    ctaHref:
      'https://wa.me/5567984793793?text=Ol%C3%A1%2C%20li%20o%20artigo%20sobre%20o%20golpe%20do%20Pix%20e%20tenho%20uma%20d%C3%BAvida.',
    relatedLabel: 'Curso gratuito e completo de Segurança da Informação — aprenda a se proteger de verdade',
    relatedHref: '/curso-seguranca-da-informacao',
  },
  {
    slug: 'como-proteger-wifi-de-casa',
    title: 'Como proteger o Wi-Fi de casa contra invasão (guia simples, sem termo técnico)',
    category: 'Segurança Digital',
    excerpt:
      'Vizinho usando sua internet de graça é o menor dos problemas. Veja os passos básicos para deixar seu roteador seguro contra invasão, mesmo sem entender nada de tecnologia.',
    publishedAt: '2026-08-14',
    readTimeMinutes: 5,
    intro:
      'Um Wi-Fi mal configurado não é só alguém "roubando" sua internet — é uma porta aberta para acessar câmeras, computadores e outros aparelhos conectados na sua rede. A boa notícia é que proteger o roteador leva menos de 10 minutos.',
    sections: [
      {
        heading: 'Troque a senha padrão do roteador',
        paragraphs: [
          'Todo roteador vem com uma senha de administrador padrão (geralmente "admin" ou impressa numa etiqueta), diferente da senha do Wi-Fi. Se você nunca trocou essa senha de administração, qualquer pessoa que descubra o modelo do seu roteador pode acessar as configurações. Procure "configurar roteador" + a marca do seu aparelho para encontrar o passo a passo de troca.',
        ],
      },
      {
        heading: 'Use criptografia WPA2 ou WPA3, nunca deixe a rede aberta',
        paragraphs: [
          'Nas configurações de Wi-Fi do roteador, verifique se o tipo de segurança está como WPA2 ou WPA3 (não WEP, que é antigo e fácil de quebrar, nem "aberta", sem senha nenhuma). Essa opção geralmente fica no mesmo menu onde você define a senha da rede.',
        ],
      },
      {
        heading: 'Senha forte e única para o Wi-Fi',
        paragraphs: [
          'Evite senhas óbvias como datas de aniversário ou sequências simples. Uma senha com pelo menos 12 caracteres, misturando letras, números e algum símbolo, já dificulta bastante a invasão. Anote em um lugar seguro (não em um papel colado no roteador visível para visitas).',
        ],
      },
      {
        heading: 'Mantenha o firmware do roteador atualizado',
        paragraphs: [
          'Assim como celular e computador, o roteador recebe atualizações que corrigem falhas de segurança. A maioria dos aparelhos modernos permite verificar atualização direto no aplicativo do provedor ou no painel de administração — vale conferir a cada poucos meses.',
        ],
      },
      {
        heading: 'Rede de convidados para quem visita sua casa',
        paragraphs: [
          'Se o roteador tiver essa opção, crie uma rede separada para visitas ("rede de convidados"). Assim, quem usa sua internet ocasionalmente não tem acesso aos outros aparelhos conectados na rede principal, como computadores e câmeras de segurança.',
        ],
      },
    ],
    checklist: [
      'Troque a senha de administrador padrão do roteador',
      'Confirme que a segurança está em WPA2 ou WPA3, nunca rede aberta',
      'Use senha de Wi-Fi forte, com pelo menos 12 caracteres',
      'Verifique atualização de firmware a cada poucos meses',
      'Crie uma rede de convidados separada, se o roteador permitir',
    ],
    ctaLabel: 'Falar no WhatsApp sobre segurança digital',
    ctaHref:
      'https://wa.me/5567984793793?text=Ol%C3%A1%2C%20li%20o%20artigo%20sobre%20como%20proteger%20o%20Wi-Fi%20de%20casa%20e%20tenho%20uma%20d%C3%BAvida.',
    relatedLabel: 'Curso gratuito e completo de Segurança da Informação — aprenda a se proteger de verdade',
    relatedHref: '/curso-seguranca-da-informacao',
  },
  {
    slug: 'como-identificar-phishing-email-sms',
    title: 'Como identificar phishing por e-mail e SMS antes de clicar',
    category: 'Segurança Digital',
    excerpt:
      'Falso boleto vencido, falsa entrega dos Correios, falso aviso do banco: veja os detalhes que denunciam uma mensagem de phishing antes mesmo de você clicar no link.',
    publishedAt: '2026-08-14',
    readTimeMinutes: 5,
    intro:
      'Phishing é o nome técnico para mensagens falsas que imitam empresas reais (banco, Correios, Receita Federal, operadoras) para roubar dados ou instalar vírus. Elas ficaram muito mais convincentes visualmente, mas quase sempre têm detalhes que denunciam a farsa.',
    sections: [
      {
        heading: 'Urgência artificial é o maior sinal de alerta',
        paragraphs: [
          'Mensagens de phishing quase sempre criam um senso de urgência: "sua conta será bloqueada em 24h", "pacote será devolvido hoje", "fatura vence agora". Empresas reais raramente usam esse tom de pressão para ações imediatas. Desconfie sempre que uma mensagem tentar te apressar a clicar sem pensar.',
        ],
      },
      {
        heading: 'Confira o link antes de clicar, não depois',
        paragraphs: [
          'No celular, segure o dedo sobre o link (sem clicar) para ver o endereço completo antes de abrir. No computador, passe o mouse por cima. Endereços com erros de escrita sutis (ex: "corre1os.com" em vez de "correios.com.br"), domínios estranhos ou muito longos são o sinal mais confiável de phishing.',
          'Bancos, Correios e órgãos públicos usam domínios oficiais conhecidos — na dúvida, não clique no link da mensagem: abra o aplicativo oficial ou digite o endereço direto no navegador.',
        ],
      },
      {
        heading: 'Remetente parecido não é remetente verdadeiro',
        paragraphs: [
          'Em e-mails, o nome de exibição pode ser configurado para qualquer coisa (ex: "Banco XYZ"), mas o endereço de e-mail real por trás costuma ser bem diferente do oficial. Clique ou toque no nome do remetente para ver o endereço completo antes de confiar na mensagem.',
        ],
      },
      {
        heading: 'Nunca informe senha, código ou dados de cartão por link recebido',
        paragraphs: [
          'Nenhuma empresa séria pede para você "confirmar" senha, código de verificação ou número completo de cartão através de um link em e-mail ou SMS. Se a mensagem pedir isso, é phishing — sem exceção, mesmo que o site pareça idêntico ao original.',
        ],
      },
    ],
    checklist: [
      'Desconfie de qualquer mensagem com urgência artificial ("bloqueio em 24h")',
      'Confira o endereço do link antes de clicar, procurando erros de escrita',
      'Verifique o e-mail real do remetente, não só o nome de exibição',
      'Nunca informe senha, código ou dados de cartão por link recebido em mensagem',
    ],
    ctaLabel: 'Falar no WhatsApp sobre segurança digital',
    ctaHref:
      'https://wa.me/5567984793793?text=Ol%C3%A1%2C%20li%20o%20artigo%20sobre%20phishing%20por%20e-mail%20e%20SMS%20e%20tenho%20uma%20d%C3%BAvida.',
    relatedLabel: 'Curso gratuito e completo de Segurança da Informação — aprenda a se proteger de verdade',
    relatedHref: '/curso-seguranca-da-informacao',
  },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}
