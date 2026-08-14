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
}

export type CourseModule = {
  slug: string
  title: string
  description: string
  lessons: CourseLesson[]
}

export const iaCourseModules: CourseModule[] = [
  {
    slug: 'fundamentos',
    title: 'Fundamentos de IA generativa',
    description:
      'Entenda o que é inteligência artificial generativa, sem jargão técnico, e conheça as principais ferramentas disponíveis hoje.',
    lessons: [
      {
        slug: 'o-que-e-ia-generativa',
        title: 'O que é inteligência artificial generativa (sem enrolação)',
        duration: '25 min',
        summary:
          'IA generativa é um tipo de programa treinado com uma quantidade enorme de texto (e, em alguns casos, imagens) que aprende padrões de linguagem e usa esses padrões para gerar respostas novas, palavra por palavra, a partir do que você escreve.',
        objectives: [
          'Explicar em termos simples como uma IA generativa produz uma resposta.',
          'Diferenciar IA generativa de outros tipos de automação (como um chatbot de respostas prontas).',
        ],
        keyPoints: [
          {
            title: 'Ela prevê a próxima palavra, não "pensa"',
            description:
              'Na prática, o modelo calcula qual é a palavra mais provável de vir a seguir, com base em tudo que já leu durante o treinamento e no que você escreveu. Repetindo isso milhares de vezes por segundo, ele monta frases inteiras que parecem coerentes.',
          },
          {
            title: 'Diferente de um chatbot de respostas prontas',
            description:
              'Um chatbot antigo de site de loja segue um roteiro fixo ("digite 1 para financeiro"). Uma IA generativa não tem respostas prontas — ela constrói cada resposta na hora, o que a torna flexível, mas também menos previsível.',
          },
          {
            title: 'Ela não "sabe" nada em tempo real',
            description:
              'O conhecimento da IA vem do material usado no treinamento, que tem uma data de corte. Ferramentas mais novas conseguem buscar informação atual na internet quando necessário, mas o "raciocínio" em si continua sendo baseado em padrões aprendidos, não em uma busca ao vivo constante.',
          },
        ],
        activity: {
          title: 'Primeira conversa de observação',
          steps: [
            'Abra qualquer ferramenta de IA generativa que você já tenha acesso (ChatGPT, Gemini, Copilot).',
            'Faça duas perguntas simples sobre o mesmo assunto, usando palavras diferentes.',
            'Compare as respostas: repare que nenhuma é uma resposta "decorada" igual — cada uma foi gerada na hora.',
          ],
        },
        quiz: {
          question: 'O que melhor descreve como uma IA generativa produz uma resposta?',
          options: [
            'Ela busca a resposta pronta em um banco de dados de perguntas e respostas.',
            'Ela prevê e monta a resposta palavra por palavra, com base em padrões aprendidos.',
            'Ela liga para um serviço humano que digita a resposta.',
            'Ela sempre repete a resposta mais votada por outros usuários.',
          ],
          answer: 1,
          explanation:
            'A IA generativa monta a resposta em tempo real, prevendo a sequência mais provável de palavras com base no que aprendeu — ela não busca respostas prontas nem depende de humanos digitando ao vivo.',
        },
        reference: {
          label: 'Wikipédia: Inteligência artificial generativa',
          href: 'https://pt.wikipedia.org/wiki/IA_generativa',
        },
      },
      {
        slug: 'chatgpt-gemini-copilot-qual-e-qual',
        title: 'ChatGPT, Gemini, Copilot e outras: qual é qual',
        duration: '20 min',
        summary:
          'As ferramentas de IA mais usadas hoje têm nomes parecidos e funções parecidas, mas vêm de empresas diferentes e se integram a produtos diferentes. Conhecer essas diferenças evita confusão na hora de escolher qual usar.',
        objectives: [
          'Identificar quem desenvolve cada uma das principais ferramentas de IA generativa.',
          'Saber em quais produtos do dia a dia cada ferramenta já vem integrada.',
        ],
        keyPoints: [
          {
            title: 'ChatGPT (OpenAI)',
            description:
              'Ferramenta de conversa por texto que pode ser acessada direto pelo navegador ou aplicativo. É frequentemente usada como referência porque foi uma das primeiras a se popularizar em larga escala.',
          },
          {
            title: 'Gemini (Google)',
            description:
              'Assistente de IA do Google, integrado ao Gmail, Google Docs, Planilhas e Android. Tem a vantagem de já vir embutido em ferramentas que muita gente usa diariamente.',
          },
          {
            title: 'Copilot (Microsoft)',
            description:
              'Assistente integrado ao Windows, Word, Excel e Bing. Para quem já usa o pacote Office, costuma ser a opção mais acessível por já estar dentro dos programas conhecidos.',
          },
        ],
        activity: {
          title: 'Mapeie o que você já tem disponível',
          steps: [
            'Verifique se o seu computador ou celular já tem alguma dessas ferramentas pré-instalada (ex: Copilot no Windows, Gemini no Android).',
            'Anote qual delas parece mais prática para você começar, considerando o que você já usa no dia a dia.',
          ],
        },
        quiz: {
          question: 'Qual dessas ferramentas de IA vem integrada ao Word e Excel?',
          options: ['Gemini', 'Copilot', 'ChatGPT', 'Nenhuma delas'],
          answer: 1,
          explanation:
            'O Copilot é o assistente de IA da Microsoft, integrado ao Windows e aos aplicativos do Office como Word e Excel.',
        },
        reference: {
          label: 'Microsoft Copilot: visão geral',
          href: 'https://www.microsoft.com/en-us/microsoft-copilot',
        },
      },
      {
        slug: 'mitos-e-verdades-sobre-ia',
        title: 'Mitos e verdades: o que a IA não faz',
        duration: '20 min',
        summary:
          'Grande parte da desconfiança (ou do excesso de confiança) em IA vem de expectativas erradas sobre o que ela realmente consegue fazer. Esta aula desfaz os mitos mais comuns.',
        objectives: [
          'Reconhecer limitações reais da IA generativa atual.',
          'Evitar tanto o excesso de confiança quanto a rejeição total da ferramenta.',
        ],
        keyPoints: [
          {
            title: 'Mito: "a IA sabe tudo e nunca erra"',
            description:
              'A IA pode errar dados, datas, números e até inventar informações com total confiança (isso tem nome: alucinação, e você vai ver em detalhes mais adiante no curso). Ela é uma ferramenta de apoio, não uma fonte final de verdade.',
          },
          {
            title: 'Mito: "a IA vai substituir meu trabalho amanhã"',
            description:
              'Na prática, a IA generativa é melhor em acelerar tarefas específicas (escrever um rascunho, resumir um texto) do que em substituir um trabalho inteiro, que geralmente envolve julgamento, contexto e responsabilidade que a ferramenta não assume sozinha.',
          },
          {
            title: 'Verdade: ela é muito boa em tarefas repetitivas de texto',
            description:
              'Resumir, reescrever, traduzir, organizar ideias soltas em um texto coerente — nessas tarefas a IA generativa realmente economiza tempo de forma consistente, e é aí que vale mais a pena focar o aprendizado.',
          },
        ],
        activity: {
          title: 'Teste os limites',
          steps: [
            'Pergunte para uma IA generativa algo bem específico e recente (por exemplo, um resultado esportivo de ontem).',
            'Observe se ela avisa que não tem certeza, ou se responde com confiança mesmo sem saber.',
            'Anote essa observação — ela vai ser importante na aula sobre alucinação.',
          ],
        },
        quiz: {
          question: 'Por que é arriscado confiar cegamente em qualquer resposta de uma IA generativa?',
          options: [
            'Porque ela é lenta demais para ser útil.',
            'Porque ela pode gerar informações erradas com aparência de certeza.',
            'Porque ela só funciona com internet muito rápida.',
            'Porque ela nunca responde perguntas sobre o passado.',
          ],
          answer: 1,
          explanation:
            'A IA pode produzir respostas erradas com o mesmo tom de confiança de uma resposta correta, então é sempre importante conferir informações importantes antes de usá-las.',
        },
        reference: {
          label: 'Wikipédia: Inteligência artificial',
          href: 'https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_artificial',
        },
      },
    ],
  },
  {
    slug: 'primeiros-passos',
    title: 'Primeiros passos práticos',
    description:
      'Aprenda a usar a interface de uma ferramenta de IA e a habilidade mais importante para conseguir boas respostas: escrever um bom pedido.',
    lessons: [
      {
        slug: 'criando-conta-e-conhecendo-a-interface',
        title: 'Criando sua conta e conhecendo a interface',
        duration: '20 min',
        summary:
          'Antes de tirar proveito de qualquer ferramenta de IA, você precisa saber onde clicar. Esta aula mostra os elementos comuns a praticamente todas as interfaces de chat com IA.',
        objectives: [
          'Criar uma conta em uma ferramenta de IA generativa gratuita.',
          'Reconhecer os elementos básicos comuns à maioria das interfaces de chat com IA.',
        ],
        keyPoints: [
          {
            title: 'Conta gratuita é suficiente para começar',
            description:
              'Todas as ferramentas principais (ChatGPT, Gemini, Copilot) têm uma versão gratuita, com algumas limitações de uso comparadas às versões pagas. Para aprender e usar no dia a dia, a versão gratuita atende bem.',
          },
          {
            title: 'A caixa de texto é o centro de tudo',
            description:
              'A interface geralmente tem uma caixa de texto na parte de baixo da tela, onde você digita o que precisa, e um histórico de conversa acima, mostrando perguntas e respostas anteriores.',
          },
          {
            title: 'Histórico de conversas fica salvo',
            description:
              'Conversas anteriores costumam ficar salvas em um menu lateral, o que permite voltar e continuar de onde parou, ou começar uma conversa nova quando o assunto muda completamente.',
          },
        ],
        activity: {
          title: 'Primeiro acesso',
          steps: [
            'Crie uma conta gratuita em uma das ferramentas (ChatGPT, Gemini ou Copilot).',
            'Localize a caixa de texto, o histórico de conversas e o botão de "nova conversa".',
            'Envie uma primeira mensagem simples, tipo "Olá, pode me explicar o que você consegue fazer?".',
          ],
        },
        quiz: {
          question: 'É necessário pagar para começar a usar uma ferramenta de IA generativa?',
          options: [
            'Sim, todas exigem assinatura paga desde o primeiro uso.',
            'Não, as principais ferramentas têm versão gratuita com algumas limitações.',
            'Só é possível usar IA generativa em empresas.',
            'Sim, mas apenas para uso pessoal.',
          ],
          answer: 1,
          explanation:
            'ChatGPT, Gemini e Copilot oferecem versões gratuitas com uso limitado (comparado aos planos pagos), suficientes para começar a aprender e usar no dia a dia.',
        },
        reference: {
          label: 'Central de Ajuda do Gemini',
          href: 'https://support.google.com/gemini',
        },
      },
      {
        slug: 'como-escrever-um-bom-prompt',
        title: 'Como escrever um bom prompt (a habilidade mais importante)',
        duration: '30 min',
        summary:
          '"Prompt" é o nome dado ao texto que você envia para a IA. A qualidade da resposta depende diretamente da clareza do prompt — essa é a habilidade que mais separa quem usa IA bem de quem se frustra com respostas genéricas.',
        objectives: [
          'Aplicar uma estrutura simples para escrever prompts mais claros.',
          'Refinar um prompt a partir de uma resposta insatisfatória.',
        ],
        keyPoints: [
          {
            title: 'Dê contexto, não só a pergunta',
            description:
              'Em vez de "escreva um e-mail", diga quem é você, para quem é o e-mail e qual o objetivo: "Escreva um e-mail educado pedindo prazo extra para entregar um relatório de trabalho, para meu chefe, em tom formal mas cordial."',
          },
          {
            title: 'Diga o formato que você quer',
            description:
              'Peça explicitamente: "em tópicos", "em até 3 parágrafos", "como uma lista numerada", "em linguagem simples, sem termos técnicos". A IA segue instruções de formato quando você as especifica.',
          },
          {
            title: 'Refine em vez de recomeçar do zero',
            description:
              'Se a resposta não ficou boa, não é preciso apagar tudo. Continue a conversa: "Ficou bom, mas deixe mais curto" ou "Explique de novo, mas como se eu tivesse 10 anos" — a IA ajusta a resposta anterior mantendo o contexto.',
          },
        ],
        activity: {
          title: 'Do prompt vago ao prompt claro',
          steps: [
            'Escreva um prompt bem vago, tipo "me ajuda com um texto".',
            'Observe a resposta genérica que a IA provavelmente vai dar.',
            'Reescreva o mesmo pedido com contexto, objetivo e formato específicos, e compare a diferença na resposta.',
          ],
        },
        quiz: {
          question: 'Qual desses prompts tem mais chance de gerar uma resposta útil?',
          options: [
            '"Me ajuda com uma mensagem."',
            '"Escreva."',
            '"Escreva uma mensagem de WhatsApp educada avisando que vou chegar 15 minutos atrasado numa reunião de trabalho, em tom breve e profissional."',
            '"Texto."',
          ],
          answer: 2,
          explanation:
            'Prompts com contexto (quem, para quem, objetivo) e formato específico (breve, profissional) orientam a IA a gerar uma resposta mais próxima do que você realmente precisa.',
        },
        reference: {
          label: 'Wikipédia: Engenharia de prompts',
          href: 'https://pt.wikipedia.org/wiki/Engenharia_de_prompts',
        },
      },
      {
        slug: 'erros-comuns-de-quem-esta-comecando',
        title: 'Erros comuns de quem está começando',
        duration: '20 min',
        summary:
          'Alguns erros se repetem entre quem está aprendendo a usar IA generativa. Reconhecê-los evita frustração e economiza tempo.',
        objectives: [
          'Identificar os erros mais comuns ao usar IA generativa pela primeira vez.',
          'Corrigir esses erros na prática.',
        ],
        keyPoints: [
          {
            title: 'Esperar que a IA "leia sua mente"',
            description:
              'Pedidos curtos demais, sem contexto, geram respostas genéricas. O erro não é da ferramenta — é a falta de informação no prompt, como vimos na aula anterior.',
          },
          {
            title: 'Aceitar a primeira resposta sem revisar',
            description:
              'Principalmente em textos importantes (e-mail de trabalho, informação técnica, dados), é comum aceitar a resposta sem checar. Sempre revise antes de usar em algo que importa de verdade.',
          },
          {
            title: 'Desistir depois de uma resposta ruim',
            description:
              'Uma resposta insatisfatória não significa que a ferramenta "não serve". Muitas vezes basta ajustar o prompt (mais contexto, outro formato) para obter um resultado bem melhor na mesma conversa.',
          },
        ],
        activity: {
          title: 'Corrija o erro',
          steps: [
            'Pense em uma vez que você (ou alguém que conhece) usou IA e ficou insatisfeito com a resposta.',
            'Identifique qual desses três erros comuns provavelmente aconteceu.',
            'Reescreva o pedido original corrigindo esse erro específico.',
          ],
        },
        quiz: {
          question: 'Qual é a atitude mais produtiva diante de uma resposta ruim da IA?',
          options: [
            'Desistir de usar a ferramenta.',
            'Aceitar a resposta mesmo assim.',
            'Ajustar o prompt com mais contexto e tentar de novo na mesma conversa.',
            'Trocar de ferramenta imediatamente sem tentar de novo.',
          ],
          answer: 2,
          explanation:
            'Refinar o prompt com mais contexto costuma resolver a maioria das respostas insatisfatórias, sem precisar trocar de ferramenta ou desistir.',
        },
        reference: {
          label: 'Wikipédia: ChatGPT',
          href: 'https://pt.wikipedia.org/wiki/ChatGPT',
        },
      },
    ],
  },
  {
    slug: 'trabalho-e-estudos',
    title: 'IA no trabalho e nos estudos',
    description:
      'Aplicações práticas de IA generativa para escrever melhor, resumir conteúdo, aprender assuntos novos e usar dentro de planilhas e documentos.',
    lessons: [
      {
        slug: 'escrevendo-e-revisando-textos-com-ia',
        title: 'Escrevendo e revisando textos com IA (e-mails, mensagens, redações)',
        duration: '25 min',
        summary:
          'Uma das aplicações mais úteis do dia a dia é pedir ajuda para escrever ou revisar um texto — de um e-mail de trabalho a uma mensagem importante.',
        objectives: [
          'Usar IA para gerar um primeiro rascunho de texto.',
          'Usar IA para revisar gramática e tom de um texto já escrito por você.',
        ],
        keyPoints: [
          {
            title: 'Peça um rascunho, não o texto final',
            description:
              'A forma mais eficiente é pedir um primeiro rascunho e depois ajustar você mesmo os detalhes que só você sabe (nomes, datas, informações específicas da sua situação).',
          },
          {
            title: 'Peça revisão do que você já escreveu',
            description:
              'Cole seu próprio texto e peça: "revise a gramática e deixe o tom mais formal, sem mudar o sentido". Isso costuma dar resultados mais fiéis à sua voz do que pedir para a IA escrever do zero.',
          },
          {
            title: 'Sempre releia antes de enviar',
            description:
              'Textos gerados por IA podem soar bem mas conter erros de fato (um nome errado, uma informação trocada) — releia sempre antes de enviar algo importante, principalmente em contexto profissional.',
          },
        ],
        activity: {
          title: 'Revisão prática',
          steps: [
            'Escreva um parágrafo curto sobre qualquer assunto, com erros de digitação propositais.',
            'Peça para a IA revisar gramática e ortografia, mantendo o sentido original.',
            'Compare o antes e o depois.',
          ],
        },
        quiz: {
          question: 'Qual é a forma mais eficiente de usar IA para melhorar um texto que você já escreveu?',
          options: [
            'Pedir para reescrever do zero sem mostrar o texto original.',
            'Colar o texto original e pedir revisão específica (gramática, tom), mantendo o sentido.',
            'Nunca revisar o que a IA sugerir.',
            'Enviar sempre a primeira resposta sem reler.',
          ],
          answer: 1,
          explanation:
            'Colar o texto original e pedir uma revisão específica preserva sua voz e intenção, em vez de gerar um texto genérico do zero.',
        },
        reference: {
          label: 'Wikipédia: Inteligência artificial generativa',
          href: 'https://pt.wikipedia.org/wiki/IA_generativa',
        },
      },
      {
        slug: 'resumindo-textos-videos-e-reunioes',
        title: 'Resumindo textos, vídeos longos e reuniões',
        duration: '20 min',
        summary:
          'Resumir conteúdo longo é uma das tarefas em que a IA generativa economiza mais tempo de forma consistente e confiável.',
        objectives: [
          'Usar IA para resumir um texto longo em poucos parágrafos.',
          'Pedir resumos em diferentes formatos, de acordo com a necessidade.',
        ],
        keyPoints: [
          {
            title: 'Cole o texto e peça o tipo de resumo',
            description:
              'Além de "resuma", especifique o formato: "resuma em 5 tópicos", "resuma em um parágrafo para alguém que não leu nada do assunto", "liste só as decisões tomadas nesse texto".',
          },
          {
            title: 'Transcrições de reunião também podem ser resumidas',
            description:
              'Se você tem a transcrição de uma reunião (muitas ferramentas de videoconferência geram automaticamente), pode colar o texto e pedir um resumo com as decisões e próximos passos.',
          },
          {
            title: 'Textos muito longos podem precisar ser divididos',
            description:
              'Ferramentas gratuitas têm um limite de quantidade de texto que aceitam de uma vez. Para documentos muito extensos, pode ser necessário colar em partes e pedir um resumo de cada parte.',
          },
        ],
        activity: {
          title: 'Resuma um texto real',
          steps: [
            'Escolha um artigo de notícia ou um texto longo que você tenha em mãos.',
            'Peça um resumo em 5 tópicos.',
            'Peça o mesmo resumo em um único parágrafo, e compare qual formato ficou mais útil para o seu objetivo.',
          ],
        },
        quiz: {
          question: 'Por que pode ser necessário dividir um documento muito longo em partes antes de pedir um resumo?',
          options: [
            'Porque a IA se recusa a resumir textos longos por princípio.',
            'Porque ferramentas gratuitas têm um limite de quantidade de texto aceito de uma vez.',
            'Porque resumos só funcionam com textos curtos.',
            'Porque a IA cobra por palavra resumida.',
          ],
          answer: 1,
          explanation:
            'Existe um limite técnico de quantidade de texto que a ferramenta processa de uma vez (mais apertado nas versões gratuitas), por isso documentos muito longos às vezes precisam ser divididos.',
        },
        reference: {
          label: 'Central de Ajuda do Gemini',
          href: 'https://support.google.com/gemini',
        },
      },
      {
        slug: 'ia-como-tutor-pessoal',
        title: 'IA como tutor: aprendendo qualquer assunto do zero',
        duration: '25 min',
        summary:
          'Além de gerar texto, a IA generativa é útil como um "professor particular" disponível a qualquer hora, capaz de explicar um assunto de formas diferentes até fazer sentido para você.',
        objectives: [
          'Usar IA para entender um assunto desconhecido, em etapas.',
          'Pedir explicações em diferentes níveis de dificuldade.',
        ],
        keyPoints: [
          {
            title: 'Peça explicações em camadas',
            description:
              'Comece com "explique de forma simples, como se eu não soubesse nada sobre o assunto" e depois vá pedindo mais profundidade: "agora explique com mais detalhes técnicos".',
          },
          {
            title: 'Peça exemplos e analogias',
            description:
              'Assuntos abstratos ficam mais claros com exemplos do dia a dia: "me dê um exemplo prático disso" ou "explique isso como se fosse uma receita de bolo" ajudam a fixar o conceito.',
          },
          {
            title: 'Peça para ser testado',
            description:
              'Depois de estudar um assunto, peça: "me faça 5 perguntas sobre o que acabamos de conversar, para eu testar se entendi". Isso transforma a IA em uma ferramenta de revisão ativa, não só de leitura passiva.',
          },
        ],
        activity: {
          title: 'Aprenda algo novo agora',
          steps: [
            'Escolha um assunto que você sempre quis entender melhor, mesmo que simples.',
            'Peça uma explicação simples, depois peça um exemplo prático.',
            'Peça 3 perguntas para testar se você entendeu, e responda antes de conferir.',
          ],
        },
        quiz: {
          question: 'Qual estratégia ajuda a fixar melhor um assunto explicado pela IA?',
          options: [
            'Ler a explicação uma única vez e não fazer mais nada.',
            'Pedir exemplos práticos e depois perguntas para testar o próprio entendimento.',
            'Nunca pedir exemplos, só definições formais.',
            'Evitar fazer perguntas de acompanhamento.',
          ],
          answer: 1,
          explanation:
            'Pedir exemplos práticos e depois se testar com perguntas transforma o aprendizado de passivo (só ler) para ativo, o que ajuda a fixar melhor o conteúdo.',
        },
        reference: {
          label: 'Wikipédia: Inteligência artificial',
          href: 'https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_artificial',
        },
      },
      {
        slug: 'ia-no-word-excel-e-google-docs',
        title: 'IA dentro do Word, Excel e Google Docs/Planilhas',
        duration: '25 min',
        summary:
          'Copilot (Microsoft) e Gemini (Google) já vêm integrados dentro dos programas de escritório mais usados, permitindo pedir ajuda sem sair do documento ou da planilha.',
        objectives: [
          'Reconhecer onde encontrar a IA integrada dentro do Word, Excel e Google Docs/Planilhas.',
          'Usar comandos básicos de IA para gerar texto ou fórmulas simples.',
        ],
        keyPoints: [
          {
            title: 'No Word e Google Docs: geração e revisão de texto',
            description:
              'É possível pedir para gerar um rascunho direto dentro do documento, resumir o texto já escrito, ou ajustar o tom, sem precisar copiar e colar em outra aba.',
          },
          {
            title: 'No Excel e Google Planilhas: ajuda com fórmulas',
            description:
              'Em vez de decorar fórmulas complexas, você pode descrever o que precisa em português ("some os valores da coluna B só para os itens marcados como pagos") e a IA sugere a fórmula correspondente.',
          },
          {
            title: 'A integração depende do plano e da versão',
            description:
              'Nem toda conta gratuita do Office ou Google Workspace tem acesso completo à IA integrada — algumas funções avançadas exigem assinatura paga. Vale conferir o que está disponível na sua versão antes de contar com o recurso.',
          },
        ],
        activity: {
          title: 'Teste a IA dentro de um documento',
          steps: [
            'Abra o Word, Google Docs, Excel ou Google Planilhas e procure o ícone ou menu de IA (Copilot ou Gemini).',
            'Se disponível, peça para gerar um parágrafo simples ou uma fórmula descrita em português.',
            'Se não tiver acesso na sua versão, anote isso e continue usando a IA pelo chat normal, colando o conteúdo depois.',
          ],
        },
        quiz: {
          question: 'Por que descrever o que você precisa em português pode ajudar no Excel com IA?',
          options: [
            'Porque o Excel não aceita mais fórmulas digitadas manualmente.',
            'Porque a IA pode sugerir a fórmula correspondente, sem você precisar decorar a sintaxe.',
            'Porque fórmulas em português são mais rápidas de calcular.',
            'Porque isso substitui a necessidade de revisar o resultado.',
          ],
          answer: 1,
          explanation:
            'Descrever a necessidade em linguagem natural permite que a IA sugira a fórmula técnica correspondente, o que ajuda quem não decora a sintaxe das fórmulas.',
        },
        reference: {
          label: 'Microsoft Copilot: visão geral',
          href: 'https://www.microsoft.com/en-us/microsoft-copilot',
        },
      },
    ],
  },
  {
    slug: 'uso-pessoal-e-criativo',
    title: 'Uso pessoal e criativo',
    description:
      'Explore aplicações de IA generativa fora do ambiente de trabalho: imagens, organização pessoal e pesquisa com mais critério.',
    lessons: [
      {
        slug: 'criando-imagens-com-ia-o-basico',
        title: 'Criando imagens com IA: o básico',
        duration: '20 min',
        summary:
          'Além de texto, muitas ferramentas de IA também geram imagens a partir de uma descrição escrita. O princípio é parecido com o de um bom prompt de texto: quanto mais detalhes, melhor o resultado.',
        objectives: [
          'Gerar uma imagem simples a partir de uma descrição em texto.',
          'Entender os limites atuais dessa tecnologia (detalhes, texto em imagens, mãos e rostos).',
        ],
        keyPoints: [
          {
            title: 'Descreva cena, estilo e detalhes',
            description:
              'Um bom prompt de imagem inclui o que aparece na cena, o estilo (foto realista, desenho, aquarela) e detalhes de cor, iluminação ou enquadramento.',
          },
          {
            title: 'Nem toda ferramenta de texto gera imagem',
            description:
              'Algumas ferramentas de IA de texto (como certas versões gratuitas) não incluem geração de imagem — vale conferir se a ferramenta que você usa tem esse recurso disponível.',
          },
          {
            title: 'Erros comuns ainda acontecem',
            description:
              'Texto dentro de imagens geradas por IA, mãos com número errado de dedos e detalhes pequenos ainda saem errados com frequência — é normal precisar gerar mais de uma vez até obter um resultado satisfatório.',
          },
        ],
        activity: {
          title: 'Gere sua primeira imagem',
          steps: [
            'Em uma ferramenta com geração de imagem disponível, descreva uma cena simples com estilo específico.',
            'Gere a imagem e observe se algum detalhe saiu estranho (texto, mãos, objetos).',
            'Ajuste a descrição e gere novamente, comparando o resultado.',
          ],
        },
        quiz: {
          question: 'O que costuma sair errado com mais frequência em imagens geradas por IA?',
          options: [
            'A cor de fundo, que nunca é gerada corretamente.',
            'Detalhes como texto dentro da imagem e número de dedos nas mãos.',
            'O tamanho do arquivo, que sempre fica grande demais.',
            'A velocidade de geração, que é sempre instantânea.',
          ],
          answer: 1,
          explanation:
            'Texto embutido na imagem e detalhes anatômicos como mãos ainda são pontos fracos comuns das ferramentas de geração de imagem por IA.',
        },
        reference: {
          label: 'Wikipédia: IA generativa',
          href: 'https://pt.wikipedia.org/wiki/IA_generativa',
        },
      },
      {
        slug: 'planejando-rotina-viagens-e-receitas-com-ia',
        title: 'Planejando rotina, viagens e receitas com IA',
        duration: '20 min',
        summary:
          'Fora do ambiente de trabalho, a IA generativa também ajuda em tarefas pessoais como montar um roteiro de viagem, organizar a semana ou sugerir receitas com os ingredientes que você já tem em casa.',
        objectives: [
          'Usar IA para montar um plano prático (roteiro, cardápio, rotina).',
          'Refinar sugestões da IA com restrições pessoais (orçamento, tempo, preferências).',
        ],
        keyPoints: [
          {
            title: 'Dê suas restrições desde o início',
            description:
              'Quanto mais restrições você informa (orçamento, tempo disponível, alergias, preferências), mais útil fica a sugestão — em vez de "sugira um roteiro de viagem", diga "roteiro de 3 dias em [cidade], orçamento baixo, sem carro alugado".',
          },
          {
            title: 'Peça alternativas, não só uma resposta',
            description:
              '"Me dê 3 opções de jantar com esses ingredientes que tenho na geladeira" costuma ser mais útil do que aceitar a primeira sugestão sem comparar.',
          },
          {
            title: 'Confirme informações práticas por fora',
            description:
              'Preços, horários de funcionamento e disponibilidade podem estar desatualizados na resposta da IA — sempre confirme esse tipo de informação prática em uma fonte atual antes de contar com ela.',
          },
        ],
        activity: {
          title: 'Planeje algo real',
          steps: [
            'Escolha uma tarefa pessoal real: um cardápio da semana, um roteiro de passeio ou uma rotina de estudos.',
            'Escreva um prompt com suas restrições reais (tempo, orçamento, preferências).',
            'Peça 3 alternativas e escolha a que faz mais sentido para você.',
          ],
        },
        quiz: {
          question: 'Por que é importante confirmar por fora informações práticas como preços e horários sugeridos pela IA?',
          options: [
            'Porque a IA nunca acerta esse tipo de informação.',
            'Porque essas informações podem estar desatualizadas em relação à realidade atual.',
            'Porque isso não é permitido pelos termos de uso.',
            'Porque a IA só responde perguntas sobre comida.',
          ],
          answer: 1,
          explanation:
            'O conhecimento da IA tem uma data de corte e pode não refletir mudanças recentes em preços, horários ou disponibilidade — vale sempre conferir esse tipo de dado em uma fonte atual.',
        },
        reference: {
          label: 'Wikipédia: Inteligência artificial generativa',
          href: 'https://pt.wikipedia.org/wiki/IA_generativa',
        },
      },
      {
        slug: 'pesquisando-com-ia-sem-cair-em-erro',
        title: 'Pesquisando com IA sem cair em informação errada',
        duration: '25 min',
        summary:
          'Usar IA como ponto de partida para pesquisa é útil, mas exige um cuidado a mais do que uma busca tradicional, já que a resposta vem pronta e sem links de fonte na maioria das vezes.',
        objectives: [
          'Usar IA como ponto de partida de pesquisa, não como fonte final.',
          'Aplicar uma checagem simples antes de considerar uma informação confiável.',
        ],
        keyPoints: [
          {
            title: 'Peça as fontes quando possível',
            description:
              'Algumas ferramentas conseguem buscar na internet e indicar de onde veio a informação. Quando isso está disponível, peça explicitamente: "me diga de onde veio essa informação" ou "busque fontes atuais sobre isso".',
          },
          {
            title: 'Desconfie de números e datas muito específicos',
            description:
              'Estatísticas, valores exatos e datas são os pontos onde a IA mais erra ou "inventa" com aparência de certeza. Sempre confirme esse tipo de dado específico em uma busca tradicional antes de repassar adiante.',
          },
          {
            title: 'Use a IA para organizar, a busca tradicional para confirmar',
            description:
              'Uma boa combinação é: usar a IA para organizar e resumir um assunto amplo, e uma busca tradicional (Google, site oficial) para confirmar os pontos mais específicos e importantes.',
          },
        ],
        activity: {
          title: 'Pesquisa combinada',
          steps: [
            'Escolha um assunto que você queira pesquisar.',
            'Peça um resumo geral para a IA sobre o assunto.',
            'Escolha um dado específico dessa resposta (um número, uma data) e confirme em uma busca tradicional se está correto.',
          ],
        },
        quiz: {
          question: 'Qual tipo de informação exige mais cuidado extra ao vir de uma resposta de IA?',
          options: [
            'Explicações gerais sobre um conceito amplo.',
            'Números, datas e estatísticas específicas.',
            'Sugestões de estilo de escrita.',
            'Resumos de texto que você mesmo forneceu.',
          ],
          answer: 1,
          explanation:
            'Dados muito específicos (números, datas, estatísticas) são onde a IA mais erra com aparência de certeza, por isso merecem confirmação extra em uma fonte confiável.',
        },
        reference: {
          label: 'Wikipédia: Alucinação (inteligência artificial)',
          href: 'https://pt.wikipedia.org/wiki/Alucina%C3%A7%C3%A3o_(intelig%C3%AAncia_artificial)',
        },
      },
    ],
  },
  {
    slug: 'seguranca-e-uso-responsavel',
    title: 'Segurança e uso responsável',
    description:
      'O que evitar compartilhar com uma IA, por que ela às vezes "inventa" respostas, e como se proteger de golpes que hoje usam inteligência artificial.',
    lessons: [
      {
        slug: 'o-que-nunca-compartilhar-com-uma-ia',
        title: 'O que nunca compartilhar com uma IA',
        duration: '25 min',
        summary:
          'Tudo que você digita em uma ferramenta de IA pode ser usado para treinar futuras versões do sistema ou ficar registrado nos servidores da empresa, dependendo da configuração de privacidade. Por isso, alguns tipos de informação merecem cuidado redobrado.',
        objectives: [
          'Identificar categorias de informação que não devem ser compartilhadas com uma IA.',
          'Ajustar configurações de privacidade quando disponíveis.',
        ],
        keyPoints: [
          {
            title: 'Dados sensíveis pessoais e financeiros',
            description:
              'Número de CPF, dados bancários completos, senhas, códigos de verificação — nada disso deve ser digitado em uma conversa com IA, da mesma forma que você não enviaria isso por e-mail para um desconhecido.',
          },
          {
            title: 'Informações confidenciais de trabalho',
            description:
              'Dados de clientes, contratos, informações internas da empresa antes de anúncio público — verifique a política da sua empresa antes de colar esse tipo de conteúdo em uma ferramenta de IA externa.',
          },
          {
            title: 'Verifique as configurações de privacidade',
            description:
              'Várias ferramentas permitem desativar o uso das suas conversas para treinamento do modelo, nas configurações de privacidade da conta. Vale revisar essa opção, mesmo sabendo que ela reduz, mas não elimina totalmente, o risco.',
          },
        ],
        activity: {
          title: 'Auditoria rápida',
          steps: [
            'Pense nas últimas conversas que você teve com alguma IA (ou imagine como seriam).',
            'Verifique se algum dado sensível foi compartilhado sem necessidade.',
            'Acesse as configurações de privacidade da ferramenta que você usa e veja se é possível desativar o uso de conversas para treinamento.',
          ],
        },
        quiz: {
          question: 'Por que dados bancários e senhas nunca devem ser digitados em uma conversa com IA?',
          options: [
            'Porque a IA não consegue processar números.',
            'Porque esse tipo de informação pode ficar registrada nos servidores da empresa ou ser usada em treinamento, dependendo da configuração.',
            'Porque isso deixa a resposta mais lenta.',
            'Porque a IA sempre compartilha isso publicamente de propósito.',
          ],
          answer: 1,
          explanation:
            'Conversas com IA podem ficar registradas ou ser usadas em treinamento dependendo da configuração de privacidade, por isso dados sensíveis nunca devem ser compartilhados, como regra geral de segurança.',
        },
        reference: {
          label: 'Cartilha de Segurança para Internet — CERT.br',
          href: 'https://cartilha.cert.br/livro/',
        },
      },
      {
        slug: 'alucinacao-por-que-a-ia-inventa-respostas',
        title: 'Alucinação: por que a IA "inventa" respostas com confiança',
        duration: '25 min',
        summary:
          '"Alucinação" é o termo usado quando uma IA generativa produz uma informação falsa, mas a apresenta com a mesma confiança de uma informação verdadeira. Entender por que isso acontece ajuda a se proteger desse risco.',
        objectives: [
          'Explicar por que a IA pode gerar informações falsas com aparência de certeza.',
          'Aplicar estratégias práticas para reduzir o risco de repassar uma alucinação adiante.',
        ],
        keyPoints: [
          {
            title: 'A IA não sabe que não sabe',
            description:
              'Como o modelo funciona prevendo a palavra mais provável (visto na primeira aula do curso), ele pode "completar" uma resposta plausível mesmo sem ter uma informação confiável sobre o assunto — e o tom da resposta não muda por causa disso.',
          },
          {
            title: 'É mais comum em temas muito específicos ou recentes',
            description:
              'Perguntas sobre pessoas pouco conhecidas, eventos muito recentes, ou pedidos de citações e referências exatas (como um artigo científico específico) são os casos mais propensos a alucinação.',
          },
          {
            title: 'Peça o nível de confiança e confirme fora da IA',
            description:
              'Perguntar "você tem certeza dessa informação?" às vezes ajuda a IA a reconsiderar, mas o mais confiável é sempre confirmar dados importantes em uma fonte externa antes de repassar adiante.',
          },
        ],
        activity: {
          title: 'Provoque uma alucinação (com segurança)',
          steps: [
            'Peça para a IA citar uma referência bem específica sobre um tema pouco comum (ex: um livro ou artigo obscuro).',
            'Tente confirmar se essa referência realmente existe através de uma busca tradicional.',
            'Reflita sobre como essa resposta soou confiante mesmo se estiver errada.',
          ],
        },
        quiz: {
          question: 'O que é "alucinação" no contexto de IA generativa?',
          options: [
            'Um erro técnico que trava o programa.',
            'Quando a IA gera uma informação falsa, mas a apresenta com aparência de certeza.',
            'Quando a IA se recusa a responder.',
            'Um recurso usado apenas para gerar imagens artísticas.',
          ],
          answer: 1,
          explanation:
            'Alucinação é o termo usado quando a IA generativa produz uma informação incorreta ou inventada, mas com o mesmo tom confiante de uma resposta correta.',
        },
        reference: {
          label: 'Wikipédia: Alucinação (inteligência artificial)',
          href: 'https://pt.wikipedia.org/wiki/Alucina%C3%A7%C3%A3o_(intelig%C3%AAncia_artificial)',
        },
      },
      {
        slug: 'direitos-autorais-e-uso-etico',
        title: 'Direitos autorais e uso ético do conteúdo gerado',
        duration: '20 min',
        summary:
          'Usar conteúdo gerado por IA em trabalhos, redes sociais ou no trabalho levanta questões de originalidade e transparência que vale a pena entender antes de publicar algo.',
        objectives: [
          'Reconhecer boas práticas de transparência ao usar conteúdo gerado por IA.',
          'Entender por que revisar e personalizar o conteúdo gerado é importante.',
        ],
        keyPoints: [
          {
            title: 'Transparência em contextos formais',
            description:
              'Em trabalhos acadêmicos, currículos ou textos profissionais, muitas instituições já pedem que se informe quando IA foi usada como apoio. Vale verificar a política do local antes de entregar algo gerado sem revisão.',
          },
          {
            title: 'Conteúdo gerado por IA não é 100% "seu"',
            description:
              'Como o texto ou imagem foi produzido a partir de padrões aprendidos de muitas fontes, é importante revisar, personalizar e adicionar sua própria perspectiva antes de assumir a autoria de algo gerado por IA.',
          },
          {
            title: 'Evite usar IA para se passar por outra pessoa',
            description:
              'Gerar textos ou imagens imitando o estilo de uma pessoa real sem permissão, ou fazendo parecer que ela disse algo que não disse, é um uso antiético e, em alguns casos, ilegal.',
          },
        ],
        activity: {
          title: 'Checklist de uso ético',
          steps: [
            'Pense em um contexto onde você usaria conteúdo de IA (trabalho, estudo, rede social).',
            'Verifique se esse contexto exige informar o uso de IA.',
            'Revise e personalize o conteúdo antes de considerá-lo pronto para usar.',
          ],
        },
        quiz: {
          question: 'Por que é recomendável revisar e personalizar um texto gerado por IA antes de assumir autoria total?',
          options: [
            'Porque a IA sempre escreve errado de propósito.',
            'Porque o conteúdo foi gerado a partir de padrões de muitas fontes e pode não refletir totalmente sua perspectiva.',
            'Porque isso é proibido em qualquer situação.',
            'Porque revisar deixa o texto mais longo.',
          ],
          answer: 1,
          explanation:
            'Como o conteúdo gerado reflete padrões aprendidos de muitas fontes, revisar e personalizar ajuda a garantir que o resultado final realmente represente sua perspectiva e responsabilidade sobre o que está sendo publicado.',
        },
        reference: {
          label: 'Autoridade Nacional de Proteção de Dados (ANPD)',
          href: 'https://www.gov.br/anpd/pt-br',
        },
      },
      {
        slug: 'deepfakes-e-golpes-com-ia',
        title: 'Deepfakes e golpes com IA: como se proteger',
        duration: '25 min',
        summary:
          'A mesma tecnologia usada para gerar textos e imagens também é usada por golpistas para criar áudios, vídeos e fotos falsas cada vez mais convincentes — os chamados deepfakes.',
        objectives: [
          'Explicar o que é um deepfake e como ele é usado em golpes.',
          'Aplicar verificações simples para desconfiar de conteúdo suspeito gerado por IA.',
        ],
        keyPoints: [
          {
            title: 'O que é um deepfake',
            description:
              'É um vídeo, áudio ou imagem manipulado por IA para fazer parecer que uma pessoa disse ou fez algo que nunca aconteceu de verdade — usando a voz e o rosto reais da pessoa como base.',
          },
          {
            title: 'Áudio clonado em golpes de "parente em apuros"',
            description:
              'Existem golpes que usam poucos segundos de áudio de uma pessoa (tirados, por exemplo, de vídeos em redes sociais) para clonar a voz e simular uma ligação de emergência pedindo dinheiro. Assim como no golpe do Pix visto nos artigos do site, a melhor defesa é sempre confirmar por outro canal antes de agir.',
          },
          {
            title: 'Sinais de vídeo ou imagem manipulados',
            description:
              'Piscar de olhos estranho, movimento labial fora de sincronia com o áudio, iluminação inconsistente no rosto e bordas borradas ao redor do rosto são sinais possíveis de manipulação — mas a tecnologia está cada vez mais difícil de identificar a olho nu, então desconfiar do contexto é tão importante quanto observar detalhes técnicos.',
          },
        ],
        activity: {
          title: 'Plano de verificação',
          steps: [
            'Imagine que você recebe uma ligação de voz parecida com a de um familiar, pedindo dinheiro com urgência.',
            'Liste 2 formas de confirmar se é realmente essa pessoa, sem usar o mesmo canal da ligação recebida.',
            'Guarde esse plano — é a mesma lógica usada contra golpes de Pix e clonagem de WhatsApp.',
          ],
        },
        quiz: {
          question: 'Qual é a defesa mais confiável contra um possível golpe de voz clonada por IA?',
          options: [
            'Confiar sempre que a voz parece igual à da pessoa.',
            'Confirmar a situação por outro canal de comunicação antes de agir.',
            'Fazer a transferência rapidamente para não perder tempo.',
            'Ignorar sempre qualquer ligação desconhecida.',
          ],
          answer: 1,
          explanation:
            'Assim como em outros golpes que usam urgência, confirmar por outro canal (uma ligação de volta, uma mensagem para outro contato da família) é a defesa mais confiável contra voz clonada por IA.',
        },
        reference: {
          label: 'Dicas Rápidas de Segurança — CERT.br',
          href: 'https://cartilha.cert.br/dicas-rapidas/',
        },
      },
    ],
  },
  {
    slug: 'construindo-sua-rotina',
    title: 'Construindo sua rotina com IA',
    description:
      'Uma visão prática de qual ferramenta usar para cada tarefa, atalhos úteis, e um checklist final para consolidar o que foi aprendido.',
    lessons: [
      {
        slug: 'qual-ia-usar-para-cada-tarefa',
        title: 'Qual IA usar para cada tarefa: comparativo prático',
        duration: '20 min',
        summary:
          'Não existe uma única ferramenta "melhor" — a escolha depende do que você já usa no dia a dia e do tipo de tarefa. Esta aula resume um guia prático de decisão.',
        objectives: [
          'Escolher qual ferramenta faz mais sentido para diferentes tipos de tarefa.',
          'Evitar o erro de achar que é preciso escolher só uma ferramenta para sempre.',
        ],
        keyPoints: [
          {
            title: 'Já usa Gmail, Docs ou Android? Comece pelo Gemini',
            description:
              'A vantagem de usar a ferramenta já integrada ao que você tem é não precisar copiar e colar entre programas diferentes.',
          },
          {
            title: 'Já usa Word, Excel ou Windows? Comece pelo Copilot',
            description:
              'Mesma lógica: aproveitar a integração nativa economiza passos, especialmente para tarefas dentro de planilhas e documentos.',
          },
          {
            title: 'Não tem preferência de ecossistema? ChatGPT é uma referência sólida',
            description:
              'Por ser uma das ferramentas mais usadas e testadas, o ChatGPT costuma ser uma boa porta de entrada para quem não depende de uma integração específica com Google ou Microsoft.',
          },
        ],
        activity: {
          title: 'Monte seu mapa pessoal',
          steps: [
            'Liste as 3 tarefas que você mais gostaria de facilitar com IA (ex: e-mails, planilhas, pesquisa).',
            'Para cada uma, escolha a ferramenta que faz mais sentido considerando o que você já usa no dia a dia.',
            'Não se preocupe em escolher "a única" — é normal usar mais de uma ferramenta para tarefas diferentes.',
          ],
        },
        quiz: {
          question: 'Qual critério prático ajuda a escolher entre Gemini, Copilot ou ChatGPT para o dia a dia?',
          options: [
            'Escolher sempre a ferramenta mais recente lançada.',
            'Considerar quais programas você já usa (Google, Microsoft) para aproveitar a integração nativa.',
            'Usar sempre a mesma ferramenta, independente da tarefa.',
            'Escolher aleatoriamente a cada uso.',
          ],
          answer: 1,
          explanation:
            'Considerar a integração com os programas que você já usa (Google ou Microsoft) reduz passos extras de copiar e colar entre ferramentas diferentes.',
        },
        reference: {
          label: 'Wikipédia: Copilot',
          href: 'https://pt.wikipedia.org/wiki/Copilot',
        },
      },
      {
        slug: 'atalhos-e-apps-que-facilitam-o-dia-a-dia',
        title: 'Atalhos, extensões e apps que facilitam o dia a dia',
        duration: '15 min',
        summary:
          'Pequenos ajustes na forma de acessar a IA — como um atalho no celular ou uma extensão no navegador — economizam tempo em tarefas que você repete com frequência.',
        objectives: [
          'Identificar formas de tornar o acesso à IA mais rápido no dia a dia.',
          'Avaliar com cautela extensões de terceiros antes de instalar.',
        ],
        keyPoints: [
          {
            title: 'Aplicativo oficial no celular',
            description:
              'Instalar o aplicativo oficial (ChatGPT, Gemini, Copilot) permite usar por voz e ter acesso rápido, sem precisar abrir o navegador toda vez.',
          },
          {
            title: 'Atalhos de teclado no computador',
            description:
              'Algumas ferramentas oferecem atalhos de teclado para abrir rapidamente a caixa de conversa a partir de qualquer programa — vale verificar nas configurações da ferramenta que você usa.',
          },
          {
            title: 'Cuidado com extensões de terceiros não oficiais',
            description:
              'Extensões de navegador que prometem "IA grátis ilimitada" e não são da empresa oficial merecem desconfiança — podem coletar dados de navegação sem seu conhecimento. Prefira sempre os aplicativos e extensões oficiais.',
          },
        ],
        activity: {
          title: 'Configure seu acesso rápido',
          steps: [
            'Instale o aplicativo oficial da ferramenta de IA que você mais usa no seu celular.',
            'Verifique se existe atalho de teclado disponível no computador para a mesma ferramenta.',
            'Evite instalar qualquer extensão de "IA grátis" que não seja da empresa oficial.',
          ],
        },
        quiz: {
          question: 'Por que é recomendável desconfiar de extensões de "IA grátis ilimitada" de terceiros não oficiais?',
          options: [
            'Porque elas são sempre mais lentas.',
            'Porque podem coletar dados de navegação sem o conhecimento do usuário.',
            'Porque não existem extensões desse tipo.',
            'Porque só funcionam em computadores muito antigos.',
          ],
          answer: 1,
          explanation:
            'Extensões não oficiais que prometem acesso "grátis ilimitado" a ferramentas de IA pagas são um sinal de alerta comum para coleta indevida de dados — prefira sempre aplicativos e extensões oficiais.',
        },
        reference: {
          label: 'Dicas Rápidas de Segurança — CERT.br',
          href: 'https://cartilha.cert.br/dicas-rapidas/',
        },
      },
      {
        slug: 'monte-seu-checklist-pessoal-de-uso-de-ia',
        title: 'Monte seu checklist pessoal de uso de IA',
        duration: '20 min',
        summary:
          'Para fechar o curso, esta aula reúne em um checklist único os principais hábitos vistos ao longo dos módulos, para você aplicar toda vez que for usar uma IA generativa.',
        objectives: [
          'Consolidar os principais aprendizados do curso em um checklist prático.',
          'Aplicar esse checklist na próxima vez que usar uma IA generativa.',
        ],
        keyPoints: [
          {
            title: 'Antes de perguntar: dê contexto e formato',
            description:
              'Relembrando a aula sobre prompts: quem é você, qual o objetivo e em que formato você quer a resposta.',
          },
          {
            title: 'Antes de confiar: confirme dados específicos',
            description:
              'Números, datas e nomes específicos merecem uma checagem rápida fora da IA antes de repassar adiante, especialmente em contexto profissional.',
          },
          {
            title: 'Antes de compartilhar: pense duas vezes',
            description:
              'Nunca digite senhas, dados bancários ou informações confidenciais de trabalho em uma conversa com IA — a mesma regra vale para qualquer serviço online.',
          },
        ],
        activity: {
          title: 'Seu checklist final',
          steps: [
            'Escreva, com suas próprias palavras, um checklist de 5 itens que você vai seguir toda vez que usar IA a partir de agora.',
            'Inclua pelo menos um item sobre prompt, um sobre checagem de informação e um sobre segurança de dados.',
            'Guarde esse checklist em algum lugar acessível (nota no celular, por exemplo) para consultar sempre que precisar.',
          ],
        },
        quiz: {
          question: 'Qual combinação de hábitos resume melhor um uso responsável de IA no dia a dia?',
          options: [
            'Aceitar toda resposta sem revisar e compartilhar qualquer dado pedido.',
            'Dar contexto claro no prompt, confirmar dados específicos fora da IA e nunca compartilhar informação sensível.',
            'Usar sempre a mesma ferramenta e nunca revisar respostas.',
            'Evitar completamente o uso de IA por qualquer motivo.',
          ],
          answer: 1,
          explanation:
            'Os três hábitos — prompt com contexto, checagem de dados específicos e cuidado com informação sensível — resumem o uso responsável ensinado ao longo do curso.',
        },
        reference: {
          label: 'Cartilha de Segurança para Internet — CERT.br',
          href: 'https://cartilha.cert.br/livro/',
        },
      },
    ],
  },
]

export const iaCourseLessons = iaCourseModules.flatMap((module, moduleIndex) =>
  module.lessons.map((lesson, lessonIndex) => ({
    ...lesson,
    module,
    moduleIndex,
    lessonIndex,
  })),
)

export const iaCourseStats = {
  modules: iaCourseModules.length,
  lessons: iaCourseLessons.length,
  workload: '7h',
}

export function getIaLesson(slug: string) {
  return iaCourseLessons.find((lesson) => lesson.slug === slug)
}

export const iaCourseSources = [
  { label: 'Wikipédia: IA generativa', href: 'https://pt.wikipedia.org/wiki/IA_generativa' },
  { label: 'Central de Ajuda do Gemini', href: 'https://support.google.com/gemini' },
  { label: 'Microsoft Copilot: visão geral', href: 'https://www.microsoft.com/en-us/microsoft-copilot' },
  { label: 'Cartilha de Segurança para Internet — CERT.br', href: 'https://cartilha.cert.br/livro/' },
  { label: 'Autoridade Nacional de Proteção de Dados (ANPD)', href: 'https://www.gov.br/anpd/pt-br' },
]
