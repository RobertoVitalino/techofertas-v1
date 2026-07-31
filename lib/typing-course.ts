export type TypingLesson = {
  slug: string
  title: string
  duration: string
  summary: string
  objectives: string[]
  keyPoints: Array<{ title: string; description: string }>
  drill: { text: string; minWpm: number; minAccuracy: number }
  reference: { label: string; href: string }
  video?: { youtubeId: string; title: string }
}

export type TypingModule = {
  slug: string
  title: string
  description: string
  lessons: TypingLesson[]
}

export const typingCourseModules: TypingModule[] = [
  {
    slug: 'introducao-a-digitacao-por-toque',
    title: 'Introdução à Digitação por Toque',
    description:
      'Entenda o que é a digitação por toque, a postura correta e por que não olhar para o teclado faz toda a diferença.',
    lessons: [
      {
        slug: 'o-que-e-digitacao-por-toque',
        video: { youtubeId: 'HEWOhuj2ifw', title: 'Curso de digitação nível 01' },
        title: 'O que é digitação por toque e por que aprender',
        duration: '15 min',
        summary:
          'Digitação por toque é a técnica de escrever no teclado usando todos os dedos, sem precisar olhar para as teclas. Ela existe porque cada dedo cobre uma região fixa do teclado, criando memória muscular que acelera a escrita com o tempo.',
        objectives: [
          'Explicar o que é digitação por toque e em que ela difere de "digitar com dois dedos".',
          'Reconhecer os benefícios de aprender essa técnica.',
        ],
        keyPoints: [
          {
            title: 'O que muda em relação a digitar com dois dedos',
            description:
              'Quem digita só com os indicadores precisa localizar visualmente cada tecla a cada letra. Na digitação por toque, cada dedo cobre sempre as mesmas teclas, e os olhos ficam livres para olhar a tela, não o teclado.',
          },
          {
            title: 'Por que vale a pena aprender',
            description:
              'Depois de dominada, a técnica permite escrever de 2 a 4 vezes mais rápido do que digitando só com os indicadores, com menos erros e menos cansaço nas mãos.',
          },
          {
            title: 'O papel da prática repetida',
            description:
              'Digitação por toque é uma habilidade motora — não se aprende só lendo sobre ela. Por isso, cada aula deste curso tem um exercício prático de digitação com meta de velocidade e precisão.',
          },
        ],
        drill: {
          text: 'fj fj fj jf jf jf fj jf fj jf fjfj jfjf fj jf fj jf fj jf jfjf fjfj',
          minWpm: 5,
          minAccuracy: 80,
        },
        reference: { label: 'Wikipédia — Datilografia', href: 'https://pt.wikipedia.org/wiki/Datilografia' },
      },
      {
        slug: 'postura-e-posicionamento-das-maos',
        video: { youtubeId: 'yKljf8ewKOQ', title: 'Posição correta das mãos no teclado. Punhos, dedos, falanges' },
        title: 'Postura correta e posicionamento das mãos',
        duration: '15 min',
        summary:
          'Antes de ganhar velocidade, é importante posicionar o corpo e as mãos corretamente — isso evita dores por esforço repetitivo no futuro, além de facilitar o aprendizado da técnica.',
        objectives: [
          'Descrever a postura corporal recomendada para digitar.',
          'Posicionar os dedos corretamente sobre a fila do meio do teclado.',
        ],
        keyPoints: [
          {
            title: 'Postura do corpo',
            description:
              'Costas retas apoiadas no encosto da cadeira, pés apoiados no chão, e antebraços praticamente paralelos ao chão, sem apoiar os pulsos com força na mesa enquanto digita.',
          },
          {
            title: 'Dedos na fila do meio',
            description:
              'Os oito dedos (exceto polegares) descansam sobre a fila do meio do teclado — os indicadores ficam nas teclas F e J, que têm uma pequena marcação em relevo para serem encontradas sem olhar.',
          },
          {
            title: 'Polegares na barra de espaço',
            description:
              'Os polegares ficam livres sobre a barra de espaço, geralmente usando o polegar da mão dominante para pressioná-la a cada palavra.',
          },
        ],
        drill: {
          text: 'fj dk fj dk ff jj dd kk fj dk fj dk fdsa jklç fj dk ff jj dd kk fj dk',
          minWpm: 6,
          minAccuracy: 80,
        },
        reference: { label: 'Wikipédia — Ergonomia', href: 'https://pt.wikipedia.org/wiki/Ergonomia' },
      },
      {
        slug: 'o-metodo-cego-sem-olhar-o-teclado',
        video: { youtubeId: '_hQJ-Wd8tsw', title: 'Dicas de digitação para iniciantes' },
        title: 'Não olhe para o teclado: o método cego',
        duration: '15 min',
        summary:
          'Resistir à vontade de olhar para o teclado é o passo mais difícil no início — e também o que mais acelera o aprendizado. Cada vez que os olhos saem da tela, o ritmo se quebra e o cérebro demora mais para memorizar a posição das teclas.',
        objectives: [
          'Explicar por que olhar para o teclado atrapalha o aprendizado da digitação por toque.',
          'Praticar um exercício simples de digitação sem olhar para as mãos.',
        ],
        keyPoints: [
          {
            title: 'Por que os olhos devem ficar na tela',
            description:
              'Olhar para o teclado quebra o ritmo e impede que o cérebro associe cada tecla ao movimento do dedo automaticamente — a memória muscular só se forma quando o dedo "erra e aprende" sozinho.',
          },
          {
            title: 'Errar faz parte do processo',
            description:
              'É normal errar bastante nas primeiras semanas. O importante é continuar sem olhar, corrigindo o erro e seguindo em frente, em vez de voltar o olhar para conferir a tecla.',
          },
          {
            title: 'Praticando um pouco todos os dias',
            description:
              'Sessões curtas e diárias (10 a 15 minutos) formam a memória muscular muito mais rápido do que uma sessão longa e esporádica uma vez por semana.',
          },
        ],
        drill: {
          text: 'asdf jklç asdf jklç fdsa çlkj asdf jklç fdsa çlkj asdf jklç fj dk',
          minWpm: 7,
          minAccuracy: 82,
        },
        reference: { label: 'Wikipédia — Memória muscular', href: 'https://pt.wikipedia.org/wiki/Mem%C3%B3ria_muscular' },
      },
    ],
  },
  {
    slug: 'fila-do-meio-home-row',
    title: 'Fila do Meio (Home Row)',
    description:
      'Domine a fila onde os dedos descansam: A S D F G H J K L Ç. É a base de todo o resto da digitação por toque.',
    lessons: [
      {
        slug: 'dedos-indicadores-f-e-j',
        video: { youtubeId: 'o4IRMNhqEaM', title: 'Pra que serve as linhas das teclas F, J e 5 do teclado? | Digitação' },
        title: 'Os dedos indicadores: F e J',
        duration: '15 min',
        summary:
          'F e J são as teclas-guia da fila do meio: cada uma tem uma pequena marcação em relevo, e é a partir delas que os outros seis dedos se posicionam automaticamente.',
        objectives: [
          'Localizar as teclas F e J pelo relevo, sem olhar para o teclado.',
          'Praticar o retorno constante dos indicadores para F e J.',
        ],
        keyPoints: [
          {
            title: 'A marcação em relevo',
            description:
              'As teclas F e J têm uma pequena linha ou ponto em relevo, sentido pela ponta do dedo. É esse detalhe físico que permite reencontrar a posição correta sem olhar.',
          },
          {
            title: 'Sempre volte para F e J',
            description:
              'Depois de digitar qualquer outra tecla, o indicador correspondente deve voltar para F (mão esquerda) ou J (mão direita) antes do próximo movimento.',
          },
          {
            title: 'Formando o hábito',
            description:
              'Repetir o movimento de ida e volta entre F e J várias vezes seguidas ajuda o cérebro a automatizar essa referência antes de avançar para as outras teclas da fila.',
          },
        ],
        drill: {
          text: 'fff jjj fj fj jf jf ffjj jjff fj jf dj fk fj jf asdf jklç fj jf fdsa',
          minWpm: 8,
          minAccuracy: 85,
        },
        reference: { label: 'Wikipédia — Teclado QWERTY', href: 'https://pt.wikipedia.org/wiki/Teclado_QWERTY' },
      },
      {
        slug: 'dedos-medio-e-anelar-d-s-k-l',
        title: 'Dedos médio e anelar: D, S, K e L',
        duration: '15 min',
        summary:
          'Com os indicadores fixados em F e J, é hora de trazer os dedos médio e anelar para as teclas D, S (mão esquerda) e K, L (mão direita), completando quatro das oito posições da fila do meio.',
        objectives: [
          'Posicionar os dedos médio e anelar sobre D, S, K e L.',
          'Digitar combinações simples usando esses quatro dedos sem olhar.',
        ],
        keyPoints: [
          {
            title: 'Um dedo, uma tecla fixa',
            description:
              'O dedo médio esquerdo cobre D, o anelar esquerdo cobre S, o médio direito cobre K e o anelar direito cobre L — sempre a mesma tecla para o mesmo dedo, sem exceção.',
          },
          {
            title: 'Movimento mínimo',
            description:
              'Cada dedo se move apenas o suficiente para tocar a tecla e volta imediatamente à posição de descanso — evitar levantar a mão inteira é o que garante velocidade depois.',
          },
          {
            title: 'Praticando em pares',
            description:
              'Alternar entre D e K, e entre S e L, ajuda a sentir a simetria entre as mãos, já que o teclado é praticamente espelhado dos dois lados da fila do meio.',
          },
        ],
        drill: {
          text: 'dd ss kk ll ds kl sd lk asdf jklç dskl klds fdsa çlkj ds kl sd lk fj',
          minWpm: 8,
          minAccuracy: 85,
        },
        reference: { label: 'Wikipédia — Teclado QWERTY', href: 'https://pt.wikipedia.org/wiki/Teclado_QWERTY' },
      },
      {
        slug: 'completando-a-fila-g-h-e-c-cedilha',
        title: 'Completando a fila: G, H e Ç',
        duration: '15 min',
        summary:
          'Faltam três teclas para fechar a fila do meio: G e H (as mais centrais, cobertas pelos indicadores esticados) e Ç (exclusiva do teclado brasileiro ABNT2, coberta pelo mínimo direito).',
        objectives: [
          'Posicionar os indicadores para alcançar G e H sem sair de F e J.',
          'Localizar a tecla Ç com o dedo mínimo direito.',
        ],
        keyPoints: [
          {
            title: 'G e H são um esticar, não um salto',
            description:
              'Para tocar G ou H, o indicador se estica levemente a partir de F ou J — ele não "pula" para outra posição, apenas alcança a tecla vizinha e volta.',
          },
          {
            title: 'A tecla Ç é só do teclado brasileiro',
            description:
              'Diferente de teclados americanos, o layout ABNT2 usado no Brasil tem uma tecla Ç dedicada, à direita do L, coberta pelo dedo mínimo direito.',
          },
          {
            title: 'Fila do meio completa',
            description:
              'Com G, H e Ç dominados, as oito teclas da fila do meio (A S D F G H J K L Ç) já cobrem a base de onde todos os outros movimentos do teclado partem.',
          },
        ],
        drill: {
          text: 'gg hh çç gh çh asdf ghjk lçgh jklç asdf ghjk çhgh asdf jklç gh hç fj',
          minWpm: 8,
          minAccuracy: 85,
        },
        reference: { label: 'Wikipédia — ABNT', href: 'https://pt.wikipedia.org/wiki/Associa%C3%A7%C3%A3o_Brasileira_de_Normas_T%C3%A9cnicas' },
      },
    ],
  },
  {
    slug: 'fila-superior',
    title: 'Fila Superior',
    description: 'Suba um andar no teclado: aprenda a fila Q W E R T Y U I O P, logo acima da fila do meio.',
    lessons: [
      {
        slug: 'mao-esquerda-q-w-e-r-t',
        title: 'Mão esquerda na fila superior: Q W E R T',
        duration: '15 min',
        summary:
          'A fila superior fica um pouco mais alta e mais longe do que a do meio, exigindo que os dedos se estiquem para cima sem perder a referência de F como ponto de partida.',
        objectives: [
          'Posicionar os dedos da mão esquerda sobre Q, W, E, R e T.',
          'Praticar o retorno para a fila do meio depois de cada tecla.',
        ],
        keyPoints: [
          {
            title: 'Cada dedo sobe na mesma coluna',
            description:
              'Q fica acima de A (mínimo), W acima de S (anelar), E acima de D (médio), e R e T ficam ambas sob responsabilidade do indicador, que parte de F.',
          },
          {
            title: 'Suba e volte sempre',
            description:
              'O movimento correto é subir até a tecla, tocar e voltar imediatamente para a fila do meio — ficar "preso" na fila superior atrapalha o próximo movimento.',
          },
          {
            title: 'R e T são do mesmo dedo',
            description:
              'Diferente das outras colunas, tanto R quanto T são alcançadas pelo indicador esquerdo, que parte de F em direções ligeiramente diferentes.',
          },
        ],
        drill: {
          text: 'qwert qwert asdf qwert fdsa qwert trewq asdf qwert fdsa trewq qwert',
          minWpm: 10,
          minAccuracy: 85,
        },
        reference: { label: 'Wikipédia — Teclado QWERTY', href: 'https://pt.wikipedia.org/wiki/Teclado_QWERTY' },
      },
      {
        slug: 'mao-direita-y-u-i-o-p',
        title: 'Mão direita na fila superior: Y U I O P',
        duration: '15 min',
        summary:
          'O lado direito da fila superior espelha o esquerdo: Y e U ficam a cargo do indicador (que parte de J), enquanto I, O e P seguem, um dedo por coluna, até o mínimo direito.',
        objectives: [
          'Posicionar os dedos da mão direita sobre Y, U, I, O e P.',
          'Combinar as duas metades da fila superior em um mesmo exercício.',
        ],
        keyPoints: [
          {
            title: 'Y e U pelo indicador',
            description:
              'Assim como R e T à esquerda, Y e U são alcançadas pelo indicador direito, que parte de J em direções ligeiramente diferentes.',
          },
          {
            title: 'I, O e P: médio, anelar e mínimo',
            description:
              'I fica acima de K (médio), O acima de L (anelar) e P acima de Ç (mínimo), completando a simetria da fila superior com a fila do meio.',
          },
          {
            title: 'P é a tecla mais distante',
            description:
              'Por ficar na borda do teclado, P costuma ser a tecla que mais exige adaptação no início — praticar isoladamente ajuda a ganhar confiança nela.',
          },
        ],
        drill: {
          text: 'yuiop yuiop asdf yuiop fdsa poiuy asdf jklç yuiop poiuy qwert yuiop',
          minWpm: 10,
          minAccuracy: 85,
        },
        reference: { label: 'Wikipédia — Teclado QWERTY', href: 'https://pt.wikipedia.org/wiki/Teclado_QWERTY' },
      },
      {
        slug: 'praticando-a-fila-superior-completa',
        video: { youtubeId: 'PoJCrdyZ9as', title: 'Aula 15: Integração Total – Unificando a Fileira Superior' },
        title: 'Praticando a fila superior completa',
        duration: '20 min',
        summary:
          'Com as duas metades da fila superior conhecidas, chegou a hora de unir tudo — alternando entre fila do meio e fila superior, e já formando algumas palavras curtas reais.',
        objectives: [
          'Alternar com fluidez entre a fila do meio e a fila superior.',
          'Digitar palavras curtas reais usando apenas essas duas fileiras.',
        ],
        keyPoints: [
          {
            title: 'A fila superior nunca some',
            description:
              'A partir de agora, qualquer exercício pode combinar livremente letras da fila do meio e da fila superior — é assim que a digitação de palavras reais funciona.',
          },
          {
            title: 'Primeiras palavras reais',
            description:
              'Com A S D F G H J K L Ç e Q W E R T Y U I O P disponíveis, já é possível digitar palavras completas em português, como "gato", "sapo" ou "roupa".',
          },
          {
            title: 'Ritmo antes de velocidade',
            description:
              'Nesta fase, o objetivo ainda é manter um ritmo constante e sem erros — a velocidade de verdade vem depois, quando o padrão de cada palavra já estiver automatizado.',
          },
        ],
        drill: {
          text: 'gato rato sapo toga roupa seta rota dueto asdf jklç qwert yuiop',
          minWpm: 12,
          minAccuracy: 85,
        },
        reference: { label: 'TypingClub — Prática de digitação', href: 'https://www.typingclub.com' },
      },
    ],
  },
  {
    slug: 'fila-inferior',
    title: 'Fila Inferior',
    description: 'A última fileira de letras: Z X C V B N M. Ao final deste módulo, o alfabeto completo estará ao seu alcance.',
    lessons: [
      {
        slug: 'mao-esquerda-z-x-c-v',
        title: 'Mão esquerda na fila inferior: Z X C V',
        duration: '15 min',
        summary:
          'A fila inferior fica abaixo da fila do meio, exigindo que os dedos desçam em vez de subir — um movimento novo que costuma ser um pouco mais desconfortável no início.',
        objectives: [
          'Posicionar os dedos da mão esquerda sobre Z, X, C e V.',
          'Praticar o movimento de descida a partir da fila do meio.',
        ],
        keyPoints: [
          {
            title: 'Z, X, C e V, uma coluna por dedo',
            description:
              'Z fica abaixo de A (mínimo), X abaixo de S (anelar), C abaixo de D (médio) e V é alcançada pelo indicador, que desce a partir de F.',
          },
          {
            title: 'Descer é diferente de subir',
            description:
              'O movimento para baixo tende a ser menos natural no início — vale praticar essas quatro teclas isoladamente antes de misturá-las com o resto do teclado.',
          },
          {
            title: 'C não é Ç',
            description:
              'É comum confundir C (fila inferior, letra comum) com Ç (fila do meio, cedilha) no início — são teclas diferentes, em posições diferentes do teclado brasileiro.',
          },
        ],
        drill: {
          text: 'zxcv zxcv asdf zxcv fdsa vcxz asdf jklç zxcv vcxz qwert zxcv fdsa',
          minWpm: 12,
          minAccuracy: 85,
        },
        reference: { label: 'Wikipédia — Teclado QWERTY', href: 'https://pt.wikipedia.org/wiki/Teclado_QWERTY' },
      },
      {
        slug: 'mao-direita-b-n-m',
        title: 'Mão direita na fila inferior: B N M',
        duration: '15 min',
        summary:
          'Do lado direito, a fila inferior tem só três teclas: B (também alcançada pelo indicador esquerdo, por ficar bem no centro do teclado), N e M.',
        objectives: [
          'Posicionar os dedos da mão direita sobre N e M.',
          'Identificar por que B costuma ser digitada pelo indicador esquerdo.',
        ],
        keyPoints: [
          {
            title: 'B fica no meio do teclado',
            description:
              'Apesar de estar "do lado direito" visualmente, a tecla B costuma ser designada ao indicador esquerdo em muitos métodos de digitação, por ficar bem próxima ao centro do teclado.',
          },
          {
            title: 'N e M pelo indicador e médio direito',
            description:
              'N é alcançada pelo indicador direito (descendo a partir de J) e M pelo dedo médio direito (descendo a partir de K).',
          },
          {
            title: 'Últimas peças do alfabeto',
            description:
              'Com N e M dominadas, faltam poucas teclas para ter o alfabeto completo disponível — o próximo passo é só juntar tudo.',
          },
        ],
        drill: {
          text: 'bnm bnm asdf bnm fdsa mnb asdf jklç bnm mnb yuiop bnm nmb fdsa',
          minWpm: 12,
          minAccuracy: 85,
        },
        reference: { label: 'Wikipédia — Teclado QWERTY', href: 'https://pt.wikipedia.org/wiki/Teclado_QWERTY' },
      },
      {
        slug: 'combinando-as-tres-filas',
        title: 'Combinando as três fileiras',
        duration: '20 min',
        summary:
          'Fila do meio, fila superior e fila inferior juntas formam o alfabeto completo. Este é o primeiro exercício deste curso com frases inteiras em português.',
        objectives: [
          'Digitar uma frase completa combinando as três fileiras de letras.',
          'Reconhecer o alfabeto completo como base para a próxima fase: velocidade.',
        ],
        keyPoints: [
          {
            title: 'O alfabeto está completo',
            description:
              'Com A a Z disponíveis, qualquer palavra em português (sem acentos ou pontuação, ainda) já pode ser digitada usando a técnica correta.',
          },
          {
            title: 'Erros vão acontecer — e está tudo bem',
            description:
              'Ao combinar as três fileiras, é normal errar mais no início. O foco agora é constância: manter o ritmo mesmo diante do erro, sem parar para se corrigir no meio da palavra.',
          },
          {
            title: 'O próximo passo é velocidade',
            description:
              'A partir daqui, os próximos módulos deixam de introduzir teclas novas e passam a focar em ganhar ritmo, fluidez e velocidade real de digitação.',
          },
        ],
        drill: {
          text: 'o gato subiu no muro depois desceu correndo para o jardim e brincou muito',
          minWpm: 12,
          minAccuracy: 85,
        },
        reference: { label: '10FastFingers — Teste de digitação', href: 'https://10fastfingers.com' },
      },
    ],
  },
  {
    slug: 'velocidade-e-ritmo-inicial',
    title: 'Velocidade e Ritmo Inicial',
    description: 'Com o alfabeto todo disponível, é hora de treinar ritmo constante e ganhar as primeiras palavras por minuto de verdade.',
    lessons: [
      {
        slug: 'construindo-ritmo-sem-parar',
        video: { youtubeId: 'JnlqEvMDrlc', title: 'Aprenda a digitar rápido no seu teclado com essa técnica' },
        title: 'Construindo ritmo sem parar',
        duration: '15 min',
        summary:
          'Velocidade de digitação não vem de mover os dedos mais rápido isoladamente, mas de manter um fluxo constante, sem pausas entre uma palavra e outra.',
        objectives: [
          'Explicar por que ritmo constante importa mais do que picos de velocidade.',
          'Praticar uma frase longa sem interromper o fluxo de digitação.',
        ],
        keyPoints: [
          {
            title: 'Ritmo constante x picos de velocidade',
            description:
              'Digitar um trecho muito rápido e travar no seguinte resulta numa velocidade média pior do que manter um ritmo médio, porém constante, do início ao fim.',
          },
          {
            title: 'Evite parar para revisar',
            description:
              'Parar no meio da frase para conferir se está certo quebra o ritmo. O ideal é seguir até o final e só então avaliar o resultado.',
          },
          {
            title: 'A respiração também ajuda',
            description:
              'Manter a respiração tranquila e os ombros relaxados evita tensão nas mãos, que é uma das causas mais comuns de perda de ritmo ao digitar.',
          },
        ],
        drill: {
          text: 'o rato roeu a roupa do rei de roma mas o rei de roma nao percebeu nada',
          minWpm: 15,
          minAccuracy: 88,
        },
        reference: { label: '10FastFingers — Teste de digitação', href: 'https://10fastfingers.com' },
      },
      {
        slug: 'palavras-curtas-do-dia-a-dia',
        title: 'Palavras curtas do dia a dia',
        duration: '15 min',
        summary:
          'Palavras curtas e muito frequentes — como "casa", "mesa" ou "rua" — aparecem o tempo todo em qualquer texto. Automatizá-las cedo acelera a digitação de frases inteiras.',
        objectives: [
          'Reconhecer a importância de automatizar palavras curtas e frequentes.',
          'Digitar uma lista de palavras curtas mantendo o ritmo.',
        ],
        keyPoints: [
          {
            title: 'Palavras curtas aparecem sempre',
            description:
              'Uma pequena lista de palavras curtas e comuns cobre boa parte de qualquer texto em português — dominar essas palavras de cor (sem pensar letra por letra) rende ganho de velocidade em tudo que você digitar depois.',
          },
          {
            title: 'Padrão em vez de letra por letra',
            description:
              'Com a prática, o cérebro passa a reconhecer a palavra inteira como um padrão de movimento, em vez de processar cada letra separadamente.',
          },
          {
            title: 'Espaço entre palavras',
            description:
              'O toque no espaço com o polegar deve acontecer no mesmo ritmo das letras, sem pausa — tratar o espaço como "mais uma tecla" ajuda a manter a fluidez.',
          },
        ],
        drill: {
          text: 'casa carro rua porta mesa copo prato livro papel lapis bola time som luz',
          minWpm: 15,
          minAccuracy: 88,
        },
        reference: { label: '10FastFingers — Teste de digitação', href: 'https://10fastfingers.com' },
      },
      {
        slug: 'frases-simples-com-as-letras-aprendidas',
        video: { youtubeId: 'Jx03EbdHi20', title: 'Como conseguir digitar mais rápido - dicas de digitação e exercícios' },
        title: 'Frases simples com as letras aprendidas',
        duration: '15 min',
        summary:
          'Juntar palavras curtas em frases completas é o próximo passo natural — o desafio aqui é manter a mesma fluidez de uma palavra isolada ao longo de uma frase inteira.',
        objectives: [
          'Digitar frases simples mantendo velocidade e precisão.',
          'Perceber a diferença de dificuldade entre palavras isoladas e frases completas.',
        ],
        keyPoints: [
          {
            title: 'Frases exigem mais planejamento visual',
            description:
              'Ler a frase inteira antes de começar (e não palavra por palavra enquanto digita) ajuda o cérebro a se antecipar ao que vem a seguir.',
          },
          {
            title: 'Erros isolados não travam a frase',
            description:
              'Um erro em uma palavra não precisa interromper a frase inteira — o objetivo é seguir digitando e deixar a correção para depois.',
          },
          {
            title: 'Meça seu progresso',
            description:
              'Comparar sua velocidade nesta aula com a da primeira aula do curso é uma boa forma de perceber, com números reais, o quanto você já evoluiu.',
          },
        ],
        drill: {
          text: 'hoje o dia esta bonito e o sol brilha forte no ceu azul sem nenhuma nuvem',
          minWpm: 15,
          minAccuracy: 88,
        },
        reference: { label: '10FastFingers — Teste de digitação', href: 'https://10fastfingers.com' },
      },
    ],
  },
  {
    slug: 'maiusculas-e-tecla-shift',
    title: 'Maiúsculas e Tecla Shift',
    description: 'Aprenda a usar o Shift com o dedo correto para escrever nomes próprios e iniciar frases corretamente.',
    lessons: [
      {
        slug: 'usando-o-shift-com-o-dedo-minimo',
        video: { youtubeId: '3Pzwb3G7v4c', title: 'AULA 3 - TECLADO - LETRAS MAIÚSCULAS E MINÚSCULAS - TECLAS CAPS LOCK e SHIFT' },
        title: 'Usando o Shift com o dedo mínimo',
        duration: '15 min',
        summary:
          'Para digitar uma letra maiúscula sem tirar as mãos da posição, o dedo mínimo de um lado segura o Shift enquanto o dedo do outro lado toca a letra desejada.',
        objectives: [
          'Explicar a regra de usar o Shift do lado oposto à letra maiúscula.',
          'Praticar palavras com a primeira letra maiúscula.',
        ],
        keyPoints: [
          {
            title: 'Shift do lado oposto',
            description:
              'Para digitar uma letra do lado esquerdo do teclado em maiúscula, usa-se o Shift direito (e vice-versa) — isso evita ter que mover o mesmo dedo duas vezes seguidas.',
          },
          {
            title: 'Sem tirar a mão da posição',
            description:
              'O dedo mínimo pressiona o Shift sem que a mão inteira saia da fila do meio — é um movimento pequeno e rápido, não uma pausa na digitação.',
          },
          {
            title: 'Praticando com nomes próprios',
            description:
              'Nomes de pessoas e lugares são uma ótima forma de praticar Shift, já que sempre começam com letra maiúscula em português.',
          },
        ],
        drill: {
          text: 'Ana Pedro Maria Joao Lucas Rio Bahia Brasil Sao Paulo Minas Gerais',
          minWpm: 15,
          minAccuracy: 88,
        },
        reference: { label: 'Wikipédia — Tecla Shift', href: 'https://pt.wikipedia.org/wiki/Tecla_Shift' },
      },
      {
        slug: 'nomes-proprios-e-inicio-de-frase',
        title: 'Nomes próprios e início de frase',
        duration: '15 min',
        summary:
          'Além de nomes próprios, toda frase em português começa com letra maiúscula. Praticar essa regra até virar automática evita ter que voltar e corrigir depois.',
        objectives: [
          'Aplicar maiúscula corretamente no início de cada frase.',
          'Manter o ritmo de digitação mesmo alternando maiúsculas e minúsculas.',
        ],
        keyPoints: [
          {
            title: 'Toda frase nova começa com maiúscula',
            description:
              'Assim como nomes próprios, a primeira letra depois de uma pausa entre frases também é maiúscula — é uma regra que vale a pena automatizar desde já.',
          },
          {
            title: 'Antecipando o Shift',
            description:
              'Ler um pouco à frente do que está digitando ajuda a preparar o dedo mínimo para o Shift antes mesmo de chegar na letra maiúscula.',
          },
          {
            title: 'Cuidado com o excesso de Shift',
            description:
              'Um erro comum é manter o Shift pressionado por tempo demais, maiusculizando a letra seguinte por engano — o toque deve ser rápido e coordenado com a outra mão.',
          },
        ],
        drill: {
          text: 'Hoje e segunda feira Amanha e terca feira Depois vem quarta feira Enfim chegou sexta',
          minWpm: 15,
          minAccuracy: 88,
        },
        reference: { label: 'Wikipédia — Tecla Shift', href: 'https://pt.wikipedia.org/wiki/Tecla_Shift' },
      },
      {
        slug: 'praticando-maiusculas-em-textos',
        title: 'Praticando maiúsculas em textos',
        duration: '15 min',
        summary:
          'Um texto real mistura nomes próprios, início de frase e palavras comuns o tempo todo — este exercício junta tudo o que foi visto neste módulo em um único parágrafo.',
        objectives: [
          'Digitar um parágrafo completo combinando maiúsculas e minúsculas.',
          'Manter a meta de velocidade mesmo com o uso frequente do Shift.',
        ],
        keyPoints: [
          {
            title: 'Maiúsculas custam um pouco de velocidade',
            description:
              'É normal que a velocidade caia levemente em textos com muitas maiúsculas, já que cada uma exige a coordenação extra do Shift.',
          },
          {
            title: 'Praticar com texto real',
            description:
              'Diferente dos exercícios anteriores, este texto foi escrito como uma frase real, do jeito que você encontraria em qualquer mensagem ou documento.',
          },
          {
            title: 'Consolidando o módulo',
            description:
              'Se você conseguir concluir este exercício dentro da meta, o uso do Shift já está incorporado ao seu jeito de digitar — pode seguir com confiança para os números.',
          },
        ],
        drill: {
          text: 'Roberto Vitalino mora em Campo Grande no Mato Grosso do Sul e programa todos os dias',
          minWpm: 15,
          minAccuracy: 88,
        },
        reference: { label: 'Wikipédia — Tecla Shift', href: 'https://pt.wikipedia.org/wiki/Tecla_Shift' },
      },
    ],
  },
  {
    slug: 'numeros-e-fila-numerica',
    title: 'Números e Fila Numérica',
    description: 'Aprenda a alcançar a fila de números acima das letras sem perder a postura nem olhar para o teclado.',
    lessons: [
      {
        slug: 'numeros-com-a-mao-esquerda',
        title: 'Números com a mão esquerda: 1 2 3 4 5',
        duration: '15 min',
        summary:
          'A fila numérica fica acima da fila superior de letras. Os números de 1 a 5 seguem a mesma lógica de colunas já usada nas letras, um dedo por número.',
        objectives: [
          'Posicionar os dedos da mão esquerda sobre os números 1 a 5.',
          'Praticar sequências numéricas simples sem olhar para o teclado.',
        ],
        keyPoints: [
          {
            title: 'Uma coluna, um dedo',
            description:
              '1 fica na coluna do mínimo, 2 do anelar, 3 do médio, e 4 e 5 ficam sob responsabilidade do indicador esquerdo, que sobe a partir da fila superior.',
          },
          {
            title: 'É normal ser mais devagar no início',
            description:
              'Como a fila numérica é usada com menos frequência que as letras, é comum que a velocidade nela seja menor no começo — isso melhora rápido com a prática.',
          },
          {
            title: 'Números aparecem em datas, valores e códigos',
            description:
              'Preços, datas, senhas e códigos fazem parte do dia a dia digital — dominar a fila numérica evita ter que "espiar" o teclado sempre que um número aparece.',
          },
        ],
        drill: {
          text: '1 2 3 4 5 12 34 51 23 45 111 222 333 444 555 12345 54321',
          minWpm: 15,
          minAccuracy: 90,
        },
        reference: { label: 'Wikipédia — Teclado QWERTY', href: 'https://pt.wikipedia.org/wiki/Teclado_QWERTY' },
      },
      {
        slug: 'numeros-com-a-mao-direita',
        title: 'Números com a mão direita: 6 7 8 9 0',
        duration: '15 min',
        summary:
          'Do lado direito, a fila numérica segue o mesmo padrão: 6 e 7 pelo indicador, 8 pelo médio, 9 pelo anelar e 0 pelo mínimo — a tecla mais distante da fila.',
        objectives: [
          'Posicionar os dedos da mão direita sobre os números 6 a 0.',
          'Combinar números da mão esquerda e direita em um mesmo exercício.',
        ],
        keyPoints: [
          {
            title: '6 e 7 pelo indicador direito',
            description:
              'Assim como 4 e 5 à esquerda, os números 6 e 7 ficam sob responsabilidade do indicador direito, que sobe a partir da fila superior.',
          },
          {
            title: 'O zero é o mais distante',
            description:
              'Por ficar na ponta da fila numérica, o 0 costuma exigir mais adaptação do mínimo direito — vale praticá-lo isoladamente algumas vezes.',
          },
          {
            title: 'Juntando os dois lados',
            description:
              'Com todos os dez dígitos disponíveis, já é possível digitar qualquer número — de um simples "2" até um valor completo como "1250".',
          },
        ],
        drill: {
          text: '6 7 8 9 0 67 89 90 76 98 666 777 888 999 000 67890 09876',
          minWpm: 15,
          minAccuracy: 90,
        },
        reference: { label: 'Wikipédia — Teclado QWERTY', href: 'https://pt.wikipedia.org/wiki/Teclado_QWERTY' },
      },
      {
        slug: 'praticando-numeros-em-contexto',
        title: 'Praticando números em contexto',
        duration: '15 min',
        summary:
          'Números isolados são um bom treino, mas no dia a dia eles aparecem misturados com palavras — em datas, preços e quantidades. Este exercício simula esse uso real.',
        objectives: [
          'Digitar frases que combinam palavras e números.',
          'Manter o ritmo ao alternar entre letras e a fila numérica.',
        ],
        keyPoints: [
          {
            title: 'A troca de fileira exige atenção',
            description:
              'Alternar entre letras e números significa mover os dedos por uma distância maior no teclado — reduzir a velocidade levemente nessa transição é normal.',
          },
          {
            title: 'Contextos comuns no dia a dia',
            description:
              'Preencher formulários, digitar preços em uma loja virtual ou escrever uma data são situações do cotidiano que exigem justamente essa mistura de letras e números.',
          },
          {
            title: 'Consolidando a fila numérica',
            description:
              'Ao concluir este exercício dentro da meta, você já tem a fila numérica incorporada ao seu repertório — o próximo passo é a pontuação.',
          },
        ],
        drill: {
          text: 'em 2024 o produto custou 150 reais depois caiu para 99 reais em 2025',
          minWpm: 15,
          minAccuracy: 90,
        },
        reference: { label: 'Wikipédia — Teclado QWERTY', href: 'https://pt.wikipedia.org/wiki/Teclado_QWERTY' },
      },
    ],
  },
  {
    slug: 'pontuacao-e-acentuacao',
    title: 'Pontuação e Acentuação',
    description: 'Vírgula, ponto, interrogação e os acentos do português — os detalhes que fazem um texto parecer profissional.',
    lessons: [
      {
        slug: 'virgula-ponto-e-interrogacao',
        video: { youtubeId: 'RduYzT2tylY', title: 'Como digitar pontuação no teclado | Como usar o teclado | Dica Rápida [Aula 8]' },
        title: 'Vírgula, ponto e ponto de interrogação',
        duration: '15 min',
        summary:
          'Vírgula, ponto final e ponto de interrogação são os sinais de pontuação mais usados no dia a dia — e cada um tem uma posição fixa e um dedo responsável no teclado brasileiro.',
        objectives: [
          'Localizar vírgula, ponto e ponto de interrogação no teclado ABNT2.',
          'Praticar frases com esses três sinais de pontuação.',
        ],
        keyPoints: [
          {
            title: 'Vírgula e ponto ficam ao lado do L',
            description:
              'No teclado brasileiro, a vírgula e o ponto final ficam nas teclas logo à direita do L, alcançadas pelo dedo mínimo direito com um pequeno deslocamento.',
          },
          {
            title: 'Ponto de interrogação usa Shift',
            description:
              'O ponto de interrogação é o segundo símbolo da mesma tecla do ponto final, exigindo Shift + a tecla — a mesma lógica usada para as letras maiúsculas.',
          },
          {
            title: 'Pontuação muda o ritmo da leitura',
            description:
              'Além da posição da tecla, vale prestar atenção ao sentido da frase: vírgula indica uma pausa curta, e o ponto de interrogação muda a entonação de toda a frase.',
          },
        ],
        drill: {
          text: 'Voce gosta de cafe, cha ou suco? Eu prefiro cafe, obrigado. E voce, o que acha?',
          minWpm: 18,
          minAccuracy: 90,
        },
        reference: { label: 'Wikipédia — Sinais de pontuação', href: 'https://pt.wikipedia.org/wiki/Pontua%C3%A7%C3%A3o' },
      },
      {
        slug: 'acentos-agudo-circunflexo-e-til',
        video: { youtubeId: 'zD1gtcSFOSc', title: 'Colocar acento Agudo, Til, Circunflexo e Crase no Teclado' },
        title: 'Acentos: agudo, circunflexo e til',
        duration: '15 min',
        summary:
          'O português usa acentos com frequência — á, é, í, ó, ú (agudo), â, ê, ô (circunflexo) e ã, õ (til). No teclado ABNT2, cada acento é uma tecla morta: você aperta o acento e depois a vogal.',
        objectives: [
          'Explicar como funcionam as teclas de acento (teclas mortas) no ABNT2.',
          'Praticar palavras comuns com acentos variados.',
        ],
        keyPoints: [
          {
            title: 'O que é uma tecla morta',
            description:
              'Ao pressionar a tecla de acento, nada aparece na tela imediatamente — é preciso digitar a vogal em seguida para o caractere acentuado ser formado (por isso o nome "tecla morta").',
          },
          {
            title: 'Um dedo extra no meio da palavra',
            description:
              'Digitar uma palavra acentuada exige um toque a mais do que uma palavra sem acento — é normal que a velocidade caia um pouco em textos com muitos acentos.',
          },
          {
            title: 'Acentos mudam o significado',
            description:
              'Em português, o acento não é só estético: "esta" e "está", ou "avo" e "avó", têm significados diferentes — sair sem o acento pode até mudar o sentido da frase.',
          },
        ],
        drill: {
          text: 'café açúcar pão coração número área saúde história água também',
          minWpm: 18,
          minAccuracy: 90,
        },
        reference: { label: 'Wikipédia — Acentuação gráfica', href: 'https://pt.wikipedia.org/wiki/Acentua%C3%A7%C3%A3o_gr%C3%A1fica' },
      },
      {
        slug: 'praticando-textos-com-pontuacao-e-acentos',
        title: 'Praticando textos com pontuação e acentos',
        duration: '15 min',
        summary:
          'Este exercício junta tudo: maiúsculas, pontuação e acentos em uma única frase, exatamente como você encontraria em uma mensagem ou e-mail real.',
        objectives: [
          'Digitar uma frase completa combinando acentos, pontuação e maiúsculas.',
          'Perceber o quanto a digitação já ficou mais natural desde o início do curso.',
        ],
        keyPoints: [
          {
            title: 'O texto mais completo até aqui',
            description:
              'Esta é a primeira aula do curso que exige praticamente todos os recursos do teclado ao mesmo tempo — letras, maiúsculas, números (se aparecerem), acentos e pontuação.',
          },
          {
            title: 'Releia antes de digitar',
            description:
              'Dar uma olhada rápida na frase inteira antes de começar ajuda a antecipar onde estão os acentos e a pontuação, evitando surpresas no meio da digitação.',
          },
          {
            title: 'Você já digita "de verdade"',
            description:
              'Ao concluir esta aula dentro da meta, você já domina tecnicamente tudo o que é necessário para escrever qualquer texto em português — o que falta agora é só ganhar mais velocidade.',
          },
        ],
        drill: {
          text: 'Você já experimentou o café da manhã com pão de açúcar? É uma delícia, não é mesmo?',
          minWpm: 18,
          minAccuracy: 90,
        },
        reference: { label: 'Wikipédia — Acentuação gráfica', href: 'https://pt.wikipedia.org/wiki/Acentua%C3%A7%C3%A3o_gr%C3%A1fica' },
      },
    ],
  },
  {
    slug: 'palavras-e-frases-do-dia-a-dia',
    title: 'Palavras e Frases do Dia a Dia',
    description: 'Com o teclado todo dominado, o foco agora é ganhar velocidade real digitando palavras e frases comuns.',
    lessons: [
      {
        slug: 'palavras-mais-comuns-do-portugues',
        video: { youtubeId: 'Dr8zUZVZcyw', title: 'AS 100 PALAVRAS MAIS USADAS NO PORTUGUÊS!' },
        title: 'Palavras mais comuns do português',
        duration: '15 min',
        summary:
          'Um pequeno grupo de palavras (como "que", "não", "com", "para") aparece com tanta frequência que dominá-las de cor gera um ganho de velocidade em praticamente qualquer texto.',
        objectives: [
          'Reconhecer a importância das palavras mais frequentes do português.',
          'Digitar uma sequência dessas palavras com fluidez.',
        ],
        keyPoints: [
          {
            title: 'Poucas palavras, muito uso',
            description:
              'Estudos de frequência de idioma mostram que um número relativamente pequeno de palavras é responsável por boa parte de qualquer texto em português.',
          },
          {
            title: 'Memorize o padrão, não a letra',
            description:
              'Palavras como "para" ou "como" devem ser digitadas como um bloco automático, sem pensar em P-A-R-A letra por letra.',
          },
          {
            title: 'Ganho de velocidade acumulado',
            description:
              'Cada palavra comum digitada com fluidez soma poucos décimos de segundo — mas ao longo de um texto inteiro, essa soma faz uma diferença real na velocidade final.',
          },
        ],
        drill: {
          text: 'que nao com uma para ser ele isso ela entre depois sem mesmo aos ter seus quem nas',
          minWpm: 22,
          minAccuracy: 90,
        },
        reference: { label: 'Wikipédia — Língua portuguesa', href: 'https://pt.wikipedia.org/wiki/L%C3%ADngua_portuguesa' },
      },
      {
        slug: 'frases-completas-e-conectivos',
        title: 'Frases completas e conectivos',
        duration: '15 min',
        summary:
          'Conectivos como "mas", "porque" e "também" costuram as ideias de uma frase. Praticá-los dentro de frases completas prepara você para digitar textos mais longos e naturais.',
        objectives: [
          'Digitar frases completas usando conectivos comuns.',
          'Manter a meta de velocidade em frases mais longas que as anteriores.',
        ],
        keyPoints: [
          {
            title: 'Conectivos aparecem no meio da frase',
            description:
              'Diferente de palavras isoladas, conectivos como "mas" e "porque" surgem no meio do raciocínio — reconhecê-los rápido ajuda a manter o fluxo da leitura enquanto digita.',
          },
          {
            title: 'Frases mais longas, mesma técnica',
            description:
              'A técnica não muda com o tamanho da frase — o que muda é a exigência de concentração por mais tempo seguido, sem perder o ritmo.',
          },
          {
            title: 'Já é possível sentir a evolução',
            description:
              'Comparar o tempo gasto nesta frase com o de uma frase parecida lá no início do curso é uma boa forma de perceber, na prática, o quanto você evoluiu.',
          },
        ],
        drill: {
          text: 'Eu gosto de estudar porque quero crescer na carreira, mas tambem preciso descansar todos os dias.',
          minWpm: 22,
          minAccuracy: 90,
        },
        reference: { label: 'Wikipédia — Língua portuguesa', href: 'https://pt.wikipedia.org/wiki/L%C3%ADngua_portuguesa' },
      },
      {
        slug: 'aumentando-a-velocidade-com-repeticao',
        video: { youtubeId: 'fkthK6lViCQ', title: '3 dicas para DIGITAR mais RÁPIDO | 130 palavras por minuto' },
        title: 'Aumentando a velocidade com repetição',
        duration: '15 min',
        summary:
          'Repetir a mesma frase várias vezes seguidas é uma das formas mais eficazes de ganhar velocidade rapidamente — cada repetição reduz um pouco a hesitação da anterior.',
        objectives: [
          'Explicar por que a repetição de um mesmo trecho acelera o aprendizado.',
          'Digitar a mesma frase repetidas vezes buscando bater a própria marca.',
        ],
        keyPoints: [
          {
            title: 'Repetição reduz hesitação',
            description:
              'Na primeira vez, o cérebro ainda está "lendo e decidindo". Da segunda vez em diante, boa parte do trecho já é reconhecida como padrão, o que reduz pausas e aumenta a velocidade.',
          },
          {
            title: 'Compare seu resultado a cada tentativa',
            description:
              'Usar o botão de reiniciar para repetir o mesmo texto várias vezes, comparando o PPM de cada tentativa, é uma forma simples e eficaz de treinar.',
          },
          {
            title: 'Buscando a próxima marca pessoal',
            description:
              'Em vez de comparar com uma meta genérica, tente superar sua própria última tentativa — esse é o principal indicador de evolução real.',
          },
        ],
        drill: {
          text: 'Repita comigo: a prática leva à perfeição. A prática leva à perfeição. A prática constante é o segredo.',
          minWpm: 22,
          minAccuracy: 90,
        },
        reference: { label: 'Keybr — Prática de digitação', href: 'https://www.keybr.com' },
      },
    ],
  },
  {
    slug: 'textos-reais-e-projeto-final',
    title: 'Textos Reais e Projeto Final',
    description: 'Aplique tudo o que aprendeu em situações reais: um e-mail, um parágrafo de texto corrido e um desafio final de velocidade.',
    lessons: [
      {
        slug: 'digitando-um-e-mail-profissional',
        video: { youtubeId: 'yYow1jSy4vE', title: 'COMO ESCREVER UM E-MAIL FORMAL / PROFISSIONAL | 9 DICAS' },
        title: 'Digitando um e-mail profissional',
        duration: '20 min',
        summary:
          'E-mails profissionais combinam formalidade, pontuação e parágrafos curtos — um dos contextos mais comuns em que a digitação por toque faz diferença no dia a dia de trabalho.',
        objectives: [
          'Digitar um e-mail curto e formal mantendo boa velocidade.',
          'Reconhecer elementos comuns de um e-mail profissional (saudação, corpo, despedida).',
        ],
        keyPoints: [
          {
            title: 'Estrutura de um e-mail profissional',
            description:
              'Saudação (ex: "Prezado cliente"), corpo da mensagem direto ao ponto, e uma despedida cordial (ex: "Atenciosamente") formam a estrutura básica esperada em contextos de trabalho.',
          },
          {
            title: 'Precisão importa mais do que velocidade aqui',
            description:
              'Em uma comunicação profissional real, um erro de digitação pode passar uma impressão ruim — vale priorizar a precisão em relação à velocidade máxima neste tipo de texto.',
          },
          {
            title: 'Um cenário do dia a dia',
            description:
              'Escrever e-mails é uma das tarefas mais comuns em praticamente qualquer trabalho de escritório — dominar essa digitação economiza tempo real todos os dias.',
          },
        ],
        drill: {
          text: 'Prezado cliente, agradeço o contato. Segue em anexo o orçamento solicitado. Fico à disposição para dúvidas. Atenciosamente, Roberto.',
          minWpm: 25,
          minAccuracy: 90,
        },
        reference: { label: 'Wikipédia — Correio eletrônico', href: 'https://pt.wikipedia.org/wiki/Correio_eletr%C3%B4nico' },
      },
      {
        slug: 'digitando-um-paragrafo-de-texto-corrido',
        title: 'Digitando um parágrafo de texto corrido',
        duration: '20 min',
        summary:
          'Textos corridos — como um parágrafo de redação, notícia ou artigo — exigem fôlego para manter o ritmo por mais tempo, sem as pausas naturais de uma lista ou um e-mail curto.',
        objectives: [
          'Digitar um parágrafo completo mantendo ritmo constante do início ao fim.',
          'Perceber a diferença de exigência entre um texto curto e um parágrafo mais longo.',
        ],
        keyPoints: [
          {
            title: 'Fôlego para textos mais longos',
            description:
              'Diferente de frases curtas, um parágrafo inteiro exige manter a concentração por mais tempo — pequenas quedas de ritmo no meio do caminho são normais e não devem gerar frustração.',
          },
          {
            title: 'Pontuação como respiro',
            description:
              'Vírgulas e pontos funcionam como pequenas pausas naturais dentro do texto — usá-los como referência ajuda a quebrar o parágrafo em pedaços mais gerenciáveis mentalmente.',
          },
          {
            title: 'Quase no fim do curso',
            description:
              'Se você concluiu esta aula dentro da meta, está pronto para o desafio final — um texto que reúne tudo o que foi ensinado até aqui.',
          },
        ],
        drill: {
          text: 'A tecnologia mudou a forma como trabalhamos e nos comunicamos. Hoje, saber digitar rápido e com precisão é uma habilidade tão importante quanto saber usar bem qualquer outra ferramenta do dia a dia.',
          minWpm: 25,
          minAccuracy: 92,
        },
        reference: { label: 'Wikipédia — Língua portuguesa', href: 'https://pt.wikipedia.org/wiki/L%C3%ADngua_portuguesa' },
      },
      {
        slug: 'desafio-final-texto-completo',
        video: { youtubeId: 'g3YULcWWY7s', title: "Desafio de Digitação [11 MINUTOS] - Simulando a Prova de Digitação Escrevente - TJ-SP" },
        title: 'Desafio final: texto completo',
        duration: '20 min',
        summary:
          'O último exercício do curso combina letras, maiúsculas, números, pontuação e acentos em um único texto — um resumo prático de tudo o que foi aprendido, com a meta de velocidade mais alta do curso.',
        objectives: [
          'Concluir um texto completo usando todos os recursos aprendidos no curso.',
          'Definir uma meta pessoal de velocidade para continuar praticando depois do curso.',
        ],
        keyPoints: [
          {
            title: 'O resumo de tudo o que foi ensinado',
            description:
              'Este texto final foi escrito propositalmente para exigir letras, maiúsculas, números, pontuação e acentos — tudo o que apareceu, módulo a módulo, ao longo do curso.',
          },
          {
            title: 'Velocidade de referência',
            description:
              'Digitadores profissionais costumam ultrapassar 60 palavras por minuto. Um bom objetivo de médio prazo, depois deste curso, é alcançar entre 40 e 50 palavras por minuto com boa precisão.',
          },
          {
            title: 'A prática não para aqui',
            description:
              'Sites como TypingClub, Keybr e 10FastFingers permitem continuar treinando gratuitamente depois do curso — a velocidade real continua evoluindo com o uso diário.',
          },
        ],
        drill: {
          text: 'Parabéns por chegar até aqui! Você aprendeu a digitar sem olhar para o teclado, dominou letras, números, pontuação e acentos. A partir de agora, é só praticar todos os dias: em 2026, sua meta pode ser alcançar 40, 50 ou até 60 palavras por minuto. Continue treinando, a velocidade vem com o tempo!',
          minWpm: 28,
          minAccuracy: 92,
        },
        reference: { label: 'TypingClub — Prática de digitação', href: 'https://www.typingclub.com' },
      },
    ],
  },
]

export const typingCourseLessons = typingCourseModules.flatMap((module, moduleIndex) =>
  module.lessons.map((lesson, lessonIndex) => ({
    ...lesson,
    module,
    moduleIndex,
    lessonIndex,
  })),
)

export function getTypingLesson(slug: string) {
  return typingCourseLessons.find((lesson) => lesson.slug === slug)
}

export const typingCourseStats = {
  modules: typingCourseModules.length,
  lessons: typingCourseLessons.length,
  workload: '8h',
}
