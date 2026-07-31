export type ExamQuestion = {
  id: string
  moduleSlug: string
  question: string
  options: string[]
  answer: number
  explanation: string
}

export const englishFinalExamQuestions: ExamQuestion[] = [
  // Módulo 1 — Primeiros Passos no Inglês
  {
    id: 'm1-q1',
    moduleSlug: 'primeiros-passos',
    question: 'Como se escreve o número 30 em inglês?',
    options: ['Threety', 'Thirty', 'Thirteen', 'Three-ty'],
    answer: 1,
    explanation:
      'O número 30 se escreve "thirty" em inglês. "Thirteen" é o número 13, uma palavra completamente diferente.',
  },
  {
    id: 'm1-q2',
    moduleSlug: 'primeiros-passos',
    question: 'Qual saudação é apropriada para cumprimentar alguém de manhã, em uma situação formal?',
    options: ['Good night', 'Good afternoon', 'Good morning', 'Good evening'],
    answer: 2,
    explanation:
      '"Good morning" é usado para cumprimentar alguém pela manhã. "Good afternoon" é à tarde, e "good evening"/"good night" são usados à noite.',
  },
  // Módulo 2 — O Verbo To Be e Pronomes
  {
    id: 'm2-q1',
    moduleSlug: 'verbo-to-be-e-pronomes',
    question: 'Qual frase usa corretamente o verbo to be?',
    options: ['He are a doctor.', 'He is a doctor.', 'He am a doctor.', 'He be a doctor.'],
    answer: 1,
    explanation:
      '"He" (ele) combina com "is": "He is a doctor." "Am" só é usado com "I", e "are" com you/we/they.',
  },
  {
    id: 'm2-q2',
    moduleSlug: 'verbo-to-be-e-pronomes',
    question: 'Qual é o pronome possessivo correto para "Maria" (feminino) em "___ car is new"?',
    options: ['His', 'Her', 'Their', 'Its'],
    answer: 1,
    explanation:
      'Maria é do gênero feminino, então o possessivo correto é "her": "Her car is new."',
  },
  // Módulo 3 — Fazendo Perguntas
  {
    id: 'm3-q1',
    moduleSlug: 'fazendo-perguntas',
    question: 'Qual palavra WH é usada para perguntar sobre o motivo de algo?',
    options: ['Where', 'When', 'Why', 'Who'],
    answer: 2,
    explanation:
      '"Why" pergunta sobre o motivo ou a razão de algo, equivalente a "por quê" em português.',
  },
  {
    id: 'm3-q2',
    moduleSlug: 'fazendo-perguntas',
    question: 'Qual é a resposta curta correta para "Do you like tea?" (resposta afirmativa)?',
    options: ['Yes, I like.', 'Yes, I am.', 'Yes, I do.', 'Yes, I have.'],
    answer: 2,
    explanation:
      'A pergunta usa o auxiliar "do", então a resposta curta correta repete "do": "Yes, I do."',
  },
  // Módulo 4 — Rotina no Present Simple
  {
    id: 'm4-q1',
    moduleSlug: 'rotina-no-present-simple',
    question: 'Qual frase está correta no Present Simple?',
    options: ['He work every day.', 'He works every day.', 'He working every day.', 'He is work every day.'],
    answer: 1,
    explanation:
      'Com "he" (terceira pessoa do singular), o verbo recebe "-s" no Present Simple: "He works every day."',
  },
  {
    id: 'm4-q2',
    moduleSlug: 'rotina-no-present-simple',
    question: 'Qual preposição é usada com dias da semana, como em "___ Fridays"?',
    options: ['At', 'On', 'In', 'For'],
    answer: 1,
    explanation:
      'Usamos "on" com dias da semana: "on Fridays". "At" é usado com horários e "in" com meses, estações e anos.',
  },
  // Módulo 5 — O Mundo ao Seu Redor
  {
    id: 'm5-q1',
    moduleSlug: 'mundo-ao-redor',
    question: 'Qual frase está correta para "há dois livros na mesa"?',
    options: ['There is two books on the table.', 'There are two books on the table.', 'There a two books on the table.', 'There have two books on the table.'],
    answer: 1,
    explanation:
      '"Two books" está no plural, então o correto é "there are": "There are two books on the table."',
  },
  {
    id: 'm5-q2',
    moduleSlug: 'mundo-ao-redor',
    question: 'Qual preposição completa corretamente: "The keys are ___ the drawer" (dentro da gaveta)?',
    options: ['On', 'In', 'Behind', 'Next to'],
    answer: 1,
    explanation:
      '"In" é usado para indicar que algo está dentro de um espaço fechado, como uma gaveta.',
  },
  // Módulo 6 — Vocabulário Essencial do Dia a Dia
  {
    id: 'm6-q1',
    moduleSlug: 'vocabulario-do-dia-a-dia',
    question: 'Como se diz "peixe" em inglês?',
    options: ['Chicken', 'Fish', 'Meat', 'Egg'],
    answer: 1,
    explanation:
      '"Fish" significa peixe. "Chicken" é frango, "meat" é carne e "egg" é ovo.',
  },
  {
    id: 'm6-q2',
    moduleSlug: 'vocabulario-do-dia-a-dia',
    question: 'Qual é o número ordinal correspondente a "3" em inglês?',
    options: ['Threeth', 'Third', 'Thirdth', 'Three'],
    answer: 1,
    explanation:
      'O ordinal de "three" (três) é "third" (terceiro) — uma das exceções que não segue apenas o padrão "número + th".',
  },
  // Módulo 7 — Ações no Presente
  {
    id: 'm7-q1',
    moduleSlug: 'acoes-no-presente',
    question: 'Qual frase está no Present Continuous corretamente?',
    options: ['She is study now.', 'She studying now.', 'She is studying now.', 'She studies now the moment.'],
    answer: 2,
    explanation:
      'O Present Continuous se forma com to be + verbo-ing: "She is studying now."',
  },
  {
    id: 'm7-q2',
    moduleSlug: 'acoes-no-presente',
    question: 'Qual verbo completa corretamente: "I need to ___ a decision" (tomar uma decisão)?',
    options: ['Do', 'Make', 'Have', 'Take'],
    answer: 1,
    explanation:
      '"Make a decision" é a combinação correta em inglês — "make" é usado para criar algo, como uma decisão.',
  },
  // Módulo 8 — Passado Simples
  {
    id: 'm8-q1',
    moduleSlug: 'passado-simples',
    question: 'Qual frase está correta no passado do verbo to be?',
    options: ['You was at the party.', 'You were at the party.', 'You is at the party.', 'You be at the party.'],
    answer: 1,
    explanation:
      '"You" combina com "were" no passado: "You were at the party."',
  },
  {
    id: 'm8-q2',
    moduleSlug: 'passado-simples',
    question: 'Qual é o passado do verbo irregular "have"?',
    options: ['Haved', 'Have', 'Had', 'Having'],
    answer: 2,
    explanation:
      '"Have" é irregular e vira "had" no passado simples — não existe a forma "haved".',
  },
  // Módulo 9 — Situações Práticas em Viagens
  {
    id: 'm9-q1',
    moduleSlug: 'situacoes-praticas-em-viagens',
    question: 'Qual é a forma mais educada de pedir algo em um restaurante?',
    options: ['Give me the menu.', 'I want the menu.', 'Can I have the menu, please?', 'Menu now, please.'],
    answer: 2,
    explanation:
      '"Can I have..., please?" é uma forma educada e comum de fazer pedidos em um restaurante em inglês.',
  },
  {
    id: 'm9-q2',
    moduleSlug: 'situacoes-praticas-em-viagens',
    question: 'O que significa a instrução "go straight" ao pedir direções?',
    options: ['Vire à esquerda', 'Vire à direita', 'Siga em frente', 'Pare aqui'],
    answer: 2,
    explanation:
      '"Go straight" significa "siga em frente" — uma instrução comum ao pedir ou dar direções.',
  },
  // Módulo 10 — Conversação e Próximos Passos
  {
    id: 'm10-q1',
    moduleSlug: 'conversacao-e-proximos-passos',
    question: 'Qual é um exemplo típico de tema para "small talk" (conversa casual)?',
    options: ['O salário anual de alguém', 'O clima do dia', 'Assuntos médicos delicados', 'Detalhes financeiros pessoais'],
    answer: 1,
    explanation:
      'O clima é um dos temas mais clássicos e seguros de small talk, por ser leve e neutro.',
  },
  {
    id: 'm10-q2',
    moduleSlug: 'conversacao-e-proximos-passos',
    question: 'O que significa o phrasal verb "give up"?',
    options: ['Continuar', 'Desistir', 'Acordar', 'Procurar'],
    answer: 1,
    explanation:
      '"Give up" significa "desistir" — um phrasal verb muito comum no inglês do dia a dia.',
  },
]

export const ENGLISH_FINAL_EXAM_PASSING_SCORE = 14
export const ENGLISH_FINAL_EXAM_TOTAL_QUESTIONS = 20
