export type MathExamFinalQuestion = {
  id: string
  moduleSlug: string
  question: string
  options: string[]
  answer: number
  explanation: string
}

export const mathExamFinalExamQuestions: MathExamFinalQuestion[] = [
  // Operações Fundamentais, MMC e MDC
  {
    id: 'sim-q1',
    moduleSlug: 'operacoes-mmc-mdc',
    question: 'O resultado de 15 − (2 + 3) × 2 é:',
    options: ['5', '10', '20', '-5'],
    answer: 0,
    explanation: 'Primeiro o parêntese: 2+3=5. Depois a multiplicação: 5×2=10. Por fim: 15−10=5.',
  },
  {
    id: 'sim-q2',
    moduleSlug: 'operacoes-mmc-mdc',
    question: 'O número 315 é divisível por 5, pois termina em 5.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. Números terminados em 0 ou 5 são divisíveis por 5.',
  },
  {
    id: 'sim-q3',
    moduleSlug: 'operacoes-mmc-mdc',
    question: 'O MMC entre 8 e 12 é:',
    options: ['24', '48', '4', '96'],
    answer: 0,
    explanation: 'Múltiplos de 8: 8, 16, 24... Múltiplos de 12: 12, 24... O menor múltiplo comum é 24.',
  },
  {
    id: 'sim-q4',
    moduleSlug: 'operacoes-mmc-mdc',
    question: 'O MDC entre 30 e 45 é:',
    options: ['15', '5', '3', '45'],
    answer: 0,
    explanation: 'Divisores de 30: 1,2,3,5,6,10,15,30. Divisores de 45: 1,3,5,9,15,45. O maior divisor comum é 15.',
  },

  // Frações e Números Decimais
  {
    id: 'sim-q5',
    moduleSlug: 'fracoes-e-decimais',
    question: 'O resultado de 3/4 − 1/4 é:',
    options: ['1/2', '1/4', '1', '3/4'],
    answer: 0,
    explanation: '3/4 − 1/4 = 2/4, que simplificado resulta em 1/2.',
  },
  {
    id: 'sim-q6',
    moduleSlug: 'fracoes-e-decimais',
    question: '0,2 é equivalente à fração 1/5.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. 1 ÷ 5 = 0,2.',
  },
  {
    id: 'sim-q7',
    moduleSlug: 'fracoes-e-decimais',
    question: 'O resultado de 5/6 ÷ 1/3 é:',
    options: ['5/2', '5/18', '2/5', '1/2'],
    answer: 0,
    explanation: 'Copia, conserva, inverte: 5/6 × 3/1 = 15/6, que simplificado resulta em 5/2.',
  },
  {
    id: 'sim-q8',
    moduleSlug: 'fracoes-e-decimais',
    question: 'A fração 9/2 corresponde ao número misto:',
    options: ['4 e 1/2', '3 e 1/2', '4 e 2/2', '2 e 1/2'],
    answer: 0,
    explanation: '9 dividido por 2 dá 4, com resto 1. Logo, 9/2 = 4 e 1/2.',
  },

  // Conjuntos Numéricos
  {
    id: 'sim-q9',
    moduleSlug: 'conjuntos-numericos',
    question: 'O número zero pertence ao conjunto dos números naturais.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. O zero é considerado um número natural.',
  },
  {
    id: 'sim-q10',
    moduleSlug: 'conjuntos-numericos',
    question: 'Assinale a alternativa que apresenta apenas números inteiros.',
    options: ['−3, 0, 7', '1/2, 2, 3', '√2, 4, 5', '0,5, 1, 2'],
    answer: 0,
    explanation: '−3, 0 e 7 são todos números inteiros. As demais alternativas incluem frações ou números irracionais.',
  },
  {
    id: 'sim-q11',
    moduleSlug: 'conjuntos-numericos',
    question: 'Um número racional pode sempre ser escrito na forma de fração a/b, com a e b inteiros e b diferente de zero.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. Essa é a própria definição de número racional.',
  },
  {
    id: 'sim-q12',
    moduleSlug: 'conjuntos-numericos',
    question: 'O número √9 (raiz quadrada de 9) é classificado como:',
    options: ['Irracional', 'Racional (é igual a 3)', 'Nenhum conjunto numérico', 'Apenas real, não racional'],
    answer: 1,
    explanation: '√9 = 3, que é um número inteiro e, portanto, também racional.',
  },

  // Razão e Proporção
  {
    id: 'sim-q13',
    moduleSlug: 'razao-e-proporcao',
    question: 'A razão entre 40 e 8 é igual a:',
    options: ['5', '8', '40', '1/5'],
    answer: 0,
    explanation: '40 ÷ 8 = 5.',
  },
  {
    id: 'sim-q14',
    moduleSlug: 'razao-e-proporcao',
    question: 'Numa proporção a/b = c/d, é correto afirmar que a×d = b×c.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. Essa é a propriedade fundamental das proporções (produto dos meios = produto dos extremos).',
  },
  {
    id: 'sim-q15',
    moduleSlug: 'razao-e-proporcao',
    question: 'Se x/9 = 5/3, o valor de x é:',
    options: ['15', '12', '18', '20'],
    answer: 0,
    explanation: 'Multiplicação cruzada: 3x = 45, então x = 15.',
  },
  {
    id: 'sim-q16',
    moduleSlug: 'razao-e-proporcao',
    question:
      'Em um mapa, a escala é de 1 para 50.000 (1 cm no mapa equivale a 50.000 cm na realidade). Uma distância de 3 cm no mapa corresponde, na realidade, a quantos metros?',
    options: ['1.500 m', '150 m', '15.000 m', '500 m'],
    answer: 0,
    explanation: '3 × 50.000 = 150.000 cm. Convertendo para metros (÷100): 1.500 m.',
  },

  // Porcentagem
  {
    id: 'sim-q17',
    moduleSlug: 'porcentagem',
    question: '15% de 400 é igual a:',
    options: ['60', '15', '40', '65'],
    answer: 0,
    explanation: '0,15 × 400 = 60.',
  },
  {
    id: 'sim-q18',
    moduleSlug: 'porcentagem',
    question: 'Um produto de R$ 150 com desconto de 20% passa a custar R$ 120.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. 150 × (1 − 0,20) = 150 × 0,80 = 120.',
  },
  {
    id: 'sim-q19',
    moduleSlug: 'porcentagem',
    question: '45 é quantos por cento de 90?',
    options: ['50%', '45%', '40%', '55%'],
    answer: 0,
    explanation: '(45/90) × 100 = 50%.',
  },
  {
    id: 'sim-q20',
    moduleSlug: 'porcentagem',
    question: 'Uma loja aumentou o preço de um produto de R$ 40 para R$ 50. Qual foi o percentual de aumento?',
    options: ['25%', '20%', '10%', '50%'],
    answer: 0,
    explanation: 'Aumento de R$ 10 sobre R$ 40: (10/40) × 100 = 25%.',
  },

  // Regra de Três Simples e Composta
  {
    id: 'sim-q21',
    moduleSlug: 'regra-de-tres',
    question: 'Se 3 kg de arroz custam R$ 21, quanto custarão 7 kg do mesmo arroz?',
    options: ['R$ 49', 'R$ 42', 'R$ 45', 'R$ 56'],
    answer: 0,
    explanation: '21/3 = 7 reais por kg. 7 kg × R$ 7 = R$ 49.',
  },
  {
    id: 'sim-q22',
    moduleSlug: 'regra-de-tres',
    question: 'Grandezas inversamente proporcionais exigem que uma das razões seja invertida antes de se montar a proporção.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. É assim que se ajusta a regra de três quando a relação entre as grandezas é inversa.',
  },
  {
    id: 'sim-q23',
    moduleSlug: 'regra-de-tres',
    question:
      '8 torneiras enchem uma piscina em 6 horas. Quantas horas levarão 4 torneiras (com a mesma vazão cada) para encher a mesma piscina?',
    options: ['12 horas', '10 horas', '3 horas', '24 horas'],
    answer: 0,
    explanation: 'Relação inversa: 8×6 = 4×x → x = 12 horas.',
  },
  {
    id: 'sim-q24',
    moduleSlug: 'regra-de-tres',
    question: 'Se 5 máquinas produzem 100 peças em 2 horas, quantas peças as mesmas 5 máquinas produzirão em 4 horas?',
    options: ['200', '150', '250', '100'],
    answer: 0,
    explanation: 'Em 2 horas produzem 100 peças; em 4 horas (o dobro do tempo), produzirão o dobro: 200 peças.',
  },

  // Juros Simples e Compostos
  {
    id: 'sim-q25',
    moduleSlug: 'juros-simples-e-compostos',
    question: 'Um capital de R$ 800 aplicado a juros simples de 4% ao mês, por 3 meses, gera juros de:',
    options: ['R$ 96', 'R$ 80', 'R$ 100', 'R$ 120'],
    answer: 0,
    explanation: 'J = 800 × 0,04 × 3 = 96.',
  },
  {
    id: 'sim-q26',
    moduleSlug: 'juros-simples-e-compostos',
    question: 'No regime de juros compostos, o crescimento do montante ao longo do tempo é exponencial, e não linear.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. Nos juros compostos, cada período incide sobre o montante já acumulado, gerando crescimento exponencial.',
  },
  {
    id: 'sim-q27',
    moduleSlug: 'juros-simples-e-compostos',
    question: 'O montante de R$ 2.000 aplicados a juros simples de 5% ao mês, durante 6 meses, é:',
    options: ['R$ 2.600', 'R$ 2.500', 'R$ 2.100', 'R$ 3.000'],
    answer: 0,
    explanation: 'J = 2000 × 0,05 × 6 = 600. Montante: 2000 + 600 = 2.600.',
  },
  {
    id: 'sim-q28',
    moduleSlug: 'juros-simples-e-compostos',
    question: 'Um capital de R$ 500 é aplicado a juros compostos de 20% ao ano. Após 2 anos, o montante é:',
    options: ['R$ 720', 'R$ 700', 'R$ 600', 'R$ 750'],
    answer: 0,
    explanation: 'M = 500 × (1,20)² = 500 × 1,44 = 720.',
  },

  // Sistema de Medidas
  {
    id: 'sim-q29',
    moduleSlug: 'sistema-de-medidas',
    question: '5.000 metros equivalem a quantos quilômetros?',
    options: ['5 km', '50 km', '0,5 km', '500 km'],
    answer: 0,
    explanation: '1 km = 1.000 m, então 5.000 m ÷ 1.000 = 5 km.',
  },
  {
    id: 'sim-q30',
    moduleSlug: 'sistema-de-medidas',
    question: '1 hora equivale a 3.600 segundos.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. 1 hora = 60 minutos × 60 segundos = 3.600 segundos.',
  },
  {
    id: 'sim-q31',
    moduleSlug: 'sistema-de-medidas',
    question: '0,5 kg equivale a quantos gramas?',
    options: ['500 g', '50 g', '5.000 g', '5 g'],
    answer: 0,
    explanation: '1 kg = 1.000 g, então 0,5 kg = 0,5 × 1.000 = 500 g.',
  },
  {
    id: 'sim-q32',
    moduleSlug: 'sistema-de-medidas',
    question: 'Uma receita usa 750 ml de leite. Quantos litros isso representa?',
    options: ['0,75 l', '7,5 l', '0,075 l', '75 l'],
    answer: 0,
    explanation: '1 l = 1.000 ml, então 750 ml ÷ 1.000 = 0,75 l.',
  },

  // Equação do 1º Grau
  {
    id: 'sim-q33',
    moduleSlug: 'equacao-do-1-grau',
    question: 'Na equação 4x − 8 = 12, o valor de x é:',
    options: ['5', '4', '3', '8'],
    answer: 0,
    explanation: '4x = 12 + 8 = 20, então x = 20/4 = 5.',
  },
  {
    id: 'sim-q34',
    moduleSlug: 'equacao-do-1-grau',
    question: 'A equação 2x + 1 = 2x + 5 não possui solução, pois resulta em uma afirmação falsa (1 = 5) ao isolar x.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. Subtraindo 2x dos dois lados, resta 1 = 5, o que é falso, indicando que não há valor de x que satisfaça a equação.',
  },
  {
    id: 'sim-q35',
    moduleSlug: 'equacao-do-1-grau',
    question: 'Resolvendo a equação 6x = 3x + 18, o valor de x é:',
    options: ['6', '3', '9', '18'],
    answer: 0,
    explanation: '6x − 3x = 18 → 3x = 18 → x = 6.',
  },
  {
    id: 'sim-q36',
    moduleSlug: 'equacao-do-1-grau',
    question: 'O dobro de um número, somado a 10, é igual a 30. Esse número é:',
    options: ['10', '20', '5', '15'],
    answer: 0,
    explanation: '2x + 10 = 30 → 2x = 20 → x = 10.',
  },

  // Raciocínio Lógico: Sequências e Padrões
  {
    id: 'sim-q37',
    moduleSlug: 'sequencias-logicas',
    question: 'Na sequência 1, 3, 5, 7, ..., o próximo número é:',
    options: ['9', '8', '11', '10'],
    answer: 0,
    explanation: 'A razão constante é +2. O próximo termo é 7 + 2 = 9.',
  },
  {
    id: 'sim-q38',
    moduleSlug: 'sequencias-logicas',
    question: 'Na sequência 81, 27, 9, 3, ..., cada termo é obtido dividindo o anterior por 3, caracterizando uma sequência geométrica.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. 81÷3=27, 27÷3=9, 9÷3=3 — a razão constante de divisão caracteriza uma sequência geométrica.',
  },
  {
    id: 'sim-q39',
    moduleSlug: 'sequencias-logicas',
    question: 'Na sequência de letras B, D, F, H, ... (pulando sempre uma letra), a próxima letra é:',
    options: ['J', 'I', 'K', 'G'],
    answer: 0,
    explanation: 'O padrão pula sempre uma letra (B, pula C, D, pula E, F, pula G, H...). Depois de H, pulando I, vem J.',
  },
  {
    id: 'sim-q40',
    moduleSlug: 'sequencias-logicas',
    question: 'Na sequência 4, 9, 16, 25, ... (quadrados de 2, 3, 4, 5), o próximo número é:',
    options: ['36', '30', '49', '35'],
    answer: 0,
    explanation: 'O próximo termo é o quadrado de 6: 6² = 36.',
  },

  // Raciocínio Lógico: Proposições, Conectivos e Tabela-Verdade
  {
    id: 'sim-q41',
    moduleSlug: 'logica-proposicional',
    question: 'A proposição "O número 4 é par e o número 9 é ímpar" é verdadeira, pois ambas as afirmações simples que a compõem são verdadeiras.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. 4 é par (verdadeiro) e 9 é ímpar (verdadeiro), então a conjunção (E) das duas é verdadeira.',
  },
  {
    id: 'sim-q42',
    moduleSlug: 'logica-proposicional',
    question: 'Considere P: "Hoje é sábado" (falso) e Q: "Amanhã é domingo" (falso). O valor lógico de P ∨ Q é:',
    options: ['Falso', 'Verdadeiro', 'Indeterminado', 'Depende de outra informação'],
    answer: 0,
    explanation: 'Na disjunção (OU), quando ambas as proposições são falsas, o resultado é falso.',
  },
  {
    id: 'sim-q43',
    moduleSlug: 'logica-proposicional',
    question: 'A proposição "Se 2+2=5, então a Terra é quadrada" possui valor lógico:',
    options: ['Verdadeira', 'Falsa', 'Indeterminada', 'Não pode ser avaliada'],
    answer: 0,
    explanation: 'O antecedente (2+2=5) é falso. Uma condicional com antecedente falso é sempre verdadeira, independentemente do consequente.',
  },
  {
    id: 'sim-q44',
    moduleSlug: 'logica-proposicional',
    question: 'A negação de "Existe pelo menos um aluno que não estudou" é "Todos os alunos estudaram".',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. A negação de "existe algum que não" é "todos fazem" — regra de negação de quantificadores.',
  },
]

export const MATH_EXAM_FINAL_EXAM_PASSING_SCORE = 31
export const MATH_EXAM_FINAL_EXAM_TOTAL_QUESTIONS = 44
