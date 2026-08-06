export type MathExamQuestion = {
  id: string
  format: 'certo-errado' | 'multipla-escolha'
  statement: string
  options: string[]
  answer: number
  explanation: string
}

export type MathExamTopic = {
  slug: string
  title: string
  duration: string
  summary: string
  reviewPoints: Array<{ title: string; description: string }>
  examTips: string[]
  questions: MathExamQuestion[]
  reference: { label: string; href: string }
  video?: { youtubeId: string; title: string }
}

const KHAN_REFERENCE = {
  label: 'Khan Academy Brasil — Matemática',
  href: 'https://pt.khanacademy.org/math',
}

export const mathExamTopics: MathExamTopic[] = [
  {
    slug: 'operacoes-mmc-mdc',
    title: 'Operações Fundamentais, MMC e MDC',
    duration: '30 min',
    video: {
      youtubeId: 'JANIGcD3lbg',
      title: '(Aula 02) - Exercícios MMC e MDC | MATEMÁTICA Concurso CETREDE | Prefeitura de CAUCAIA',
    },
    summary:
      'Ordem das operações, critérios de divisibilidade, MMC e MDC — a base usada em quase todos os outros tópicos, como frações e regra de três.',
    reviewPoints: [
      {
        title: 'Ordem das operações',
        description:
          'Resolve-se primeiro o que está dentro de parênteses, colchetes e chaves (de dentro pra fora). Depois, potências e raízes. Em seguida, multiplicação e divisão, na ordem em que aparecem, da esquerda para a direita. Por último, adição e subtração.',
      },
      {
        title: 'Critérios de divisibilidade',
        description:
          'Um número é divisível por 2 se for par; por 3, se a soma dos algarismos for divisível por 3; por 5, se terminar em 0 ou 5; por 9, se a soma dos algarismos for divisível por 9; por 10, se terminar em 0.',
      },
      {
        title: 'MDC (Máximo Divisor Comum)',
        description:
          'É o maior número que divide dois ou mais números ao mesmo tempo, sem deixar resto. Usado para simplificar frações e dividir quantidades em partes iguais.',
      },
      {
        title: 'MMC (Mínimo Múltiplo Comum)',
        description:
          'É o menor múltiplo comum entre dois ou mais números. Usado para somar frações com denominadores diferentes e para resolver problemas de "coincidência" entre eventos periódicos.',
      },
    ],
    examTips: [
      'Para achar o MMC, fatore os números simultaneamente e multiplique todos os fatores primos encontrados. Para achar o MDC, fatore separadamente e multiplique apenas os fatores primos comuns.',
      'Decore a ordem das operações (parênteses → potência → multiplicação/divisão → soma/subtração) — muitas questões "pegadinha" são só ordem de operações errada.',
    ],
    questions: [
      {
        id: 'op-q1',
        format: 'multipla-escolha',
        statement: 'O resultado da expressão 20 − 4 × 3 + 2 é:',
        options: ['6', '10', '44', '8'],
        answer: 1,
        explanation: 'Multiplicação primeiro: 4×3=12. Depois, da esquerda para a direita: 20−12+2 = 10.',
      },
      {
        id: 'op-q2',
        format: 'certo-errado',
        statement:
          'Na ordem das operações matemáticas, a multiplicação deve ser resolvida antes da adição e da subtração, quando não há parênteses indicando outra ordem.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Multiplicação e divisão têm prioridade sobre adição e subtração, salvo indicação em contrário por parênteses.',
      },
      {
        id: 'op-q3',
        format: 'multipla-escolha',
        statement: 'Qual dos números abaixo é divisível por 3?',
        options: ['124', '234', '145', '502'],
        answer: 1,
        explanation: 'A soma dos algarismos de 234 é 2+3+4=9, que é divisível por 3. Nos demais, a soma não é múltipla de 3.',
      },
      {
        id: 'op-q4',
        format: 'certo-errado',
        statement: 'Um número é divisível por 9 quando a soma de seus algarismos é divisível por 9.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Esse é o critério de divisibilidade por 9.',
      },
      {
        id: 'op-q5',
        format: 'multipla-escolha',
        statement: 'O MMC (Mínimo Múltiplo Comum) entre 4 e 6 é:',
        options: ['12', '24', '10', '6'],
        answer: 0,
        explanation: 'Múltiplos de 4: 4, 8, 12... Múltiplos de 6: 6, 12... O menor múltiplo comum é 12.',
      },
      {
        id: 'op-q6',
        format: 'multipla-escolha',
        statement: 'O MDC (Máximo Divisor Comum) entre 18 e 24 é:',
        options: ['2', '4', '6', '12'],
        answer: 2,
        explanation: 'Divisores de 18: 1,2,3,6,9,18. Divisores de 24: 1,2,3,4,6,8,12,24. O maior divisor comum é 6.',
      },
      {
        id: 'op-q7',
        format: 'certo-errado',
        statement: 'O MDC entre dois números é sempre maior ou igual ao MMC entre esses mesmos números.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. É o contrário: o MDC é sempre menor ou igual ao MMC entre dois números.',
      },
      {
        id: 'op-q8',
        format: 'multipla-escolha',
        statement:
          'Dois ônibus saem juntos de um terminal. O primeiro retorna a cada 15 minutos e o segundo a cada 20 minutos. Depois de quantos minutos os dois sairão juntos novamente?',
        options: ['35 minutos', '45 minutos', '60 minutos', '75 minutos'],
        answer: 2,
        explanation: 'O intervalo é o MMC entre 15 e 20, que é 60. Os dois voltarão a sair juntos após 60 minutos.',
      },
    ],
    reference: KHAN_REFERENCE,
  },
  {
    slug: 'fracoes-e-decimais',
    title: 'Frações e Números Decimais',
    duration: '35 min',
    video: {
      youtubeId: 'XYxNnJtkRzI',
      title: '(Aula 01) - Exercícios FRAÇÕES e DECIMAIS | Concurso CETREDE | Prefeitura de CAUCAIA',
    },
    summary:
      'Operações com frações, simplificação e conversão entre fração e número decimal — a base para porcentagem e regra de três.',
    reviewPoints: [
      {
        title: 'Soma e subtração de frações',
        description:
          'Com o mesmo denominador, soma-se ou subtrai-se apenas os numeradores. Com denominadores diferentes, reduz-se ambas ao MMC dos denominadores antes de operar.',
      },
      {
        title: 'Multiplicação de frações',
        description:
          'Multiplica-se numerador por numerador e denominador por denominador, sem precisar de denominador comum.',
      },
      {
        title: 'Divisão de frações',
        description:
          '"Copia, conserva, inverte": mantém-se a primeira fração e multiplica-se pelo inverso (numerador e denominador trocados) da segunda.',
      },
      {
        title: 'Fração e decimal',
        description:
          'Para converter fração em decimal, divide-se o numerador pelo denominador. Para converter decimal em fração, escreve-se o número sobre uma potência de 10 (10, 100, 1000...) conforme a quantidade de casas decimais, e simplifica-se.',
      },
    ],
    examTips: [
      'Fração imprópria (numerador maior que o denominador) pode ser escrita como número misto — a conversão entre as duas formas costuma ser cobrada.',
      '"Copia, conserva, inverte" é a forma mais fácil de lembrar a divisão de frações — decore essa regra.',
    ],
    questions: [
      {
        id: 'fr-q1',
        format: 'multipla-escolha',
        statement: 'O resultado de 1/2 + 1/3 é:',
        options: ['2/5', '5/6', '1/6', '5/5'],
        answer: 1,
        explanation: 'MMC(2,3)=6. 1/2=3/6 e 1/3=2/6. Somando: 3/6+2/6=5/6.',
      },
      {
        id: 'fr-q2',
        format: 'certo-errado',
        statement: 'Para dividir uma fração por outra, basta multiplicar a primeira fração pelo inverso da segunda.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Essa é a regra "copia, conserva, inverte" da divisão de frações.',
      },
      {
        id: 'fr-q3',
        format: 'multipla-escolha',
        statement: 'O resultado de 2/3 × 3/4 é:',
        options: ['1/2', '3/4', '2/7', '5/12'],
        answer: 0,
        explanation: 'Multiplicando numeradores e denominadores: (2×3)/(3×4) = 6/12, que simplificado dá 1/2.',
      },
      {
        id: 'fr-q4',
        format: 'certo-errado',
        statement: 'A fração 7/4 é uma fração imprópria, pois o numerador é maior que o denominador.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Fração imprópria é aquela em que o numerador é maior (ou igual) ao denominador.',
      },
      {
        id: 'fr-q5',
        format: 'multipla-escolha',
        statement: 'O número decimal 0,75 é equivalente à fração irredutível:',
        options: ['3/4', '7/5', '1/4', '75/10'],
        answer: 0,
        explanation: '0,75 = 75/100, que simplificado (dividindo por 25) resulta em 3/4.',
      },
      {
        id: 'fr-q6',
        format: 'multipla-escolha',
        statement: 'Transformando a fração 3/8 em número decimal, obtém-se:',
        options: ['0,375', '0,38', '0,3', '0,83'],
        answer: 0,
        explanation: 'Dividindo 3 por 8, obtém-se exatamente 0,375.',
      },
      {
        id: 'fr-q7',
        format: 'certo-errado',
        statement:
          'Toda fração decimal (com denominador 10, 100, 1000...) pode ser escrita como número decimal contando as casas decimais correspondentes à quantidade de zeros do denominador.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Por exemplo, 7/100 tem 2 zeros no denominador, então vira 0,07 (2 casas decimais).',
      },
      {
        id: 'fr-q8',
        format: 'multipla-escolha',
        statement:
          'Uma pizza foi dividida em 8 pedaços iguais. Uma pessoa comeu 3 pedaços e outra comeu 2 pedaços. Que fração da pizza ainda restou?',
        options: ['5/8', '3/8', '2/8', '6/8'],
        answer: 1,
        explanation: 'Foram comidos 3+2=5 pedaços de 8, ou seja, 5/8. O que restou é 8/8 − 5/8 = 3/8.',
      },
    ],
    reference: KHAN_REFERENCE,
  },
  {
    slug: 'conjuntos-numericos',
    title: 'Conjuntos Numéricos',
    duration: '30 min',
    video: {
      youtubeId: 'am2x7ECpH28',
      title: 'Segunda das Exatas: Aula Completa de CONJUNTOS NUMÉRICOS Para Concursos Públicos',
    },
    summary:
      'Naturais, inteiros, racionais, irracionais e reais — a hierarquia de conjuntos numéricos que aparece em quase toda prova de matemática básica.',
    reviewPoints: [
      {
        title: 'Números Naturais (N)',
        description: 'Os números 0, 1, 2, 3, 4... usados para contagem. Não incluem números negativos nem frações.',
      },
      {
        title: 'Números Inteiros (Z)',
        description: 'Incluem os naturais e seus opostos negativos: ..., −2, −1, 0, 1, 2... Não incluem frações não inteiras.',
      },
      {
        title: 'Números Racionais (Q)',
        description:
          'Todo número que pode ser escrito como uma fração a/b, com a e b inteiros e b diferente de zero. Inclui os inteiros, as frações e os decimais exatos ou periódicos (dízimas periódicas).',
      },
      {
        title: 'Números Irracionais (I) e Reais (R)',
        description:
          'Irracionais são decimais infinitos e não periódicos, que não podem ser escritos como fração — exemplos: √2 e π. O conjunto dos Reais (R) reúne todos os racionais e irracionais.',
      },
    ],
    examTips: [
      'Dízima periódica (ex: 0,333...) é um número RACIONAL, porque pode ser escrita como fração (nesse caso, 1/3) — é uma pegadinha clássica.',
      '√2, √3 e π não são racionais porque suas casas decimais não terminam nem seguem um período que se repete.',
    ],
    questions: [
      {
        id: 'conj-q1',
        format: 'certo-errado',
        statement: 'O número 0,333... (dízima periódica) é classificado como um número irracional.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. 0,333... é racional, pois pode ser escrito como a fração 1/3.',
      },
      {
        id: 'conj-q2',
        format: 'multipla-escolha',
        statement: 'Qual dos números abaixo é um número irracional?',
        options: ['0,5', '2/3', '√2', '10'],
        answer: 2,
        explanation: '√2 é aproximadamente 1,4142135... com casas decimais infinitas e sem período, sendo irracional.',
      },
      {
        id: 'conj-q3',
        format: 'certo-errado',
        statement: 'O conjunto dos números inteiros (Z) inclui os números negativos, o zero e os números naturais positivos.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Z é formado pelos naturais, seus opostos negativos, e o zero.',
      },
      {
        id: 'conj-q4',
        format: 'multipla-escolha',
        statement: 'O número −5 pertence a quais conjuntos numéricos?',
        options: [
          'Apenas aos naturais',
          'Aos inteiros, racionais e reais, mas não aos naturais',
          'Apenas aos racionais',
          'A nenhum conjunto numérico',
        ],
        answer: 1,
        explanation: '−5 não é natural (naturais não são negativos), mas é inteiro, e todo inteiro é também racional e real.',
      },
      {
        id: 'conj-q5',
        format: 'certo-errado',
        statement: 'Todo número natural é também um número inteiro.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. O conjunto dos naturais está contido no conjunto dos inteiros.',
      },
      {
        id: 'conj-q6',
        format: 'multipla-escolha',
        statement: 'O conjunto dos números reais (R) é formado pela união de quais conjuntos?',
        options: ['Apenas naturais e inteiros', 'Racionais e irracionais', 'Apenas números negativos', 'Apenas frações'],
        answer: 1,
        explanation: 'Os números reais são a união de todos os racionais com todos os irracionais.',
      },
      {
        id: 'conj-q7',
        format: 'certo-errado',
        statement: 'O número π (pi) é um número racional, pois pode ser representado por uma fração exata.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. π é irracional — suas casas decimais são infinitas e não seguem um período.',
      },
      {
        id: 'conj-q8',
        format: 'multipla-escolha',
        statement: 'Assinale a alternativa que apresenta um número racional.',
        options: ['π', '√2', '1,666... (dízima periódica)', '0,10110111011110... (sem período)'],
        answer: 2,
        explanation: '1,666... é uma dízima periódica, podendo ser escrita como fração (5/3), portanto é racional.',
      },
    ],
    reference: KHAN_REFERENCE,
  },
  {
    slug: 'razao-e-proporcao',
    title: 'Razão e Proporção',
    duration: '30 min',
    video: {
      youtubeId: '0qKXllAJjjA',
      title: '(Aula 07) - Exercícios Razão e Proporção | Concurso CETREDE - Matemática - Prefeitura de CAUCAIA',
    },
    summary:
      'Razão como comparação entre duas grandezas, proporção como igualdade entre razões, e a propriedade fundamental usada para descobrir valores desconhecidos.',
    reviewPoints: [
      {
        title: 'Razão',
        description: 'Comparação entre dois valores feita por meio de uma divisão, escrita como a/b ou a:b.',
      },
      {
        title: 'Proporção',
        description: 'Igualdade entre duas razões (a/b = c/d), lida como "a está para b assim como c está para d".',
      },
      {
        title: 'Propriedade fundamental das proporções',
        description:
          'Numa proporção a/b = c/d, o produto dos meios é igual ao produto dos extremos (a×d = b×c) — usada para descobrir o valor de um termo desconhecido.',
      },
      {
        title: 'Grandezas diretamente proporcionais',
        description:
          'Quando uma grandeza aumenta, a outra aumenta na mesma razão (ex: mais horas trabalhadas, mais dinheiro recebido, mantendo o valor por hora fixo).',
      },
    ],
    examTips: [
      'Para achar o termo desconhecido de uma proporção, monte a igualdade de frações e faça a "multiplicação cruzada" (produto dos meios = produto dos extremos).',
      'Cuidado com a ordem das grandezas ao montar a proporção — inverter a ordem é o erro mais comum nesse tipo de questão.',
    ],
    questions: [
      {
        id: 'razao-q1',
        format: 'multipla-escolha',
        statement: 'Na proporção 3/5 = x/20, o valor de x é:',
        options: ['12', '15', '10', '60'],
        answer: 0,
        explanation: 'Multiplicação cruzada: 3×20 = 5×x → 60 = 5x → x = 12.',
      },
      {
        id: 'razao-q2',
        format: 'certo-errado',
        statement: 'Numa proporção, o produto dos meios é sempre igual ao produto dos extremos.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Essa é a propriedade fundamental das proporções.',
      },
      {
        id: 'razao-q3',
        format: 'multipla-escolha',
        statement: 'A razão entre 15 e 25, na forma de fração irredutível, é:',
        options: ['3/5', '15/25', '5/3', '1/2'],
        answer: 0,
        explanation: 'Dividindo numerador e denominador por 5: 15/25 = 3/5.',
      },
      {
        id: 'razao-q4',
        format: 'certo-errado',
        statement: 'A razão entre dois números A e B é sempre igual à razão entre B e A.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. A razão A:B só é igual à razão B:A quando A é igual a B.',
      },
      {
        id: 'razao-q5',
        format: 'multipla-escolha',
        statement:
          'Em uma sala, a razão entre o número de meninos e meninas é de 3 para 4. Se há 12 meninos, quantas meninas há?',
        options: ['16', '9', '15', '20'],
        answer: 0,
        explanation: '3/4 = 12/x → 3x = 48 → x = 16 meninas.',
      },
      {
        id: 'razao-q6',
        format: 'multipla-escolha',
        statement: 'Se a/b = 4/7, e a = 20, o valor de b é:',
        options: ['35', '28', '30', '40'],
        answer: 0,
        explanation: '20/b = 4/7 → 4b = 140 → b = 35.',
      },
      {
        id: 'razao-q7',
        format: 'certo-errado',
        statement:
          'Duas grandezas são diretamente proporcionais quando, ao aumentar o valor de uma delas, a outra também aumenta na mesma proporção.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Essa é a definição de grandezas diretamente proporcionais.',
      },
      {
        id: 'razao-q8',
        format: 'multipla-escolha',
        statement:
          'Uma receita usa 2 xícaras de farinha para 3 xícaras de açúcar. Para manter a proporção usando 6 xícaras de farinha, quantas xícaras de açúcar são necessárias?',
        options: ['9', '8', '12', '6'],
        answer: 0,
        explanation: '2/3 = 6/x → 2x = 18 → x = 9 xícaras de açúcar.',
      },
    ],
    reference: KHAN_REFERENCE,
  },
  {
    slug: 'porcentagem',
    title: 'Porcentagem',
    duration: '35 min',
    video: { youtubeId: 'azedx0uou64', title: 'APRENDA PORCENTAGEM EM 8 MINUTOS | Fácil e Rápido' },
    summary:
      'Cálculo de porcentagens, aumentos e descontos percentuais — um dos assuntos mais cobrados em qualquer prova de matemática de concurso.',
    reviewPoints: [
      {
        title: 'Porcentagem como fração de 100',
        description: 'x% equivale a x/100. Para calcular x% de um valor V, multiplica-se V por x/100 (ou pela forma decimal correspondente).',
      },
      {
        title: 'Aumento percentual',
        description: 'Valor final = valor inicial × (1 + taxa/100). Ex: aumento de 20% multiplica o valor por 1,20.',
      },
      {
        title: 'Desconto percentual',
        description: 'Valor final = valor inicial × (1 − taxa/100). Ex: desconto de 15% multiplica o valor por 0,85.',
      },
      {
        title: 'Calcular que porcentagem uma parte representa do todo',
        description: 'Divide-se a parte pelo todo e multiplica-se o resultado por 100 para obter o percentual.',
      },
    ],
    examTips: [
      'Em aumentos e descontos sucessivos, NUNCA some as taxas diretamente — aplique um fator de cada vez, multiplicando-os entre si.',
      '"Quanto por cento é 30 de 150?" se calcula como (30/150)×100 = 20% — decore essa estrutura de cálculo.',
    ],
    questions: [
      {
        id: 'perc-q1',
        format: 'multipla-escolha',
        statement: '20% de 250 é igual a:',
        options: ['50', '25', '20', '45'],
        answer: 0,
        explanation: '20% de 250 = 0,20 × 250 = 50.',
      },
      {
        id: 'perc-q2',
        format: 'certo-errado',
        statement: 'Um produto que custava R$ 200 e sofreu um desconto de 15% passa a custar R$ 170.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. 200 × (1 − 0,15) = 200 × 0,85 = 170.',
      },
      {
        id: 'perc-q3',
        format: 'multipla-escolha',
        statement: 'Um produto de R$ 80 teve um aumento de 25%. O novo preço é:',
        options: ['R$ 100', 'R$ 95', 'R$ 105', 'R$ 90'],
        answer: 0,
        explanation: '80 × (1 + 0,25) = 80 × 1,25 = 100.',
      },
      {
        id: 'perc-q4',
        format: 'certo-errado',
        statement: 'Se um valor sofre um aumento de 10% seguido de outro aumento de 10%, o aumento total acumulado é de exatamente 20%.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. Aumentos sucessivos se multiplicam: 1,10 × 1,10 = 1,21, ou seja, um aumento acumulado de 21%, não 20%.',
      },
      {
        id: 'perc-q5',
        format: 'multipla-escolha',
        statement: '30 é quantos por cento de 120?',
        options: ['25%', '30%', '40%', '20%'],
        answer: 0,
        explanation: '(30/120) × 100 = 25%.',
      },
      {
        id: 'perc-q6',
        format: 'multipla-escolha',
        statement: 'Em uma turma de 40 alunos, 25% são meninos. Quantos meninos há na turma?',
        options: ['10', '8', '12', '15'],
        answer: 0,
        explanation: '25% de 40 = 0,25 × 40 = 10 meninos.',
      },
      {
        id: 'perc-q7',
        format: 'certo-errado',
        statement: 'Para calcular 50% de um valor, basta dividir esse valor por 2.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. 50% equivale exatamente à metade de qualquer valor.',
      },
      {
        id: 'perc-q8',
        format: 'multipla-escolha',
        statement: 'Um salário de R$ 1.500 recebeu um reajuste e passou a ser R$ 1.800. Qual foi o percentual de aumento?',
        options: ['20%', '25%', '30%', '15%'],
        answer: 0,
        explanation: 'Aumento de R$ 300 sobre R$ 1.500: (300/1500) × 100 = 20%.',
      },
    ],
    reference: KHAN_REFERENCE,
  },
  {
    slug: 'regra-de-tres',
    title: 'Regra de Três Simples e Composta',
    duration: '35 min',
    video: {
      youtubeId: 'qwjXCnlPcJU',
      title: 'Matemática para quem tem dificuldade - Regra de três simples com porcentagem - questão de concurso',
    },
    summary:
      'Resolução de problemas envolvendo grandezas proporcionais — um dos formatos de questão mais cobrados em provas de concurso.',
    reviewPoints: [
      {
        title: 'Identificar o tipo de proporcionalidade',
        description:
          'Antes de montar a regra de três, é preciso identificar se as grandezas são diretamente proporcionais (as duas aumentam ou diminuem juntas) ou inversamente proporcionais (uma aumenta enquanto a outra diminui).',
      },
      {
        title: 'Regra de três simples direta',
        description: 'Monta-se a proporção normalmente entre as duas grandezas e resolve-se por multiplicação cruzada.',
      },
      {
        title: 'Regra de três simples inversa',
        description: 'Inverte-se uma das razões antes de montar a proporção, já que uma grandeza cresce enquanto a outra diminui.',
      },
      {
        title: 'Regra de três composta',
        description:
          'Envolve três ou mais grandezas relacionadas simultaneamente. Cada grandeza é comparada individualmente com a grandeza que se deseja descobrir, podendo ser direta ou inversamente proporcional a ela.',
      },
    ],
    examTips: [
      'Antes de montar a regra de três, pergunte: "se uma grandeza aumenta, a outra aumenta ou diminui?" Isso define se a relação é direta ou inversa.',
      'Velocidade e tempo (para uma mesma distância) são classicamente inversamente proporcionais; preço e quantidade costumam ser diretamente proporcionais.',
    ],
    questions: [
      {
        id: 'r3-q1',
        format: 'multipla-escolha',
        statement: 'Se 5 metros de tecido custam R$ 60, quanto custarão 8 metros do mesmo tecido?',
        options: ['R$ 96', 'R$ 90', 'R$ 100', 'R$ 80'],
        answer: 0,
        explanation: 'Grandezas diretamente proporcionais: 5/60 = 8/x → 5x = 480 → x = 96.',
      },
      {
        id: 'r3-q2',
        format: 'certo-errado',
        statement:
          'Em uma regra de três simples, se as grandezas envolvidas forem inversamente proporcionais, deve-se inverter uma das razões antes de igualar os produtos.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. É assim que se ajusta a proporção quando a relação é inversa.',
      },
      {
        id: 'r3-q3',
        format: 'multipla-escolha',
        statement:
          'Um trabalho é feito por 6 operários em 10 dias. Trabalhando no mesmo ritmo, quantos dias levarão 4 operários para fazer o mesmo trabalho?',
        options: ['15 dias', '12 dias', '20 dias', '8 dias'],
        answer: 0,
        explanation: 'Relação inversa (menos operários, mais dias): 6×10 = 4×x → x = 15 dias.',
      },
      {
        id: 'r3-q4',
        format: 'certo-errado',
        statement: 'Velocidade e tempo, em um percurso de distância fixa, são grandezas diretamente proporcionais.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. São inversamente proporcionais: quanto maior a velocidade, menor o tempo necessário para percorrer a mesma distância.',
      },
      {
        id: 'r3-q5',
        format: 'multipla-escolha',
        statement: 'Uma máquina produz 150 peças em 3 horas. Quantas peças produzirá em 5 horas, mantendo o mesmo ritmo?',
        options: ['250', '200', '300', '180'],
        answer: 0,
        explanation: '150/3 = 50 peças por hora. Em 5 horas: 50 × 5 = 250 peças.',
      },
      {
        id: 'r3-q6',
        format: 'multipla-escolha',
        statement: 'Se 4 pedreiros constroem um muro em 12 dias, quantos dias levarão 6 pedreiros para construir o mesmo muro (mesmo ritmo)?',
        options: ['8 dias', '6 dias', '10 dias', '9 dias'],
        answer: 0,
        explanation: 'Relação inversa: 4×12 = 6×x → x = 8 dias.',
      },
      {
        id: 'r3-q7',
        format: 'certo-errado',
        statement:
          'Na regra de três composta, cada grandeza envolvida é comparada individualmente com a grandeza que se deseja descobrir, podendo ser direta ou inversamente proporcional a ela.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Essa comparação individual, grandeza por grandeza, é o que caracteriza a regra de três composta.',
      },
      {
        id: 'r3-q8',
        format: 'multipla-escolha',
        statement: 'Se 10 litros de combustível custam R$ 55, quantos litros é possível comprar com R$ 88 (mesmo preço por litro)?',
        options: ['16 litros', '14 litros', '18 litros', '20 litros'],
        answer: 0,
        explanation: 'Relação direta: 10/55 = x/88 → 55x = 880 → x = 16 litros.',
      },
    ],
    reference: KHAN_REFERENCE,
  },
  {
    slug: 'juros-simples-e-compostos',
    title: 'Juros Simples e Compostos',
    duration: '35 min',
    video: { youtubeId: 'K-iM8UOjfIs', title: 'LIVE – Porcentagem, Juros Simples e Juros Compostos' },
    summary:
      'Cálculo de juros simples e compostos — a base da matemática financeira cobrada em concursos, incluindo empréstimos e aplicações.',
    reviewPoints: [
      {
        title: 'Juros simples',
        description:
          'Calculados pela fórmula J = C × i × t (Capital × taxa × tempo). A taxa incide sempre sobre o capital inicial, gerando um crescimento linear.',
      },
      {
        title: 'Montante em juros simples',
        description: 'M = C + J, ou de forma equivalente, M = C × (1 + i×t).',
      },
      {
        title: 'Juros compostos',
        description:
          'A taxa incide sobre o montante acumulado do período anterior (juros sobre juros), gerando um crescimento exponencial: M = C × (1 + i)^t.',
      },
      {
        title: 'Diferença fundamental',
        description:
          'No regime simples, os juros de cada período são sempre iguais (calculados apenas sobre o capital inicial). No regime composto, os juros aumentam a cada período, pois incidem sobre o montante já acumulado.',
      },
    ],
    examTips: [
      'No juros simples, o crescimento é linear; no composto, é exponencial — quanto maior o tempo de aplicação, maior a diferença entre os dois regimes.',
      'A taxa e o tempo devem estar sempre na mesma unidade (ex: taxa mensal com tempo em meses) antes de aplicar a fórmula — um erro clássico de prova.',
    ],
    questions: [
      {
        id: 'juros-q1',
        format: 'multipla-escolha',
        statement: 'Um capital de R$ 1.000 é aplicado a juros simples de 2% ao mês, por 5 meses. O valor dos juros gerados é:',
        options: ['R$ 100', 'R$ 200', 'R$ 1.100', 'R$ 50'],
        answer: 0,
        explanation: 'J = C×i×t = 1000 × 0,02 × 5 = 100.',
      },
      {
        id: 'juros-q2',
        format: 'certo-errado',
        statement: 'Nos juros simples, a taxa de juros incide sempre sobre o capital inicial, e não sobre o montante acumulado.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Essa é a característica que define os juros simples.',
      },
      {
        id: 'juros-q3',
        format: 'multipla-escolha',
        statement: 'O montante de uma aplicação de R$ 500 a juros simples de 3% ao mês, após 4 meses, é:',
        options: ['R$ 560', 'R$ 500', 'R$ 600', 'R$ 515'],
        answer: 0,
        explanation: 'J = 500 × 0,03 × 4 = 60. Montante: M = 500 + 60 = 560.',
      },
      {
        id: 'juros-q4',
        format: 'certo-errado',
        statement:
          'Nos juros compostos, os juros de cada período são calculados sobre o montante acumulado do período anterior, e não apenas sobre o capital inicial.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Essa é a característica que define os juros compostos ("juros sobre juros").',
      },
      {
        id: 'juros-q5',
        format: 'multipla-escolha',
        statement: 'Um capital de R$ 1.000 aplicado a juros compostos de 10% ao ano, após 2 anos, gera um montante de:',
        options: ['R$ 1.210', 'R$ 1.200', 'R$ 1.100', 'R$ 1.221'],
        answer: 0,
        explanation: 'M = 1000 × (1,10)² = 1000 × 1,21 = 1.210.',
      },
      {
        id: 'juros-q6',
        format: 'certo-errado',
        statement:
          'Para um mesmo capital, taxa e tempo (superior a um período), o montante em juros compostos é sempre maior ou igual ao montante em juros simples.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. A partir do segundo período, o crescimento exponencial dos juros compostos supera o crescimento linear dos juros simples.',
      },
      {
        id: 'juros-q7',
        format: 'multipla-escolha',
        statement: 'Antes de aplicar a fórmula de juros a um problema, é fundamental verificar se:',
        options: [
          'A taxa e o tempo estão na mesma unidade de tempo',
          'O capital é maior que R$ 1.000',
          'A taxa é sempre superior a 10%',
          'O tempo é sempre medido em anos',
        ],
        answer: 0,
        explanation: 'Taxa e tempo precisam estar na mesma unidade (ambos em meses, ou ambos em anos, por exemplo) antes de aplicar a fórmula.',
      },
      {
        id: 'juros-q8',
        format: 'multipla-escolha',
        statement: 'Qual é o valor dos juros simples gerados por um capital de R$ 2.000, a uma taxa de 1,5% ao mês, durante 6 meses?',
        options: ['R$ 180', 'R$ 200', 'R$ 150', 'R$ 160'],
        answer: 0,
        explanation: 'J = 2000 × 0,015 × 6 = 180.',
      },
    ],
    reference: KHAN_REFERENCE,
  },
  {
    slug: 'sistema-de-medidas',
    title: 'Sistema de Medidas',
    duration: '30 min',
    video: {
      youtubeId: 'COr2BhjWmrk',
      title: 'SISTEMAS DE MEDIDAS - MASSA VOLUME CAPACIDADE COMPRIMENTO ÁREA TEMPO | Matemática para o CNU',
    },
    summary:
      'Conversões entre unidades de comprimento, massa, capacidade e tempo — muito cobrado em problemas práticos do dia a dia.',
    reviewPoints: [
      {
        title: 'Comprimento',
        description:
          'km, hm, dam, m, dm, cm, mm — cada unidade é 10 vezes maior que a seguinte. Para converter, desloca-se a vírgula uma casa decimal para cada unidade percorrida.',
      },
      {
        title: 'Massa',
        description: 'kg, hg, dag, g, dg, cg, mg — segue a mesma lógica de base 10 do comprimento. 1 tonelada equivale a 1.000 kg.',
      },
      {
        title: 'Capacidade',
        description: 'kl, hl, dal, l, dl, cl, ml — também segue a base 10. 1 litro equivale a 1.000 mililitros.',
      },
      {
        title: 'Tempo (a exceção)',
        description:
          'Tempo NÃO segue base 10: 1 minuto = 60 segundos, 1 hora = 60 minutos, 1 dia = 24 horas — exige atenção redobrada nas conversões.',
      },
    ],
    examTips: [
      'Comprimento, massa e capacidade seguem o sistema métrico decimal (base 10) — "andar" as casas decimais resolve a conversão.',
      'Tempo é a exceção: sempre em base 60 (segundos/minutos) ou 24 (horas/dia) — nunca use base 10 para converter tempo.',
    ],
    questions: [
      {
        id: 'med-q1',
        format: 'multipla-escolha',
        statement: '2,5 km equivalem a quantos metros?',
        options: ['2.500 m', '250 m', '25.000 m', '2,5 m'],
        answer: 0,
        explanation: '1 km = 1.000 m, então 2,5 km = 2,5 × 1.000 = 2.500 m.',
      },
      {
        id: 'med-q2',
        format: 'certo-errado',
        statement: '1 litro equivale a 1.000 mililitros.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. 1 l = 1.000 ml.',
      },
      {
        id: 'med-q3',
        format: 'multipla-escolha',
        statement: '3.500 gramas equivalem a quantos quilogramas?',
        options: ['3,5 kg', '35 kg', '0,35 kg', '350 kg'],
        answer: 0,
        explanation: '1 kg = 1.000 g, então 3.500 g ÷ 1.000 = 3,5 kg.',
      },
      {
        id: 'med-q4',
        format: 'certo-errado',
        statement: 'As unidades de tempo seguem o sistema decimal (base 10), assim como comprimento, massa e capacidade.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. O tempo segue base 60 (segundos/minutos, minutos/hora) e base 24 (horas/dia), não base 10.',
      },
      {
        id: 'med-q5',
        format: 'multipla-escolha',
        statement: 'Quantos minutos há em 3 horas e 30 minutos?',
        options: ['210 minutos', '180 minutos', '190 minutos', '200 minutos'],
        answer: 0,
        explanation: '3 horas = 3 × 60 = 180 minutos. Somando os 30 minutos: 180 + 30 = 210 minutos.',
      },
      {
        id: 'med-q6',
        format: 'multipla-escolha',
        statement: '1 tonelada equivale a:',
        options: ['1.000 kg', '100 kg', '10.000 kg', '1 kg'],
        answer: 0,
        explanation: '1 tonelada = 1.000 quilogramas.',
      },
      {
        id: 'med-q7',
        format: 'certo-errado',
        statement: 'Para converter metros em centímetros, basta multiplicar o valor por 100.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. 1 m = 100 cm, então basta multiplicar o número de metros por 100.',
      },
      {
        id: 'med-q8',
        format: 'multipla-escolha',
        statement: 'Uma caixa d\'água tem capacidade de 2.000 litros. Quantos hectolitros (hl) ela comporta? (1 hl = 100 l)',
        options: ['20 hl', '200 hl', '2 hl', '2.000 hl'],
        answer: 0,
        explanation: '2.000 l ÷ 100 = 20 hectolitros.',
      },
    ],
    reference: KHAN_REFERENCE,
  },
  {
    slug: 'equacao-do-1-grau',
    title: 'Equação do 1º Grau',
    duration: '30 min',
    video: { youtubeId: 'q9g0htbRMZo', title: 'MATEMÁTICA BÁSICA PARA CONCURSOS - AULA 15 - EQUAÇÃO DO PRIMEIRO GRAU' },
    summary:
      'Resolução de equações do primeiro grau com uma incógnita — a base algébrica usada em praticamente todos os problemas de matemática de concurso.',
    reviewPoints: [
      {
        title: 'O que é uma equação do 1º grau',
        description: 'Uma igualdade envolvendo uma incógnita elevada apenas ao expoente 1 (ex: ax + b = c), sem potências maiores.',
      },
      {
        title: 'Isolando a incógnita',
        description:
          'Os termos com x devem ficar de um lado da igualdade, e os termos numéricos do outro. Ao "passar" um termo de um lado para o outro, ele troca de sinal.',
      },
      {
        title: 'Multiplicação e divisão em ambos os lados',
        description: 'Multiplicar ou dividir os dois lados da equação por um mesmo número (diferente de zero) mantém a igualdade válida.',
      },
      {
        title: 'Traduzindo problemas em equações',
        description:
          'Problemas do cotidiano ("a idade de X é o dobro da idade de Y...") exigem traduzir o enunciado para uma equação antes de resolver.',
      },
    ],
    examTips: [
      'Sempre confira a resposta substituindo o valor de x encontrado na equação original — se a igualdade for verdadeira, a resposta está certa.',
      'Ao "passar" um termo para o outro lado da igualdade, ele troca de sinal: soma vira subtração, multiplicação vira divisão.',
    ],
    questions: [
      {
        id: 'eq1-q1',
        format: 'multipla-escolha',
        statement: 'Na equação 3x + 5 = 20, o valor de x é:',
        options: ['5', '15', '3', '25'],
        answer: 0,
        explanation: '3x = 20 − 5 = 15, então x = 15/3 = 5.',
      },
      {
        id: 'eq1-q2',
        format: 'certo-errado',
        statement: 'Ao passar um termo de um lado para o outro de uma equação, ele deve trocar de sinal.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Essa é a regra prática para manter a igualdade da equação.',
      },
      {
        id: 'eq1-q3',
        format: 'multipla-escolha',
        statement: 'Resolvendo a equação 2x − 7 = 11, obtém-se x igual a:',
        options: ['9', '4', '7', '18'],
        answer: 0,
        explanation: '2x = 11 + 7 = 18, então x = 18/2 = 9.',
      },
      {
        id: 'eq1-q4',
        format: 'certo-errado',
        statement: 'A equação x² + 3 = 12 é classificada como uma equação do primeiro grau.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. Como a incógnita está elevada ao quadrado, é uma equação do segundo grau.',
      },
      {
        id: 'eq1-q5',
        format: 'multipla-escolha',
        statement: 'A soma de um número com o triplo desse mesmo número é igual a 24. Esse número é:',
        options: ['6', '8', '4', '24'],
        answer: 0,
        explanation: 'x + 3x = 24 → 4x = 24 → x = 6.',
      },
      {
        id: 'eq1-q6',
        format: 'multipla-escolha',
        statement: 'Resolvendo a equação 5(x − 2) = 15, obtém-se x igual a:',
        options: ['5', '3', '7', '2'],
        answer: 0,
        explanation: '5x − 10 = 15 → 5x = 25 → x = 5.',
      },
      {
        id: 'eq1-q7',
        format: 'certo-errado',
        statement: 'Multiplicar ambos os lados de uma equação por zero é uma forma válida e útil de encontrar o valor da incógnita.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. Multiplicar por zero anula os dois lados da equação (0 = 0), tornando-a inútil para encontrar x.',
      },
      {
        id: 'eq1-q8',
        format: 'multipla-escolha',
        statement:
          'A idade de Marcos é o dobro da idade de sua irmã. Se a soma das duas idades é 36 anos, a idade de Marcos é:',
        options: ['24 anos', '12 anos', '18 anos', '20 anos'],
        answer: 0,
        explanation: 'Chamando a idade da irmã de x, a de Marcos é 2x. x + 2x = 36 → 3x = 36 → x = 12. Marcos tem 2×12 = 24 anos.',
      },
    ],
    reference: KHAN_REFERENCE,
  },
  {
    slug: 'sequencias-logicas',
    title: 'Raciocínio Lógico: Sequências e Padrões',
    duration: '30 min',
    video: { youtubeId: 'eBjuSzZQ4P4', title: 'Como Gabaritar SEQUÊNCIA LÓGICA DE NÚMEROS em Concursos | Felippe Loureiro' },
    summary:
      'Identificação de padrões em sequências numéricas e de letras — um clássico "quebra-cabeça" cobrado em quase toda prova de raciocínio lógico.',
    reviewPoints: [
      {
        title: 'Sequência aritmética',
        description: 'Cada termo é obtido somando (ou subtraindo) sempre o mesmo valor constante (a razão) ao termo anterior.',
      },
      {
        title: 'Sequência geométrica',
        description: 'Cada termo é obtido multiplicando (ou dividindo) sempre o mesmo valor constante (a razão) pelo termo anterior.',
      },
      {
        title: 'Sequências alternadas',
        description:
          'Podem combinar duas regras diferentes intercaladas (ex: +2, ×2, +2, ×2...) — exige observar os termos posição por posição.',
      },
      {
        title: 'Sequências de letras',
        description: 'Seguem a ordem do alfabeto, muitas vezes pulando uma quantidade fixa de letras a cada termo.',
      },
    ],
    examTips: [
      'Primeiro calcule a diferença entre os termos consecutivos: se for sempre igual, é aritmética; se a razão (divisão) entre eles for sempre igual, é geométrica.',
      'Em sequências que não seguem um padrão simples à primeira vista, tente observar separadamente os termos em posições pares e em posições ímpares.',
    ],
    questions: [
      {
        id: 'seq-q1',
        format: 'multipla-escolha',
        statement: 'Na sequência 3, 7, 11, 15, ..., o próximo número é:',
        options: ['19', '17', '21', '18'],
        answer: 0,
        explanation: 'A razão constante é +4. O próximo termo é 15 + 4 = 19.',
      },
      {
        id: 'seq-q2',
        format: 'certo-errado',
        statement: 'Na sequência 2, 4, 8, 16, ..., cada termo é obtido multiplicando o anterior por 2, caracterizando uma sequência geométrica.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. A razão constante de multiplicação (2) caracteriza uma sequência geométrica.',
      },
      {
        id: 'seq-q3',
        format: 'multipla-escolha',
        statement: 'Na sequência 100, 90, 80, 70, ..., o próximo número é:',
        options: ['60', '65', '50', '75'],
        answer: 0,
        explanation: 'A razão constante é −10. O próximo termo é 70 − 10 = 60.',
      },
      {
        id: 'seq-q4',
        format: 'certo-errado',
        statement: 'Em uma sequência aritmética, a diferença entre dois termos consecutivos quaisquer é sempre constante.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Essa é a definição de sequência aritmética.',
      },
      {
        id: 'seq-q5',
        format: 'multipla-escolha',
        statement: 'Na sequência 5, 10, 20, 40, ..., o próximo número é:',
        options: ['80', '60', '45', '70'],
        answer: 0,
        explanation: 'A razão constante de multiplicação é 2. O próximo termo é 40 × 2 = 80.',
      },
      {
        id: 'seq-q6',
        format: 'multipla-escolha',
        statement: 'Na sequência de letras A, C, E, G, ... (pulando sempre uma letra), a próxima letra é:',
        options: ['I', 'H', 'J', 'K'],
        answer: 0,
        explanation: 'O padrão pula sempre uma letra do alfabeto (A, pula B, C, pula D, E...). Depois de G, pulando H, vem I.',
      },
      {
        id: 'seq-q7',
        format: 'certo-errado',
        statement:
          'A sequência 1, 4, 9, 16, 25 (quadrados perfeitos) apresenta uma diferença constante entre seus termos consecutivos, caracterizando uma sequência aritmética.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. As diferenças entre os termos são 3, 5, 7, 9 — elas aumentam a cada passo, não são constantes, logo não é uma sequência aritmética.',
      },
      {
        id: 'seq-q8',
        format: 'multipla-escolha',
        statement:
          'Na sequência 2, 6, 12, 20, 30, ..., em que os acréscimos aumentam de 2 em 2 (+4, +6, +8, +10...), o próximo termo é:',
        options: ['42', '40', '44', '36'],
        answer: 0,
        explanation: 'Os acréscimos seguem +4, +6, +8, +10, e o próximo é +12. Assim: 30 + 12 = 42.',
      },
    ],
    reference: KHAN_REFERENCE,
  },
  {
    slug: 'logica-proposicional',
    title: 'Raciocínio Lógico: Proposições, Conectivos e Tabela-Verdade',
    duration: '35 min',
    video: { youtubeId: 'KXm8Hi-I_G0', title: 'RACIOCÍNIO LÓGICO - PROPOSIÇÕES E TABELA VERDADE - Professora Angela Matemática' },
    summary:
      'Lógica proposicional: proposições simples e compostas, conectivos lógicos (E, OU, SE...ENTÃO) e a construção de tabelas-verdade.',
    reviewPoints: [
      {
        title: 'Proposição',
        description: 'Frase declarativa que pode ser classificada como verdadeira (V) ou falsa (F), nunca as duas coisas ao mesmo tempo.',
      },
      {
        title: 'Conjunção (E, símbolo ∧)',
        description: 'A proposição composta é verdadeira somente quando AMBAS as proposições simples envolvidas são verdadeiras.',
      },
      {
        title: 'Disjunção (OU, símbolo ∨)',
        description: 'A proposição composta é verdadeira quando PELO MENOS UMA das proposições simples envolvidas é verdadeira.',
      },
      {
        title: 'Condicional (SE...ENTÃO, símbolo →)',
        description: 'É FALSA apenas quando o antecedente é verdadeiro e o consequente é falso; em todos os outros três casos, é verdadeira.',
      },
    ],
    examTips: [
      'Decore a condicional: "Se Verdadeiro então Falso" é a ÚNICA combinação que a torna falsa — as outras três combinações (V-V, F-V, F-F) resultam em verdadeiro.',
      'A negação de "todo A é B" não é "nenhum A é B", e sim "algum A não é B" — uma pegadinha clássica de lógica de quantificadores.',
    ],
    questions: [
      {
        id: 'log-q1',
        format: 'certo-errado',
        statement: 'Uma proposição lógica pode ser, ao mesmo tempo, verdadeira e falsa.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. Pelo princípio da não contradição, uma proposição nunca é verdadeira e falsa ao mesmo tempo.',
      },
      {
        id: 'log-q2',
        format: 'multipla-escolha',
        statement: 'Na conjunção (E) entre duas proposições, o resultado é verdadeiro quando:',
        options: [
          'Pelo menos uma das proposições é verdadeira',
          'Ambas as proposições são verdadeiras',
          'Ambas as proposições são falsas',
          'Apenas a primeira proposição é verdadeira',
        ],
        answer: 1,
        explanation: 'A conjunção (E) só é verdadeira quando as duas proposições envolvidas são verdadeiras.',
      },
      {
        id: 'log-q3',
        format: 'multipla-escolha',
        statement: 'Na disjunção (OU) entre duas proposições, o resultado é falso apenas quando:',
        options: [
          'Ambas as proposições são verdadeiras',
          'Apenas uma das proposições é verdadeira',
          'Ambas as proposições são falsas',
          'Pelo menos uma é verdadeira',
        ],
        answer: 2,
        explanation: 'A disjunção (OU) só é falsa quando as duas proposições envolvidas são falsas.',
      },
      {
        id: 'log-q4',
        format: 'certo-errado',
        statement: 'A proposição condicional "Se P então Q" é falsa apenas quando P é verdadeira e Q é falsa.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Essa é a única combinação que torna a condicional falsa.',
      },
      {
        id: 'log-q5',
        format: 'multipla-escolha',
        statement:
          'Considere a proposição "Se chove, então a rua fica molhada". Sabendo que "chove" é verdadeiro e "a rua fica molhada" é falso, a proposição condicional é:',
        options: ['Falsa', 'Verdadeira', 'Indeterminada', 'Nem verdadeira nem falsa'],
        answer: 0,
        explanation: 'Antecedente verdadeiro e consequente falso é a única combinação que torna a condicional falsa.',
      },
      {
        id: 'log-q6',
        format: 'certo-errado',
        statement: 'A negação da proposição "Todos os alunos passaram na prova" é "Nenhum aluno passou na prova".',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. A negação correta é "Pelo menos um aluno não passou na prova" (algum aluno não passou).',
      },
      {
        id: 'log-q7',
        format: 'multipla-escolha',
        statement:
          'Considere P: "Está chovendo" (falso) e Q: "O céu está nublado" (verdadeiro). O valor lógico de P ∧ Q (P E Q) é:',
        options: ['Falso', 'Verdadeiro', 'Indeterminado', 'Depende de outra informação'],
        answer: 0,
        explanation: 'Na conjunção, basta uma proposição ser falsa para o resultado ser falso. Como P é falso, P ∧ Q é falso.',
      },
      {
        id: 'log-q8',
        format: 'multipla-escolha',
        statement:
          'Considere P: "Está chovendo" (falso) e Q: "O céu está nublado" (verdadeiro). O valor lógico de P ∨ Q (P OU Q) é:',
        options: ['Verdadeiro', 'Falso', 'Indeterminado', 'Depende de outra informação'],
        answer: 0,
        explanation: 'Na disjunção, basta uma proposição ser verdadeira para o resultado ser verdadeiro. Como Q é verdadeiro, P ∨ Q é verdadeiro.',
      },
    ],
    reference: KHAN_REFERENCE,
  },
]

export const mathExamLessons = mathExamTopics.map((topic, topicIndex) => ({
  ...topic,
  topicIndex,
}))

export const mathExamStats = {
  topics: mathExamTopics.length,
  modules: mathExamTopics.length,
  lessons: mathExamTopics.length,
  questions: mathExamTopics.reduce((total, topic) => total + topic.questions.length, 0),
  workload: '10h',
}

export function getMathExamTopic(slug: string) {
  return mathExamLessons.find((topic) => topic.slug === slug)
}
