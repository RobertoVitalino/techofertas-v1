export type CourseLesson = {
  slug: string
  title: string
  duration: string
  summary: string
  objectives: string[]
  keyPoints: Array<{ title: string; description: string }>
  activity: { title: string; steps: string[] }
  quiz: {
    question: string
    options: string[]
    answer: number
    explanation: string
  }
  reference: { label: string; href: string }
  video?: { youtubeId: string; title: string }
}

export type CourseModule = {
  slug: string
  title: string
  description: string
  lessons: CourseLesson[]
}

export const hardwareCourseModules: CourseModule[] = [
  {
    slug: 'introducao-a-montagem-e-manutencao',
    title: 'Introdução à Montagem e Manutenção',
    description:
      'Entenda por que vale a pena aprender montagem e manutenção, conheça as ferramentas certas e os cuidados de segurança antes de abrir qualquer equipamento.',
    lessons: [
      {
        slug: 'por-que-aprender-montagem-e-manutencao',
        video: { youtubeId: 'UZFNWNC4lPk', title: 'Porque aprender montagem e manutenção em computadores' },
        title: 'Por que aprender montagem e manutenção de computadores',
        duration: '25 min',
        summary:
          'Saber montar e consertar computadores economiza dinheiro, evita depender de terceiros para pequenos problemas e pode até virar uma fonte de renda extra. Antes de colocar a mão na massa, vale entender onde essa habilidade realmente é útil no dia a dia.',
        objectives: [
          'Reconhecer situações do dia a dia em que saber montagem e manutenção é útil.',
          'Identificar as diferenças entre montagem, manutenção preventiva e manutenção corretiva.',
        ],
        keyPoints: [
          {
            title: 'Montagem x manutenção preventiva x manutenção corretiva',
            description:
              'Montagem é construir o computador do zero escolhendo e encaixando peças. Manutenção preventiva é a limpeza e os cuidados regulares que evitam problemas. Manutenção corretiva é o conserto depois que algo já deu errado — e dominar as três economiza tempo e dinheiro.',
          },
          {
            title: 'Economia e autonomia',
            description:
              'Entender o que há dentro de um computador evita pagar por serviços simples, como trocar uma peça ou limpar o equipamento, e ajuda a decidir com mais segurança na hora de comprar peças ou levar o computador para conserto.',
          },
          {
            title: 'Uma habilidade que também pode gerar renda',
            description:
              'Muitos técnicos de informática começaram estudando por conta própria. Saber montar e consertar computadores e notebooks é uma habilidade valorizada, que pode virar um serviço prestado para vizinhos, amigos ou pequenos negócios.',
          },
        ],
        activity: {
          title: 'Mapeando sua relação com o computador',
          steps: [
            'Liste os computadores e notebooks que você ou sua família usam hoje.',
            'Para cada um, anote se você saberia dizer quais peças ele tem por dentro.',
            'Escreva um problema que você já teve com um computador e não soube resolver sozinho.',
          ],
        },
        quiz: {
          question: 'Qual é a principal diferença entre manutenção preventiva e manutenção corretiva?',
          options: [
            'Preventiva só existe em notebooks, corretiva só em desktops',
            'Preventiva é feita regularmente para evitar problemas; corretiva é feita depois que um problema já aconteceu',
            'Não existe diferença, os dois termos significam a mesma coisa',
            'Corretiva é sempre mais barata que preventiva',
          ],
          answer: 1,
          explanation:
            'Manutenção preventiva acontece antes do problema aparecer, como limpeza e trocas programadas. Manutenção corretiva é o conserto feito depois que algo já parou de funcionar corretamente.',
        },
        reference: {
          label: 'Intel — Suporte e documentação técnica',
          href: 'https://www.intel.com/content/www/us/en/support.html',
        },
      },
      {
        slug: 'ferramentas-e-epis-basicos',
        video: { youtubeId: 'FyqxNAKMRZk', title: 'COMO MONTAR PC: Que FERRAMENTAS você PRECISA para montagem, LIMPEZA e MANUTENÇÃO' },
        title: 'Ferramentas e EPIs básicos para montagem e manutenção',
        duration: '30 min',
        summary:
          'Antes de abrir qualquer computador, é essencial ter as ferramentas certas à mão — e usar equipamentos de proteção simples, como a pulseira antiestática, para não danificar peças sensíveis.',
        objectives: [
          'Listar as ferramentas básicas usadas em montagem e manutenção de PCs.',
          'Explicar para que serve a pulseira antiestática.',
        ],
        keyPoints: [
          {
            title: 'Chaves e kit básico',
            description:
              'Uma chave Phillips (cruzada) magnética de tamanho médio resolve a maioria dos parafusos de gabinete, placa-mãe e notebook. Kits com múltiplas pontas (Torx, chata) ajudam em modelos específicos, principalmente de notebook.',
          },
          {
            title: 'Pulseira antiestática',
            description:
              'Descargas de eletricidade estática do corpo podem danificar silenciosamente componentes eletrônicos sensíveis, como memória RAM e placa-mãe. A pulseira antiestática conecta seu corpo a um ponto aterrado, descarregando essa eletricidade antes que ela chegue às peças.',
          },
          {
            title: 'Outros itens úteis',
            description:
              'Pincel ou ar comprimido para poeira, pasta térmica reserva, organizador de parafusos e boa iluminação. Nenhum deles é obrigatório para começar, mas facilitam bastante o trabalho.',
          },
        ],
        activity: {
          title: 'Montando seu kit básico',
          steps: [
            'Separe (ou anote o que falta comprar) uma chave Phillips, um pincel e um pano seco e limpo.',
            'Verifique se você tem algum ponto aterrado em casa (como uma tomada com fio terra) para eventualmente usar uma pulseira antiestática.',
            'Escolha um local de trabalho com boa luz e espaço para apoiar as peças sem risco de quedas.',
          ],
        },
        quiz: {
          question: 'Para que serve a pulseira antiestática ao montar ou consertar um computador?',
          options: [
            'Para prender os cabos soltos dentro do gabinete',
            'Para descarregar a eletricidade estática do corpo antes que ela danifique componentes sensíveis',
            'Para medir a temperatura dos componentes',
            'Para segurar a placa-mãe no lugar durante a montagem',
          ],
          answer: 1,
          explanation:
            'A pulseira antiestática aterra o corpo da pessoa, evitando que uma descarga de eletricidade estática danifique componentes eletrônicos sensíveis, como memória RAM e placas.',
        },
        reference: {
          label: 'iFixit — Guia de ferramentas para reparo',
          href: 'https://www.ifixit.com/Tools',
        },
      },
      {
        slug: 'seguranca-eletrica-e-eletricidade-estatica',
        video: { youtubeId: 'CCw6PC3l1YY', title: 'Não queime seu computador! Evitando eletricidade estática' },
        title: 'Segurança elétrica e eletricidade estática antes de abrir o gabinete',
        duration: '25 min',
        summary:
          'Antes de tocar em qualquer peça interna, é preciso desligar e desconectar o computador da tomada e tomar cuidados simples com eletricidade estática — pequenos descuidos aqui podem danificar peças caras.',
        objectives: [
          'Explicar por que é preciso desconectar o computador da tomada antes de abri-lo.',
          'Aplicar cuidados básicos para reduzir o risco de eletricidade estática.',
        ],
        keyPoints: [
          {
            title: 'Sempre desligue e desconecte da tomada',
            description:
              'Mesmo com o computador "desligado" pelo botão, a fonte pode manter um resíduo de energia. Desconectar o cabo de força da tomada é o primeiro passo, sempre, antes de abrir qualquer gabinete ou notebook.',
          },
          {
            title: 'Descarregando a eletricidade estática do corpo',
            description:
              'Antes de tocar em qualquer peça, toque em uma superfície metálica aterrada (como a estrutura do próprio gabinete, ainda conectado à tomada mas desligado) para descarregar a eletricidade estática do coro.',
          },
          {
            title: 'Evite ambientes secos e com tapete',
            description:
              'Ambientes muito secos e superfícies como carpete aumentam o acúmulo de eletricidade estática no corpo. Prefira trabalhar em uma mesa com superfície não emborrachada e evite se movimentar muito enquanto segura uma peça.',
          },
        ],
        activity: {
          title: 'Checklist de segurança antes de abrir o computador',
          steps: [
            'Desligue o computador normalmente e depois desconecte o cabo de força da tomada.',
            'Toque em uma parte metálica do gabinete para descarregar eletricidade estática do corpo.',
            'Escolha uma superfície de trabalho firme, seca e sem tapete por baixo.',
          ],
        },
        quiz: {
          question: 'Por que é importante desconectar o cabo de força da tomada antes de abrir o gabinete, mesmo com o computador desligado?',
          options: [
            'Porque isso deixa o computador mais silencioso',
            'Porque a fonte pode manter resíduo de energia, e desconectar da tomada é o cuidado básico de segurança antes de mexer nas peças internas',
            'Porque isso é apenas uma tradição, sem motivo técnico real',
            'Porque isso acelera o processo de montagem',
          ],
          answer: 1,
          explanation:
            'Mesmo desligado pelo botão, o computador pode manter resíduo de energia enquanto conectado à tomada. Desconectar fisicamente o cabo de força é o cuidado básico antes de qualquer manutenção interna.',
        },
        reference: {
          label: 'AMD — Suporte técnico',
          href: 'https://www.amd.com/en/support',
        },
      },
    ],
  },
  {
    slug: 'componentes-internos-do-desktop',
    title: 'Componentes Internos do Desktop',
    description:
      'Entenda para que serve cada componente essencial dentro de um computador de mesa: placa-mãe, processador e memória RAM.',
    lessons: [
      {
        slug: 'placa-mae-conectores-e-slots',
        video: { youtubeId: 'SKkAhGHsgbk', title: 'CONHEÇA TODAS as CONEXÕES da PLACA MÃE!' },
        title: 'Placa-mãe: entendendo os principais conectores e slots',
        duration: '35 min',
        summary:
          'A placa-mãe é o componente que conecta todas as outras peças do computador. Reconhecer seus principais slots e conectores é o primeiro passo para entender como as peças se encaixam entre si.',
        objectives: [
          'Identificar os principais slots e conectores de uma placa-mãe.',
          'Explicar a função da placa-mãe dentro do computador.',
        ],
        keyPoints: [
          {
            title: 'A placa-mãe é o "esqueleto" do computador',
            description:
              'Todas as peças internas — processador, memória, armazenamento, placa de vídeo — se conectam direta ou indiretamente à placa-mãe, que também define quais peças são compatíveis entre si.',
          },
          {
            title: 'Principais slots',
            description:
              'O soquete do processador (socket), os slots de memória RAM (DIMM), os slots PCI Express (para placa de vídeo e outros periféricos) e as portas M.2/SATA (para armazenamento).',
          },
          {
            title: 'Conectores de alimentação e painel frontal',
            description:
              'A placa-mãe também tem conectores para a fonte de alimentação (24 pinos e 4/8 pinos da CPU) e para os cabos do painel frontal do gabinete (botão liga, LED, USB), que serão vistos em detalhe na montagem prática.',
          },
        ],
        activity: {
          title: 'Reconhecendo os slots da placa-mãe',
          steps: [
            'Se tiver acesso a um computador de mesa (desligado e desconectado), abra o gabinete e localize o soquete do processador.',
            'Localize os slots de memória RAM ao lado do processador.',
            'Identifique os slots PCI Express e as portas M.2/SATA usadas para armazenamento.',
          ],
        },
        quiz: {
          question: 'Qual é a função principal da placa-mãe em um computador?',
          options: [
            'Armazenar arquivos permanentemente',
            'Conectar e permitir a comunicação entre todos os outros componentes do computador',
            'Resfriar o processador',
            'Fornecer energia elétrica sozinha, sem precisar de fonte',
          ],
          answer: 1,
          explanation:
            'A placa-mãe é o componente central que conecta processador, memória, armazenamento e outras peças, permitindo que todas se comuniquem entre si.',
        },
        reference: {
          label: 'Intel — Entendendo a placa-mãe',
          href: 'https://www.intel.com/content/www/us/en/gaming/resources/how-to-choose-motherboard.html',
        },
      },
      {
        slug: 'processador-socket-e-cooler',
        video: { youtubeId: 'QmV_eYaj354', title: 'Cooler vs Soquete - Qual cooler comprar para placa-mãe Intel e AMD' },
        title: 'Processador (CPU): socket, compatibilidade e cooler',
        duration: '35 min',
        summary:
          'O processador precisa ser fisicamente compatível com o soquete (socket) da placa-mãe, e cada modelo tem exigências diferentes de resfriamento. Entender essa relação evita comprar peças incompatíveis.',
        objectives: [
          'Explicar o que é o socket do processador e por que ele define compatibilidade.',
          'Reconhecer a relação entre o processador e o cooler necessário para resfriá-lo.',
        ],
        keyPoints: [
          {
            title: 'O que é o socket',
            description:
              'É o formato físico de encaixe do processador na placa-mãe. Intel e AMD usam sockets diferentes entre si (e até entre gerações), então um processador só encaixa em placas-mãe com o socket correspondente.',
          },
          {
            title: 'Cooler: box x aftermarket',
            description:
              'Muitos processadores já vêm com um cooler simples de fábrica (cooler box), suficiente para uso comum. Para processadores mais potentes ou uso intenso, um cooler à parte (aftermarket, a ar ou water cooler) dissipa mais calor.',
          },
          {
            title: 'Compatibilidade do cooler com o socket',
            description:
              'Cada cooler tem um conjunto de encaixes (brackets) compatíveis com sockets específicos. Antes de comprar um cooler separado, é preciso conferir se ele é compatível com o socket do seu processador.',
          },
        ],
        activity: {
          title: 'Conferindo compatibilidade de processador e cooler',
          steps: [
            'Pesquise o modelo do processador de um computador que você conhece (ou um exemplo online).',
            'Descubra qual é o socket desse processador.',
            'Pesquise um modelo de cooler e confira, na ficha técnica, se ele lista esse socket como compatível.',
          ],
        },
        quiz: {
          question: 'Por que não é possível instalar qualquer processador em qualquer placa-mãe?',
          options: [
            'Porque todos os processadores são sempre compatíveis entre si',
            'Porque o processador precisa ser fisicamente compatível com o socket da placa-mãe',
            'Porque a cor do processador precisa combinar com o gabinete',
            'Porque isso depende apenas do sistema operacional instalado',
          ],
          answer: 1,
          explanation:
            'O socket é o formato físico de encaixe entre processador e placa-mãe. Só processadores com o socket correspondente ao da placa-mãe podem ser instalados nela.',
        },
        reference: {
          label: 'AMD — Compatibilidade de processadores e sockets',
          href: 'https://www.amd.com/en/support',
        },
      },
      {
        slug: 'memoria-ram-tipos-e-dual-channel',
        video: { youtubeId: 'z1BECXL6OQU', title: 'COMO INSTALAR AS MEMÓRIAS RAM NO PC E ATIVAR O DUAL CHANNEL (2 SLOTS E 4 SLOTS)' },
        title: 'Memória RAM: tipos, capacidade e dual channel',
        duration: '35 min',
        summary:
          'A memória RAM guarda temporariamente os dados que o processador está usando no momento. Entender tipos, capacidade e o conceito de dual channel ajuda a escolher e instalar a memória corretamente.',
        objectives: [
          'Explicar a função da memória RAM no computador.',
          'Instalar módulos de memória RAM ativando o modo dual channel.',
        ],
        keyPoints: [
          {
            title: 'Para que serve a RAM',
            description:
              'Diferente do armazenamento (HD/SSD), a RAM guarda dados temporariamente enquanto o computador está ligado, permitindo acesso muito mais rápido para o que está sendo processado no momento. Ao desligar o computador, o conteúdo da RAM é apagado.',
          },
          {
            title: 'Tipos e compatibilidade',
            description:
              'Existem gerações diferentes de memória RAM (como DDR4 e DDR5), que não são compatíveis entre si nem com placas-mãe de gerações diferentes — é preciso conferir qual tipo a placa-mãe aceita antes de comprar.',
          },
          {
            title: 'Dual channel',
            description:
              'Instalar dois módulos idênticos de memória em slots específicos (geralmente indicados por cor na placa-mãe) ativa o modo dual channel, que melhora a velocidade de transferência de dados entre RAM e processador em comparação com um único módulo.',
          },
        ],
        activity: {
          title: 'Verificando e instalando memória RAM',
          steps: [
            'Pesquise qual tipo de memória RAM (DDR4 ou DDR5) um processador ou placa-mãe específicos aceitam.',
            'Se tiver acesso a um computador, identifique quais slots de RAM estão preenchidos e quais estão vazios.',
            'Verifique no manual da placa-mãe quais slots devem ser usados juntos para ativar o dual channel.',
          ],
        },
        quiz: {
          question: 'O que acontece com o conteúdo da memória RAM quando o computador é desligado?',
          options: [
            'Ele permanece salvo para sempre, como em um HD ou SSD',
            'Ele é apagado, já que a RAM guarda dados apenas temporariamente enquanto o computador está ligado',
            'Ele é automaticamente enviado para a nuvem',
            'Ele é gravado permanentemente na placa-mãe',
          ],
          answer: 1,
          explanation:
            'A memória RAM é volátil: ela guarda dados apenas enquanto o computador está ligado, e todo o conteúdo é apagado ao desligar — diferente do armazenamento permanente em HD ou SSD.',
        },
        reference: {
          label: 'Kingston — Guia de memória RAM',
          href: 'https://www.kingston.com/en/memory',
        },
      },
    ],
  },
  {
    slug: 'armazenamento-e-fonte-de-alimentacao',
    title: 'Armazenamento e Fonte de Alimentação',
    description:
      'Conheça as opções de armazenamento (HD, SSD SATA e NVMe), como escolher uma boa fonte de alimentação e como organizar o gabinete para um bom fluxo de ar.',
    lessons: [
      {
        slug: 'hd-ssd-sata-e-ssd-nvme',
        video: { youtubeId: 'hoqEr_HZ_-4', title: 'HD vs. SSD vs. NVME: Qual a Diferença Real e Como Instalar - Curso de Manutenção #aula10' },
        title: 'HD, SSD SATA e SSD NVMe: diferenças e instalação',
        duration: '35 min',
        summary:
          'Existem hoje três tipos principais de armazenamento com velocidades bem diferentes entre si: o HD mecânico, o SSD SATA e o SSD NVMe. Entender essas diferenças ajuda a escolher a opção certa e a instalar cada uma corretamente.',
        objectives: [
          'Comparar velocidade e forma de conexão entre HD, SSD SATA e SSD NVMe.',
          'Reconhecer como cada tipo de armazenamento é fisicamente instalado no computador.',
        ],
        keyPoints: [
          {
            title: 'HD (disco rígido mecânico)',
            description:
              'Usa discos giratórios e uma agulha de leitura, sendo o tipo mais lento e mais barato por gigabyte, ainda usado para guardar grandes volumes de arquivos que não exigem velocidade.',
          },
          {
            title: 'SSD SATA',
            description:
              'Sem partes móveis, é bem mais rápido que o HD e se conecta pelo mesmo cabo SATA usado por HDs, o que o torna fácil de instalar como upgrade em computadores mais antigos.',
          },
          {
            title: 'SSD NVMe (M.2)',
            description:
              'Conecta-se diretamente na placa-mãe através de um slot M.2, sem precisar de cabos, e é o tipo mais rápido disponível atualmente, ideal para o sistema operacional e programas usados no dia a dia.',
          },
        ],
        activity: {
          title: 'Comparando tipos de armazenamento',
          steps: [
            'Pesquise o preço por gigabyte de um HD, um SSD SATA e um SSD NVMe de capacidades parecidas.',
            'Identifique, em fotos ou em um computador real, a diferença física entre um SSD SATA (com cabo) e um SSD NVMe (encaixado direto na placa-mãe).',
            'Anote qual tipo você usaria para o sistema operacional e qual usaria para guardar arquivos grandes, como vídeos.',
          ],
        },
        quiz: {
          question: 'Qual é a principal vantagem do SSD NVMe em relação ao SSD SATA?',
          options: [
            'Ele é sempre mais barato por gigabyte',
            'Ele se conecta diretamente à placa-mãe (sem cabos) e é significativamente mais rápido',
            'Ele só funciona em notebooks, nunca em desktops',
            'Ele não precisa ser instalado, funciona sem estar conectado',
          ],
          answer: 1,
          explanation:
            'O SSD NVMe se conecta direto ao slot M.2 da placa-mãe, sem cabos, e oferece velocidades de leitura e escrita muito superiores às do SSD SATA.',
        },
        reference: {
          label: 'Western Digital — Tipos de armazenamento',
          href: 'https://www.westerndigital.com/pt-br/solutions/ssd',
        },
      },
      {
        slug: 'fonte-de-alimentacao-e-selo-80-plus',
        video: { youtubeId: 'nLnc7Vesb04', title: 'O que é o Selo 80 Plus? Certificação 80 Plus para Fontes de PC' },
        title: 'Fonte de alimentação (PSU): certificação 80 Plus e conectores',
        duration: '30 min',
        summary:
          'A fonte de alimentação converte a energia da tomada para o formato que os componentes do computador usam. Entender a certificação 80 Plus ajuda a escolher uma fonte eficiente e segura para as peças.',
        objectives: [
          'Explicar o que significa a certificação 80 Plus em uma fonte de alimentação.',
          'Identificar os principais conectores de uma fonte (24 pinos, CPU, PCIe, SATA).',
        ],
        keyPoints: [
          {
            title: 'O que é a certificação 80 Plus',
            description:
              'Indica que a fonte converte pelo menos 80% da energia da tomada em energia útil para os componentes, desperdiçando menos em forma de calor. Existem níveis acima do básico, como Bronze, Gold e Platinum, com eficiência ainda maior.',
          },
          {
            title: 'Por que a qualidade da fonte importa',
            description:
              'Uma fonte de baixa qualidade ou sem certificação pode fornecer energia instável, encurtando a vida útil de outros componentes ou até causando desligamentos inesperados.',
          },
          {
            title: 'Principais conectores',
            description:
              'O conector de 24 pinos alimenta a placa-mãe, o conector de 4/8 pinos alimenta o processador, os conectores PCIe alimentam a placa de vídeo, e os conectores SATA alimentam HDs e SSDs SATA.',
          },
        ],
        activity: {
          title: 'Identificando conectores de uma fonte',
          steps: [
            'Pesquise uma imagem de uma fonte de alimentação ATX e localize o conector de 24 pinos.',
            'Localize o conector de 4/8 pinos usado para alimentar o processador.',
            'Verifique, na ficha técnica de uma fonte real, qual certificação 80 Plus ela possui.',
          ],
        },
        quiz: {
          question: 'O que a certificação 80 Plus indica sobre uma fonte de alimentação?',
          options: [
            'Que ela tem garantia de 80 meses',
            'Que ela converte pelo menos 80% da energia da tomada em energia útil, desperdiçando menos em calor',
            'Que ela suporta até 80 dispositivos conectados',
            'Que ela funciona apenas com 80% da capacidade máxima',
          ],
          answer: 1,
          explanation:
            'A certificação 80 Plus atesta um nível mínimo de eficiência energética: pelo menos 80% da energia consumida da tomada é convertida em energia útil para os componentes.',
        },
        reference: {
          label: 'Corsair — Entendendo a certificação 80 Plus',
          href: 'https://www.corsair.com/us/en/explorer/gamer/gaming-pcs/whats-the-difference-between-power-supply-ratings/',
        },
      },
      {
        slug: 'gabinete-airflow-e-organizacao-de-cabos',
        video: { youtubeId: 'NbfKiRXWytg', title: 'Como ORGANIZAR os CABOS do GABINETE!' },
        title: 'Gabinete: airflow, montagem física e organização de cabos',
        duration: '30 min',
        summary:
          'Um bom fluxo de ar (airflow) dentro do gabinete ajuda todos os componentes a funcionarem em temperaturas mais baixas — e organizar os cabos corretamente contribui diretamente para isso, além de facilitar futuras manutenções.',
        objectives: [
          'Explicar o que é airflow e por que ele influencia a temperatura dos componentes.',
          'Aplicar boas práticas de organização de cabos dentro do gabinete.',
        ],
        keyPoints: [
          {
            title: 'O que é airflow',
            description:
              'É o fluxo de ar que entra e sai do gabinete através das ventoinhas, retirando o ar quente gerado pelos componentes e trazendo ar fresco de fora. Um airflow bem planejado reduz a temperatura geral do sistema.',
          },
          {
            title: 'Cabos soltos atrapalham o fluxo de ar',
            description:
              'Cabos desorganizados dentro do gabinete podem bloquear a passagem de ar entre as ventoinhas, prejudicando o resfriamento mesmo com boas peças instaladas.',
          },
          {
            title: 'Boas práticas de organização',
            description:
              'Usar a parte de trás do gabinete para passar cabos, prender feixes com abraçadeiras e deixar apenas o necessário exposto na área dos componentes melhora tanto o airflow quanto a facilidade de fazer manutenções futuras.',
          },
        ],
        activity: {
          title: 'Planejando o fluxo de ar do seu gabinete',
          steps: [
            'Pesquise a posição recomendada de ventoinhas de entrada e saída de ar em um gabinete comum.',
            'Se tiver acesso a um computador montado, observe se os cabos estão organizados ou bloqueando alguma ventoinha.',
            'Liste três boas práticas de organização de cabos que você aplicaria em uma montagem nova.',
          ],
        },
        quiz: {
          question: 'Por que cabos desorganizados dentro do gabinete podem prejudicar o resfriamento do computador?',
          options: [
            'Porque cabos soltos aumentam o consumo de energia',
            'Porque eles podem bloquear a passagem de ar entre as ventoinhas, prejudicando o airflow',
            'Porque cabos soltos deixam o computador mais pesado',
            'Isso não tem nenhum efeito real na temperatura',
          ],
          answer: 1,
          explanation:
            'Cabos desorganizados podem obstruir o caminho do ar dentro do gabinete, reduzindo a eficiência das ventoinhas de entrada e saída e prejudicando o resfriamento geral.',
        },
        reference: {
          label: 'Intel — Boas práticas de resfriamento de PC',
          href: 'https://www.intel.com/content/www/us/en/gaming/resources/pc-cooling-guide.html',
        },
      },
    ],
  },
  {
    slug: 'montagem-pratica-de-um-pc',
    title: 'Montagem Prática de um PC do Zero',
    description:
      'Coloque a mão na massa: monte um computador completo, do encaixe do processador na placa-mãe até a organização final dos cabos dentro do gabinete.',
    lessons: [
      {
        slug: 'preparando-a-placa-mae-fora-do-gabinete',
        video: { youtubeId: 'BB-HwA1dThY', title: 'Como montar um PC passo a passo parte #2 - Instalando o processador Intel e memória RAM' },
        title: 'Preparando a placa-mãe fora do gabinete (CPU, cooler e RAM)',
        duration: '40 min',
        summary:
          'A forma mais segura e prática de começar uma montagem é instalar processador, cooler e memória RAM na placa-mãe ainda fora do gabinete, com mais espaço e visibilidade para trabalhar.',
        objectives: [
          'Instalar um processador no socket da placa-mãe corretamente.',
          'Instalar cooler e módulos de memória RAM antes de colocar a placa-mãe no gabinete.',
        ],
        keyPoints: [
          {
            title: 'Por que montar fora do gabinete primeiro',
            description:
              'Com a placa-mãe apoiada na própria caixa ou em uma superfície antiestática, fica mais fácil enxergar o socket, alinhar o processador corretamente e aplicar pressão uniforme no cooler, sem o gabinete atrapalhando o acesso.',
          },
          {
            title: 'Instalando o processador',
            description:
              'É preciso alinhar a marcação (um pequeno triângulo ou seta) do processador com a marcação correspondente no socket, encaixando sem forçar — processadores modernos entram com pouquíssima pressão quando alinhados corretamente.',
          },
          {
            title: 'Cooler e pasta térmica',
            description:
              'Depois do processador encaixado, aplica-se uma pequena quantidade de pasta térmica antes de prender o cooler, seguindo o padrão de fixação específico do modelo (parafusos ou presilhas).',
          },
        ],
        activity: {
          title: 'Montando o "miolo" da placa-mãe',
          steps: [
            'Apoie a placa-mãe sobre a própria caixa antiestática ou uma superfície plana e não condutiva.',
            'Alinhe e encaixe o processador no socket, sem forçar.',
            'Aplique pasta térmica e instale o cooler seguindo o sistema de fixação do modelo.',
            'Encaixe os módulos de memória RAM nos slots recomendados para dual channel.',
          ],
        },
        quiz: {
          question: 'Por que é recomendável instalar processador, cooler e memória na placa-mãe antes de colocá-la dentro do gabinete?',
          options: [
            'Porque isso é obrigatório por norma técnica',
            'Porque fora do gabinete há mais espaço e visibilidade para alinhar as peças corretamente',
            'Porque as peças não funcionam se instaladas dentro do gabinete',
            'Porque isso evita ter que aplicar pasta térmica',
          ],
          answer: 1,
          explanation:
            'Com a placa-mãe fora do gabinete, há mais espaço livre e visibilidade para alinhar o processador no socket e fixar o cooler corretamente, reduzindo o risco de erros.',
        },
        reference: {
          label: 'Intel — Como instalar um processador',
          href: 'https://www.intel.com/content/www/us/en/support/articles/000058196/processors.html',
        },
      },
      {
        slug: 'conectando-cabos-do-painel-frontal',
        video: { youtubeId: 'R2vqF6Dd17o', title: 'Como Conectar os Cabos do Painel Frontal do Gabinete na Placa Mãe' },
        title: 'Instalando a placa-mãe no gabinete e conectando os cabos do painel frontal',
        duration: '40 min',
        summary:
          'Depois de montada, a placa-mãe é fixada dentro do gabinete e conectada aos cabos do painel frontal — botão liga, LEDs e portas USB — que costumam ser a parte mais confusa da montagem para quem está começando.',
        objectives: [
          'Fixar a placa-mãe corretamente dentro do gabinete.',
          'Conectar corretamente os cabos do painel frontal (power switch, reset, LEDs e USB).',
        ],
        keyPoints: [
          {
            title: 'Fixando a placa-mãe',
            description:
              'A placa-mãe é presa ao gabinete usando parafusos específicos (standoffs), que a mantêm afastada da estrutura metálica, evitando curtos-circuitos.',
          },
          {
            title: 'Cabos do painel frontal',
            description:
              'Cada gabinete tem pequenos conectores para POWER SW (liga o PC), RESET SW (reinicia), POWER LED e HDD LED (luzes indicadoras). O manual da placa-mãe mostra exatamente em qual pino cada um se encaixa.',
          },
          {
            title: 'Conferindo antes de fechar',
            description:
              'Antes de fechar o gabinete, é recomendável ligar o computador uma vez com os componentes básicos para confirmar que tudo foi conectado corretamente, evitando ter que abrir tudo de novo depois.',
          },
        ],
        activity: {
          title: 'Conectando o painel frontal',
          steps: [
            'Fixe a placa-mãe já montada dentro do gabinete usando os parafusos apropriados.',
            'Consulte o manual da placa-mãe para identificar a posição exata dos pinos do painel frontal.',
            'Conecte POWER SW, RESET SW e os LEDs seguindo essa referência.',
            'Ligue o computador uma vez, ainda fora da montagem final, para confirmar que o botão liga funciona.',
          ],
        },
        quiz: {
          question: 'Para que servem os "standoffs" usados ao fixar a placa-mãe no gabinete?',
          options: [
            'Para decorar o interior do gabinete',
            'Para manter a placa-mãe afastada da estrutura metálica do gabinete, evitando curto-circuito',
            'Para prender os cabos do painel frontal',
            'Para aumentar a velocidade da placa-mãe',
          ],
          answer: 1,
          explanation:
            'Os standoffs são pequenos parafusos/pinos que elevam a placa-mãe em relação à estrutura metálica do gabinete, evitando que a parte de trás da placa encoste diretamente no metal e cause um curto-circuito.',
        },
        reference: {
          label: 'Microsoft — Suporte de hardware Windows',
          href: 'https://support.microsoft.com/pt-br/windows',
        },
      },
      {
        slug: 'instalando-fonte-armazenamento-e-organizando-cabos',
        video: { youtubeId: 'zLC7FP2pJmQ', title: 'COMO MONTAR UM PC, INSTALAR FONTE ATX, SSD, HD no GABINETE, AULA 02' },
        title: 'Instalando armazenamento, fonte e organizando os cabos',
        duration: '40 min',
        summary:
          'Com a placa-mãe já no lugar, faltam a fonte de alimentação e os dispositivos de armazenamento — e organizar os cabos nessa etapa final define o resultado da montagem, tanto na aparência quanto no fluxo de ar.',
        objectives: [
          'Instalar a fonte de alimentação e conectar seus cabos aos componentes.',
          'Instalar SSD/HD e organizar os cabos restantes dentro do gabinete.',
        ],
        keyPoints: [
          {
            title: 'Instalando a fonte',
            description:
              'A fonte é presa na parte traseira ou inferior do gabinete (dependendo do modelo) e conectada à placa-mãe (24 pinos e CPU), à placa de vídeo (se houver) e aos dispositivos de armazenamento.',
          },
          {
            title: 'Instalando SSD/HD',
            description:
              'SSDs NVMe são encaixados direto na placa-mãe; SSDs SATA e HDs são presos em baias específicas do gabinete e conectados por cabo de dados e de energia.',
          },
          {
            title: 'Organização final dos cabos',
            description:
              'Cabos não utilizados podem ser guardados atrás do gabinete; os cabos ativos devem ser presos com abraçadeiras, deixando espaço livre para o ar circular e facilitando futuras manutenções.',
          },
        ],
        activity: {
          title: 'Finalizando a montagem',
          steps: [
            'Fixe a fonte de alimentação no gabinete e conecte os cabos de 24 pinos e CPU à placa-mãe.',
            'Instale o SSD ou HD e conecte os cabos de dados e energia necessários.',
            'Organize e prenda os cabos restantes, priorizando não bloquear a ventilação.',
            'Ligue o computador para confirmar que tudo foi conectado corretamente antes de fechar o gabinete definitivamente.',
          ],
        },
        quiz: {
          question: 'Qual é o cuidado principal ao organizar os cabos na etapa final da montagem?',
          options: [
            'Deixar todos os cabos soltos para facilitar a troca futura',
            'Prender e organizar os cabos sem bloquear a ventilação, mantendo o fluxo de ar',
            'Cortar os cabos que não estão sendo usados',
            'Enrolar todos os cabos ao redor do cooler do processador',
          ],
          answer: 1,
          explanation:
            'A organização final deve priorizar não bloquear a passagem de ar entre as ventoinhas, mantendo um bom fluxo de ar (airflow) mesmo com todos os cabos conectados.',
        },
        reference: {
          label: 'Western Digital — Instalação de armazenamento',
          href: 'https://www.westerndigital.com/pt-br/solutions/ssd',
        },
      },
    ],
  },
  {
    slug: 'bios-uefi-e-primeira-inicializacao',
    title: 'BIOS/UEFI e Primeira Inicialização',
    description:
      'Aprenda a acessar a BIOS/UEFI, conferir se os componentes foram reconhecidos, configurar o boot e instalar o sistema operacional.',
    lessons: [
      {
        slug: 'entrando-na-bios-uefi',
        video: { youtubeId: 'xGD-CJ3bq6A', title: 'Como ENTRAR na BIOS UEFI do PC ou Notebook (FÁCIL) Funciona até SEM Teclado | Qualquer Modelo!' },
        title: 'Entrando na BIOS/UEFI e verificando se os componentes foram reconhecidos',
        duration: '30 min',
        summary:
          'A BIOS/UEFI é a primeira tela de configuração do computador, mostrada antes mesmo do sistema operacional carregar. É nela que se confirma se processador, memória e armazenamento foram reconhecidos corretamente após a montagem.',
        objectives: [
          'Acessar a BIOS/UEFI de um computador recém-montado.',
          'Conferir, na BIOS, se os componentes instalados foram reconhecidos corretamente.',
        ],
        keyPoints: [
          {
            title: 'O que é a BIOS/UEFI',
            description:
              'É um pequeno sistema, gravado na própria placa-mãe, responsável por inicializar o hardware antes de carregar o sistema operacional. A UEFI é a versão mais moderna, com suporte a mouse e interface gráfica.',
          },
          {
            title: 'Como acessar',
            description:
              'Geralmente é preciso pressionar uma tecla específica (Delete, F2 ou F10, dependendo do fabricante) logo nos primeiros segundos após ligar o computador, antes do sistema operacional começar a carregar.',
          },
          {
            title: 'Conferindo componentes',
            description:
              'A tela inicial da BIOS/UEFI costuma mostrar o modelo do processador, a quantidade de memória RAM detectada e os dispositivos de armazenamento conectados — o primeiro lugar para confirmar que a montagem funcionou.',
          },
        ],
        activity: {
          title: 'Primeira verificação da BIOS',
          steps: [
            'Ligue o computador recém-montado e entre na BIOS/UEFI usando a tecla indicada pelo fabricante da placa-mãe.',
            'Localize a informação do processador e confirme se o modelo corresponde ao que foi instalado.',
            'Confira se a quantidade de memória RAM e o armazenamento aparecem corretamente.',
          ],
        },
        quiz: {
          question: 'Qual é a principal função da tela inicial da BIOS/UEFI logo após montar um computador?',
          options: [
            'Instalar automaticamente o sistema operacional',
            'Permitir conferir se processador, memória e armazenamento foram reconhecidos corretamente',
            'Formatar o armazenamento automaticamente',
            'Conectar o computador à internet',
          ],
          answer: 1,
          explanation:
            'A tela inicial da BIOS/UEFI mostra as informações básicas de hardware reconhecido, sendo o primeiro lugar para confirmar que os componentes foram instalados e detectados corretamente.',
        },
        reference: {
          label: 'Microsoft — BIOS e UEFI no Windows',
          href: 'https://support.microsoft.com/pt-br/windows/inicializa%C3%A7%C3%A3o-uefi-em-vez-de-legado',
        },
      },
      {
        slug: 'ordem-de-boot-e-xmp-docp',
        video: { youtubeId: 'Hv9u6joZoJ4', title: 'COMO ATIVAR O XMP/DOCP NA BIOS PASSO A PASSO' },
        title: 'Configurando ordem de boot e ativando XMP/DOCP da memória',
        duration: '30 min',
        summary:
          'Duas configurações comuns logo após montar o PC: definir a ordem de boot (de onde o computador deve carregar primeiro) e ativar o perfil XMP/DOCP da memória RAM, que faz ela funcionar na velocidade máxima anunciada pelo fabricante.',
        objectives: [
          'Configurar a ordem de boot na BIOS/UEFI.',
          'Ativar o perfil XMP (Intel) ou DOCP (AMD) da memória RAM.',
        ],
        keyPoints: [
          {
            title: 'Ordem de boot',
            description:
              'Define de qual dispositivo (pendrive, SSD, HD) o computador tenta carregar primeiro. Para instalar um sistema operacional novo, é preciso colocar o pendrive de instalação como primeira opção.',
          },
          {
            title: 'Por que ativar XMP/DOCP',
            description:
              'Por padrão, a memória RAM roda em uma velocidade mais conservadora. O perfil XMP (Intel) ou DOCP (AMD), quando ativado na BIOS, faz a memória rodar na velocidade anunciada na caixa, sem precisar configurar nada manualmente.',
          },
          {
            title: 'Onde encontrar essas opções',
            description:
              'Ambas as configurações costumam ficar em menus como "Boot" e "Ai Tweaker"/"Overclocking" (o nome varia por fabricante), sempre dentro da própria tela da BIOS/UEFI.',
          },
        ],
        activity: {
          title: 'Ajustando boot e memória na BIOS',
          steps: [
            'Entre na BIOS/UEFI e localize o menu de ordem de boot.',
            'Coloque um pendrive (real ou apenas para prática) como primeira opção de boot.',
            'Localize a opção de XMP ou DOCP e ative o perfil de velocidade da memória.',
          ],
        },
        quiz: {
          question: 'O que o perfil XMP/DOCP faz quando ativado na BIOS?',
          options: [
            'Aumenta o espaço de armazenamento disponível',
            'Faz a memória RAM rodar na velocidade máxima anunciada pelo fabricante, em vez da velocidade padrão mais conservadora',
            'Instala automaticamente o sistema operacional',
            'Desliga os componentes que não estão sendo usados',
          ],
          answer: 1,
          explanation:
            'Sem XMP/DOCP ativado, a memória RAM roda em uma velocidade padrão mais baixa. Ativar o perfil faz com que ela funcione na velocidade máxima informada na embalagem.',
        },
        reference: {
          label: 'Kingston — O que é XMP',
          href: 'https://www.kingston.com/en/blog/pc-performance/what-is-xmp',
        },
      },
      {
        slug: 'instalando-o-sistema-operacional',
        video: { youtubeId: '6qRkmcRSgsc', title: 'Como instalar o Windows 10 pelo USB Pendrive em 2024 !(Tutorial Completo)' },
        title: 'Instalando o sistema operacional a partir de um pendrive',
        duration: '40 min',
        summary:
          'Com a BIOS configurada, o próximo passo é instalar o sistema operacional usando um pendrive de instalação — o processo que transforma o hardware recém-montado em um computador pronto para uso.',
        objectives: [
          'Explicar os passos gerais para criar um pendrive de instalação do Windows.',
          'Descrever o processo de instalação do sistema operacional a partir do pendrive.',
        ],
        keyPoints: [
          {
            title: 'Criando o pendrive de instalação',
            description:
              'A própria Microsoft disponibiliza uma ferramenta oficial para baixar o Windows e gravá-lo em um pendrive, criando um instalador bootável (o pendrive não pode ter arquivos importantes, pois será formatado).',
          },
          {
            title: 'Iniciando pelo pendrive',
            description:
              'Com a ordem de boot já ajustada na BIOS (ou usando o menu de boot rápido, geralmente F8, F11 ou F12), o computador inicia direto do pendrive em vez do armazenamento interno.',
          },
          {
            title: 'O processo de instalação',
            description:
              'O instalador pede o idioma, a partição onde o sistema será instalado (formatando o disco, se necessário) e depois copia os arquivos automaticamente, reiniciando algumas vezes até concluir.',
          },
        ],
        activity: {
          title: 'Planejando a instalação do sistema',
          steps: [
            'Pesquise a ferramenta oficial de criação de mídia do Windows.',
            'Anote os requisitos mínimos de espaço no pendrive para criar o instalador.',
            'Liste, em ordem, as etapas principais da instalação: boot pelo pendrive, escolha de idioma, escolha de partição, cópia de arquivos.',
          ],
        },
        quiz: {
          question: 'O que acontece com os dados do pendrive ao criar um instalador de sistema operacional nele?',
          options: [
            'Nada muda, os dados continuam intactos',
            'O pendrive é formatado, apagando os dados existentes, para se tornar um instalador bootável',
            'Os dados são automaticamente copiados para a nuvem antes',
            'O pendrive precisa estar vazio desde a fábrica, não pode ser reutilizado',
          ],
          answer: 1,
          explanation:
            'Criar um pendrive de instalação apaga o conteúdo existente nele, já que ele precisa ser formatado para se tornar um dispositivo bootável com os arquivos do sistema operacional.',
        },
        reference: {
          label: 'Microsoft — Criar mídia de instalação do Windows',
          href: 'https://support.microsoft.com/pt-br/windows/criar-m%C3%ADdia-de-instala%C3%A7%C3%A3o-do-windows',
        },
      },
    ],
  },
  {
    slug: 'manutencao-preventiva',
    title: 'Manutenção Preventiva',
    description:
      'Aprenda a limpar, trocar a pasta térmica e monitorar a temperatura do computador para evitar problemas antes que eles aconteçam.',
    lessons: [
      {
        slug: 'limpeza-fisica-poeira-e-filtros',
        video: { youtubeId: 'nZG4ThUEup4', title: 'MANUTENÇÃO NO PC: Como LIMPAR corretamente, ERROS comuns e PRODUTOS. Evitando AQUECIMENTO' },
        title: 'Limpeza física: poeira, cooler e filtros',
        duration: '30 min',
        summary:
          'O acúmulo de poeira é uma das principais causas de superaquecimento em computadores. Uma limpeza física regular, feita com cuidado, evita boa parte dos problemas de temperatura e barulho excessivo.',
        objectives: [
          'Explicar por que o acúmulo de poeira prejudica o funcionamento do computador.',
          'Aplicar uma rotina básica e segura de limpeza física.',
        ],
        keyPoints: [
          {
            title: 'Por que a poeira é um problema',
            description:
              'A poeira se acumula em coolers, ventoinhas e dissipadores, dificultando a passagem de ar e fazendo os componentes trabalharem em temperaturas mais altas do que deveriam.',
          },
          {
            title: 'Ferramentas certas para limpar',
            description:
              'Ar comprimido em spray, pincel macio e um pano seco são suficientes na maioria dos casos. Aspiradores comuns devem ser evitados diretamente nos componentes, pelo risco de gerar eletricidade estática.',
          },
          {
            title: 'Frequência recomendada',
            description:
              'Em ambientes normais, uma limpeza a cada 3 a 6 meses já ajuda bastante; em ambientes com muita poeira (obras, tapetes, animais), o ideal é limpar com mais frequência.',
          },
        ],
        activity: {
          title: 'Planejando uma limpeza segura',
          steps: [
            'Desligue e desconecte o computador da tomada antes de qualquer limpeza.',
            'Use ar comprimido para soprar a poeira dos coolers e ventoinhas, segurando a hélice para não girar em falso.',
            'Use um pincel macio para remover poeira mais presa em cantos e dissipadores.',
          ],
        },
        quiz: {
          question: 'Por que aspiradores de pó comuns não devem ser usados diretamente sobre componentes eletrônicos?',
          options: [
            'Porque eles são silenciosos demais',
            'Porque podem gerar eletricidade estática e danificar componentes sensíveis',
            'Porque eles aumentam a temperatura dos componentes',
            'Porque eles não conseguem remover poeira de jeito nenhum',
          ],
          answer: 1,
          explanation:
            'Aspiradores comuns podem gerar eletricidade estática ao passar perto de componentes eletrônicos, representando risco de dano. Ar comprimido e pincel são as ferramentas recomendadas para essa limpeza.',
        },
        reference: {
          label: 'Intel — Cuidados de manutenção de PC',
          href: 'https://www.intel.com/content/www/us/en/gaming/resources/pc-cooling-guide.html',
        },
      },
      {
        slug: 'pasta-termica-quando-e-como-trocar',
        video: { youtubeId: 'DKt_WLEWluc', title: 'COMO TROCAR A PASTA TÉRMICA DO PROCESSADOR | passo a passo para limpeza e reaplicação' },
        title: 'Pasta térmica: quando e como trocar',
        duration: '35 min',
        summary:
          'A pasta térmica ajuda a transferir o calor do processador para o cooler. Com o tempo, ela perde eficiência e precisa ser substituída — um procedimento simples que pode resolver boa parte dos problemas de superaquecimento.',
        objectives: [
          'Reconhecer sinais de que a pasta térmica precisa ser trocada.',
          'Aplicar corretamente uma nova camada de pasta térmica no processador.',
        ],
        keyPoints: [
          {
            title: 'Sinais de que é hora de trocar',
            description:
              'Temperaturas mais altas que o normal em uso comum, o cooler trabalhando em rotações mais altas com mais frequência, ou já ter passado bastante tempo (geralmente alguns anos) desde a última aplicação.',
          },
          {
            title: 'Removendo a pasta antiga',
            description:
              'Com o cooler removido, a pasta antiga (que pode estar ressecada) deve ser limpa com álcool isopropílico e um pano sem fiapos, tanto do processador quanto da base do cooler.',
          },
          {
            title: 'Aplicando a nova pasta',
            description:
              'Uma pequena quantidade (do tamanho de um grão de arroz ou uma gota, dependendo do modelo do processador) já é suficiente — o próprio cooler, ao ser pressionado, espalha a pasta uniformemente.',
          },
        ],
        activity: {
          title: 'Planejando a troca de pasta térmica',
          steps: [
            'Verifique se algum computador que você usa apresenta sinais de superaquecimento.',
            'Separe pasta térmica nova e álcool isopropílico com um pano sem fiapos.',
            'Anote, em ordem, os passos que você seguiria: desligar, remover cooler, limpar pasta antiga, aplicar nova pasta, reinstalar cooler.',
          ],
        },
        quiz: {
          question: 'Qual é um sinal comum de que a pasta térmica de um processador precisa ser trocada?',
          options: [
            'O computador liga mais rápido do que o normal',
            'As temperaturas do processador ficam mais altas que o normal e o cooler trabalha em rotações mais altas com frequência',
            'O teclado para de responder',
            'A tela fica com mais brilho',
          ],
          answer: 1,
          explanation:
            'Quando a pasta térmica perde eficiência, o calor é transferido de forma menos eficaz do processador para o cooler, resultando em temperaturas mais altas e o cooler trabalhando mais para compensar.',
        },
        reference: {
          label: 'AMD — Cuidados com resfriamento de processadores',
          href: 'https://www.amd.com/en/support',
        },
      },
      {
        slug: 'monitorando-temperatura-e-desempenho',
        video: { youtubeId: 'LnRKVao5K2s', title: 'O Melhor Programa para Monitorar a TEMPERATURA DO SEU COMPUTADOR | HWMonitor' },
        title: 'Monitorando temperatura e desempenho com softwares',
        duration: '30 min',
        summary:
          'Softwares gratuitos de monitoramento mostram, em tempo real, a temperatura de cada componente e o quanto eles estão sendo usados — informações essenciais para identificar problemas antes que eles causem danos.',
        objectives: [
          'Reconhecer a utilidade de softwares de monitoramento de temperatura e desempenho.',
          'Interpretar informações básicas de temperatura mostradas por esses programas.',
        ],
        keyPoints: [
          {
            title: 'Por que monitorar',
            description:
              'Acompanhar a temperatura do processador e da placa de vídeo ajuda a identificar problemas de resfriamento antes que causem desligamentos, travamentos ou danos permanentes às peças.',
          },
          {
            title: 'Softwares comuns',
            description:
              'Programas como HWMonitor mostram temperatura, uso e velocidade de rotação dos coolers de cada componente, de forma gratuita e sem precisar de conhecimento avançado para interpretar.',
          },
          {
            title: 'Temperaturas de referência',
            description:
              'Embora variem por modelo, processadores em uso comum costumam ficar bem abaixo de 80°C; temperaturas consistentemente mais altas que isso geralmente indicam um problema de resfriamento a ser investigado.',
          },
        ],
        activity: {
          title: 'Explorando um software de monitoramento',
          steps: [
            'Pesquise e baixe (em um computador de confiança) um software gratuito de monitoramento de temperatura.',
            'Abra o programa e identifique a temperatura atual do processador.',
            'Compare esse valor com as referências de temperatura normal para o modelo do processador.',
          ],
        },
        quiz: {
          question: 'Qual é a principal utilidade de um software como o HWMonitor?',
          options: [
            'Instalar programas automaticamente',
            'Mostrar em tempo real a temperatura e o uso dos componentes do computador',
            'Aumentar a velocidade da internet',
            'Trocar a pasta térmica automaticamente',
          ],
          answer: 1,
          explanation:
            'Softwares de monitoramento como o HWMonitor exibem informações em tempo real, como temperatura e uso de processador, placa de vídeo e outros componentes, ajudando a identificar problemas de resfriamento.',
        },
        reference: {
          label: 'Intel — Monitoramento de desempenho de CPU',
          href: 'https://www.intel.com/content/www/us/en/support/articles/000056694/processors.html',
        },
      },
    ],
  },
  {
    slug: 'diagnostico-de-problemas-comuns',
    title: 'Diagnóstico de Problemas Comuns',
    description:
      'Aprenda um passo a passo lógico para identificar a causa de problemas frequentes: computador que não liga, travamentos e peças com defeito.',
    lessons: [
      {
        slug: 'computador-nao-liga',
        video: { youtubeId: 'aPVe56noO5M', title: 'PC Não Liga O que fazer? PASSO a PASSO Rápido! Como resolver (ATUALIZADO 2024)' },
        title: 'Computador não liga: passo a passo de diagnóstico',
        duration: '35 min',
        summary:
          'Um computador que não liga pode ter várias causas diferentes, da mais simples (cabo solto) à mais complexa (peça com defeito). Seguir um passo a passo lógico evita trocar peças por tentativa e erro.',
        objectives: [
          'Aplicar um roteiro básico de diagnóstico para um computador que não liga.',
          'Identificar as causas mais comuns desse problema.',
        ],
        keyPoints: [
          {
            title: 'Comece pelo mais simples',
            description:
              'Conferir se o cabo de força está bem conectado, se a tomada funciona e se o botão da fonte (quando existe) está ligado resolve boa parte dos casos antes de abrir o gabinete.',
          },
          {
            title: 'Sinais dentro do gabinete',
            description:
              'Se o cooler gira e há luzes acesas mas não há imagem no monitor, o problema pode estar na memória RAM, na placa de vídeo ou nas conexões de vídeo. Se nada liga, o suspeito comum é a fonte de alimentação.',
          },
          {
            title: 'Testando por eliminação',
            description:
              'Reconectar um componente de cada vez (memória, placa de vídeo) e testar com o mínimo de peças possível ajuda a isolar qual peça específica está causando o problema.',
          },
        ],
        activity: {
          title: 'Montando seu roteiro de diagnóstico',
          steps: [
            'Liste, em ordem, os primeiros itens simples que você conferiria em um computador que não liga (cabo, tomada, botão da fonte).',
            'Descreva o que verificar se o computador liga (luzes, cooler) mas não mostra imagem.',
            'Explique como testar com o mínimo de componentes para isolar o problema.',
          ],
        },
        quiz: {
          question: 'Qual deve ser o primeiro passo ao diagnosticar um computador que não liga?',
          options: [
            'Trocar imediatamente a placa-mãe',
            'Conferir os itens mais simples, como conexão do cabo de força, tomada e botão da fonte',
            'Formatar o sistema operacional',
            'Comprar um computador novo',
          ],
          answer: 1,
          explanation:
            'A maioria dos diagnósticos deve começar pelos itens mais simples e baratos de verificar — cabo de força, tomada e botão da fonte — antes de suspeitar de peças internas com defeito.',
        },
        reference: {
          label: 'Intel — Solução de problemas de hardware',
          href: 'https://www.intel.com/content/www/us/en/support.html',
        },
      },
      {
        slug: 'travamentos-telas-azuis-e-reinicializacoes',
        video: { youtubeId: 'U16vUc-sj8s', title: 'Tela azul no Windows Como Resolver? TUTORIAL Fácil e Rápido (Atualizado 2024)' },
        title: 'Travamentos, telas azuis e reinicializações aleatórias',
        duration: '35 min',
        summary:
          'Travamentos, telas azuis (BSOD) e reinícios sem aviso costumam ter causas em comum: superaquecimento, memória com defeito, drivers desatualizados ou uma fonte de alimentação insuficiente. Saber diferenciá-las agiliza o conserto.',
        objectives: [
          'Reconhecer as causas mais comuns de travamentos e telas azuis.',
          'Relacionar cada sintoma a possíveis causas de hardware ou software.',
        ],
        keyPoints: [
          {
            title: 'Superaquecimento',
            description:
              'Travamentos que acontecem mais durante tarefas pesadas (jogos, edição de vídeo) costumam apontar para temperatura alta — vale conferir com um software de monitoramento antes de suspeitar de outra causa.',
          },
          {
            title: 'Memória RAM com defeito',
            description:
              'Telas azuis aleatórias, mesmo em tarefas leves, são um sintoma clássico de memória RAM com problema, e podem ser confirmadas com um teste de memória (assunto da próxima aula).',
          },
          {
            title: 'Drivers e fonte insuficiente',
            description:
              'Drivers desatualizados ou corrompidos (principalmente de placa de vídeo) e uma fonte de alimentação fraca para os componentes instalados também são causas comuns de instabilidade.',
          },
        ],
        activity: {
          title: 'Investigando sintomas de instabilidade',
          steps: [
            'Anote em quais situações um computador trava ou reinicia (jogos pesados, uso leve, aleatoriamente).',
            'Relacione cada situação a uma possível causa: temperatura, memória, drivers ou fonte.',
            'Liste o que você verificaria primeiro para cada uma dessas possíveis causas.',
          ],
        },
        quiz: {
          question: 'Telas azuis aleatórias que acontecem mesmo em tarefas leves são um sintoma clássico de qual problema?',
          options: [
            'Tela do monitor suja',
            'Memória RAM com defeito',
            'Excesso de programas instalados',
            'Falta de espaço na área de trabalho',
          ],
          answer: 1,
          explanation:
            'Telas azuis aleatórias, especialmente em tarefas leves e sem padrão aparente, são um sintoma clássico de memória RAM com defeito, que pode ser confirmado com um teste específico de memória.',
        },
        reference: {
          label: 'Microsoft — Solucionar problemas de tela azul',
          href: 'https://support.microsoft.com/pt-br/windows/solu%C3%A7%C3%A3o-de-problemas-de-tela-azul',
        },
      },
      {
        slug: 'testando-pecas-com-defeito',
        video: { youtubeId: 'khWzzNq-ioc', title: 'Como saber se sua MEMÓRIA RAM está com defeito? Teste agora com MemTest86!' },
        title: 'Testando e identificando peças com defeito (RAM, HD/SSD, fonte)',
        duration: '40 min',
        summary:
          'Depois de suspeitar de uma peça específica, existem ferramentas gratuitas que ajudam a confirmar (ou descartar) esse defeito com mais segurança, em vez de comprar uma peça nova por tentativa.',
        objectives: [
          'Usar uma ferramenta de teste de memória RAM para identificar defeitos.',
          'Reconhecer formas básicas de testar HD/SSD e a fonte de alimentação.',
        ],
        keyPoints: [
          {
            title: 'Testando a memória RAM',
            description:
              'Programas como o Memtest86 rodam um teste intensivo, fora do sistema operacional, que percorre toda a memória em busca de erros — se algum erro aparecer, é um forte indício de módulo de RAM com defeito.',
          },
          {
            title: 'Testando HD/SSD',
            description:
              'A maioria dos fabricantes oferece um utilitário próprio de diagnóstico que verifica a saúde do disco (setores defeituosos, S.M.A.R.T.), ajudando a decidir se vale a pena continuar usando aquele armazenamento.',
          },
          {
            title: 'Testando a fonte',
            description:
              'Um teste simples é substituir temporariamente por outra fonte já conhecida como boa; sem isso, sinais como desligamentos aleatórios sob carga são um indício comum de fonte insuficiente ou com defeito.',
          },
        ],
        activity: {
          title: 'Planejando testes de diagnóstico',
          steps: [
            'Pesquise como criar um pendrive bootável com o Memtest86.',
            'Pesquise o nome do utilitário de diagnóstico do fabricante de um SSD ou HD específico.',
            'Escreva como você testaria a suspeita de uma fonte com defeito, mesmo sem ter outra fonte disponível.',
          ],
        },
        quiz: {
          question: 'Para que serve um programa como o Memtest86?',
          options: [
            'Para aumentar a velocidade da memória RAM permanentemente',
            'Para rodar um teste intensivo que percorre a memória RAM em busca de erros e possíveis defeitos',
            'Para instalar o sistema operacional',
            'Para limpar arquivos temporários do Windows',
          ],
          answer: 1,
          explanation:
            'O Memtest86 é uma ferramenta gratuita que testa exaustivamente os módulos de memória RAM fora do sistema operacional, ajudando a confirmar se existe um defeito real na memória.',
        },
        reference: {
          label: 'Crucial — Diagnóstico de memória e armazenamento',
          href: 'https://www.crucial.com/support',
        },
      },
    ],
  },
  {
    slug: 'notebooks-peculiaridades-e-manutencao',
    title: 'Notebooks: Peculiaridades e Manutenção',
    description:
      'Veja o que muda na manutenção de notebooks em relação aos desktops: como abrir com segurança, trocar peças e cuidar do resfriamento.',
    lessons: [
      {
        slug: 'como-abrir-um-notebook-com-seguranca',
        video: { youtubeId: 'w-xERTqLllg', title: 'Como abrir qualquer notebook! Dicas e procedimentos.' },
        title: 'Como abrir um notebook com segurança',
        duration: '35 min',
        summary:
          'Notebooks são bem mais delicados que desktops: encaixes plásticos, parafusos escondidos e cabos flexíveis exigem mais cuidado. Aprender a abrir a tampa inferior corretamente evita quebrar travas e conectores.',
        objectives: [
          'Reconhecer os cuidados específicos ao abrir um notebook, em comparação a um desktop.',
          'Aplicar um procedimento seguro para remover a tampa inferior de um notebook.',
        ],
        keyPoints: [
          {
            title: 'Parafusos escondidos',
            description:
              'Muitos notebooks escondem parafusos sob a bateria, os "pés" de borracha ou etiquetas — vale pesquisar o modelo específico antes de começar, para não forçar a tampa com parafusos ainda presos.',
          },
          {
            title: 'Ferramentas de abertura plástica',
            description:
              'Uma espátula plástica (ou um cartão resistente) ajuda a soltar as travas da tampa sem arranhar ou quebrar o encaixe, que costuma ser mais frágil que o de um gabinete de desktop.',
          },
          {
            title: 'Cuidado com cabos flexíveis (flat cables)',
            description:
              'Ao remover a tampa ou peças internas, é comum encontrar cabos flexíveis finos conectando teclado, touchpad e outras partes — eles se soltam com pouca força e não devem ser puxados bruscamente.',
          },
        ],
        activity: {
          title: 'Preparando a abertura de um notebook',
          steps: [
            'Pesquise, para um modelo específico de notebook, onde ficam os parafusos escondidos (sob bateria, pés ou etiquetas).',
            'Reúna uma espátula plástica ou cartão resistente para soltar as travas da tampa.',
            'Anote o cuidado que você teria ao encontrar um cabo flexível durante a abertura.',
          ],
        },
        quiz: {
          question: 'Por que é recomendável usar uma espátula plástica (em vez de uma chave de metal) para abrir a tampa de um notebook?',
          options: [
            'Porque é mais rápido',
            'Porque reduz o risco de arranhar ou quebrar as travas plásticas mais frágeis do notebook',
            'Porque a espátula plástica conduz eletricidade estática melhor',
            'Porque isso é apenas uma questão estética',
          ],
          answer: 1,
          explanation:
            'As travas plásticas de um notebook são mais frágeis que as de um gabinete de desktop, e uma ferramenta plástica reduz o risco de quebrá-las ou arranhar a carcaça durante a abertura.',
        },
        reference: {
          label: 'iFixit — Guias de reparo de notebooks',
          href: 'https://www.ifixit.com/Device/Laptop',
        },
      },
      {
        slug: 'trocando-ram-ssd-e-hd-em-notebooks',
        video: { youtubeId: 'K6zwQ1s4wDE', title: 'Como trocar HD/ colocar SSD e memória RAM em notebook' },
        title: 'Trocando RAM, SSD e HD em notebooks',
        duration: '40 min',
        summary:
          'Depois de abrir a tampa inferior, trocar memória RAM e armazenamento em um notebook segue uma lógica parecida com a de um desktop, mas em um espaço bem mais apertado e com peças menores.',
        objectives: [
          'Identificar os módulos de memória RAM e o armazenamento dentro de um notebook.',
          'Substituir corretamente memória RAM e armazenamento (SSD/HD) em um notebook.',
        ],
        keyPoints: [
          {
            title: 'Memória RAM em notebook (SO-DIMM)',
            description:
              'Os módulos de memória de notebook são fisicamente menores (SO-DIMM) que os de desktop e costumam ficar presos por pequenas travas laterais que precisam ser abertas antes de o módulo ser retirado.',
          },
          {
            title: 'Armazenamento: SATA 2,5" x M.2',
            description:
              'Notebooks mais antigos usam HD ou SSD no formato 2,5 polegadas, preso por parafusos e conectado por cabo; modelos mais novos usam SSD M.2, encaixado direto na placa, sem cabos.',
          },
          {
            title: 'Compatibilidade antes de comprar',
            description:
              'Como no desktop, é preciso conferir o tipo de memória (DDR4/DDR5) e o tipo de slot de armazenamento (SATA 2,5" ou M.2) suportados pelo modelo exato do notebook antes de comprar a peça de upgrade.',
          },
        ],
        activity: {
          title: 'Planejando um upgrade de notebook',
          steps: [
            'Pesquise, para um modelo específico de notebook, se ele usa memória SO-DIMM e quantos slots tem.',
            'Descubra se o armazenamento desse modelo é SATA 2,5", M.2, ou os dois.',
            'Escreva o passo a passo que você seguiria para trocar a memória RAM desse notebook.',
          ],
        },
        quiz: {
          question: 'Qual é a principal diferença entre a memória RAM de um notebook e a de um desktop?',
          options: [
            'Não existe diferença nenhuma',
            'A memória de notebook (SO-DIMM) é fisicamente menor que a de desktop (DIMM)',
            'A memória de notebook não pode ser trocada nunca',
            'A memória de notebook funciona apenas com processadores AMD',
          ],
          answer: 1,
          explanation:
            'Notebooks usam módulos de memória SO-DIMM, fisicamente menores que os módulos DIMM usados em desktops, adaptados ao espaço interno reduzido do equipamento.',
        },
        reference: {
          label: 'Crucial — Upgrade de memória e SSD para notebooks',
          href: 'https://www.crucial.com/support',
        },
      },
      {
        slug: 'limpeza-de-cooler-e-pasta-termica-em-notebooks',
        video: { youtubeId: 'BYPez5n_BdU', title: 'Limpeza do COOLER e TROCA da PASTA TÉRMICA do notebook' },
        title: 'Limpeza de cooler e troca de pasta térmica em notebooks',
        duration: '35 min',
        summary:
          'O espaço reduzido dentro de um notebook faz com que poeira acumulada tenha um efeito ainda maior na temperatura do que em um desktop — por isso, limpar o cooler e trocar a pasta térmica periodicamente é ainda mais importante.',
        objectives: [
          'Reconhecer sinais de que um notebook precisa de limpeza interna ou troca de pasta térmica.',
          'Descrever o processo de limpeza do cooler e troca de pasta térmica em um notebook.',
        ],
        keyPoints: [
          {
            title: 'Sintomas comuns em notebooks',
            description:
              'Barulho constante do cooler em rotação máxima, a carcaça esquentando muito mesmo em tarefas leves, e desligamentos por superaquecimento são sinais de que a limpeza está atrasada.',
          },
          {
            title: 'Removendo o conjunto do cooler',
            description:
              'Diferente do desktop, o cooler do notebook costuma ser removido junto com o dissipador (a peça metálica que encosta no processador), presos por vários parafusos pequenos que devem ser soltos em ordem específica.',
          },
          {
            title: 'Aplicando a nova pasta térmica',
            description:
              'Assim como no desktop, uma quantidade pequena e bem distribuída é suficiente — só que, no notebook, o espaço apertado exige ainda mais cuidado para não sujar outros componentes ao redor.',
          },
        ],
        activity: {
          title: 'Avaliando a necessidade de manutenção',
          steps: [
            'Observe (ou pesquise relatos) sobre o barulho do cooler de um notebook em uso comum.',
            'Verifique se a carcaça do notebook esquenta de forma incomum mesmo em tarefas leves.',
            'Anote os passos, em ordem, que seriam necessários para remover o conjunto de cooler e dissipador desse notebook.',
          ],
        },
        quiz: {
          question: 'Por que o acúmulo de poeira tende a afetar ainda mais a temperatura em notebooks do que em desktops?',
          options: [
            'Porque notebooks não têm cooler',
            'Porque o espaço interno reduzido do notebook faz a poeira acumulada ter um efeito proporcionalmente maior na ventilação',
            'Porque notebooks não geram calor',
            'Porque a poeira não afeta notebooks, apenas desktops',
          ],
          answer: 1,
          explanation:
            'O espaço interno reduzido de um notebook significa que a mesma quantidade de poeira acumulada tem um impacto proporcionalmente maior na passagem de ar do que em um gabinete de desktop, com muito mais espaço livre.',
        },
        reference: {
          label: 'iFixit — Manutenção térmica de notebooks',
          href: 'https://www.ifixit.com/Device/Laptop',
        },
      },
    ],
  },
  {
    slug: 'upgrade-e-otimizacao',
    title: 'Upgrade e Otimização',
    description:
      'Decida quando vale a pena fazer upgrade em vez de trocar o computador inteiro, e aprenda a otimizar o Windows para melhorar o desempenho.',
    lessons: [
      {
        slug: 'upgrade-ou-trocar-de-computador',
        video: { youtubeId: 'cfnFD520f-I', title: 'VALE A PENA FAZER UPGRADE EM PC ANTIGO?' },
        title: 'Quando vale a pena fazer upgrade x trocar o computador',
        duration: '30 min',
        summary:
          'Nem sempre um computador lento precisa ser substituído por um novo — muitas vezes, um upgrade pontual (mais memória, um SSD) resolve o problema por uma fração do preço de um computador novo.',
        objectives: [
          'Avaliar quando um upgrade pontual resolve um problema de desempenho.',
          'Reconhecer situações em que trocar o computador inteiro faz mais sentido.',
        ],
        keyPoints: [
          {
            title: 'Quando o upgrade compensa',
            description:
              'Se o gargalo é uma peça específica identificável (pouca memória RAM, HD mecânico antigo) e o restante do computador (processador, placa-mãe) ainda atende à necessidade, um upgrade pontual costuma ter ótimo custo-benefício.',
          },
          {
            title: 'Quando trocar o computador todo',
            description:
              'Se o processador ou a placa-mãe estão muito ultrapassados (sem suporte a componentes modernos, ou já no limite de upgrade possível), o custo de tentar atualizar peça por peça pode superar o de um computador novo.',
          },
          {
            title: 'Avaliando o uso real',
            description:
              'Antes de decidir, vale entender para que o computador é usado no dia a dia — tarefas leves (navegação, texto) se beneficiam menos de upgrades pesados do que tarefas exigentes (edição de vídeo, jogos).',
          },
        ],
        activity: {
          title: 'Avaliando um caso de upgrade',
          steps: [
            'Escolha um computador (seu ou de alguém que você conhece) que pareça lento.',
            'Identifique se o gargalo é memória, armazenamento ou processador.',
            'Decida, com base nisso, se um upgrade pontual resolveria ou se a troca completa faria mais sentido.',
          ],
        },
        quiz: {
          question: 'Em qual situação um upgrade pontual costuma ter melhor custo-benefício do que trocar o computador inteiro?',
          options: [
            'Quando o processador e a placa-mãe já estão totalmente ultrapassados',
            'Quando existe um gargalo específico identificável, como pouca memória RAM ou um HD mecânico antigo, com o restante do sistema ainda atendendo à necessidade',
            'Sempre, em qualquer situação',
            'Nunca, é sempre melhor comprar um computador novo',
          ],
          answer: 1,
          explanation:
            'Quando o problema de desempenho está concentrado em uma peça específica e o restante do sistema ainda é adequado, um upgrade pontual resolve o gargalo por um custo bem menor do que trocar o computador inteiro.',
        },
        reference: {
          label: 'Crucial — Guia de upgrade de PC',
          href: 'https://www.crucial.com/support',
        },
      },
      {
        slug: 'upgrade-de-ram-e-migracao-para-ssd',
        video: { youtubeId: 'qmv5_zjlkEk', title: 'SSD Melhora o desempenho do Notebook ou PC mais Antigo ??? Upgrade de HD para SSD !!!' },
        title: 'Upgrade de RAM e migração para SSD (ganho de performance)',
        duration: '35 min',
        summary:
          'Aumentar a memória RAM e migrar de HD para SSD estão entre os upgrades mais baratos e com maior impacto percebido no dia a dia, especialmente em computadores mais antigos.',
        objectives: [
          'Explicar por que memória RAM insuficiente e um HD mecânico costumam ser os maiores gargalos em PCs antigos.',
          'Descrever o processo geral de migração do sistema de um HD para um SSD.',
        ],
        keyPoints: [
          {
            title: 'Por que a RAM insuficiente trava o sistema',
            description:
              'Quando a memória RAM disponível não é suficiente para os programas abertos, o sistema passa a usar o disco como memória "de apoio" (memória virtual), muito mais lento, causando lentidão perceptível.',
          },
          {
            title: 'Por que trocar HD por SSD faz tanta diferença',
            description:
              'O HD mecânico é, de longe, o componente mais lento em um computador antigo; substituí-lo por um SSD costuma reduzir drasticamente o tempo de abertura do sistema e dos programas.',
          },
          {
            title: 'Migrando sem perder dados',
            description:
              'Programas de clonagem de disco copiam todo o conteúdo do HD (incluindo o sistema operacional) diretamente para o SSD, permitindo continuar usando o computador normalmente sem reinstalar tudo do zero.',
          },
        ],
        activity: {
          title: 'Planejando um upgrade de baixo custo',
          steps: [
            'Verifique quanta memória RAM um computador lento possui atualmente.',
            'Verifique se esse computador ainda usa um HD mecânico como armazenamento principal.',
            'Pesquise o preço de um upgrade de memória e de um SSD de capacidade parecida com o HD atual.',
          ],
        },
        quiz: {
          question: 'Por que substituir um HD mecânico por um SSD costuma trazer um ganho de desempenho tão perceptível?',
          options: [
            'Porque o SSD tem uma cor diferente',
            'Porque o HD mecânico costuma ser, de longe, o componente mais lento de um computador antigo, e o SSD é muito mais rápido',
            'Porque o SSD aumenta automaticamente a quantidade de memória RAM',
            'Porque isso não traz nenhum ganho real de desempenho',
          ],
          answer: 1,
          explanation:
            'Em computadores mais antigos, o HD mecânico costuma ser o maior gargalo de desempenho. Substituí-lo por um SSD, muito mais rápido para ler e escrever dados, traz um dos ganhos mais perceptíveis entre os upgrades possíveis.',
        },
        reference: {
          label: 'Western Digital — Migração de HD para SSD',
          href: 'https://www.westerndigital.com/pt-br/solutions/ssd',
        },
      },
      {
        slug: 'otimizando-o-windows',
        video: { youtubeId: 'Xa5kLOdB5iw', title: 'Como OTIMIZAR o Windows 10 e aumentar a PERFORMANCE | TUTORIAL ATUALIZADO 2023' },
        title: 'Otimizando o Windows para melhor desempenho',
        duration: '30 min',
        summary:
          'Além de upgrades de hardware, ajustes simples de software também ajudam a deixar o Windows mais responsivo — especialmente em computadores com hardware mais limitado.',
        objectives: [
          'Identificar ajustes simples de software que melhoram o desempenho do Windows.',
          'Reconhecer programas que podem estar consumindo recursos desnecessariamente.',
        ],
        keyPoints: [
          {
            title: 'Programas de inicialização',
            description:
              'Muitos programas se configuram para abrir automaticamente junto com o Windows, consumindo memória e processamento mesmo sem serem usados no momento — desativar os desnecessários acelera a inicialização e o uso geral.',
          },
          {
            title: 'Efeitos visuais',
            description:
              'Reduzir efeitos visuais e animações do Windows libera um pouco de processamento gráfico, o que pode fazer diferença perceptível em computadores mais limitados.',
          },
          {
            title: 'Atualizações e espaço em disco',
            description:
              'Manter o sistema atualizado e liberar espaço em disco (removendo arquivos temporários e programas não usados) também contribui para manter o desempenho ao longo do tempo.',
          },
        ],
        activity: {
          title: 'Fazendo uma limpeza de otimização',
          steps: [
            'Verifique quais programas estão configurados para abrir junto com o Windows e desative os que não são necessários.',
            'Reduza os efeitos visuais do Windows nas configurações de desempenho.',
            'Use a ferramenta de limpeza de disco do Windows para remover arquivos temporários desnecessários.',
          ],
        },
        quiz: {
          question: 'Por que desativar programas desnecessários da inicialização do Windows ajuda no desempenho?',
          options: [
            'Porque isso apaga arquivos pessoais automaticamente',
            'Porque programas de inicialização consomem memória e processamento mesmo sem estarem sendo usados no momento',
            'Porque isso aumenta a velocidade da internet',
            'Porque isso não tem nenhum efeito real',
          ],
          answer: 1,
          explanation:
            'Programas configurados para abrir junto com o Windows consomem recursos do sistema (memória, processamento) mesmo quando não estão em uso ativo, e desativar os desnecessários libera esses recursos.',
        },
        reference: {
          label: 'Microsoft — Melhorar o desempenho do Windows',
          href: 'https://support.microsoft.com/pt-br/windows/dicas-para-melhorar-o-desempenho-do-pc',
        },
      },
    ],
  },
  {
    slug: 'projeto-pratico-e-boas-praticas',
    title: 'Projeto Prático e Boas Práticas Profissionais',
    description:
      'Aplique tudo o que foi aprendido em um checklist profissional de manutenção preventiva, entenda a importância do backup e dê os primeiros passos para atender clientes.',
    lessons: [
      {
        slug: 'checklist-de-manutencao-preventiva',
        video: { youtubeId: 'gMPLpcQvz6g', title: 'CheckList para realizar Manutenção Preventiva de Computadores' },
        title: 'Roteiro completo de manutenção preventiva (checklist profissional)',
        duration: '35 min',
        summary:
          'Reunindo tudo o que foi visto no curso, um checklist organizado transforma a manutenção preventiva em um processo repetível e profissional, sem esquecer nenhuma etapa importante.',
        objectives: [
          'Montar um checklist completo de manutenção preventiva.',
          'Organizar as etapas do checklist na ordem mais segura de execução.',
        ],
        keyPoints: [
          {
            title: 'Etapas externas primeiro',
            description:
              'Verificar cabos, ventilação e limpeza externa antes mesmo de abrir o gabinete evita esquecer verificações simples que resolvem boa parte dos problemas.',
          },
          {
            title: 'Etapas internas',
            description:
              'Limpeza de poeira, verificação de coolers, checagem da pasta térmica e organização de cabos formam o núcleo da manutenção interna, sempre feitas com o computador desligado e desconectado.',
          },
          {
            title: 'Etapas de software',
            description:
              'Verificar atualizações do sistema, espaço em disco disponível e monitorar temperaturas após a manutenção fecham o checklist, confirmando que tudo está funcionando corretamente.',
          },
        ],
        activity: {
          title: 'Criando seu checklist de manutenção',
          steps: [
            'Liste as etapas externas que você faria antes de abrir o computador.',
            'Liste as etapas internas: limpeza, coolers, pasta térmica e cabos.',
            'Liste as etapas finais de software: atualizações, espaço em disco e verificação de temperatura.',
          ],
        },
        quiz: {
          question: 'Por que é recomendável organizar a manutenção preventiva em um checklist com etapas em ordem?',
          options: [
            'Porque isso é apenas uma formalidade sem utilidade prática',
            'Porque um checklist organizado evita esquecer etapas importantes e torna o processo repetível',
            'Porque isso é exigido por lei',
            'Porque isso substitui a necessidade de ferramentas',
          ],
          answer: 1,
          explanation:
            'Um checklist organizado garante que nenhuma etapa importante seja esquecida e torna a manutenção um processo repetível e consistente, característica de um trabalho profissional.',
        },
        reference: {
          label: 'Intel — Boas práticas de manutenção de PC',
          href: 'https://www.intel.com/content/www/us/en/gaming/resources/pc-cooling-guide.html',
        },
      },
      {
        slug: 'backup-de-dados-antes-da-manutencao',
        video: { youtubeId: 'cyB4OB1oBAI', title: 'COMO FAZER BACKUP COMPLETO DO COMPUTADOR (Simples e Fácil)' },
        title: 'Backup de dados antes de qualquer manutenção',
        duration: '30 min',
        summary:
          'Antes de qualquer manutenção que envolva risco de perda de dados — como formatar, trocar armazenamento ou até abrir o gabinete — fazer backup dos arquivos importantes é um passo que nunca deve ser pulado.',
        objectives: [
          'Explicar por que o backup deve ser feito antes de qualquer manutenção com risco de perda de dados.',
          'Descrever formas simples de fazer backup de arquivos importantes.',
        ],
        keyPoints: [
          {
            title: 'Por que o backup vem primeiro',
            description:
              'Mesmo procedimentos simples podem, em casos raros, resultar em perda de dados (queda de energia durante uma cópia, defeito inesperado em um disco). Ter um backup elimina o risco de perda irreversível.',
          },
          {
            title: 'Onde guardar o backup',
            description:
              'Um HD externo, um pendrive de boa capacidade ou serviços de armazenamento em nuvem são opções simples e acessíveis para guardar uma cópia dos arquivos mais importantes antes de qualquer manutenção.',
          },
          {
            title: 'O que priorizar no backup',
            description:
              'Documentos pessoais, fotos, vídeos e configurações de programas importantes devem vir antes de arquivos que podem ser baixados novamente, como instaladores de programas.',
          },
        ],
        activity: {
          title: 'Fazendo seu primeiro backup',
          steps: [
            'Liste as pastas e arquivos mais importantes de um computador (documentos, fotos, vídeos).',
            'Escolha um destino de backup: HD externo, pendrive ou nuvem.',
            'Copie (ou simule o processo) esses arquivos para o destino escolhido antes de qualquer manutenção.',
          ],
        },
        quiz: {
          question: 'Por que é recomendável fazer backup antes de qualquer manutenção que envolva risco, mesmo em procedimentos considerados simples?',
          options: [
            'Porque backups são obrigatórios por lei',
            'Porque mesmo procedimentos simples podem, em casos raros, resultar em perda de dados, e o backup elimina esse risco',
            'Porque isso deixa o computador mais rápido',
            'Porque isso substitui a necessidade de manutenção',
          ],
          answer: 1,
          explanation:
            'Mesmo manutenções consideradas simples carregam algum risco de perda de dados em situações imprevistas. Ter um backup garante que os arquivos importantes estejam seguros, independentemente do que aconteça durante a manutenção.',
        },
        reference: {
          label: 'Microsoft — Fazer backup de arquivos no Windows',
          href: 'https://support.microsoft.com/pt-br/windows/fazer-backup-dos-seus-arquivos-do-windows',
        },
      },
      {
        slug: 'orcamento-e-atendimento-ao-cliente',
        video: { youtubeId: 'fwo7x6i9RiQ', title: '10 dicas para montar um orçamento para seu cliente' },
        title: 'Montando um orçamento e atendendo um cliente (noções básicas)',
        duration: '30 min',
        summary:
          'Para quem pensa em prestar serviços de montagem e manutenção, saber montar um orçamento claro e atender bem o cliente é tão importante quanto o conhecimento técnico em si.',
        objectives: [
          'Reconhecer os itens básicos que devem compor um orçamento de serviço técnico.',
          'Aplicar boas práticas simples de atendimento ao cliente.',
        ],
        keyPoints: [
          {
            title: 'O que incluir no orçamento',
            description:
              'Valor da mão de obra, valor das peças (quando fornecidas pelo próprio técnico), prazo estimado e uma breve descrição do problema e da solução proposta, evitando surpresas para o cliente.',
          },
          {
            title: 'Comunicação clara antes do serviço',
            description:
              'Explicar o problema e a solução em uma linguagem simples, sem jargões técnicos desnecessários, ajuda o cliente a confiar na avaliação e a entender o valor cobrado.',
          },
          {
            title: 'Seguindo até o fim',
            description:
              'Testar o computador na frente do cliente após o serviço, e orientar sobre cuidados básicos futuros, é uma boa prática que gera confiança e fidelização.',
          },
        ],
        activity: {
          title: 'Montando seu primeiro modelo de orçamento',
          steps: [
            'Escolha um serviço fictício, como "troca de pasta térmica e limpeza completa".',
            'Monte um orçamento simples com valor de mão de obra, peças (se houver) e prazo estimado.',
            'Escreva, em poucas frases, como você explicaria esse serviço para um cliente sem conhecimento técnico.',
          ],
        },
        quiz: {
          question: 'Por que é importante explicar o problema e a solução em linguagem simples ao apresentar um orçamento ao cliente?',
          options: [
            'Porque isso é obrigatório por lei',
            'Porque ajuda o cliente a entender e confiar na avaliação, valorizando o serviço prestado',
            'Porque clientes não têm capacidade de entender termos técnicos',
            'Porque isso reduz o valor do serviço',
          ],
          answer: 1,
          explanation:
            'Explicar de forma clara e acessível ajuda o cliente a compreender o problema e a solução proposta, gerando confiança na avaliação técnica e valorizando o serviço prestado.',
        },
        reference: {
          label: 'Sebrae — Como precificar serviços',
          href: 'https://www.sebrae.com.br/sites/PortalSebrae',
        },
      },
    ],
  },
]

export const hardwareCourseLessons = hardwareCourseModules.flatMap((module, moduleIndex) =>
  module.lessons.map((lesson, lessonIndex) => ({
    ...lesson,
    module,
    moduleIndex,
    lessonIndex,
  })),
)

export function getHardwareLesson(slug: string) {
  return hardwareCourseLessons.find((lesson) => lesson.slug === slug)
}

export const hardwareCourseStats = {
  modules: hardwareCourseModules.length,
  lessons: hardwareCourseLessons.length,
  workload: '19h',
}
