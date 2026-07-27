export type ExamQuestion = {
  id: string
  moduleSlug: string
  question: string
  options: string[]
  answer: number
  explanation: string
}

export const excelFinalExamQuestions: ExamQuestion[] = [
  // Módulo 1 — Introdução ao Excel
  {
    id: 'm1-q1',
    moduleSlug: 'introducao-ao-excel',
    question: 'O que é o Excel?',
    options: [
      'Um editor de texto usado para escrever documentos longos',
      'Um programa de planilhas eletrônicas para organizar, calcular e analisar dados em linhas e colunas',
      'Um programa exclusivo para criar apresentações de slides',
      'Um antivírus usado para proteger o computador',
    ],
    answer: 1,
    explanation:
      'O Excel é um programa de planilhas eletrônicas: organiza dados em células (linhas e colunas) e permite fazer cálculos e análises sobre eles.',
  },
  {
    id: 'm1-q2',
    moduleSlug: 'introducao-ao-excel',
    question: 'O que é uma "pasta de trabalho" no Excel?',
    options: [
      'O nome de uma única célula específica',
      'O arquivo do Excel, que pode conter uma ou várias planilhas (abas)',
      'Um tipo de gráfico usado em apresentações',
      'A senha que protege o arquivo',
    ],
    answer: 1,
    explanation:
      'A pasta de trabalho é o arquivo do Excel como um todo, podendo conter uma ou várias planilhas (abas), cada uma com seu próprio conjunto de células.',
  },

  // Módulo 2 — Células, Linhas e Colunas
  {
    id: 'm2-q1',
    moduleSlug: 'celulas-linhas-e-colunas',
    question: 'O que o atalho Ctrl + Home faz no Excel?',
    options: [
      'Fecha o arquivo sem salvar',
      'Leva o cursor até a célula A1 da planilha',
      'Seleciona toda a planilha de uma vez',
      'Abre a caixa de impressão',
    ],
    answer: 1,
    explanation:
      'Ctrl + Home move a seleção diretamente para a célula A1, independentemente de onde o cursor estava antes.',
  },
  {
    id: 'm2-q2',
    moduleSlug: 'celulas-linhas-e-colunas',
    question: 'Por que digitar "150 reais" em uma célula pode atrapalhar cálculos no Excel?',
    options: [
      'Porque o Excel não aceita a palavra "reais" em nenhuma célula',
      'Porque isso é interpretado como texto, e não como número, impedindo somas e outros cálculos',
      'Porque isso apaga o conteúdo de outras células automaticamente',
      'Porque a palavra "reais" trava o programa',
    ],
    answer: 1,
    explanation:
      'Misturar texto com número na mesma célula faz o Excel tratar tudo como texto. O correto é digitar só o número e aplicar o formato de moeda separadamente.',
  },

  // Módulo 3 — Fórmulas e Cálculos Básicos
  {
    id: 'm3-q1',
    moduleSlug: 'formulas-e-calculos-basicos',
    question: 'Qual é o resultado da fórmula =2+3*4 no Excel?',
    options: ['20', '14', '24', '9'],
    answer: 1,
    explanation:
      'O Excel calcula a multiplicação antes da soma: 3*4=12, depois 2+12=14. Para obter 20, seria preciso usar parênteses: =(2+3)*4.',
  },
  {
    id: 'm3-q2',
    moduleSlug: 'formulas-e-calculos-basicos',
    question: 'O que acontece com a referência $A$1 quando uma fórmula que a contém é copiada para outra célula?',
    options: [
      'Ela muda automaticamente conforme o destino da cópia',
      'Ela permanece travada em A1, não importa para onde a fórmula seja copiada',
      'O Excel exclui a célula A1 automaticamente',
      'A fórmula deixa de funcionar e mostra um erro',
    ],
    answer: 1,
    explanation:
      'O símbolo $ antes da letra e do número cria uma referência absoluta, que permanece fixa em A1 mesmo quando a fórmula é copiada para outras células.',
  },

  // Módulo 4 — Funções Essenciais
  {
    id: 'm4-q1',
    moduleSlug: 'funcoes-essenciais',
    question: 'Qual fórmula soma corretamente todos os valores de A1 até A10?',
    options: ['=SOMA(A1;A10)', '=SOMA(A1:A10)', '=A1+A10', '=MÉDIA(A1:A10)'],
    answer: 1,
    explanation:
      'O símbolo ":" indica um intervalo contínuo de células. =SOMA(A1:A10) soma todos os valores de A1 até A10, incluindo os dois extremos.',
  },
  {
    id: 'm4-q2',
    moduleSlug: 'funcoes-essenciais',
    question: 'Na fórmula =SE(A1>=7;"Aprovado";"Reprovado"), o que aparece se A1 for igual a 5?',
    options: ['"Aprovado"', '"Reprovado"', 'Um erro de fórmula', 'O número 5, sem alteração'],
    answer: 1,
    explanation:
      'Como 5 não é maior nem igual a 7, a condição é falsa, e a função SE retorna o terceiro argumento: "Reprovado".',
  },

  // Módulo 5 — Formatação e Organização
  {
    id: 'm5-q1',
    moduleSlug: 'formatacao-e-organizacao',
    question: 'Qual é a principal vantagem da formatação condicional em relação à formatação manual?',
    options: [
      'Ela é só mais bonita, mas funciona exatamente igual à manual',
      'Ela atualiza automaticamente sempre que o valor da célula muda, sem precisar reformatar manualmente',
      'Ela só funciona em números, nunca em texto',
      'Ela impede que a célula seja editada no futuro',
    ],
    answer: 1,
    explanation:
      'A formatação condicional reage a mudanças nos dados automaticamente: se o valor deixar de atender à regra (ou passar a atender), a formatação se ajusta sozinha.',
  },
  {
    id: 'm5-q2',
    moduleSlug: 'formatacao-e-organizacao',
    question: 'Qual é a principal utilidade de congelar painéis no Excel?',
    options: [
      'Impedir que qualquer célula da planilha seja editada',
      'Manter linhas ou colunas específicas (como o cabeçalho) sempre visíveis ao rolar a planilha',
      'Aumentar a velocidade de cálculo da planilha',
      'Proteger a planilha com senha',
    ],
    answer: 1,
    explanation:
      'Congelar painéis mantém determinadas linhas ou colunas fixas na tela enquanto o restante da planilha rola, essencial em tabelas grandes.',
  },

  // Módulo 6 — Funções de Busca
  {
    id: 'm6-q1',
    moduleSlug: 'funcoes-de-busca',
    question: 'Para que serve o último argumento (FALSO ou VERDADEIRO) da função PROCV?',
    options: [
      'Define se a fórmula deve ser copiada para outras células',
      'Define se a busca deve ser exata (FALSO) ou aproximada (VERDADEIRO)',
      'Define a cor da célula onde o resultado aparece',
      'Não tem função alguma, pode ser sempre ignorado',
    ],
    answer: 1,
    explanation:
      'O quarto argumento do PROCV controla o tipo de correspondência: FALSO exige correspondência exata; VERDADEIRO permite correspondência aproximada.',
  },
  {
    id: 'm6-q2',
    moduleSlug: 'funcoes-de-busca',
    question: 'Qual é uma vantagem do PROCX em relação ao PROCV?',
    options: [
      'PROCX só funciona em planilhas muito pequenas',
      'PROCX consegue buscar valores em colunas à esquerda da coluna de busca, o que o PROCV não faz',
      'PROCX não permite personalizar mensagem de erro',
      'PROCX é mais lento e usado apenas em versões antigas do Excel',
    ],
    answer: 1,
    explanation:
      'Diferente do PROCV, que só retorna valores de colunas à direita da coluna de busca, o PROCX pode buscar em qualquer direção.',
  },

  // Módulo 7 — Gráficos
  {
    id: 'm7-q1',
    moduleSlug: 'graficos',
    question: 'Qual tipo de gráfico é mais indicado para mostrar a evolução de vendas mês a mês ao longo de um ano?',
    options: ['Gráfico de pizza', 'Gráfico de linhas', 'Nenhum gráfico é indicado para isso', 'Gráfico de dispersão sem conexão'],
    answer: 1,
    explanation:
      'O gráfico de linhas é o mais indicado para mostrar tendências e mudanças ao longo do tempo, pois conecta os pontos e evidencia a direção da evolução.',
  },
  {
    id: 'm7-q2',
    moduleSlug: 'graficos',
    question: 'Por que é importante incluir os cabeçalhos ao selecionar dados para criar um gráfico?',
    options: [
      'Porque o Excel não consegue criar gráficos sem cabeçalho',
      'Porque isso ajuda o Excel a identificar automaticamente legendas e rótulos do gráfico',
      'Porque os cabeçalhos aumentam o tamanho do gráfico',
      'Porque sem cabeçalho o gráfico fica sempre preto',
    ],
    answer: 1,
    explanation:
      'Os cabeçalhos das colunas ajudam o Excel a nomear automaticamente séries de dados e rótulos, economizando configuração manual depois.',
  },

  // Módulo 8 — Tabelas Dinâmicas
  {
    id: 'm8-q1',
    moduleSlug: 'tabelas-dinamicas',
    question: 'Em qual situação uma tabela dinâmica costuma ser mais útil?',
    options: [
      'Em uma lista pequena, com apenas 5 linhas de dados',
      'Em uma lista grande, com muitas linhas e colunas categóricas, que precisa ser resumida rapidamente',
      'Apenas quando a planilha não tem nenhuma coluna de texto',
      'Somente em planilhas sem nenhum número',
    ],
    answer: 1,
    explanation:
      'Tabelas dinâmicas se destacam quando há grandes volumes de dados para resumir e cruzar por diferentes categorias.',
  },
  {
    id: 'm8-q2',
    moduleSlug: 'tabelas-dinamicas',
    question: 'O que é necessário fazer depois de alterar os dados de origem de uma tabela dinâmica?',
    options: [
      'Nada, ela sempre atualiza automaticamente, como uma fórmula comum',
      'É preciso clicar em "Atualizar" para que a tabela dinâmica reflita os novos dados',
      'É preciso excluir a tabela dinâmica e criar uma nova do zero',
      'É preciso reiniciar o computador',
    ],
    answer: 1,
    explanation:
      'Ao contrário de fórmulas comuns, tabelas e gráficos dinâmicos não recalculam sozinhos — é preciso clicar em "Atualizar" após mudar os dados de origem.',
  },

  // Módulo 9 — Validação, Proteção e Produtividade
  {
    id: 'm9-q1',
    moduleSlug: 'validacao-protecao-e-produtividade',
    question: 'Qual é a principal vantagem de usar uma lista suspensa (validação de dados) em vez de digitação livre?',
    options: [
      'Ela deixa a planilha mais lenta, mas sem outro efeito',
      'Ela padroniza o preenchimento e evita erros de digitação e variações de escrita',
      'Ela impede que a célula seja copiada',
      'Ela transforma números em texto automaticamente',
    ],
    answer: 1,
    explanation:
      'A lista suspensa restringe o preenchimento a opções pré-definidas, evitando variações de escrita que dificultariam análises posteriores.',
  },
  {
    id: 'm9-q2',
    moduleSlug: 'validacao-protecao-e-produtividade',
    question: 'O que é preciso fazer ANTES de ativar "Proteger Planilha", se algumas células devem continuar editáveis?',
    options: [
      'Nada, todas as células ficam editáveis automaticamente',
      'Desbloquear especificamente as células que devem continuar editáveis, já que todas vêm bloqueadas por padrão',
      'Excluir todas as fórmulas da planilha',
      'Salvar o arquivo em PDF antes de proteger',
    ],
    answer: 1,
    explanation:
      'Como todas as células vêm marcadas como "bloqueadas" por padrão, é necessário desbloquear manualmente as que devem continuar editáveis antes de proteger a planilha.',
  },

  // Módulo 10 — Projeto Prático
  {
    id: 'm10-q1',
    moduleSlug: 'projeto-pratico',
    question: 'Como calcular o saldo de um orçamento pessoal, já tendo o total de receitas e o total de despesas?',
    options: [
      'Somando os dois totais',
      'Subtraindo o total de despesas do total de receitas',
      'Multiplicando os dois totais',
      'O saldo não pode ser calculado automaticamente no Excel',
    ],
    answer: 1,
    explanation:
      'O saldo de um período é o total de receitas menos o total de despesas — uma subtração simples entre os dois resultados já calculados.',
  },
  {
    id: 'm10-q2',
    moduleSlug: 'projeto-pratico',
    question: 'Em um painel financeiro, qual é a função de combinar tabela dinâmica com gráfico de pizza?',
    options: [
      'Impedir que novos lançamentos sejam adicionados à planilha',
      'Resumir os gastos por categoria e visualizar rapidamente qual categoria consome mais do orçamento',
      'Substituir completamente a necessidade de fórmulas na planilha',
      'Proteger a planilha automaticamente com senha',
    ],
    answer: 1,
    explanation:
      'A combinação de tabela dinâmica com gráfico de pizza resume os gastos por categoria e mostra visualmente qual parcela do orçamento cada uma representa.',
  },
]

export const EXCEL_FINAL_EXAM_PASSING_SCORE = 14
export const EXCEL_FINAL_EXAM_TOTAL_QUESTIONS = 20
