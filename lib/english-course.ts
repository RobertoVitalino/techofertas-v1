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

export const englishCourseModules: CourseModule[] = [
  {
    slug: 'primeiros-passos',
    title: 'Primeiros Passos no Inglês',
    description:
      'O ponto de partida: o alfabeto, os números e as primeiras palavras para cumprimentar alguém em inglês.',
    lessons: [
      {
        slug: 'alfabeto-e-pronuncia',
        video: { youtubeId: 'qG5zI9KUbl0', title: 'ALFABETO EM INGLÊS │ [ A-Z ] Não Erre mais a Pronúncia das Letras com Teacher Elza' },
        title: 'O alfabeto e a pronúncia básica',
        duration: '25 min',
        summary:
          'Antes de falar frases, é preciso saber soletrar. O alfabeto em inglês tem as mesmas 26 letras do português, mas várias delas são pronunciadas de um jeito bem diferente — e isso confunde muito iniciante.',
        objectives: [
          'Recitar o alfabeto em inglês do A ao Z.',
          'Soletrar o próprio nome em inglês.',
        ],
        keyPoints: [
          {
            title: 'As 26 letras, um som diferente',
            description:
              'O alfabeto tem as mesmas letras do português, mas a pronúncia muda bastante: "H" soa como "êitch", "G" como "dji", "J" como "djêi", "R" como "ar" e "W" como "dâblio". Vale a pena ouvir e repetir várias vezes até o som ficar natural.',
          },
          {
            title: 'Letras que mais confundem brasileiros',
            description:
              'As vogais (A, E, I, O, U) mudam completamente de som em relação ao português. Além disso, "G" e "J" e "I" e "E" costumam ser trocados por quem está começando. Prestar atenção nesses pares específicos acelera o aprendizado.',
          },
          {
            title: 'Soletrar (spelling) é uma habilidade prática',
            description:
              'Em situações reais — dar um e-mail por telefone, confirmar o nome em um cadastro, informar um código — você vai precisar soletrar em inglês. Praticar isso desde já evita travar depois.',
          },
        ],
        activity: {
          title: 'Soletrando seu nome',
          steps: [
            'Escreva o alfabeto em inglês de A a Z, letra por letra.',
            'Soletre seu primeiro nome em voz alta, usando a pronúncia em inglês de cada letra.',
            'Escolha mais duas palavras curtas (podem ser em português) e tente soletrá-las em inglês.',
          ],
        },
        quiz: {
          question: 'Qual é a pronúncia aproximada da letra "H" em inglês?',
          options: ['"Agá"', '"Êitch"', '"Rê"', '"Iagá"'],
          answer: 1,
          explanation:
            'Em inglês, a letra "H" é pronunciada como "êitch" — bem diferente do "agá" do português, e é uma das letras que mais confunde iniciantes.',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
      {
        slug: 'numeros-de-0-a-100',
        video: { youtubeId: 'yAb4kAT9kco', title: 'Inglês fácil: números 1 a 100 | Aprenda a contar em inglês até 100' },
        title: 'Números de 0 a 100',
        duration: '30 min',
        summary:
          'Números aparecem em quase toda conversa: preço, idade, telefone, horário. Nesta aula você aprende a contar de 0 a 100 em inglês seguindo um padrão simples de repetir.',
        objectives: [
          'Contar de 0 a 20 em inglês sem hesitar.',
          'Formar os números de 21 a 100 combinando dezenas com unidades.',
        ],
        keyPoints: [
          {
            title: 'De 0 a 12, cada número é uma palavra única',
            description:
              'Zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve — são palavras que precisam ser memorizadas individualmente, sem padrão fixo.',
          },
          {
            title: 'De 13 a 19, o padrão "-teen"',
            description:
              'A partir do 13, os números seguem o padrão base + "teen": thirteen (13), fourteen (14), fifteen (15) e assim por diante até nineteen (19). Repare que "thirteen" e "fifteen" fogem um pouco do padrão simples de "três+teen" e "cinco+teen".',
          },
          {
            title: 'Dezenas e a combinação com unidades',
            description:
              'As dezenas terminam em "-ty": twenty (20), thirty (30), forty (40), fifty (50)... até ninety (90). Para números como 45, você simplesmente combina: "forty-five". O mesmo vale até chegar em one hundred (100).',
          },
        ],
        activity: {
          title: 'Praticando números do dia a dia',
          steps: [
            'Escreva por extenso, em inglês, sua idade e o ano em que você nasceu.',
            'Escreva seu número de telefone, dígito por dígito, em inglês.',
            'Conte em voz alta de 1 a 30 em inglês, sem consultar anotações.',
          ],
        },
        quiz: {
          question: 'Como se escreve o número 45 em inglês?',
          options: ['Four-five', 'Forty-five', 'Fourteen-five', 'Fourty and five'],
          answer: 1,
          explanation:
            '45 combina a dezena "forty" (40) com a unidade "five" (5), formando "forty-five" — repare que "forty" não tem "u" antes do "r", diferente de "four".',
        },
        reference: {
          label: 'Cambridge Dictionary',
          href: 'https://dictionary.cambridge.org/',
        },
      },
      {
        slug: 'saudacoes-e-apresentacoes',
        video: { youtubeId: 'XPkGYQJe1qA', title: 'Saudações Básicas em Inglês (Greeting) | Inglês do Jerry' },
        title: 'Saudações e apresentações',
        duration: '30 min',
        summary:
          'A primeira coisa que você faz em qualquer conversa é cumprimentar a pessoa. Nesta aula você aprende as saudações mais usadas em inglês e como se apresentar de forma simples.',
        objectives: [
          'Usar saudações formais e informais no momento certo.',
          'Se apresentar em inglês dizendo nome e uma informação básica.',
        ],
        keyPoints: [
          {
            title: 'Saudações formais e informais',
            description:
              '"Good morning" (bom dia), "Good afternoon" (boa tarde) e "Good evening" (boa noite, ao chegar) são mais formais. "Hi" e "Hey" são informais, usados com amigos e colegas próximos. "Hello" funciona bem em quase qualquer situação.',
          },
          {
            title: '"How are you?" e as respostas comuns',
            description:
              'Depois de cumprimentar, é comum perguntar "How are you?" (como você está?). As respostas mais usadas são "I\'m fine, thanks" ou "I\'m good, thank you", seguidas geralmente de "And you?" para devolver a pergunta.',
          },
          {
            title: 'Se apresentando: "My name is..." / "I\'m..."',
            description:
              'Para dizer seu nome, use "My name is [nome]" ou, de forma mais direta, "I\'m [nome]". Para perguntar o nome de alguém: "What\'s your name?". "Nice to meet you" (prazer em conhecê-lo) é a resposta educada depois da apresentação.',
          },
        ],
        activity: {
          title: 'Sua apresentação em inglês',
          steps: [
            'Escreva três frases se apresentando em inglês: seu nome, de onde você é e uma coisa que você gosta de fazer.',
            'Escreva um pequeno diálogo de cumprimento entre duas pessoas que se encontram pela primeira vez.',
            'Pratique dizendo sua apresentação em voz alta, sem olhar o texto.',
          ],
        },
        quiz: {
          question: 'Qual saudação é mais adequada para um ambiente formal, como uma reunião de trabalho pela manhã?',
          options: ['Hey!', 'Good morning', "What's up?", 'Yo!'],
          answer: 1,
          explanation:
            '"Good morning" é uma saudação formal apropriada para o período da manhã, ideal para ambientes de trabalho ou situações mais sérias.',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
    ],
  },
  {
    slug: 'verbo-to-be-e-pronomes',
    title: 'O Verbo To Be e Pronomes',
    description:
      'A base de praticamente toda frase em inglês: o verbo "to be" (ser/estar), os pronomes pessoais e o vocabulário de família.',
    lessons: [
      {
        slug: 'verbo-to-be',
        video: { youtubeId: 'bSeZlT7Og8I', title: 'Aprenda o VERBO TO BE! | Aula 01 - English in Brazil' },
        title: 'O verbo to be (am, is, are)',
        duration: '35 min',
        summary:
          'O verbo "to be" (ser ou estar) é provavelmente o verbo mais usado do inglês. Ele muda de forma dependendo de quem está fazendo a ação: am, is ou are.',
        objectives: [
          'Usar am, is e are corretamente com cada pronome.',
          'Formar frases afirmativas simples com o verbo to be.',
        ],
        keyPoints: [
          {
            title: '"Am" só combina com "I"',
            description:
              '"I am" (eu sou/estou) é a única combinação com "am". No dia a dia, quase sempre se usa a forma contraída: "I\'m happy" (eu estou feliz).',
          },
          {
            title: '"Is" para he, she, it',
            description:
              'Use "is" quando o sujeito for "he" (ele), "she" (ela), "it" (isso/aquilo, para objetos e animais) ou um nome/coisa no singular: "She is a teacher", "The book is on the table".',
          },
          {
            title: '"Are" para you, we, they',
            description:
              '"Are" é usado com "you" (você/vocês), "we" (nós) e "they" (eles/elas), além de qualquer sujeito no plural: "They are students", "We are friends".',
          },
        ],
        activity: {
          title: 'Completando com am, is ou are',
          steps: [
            'Escreva cinco frases sobre você mesmo usando "I am" (ex: I am from Brazil).',
            'Escreva três frases sobre pessoas da sua família usando "is" ou "are" corretamente.',
            'Reescreva as frases usando as formas contraídas (I\'m, she\'s, they\'re).',
          ],
        },
        quiz: {
          question: 'Qual frase está gramaticalmente correta?',
          options: ['She am happy', 'They is friends', 'We are students', 'I are from Brazil'],
          answer: 2,
          explanation:
            '"We" é plural, então combina com "are": "We are students". As outras opções misturam o pronome com a forma errada do verbo to be.',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
      {
        slug: 'pronomes-pessoais-e-possessivos',
        video: { youtubeId: '3l7deSWDTxQ', title: 'Como usar os PRONOMES PESSOAIS em inglês - I, you, he, she, it, we, they, me, him, her, us, them' },
        title: 'Pronomes pessoais e possessivos',
        duration: '30 min',
        summary:
          'Os pronomes pessoais (I, you, he, she...) substituem nomes de pessoas e coisas, evitando repetição. Os pronomes possessivos (my, your, his...) indicam a quem algo pertence.',
        objectives: [
          'Identificar os sete pronomes pessoais do inglês.',
          'Usar os pronomes possessivos correspondentes a cada pronome pessoal.',
        ],
        keyPoints: [
          {
            title: 'Os sete pronomes pessoais',
            description:
              'I (eu), you (você/vocês), he (ele), she (ela), it (isso/aquilo), we (nós) e they (eles/elas). Note que "you" serve tanto para singular quanto plural, e "it" é usado para objetos, animais e conceitos.',
          },
          {
            title: 'Pronomes possessivos correspondentes',
            description:
              'Cada pronome pessoal tem um possessivo: my (meu), your (seu), his (dele), her (dela), its (dele/dela, para coisas), our (nosso) e their (deles). Exemplo: "This is my phone. Is that your car?"',
          },
          {
            title: 'Evitando repetição de nomes',
            description:
              'Em vez de repetir "Maria" várias vezes numa frase, você usa "she": "Maria is a doctor. She works at a hospital." Isso deixa a fala mais natural, exatamente como fazemos em português com "ela".',
          },
        ],
        activity: {
          title: 'Substituindo nomes por pronomes',
          steps: [
            'Escreva três frases com nomes de pessoas (reais ou inventadas) e depois reescreva substituindo o nome pelo pronome correto.',
            'Escreva três frases usando pronomes possessivos (my, your, his, her, our, their).',
            'Identifique, em um texto simples em português, quais palavras poderiam virar pronomes em inglês.',
          ],
        },
        quiz: {
          question: 'Qual pronome possessivo completa corretamente: "___ car is red" (referindo-se a "Peter")?',
          options: ['Her', 'His', 'Their', 'Its'],
          answer: 1,
          explanation:
            'Peter é do gênero masculino, então o possessivo correto é "his": "His car is red" (o carro dele é vermelho).',
        },
        reference: {
          label: 'Cambridge Dictionary',
          href: 'https://dictionary.cambridge.org/',
        },
      },
      {
        slug: 'falando-sobre-a-familia',
        video: { youtubeId: 'h2c2cS_tljE', title: 'Aula de Vocabulário Familiar: Membros da Família em Inglês | Teacher Elza' },
        title: 'Falando sobre a família',
        duration: '30 min',
        summary:
          'Falar sobre a família é um dos primeiros assuntos de qualquer conversa. Nesta aula você aprende o vocabulário de parentesco e como descrever pessoas da sua família em inglês.',
        objectives: [
          'Nomear os principais membros da família em inglês.',
          'Descrever brevemente uma pessoa da família usando o verbo to be.',
        ],
        keyPoints: [
          {
            title: 'Vocabulário essencial de família',
            description:
              'Mother (mãe), father (pai), sister (irmã), brother (irmão), son (filho), daughter (filha), grandmother (avó), grandfather (avô), aunt (tia), uncle (tio), cousin (primo/prima).',
          },
          {
            title: 'Posse com apóstrofo ("\'s")',
            description:
              'Para dizer "a irmã de Ana", em inglês se usa "Ana\'s sister" — o nome recebe um apóstrofo + "s" antes da coisa possuída, invertendo a ordem do português.',
          },
          {
            title: 'Descrevendo alguém em frases simples',
            description:
              'Combine o vocabulário de família com o verbo to be: "This is my mother. She is a nurse. She is 45 years old." Frases curtas e diretas já formam uma boa apresentação.',
          },
        ],
        activity: {
          title: 'Apresentando sua família',
          steps: [
            'Liste cinco membros da sua família e escreva o nome de cada parentesco em inglês.',
            'Escreva três frases descrevendo uma pessoa da sua família (nome, parentesco, uma característica).',
            'Reescreva uma das frases usando a posse com apóstrofo (ex: "My mother\'s name is...").',
          ],
        },
        quiz: {
          question: 'Como se diz "irmão" em inglês?',
          options: ['Sister', 'Brother', 'Son', 'Cousin'],
          answer: 1,
          explanation:
            '"Brother" significa irmão. "Sister" é irmã, "son" é filho e "cousin" é primo ou prima.',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
    ],
  },
  {
    slug: 'fazendo-perguntas',
    title: 'Fazendo Perguntas',
    description:
      'Saber perguntar é tão importante quanto saber responder. Aprenda a estrutura das perguntas em inglês e como responder de forma natural.',
    lessons: [
      {
        slug: 'perguntas-com-wh',
        video: { youtubeId: 'O61M_A4iHck', title: 'AULA DE INGLÊS As perguntas mais importantes em inglês [WH Questions: what, where, when, who, why]' },
        title: 'Perguntas com WH (what, where, when, who, why)',
        duration: '35 min',
        summary:
          'As "WH questions" são palavras interrogativas que abrem a maioria das perguntas em inglês: o quê, onde, quando, quem, por quê e como.',
        objectives: [
          'Reconhecer o significado de cada palavra WH.',
          'Formar perguntas simples usando WH + verbo auxiliar + sujeito.',
        ],
        keyPoints: [
          {
            title: 'O significado de cada palavra WH',
            description:
              'What (o quê), where (onde), when (quando), who (quem), why (por quê) e how (como) — apesar de "how" não ter "wh", costuma ser ensinado junto por ter a mesma função.',
          },
          {
            title: 'A ordem das palavras na pergunta',
            description:
              'A estrutura básica é: WH + verbo auxiliar (do/does/is/are) + sujeito + verbo principal. Exemplo: "Where do you live?" (onde você mora?) ou "What is your name?" (qual é seu nome?).',
          },
          {
            title: 'Perguntas que aparecem toda hora',
            description:
              '"What time is it?" (que horas são?), "Where are you from?" (de onde você é?), "How old are you?" (quantos anos você tem?) são exemplos de perguntas WH extremamente comuns no dia a dia.',
          },
        ],
        activity: {
          title: 'Criando perguntas sobre um amigo',
          steps: [
            'Escreva cinco perguntas diferentes usando cada uma das palavras WH (what, where, when, who, why) sobre um amigo ou colega.',
            'Responda mentalmente cada pergunta como se fosse essa pessoa respondendo.',
            'Identifique qual palavra WH você usaria para perguntar sobre um motivo (razão) de algo.',
          ],
        },
        quiz: {
          question: 'Qual palavra WH é usada para perguntar sobre um lugar?',
          options: ['When', 'Where', 'Who', 'Why'],
          answer: 1,
          explanation:
            '"Where" pergunta sobre lugar (onde). "When" pergunta sobre tempo, "who" sobre pessoa e "why" sobre motivo.',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
      {
        slug: 'perguntas-com-do-e-does',
        video: { youtubeId: 'ZzGDZQKiDQM', title: 'Aula de ingles: Do ou Does? Como usar e formar perguntas?' },
        title: 'Perguntas com Do e Does',
        duration: '30 min',
        summary:
          'Diferente do português, o inglês precisa de um verbo auxiliar ("do" ou "does") para formar perguntas e negativas no presente — mesmo quando esse auxiliar não tem tradução direta.',
        objectives: [
          'Escolher corretamente entre "do" e "does" conforme o sujeito.',
          'Formar perguntas de sim/não no presente simples.',
        ],
        keyPoints: [
          {
            title: 'Quando usar "do"',
            description:
              'Use "do" com I, you, we e they: "Do you like coffee?", "Do they work here?".',
          },
          {
            title: 'Quando usar "does"',
            description:
              'Use "does" com he, she e it: "Does she speak English?", "Does it work?". Repare que, quando "does" aparece, o verbo principal volta para a forma base (sem "-s"): "Does he work?" e não "Does he works?".',
          },
          {
            title: 'Do/Does não têm tradução direta',
            description:
              'Em português simplesmente entoamos a voz para fazer uma pergunta ("Você gosta de café?"). Em inglês é obrigatório colocar "do" ou "does" no início: não existe "You like coffee?" como pergunta correta e neutra.',
          },
        ],
        activity: {
          title: 'Transformando afirmações em perguntas',
          steps: [
            'Escreva três frases afirmativas no presente simples (ex: "You like pizza").',
            'Transforme cada uma em pergunta usando "do" ou "does" (ex: "Do you like pizza?").',
            'Escreva a versão negativa de cada frase original usando "don\'t" ou "doesn\'t".',
          ],
        },
        quiz: {
          question: 'Qual pergunta está correta?',
          options: ['Does she works here?', 'Do she work here?', 'Does she work here?', 'Do she works here?'],
          answer: 2,
          explanation:
            '"She" combina com "does", e o verbo principal volta para a forma base sem "-s": "Does she work here?".',
        },
        reference: {
          label: 'Cambridge Dictionary',
          href: 'https://dictionary.cambridge.org/',
        },
      },
      {
        slug: 'respostas-curtas',
        video: { youtubeId: 'cHVkhjf6Y9g', title: 'Short Answers / Respostas curtas em inglês - Aula de Inglês #126' },
        title: 'Respostas curtas (short answers)',
        duration: '25 min',
        summary:
          'Em inglês, responder só "yes" ou "no" pode soar seco ou mal-educado. O natural é usar uma "resposta curta": sim/não + pronome + o mesmo auxiliar da pergunta.',
        objectives: [
          'Formar respostas curtas afirmativas e negativas.',
          'Identificar qual auxiliar repetir na resposta de acordo com a pergunta.',
        ],
        keyPoints: [
          {
            title: 'A estrutura da resposta curta',
            description:
              'Yes/No + pronome + o mesmo auxiliar da pergunta. Exemplo: "Do you like coffee?" → "Yes, I do." ou "No, I don\'t." Repare que o verbo principal (like) não se repete na resposta.',
          },
          {
            title: 'Repetindo o auxiliar certo',
            description:
              'Se a pergunta usa "is/are", a resposta usa "is/are": "Are you tired?" → "Yes, I am." Se a pergunta usa "do/does", a resposta usa "do/does": "Does he study?" → "No, he doesn\'t."',
          },
          {
            title: 'Por que não responder só "yes" ou "no"',
            description:
              'Só dizer "yes" ou "no" sozinho pode soar rude em muitas situações em inglês. A resposta curta completa ("Yes, I do", "No, she isn\'t") é a forma educada e natural de responder no dia a dia.',
          },
        ],
        activity: {
          title: 'Praticando respostas curtas',
          steps: [
            'Escreva cinco perguntas de sim/não variando entre "do/does" e "is/are".',
            'Responda cada uma com uma resposta curta afirmativa.',
            'Responda as mesmas perguntas agora com uma resposta curta negativa.',
          ],
        },
        quiz: {
          question: 'Qual é a resposta curta correta para "Is she a teacher?" (resposta afirmativa)?',
          options: ['Yes, she does.', 'Yes, she is.', 'Yes, she are.', 'Yes, is she.'],
          answer: 1,
          explanation:
            'A pergunta usa "is", então a resposta curta repete "is": "Yes, she is."',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
    ],
  },
  {
    slug: 'rotina-no-present-simple',
    title: 'Rotina no Present Simple',
    description:
      'O tempo verbal usado para falar de hábitos e rotina: como formar frases afirmativas, negativas e como falar de dias e horários.',
    lessons: [
      {
        slug: 'present-simple-afirmativo',
        video: { youtubeId: 'mUaaIG75RHg', title: 'Simple Present: Pres Simples – afirmativa, negativa e interrogativa – Língua Inglesa – 6º ano' },
        title: 'Present Simple afirmativo',
        duration: '35 min',
        summary:
          'O Present Simple é usado para falar de hábitos, rotinas e fatos gerais — como "eu trabalho", "ela estuda" ou "o sol nasce no leste".',
        objectives: [
          'Usar o Present Simple para descrever hábitos e rotinas.',
          'Adicionar corretamente "-s" ou "-es" na terceira pessoa do singular.',
        ],
        keyPoints: [
          {
            title: 'Quando usar o Present Simple',
            description:
              'Use para hábitos ("I go to the gym"), rotinas ("She works every day") e fatos gerais ("Water boils at 100 degrees"). É o tempo verbal mais comum para descrever o dia a dia.',
          },
          {
            title: 'O "-s" da terceira pessoa',
            description:
              'Com he, she e it, o verbo recebe "-s" (work → works) ou "-es" quando termina em ch, sh, ss, x, o (watch → watches, go → goes). Esquecer esse "-s" é um dos erros mais comuns de quem está aprendendo.',
          },
          {
            title: 'Advérbios de frequência',
            description:
              'Always (sempre), usually (geralmente), often (frequentemente), sometimes (às vezes) e never (nunca) normalmente vêm antes do verbo principal: "I always wake up early."',
          },
        ],
        activity: {
          title: 'Descrevendo sua rotina',
          steps: [
            'Escreva cinco frases sobre sua rotina diária usando o Present Simple.',
            'Adicione um advérbio de frequência (always, usually, often, sometimes, never) em pelo menos três frases.',
            'Revise as frases e confira se os verbos na terceira pessoa (he/she/it) têm o "-s" ou "-es" correto.',
          ],
        },
        quiz: {
          question: 'Qual frase está correta?',
          options: ['She work every day.', 'She works every day.', 'She working every day.', 'She to work every day.'],
          answer: 1,
          explanation:
            'Com "she" (terceira pessoa do singular), o verbo recebe "-s": "She works every day."',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
      {
        slug: 'present-simple-negativo-e-interrogativo',
        video: { youtubeId: 'xShStpKcRrU', title: 'AULA DE INGLÊS 10 Affirmative, negative and interrogative - Felipe Dib' },
        title: 'Present Simple negativo e interrogativo',
        duration: '30 min',
        summary:
          'Para negar ou perguntar algo no Present Simple, você usa os auxiliares "don\'t"/"doesn\'t" e "do"/"does" — e o verbo principal volta sempre para a forma base.',
        objectives: [
          'Formar frases negativas com don\'t e doesn\'t.',
          'Formar perguntas no Present Simple usando do e does.',
        ],
        keyPoints: [
          {
            title: 'Negativas com don\'t e doesn\'t',
            description:
              '"Don\'t" (do not) é usado com I, you, we, they; "doesn\'t" (does not) com he, she, it. Em ambos os casos, o verbo principal fica na forma base, sem "-s": "She doesn\'t like coffee" (não "doesn\'t likes").',
          },
          {
            title: 'Perguntas seguem a mesma lógica',
            description:
              'A pergunta começa com "Do" ou "Does", seguida do sujeito e do verbo na forma base: "Do you work on Saturdays?", "Does he study English?".',
          },
          {
            title: 'Erro comum: duplicar a marca de terceira pessoa',
            description:
              'Quando "does" já está na frase, o verbo NÃO recebe "-s" de novo. "Does she works?" está errado; o certo é "Does she work?".',
          },
        ],
        activity: {
          title: 'Negando e perguntando',
          steps: [
            'Pegue as cinco frases de rotina que você escreveu na aula anterior e transforme cada uma em negativa.',
            'Transforme as mesmas cinco frases em perguntas usando do/does.',
            'Revise se o verbo principal ficou na forma base em todas as negativas e perguntas.',
          ],
        },
        quiz: {
          question: 'Qual frase negativa está correta?',
          options: ['She don\'t like tea.', 'She doesn\'t likes tea.', 'She doesn\'t like tea.', 'She not like tea.'],
          answer: 2,
          explanation:
            'Com "she", o auxiliar negativo correto é "doesn\'t", e o verbo principal fica na forma base: "She doesn\'t like tea."',
        },
        reference: {
          label: 'Cambridge Dictionary',
          href: 'https://dictionary.cambridge.org/',
        },
      },
      {
        slug: 'dias-da-semana-e-horas',
        video: { youtubeId: 'HHWQeMtxkkk', title: 'Aula de Inglês - THE DAYS OF THE WEEK [ dias da semana]' },
        title: 'Dias da semana e horas',
        duration: '30 min',
        summary:
          'Combinando os dias da semana e as horas com o Present Simple, você já consegue montar frases completas sobre sua rotina, como "I work on Mondays at 9 o\'clock".',
        objectives: [
          'Nomear os sete dias da semana em inglês.',
          'Perguntar e dizer as horas em inglês.',
        ],
        keyPoints: [
          {
            title: 'Os dias da semana',
            description:
              'Sunday (domingo), Monday (segunda), Tuesday (terça), Wednesday (quarta), Thursday (quinta), Friday (sexta) e Saturday (sábado). Em inglês, os dias da semana são sempre escritos com letra maiúscula.',
          },
          {
            title: 'Perguntando e dizendo as horas',
            description:
              '"What time is it?" (que horas são?). Para responder: "It\'s three o\'clock" (três horas em ponto), "It\'s half past three" (três e meia) ou "It\'s a quarter past three" (três e quinze).',
          },
          {
            title: 'Combinando dia, hora e rotina',
            description:
              'Use a preposição "on" com dias da semana ("on Mondays") e "at" com horários ("at 9 o\'clock"): "I go to the gym on Mondays at 7 o\'clock."',
          },
        ],
        activity: {
          title: 'Sua agenda semanal',
          steps: [
            'Escreva os sete dias da semana em inglês, na ordem correta.',
            'Escolha três atividades da sua rotina e escreva o dia e o horário de cada uma em inglês.',
            'Pratique perguntar "What time is it?" e responder com o horário atual.',
          ],
        },
        quiz: {
          question: 'Qual preposição é usada antes de um dia da semana em inglês, como em "___ Mondays"?',
          options: ['At', 'In', 'On', 'For'],
          answer: 2,
          explanation:
            'Usamos "on" com dias da semana: "on Mondays". "At" é usado com horários específicos e "in" com meses, estações e anos.',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
    ],
  },
  {
    slug: 'mundo-ao-redor',
    title: 'O Mundo ao Seu Redor',
    description:
      'Como descrever o que existe em um lugar, onde as coisas estão e como falar sobre cores usando estruturas simples do inglês.',
    lessons: [
      {
        slug: 'there-is-there-are',
        video: { youtubeId: 'fzfU5fA0fcU', title: 'Verbo Haver em inglês!? "There Is" e "There Are" | Teacher Elza' },
        title: 'There is / There are',
        duration: '30 min',
        summary:
          '"There is" e "there are" equivalem ao nosso "há" ou "existe/existem" em português, usados para dizer que algo está presente em um lugar.',
        objectives: [
          'Usar "there is" para o singular e "there are" para o plural.',
          'Formar negativas e perguntas com there is/there are.',
        ],
        keyPoints: [
          {
            title: '"There is" para singular',
            description:
              '"There is a book on the table" (há um livro na mesa). Usado também com substantivos incontáveis: "There is water in the glass".',
          },
          {
            title: '"There are" para plural',
            description:
              '"There are three chairs in the room" (há três cadeiras na sala). Sempre que o substantivo estiver no plural, use "there are".',
          },
          {
            title: 'Negativas e perguntas',
            description:
              'Negativa: "There isn\'t a car in the garage" / "There aren\'t any books here". Pergunta: "Is there a bathroom nearby?" / "Are there any seats available?"',
          },
        ],
        activity: {
          title: 'Descrevendo seu ambiente',
          steps: [
            'Olhe ao redor e escreva cinco frases usando "there is" ou "there are" para descrever o que existe no cômodo onde você está.',
            'Transforme duas dessas frases em negativas.',
            'Transforme duas dessas frases em perguntas.',
          ],
        },
        quiz: {
          question: 'Qual frase está correta para "há três livros na mesa"?',
          options: ['There is three books on the table.', 'There are three books on the table.', 'There a three books on the table.', 'There have three books on the table.'],
          answer: 1,
          explanation:
            '"Three books" está no plural, então o correto é "there are": "There are three books on the table."',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
      {
        slug: 'preposicoes-de-lugar',
        video: { youtubeId: 'ZdUfe-2kn9k', title: 'APRENDA AS PREPOSIÇÕES EM INGLÊS | PREPOSIÇÕES DE LUGAR EM INGLÊS [IN, ON, NEXT TO, UNDER, BEHIND]' },
        title: 'Preposições de lugar',
        duration: '30 min',
        summary:
          'Preposições de lugar dizem exatamente onde algo está: dentro, em cima, embaixo, ao lado. Combinadas com "there is/are", elas descrevem qualquer ambiente com precisão.',
        objectives: [
          'Usar as principais preposições de lugar em inglês.',
          'Descrever a posição de objetos em uma frase completa.',
        ],
        keyPoints: [
          {
            title: 'As preposições mais usadas',
            description:
              '"In" (dentro de), "on" (em cima de, sobre uma superfície), "under" (embaixo de), "next to" (ao lado de), "between" (entre), "in front of" (na frente de) e "behind" (atrás de).',
          },
          {
            title: 'In vs. On: a diferença mais confusa',
            description:
              'Use "in" quando algo está dentro de um espaço fechado ("The keys are in the drawer") e "on" quando está sobre uma superfície ("The keys are on the table").',
          },
          {
            title: 'Combinando com there is/are',
            description:
              '"There is a lamp next to the bed" (há um abajur ao lado da cama). Essa combinação é extremamente comum para descrever cômodos, ruas e qualquer cenário.',
          },
        ],
        activity: {
          title: 'Mapeando objetos ao seu redor',
          steps: [
            'Escolha cinco objetos próximos a você e descreva a posição de cada um usando uma preposição de lugar diferente.',
            'Escreva uma frase completa combinando "there is/are" com uma preposição de lugar.',
            'Desenhe (ou imagine) um cômodo simples e descreva-o em três frases usando preposições variadas.',
          ],
        },
        quiz: {
          question: 'Qual preposição completa corretamente: "The cat is ___ the box" (o gato está dentro da caixa)?',
          options: ['On', 'In', 'Next to', 'Behind'],
          answer: 1,
          explanation:
            '"In" é usado para indicar que algo está dentro de um espaço fechado, como uma caixa: "The cat is in the box."',
        },
        reference: {
          label: 'Cambridge Dictionary',
          href: 'https://dictionary.cambridge.org/',
        },
      },
      {
        slug: 'cores-em-ingles',
        video: { youtubeId: 'f-AuQ_Afg8w', title: 'As Cores em Inglês | Aprender as Cores em Inglês | Amigo Mumu' },
        title: 'Cores em inglês',
        duration: '25 min',
        summary:
          'As cores são um dos primeiros vocabulários que ajudam a descrever qualquer objeto ao seu redor, combinando perfeitamente com o que você já aprendeu sobre "there is/are" e preposições.',
        objectives: [
          'Nomear as cores básicas em inglês.',
          'Descrever objetos usando cor + substantivo na ordem correta.',
        ],
        keyPoints: [
          {
            title: 'As cores básicas',
            description:
              'Red (vermelho), blue (azul), green (verde), yellow (amarelo), black (preto), white (branco), orange (laranja), purple (roxo), pink (rosa), brown (marrom) e gray (cinza).',
          },
          {
            title: 'A ordem: cor antes do substantivo',
            description:
              'Em inglês, o adjetivo (incluindo a cor) vem antes do substantivo, ao contrário do português: "a red car" (um carro vermelho), não "a car red".',
          },
          {
            title: 'Perguntando sobre cores',
            description:
              '"What color is your car?" (qual é a cor do seu carro?). Para responder: "It\'s blue" ou "My car is blue."',
          },
        ],
        activity: {
          title: 'Descrevendo objetos com cores',
          steps: [
            'Liste dez objetos ao seu redor e escreva a cor de cada um em inglês.',
            'Escreva cinco frases completas combinando cor + substantivo (ex: "I have a red bag").',
            'Pratique perguntar e responder "What color is...?" sobre três objetos diferentes.',
          ],
        },
        quiz: {
          question: 'Qual é a ordem correta em inglês para dizer "uma bolsa azul"?',
          options: ['A bag blue', 'A blue bag', 'Blue a bag', 'A bag of blue'],
          answer: 1,
          explanation:
            'Em inglês, a cor (adjetivo) vem antes do substantivo: "a blue bag."',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
    ],
  },
  {
    slug: 'vocabulario-do-dia-a-dia',
    title: 'Vocabulário Essencial do Dia a Dia',
    description:
      'Palavras que você vai usar toda semana: comida e bebida, roupas, e como falar de datas e números ordinais.',
    lessons: [
      {
        slug: 'comida-e-bebida',
        video: { youtubeId: 'syEm9Ebmplw', title: 'Vocabulário de ALIMENTOS em INGLÊS com tradução e pronúncia' },
        title: 'Comida e bebida',
        duration: '30 min',
        summary:
          'Comida é um dos assuntos mais frequentes em qualquer idioma. Nesta aula você aprende vocabulário essencial de alimentos e bebidas, além de como falar sobre suas preferências.',
        objectives: [
          'Nomear alimentos e bebidas comuns em inglês.',
          'Expressar gostos e preferências alimentares com "like" e "don\'t like".',
        ],
        keyPoints: [
          {
            title: 'Vocabulário essencial de comida',
            description:
              'Bread (pão), rice (arroz), meat (carne), chicken (frango), fish (peixe), vegetables (legumes/verduras), fruit (fruta), cheese (queijo), egg (ovo).',
          },
          {
            title: 'Vocabulário essencial de bebida',
            description:
              'Water (água), coffee (café), tea (chá), juice (suco), milk (leite), beer (cerveja), wine (vinho).',
          },
          {
            title: 'Expressando gostos',
            description:
              '"I like pizza" (eu gosto de pizza), "I don\'t like fish" (eu não gosto de peixe), "I love coffee" (eu adoro café). "Like" e "love" seguem a mesma estrutura do Present Simple que você já estudou.',
          },
        ],
        activity: {
          title: 'Seu cardápio favorito',
          steps: [
            'Liste cinco alimentos e duas bebidas que você gosta, em inglês.',
            'Escreva três frases usando "I like", "I love" ou "I don\'t like" com itens dessa lista.',
            'Descreva, em inglês, o que você comeu no seu último almoço ou jantar.',
          ],
        },
        quiz: {
          question: 'Como se diz "frango" em inglês?',
          options: ['Fish', 'Chicken', 'Cheese', 'Bread'],
          answer: 1,
          explanation:
            '"Chicken" significa frango. "Fish" é peixe, "cheese" é queijo e "bread" é pão.',
        },
        reference: {
          label: 'Cambridge Dictionary',
          href: 'https://dictionary.cambridge.org/',
        },
      },
      {
        slug: 'roupas',
        video: { youtubeId: '_jQzaxKKVYY', title: 'Aula de Inglês. Aprender vocabulário de roupas com tradução Português' },
        title: 'Roupas',
        duration: '25 min',
        summary:
          'Vocabulário de roupas ajuda a descrever o que você (ou outra pessoa) está vestindo, além de ser útil em situações de compras.',
        objectives: [
          'Nomear peças de roupa comuns em inglês.',
          'Descrever o que alguém está vestindo usando o Present Continuous.',
        ],
        keyPoints: [
          {
            title: 'Vocabulário essencial de roupas',
            description:
              'Shirt (camisa), t-shirt (camiseta), pants/trousers (calça), shorts (bermuda/short), dress (vestido), skirt (saia), shoes (sapatos), jacket (jaqueta), socks (meias).',
          },
          {
            title: 'O verbo "wear" (vestir/usar)',
            description:
              '"Wear" é o verbo usado para roupas: "She wears a uniform to work" (ela usa uniforme para o trabalho). Para dizer o que alguém está vestindo NESTE momento, usa-se "is wearing": "He is wearing a blue shirt."',
          },
          {
            title: 'Descrevendo roupas com cores',
            description:
              'Combine o que você já aprendeu sobre cores: "She is wearing a red dress" (ela está vestindo um vestido vermelho).',
          },
        ],
        activity: {
          title: 'Descrevendo o que você está vestindo',
          steps: [
            'Escreva três frases descrevendo o que você está vestindo agora, usando "I am wearing".',
            'Escreva duas frases descrevendo o que uma pessoa próxima está vestindo.',
            'Liste cinco peças de roupa em inglês que você usaria em um dia frio.',
          ],
        },
        quiz: {
          question: 'Como se diz "sapatos" em inglês?',
          options: ['Socks', 'Shoes', 'Shirt', 'Shorts'],
          answer: 1,
          explanation:
            '"Shoes" significa sapatos. "Socks" é meias, "shirt" é camisa e "shorts" é bermuda.',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
      {
        slug: 'numeros-ordinais-datas-e-meses',
        video: { youtubeId: 'gJ1cN2j9Py0', title: 'Aula 4: Números Ordinais em Inglês │ Teacher Elza' },
        title: 'Números ordinais, datas e meses',
        duration: '30 min',
        summary:
          'Números ordinais (primeiro, segundo, terceiro...) são essenciais para falar de datas, como aniversários e feriados, além de organizar posições e sequências.',
        objectives: [
          'Formar números ordinais em inglês.',
          'Dizer uma data completa em inglês.',
        ],
        keyPoints: [
          {
            title: 'Números ordinais básicos',
            description:
              'First (1º), second (2º), third (3º), fourth (4º), fifth (5º)... A partir do quarto, a maioria segue o padrão número + "th" (fourth, fifth, sixth), com exceções nos três primeiros.',
          },
          {
            title: 'Os meses do ano',
            description:
              'January, February, March, April, May, June, July, August, September, October, November, December — sempre escritos com letra maiúscula em inglês.',
          },
          {
            title: 'Como dizer uma data completa',
            description:
              'No inglês americano: "May 5th, 2026" (mês, dia, ano). No inglês britânico: "the 5th of May, 2026" (dia, mês, ano). Ambas as formas são compreendidas amplamente.',
          },
        ],
        activity: {
          title: 'Sua data de nascimento em inglês',
          steps: [
            'Escreva os doze meses do ano em inglês, na ordem correta.',
            'Escreva sua data de nascimento completa em inglês, usando o formato americano e o britânico.',
            'Escreva os números ordinais de 1º a 10º.',
          ],
        },
        quiz: {
          question: 'Qual é o número ordinal correspondente a "5" em inglês?',
          options: ['Five', 'Fiveth', 'Fifth', 'Fifty'],
          answer: 2,
          explanation:
            'O ordinal de "five" (cinco) é "fifth" (quinto) — uma das exceções que não segue apenas o padrão "número + th".',
        },
        reference: {
          label: 'Cambridge Dictionary',
          href: 'https://dictionary.cambridge.org/',
        },
      },
    ],
  },
  {
    slug: 'acoes-no-presente',
    title: 'Ações no Presente',
    description:
      'Como falar do que está acontecendo agora mesmo, os verbos mais usados do inglês e como não confundir Present Simple com Present Continuous.',
    lessons: [
      {
        slug: 'present-continuous',
        video: { youtubeId: 'buPB_TktAcE', title: 'Present Continuous (-ing): o AGORA em inglês | Aula 02 - English in Brazil' },
        title: 'Present Continuous (ação acontecendo agora)',
        duration: '30 min',
        summary:
          'O Present Continuous é usado para falar de ações que estão acontecendo neste exato momento — algo bem diferente do Present Simple, que fala de rotinas.',
        objectives: [
          'Formar o Present Continuous com to be + verbo-ing.',
          'Aplicar as regras de ortografia ao adicionar "-ing" ao verbo.',
        ],
        keyPoints: [
          {
            title: 'A estrutura: to be + verbo-ing',
            description:
              '"I am studying English" (eu estou estudando inglês). O verbo to be (am/is/are) se combina com o verbo principal terminado em "-ing" para indicar uma ação em progresso.',
          },
          {
            title: 'Regras de ortografia do "-ing"',
            description:
              'Na maioria dos casos, basta adicionar "-ing" (work → working). Se o verbo termina em "e" mudo, tira-se o "e" (make → making). Se termina em consoante + vogal + consoante, dobra-se a última consoante (run → running).',
          },
          {
            title: 'Quando NÃO usar o Present Continuous',
            description:
              'Alguns verbos, chamados "stative verbs" (verbos de estado), normalmente não são usados no Present Continuous, como "like", "want", "know" e "love" — eles ficam no Present Simple mesmo quando falam do momento atual.',
          },
        ],
        activity: {
          title: 'O que está acontecendo agora?',
          steps: [
            'Escreva três frases descrevendo o que você está fazendo neste exato momento, usando o Present Continuous.',
            'Escreva duas frases sobre o que outra pessoa (real ou imaginária) está fazendo agora.',
            'Pratique a regra de ortografia transformando estes verbos em "-ing": run, make, study, write, play.',
          ],
        },
        quiz: {
          question: 'Qual é a forma correta de "run" com "-ing"?',
          options: ['Runing', 'Runeing', 'Running', 'Runming'],
          answer: 2,
          explanation:
            '"Run" termina em consoante + vogal + consoante, então dobra-se a última consoante antes de adicionar "-ing": "running".',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
      {
        slug: 'verbos-comuns-em-ingles',
        video: { youtubeId: 'qnj4gECHNo0', title: 'Os 50 verbos mais usados em INGLÊS com EXEMPLOS' },
        title: 'Verbos comuns em inglês',
        duration: '35 min',
        summary:
          'Um pequeno grupo de verbos aparece na maioria das frases do inglês do dia a dia. Conhecê-los bem multiplica sua capacidade de se comunicar.',
        objectives: [
          'Reconhecer e usar os verbos mais frequentes do inglês.',
          'Montar frases simples com esses verbos no Present Simple.',
        ],
        keyPoints: [
          {
            title: 'Verbos de ação essenciais',
            description:
              'Go (ir), make (fazer/criar), do (fazer/realizar), have (ter), get (conseguir/pegar), take (pegar/levar), see (ver), know (saber/conhecer).',
          },
          {
            title: '"Make" x "Do": a confusão mais comum',
            description:
              '"Make" costuma ser usado para criar algo novo ("make a cake", "make a decision"), enquanto "do" é usado para tarefas e atividades gerais ("do homework", "do the dishes").',
          },
          {
            title: 'Combinando verbos com o vocabulário já aprendido',
            description:
              'Use esses verbos com o que você já sabe: "I want food", "I need water", "I have a sister", "I know my neighbor".',
          },
        ],
        activity: {
          title: 'Praticando os verbos essenciais',
          steps: [
            'Escolha cinco verbos comuns (go, make, do, have, want) e escreva uma frase com cada um.',
            'Escreva duas frases usando "make" e duas frases usando "do", prestando atenção na diferença de uso.',
            'Traduza mentalmente cinco frases simples do português para o inglês usando esses verbos.',
          ],
        },
        quiz: {
          question: 'Qual verbo completa corretamente: "I need to ___ my homework" (fazer minha lição de casa)?',
          options: ['Make', 'Do', 'Have', 'Take'],
          answer: 1,
          explanation:
            '"Do homework" é a combinação correta em inglês — "do" é usado para tarefas e atividades, enquanto "make" é usado para criar algo novo.',
        },
        reference: {
          label: 'Cambridge Dictionary',
          href: 'https://dictionary.cambridge.org/',
        },
      },
      {
        slug: 'present-simple-x-present-continuous',
        video: { youtubeId: 'IEo0Wlv1Iu8', title: 'Simple Present x Present Continuous | Qual a diferença?' },
        title: 'Present Simple x Present Continuous',
        duration: '30 min',
        summary:
          'Esses dois tempos verbais parecem semelhantes, mas têm usos bem diferentes: um fala de rotina, o outro de algo acontecendo agora. Comparar os dois lado a lado ajuda a fixar de vez.',
        objectives: [
          'Diferenciar quando usar o Present Simple e quando usar o Present Continuous.',
          'Escolher o tempo verbal correto em frases do dia a dia.',
        ],
        keyPoints: [
          {
            title: 'Present Simple: rotina, hábito e fato',
            description:
              '"I work at a bank" (rotina/fato permanente), "She always arrives early" (hábito). Não indica necessariamente que a ação está acontecendo agora.',
          },
          {
            title: 'Present Continuous: acontecendo agora ou temporário',
            description:
              '"I am working right now" (ação em progresso neste momento), "She is staying at a hotel this week" (situação temporária, não permanente).',
          },
          {
            title: 'Palavras-chave que ajudam a decidir',
            description:
              'Palavras como "always", "usually", "every day" pedem Present Simple. Palavras como "now", "right now", "at the moment" pedem Present Continuous.',
          },
        ],
        activity: {
          title: 'Escolhendo o tempo verbal certo',
          steps: [
            'Escreva três frases sobre sua rotina (Present Simple) e três frases sobre o que está acontecendo agora (Present Continuous).',
            'Releia as seis frases e sublinhe a palavra-chave que indica qual tempo verbal usar em cada uma.',
            'Escreva um pequeno parágrafo misturando os dois tempos verbais corretamente.',
          ],
        },
        quiz: {
          question: 'Qual frase usa o tempo verbal correto para "Ela está estudando agora"?',
          options: ['She studies now.', 'She is studying now.', 'She study now.', 'She studying now.'],
          answer: 1,
          explanation:
            '"Now" indica uma ação acontecendo neste momento, o que pede o Present Continuous: "She is studying now."',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
    ],
  },
  {
    slug: 'passado-simples',
    title: 'Passado Simples',
    description:
      'Como contar o que já aconteceu: o verbo to be no passado, os verbos regulares com "-ed" e os verbos irregulares mais comuns.',
    lessons: [
      {
        slug: 'verbo-to-be-no-passado',
        video: { youtubeId: 'U-s6YdPE888', title: 'Aprenda a Usar o PASSADO do Verbo TO BE - WAS / WERE #11' },
        title: 'O verbo to be no passado (was, were)',
        duration: '30 min',
        summary:
          'Assim como no presente, o verbo to be muda de forma no passado: "was" para singular e "were" para plural, usados para descrever como as coisas eram antes.',
        objectives: [
          'Usar was e were corretamente conforme o sujeito.',
          'Formar negativas e perguntas com o verbo to be no passado.',
        ],
        keyPoints: [
          {
            title: '"Was" para I, he, she, it',
            description:
              '"I was tired yesterday" (eu estava cansado ontem), "She was at home" (ela estava em casa).',
          },
          {
            title: '"Were" para you, we, they',
            description:
              '"You were right" (você estava certo), "They were students" (eles eram estudantes).',
          },
          {
            title: 'Negativas e perguntas',
            description:
              'Negativa: "wasn\'t" / "weren\'t" ("She wasn\'t happy"). Pergunta: inverte a ordem, colocando was/were antes do sujeito ("Were you at the party?").',
          },
        ],
        activity: {
          title: 'Onde você estava ontem?',
          steps: [
            'Escreva três frases sobre onde você estava em momentos diferentes de ontem, usando "was".',
            'Escreva duas frases sobre onde amigos ou familiares estavam, usando "were".',
            'Transforme uma das frases em pergunta e outra em negativa.',
          ],
        },
        quiz: {
          question: 'Qual frase está correta?',
          options: ['They was at school.', 'They were at school.', 'They is at school.', 'They be at school.'],
          answer: 1,
          explanation:
            '"They" é plural, então combina com "were" no passado: "They were at school."',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
      {
        slug: 'passado-simples-verbos-regulares',
        video: { youtubeId: 'Sz0-Ae8eNtg', title: 'Simple Past: passado simples - verbos regulares – Língua Inglesa – 7º ano' },
        title: 'Passado simples: verbos regulares (-ed)',
        duration: '30 min',
        summary:
          'A maioria dos verbos em inglês forma o passado de um jeito bem simples: adicionando "-ed" ao final. Essa é a base do Simple Past para verbos regulares.',
        objectives: [
          'Formar o passado de verbos regulares adicionando "-ed".',
          'Aplicar as regras de ortografia para verbos terminados em "e", "y" e consoante dobrada.',
        ],
        keyPoints: [
          {
            title: 'A regra geral: adicionar "-ed"',
            description:
              '"Work" → "worked", "play" → "played", "clean" → "cleaned". Essa é a forma mais comum de criar o passado em inglês.',
          },
          {
            title: 'Exceções de ortografia',
            description:
              'Verbos terminados em "e" recebem só "-d" ("like" → "liked"). Verbos terminados em consoante + "y" trocam o "y" por "ied" ("study" → "studied"). Alguns verbos curtos dobram a consoante final ("stop" → "stopped").',
          },
          {
            title: 'A pronúncia do "-ed"',
            description:
              'O "-ed" final pode soar como /t/ (worked), /d/ (played) ou /ɪd/ (wanted) dependendo do som final do verbo — vale prestar atenção ao ouvir falantes nativos.',
          },
        ],
        activity: {
          title: 'Contando o que você fez ontem',
          steps: [
            'Escreva cinco frases sobre o que você fez ontem, usando verbos regulares no passado.',
            'Transforme os verbos "study", "stop" e "like" para o passado, aplicando a regra de ortografia correta.',
            'Releia suas frases e confira se todos os verbos regulares terminam em "-ed".',
          ],
        },
        quiz: {
          question: 'Qual é a forma correta do passado do verbo "study"?',
          options: ['Studyed', 'Studied', 'Studeed', 'Studing'],
          answer: 1,
          explanation:
            '"Study" termina em consoante + "y", então o "y" vira "ied" no passado: "studied".',
        },
        reference: {
          label: 'Cambridge Dictionary',
          href: 'https://dictionary.cambridge.org/',
        },
      },
      {
        slug: 'verbos-irregulares-mais-comuns',
        video: { youtubeId: '73Bh3uBI7GA', title: 'Verbos Irregulares em Inglês | Guia prático pra vc aprender' },
        title: 'Verbos irregulares mais comuns',
        duration: '35 min',
        summary:
          'Nem todo verbo segue a regra do "-ed". Os verbos irregulares mudam de forma completamente diferente no passado e precisam ser memorizados um a um.',
        objectives: [
          'Reconhecer que verbos irregulares não seguem o padrão "-ed".',
          'Memorizar o passado de dez verbos irregulares muito comuns.',
        ],
        keyPoints: [
          {
            title: 'Por que existem verbos irregulares',
            description:
              'Assim como em português (ir → fui, ser → foi), o inglês tem verbos que não seguem a regra geral. Não há como "deduzir" a forma; é preciso memorizar.',
          },
          {
            title: 'Dez verbos irregulares essenciais',
            description:
              'Go → went (ir), have → had (ter), do → did (fazer), see → saw (ver), make → made (fazer/criar), take → took (pegar), come → came (vir), get → got (conseguir), know → knew (saber), think → thought (pensar).',
          },
          {
            title: 'Estratégia para memorizar',
            description:
              'Agrupar os verbos irregulares em pequenos blocos (5 a 10 por vez) e revisar com frequência funciona melhor do que tentar decorar uma lista longa de uma vez só.',
          },
        ],
        activity: {
          title: 'Praticando verbos irregulares',
          steps: [
            'Escreva a forma no passado dos dez verbos irregulares listados nesta aula, sem consultar.',
            'Escreva três frases sobre o seu dia usando verbos irregulares no passado (ex: "I went to the market").',
            'Escolha dois verbos irregulares novos (fora da lista) e pesquise sua forma no passado.',
          ],
        },
        quiz: {
          question: 'Qual é o passado do verbo irregular "go"?',
          options: ['Goed', 'Went', 'Gone', 'Going'],
          answer: 1,
          explanation:
            '"Go" é irregular e vira "went" no passado simples — não existe a forma "goed".',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
    ],
  },
  {
    slug: 'situacoes-praticas-em-viagens',
    title: 'Situações Práticas em Viagens',
    description:
      'Colocando tudo em prática: pedir comida em um restaurante, pedir direções na rua e se virar em um aeroporto.',
    lessons: [
      {
        slug: 'pedindo-comida-no-restaurante',
        video: { youtubeId: 'jnbKAYgGHUk', title: 'COMO PEDIR COMIDA EM INGLÊS 🗣 Guia Definitivo para Iniciantes!' },
        title: 'Pedindo comida em um restaurante',
        duration: '30 min',
        summary:
          'Um dos momentos mais comuns em viagens: pedir comida em um restaurante. Nesta aula você aprende frases prontas para pedir, perguntar sobre o cardápio e pedir a conta.',
        objectives: [
          'Usar frases educadas para fazer pedidos em um restaurante.',
          'Perguntar sobre itens do cardápio e pedir a conta.',
        ],
        keyPoints: [
          {
            title: 'Frases para fazer o pedido',
            description:
              '"I\'d like the chicken, please" (eu gostaria do frango, por favor) ou "Can I have a coffee, please?" (posso pedir um café, por favor?). Evite usar "I want" sozinho — soa rude em inglês; "I\'d like" ou "Can I have" são bem mais educados.',
          },
          {
            title: 'Perguntando sobre o cardápio',
            description:
              '"What do you recommend?" (o que você recomenda?), "Does this dish have nuts?" (esse prato tem nozes?), "Is this spicy?" (isso é apimentado?).',
          },
          {
            title: 'Pedindo a conta',
            description:
              '"Can I have the bill, please?" ou, no inglês americano, "Can I have the check, please?" — ambas significam "pode trazer a conta, por favor?".',
          },
        ],
        activity: {
          title: 'Montando um diálogo de restaurante',
          steps: [
            'Escreva um pequeno diálogo entre um cliente e um garçom, do pedido até a conta.',
            'Inclua pelo menos uma pergunta sobre o cardápio no seu diálogo.',
            'Pratique lendo o diálogo em voz alta, como se estivesse em um restaurante de verdade.',
          ],
        },
        quiz: {
          question: 'Qual é a forma mais educada de pedir algo em um restaurante?',
          options: ['Give me a coffee.', 'I want a coffee.', 'I\'d like a coffee, please.', 'Coffee now.'],
          answer: 2,
          explanation:
            '"I\'d like..., please" é a forma educada e natural de fazer pedidos em inglês, evitando soar rude como "give me" ou "I want" sozinho.',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
      {
        slug: 'pedindo-e-dando-direcoes',
        video: { youtubeId: 'ao1blVXmiIA', title: 'DIREÇÕES EM INGLÊS - Como dar e pedir DIREÇÕES em Inglês' },
        title: 'Pedindo e dando direções',
        duration: '30 min',
        summary:
          'Se perder e precisar perguntar o caminho é normal em qualquer viagem. Aprenda as frases essenciais para pedir e dar direções em inglês.',
        objectives: [
          'Pedir direções educadamente em inglês.',
          'Entender e dar instruções básicas de direção.',
        ],
        keyPoints: [
          {
            title: 'Pedindo direções',
            description:
              '"Excuse me, how do I get to the train station?" (com licença, como chego à estação de trem?) ou "Is there a pharmacy near here?" (tem uma farmácia perto daqui?).',
          },
          {
            title: 'Dando instruções básicas',
            description:
              '"Go straight" (siga em frente), "turn left/right" (vire à esquerda/direita), "it\'s on the corner" (fica na esquina), "it\'s next to the bank" (fica ao lado do banco).',
          },
          {
            title: 'Combinando com vocabulário já aprendido',
            description:
              'As preposições de lugar (in front of, next to, between) que você já estudou são essenciais para dar direções claras.',
          },
        ],
        activity: {
          title: 'Explicando o caminho até um lugar',
          steps: [
            'Escreva as instruções de direção da sua casa até um lugar próximo (mercado, escola, farmácia) em inglês.',
            'Escreva uma pergunta educada para pedir direções a um estranho.',
            'Pratique combinando "turn left/right", "go straight" e uma preposição de lugar em uma única explicação.',
          ],
        },
        quiz: {
          question: 'O que significa "turn left"?',
          options: ['Siga em frente', 'Vire à direita', 'Vire à esquerda', 'Pare aqui'],
          answer: 2,
          explanation:
            '"Turn left" significa "vire à esquerda". "Turn right" seria "vire à direita" e "go straight" é "siga em frente".',
        },
        reference: {
          label: 'Cambridge Dictionary',
          href: 'https://dictionary.cambridge.org/',
        },
      },
      {
        slug: 'no-aeroporto-e-na-viagem',
        video: { youtubeId: 'I_eiD9vc5n0', title: 'Vocabulário de AEROPORTO e VIAGEM em inglês | E-Dublin Class#20' },
        title: 'No aeroporto e durante a viagem',
        duration: '30 min',
        summary:
          'Do check-in ao desembarque, o aeroporto tem seu próprio vocabulário específico. Conhecer os termos certos evita estresse em uma viagem internacional.',
        objectives: [
          'Reconhecer vocabulário essencial de aeroporto e viagem.',
          'Usar frases comuns em check-in, imigração e embarque.',
        ],
        keyPoints: [
          {
            title: 'Vocabulário de aeroporto',
            description:
              'Check-in, boarding pass (cartão de embarque), gate (portão de embarque), luggage/baggage (bagagem), departure (partida), arrival (chegada), flight (voo).',
          },
          {
            title: 'Frases úteis no check-in e embarque',
            description:
              '"I have a reservation" (eu tenho uma reserva), "Where is gate 12?" (onde fica o portão 12?), "What time does the flight board?" (a que horas o voo embarca?).',
          },
          {
            title: 'Na imigração',
            description:
              '"What\'s the purpose of your visit?" (qual o motivo da sua visita?) costuma ser respondida com "Tourism" (turismo), "Business" (negócios) ou "I\'m visiting family" (estou visitando a família).',
          },
        ],
        activity: {
          title: 'Simulando uma viagem de avião',
          steps: [
            'Liste oito palavras de vocabulário de aeroporto que você aprendeu nesta aula.',
            'Escreva um pequeno diálogo simulando o check-in em um aeroporto.',
            'Escreva como você responderia à pergunta "What\'s the purpose of your visit?" na imigração.',
          ],
        },
        quiz: {
          question: 'O que significa "boarding pass"?',
          options: ['Passaporte', 'Cartão de embarque', 'Bagagem', 'Portão de saída'],
          answer: 1,
          explanation:
            '"Boarding pass" é o cartão de embarque, o documento necessário para entrar no avião.',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
    ],
  },
  {
    slug: 'conversacao-e-proximos-passos',
    title: 'Conversação e Próximos Passos',
    description:
      'Encerrando o curso com conversas do dia a dia, expressões que fazem você soar mais natural e um plano para continuar evoluindo sozinho.',
    lessons: [
      {
        slug: 'small-talk-conversas-rapidas',
        video: { youtubeId: 'oYJp6pDlBGg', title: '20 minutos de CONVERSAÇÃO BÁSICA em inglês | Diálogos para iniciantes' },
        title: 'Small talk: conversas rápidas do dia a dia',
        duration: '30 min',
        summary:
          '"Small talk" é aquela conversa curta e informal — sobre o tempo, o fim de semana, o trânsito — que abre espaço para qualquer interação social em inglês.',
        objectives: [
          'Reconhecer os temas mais comuns de small talk.',
          'Manter uma conversa curta e simples em inglês.',
        ],
        keyPoints: [
          {
            title: 'Temas seguros para small talk',
            description:
              'O clima ("Nice weather today, isn\'t it?"), planos de fim de semana ("Any plans for the weekend?") e trabalho ("How\'s work going?") são assuntos neutros e muito usados para puxar conversa.',
          },
          {
            title: 'Expressões para manter a conversa',
            description:
              '"That\'s interesting!", "Really?", "I see", "Me too!" mostram que você está prestando atenção e mantêm o diálogo fluindo naturalmente.',
          },
          {
            title: 'Encerrando a conversa educadamente',
            description:
              '"It was nice talking to you" (foi bom falar com você), "See you soon!" (até logo!), "Have a good one!" (tenha um bom dia/tarde/etc.) são boas formas de encerrar.',
          },
        ],
        activity: {
          title: 'Criando um diálogo de small talk',
          steps: [
            'Escreva um pequeno diálogo de small talk entre duas pessoas que se encontram por acaso.',
            'Inclua pelo menos uma pergunta sobre o fim de semana ou o clima.',
            'Termine o diálogo com uma despedida educada.',
          ],
        },
        quiz: {
          question: 'Qual frase é um exemplo típico de "small talk"?',
          options: ['What is your annual salary?', 'Nice weather today, isn\'t it?', 'Do you believe in life after death?', 'What is your home address?'],
          answer: 1,
          explanation:
            'Comentar sobre o clima é um dos temas mais clássicos e seguros de small talk — leve, neutro e fácil de continuar a conversa.',
        },
        reference: {
          label: 'British Council — LearnEnglish',
          href: 'https://learnenglish.britishcouncil.org/',
        },
      },
      {
        slug: 'phrasal-verbs-essenciais',
        video: { youtubeId: '9r7Jba1L1U4', title: '10 Phrasal Verbs que você PRECISA saber em inglês | English in Brazil' },
        title: 'Phrasal verbs essenciais',
        duration: '30 min',
        summary:
          'Phrasal verbs são combinações de verbo + partícula (como "up", "on", "off") que criam um significado diferente do verbo original. Eles são muito comuns na fala natural do dia a dia.',
        objectives: [
          'Entender o que são phrasal verbs.',
          'Usar cinco phrasal verbs essenciais em frases simples.',
        ],
        keyPoints: [
          {
            title: 'O que é um phrasal verb',
            description:
              'É a junção de um verbo com uma ou mais partículas (preposições ou advérbios) que muda o sentido original. Por exemplo, "look" (olhar) + "for" = "look for" (procurar).',
          },
          {
            title: 'Cinco phrasal verbs do dia a dia',
            description:
              '"Wake up" (acordar), "get up" (levantar da cama), "turn on/off" (ligar/desligar), "look for" (procurar), "give up" (desistir).',
          },
          {
            title: 'Como memorizar phrasal verbs',
            description:
              'Em vez de tentar traduzir palavra por palavra, é mais eficaz aprender o phrasal verb inteiro como uma expressão única, associada a uma situação prática.',
          },
        ],
        activity: {
          title: 'Usando phrasal verbs em frases',
          steps: [
            'Escreva uma frase para cada um dos cinco phrasal verbs apresentados nesta aula.',
            'Descreva sua manhã típica usando "wake up" e "get up".',
            'Pesquise mais dois phrasal verbs comuns e escreva o significado de cada um.',
          ],
        },
        quiz: {
          question: 'O que significa o phrasal verb "look for"?',
          options: ['Olhar para cima', 'Procurar', 'Desistir', 'Ligar algo'],
          answer: 1,
          explanation:
            '"Look for" significa "procurar" — como em "I\'m looking for my keys" (estou procurando minhas chaves).',
        },
        reference: {
          label: 'Cambridge Dictionary',
          href: 'https://dictionary.cambridge.org/',
        },
      },
      {
        slug: 'como-continuar-aprendendo-sozinho',
        video: { youtubeId: 'EZegBQJshnA', title: 'Rotina diária para aprender inglês sozinho | guia completo + dicas' },
        title: 'Como continuar aprendendo inglês sozinho',
        duration: '25 min',
        summary:
          'Terminar um curso básico é só o começo. Nesta última aula você aprende estratégias práticas para continuar evoluindo no inglês por conta própria, todos os dias.',
        objectives: [
          'Identificar hábitos diários que aceleram o aprendizado de inglês.',
          'Montar um plano simples de estudo para os próximos meses.',
        ],
        keyPoints: [
          {
            title: 'Consistência é mais importante que intensidade',
            description:
              'Estudar 15 a 20 minutos todos os dias traz resultados melhores do que uma sessão longa uma vez por semana. O cérebro fixa idiomas melhor com repetição frequente.',
          },
          {
            title: 'Imersão com conteúdo que você gosta',
            description:
              'Assistir séries com legenda em inglês, ouvir músicas e ler sobre assuntos do seu interesse em inglês tornam o aprendizado mais natural e menos cansativo do que apenas estudar gramática.',
          },
          {
            title: 'Praticando a fala sempre que possível',
            description:
              'Falar em voz alta, mesmo sozinho, treinando frases do dia a dia, e buscar oportunidades de conversar com outras pessoas (mesmo que por aplicativos) ajuda a perder a vergonha e ganhar fluência.',
          },
        ],
        activity: {
          title: 'Seu plano de estudos',
          steps: [
            'Escreva três hábitos diários que você pode incorporar para praticar inglês (ex: ouvir uma música, ler uma notícia).',
            'Escolha um horário fixo do dia para dedicar 15 minutos ao inglês pelas próximas duas semanas.',
            'Liste três temas do seu interesse (esportes, tecnologia, culinária) que você poderia explorar em inglês.',
          ],
        },
        quiz: {
          question: 'Qual estratégia costuma trazer melhores resultados no aprendizado de um idioma?',
          options: [
            'Estudar uma vez por semana, por várias horas seguidas',
            'Praticar um pouco todos os dias, com consistência',
            'Estudar apenas gramática, sem praticar a fala',
            'Esperar ficar fluente antes de tentar conversar',
          ],
          answer: 1,
          explanation:
            'A prática curta e consistente todos os dias costuma gerar resultados muito melhores do que sessões longas e espaçadas, pois reforça a memória com mais frequência.',
        },
        reference: {
          label: 'BBC Learning English',
          href: 'https://www.bbc.co.uk/learningenglish',
        },
      },
    ],
  },
]

export const englishCourseLessons = englishCourseModules.flatMap(
  (module, moduleIndex) =>
    module.lessons.map((lesson, lessonIndex) => ({
      ...lesson,
      module,
      moduleIndex,
      lessonIndex,
    })),
)

export const englishCourseStats = {
  modules: englishCourseModules.length,
  lessons: englishCourseLessons.length,
  workload: '16h',
}

export function getEnglishLesson(slug: string) {
  return englishCourseLessons.find((lesson) => lesson.slug === slug)
}

export const englishCourseSources = [
  {
    label: 'British Council — LearnEnglish',
    href: 'https://learnenglish.britishcouncil.org/',
  },
  {
    label: 'BBC Learning English',
    href: 'https://www.bbc.co.uk/learningenglish',
  },
  {
    label: 'Cambridge Dictionary',
    href: 'https://dictionary.cambridge.org/',
  },
]
