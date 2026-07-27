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

export const excelCourseModules: CourseModule[] = [
  {
    slug: 'introducao-ao-excel',
    title: 'Introdução ao Excel',
    description:
      'Entenda o que é o Excel, para que ele serve no dia a dia e como criar sua primeira planilha.',
    lessons: [
      {
        slug: 'o-que-e-excel',
        video: { youtubeId: '6Mvh4ILpQZc', title: 'O guia para Iniciantes no Excel | Tutorial Básico de EXCEL' },
        title: 'O que é o Excel e para que serve',
        duration: '30 min',
        summary:
          'O Excel é um programa de planilhas eletrônicas usado para organizar, calcular e analisar dados. Antes de aprender fórmulas e funções, é importante entender o que ele realmente faz e por que é tão usado no trabalho e nos estudos.',
        objectives: [
          'Explicar o que é uma planilha eletrônica.',
          'Reconhecer situações do dia a dia em que o Excel pode ser útil.',
        ],
        keyPoints: [
          {
            title: 'Uma planilha organiza dados em linhas e colunas',
            description:
              'O Excel guarda informações em uma grade de células, organizadas por colunas (letras) e linhas (números). Essa organização permite somar, comparar e calcular dados com muito mais facilidade do que em um papel ou em um editor de texto.',
          },
          {
            title: 'Para que o Excel é usado no dia a dia',
            description:
              'Controle de gastos pessoais, listas de tarefas, notas de estudantes, estoque de um pequeno negócio, horários de trabalho — praticamente qualquer informação organizada em tabela pode ser controlada no Excel, com a vantagem de fazer cálculos automáticos.',
          },
          {
            title: 'Excel, Google Planilhas e LibreOffice Calc',
            description:
              'O Excel é o programa de planilhas mais usado no mercado de trabalho, mas o conhecimento se aplica também a alternativas gratuitas como Google Planilhas e LibreOffice Calc — a lógica de células, linhas e fórmulas é praticamente a mesma.',
          },
        ],
        activity: {
          title: 'Identificando usos do Excel na sua rotina',
          steps: [
            'Liste três situações da sua vida (pessoal ou de trabalho) em que uma planilha ajudaria a organizar informações.',
            'Para cada uma, escreva que tipo de cálculo ou organização você gostaria de fazer automaticamente.',
            'Abra o Excel (ou Google Planilhas) e apenas explore a tela por alguns minutos, sem se preocupar em fazer nada específico ainda.',
          ],
        },
        quiz: {
          question: 'Qual é a melhor definição do que é o Excel?',
          options: [
            'Um editor de texto usado para escrever cartas e currículos',
            'Um programa de planilhas eletrônicas para organizar, calcular e analisar dados em linhas e colunas',
            'Um programa exclusivo para criar apresentações de slides',
            'Um aplicativo apenas para desenhar gráficos, sem guardar dados',
          ],
          answer: 1,
          explanation:
            'O Excel é um programa de planilhas eletrônicas: ele organiza informações em células (linhas e colunas) e permite fazer cálculos e análises sobre esses dados.',
        },
        reference: {
          label: 'Microsoft — Introdução ao Excel',
          href: 'https://support.microsoft.com/pt-br/excel',
        },
      },
      {
        slug: 'conhecendo-a-tela-do-excel',
        video: { youtubeId: 'sYSw--6wlJY', title: 'Faixa de opções do Excel' },
        title: 'Conhecendo a tela: barra de fórmulas, células e faixa de opções',
        duration: '35 min',
        summary:
          'Antes de começar a digitar, vale conhecer as partes principais da tela do Excel: a faixa de opções (onde ficam os comandos), a barra de fórmulas (onde você vê e edita o conteúdo de uma célula) e a grade de células propriamente dita.',
        objectives: [
          'Localizar a faixa de opções, a barra de fórmulas e a grade de células.',
          'Entender a diferença entre o conteúdo exibido na célula e o conteúdo mostrado na barra de fórmulas.',
        ],
        keyPoints: [
          {
            title: 'Faixa de opções (Ribbon)',
            description:
              'É a barra na parte superior da tela, organizada em guias (Página Inicial, Inserir, Fórmulas, Dados, etc.). Cada guia agrupa comandos relacionados — por exemplo, a guia "Página Inicial" reúne formatação de texto e números.',
          },
          {
            title: 'Barra de fórmulas',
            description:
              'Fica logo abaixo da faixa de opções e mostra o conteúdo real da célula selecionada — inclusive fórmulas, mesmo quando a célula exibe apenas o resultado calculado. É nela que você confirma o que realmente foi digitado.',
          },
          {
            title: 'Células, linhas e colunas',
            description:
              'A área principal da tela é dividida em colunas (identificadas por letras: A, B, C...) e linhas (identificadas por números: 1, 2, 3...). O encontro de uma coluna com uma linha forma uma célula, identificada por um endereço como "A1" ou "C5".',
          },
        ],
        activity: {
          title: 'Explorando a tela do Excel',
          steps: [
            'Abra uma planilha em branco e clique na célula A1.',
            'Digite um número qualquer e observe onde ele aparece: na célula e na barra de fórmulas.',
            'Clique nas guias da faixa de opções (Página Inicial, Inserir, Fórmulas, Dados) só para ver quais comandos aparecem em cada uma.',
          ],
        },
        quiz: {
          question: 'Para que serve a barra de fórmulas no Excel?',
          options: [
            'Para mostrar apenas o nome do arquivo salvo',
            'Para exibir e permitir editar o conteúdo real da célula selecionada, incluindo fórmulas',
            'Para imprimir a planilha automaticamente',
            'Para trocar a cor de fundo de todas as células de uma vez',
          ],
          answer: 1,
          explanation:
            'A barra de fórmulas mostra o conteúdo exato digitado na célula selecionada — se for uma fórmula, é ali que ela aparece por completo, mesmo que a célula mostre apenas o resultado.',
        },
        reference: {
          label: 'Microsoft — Conhecer o Excel',
          href: 'https://support.microsoft.com/pt-br/office/o-que-%C3%A9-o-excel',
        },
      },
      {
        slug: 'criando-e-salvando-uma-planilha',
        video: { youtubeId: 'vRJ2nSR1d-I', title: 'Como Fazer Planilha no Excel (Passo a Passo Para Iniciantes)' },
        title: 'Criando, salvando e abrindo uma planilha',
        duration: '30 min',
        summary:
          'Saber criar uma pasta de trabalho nova, salvá-la com um nome que faça sentido e abri-la depois é a base para não perder nenhum arquivo — e evita a dor de cabeça de perder horas de trabalho por esquecer de salvar.',
        objectives: [
          'Criar uma nova pasta de trabalho em branco.',
          'Salvar um arquivo do Excel escolhendo local e nome adequados.',
        ],
        keyPoints: [
          {
            title: 'Pasta de trabalho x planilha',
            description:
              'Um arquivo do Excel é chamado de "pasta de trabalho" e pode conter várias "planilhas" (as abas na parte inferior da tela). É comum usar planilhas diferentes dentro do mesmo arquivo para separar assuntos, como meses do ano ou categorias.',
          },
          {
            title: 'Salvando pela primeira vez',
            description:
              'Use Ctrl+S ou o menu Arquivo > Salvar. Na primeira vez, o Excel pede o local (computador ou nuvem) e o nome do arquivo. Escolher um nome claro, como "Orçamento-2026", ajuda a encontrar o arquivo depois.',
          },
          {
            title: 'Formatos de arquivo (.xlsx, .csv, .pdf)',
            description:
              '.xlsx é o formato padrão do Excel, que mantém fórmulas e formatação. .csv guarda só os dados em texto simples (sem fórmulas nem formatação) e é usado para importar/exportar dados entre programas diferentes. .pdf serve para compartilhar um resultado final sem que a pessoa possa editar.',
          },
        ],
        activity: {
          title: 'Criando e salvando sua primeira planilha',
          steps: [
            'Abra uma pasta de trabalho em branco no Excel.',
            'Digite qualquer informação simples em algumas células (por exemplo, uma lista de 3 itens com preços).',
            'Salve o arquivo com Ctrl+S, escolhendo um nome que descreva o conteúdo, como "Minha primeira planilha".',
            'Feche o arquivo e abra-o novamente para confirmar que tudo foi salvo corretamente.',
          ],
        },
        quiz: {
          question: 'O que é uma "pasta de trabalho" no Excel?',
          options: [
            'O nome de uma única célula específica',
            'O arquivo do Excel, que pode conter uma ou várias planilhas (abas)',
            'Um tipo de gráfico usado para apresentações',
            'A senha usada para proteger o arquivo',
          ],
          answer: 1,
          explanation:
            'A pasta de trabalho é o arquivo do Excel como um todo. Dentro dela, você pode ter uma ou várias planilhas (abas), cada uma com seu próprio conjunto de células.',
        },
        reference: {
          label: 'Microsoft — Criar uma nova pasta de trabalho',
          href: 'https://support.microsoft.com/pt-br/office/criar-uma-nova-pasta-de-trabalho',
        },
      },
    ],
  },
  {
    slug: 'celulas-linhas-e-colunas',
    title: 'Células, Linhas e Colunas',
    description:
      'Aprenda a navegar, selecionar, formatar e organizar os dados dentro da grade do Excel.',
    lessons: [
      {
        slug: 'selecionando-e-navegando-entre-celulas',
        video: { youtubeId: '9UOqWNOOEfM', title: "Excel básico | Como selecionar células | Curso Gratuito 'Desvendando o Excel'" },
        title: 'Selecionando e navegando entre células',
        duration: '30 min',
        summary:
          'Selecionar rapidamente uma célula, um intervalo ou uma coluna inteira é a habilidade mais usada no Excel — e dominar isso com o teclado economiza bastante tempo no dia a dia.',
        objectives: [
          'Selecionar uma célula, uma linha, uma coluna e um intervalo de células.',
          'Usar teclas de atalho básicas para navegar pela planilha.',
        ],
        keyPoints: [
          {
            title: 'Selecionando com o mouse',
            description:
              'Clique em uma célula para selecioná-la. Clique e arraste para selecionar um intervalo. Clique na letra da coluna ou no número da linha para selecionar a coluna ou linha inteira.',
          },
          {
            title: 'Navegando com o teclado',
            description:
              'As setas do teclado movem a seleção célula por célula. Ctrl + seta pula direto até o fim de um bloco de dados preenchidos. Ctrl + Home leva até a célula A1, e Ctrl + End leva até a última célula usada da planilha.',
          },
          {
            title: 'Selecionando intervalos não seguidos',
            description:
              'Segurando Ctrl enquanto clica, é possível selecionar várias células ou intervalos que não estão um do lado do outro — útil para aplicar a mesma formatação em partes espalhadas da planilha.',
          },
        ],
        activity: {
          title: 'Praticando seleção e navegação',
          steps: [
            'Em uma planilha com alguns dados preenchidos, selecione uma linha inteira clicando no número dela.',
            'Selecione uma coluna inteira clicando na letra dela.',
            'Use Ctrl + Home para voltar até a célula A1 e Ctrl + End para ir até a última célula usada.',
          ],
        },
        quiz: {
          question: 'O que o atalho Ctrl + Home faz no Excel?',
          options: [
            'Fecha o arquivo sem salvar',
            'Leva o cursor até a célula A1 da planilha',
            'Seleciona toda a planilha',
            'Abre a caixa de impressão',
          ],
          answer: 1,
          explanation:
            'Ctrl + Home move a seleção diretamente para a célula A1, independentemente de onde você estava na planilha — muito útil em planilhas grandes.',
        },
        reference: {
          label: 'Microsoft — Atalhos de teclado no Excel',
          href: 'https://support.microsoft.com/pt-br/office/atalhos-de-teclado-no-excel',
        },
      },
      {
        slug: 'formatando-texto-e-numeros',
        video: { youtubeId: 'hsgFjVn_28I', title: 'Formatando células, números e textos - Aula 3' },
        title: 'Inserindo e formatando texto e números',
        duration: '35 min',
        summary:
          'O Excel trata texto e número de formas diferentes por baixo dos panos — e formatar corretamente (moeda, porcentagem, data) evita erros de cálculo e deixa a planilha mais fácil de entender.',
        objectives: [
          'Diferenciar como o Excel trata texto, números e datas.',
          'Aplicar formatos como moeda, porcentagem e data a uma célula.',
        ],
        keyPoints: [
          {
            title: 'Texto alinha à esquerda, número alinha à direita',
            description:
              'Por padrão, o Excel alinha texto à esquerda da célula e números à direita. Esse comportamento automático é uma forma rápida de perceber se um dado foi reconhecido como número ou como texto — o que afeta se ele pode ser somado ou não.',
          },
          {
            title: 'Formatos de número',
            description:
              'Na guia Página Inicial, o grupo "Número" permite escolher formatos como Moeda (R$), Porcentagem (%), Data e Número com casas decimais. O valor guardado na célula continua o mesmo — só a forma de exibição muda.',
          },
          {
            title: 'Erros comuns ao digitar números',
            description:
              'Digitar um número junto com texto (como "150 reais" em vez de só "150") faz o Excel tratar tudo como texto, impedindo cálculos. O ideal é digitar só o número na célula e aplicar o formato de moeda separadamente.',
          },
        ],
        activity: {
          title: 'Formatando uma pequena tabela',
          steps: [
            'Crie uma coluna com 3 produtos (texto) e uma coluna ao lado com preços (número).',
            'Selecione a coluna de preços e aplique o formato de moeda (R$).',
            'Adicione uma célula com um percentual de desconto e aplique o formato de porcentagem.',
          ],
        },
        quiz: {
          question: 'Por que digitar "150 reais" em uma célula pode causar problemas no Excel?',
          options: [
            'Porque o Excel não aceita a palavra "reais" em nenhuma célula',
            'Porque o Excel interpreta isso como texto, e não como número, impedindo cálculos automáticos',
            'Porque isso apaga automaticamente o conteúdo de outras células',
            'Porque a palavra "reais" trava o programa',
          ],
          answer: 1,
          explanation:
            'Ao misturar texto com número na mesma célula, o Excel entende o conteúdo inteiro como texto. O correto é digitar apenas "150" e aplicar o formato de moeda para exibir "R$ 150,00".',
        },
        reference: {
          label: 'Microsoft — Formatar números',
          href: 'https://support.microsoft.com/pt-br/office/formatar-n%C3%BAmeros',
        },
      },
      {
        slug: 'inserindo-linhas-e-colunas',
        video: { youtubeId: 'fA0v2yXWU44', title: 'Como Inserir e Excluir LINHAS e COLUNAS no EXCEL' },
        title: 'Inserindo, excluindo e ajustando linhas e colunas',
        duration: '30 min',
        summary:
          'Poucas planilhas ficam prontas na primeira tentativa: quase sempre é preciso inserir uma linha esquecida, remover uma coluna que não serve mais ou ajustar a largura para o conteúdo caber direito.',
        objectives: [
          'Inserir e excluir linhas e colunas em uma planilha existente.',
          'Ajustar a largura de colunas e a altura de linhas para melhorar a leitura.',
        ],
        keyPoints: [
          {
            title: 'Inserindo e excluindo',
            description:
              'Clique com o botão direito sobre o número da linha ou a letra da coluna e escolha "Inserir" ou "Excluir". As demais linhas/colunas se reorganizam automaticamente, e fórmulas que referenciam essas áreas geralmente se ajustam sozinhas.',
          },
          {
            title: 'Ajustando largura e altura',
            description:
              'Um clique duplo na borda entre duas colunas (ou linhas) ajusta automaticamente o tamanho ao conteúdo mais largo. Também é possível arrastar manualmente a borda para o tamanho desejado.',
          },
          {
            title: 'Cuidado ao excluir dados usados em fórmulas',
            description:
              'Excluir uma linha ou coluna que está sendo usada em uma fórmula pode gerar erros como #REF!. Antes de excluir, vale conferir se aquela área é referenciada em algum cálculo da planilha.',
          },
        ],
        activity: {
          title: 'Organizando uma planilha existente',
          steps: [
            'Em uma planilha com algumas linhas de dados, insira uma nova linha entre duas já existentes.',
            'Exclua uma coluna que não seja mais necessária.',
            'Ajuste a largura de pelo menos uma coluna para que o texto caiba completamente, sem cortar.',
          ],
        },
        quiz: {
          question: 'O que costuma acontecer se você excluir uma coluna usada dentro de uma fórmula?',
          options: [
            'Nada, o Excel ignora e o resultado continua o mesmo',
            'A fórmula pode passar a mostrar um erro, como #REF!',
            'O arquivo inteiro é apagado automaticamente',
            'O Excel impede qualquer exclusão de coluna',
          ],
          answer: 1,
          explanation:
            'Quando uma coluna ou célula referenciada em uma fórmula é excluída, o Excel não consegue mais localizar aquele dado e costuma exibir o erro #REF! no lugar do resultado.',
        },
        reference: {
          label: 'Microsoft — Inserir ou excluir linhas e colunas',
          href: 'https://support.microsoft.com/pt-br/office/inserir-ou-excluir-linhas-e-colunas',
        },
      },
    ],
  },
  {
    slug: 'formulas-e-calculos-basicos',
    title: 'Fórmulas e Cálculos Básicos',
    description:
      'Entenda como o Excel calcula, os operadores matemáticos e a diferença entre referências relativas e absolutas.',
    lessons: [
      {
        slug: 'como-funciona-uma-formula',
        video: { youtubeId: 'Hd7SOgy2Vv0', title: 'Aprenda Fórmulas e Funções Básicas do Excel' },
        title: 'Como funciona uma fórmula no Excel',
        duration: '35 min',
        summary:
          'Toda fórmula no Excel começa com o sinal de igual (=) e pode combinar números, operadores e referências a outras células. Entender essa lógica básica é o que permite criar cálculos automáticos em vez de somar tudo na calculadora.',
        objectives: [
          'Explicar por que toda fórmula começa com "=".',
          'Criar uma fórmula simples que referencia outras células.',
        ],
        keyPoints: [
          {
            title: 'O sinal de igual (=) avisa: "isto é uma fórmula"',
            description:
              'Quando você digita "=" no início de uma célula, o Excel entende que o conteúdo seguinte deve ser calculado, e não apenas exibido como texto. Sem o "=", "A1+A2" seria só texto, sem cálculo nenhum.',
          },
          {
            title: 'Referenciando células em vez de digitar números fixos',
            description:
              'Em vez de escrever "=10+20", o ideal é usar os endereços das células que contêm esses valores, como "=A1+A2". Assim, se o valor de A1 mudar, o resultado da fórmula se atualiza automaticamente.',
          },
          {
            title: 'O resultado aparece na célula, a fórmula fica na barra de fórmulas',
            description:
              'Depois de confirmar com Enter, a célula mostra o resultado calculado, mas a fórmula original continua visível (e editável) na barra de fórmulas sempre que você selecionar aquela célula.',
          },
        ],
        activity: {
          title: 'Criando sua primeira fórmula',
          steps: [
            'Digite o número 100 na célula A1 e o número 50 na célula A2.',
            'Na célula A3, digite a fórmula =A1+A2 e confirme com Enter.',
            'Altere o valor de A1 para 200 e observe o resultado de A3 mudar automaticamente.',
          ],
        },
        quiz: {
          question: 'Por que é melhor usar "=A1+A2" do que digitar "=10+20" diretamente em uma fórmula?',
          options: [
            'Não há diferença nenhuma entre as duas formas',
            'Porque usando as referências de célula, o resultado se atualiza automaticamente se os valores de A1 ou A2 mudarem',
            'Porque números fixos deixam o arquivo maior',
            'Porque o Excel não permite digitar números diretamente em fórmulas',
          ],
          answer: 1,
          explanation:
            'Ao referenciar células (A1, A2) em vez de digitar valores fixos, a fórmula recalcula automaticamente sempre que o conteúdo dessas células mudar — essa é a maior vantagem de uma planilha em relação a uma conta feita à mão.',
        },
        reference: {
          label: 'Microsoft — Visão geral de fórmulas no Excel',
          href: 'https://support.microsoft.com/pt-br/office/vis%C3%A3o-geral-de-f%C3%B3rmulas-no-excel',
        },
      },
      {
        slug: 'operadores-matematicos',
        video: { youtubeId: 'hJQ_P_xA7GM', title: 'EXCEL: Operações matemáticas com fórmulas (soma, subtração, multiplicação, divisão)' },
        title: 'Operadores matemáticos e ordem de cálculo',
        duration: '30 min',
        summary:
          'O Excel usa os operadores +, -, *, / e ^ para somar, subtrair, multiplicar, dividir e elevar a uma potência. Assim como na matemática da escola, existe uma ordem de prioridade entre eles, que muda o resultado se não for respeitada.',
        objectives: [
          'Usar os operadores +, -, *, / e ^ em fórmulas.',
          'Aplicar corretamente parênteses para controlar a ordem dos cálculos.',
        ],
        keyPoints: [
          {
            title: 'Os operadores básicos',
            description:
              'Soma (+), subtração (-), multiplicação (*), divisão (/) e potência (^). Por exemplo, "=A1*A2" multiplica o conteúdo de A1 pelo de A2, e "=A1^2" eleva o valor de A1 ao quadrado.',
          },
          {
            title: 'Ordem de prioridade dos cálculos',
            description:
              'O Excel segue a mesma ordem da matemática: potência primeiro, depois multiplicação/divisão, e por último soma/subtração. Em "=2+3*4", o resultado é 14 (multiplica 3x4 primeiro), e não 20.',
          },
          {
            title: 'Usando parênteses para mudar a ordem',
            description:
              'Se você quiser que a soma aconteça antes da multiplicação, use parênteses: "=(2+3)*4" resulta em 20. Os parênteses sempre são calculados primeiro, independentemente do operador que está dentro deles.',
          },
        ],
        activity: {
          title: 'Testando a ordem de cálculo',
          steps: [
            'Em uma célula, digite a fórmula =2+3*4 e observe o resultado.',
            'Em outra célula, digite =(2+3)*4 e compare o resultado com o anterior.',
            'Crie uma fórmula própria usando pelo menos dois operadores diferentes e parênteses.',
          ],
        },
        quiz: {
          question: 'Qual é o resultado da fórmula =2+3*4 no Excel?',
          options: ['20', '14', '24', '9'],
          answer: 1,
          explanation:
            'O Excel calcula a multiplicação antes da soma: 3*4 = 12, e depois 2+12 = 14. Para obter 20, seria necessário usar parênteses: =(2+3)*4.',
        },
        reference: {
          label: 'Microsoft — Operadores de cálculo no Excel',
          href: 'https://support.microsoft.com/pt-br/office/operadores-de-c%C3%A1lculo-e-precedência-no-excel',
        },
      },
      {
        slug: 'referencia-relativa-e-absoluta',
        video: { youtubeId: '4eCU3bfXZuE', title: 'FIXAR ENDEREÇOS NO EXCEL: REFERÊNCIA RELATIVA E ABSOLUTA' },
        title: 'Referências relativas e absolutas ($)',
        duration: '40 min',
        summary:
          'Quando você copia uma fórmula para outras células, o Excel normalmente ajusta as referências automaticamente. Às vezes você precisa "travar" uma célula específica com o símbolo $ para que ela não mude — essa é a diferença entre referência relativa e absoluta.',
        objectives: [
          'Explicar a diferença entre referência relativa e absoluta.',
          'Usar o símbolo $ para travar uma linha, coluna ou célula inteira em uma fórmula.',
        ],
        keyPoints: [
          {
            title: 'Referência relativa (padrão)',
            description:
              'Ao copiar uma fórmula como "=A1*B1" para a linha de baixo, o Excel ajusta automaticamente para "=A2*B2". Essa é a referência relativa: ela muda conforme a fórmula é copiada, e é o comportamento padrão.',
          },
          {
            title: 'Referência absoluta ($A$1)',
            description:
              'Colocar o símbolo $ antes da letra e do número (como $A$1) trava aquela célula completamente. Ao copiar a fórmula para outras linhas ou colunas, essa referência específica nunca muda — útil quando você quer sempre multiplicar por um valor fixo, como uma taxa de imposto guardada em uma única célula.',
          },
          {
            title: 'Referência mista (A$1 ou $A1)',
            description:
              'É possível travar só a linha ($A1 trava só a coluna, A$1 trava só a linha), o que é útil em tabelas onde uma fórmula precisa repetir tanto na horizontal quanto na vertical, travando apenas uma direção.',
          },
        ],
        activity: {
          title: 'Praticando referência absoluta',
          steps: [
            'Digite um valor fixo (por exemplo, uma taxa de 10%) na célula B1.',
            'Em uma coluna com vários preços, crie uma fórmula que multiplique cada preço por essa taxa usando $B$1.',
            'Copie a fórmula para as linhas seguintes e confirme que todas continuam usando B1 como referência.',
          ],
        },
        quiz: {
          question: 'O que acontece quando você usa $A$1 em uma fórmula e depois copia essa fórmula para outra célula?',
          options: [
            'A referência a A1 muda automaticamente conforme o destino da cópia',
            'A referência permanece travada em A1, não importa para onde a fórmula seja copiada',
            'O Excel exclui a célula A1 automaticamente',
            'A fórmula para de funcionar e mostra um erro',
          ],
          answer: 1,
          explanation:
            'O símbolo $ antes da letra e do número cria uma referência absoluta: ao copiar a fórmula para qualquer outra célula, a referência a $A$1 permanece fixa, sem se ajustar.',
        },
        reference: {
          label: 'Microsoft — Alternar entre referências relativas e absolutas',
          href: 'https://support.microsoft.com/pt-br/office/alternar-entre-refer%C3%AAncias-relativas-e-absolutas',
        },
      },
    ],
  },
  {
    slug: 'funcoes-essenciais',
    title: 'Funções Essenciais',
    description:
      'Vá além das quatro operações básicas com as funções que resolvem o dia a dia de quem trabalha com planilhas.',
    lessons: [
      {
        slug: 'soma-media-maximo-minimo',
        video: { youtubeId: 'KEKrLEjYglA', title: 'Excel - Funções: soma, média, máximo e mínimo' },
        title: 'SOMA, MÉDIA, MÁXIMO e MÍNIMO',
        duration: '35 min',
        summary:
          'Essas quatro funções resolvem boa parte das necessidades do dia a dia: somar um intervalo de valores, calcular a média, encontrar o maior e o menor valor de uma lista — tudo sem precisar montar fórmulas manuais célula por célula.',
        objectives: [
          'Usar a função SOMA para somar um intervalo de células.',
          'Usar MÉDIA, MÁXIMO e MÍNIMO para analisar um conjunto de dados.',
        ],
        keyPoints: [
          {
            title: 'SOMA: somando um intervalo',
            description:
              'Em vez de somar célula por célula (=A1+A2+A3...), a função =SOMA(A1:A10) soma todos os valores desse intervalo de uma vez. O símbolo ":" indica "até", ou seja, de A1 até A10.',
          },
          {
            title: 'MÉDIA: calculando a média automaticamente',
            description:
              '=MÉDIA(A1:A10) soma todos os valores do intervalo e divide pela quantidade de células preenchidas, poupando o trabalho de fazer essa conta manualmente.',
          },
          {
            title: 'MÁXIMO e MÍNIMO: encontrando extremos',
            description:
              '=MÁXIMO(A1:A10) retorna o maior valor do intervalo, e =MÍNIMO(A1:A10) retorna o menor. Muito usado para identificar, por exemplo, o produto mais caro ou o mês com menor venda em uma lista.',
          },
        ],
        activity: {
          title: 'Analisando uma lista de valores',
          steps: [
            'Digite 8 números diferentes em uma coluna (por exemplo, gastos de 8 dias diferentes).',
            'Em células separadas, use SOMA, MÉDIA, MÁXIMO e MÍNIMO sobre esse intervalo.',
            'Confira se os resultados fazem sentido em relação aos números que você digitou.',
          ],
        },
        quiz: {
          question: 'Qual fórmula soma corretamente todos os valores de A1 até A10?',
          options: ['=SOMA(A1;A10)', '=SOMA(A1:A10)', '=A1+A10', '=MÉDIA(A1:A10)'],
          answer: 1,
          explanation:
            'A função SOMA usa ":" para indicar um intervalo contínuo de células. =SOMA(A1:A10) soma todos os valores de A1 até A10, incluindo os dois extremos.',
        },
        reference: {
          label: 'Microsoft — Função SOMA',
          href: 'https://support.microsoft.com/pt-br/office/fun%C3%A7%C3%A3o-soma',
        },
      },
      {
        slug: 'contse-e-somase',
        video: { youtubeId: '_1pFAzLI-Vo', title: 'Aprenda a Utilizar as Funções SOMASE e CONT.SE do Excel' },
        title: 'CONT.SE e SOMASE',
        duration: '40 min',
        summary:
          'Essas funções fazem cálculos condicionais: contam quantas células atendem a um critério (CONT.SE) ou somam apenas os valores que atendem a uma condição (SOMASE) — essenciais para relatórios e análises mais específicas.',
        objectives: [
          'Usar CONT.SE para contar células que atendem a um critério.',
          'Usar SOMASE para somar valores que atendem a uma condição específica.',
        ],
        keyPoints: [
          {
            title: 'CONT.SE: contando com critério',
            description:
              '=CONT.SE(A1:A10;"Aprovado") conta quantas células do intervalo contêm exatamente o texto "Aprovado". É útil para contar quantos itens de uma lista atendem a uma condição, sem precisar contar manualmente.',
          },
          {
            title: 'SOMASE: somando com critério',
            description:
              '=SOMASE(B1:B10;"Notebook";C1:C10) soma os valores da coluna C apenas nas linhas em que a coluna B contém "Notebook". Ela tem três partes: onde procurar, o que procurar, e o que somar.',
          },
          {
            title: 'Critérios com números e comparações',
            description:
              'O critério não precisa ser só texto: =CONT.SE(A1:A10;">100") conta quantas células têm valor maior que 100. Os mesmos operadores de comparação (>, <, >=, <=, <>) funcionam dentro dessas funções.',
          },
        ],
        activity: {
          title: 'Aplicando CONT.SE e SOMASE',
          steps: [
            'Monte uma lista com nome de produto (coluna A) e valor de venda (coluna B), com pelo menos 8 linhas repetindo alguns produtos.',
            'Use CONT.SE para contar quantas vezes um produto específico aparece na lista.',
            'Use SOMASE para somar o total vendido apenas daquele produto específico.',
          ],
        },
        quiz: {
          question: 'O que a função =SOMASE(B1:B10;"Caneta";C1:C10) faz?',
          options: [
            'Conta quantas vezes a palavra "Caneta" aparece na coluna B',
            'Soma todos os valores da coluna C, sem nenhum filtro',
            'Soma os valores da coluna C apenas nas linhas em que a coluna B contém "Caneta"',
            'Substitui a palavra "Caneta" pelo valor da coluna C',
          ],
          answer: 2,
          explanation:
            'SOMASE tem três argumentos: o intervalo onde procurar o critério (B1:B10), o critério em si ("Caneta") e o intervalo a ser somado (C1:C10) — mas apenas nas linhas em que o critério é atendido.',
        },
        reference: {
          label: 'Microsoft — Função SOMASE',
          href: 'https://support.microsoft.com/pt-br/office/fun%C3%A7%C3%A3o-somase',
        },
      },
      {
        slug: 'funcao-se',
        video: { youtubeId: '4XAJ1BYEr7E', title: 'Curso de Excel 2016 Básico - Função SE - Condicional Simples' },
        title: 'A função SE (lógica condicional)',
        duration: '40 min',
        summary:
          'A função SE permite que o Excel tome uma decisão automática: "se isso for verdade, mostre um resultado; senão, mostre outro". É a base da lógica condicional em planilhas e abre portas para automações mais avançadas.',
        objectives: [
          'Entender a estrutura da função SE: condição, valor se verdadeiro, valor se falso.',
          'Criar uma fórmula com SE para classificar dados automaticamente.',
        ],
        keyPoints: [
          {
            title: 'A estrutura da função SE',
            description:
              '=SE(condição; valor_se_verdadeiro; valor_se_falso). Por exemplo: =SE(A1>=7;"Aprovado";"Reprovado") verifica se o valor de A1 é maior ou igual a 7; se for, mostra "Aprovado"; senão, mostra "Reprovado".',
          },
          {
            title: 'Comparações usadas na condição',
            description:
              'A condição normalmente usa operadores de comparação: igual (=), diferente (<>), maior (>), menor (<), maior ou igual (>=) e menor ou igual (<=). A condição sempre resulta em verdadeiro ou falso.',
          },
          {
            title: 'Aninhando várias condições SE',
            description:
              'Para mais de duas possibilidades, é possível colocar um SE dentro de outro: =SE(A1>=9;"Ótimo";SE(A1>=7;"Bom";"Precisa melhorar")). Isso cria três categorias em vez de apenas duas.',
          },
        ],
        activity: {
          title: 'Classificando notas com a função SE',
          steps: [
            'Crie uma coluna com 6 notas diferentes (de 0 a 10).',
            'Ao lado de cada nota, use a função SE para mostrar "Aprovado" (nota >= 7) ou "Reprovado" (nota < 7).',
            'Desafio: adicione uma terceira categoria, como "Aprovado com louvor" para notas acima de 9, usando SE aninhado.',
          ],
        },
        quiz: {
          question: 'Na fórmula =SE(A1>=7;"Aprovado";"Reprovado"), o que aparece se A1 for igual a 5?',
          options: ['"Aprovado"', '"Reprovado"', 'Um erro de fórmula', 'O número 5, sem alteração'],
          answer: 1,
          explanation:
            'Como 5 não é maior nem igual a 7, a condição é falsa, e a função SE retorna o terceiro argumento: "Reprovado".',
        },
        reference: {
          label: 'Microsoft — Função SE',
          href: 'https://support.microsoft.com/pt-br/office/fun%C3%A7%C3%A3o-se',
        },
      },
    ],
  },
  {
    slug: 'formatacao-e-organizacao',
    title: 'Formatação e Organização',
    description:
      'Deixe suas planilhas mais claras e fáceis de navegar com formatação condicional, filtros e painéis congelados.',
    lessons: [
      {
        slug: 'formatacao-condicional',
        video: { youtubeId: 'SGBDjOO2ckA', title: 'Tudo sobre Formatação Condicional no Excel' },
        title: 'Formatação condicional',
        duration: '40 min',
        summary:
          'A formatação condicional muda a aparência de uma célula automaticamente com base no seu valor — como destacar em vermelho gastos acima do orçamento, sem precisar formatar célula por célula manualmente.',
        objectives: [
          'Aplicar uma regra de formatação condicional a um intervalo de células.',
          'Entender quando usar regras prontas e quando criar uma regra personalizada com fórmula.',
        ],
        keyPoints: [
          {
            title: 'Regras prontas',
            description:
              'Na guia Página Inicial > Formatação Condicional, existem regras prontas como "Realçar Células Maiores Que", "Barra de Dados" e "Escalas de Cor", que aplicam formatação automaticamente com base no valor de cada célula.',
          },
          {
            title: 'Formatação condicional com fórmula',
            description:
              'Para regras mais específicas, é possível criar uma regra baseada em fórmula (por exemplo, destacar uma linha inteira se o valor de uma coluna específica ultrapassar um limite), o que dá muito mais flexibilidade do que as regras prontas.',
          },
          {
            title: 'A formatação se atualiza automaticamente',
            description:
              'Assim como fórmulas, a formatação condicional recalcula sozinha: se o valor de uma célula mudar e passar a atender (ou deixar de atender) a regra, a formatação muda junto, sem precisar refazer nada manualmente.',
          },
        ],
        activity: {
          title: 'Destacando valores importantes',
          steps: [
            'Crie uma lista de 10 valores de gastos.',
            'Aplique uma formatação condicional que destaque em vermelho os valores acima de um limite que você escolher.',
            'Altere um dos valores para ver a formatação mudar automaticamente.',
          ],
        },
        quiz: {
          question: 'Qual é a principal vantagem da formatação condicional em relação à formatação manual?',
          options: [
            'Ela é mais bonita, mas funciona exatamente igual à manual',
            'Ela atualiza automaticamente sempre que o valor da célula muda, sem precisar reformatar manualmente',
            'Ela só funciona em números, nunca em texto',
            'Ela impede que a célula seja editada no futuro',
          ],
          answer: 1,
          explanation:
            'A grande vantagem da formatação condicional é que ela reage a mudanças nos dados automaticamente: se o valor deixar de atender à regra (ou passar a atender), a aparência da célula se ajusta sozinha.',
        },
        reference: {
          label: 'Microsoft — Formatação condicional',
          href: 'https://support.microsoft.com/pt-br/office/usar-a-formata%C3%A7%C3%A3o-condicional',
        },
      },
      {
        slug: 'classificar-e-filtrar-dados',
        video: { youtubeId: '4VuvWExl-xE', title: 'Filtros: Como Filtrar e Classificar Dados em uma Planilha no Excel' },
        title: 'Classificar e filtrar dados',
        duration: '35 min',
        summary:
          'Em listas grandes, classificar (ordenar) e filtrar dados ajuda a encontrar o que interessa rapidamente — do produto mais caro ao mais barato, ou apenas os itens de uma categoria específica.',
        objectives: [
          'Classificar uma tabela em ordem crescente ou decrescente.',
          'Aplicar filtros para exibir apenas os dados que atendem a um critério.',
        ],
        keyPoints: [
          {
            title: 'Classificando (ordenando) dados',
            description:
              'Com o cursor dentro da tabela, use Dados > Classificar para ordenar por uma ou mais colunas, em ordem crescente ou decrescente. É importante que cada coluna tenha um cabeçalho claro antes de classificar.',
          },
          {
            title: 'Ativando filtros',
            description:
              'Dados > Filtro adiciona pequenas setas no cabeçalho de cada coluna. Clicando nelas, é possível marcar apenas os valores que você quer ver, escondendo temporariamente o restante (sem apagar nada).',
          },
          {
            title: 'Filtrando por texto, número ou data',
            description:
              'O menu de filtro se adapta ao tipo de dado da coluna: em colunas de texto aparecem opções como "Filtros de Texto"; em números, "Filtros de Número" (maior que, entre, etc.); em datas, filtros por período.',
          },
        ],
        activity: {
          title: 'Organizando uma lista de produtos',
          steps: [
            'Monte uma tabela com produto, categoria e preço (pelo menos 10 linhas).',
            'Classifique a tabela em ordem crescente de preço.',
            'Ative os filtros e exiba apenas os produtos de uma categoria específica.',
          ],
        },
        quiz: {
          question: 'O que acontece com os dados escondidos ao aplicar um filtro no Excel?',
          options: [
            'Eles são apagados definitivamente da planilha',
            'Eles apenas ficam ocultos temporariamente, mas continuam existindo na planilha',
            'Eles são movidos automaticamente para outra aba',
            'Eles são convertidos em comentários',
          ],
          answer: 1,
          explanation:
            'O filtro apenas oculta visualmente as linhas que não atendem ao critério escolhido. Os dados continuam intactos e podem ser exibidos novamente a qualquer momento, bastando remover ou ajustar o filtro.',
        },
        reference: {
          label: 'Microsoft — Filtrar dados em um intervalo',
          href: 'https://support.microsoft.com/pt-br/office/filtrar-dados-em-um-intervalo-ou-em-uma-tabela',
        },
      },
      {
        slug: 'congelar-paineis',
        video: { youtubeId: 'nfJ0artDLD4', title: 'Como Travar Linhas e Colunas no Excel - Congelar Painéis' },
        title: 'Congelar painéis e organizar planilhas grandes',
        duration: '25 min',
        summary:
          'Em planilhas com muitas linhas, rolar a tela faz o cabeçalho sumir e dificulta saber o que cada coluna representa. Congelar painéis mantém a linha de cabeçalho (ou uma coluna) sempre visível.',
        objectives: [
          'Congelar a primeira linha ou a primeira coluna de uma planilha.',
          'Reconhecer quando vale a pena congelar painéis em uma planilha grande.',
        ],
        keyPoints: [
          {
            title: 'Congelando a primeira linha',
            description:
              'Em Exibição > Congelar Painéis > Congelar Primeira Linha, o cabeçalho permanece visível mesmo quando você rola a planilha para baixo, o que evita perder a referência de qual coluna é qual.',
          },
          {
            title: 'Congelando a primeira coluna',
            description:
              'Da mesma forma, é possível manter a primeira coluna sempre visível ao rolar a planilha para os lados — útil quando a primeira coluna tem um identificador importante, como nome ou código.',
          },
          {
            title: 'Congelando linhas e colunas ao mesmo tempo',
            description:
              'Selecionando uma célula específica antes de usar "Congelar Painéis", o Excel trava tudo que está acima e à esquerda dela, permitindo fixar cabeçalho e primeira coluna simultaneamente.',
          },
        ],
        activity: {
          title: 'Organizando uma planilha longa',
          steps: [
            'Crie uma tabela com cabeçalho na linha 1 e pelo menos 20 linhas de dados.',
            'Congele a primeira linha e role a planilha para baixo para confirmar que o cabeçalho continua visível.',
            'Desfaça e tente congelar a primeira coluna em vez da linha, comparando o efeito.',
          ],
        },
        quiz: {
          question: 'Qual é a principal utilidade de congelar painéis no Excel?',
          options: [
            'Impedir que qualquer célula da planilha seja editada',
            'Manter linhas ou colunas específicas (como o cabeçalho) sempre visíveis ao rolar a planilha',
            'Aumentar automaticamente a velocidade de cálculo da planilha',
            'Proteger a planilha com senha',
          ],
          answer: 1,
          explanation:
            'Congelar painéis mantém determinadas linhas ou colunas fixas na tela enquanto o restante da planilha rola, o que é essencial para não perder a referência do cabeçalho em tabelas grandes.',
        },
        reference: {
          label: 'Microsoft — Congelar painéis para bloquear linhas e colunas',
          href: 'https://support.microsoft.com/pt-br/office/congelar-painéis-para-bloquear-linhas-e-colunas',
        },
      },
    ],
  },
  {
    slug: 'funcoes-de-busca',
    title: 'Funções de Busca',
    description:
      'Aprenda a buscar informações automaticamente entre tabelas diferentes com PROCV e PROCX.',
    lessons: [
      {
        slug: 'procv',
        video: { youtubeId: 'oJdhMmVRY5Y', title: 'Função PROCV no Excel para Busca em Tabelas' },
        title: 'PROCV: buscando dados em outra tabela',
        duration: '45 min',
        summary:
          'PROCV é uma das funções mais usadas no mercado de trabalho: ela busca um valor em uma tabela e retorna uma informação relacionada de outra coluna — como buscar o preço de um produto a partir do seu código.',
        objectives: [
          'Explicar os quatro argumentos da função PROCV.',
          'Usar PROCV para buscar uma informação em outra tabela da mesma planilha.',
        ],
        keyPoints: [
          {
            title: 'A estrutura do PROCV',
            description:
              '=PROCV(valor_procurado; matriz_tabela; núm_índice_coluna; [procurar_intervalo]). Ele busca o "valor_procurado" na primeira coluna da tabela indicada e retorna o valor da coluna informada em "núm_índice_coluna".',
          },
          {
            title: 'Correspondência exata (FALSO) x aproximada (VERDADEIRO)',
            description:
              'O último argumento define o tipo de busca: FALSO (ou 0) busca uma correspondência exata — o mais comum no dia a dia. VERDADEIRO busca o valor mais próximo, usado em casos específicos como faixas de desconto.',
          },
          {
            title: 'Limitação: o PROCV só busca à direita',
            description:
              'O PROCV só consegue buscar em colunas à direita da coluna de busca — se a informação que você precisa estiver à esquerda, é preciso reorganizar a tabela ou usar PROCX (assunto da próxima aula).',
          },
        ],
        activity: {
          title: 'Buscando preços com PROCV',
          steps: [
            'Monte uma tabela com código do produto (coluna A) e preço (coluna B), com pelo menos 6 produtos.',
            'Em outra área da planilha, use PROCV para buscar o preço de um código específico digitado em outra célula.',
            'Teste digitar códigos diferentes e veja o preço ser encontrado automaticamente.',
          ],
        },
        quiz: {
          question: 'Para que serve o último argumento (FALSO ou VERDADEIRO) da função PROCV?',
          options: [
            'Define se a fórmula deve ser copiada para outras células',
            'Define se a busca deve ser exata (FALSO) ou aproximada (VERDADEIRO)',
            'Define a cor da célula onde o resultado aparece',
            'Não tem nenhuma função, pode ser sempre ignorado',
          ],
          answer: 1,
          explanation:
            'O quarto argumento controla o tipo de correspondência: FALSO (0) exige uma correspondência exata do valor procurado, enquanto VERDADEIRO (1) permite uma correspondência aproximada.',
        },
        reference: {
          label: 'Microsoft — Função PROCV',
          href: 'https://support.microsoft.com/pt-br/office/fun%C3%A7%C3%A3o-procv',
        },
      },
      {
        slug: 'procx',
        video: { youtubeId: 'Xi38CePcmxA', title: 'Função PROCX no Excel: Um Guia Completo' },
        title: 'PROCX: a evolução do PROCV',
        duration: '40 min',
        summary:
          'PROCX é uma função mais recente e mais flexível que o PROCV: ela busca em qualquer direção (não só à direita) e é considerada, hoje, a forma mais moderna de fazer buscas entre tabelas no Excel.',
        objectives: [
          'Explicar as vantagens do PROCX em relação ao PROCV.',
          'Usar PROCX para buscar uma informação, inclusive à esquerda da coluna de busca.',
        ],
        keyPoints: [
          {
            title: 'A estrutura do PROCX',
            description:
              '=PROCX(valor_procurado; matriz_procurada; matriz_retornada; [se_não_encontrado]). Diferente do PROCV, você indica diretamente qual coluna procurar e qual coluna retornar, sem depender de contar posições.',
          },
          {
            title: 'PROCX busca em qualquer direção',
            description:
              'Ao contrário do PROCV, que só busca à direita, o PROCX consegue retornar valores de colunas à esquerda da coluna de busca — o que resolve um dos maiores incômodos de quem usa PROCV no dia a dia.',
          },
          {
            title: 'Tratando valores não encontrados',
            description:
              'O argumento opcional "[se_não_encontrado]" permite definir uma mensagem personalizada (como "Não encontrado") quando o valor buscado não existe na tabela, em vez de mostrar o erro padrão #N/D.',
          },
        ],
        activity: {
          title: 'Refazendo a busca de preços com PROCX',
          steps: [
            'Usando a mesma tabela de produtos e preços da aula anterior, refaça a busca agora usando PROCX.',
            'Adicione o argumento "se_não_encontrado" com o texto "Produto não cadastrado".',
            'Teste buscar um código que não existe na tabela para ver essa mensagem aparecer.',
          ],
        },
        quiz: {
          question: 'Qual é uma vantagem do PROCX em relação ao PROCV?',
          options: [
            'PROCX só funciona em planilhas muito pequenas',
            'PROCX consegue buscar valores em colunas à esquerda da coluna de busca, o que o PROCV não faz',
            'PROCX não permite personalizar mensagem de erro',
            'PROCX é mais lento e usado apenas em versões antigas do Excel',
          ],
          answer: 1,
          explanation:
            'Diferente do PROCV, que só retorna valores de colunas à direita da coluna de busca, o PROCX pode buscar em qualquer direção, o que o torna mais flexível para organizar tabelas.',
        },
        reference: {
          label: 'Microsoft — Função PROCX',
          href: 'https://support.microsoft.com/pt-br/office/fun%C3%A7%C3%A3o-procx',
        },
      },
      {
        slug: 'combinando-procv-com-se',
        video: { youtubeId: 'mH6Eg0Nc4n0', title: 'Função PROCV com SE no Excel - Exemplos práticos' },
        title: 'Combinando funções de busca com SE',
        duration: '40 min',
        summary:
          'Combinar PROCV (ou PROCX) com a função SE permite criar planilhas mais inteligentes: buscar uma informação e, com base nela, decidir automaticamente o que fazer — como aplicar um desconto diferente conforme a categoria do cliente.',
        objectives: [
          'Combinar uma função de busca com a função SE em uma única fórmula.',
          'Reconhecer situações do dia a dia em que essa combinação é útil.',
        ],
        keyPoints: [
          {
            title: 'Por que combinar funções',
            description:
              'Sozinha, uma função de busca só traz um dado. Combinada com SE, é possível usar esse dado para tomar uma decisão automática — por exemplo, buscar o estoque de um produto e mostrar "Repor estoque" se o valor for baixo.',
          },
          {
            title: 'Como estruturar a combinação',
            description:
              'A função de busca fica dentro da condição do SE: =SE(PROCV(A1;tabela;2;FALSO)<10;"Estoque baixo";"Estoque ok"). O Excel primeiro calcula o PROCV, depois usa esse resultado para decidir a condição do SE.',
          },
          {
            title: 'Cuidado com erros de busca dentro do SE',
            description:
              'Se o valor procurado não existir na tabela, o PROCV retorna erro (#N/D), o que pode quebrar a fórmula inteira. Nesses casos, vale combinar também com a função SEERRO para tratar esse problema.',
          },
        ],
        activity: {
          title: 'Criando um alerta automático de estoque',
          steps: [
            'Monte uma tabela com produto e quantidade em estoque.',
            'Em outra célula, use PROCV para buscar o estoque de um produto específico.',
            'Combine com SE para mostrar "Repor estoque" quando a quantidade for menor que um valor definido por você.',
          ],
        },
        quiz: {
          question: 'Por que combinar uma função de busca (PROCV/PROCX) com a função SE é útil?',
          options: [
            'Porque isso deixa a planilha mais lenta, mas sem nenhum benefício',
            'Porque permite tomar uma decisão automática com base em um valor buscado em outra tabela',
            'Porque é a única forma de usar a função SE no Excel',
            'Porque impede que a fórmula seja copiada para outras células',
          ],
          answer: 1,
          explanation:
            'A combinação permite que a planilha não apenas busque um dado, mas também tome uma decisão automática com base nele, como classificar, alertar ou calcular algo condicionalmente.',
        },
        reference: {
          label: 'Microsoft — Função SEERRO',
          href: 'https://support.microsoft.com/pt-br/office/fun%C3%A7%C3%A3o-seerro',
        },
      },
    ],
  },
  {
    slug: 'graficos',
    title: 'Gráficos',
    description:
      'Transforme números em visualizações claras, escolhendo o tipo de gráfico certo para cada situação.',
    lessons: [
      {
        slug: 'criando-seu-primeiro-grafico',
        video: { youtubeId: 'EwgdD2BZzsw', title: 'Como Criar Gráfico no Excel – Passo a Passo para Iniciantes' },
        title: 'Criando seu primeiro gráfico',
        duration: '30 min',
        summary:
          'Um gráfico bem feito comunica uma informação muito mais rápido do que uma tabela cheia de números. O primeiro passo é aprender o caminho básico: selecionar os dados e inserir um gráfico.',
        objectives: [
          'Selecionar os dados corretos antes de criar um gráfico.',
          'Inserir um gráfico simples a partir de uma tabela.',
        ],
        keyPoints: [
          {
            title: 'Selecionando os dados certos',
            description:
              'Antes de inserir um gráfico, selecione a tabela incluindo os cabeçalhos (nomes das colunas) — isso ajuda o Excel a identificar automaticamente as legendas e os rótulos dos eixos.',
          },
          {
            title: 'Inserindo o gráfico',
            description:
              'Com os dados selecionados, vá até a guia Inserir e escolha um tipo de gráfico (Coluna, Linha, Pizza, etc.). O Excel gera automaticamente uma primeira versão, que pode ser ajustada depois.',
          },
          {
            title: 'O gráfico fica ligado aos dados',
            description:
              'Assim como fórmulas, um gráfico se atualiza automaticamente quando os dados de origem mudam — não é preciso recriar o gráfico toda vez que um valor da tabela é atualizado.',
          },
        ],
        activity: {
          title: 'Criando um gráfico simples',
          steps: [
            'Monte uma pequena tabela com 5 meses e o total de vendas de cada um.',
            'Selecione a tabela (incluindo os cabeçalhos) e insira um gráfico de colunas.',
            'Altere um dos valores da tabela e observe o gráfico se atualizar automaticamente.',
          ],
        },
        quiz: {
          question: 'Por que é importante incluir os cabeçalhos ao selecionar dados para criar um gráfico?',
          options: [
            'Porque o Excel não consegue criar gráficos sem cabeçalho',
            'Porque isso ajuda o Excel a identificar automaticamente legendas e rótulos do gráfico',
            'Porque os cabeçalhos aumentam o tamanho do gráfico',
            'Porque sem cabeçalho o gráfico fica sempre na cor preta',
          ],
          answer: 1,
          explanation:
            'Os cabeçalhos das colunas ajudam o Excel a nomear automaticamente as séries de dados e os rótulos, economizando o trabalho de configurar isso manualmente depois.',
        },
        reference: {
          label: 'Microsoft — Criar um gráfico',
          href: 'https://support.microsoft.com/pt-br/office/criar-um-gr%C3%A1fico',
        },
      },
      {
        slug: 'escolhendo-o-tipo-de-grafico',
        video: { youtubeId: 't6VfO4KpTik', title: 'COMO SABER QUAL MELHOR GRÁFICO PARA CADA ANÁLISE NO EXCEL' },
        title: 'Escolhendo o tipo certo de gráfico',
        duration: '35 min',
        summary:
          'Nem todo gráfico serve para todo tipo de dado. Escolher o tipo errado pode até confundir quem está lendo — entender quando usar cada um é tão importante quanto saber criar o gráfico.',
        objectives: [
          'Identificar quando usar gráfico de colunas, linhas e pizza.',
          'Evitar os erros mais comuns na escolha do tipo de gráfico.',
        ],
        keyPoints: [
          {
            title: 'Gráfico de colunas ou barras: comparação',
            description:
              'Ideal para comparar valores entre categorias diferentes, como vendas por região ou por produto. É o tipo de gráfico mais versátil e fácil de entender para a maioria das análises.',
          },
          {
            title: 'Gráfico de linhas: evolução ao longo do tempo',
            description:
              'Perfeito para mostrar tendências e mudanças ao longo do tempo, como vendas mês a mês ou variação de temperatura ao longo do ano. Conecta os pontos, facilitando ver se algo está subindo ou caindo.',
          },
          {
            title: 'Gráfico de pizza: proporção de um total',
            description:
              'Serve para mostrar como um total se divide em partes, como o percentual de cada categoria de gasto em um orçamento. Funciona bem com poucas categorias (até 5-6); com muitas fatias, fica difícil de ler.',
          },
        ],
        activity: {
          title: 'Escolhendo o gráfico certo',
          steps: [
            'Para os dados de vendas por mês (evolução no tempo), crie um gráfico de linhas.',
            'Para os mesmos dados, crie também um gráfico de colunas e compare qual comunica melhor a tendência.',
            'Crie uma tabela simples com categorias de gasto e monte um gráfico de pizza mostrando a proporção de cada uma.',
          ],
        },
        quiz: {
          question: 'Qual tipo de gráfico é mais indicado para mostrar a evolução de vendas mês a mês ao longo de um ano?',
          options: ['Gráfico de pizza', 'Gráfico de linhas', 'Gráfico de dispersão sem conexão', 'Nenhum gráfico é indicado para isso'],
          answer: 1,
          explanation:
            'O gráfico de linhas é o mais indicado para mostrar tendências e mudanças ao longo do tempo, já que conecta os pontos e deixa clara a direção da evolução (subida, queda ou estabilidade).',
        },
        reference: {
          label: 'Microsoft — Tipos de gráficos disponíveis',
          href: 'https://support.microsoft.com/pt-br/office/tipos-de-gr%C3%A1ficos-disponíveis',
        },
      },
      {
        slug: 'personalizando-graficos',
        video: { youtubeId: 'X-Y2MwCfRcc', title: 'Gráficos Bonitos no Excel | Como Personalizar o Visual dos Gráficos no Excel para Iniciantes' },
        title: 'Personalizando e formatando gráficos',
        duration: '35 min',
        summary:
          'Depois de criado, um gráfico pode ser ajustado: título, cores, rótulos de dados e legenda. Pequenos ajustes de formatação fazem grande diferença em como a informação é percebida por quem vê o gráfico.',
        objectives: [
          'Adicionar e editar título, rótulos de dados e legenda em um gráfico.',
          'Ajustar cores e estilo visual de um gráfico.',
        ],
        keyPoints: [
          {
            title: 'Título e rótulos de dados',
            description:
              'Clicando no gráfico, a guia "Design do Gráfico" ou o botão "+" ao lado dele permite adicionar título, rótulos com os valores exatos de cada barra ou fatia, e legenda — tudo isso ajuda quem vê o gráfico a entender sem precisar de explicação.',
          },
          {
            title: 'Cores e estilos prontos',
            description:
              'O Excel oferece estilos de gráfico prontos, com combinações de cores testadas para boa legibilidade. Usar um estilo pronto costuma ser mais rápido e mais consistente do que escolher cores manualmente uma a uma.',
          },
          {
            title: 'Evitando excesso de informação',
            description:
              'Nem todo gráfico precisa de rótulos, legenda e título ao mesmo tempo. Menos é mais: adicione apenas os elementos que realmente ajudam a entender a informação, evitando poluir visualmente o gráfico.',
          },
        ],
        activity: {
          title: 'Aprimorando um gráfico existente',
          steps: [
            'Usando um gráfico já criado em uma aula anterior, adicione um título descritivo.',
            'Ative os rótulos de dados para mostrar o valor exato de cada coluna ou fatia.',
            'Experimente aplicar um estilo de cor pronto e veja como isso muda a aparência do gráfico.',
          ],
        },
        quiz: {
          question: 'Qual é uma boa prática ao formatar um gráfico?',
          options: [
            'Adicionar o máximo de cores, rótulos e elementos possível, sempre',
            'Adicionar apenas os elementos (título, rótulos, legenda) que realmente ajudam a entender a informação',
            'Nunca usar título, para não ocupar espaço',
            'Sempre remover a legenda, mesmo com várias séries de dados',
          ],
          answer: 1,
          explanation:
            'Um bom gráfico comunica de forma clara e objetiva. Adicionar elementos demais pode poluir visualmente e dificultar a leitura, em vez de ajudar.',
        },
        reference: {
          label: 'Microsoft — Personalizar gráficos',
          href: 'https://support.microsoft.com/pt-br/office/alterar-o-layout-ou-o-estilo-de-um-gr%C3%A1fico',
        },
      },
    ],
  },
  {
    slug: 'tabelas-dinamicas',
    title: 'Tabelas Dinâmicas',
    description:
      'Resuma grandes quantidades de dados em poucos cliques, sem precisar escrever fórmulas complexas.',
    lessons: [
      {
        slug: 'o-que-e-tabela-dinamica',
        video: { youtubeId: 'mGiNtTq17S8', title: 'Tabela Dinâmica - O que é? Para que serve?' },
        title: 'O que é uma tabela dinâmica e quando usar',
        duration: '30 min',
        summary:
          'Tabela dinâmica é uma ferramenta que resume e reorganiza grandes quantidades de dados automaticamente, sem precisar escrever fórmulas — ideal para quando você tem uma lista longa e precisa de um resumo rápido.',
        objectives: [
          'Explicar o que é uma tabela dinâmica com suas próprias palavras.',
          'Reconhecer situações em que uma tabela dinâmica economiza tempo em relação a fórmulas manuais.',
        ],
        keyPoints: [
          {
            title: 'Resumindo dados sem fórmulas',
            description:
              'Em vez de escrever várias fórmulas de SOMASE para resumir vendas por categoria, região e mês, uma tabela dinâmica faz isso automaticamente ao arrastar os campos para as áreas certas.',
          },
          {
            title: 'Quando vale a pena usar',
            description:
              'Tabelas dinâmicas fazem mais sentido em listas com muitas linhas (centenas ou milhares) e várias colunas categóricas (como região, produto, vendedor), onde resumir manualmente seria trabalhoso e sujeito a erro.',
          },
          {
            title: 'Os dados de origem precisam estar organizados',
            description:
              'Para funcionar bem, a tabela de origem precisa ter cabeçalhos claros em cada coluna e não ter linhas ou colunas totalmente vazias no meio dos dados — isso evita que o Excel interprete a tabela de forma errada.',
          },
        ],
        activity: {
          title: 'Reconhecendo a necessidade de uma tabela dinâmica',
          steps: [
            'Imagine uma lista de 200 vendas, com data, vendedor, produto e valor.',
            'Escreva quais perguntas você gostaria de responder rapidamente com esses dados (por exemplo: "quanto cada vendedor vendeu no total?").',
            'Reflita sobre quanto tempo levaria para responder essas perguntas usando apenas fórmulas manuais, célula por célula.',
          ],
        },
        quiz: {
          question: 'Em qual situação uma tabela dinâmica costuma ser mais útil?',
          options: [
            'Em uma lista pequena, com apenas 5 linhas de dados',
            'Em uma lista grande, com muitas linhas e colunas categóricas, que precisa ser resumida rapidamente',
            'Apenas quando a planilha não tem nenhuma coluna de texto',
            'Somente em planilhas que não têm nenhum número',
          ],
          answer: 1,
          explanation:
            'Tabelas dinâmicas se destacam justamente quando há grandes volumes de dados para resumir e cruzar por diferentes categorias — é nesse cenário que elas poupam mais tempo em relação a fórmulas manuais.',
        },
        reference: {
          label: 'Microsoft — Criar uma Tabela Dinâmica',
          href: 'https://support.microsoft.com/pt-br/office/criar-uma-tabela-din%C3%A2mica',
        },
      },
      {
        slug: 'criando-uma-tabela-dinamica',
        video: { youtubeId: '_HQSEEpLJQk', title: 'Como Fazer Tabela Dinâmica no Excel | Passo a Passo do Zero | Organizar Dados e Relatórios' },
        title: 'Criando e organizando uma tabela dinâmica',
        duration: '45 min',
        summary:
          'Na prática, criar uma tabela dinâmica envolve inserir a ferramenta e arrastar os campos certos para as áreas de linhas, colunas, valores e filtros — sem precisar programar nada.',
        objectives: [
          'Inserir uma tabela dinâmica a partir de uma tabela de dados.',
          'Organizar campos nas áreas de Linhas, Colunas, Valores e Filtros.',
        ],
        keyPoints: [
          {
            title: 'Inserindo a tabela dinâmica',
            description:
              'Com o cursor dentro da tabela de dados, vá em Inserir > Tabela Dinâmica. O Excel sugere automaticamente o intervalo de dados e cria uma nova aba com um painel de campos ao lado.',
          },
          {
            title: 'As quatro áreas: Linhas, Colunas, Valores e Filtros',
            description:
              'Arrastar um campo para "Linhas" cria uma categoria por linha (como cada vendedor); para "Valores", soma ou conta esse campo; "Colunas" cria categorias na horizontal; "Filtros" permite restringir a análise a um recorte específico, como um mês.',
          },
          {
            title: 'Trocando a forma de resumir os valores',
            description:
              'Por padrão, campos numéricos são somados na área de Valores, mas é possível trocar para média, contagem, máximo ou mínimo, clicando no campo e escolhendo "Configurações do Campo de Valor".',
          },
        ],
        activity: {
          title: 'Montando sua primeira tabela dinâmica',
          steps: [
            'Monte (ou use) uma tabela com vendedor, produto e valor de venda, com pelo menos 15 linhas.',
            'Insira uma tabela dinâmica a partir dessa tabela.',
            'Arraste "vendedor" para Linhas e "valor" para Valores, para ver o total vendido por cada vendedor.',
            'Adicione "produto" na área de Filtros e teste filtrar por um produto específico.',
          ],
        },
        quiz: {
          question: 'O que acontece ao arrastar um campo numérico para a área "Valores" de uma tabela dinâmica?',
          options: [
            'O campo é excluído da tabela de origem',
            'Por padrão, o Excel soma os valores desse campo, agrupados pelas categorias definidas em Linhas/Colunas',
            'O campo se transforma automaticamente em texto',
            'Nada acontece até que uma fórmula seja escrita manualmente',
          ],
          answer: 1,
          explanation:
            'Ao colocar um campo numérico na área de Valores, o Excel soma automaticamente esses valores, agrupando-os conforme as categorias definidas nas áreas de Linhas e Colunas — sem precisar escrever nenhuma fórmula.',
        },
        reference: {
          label: 'Microsoft — Criar uma Tabela Dinâmica para analisar dados',
          href: 'https://support.microsoft.com/pt-br/office/criar-uma-tabela-din%C3%A2mica-para-analisar-dados-de-planilha',
        },
      },
      {
        slug: 'grafico-dinamico-e-atualizacao',
        video: { youtubeId: 'qKOCdCQpXLQ', title: 'Como atualizar a Tabela e Gráfico Dinâmicos do Excel' },
        title: 'Gráfico dinâmico e atualização de dados',
        duration: '35 min',
        summary:
          'Um gráfico dinâmico é a versão visual de uma tabela dinâmica, e ambos precisam ser atualizados manualmente quando os dados de origem mudam — diferente de fórmulas comuns, que recalculam sozinhas.',
        objectives: [
          'Criar um gráfico dinâmico a partir de uma tabela dinâmica.',
          'Atualizar uma tabela e gráfico dinâmicos após alterar os dados de origem.',
        ],
        keyPoints: [
          {
            title: 'Criando um gráfico dinâmico',
            description:
              'Com a tabela dinâmica selecionada, vá em Inserir > Gráfico Dinâmico (ou use o botão equivalente na guia de Análise da Tabela Dinâmica) para gerar um gráfico que reflete visualmente os mesmos dados resumidos.',
          },
          {
            title: 'Por que é preciso "Atualizar"',
            description:
              'Diferente de fórmulas comuns, tabelas e gráficos dinâmicos não recalculam automaticamente quando a tabela de origem muda. É preciso clicar com o botão direito e escolher "Atualizar" (ou usar o atalho Alt+F5) para trazer os dados mais recentes.',
          },
          {
            title: 'Atualizando automaticamente ao abrir o arquivo',
            description:
              'Nas opções da tabela dinâmica, é possível marcar "Atualizar dados ao abrir o arquivo", o que garante que o resumo sempre reflita os dados mais recentes assim que o arquivo é aberto, sem precisar lembrar de atualizar manualmente.',
          },
        ],
        activity: {
          title: 'Testando a atualização de dados',
          steps: [
            'Usando a tabela dinâmica da aula anterior, crie um gráfico dinâmico a partir dela.',
            'Volte para a tabela de dados de origem e altere um dos valores de venda.',
            'Clique com o botão direito na tabela dinâmica e escolha "Atualizar" para confirmar que o gráfico também se atualiza.',
          ],
        },
        quiz: {
          question: 'O que é necessário fazer depois de alterar os dados de origem de uma tabela dinâmica?',
          options: [
            'Nada, ela sempre atualiza automaticamente, como uma fórmula comum',
            'É preciso clicar em "Atualizar" para que a tabela dinâmica reflita os novos dados',
            'É preciso excluir a tabela dinâmica e criar uma nova do zero',
            'É preciso reiniciar o computador',
          ],
          answer: 1,
          explanation:
            'Ao contrário de fórmulas comuns, tabelas e gráficos dinâmicos não recalculam sozinhos quando os dados de origem mudam — é necessário clicar em "Atualizar" (ou configurar a atualização automática ao abrir o arquivo).',
        },
        reference: {
          label: 'Microsoft — Atualizar dados em uma Tabela Dinâmica',
          href: 'https://support.microsoft.com/pt-br/office/atualizar-atualizar-os-dados-em-uma-tabela-din%C3%A2mica',
        },
      },
    ],
  },
  {
    slug: 'validacao-protecao-e-produtividade',
    title: 'Validação, Proteção e Produtividade',
    description:
      'Deixe suas planilhas mais seguras e rápidas de usar, com listas suspensas, proteção e atalhos.',
    lessons: [
      {
        slug: 'validacao-de-dados-lista-suspensa',
        video: { youtubeId: 'pNy3STqix1w', title: 'LISTA SUSPENSA com VALIDAÇÃO de DADOS no Excel - 4 maneiras Diferentes de criar' },
        title: 'Validação de dados (listas suspensas)',
        duration: '35 min',
        summary:
          'A validação de dados limita o que pode ser digitado em uma célula — por exemplo, permitindo escolher apenas entre opções de uma lista suspensa, o que evita erros de digitação e padroniza a forma como os dados são preenchidos.',
        objectives: [
          'Criar uma lista suspensa simples usando validação de dados.',
          'Explicar por que listas suspensas ajudam a evitar erros de preenchimento.',
        ],
        keyPoints: [
          {
            title: 'Criando uma lista suspensa',
            description:
              'Em Dados > Validação de Dados, escolha "Lista" como critério e informe as opções separadas por ponto e vírgula (ou selecione um intervalo de células que já contém essas opções). A célula passa a mostrar uma seta para escolher entre as opções.',
          },
          {
            title: 'Por que evitar digitação livre',
            description:
              'Sem uma lista suspensa, é comum que a mesma categoria seja digitada de formas diferentes ("SP", "S.P.", "São Paulo"), o que atrapalha depois na hora de filtrar ou resumir os dados. A lista suspensa padroniza esse preenchimento.',
          },
          {
            title: 'Mensagem de erro personalizada',
            description:
              'Na mesma janela de Validação de Dados, é possível configurar uma mensagem de erro personalizada, que aparece se alguém tentar digitar algo fora da lista permitida, orientando a pessoa a escolher uma opção válida.',
          },
        ],
        activity: {
          title: 'Criando uma lista suspensa de categorias',
          steps: [
            'Crie uma coluna com pelo menos 4 categorias possíveis (por exemplo: Alimentação, Transporte, Lazer, Moradia).',
            'Em outra célula, aplique validação de dados do tipo "Lista", usando essas categorias como opções.',
            'Teste selecionar diferentes opções pela lista suspensa criada.',
          ],
        },
        quiz: {
          question: 'Qual é a principal vantagem de usar uma lista suspensa (validação de dados) em vez de digitação livre?',
          options: [
            'Ela deixa a planilha mais lenta, mas sem outro efeito',
            'Ela padroniza o preenchimento e evita erros de digitação e variações de escrita',
            'Ela impede que a célula seja copiada',
            'Ela transforma automaticamente números em texto',
          ],
          answer: 1,
          explanation:
            'A lista suspensa restringe o preenchimento a opções pré-definidas, evitando variações de escrita (como "SP" e "São Paulo" para a mesma coisa) que dificultariam análises posteriores.',
        },
        reference: {
          label: 'Microsoft — Aplicar validação de dados a células',
          href: 'https://support.microsoft.com/pt-br/office/aplicar-valida%C3%A7%C3%A3o-de-dados-a-c%C3%A9lulas',
        },
      },
      {
        slug: 'protegendo-celulas-e-planilhas',
        video: { youtubeId: 'zjxHw7rXgI8', title: 'Como PROTEGER PLANILHAS com senha no EXCEL' },
        title: 'Protegendo células e planilhas',
        duration: '30 min',
        summary:
          'Quando várias pessoas usam a mesma planilha, é comum querer travar fórmulas importantes para que ninguém apague por engano, mantendo apenas algumas células livres para preenchimento.',
        objectives: [
          'Proteger uma planilha inteira, permitindo edição apenas em células específicas.',
          'Entender a diferença entre proteger a planilha e proteger o arquivo com senha de abertura.',
        ],
        keyPoints: [
          {
            title: 'Por padrão, todas as células estão "bloqueadas"',
            description:
              'O Excel já marca todas as células como bloqueadas por padrão, mas isso só tem efeito depois que a proteção da planilha é ativada. Antes de ativar, é preciso desbloquear as células que devem continuar editáveis.',
          },
          {
            title: 'Desbloqueando células específicas antes de proteger',
            description:
              'Selecione as células que devem continuar editáveis, abra Formatar Células > Proteção e desmarque "Bloqueada". Só depois disso, ative Revisão > Proteger Planilha para travar o restante.',
          },
          {
            title: 'Proteger planilha x proteger arquivo com senha',
            description:
              '"Proteger Planilha" impede editar células bloqueadas, mas qualquer pessoa ainda pode abrir e ver o arquivo. Já colocar uma senha na pasta de trabalho (Arquivo > Proteger Pasta de Trabalho) impede até mesmo abrir o arquivo sem a senha correta.',
          },
        ],
        activity: {
          title: 'Protegendo uma planilha de orçamento',
          steps: [
            'Em uma planilha com fórmulas de cálculo, desbloqueie apenas as células onde os valores devem ser digitados.',
            'Ative a proteção da planilha (Revisão > Proteger Planilha).',
            'Teste tentar editar uma célula com fórmula (deve ser bloqueada) e uma célula liberada para digitação (deve funcionar normalmente).',
          ],
        },
        quiz: {
          question: 'O que é preciso fazer ANTES de ativar "Proteger Planilha", se você quer que algumas células continuem editáveis?',
          options: [
            'Nada, todas as células ficam editáveis automaticamente',
            'Desbloquear especificamente as células que devem continuar editáveis, já que todas vêm bloqueadas por padrão',
            'Excluir todas as fórmulas da planilha',
            'Salvar o arquivo em formato PDF antes de proteger',
          ],
          answer: 1,
          explanation:
            'Como todas as células vêm marcadas como "bloqueadas" por padrão, é necessário desbloquear manualmente as que devem continuar editáveis antes de ativar a proteção da planilha — senão, nenhuma célula poderá ser alterada.',
        },
        reference: {
          label: 'Microsoft — Proteger uma planilha',
          href: 'https://support.microsoft.com/pt-br/office/proteger-uma-planilha',
        },
      },
      {
        slug: 'atalhos-de-teclado-e-impressao',
        video: { youtubeId: '0nuw2jaSVvo', title: '7 Atalhos de Teclado que Todo Usuário de Excel Deve Conhecer' },
        title: 'Atalhos de teclado e impressão',
        duration: '30 min',
        summary:
          'Alguns atalhos de teclado economizam bastante tempo no uso diário do Excel, e configurar a área de impressão corretamente evita o clássico problema de imprimir uma planilha cortada ou espalhada em várias folhas sem necessidade.',
        objectives: [
          'Usar pelo menos 5 atalhos de teclado essenciais do Excel.',
          'Configurar a área de impressão de uma planilha antes de imprimir.',
        ],
        keyPoints: [
          {
            title: 'Atalhos essenciais do dia a dia',
            description:
              'Ctrl+C (copiar), Ctrl+V (colar), Ctrl+Z (desfazer), Ctrl+S (salvar), Ctrl+setas (pular para o fim dos dados), F2 (editar célula) e Ctrl+Barra de espaço (selecionar coluna inteira) estão entre os mais usados.',
          },
          {
            title: 'Definindo a área de impressão',
            description:
              'Em Layout da Página > Área de Impressão > Definir Área de Impressão, você escolhe exatamente qual parte da planilha será impressa, evitando que colunas extras ou dados de rascunho apareçam na folha impressa.',
          },
          {
            title: 'Visualizando antes de imprimir',
            description:
              'Arquivo > Imprimir mostra uma prévia de como a planilha ficará no papel, incluindo quantas páginas serão usadas — sempre vale conferir essa prévia antes de imprimir, ajustando escala ou orientação (retrato/paisagem) se necessário.',
          },
        ],
        activity: {
          title: 'Praticando atalhos e configurando impressão',
          steps: [
            'Em uma planilha qualquer, pratique pelo menos 5 atalhos diferentes (copiar, colar, desfazer, salvar, editar célula com F2).',
            'Selecione uma área específica da planilha e defina como área de impressão.',
            'Acesse a prévia de impressão (Arquivo > Imprimir) e confira se a área definida aparece corretamente.',
          ],
        },
        quiz: {
          question: 'Para que serve a opção "Definir Área de Impressão" no Excel?',
          options: [
            'Para excluir permanentemente os dados fora da área escolhida',
            'Para escolher exatamente qual parte da planilha será impressa, evitando imprimir dados desnecessários',
            'Para proteger a planilha com senha',
            'Para criar automaticamente um gráfico da área selecionada',
          ],
          answer: 1,
          explanation:
            '"Definir Área de Impressão" delimita qual intervalo de células será enviado para a impressora, evitando que colunas ou linhas fora dessa área apareçam na folha impressa.',
        },
        reference: {
          label: 'Microsoft — Definir ou limpar uma área de impressão',
          href: 'https://support.microsoft.com/pt-br/office/definir-ou-limpar-uma-%C3%A1rea-de-impress%C3%A3o',
        },
      },
    ],
  },
  {
    slug: 'projeto-pratico',
    title: 'Projeto Prático',
    description:
      'Aplique tudo o que foi aprendido em um projeto real: um painel de controle financeiro pessoal completo.',
    lessons: [
      {
        slug: 'planejando-o-orcamento-pessoal',
        video: { youtubeId: 'VJYVupw_sk0', title: 'COMO FAZER UM ORÇAMENTO PESSOAL NO EXCEL | FACINHO' },
        title: 'Planejando uma planilha de orçamento pessoal',
        duration: '35 min',
        summary:
          'Antes de digitar qualquer fórmula, um bom projeto de planilha começa no planejamento: quais informações preciso registrar, como vou organizar as colunas e o que quero conseguir calcular no final.',
        objectives: [
          'Planejar a estrutura de colunas de uma planilha de orçamento pessoal.',
          'Definir com clareza quais cálculos o orçamento deve responder.',
        ],
        keyPoints: [
          {
            title: 'Definindo as colunas necessárias',
            description:
              'Um orçamento pessoal básico costuma precisar de: data, descrição, categoria (usando lista suspensa), tipo (receita ou despesa) e valor. Pensar nisso antes de digitar evita ter que reorganizar tudo depois.',
          },
          {
            title: 'Separando receitas e despesas',
            description:
              'Uma boa prática é ter uma coluna que indique se o lançamento é "Receita" ou "Despesa", o que facilita depois somar cada tipo separadamente e calcular o saldo do período.',
          },
          {
            title: 'O que o orçamento deve responder',
            description:
              'Antes de montar as fórmulas, é importante definir as perguntas que a planilha vai responder: quanto entrou, quanto saiu, qual o saldo, e quanto foi gasto em cada categoria — isso guia todo o restante do projeto.',
          },
        ],
        activity: {
          title: 'Planejando sua estrutura de orçamento',
          steps: [
            'Defina as colunas que sua planilha de orçamento vai ter (data, descrição, categoria, tipo, valor).',
            'Liste pelo menos 5 categorias de gastos que fazem sentido para o seu dia a dia.',
            'Escreva as 3 perguntas principais que você quer que essa planilha responda.',
          ],
        },
        quiz: {
          question: 'Por que é útil ter uma coluna indicando se um lançamento é "Receita" ou "Despesa"?',
          options: [
            'Isso não tem nenhuma utilidade prática',
            'Isso facilita somar receitas e despesas separadamente e calcular o saldo do período',
            'Isso é obrigatório para o Excel funcionar',
            'Isso serve apenas para deixar a planilha mais colorida',
          ],
          answer: 1,
          explanation:
            'Separar receitas de despesas com uma coluna própria permite usar SOMASE para calcular o total de cada tipo separadamente, e depois calcular o saldo (receitas menos despesas) com facilidade.',
        },
        reference: {
          label: 'Microsoft — Modelo de orçamento pessoal',
          href: 'https://support.microsoft.com/pt-br/office/criar-um-or%C3%A7amento-pessoal',
        },
      },
      {
        slug: 'montando-formulas-do-orcamento',
        video: { youtubeId: 'ZZLEVZ4e6h8', title: 'Como fazer uma planilha de gastos pessoais no Excel - passo a passo para Iniciantes' },
        title: 'Montando fórmulas e formatação do orçamento',
        duration: '45 min',
        summary:
          'Com a estrutura definida, chegou a hora de aplicar o que foi aprendido no curso: fórmulas de soma condicional, formatação de moeda e formatação condicional para destacar gastos fora do esperado.',
        objectives: [
          'Aplicar SOMASE para calcular totais por categoria e por tipo.',
          'Formatar valores como moeda e aplicar formatação condicional a gastos altos.',
        ],
        keyPoints: [
          {
            title: 'Somando receitas e despesas com SOMASE',
            description:
              'Usando a coluna "Tipo" como critério, =SOMASE(coluna_tipo;"Receita";coluna_valor) e =SOMASE(coluna_tipo;"Despesa";coluna_valor) calculam os totais de cada lado do orçamento automaticamente.',
          },
          {
            title: 'Calculando o saldo',
            description:
              'O saldo do período é simplesmente o total de receitas menos o total de despesas — uma fórmula simples de subtração que usa os resultados das duas fórmulas de SOMASE anteriores.',
          },
          {
            title: 'Formatando para facilitar a leitura',
            description:
              'Aplique formato de moeda em todas as colunas de valor, e use formatação condicional para destacar em vermelho despesas acima de um determinado valor, tornando fácil identificar os maiores gastos de relance.',
          },
        ],
        activity: {
          title: 'Construindo as fórmulas do orçamento',
          steps: [
            'Preencha pelo menos 10 lançamentos (receitas e despesas) na estrutura planejada na aula anterior.',
            'Crie fórmulas de SOMASE para o total de receitas, total de despesas e uma fórmula de saldo.',
            'Aplique formatação de moeda e uma regra de formatação condicional para despesas acima de um valor que você escolher.',
          ],
        },
        quiz: {
          question: 'Como calcular o saldo de um orçamento pessoal, tendo o total de receitas e o total de despesas já calculados?',
          options: [
            'Somando os dois totais',
            'Subtraindo o total de despesas do total de receitas',
            'Multiplicando os dois totais',
            'O saldo não pode ser calculado automaticamente no Excel',
          ],
          answer: 1,
          explanation:
            'O saldo de um período é o total de receitas menos o total de despesas — uma subtração simples entre os dois resultados já calculados com SOMASE.',
        },
        reference: {
          label: 'Microsoft — Função SOMASE',
          href: 'https://support.microsoft.com/pt-br/office/fun%C3%A7%C3%A3o-somase',
        },
      },
      {
        slug: 'projeto-final-painel-financeiro',
        video: { youtubeId: 'Oh6SdnHFNo4', title: 'Como Criar Planilha de CONTROLE FINANCEIRO PESSOAL no EXCEL' },
        title: 'Projeto final: painel de controle financeiro com gráfico',
        duration: '55 min',
        summary:
          'Na última aula, o desafio é juntar tudo: tabela dinâmica para resumir os gastos por categoria, um gráfico para visualizar essa distribuição e uma lista suspensa para facilitar o preenchimento — um painel financeiro completo, do jeito que se vê no mercado de trabalho.',
        objectives: [
          'Criar uma tabela dinâmica que resuma despesas por categoria.',
          'Montar um gráfico a partir dessa tabela dinâmica para visualizar a distribuição dos gastos.',
        ],
        keyPoints: [
          {
            title: 'Juntando tudo em um painel',
            description:
              'Um painel de controle financeiro combina vários recursos aprendidos no curso: lista suspensa para categorias, SOMASE ou tabela dinâmica para os totais, formatação condicional para alertas visuais e um gráfico para visualizar a distribuição.',
          },
          {
            title: 'Tabela dinâmica para resumir por categoria',
            description:
              'Usando a lista completa de lançamentos como origem, uma tabela dinâmica com "Categoria" em Linhas e "Valor" em Valores mostra rapidamente quanto foi gasto em cada categoria, sem precisar escrever fórmulas separadas para cada uma.',
          },
          {
            title: 'Visualizando a distribuição com um gráfico de pizza',
            description:
              'A partir dessa tabela dinâmica, um gráfico de pizza mostra visualmente qual categoria consome a maior parte do orçamento — uma forma rápida de identificar onde os gastos podem ser reduzidos.',
          },
        ],
        activity: {
          title: 'Montando o painel financeiro completo',
          steps: [
            'Usando a planilha de orçamento das aulas anteriores, crie uma tabela dinâmica que resuma o total gasto por categoria.',
            'A partir dessa tabela dinâmica, insira um gráfico de pizza mostrando a distribuição dos gastos entre categorias.',
            'Revise a planilha inteira: confira se as fórmulas, a formatação condicional e a lista suspensa de categorias continuam funcionando corretamente.',
            'Como desafio final, proteja as células com fórmulas, deixando editáveis apenas as células de lançamento.',
          ],
        },
        quiz: {
          question: 'Em um painel de controle financeiro completo, qual é a função de uma tabela dinâmica combinada com um gráfico de pizza?',
          options: [
            'Impedir que novos lançamentos sejam adicionados à planilha',
            'Resumir os gastos por categoria e visualizar rapidamente qual categoria consome a maior parte do orçamento',
            'Substituir completamente a necessidade de fórmulas na planilha',
            'Proteger a planilha automaticamente com senha',
          ],
          answer: 1,
          explanation:
            'A combinação de tabela dinâmica com gráfico de pizza permite resumir os gastos por categoria automaticamente e visualizar de forma clara qual parcela do orçamento cada categoria representa — facilitando decisões sobre onde economizar.',
        },
        reference: {
          label: 'Microsoft — Analisar dados com Tabelas Dinâmicas',
          href: 'https://support.microsoft.com/pt-br/office/vis%C3%A3o-geral-de-tabelas-din%C3%A2micas-e-gr%C3%A1ficos-din%C3%A2micos',
        },
      },
    ],
  },
]

export const excelCourseLessons = excelCourseModules.flatMap((module, moduleIndex) =>
  module.lessons.map((lesson, lessonIndex) => ({
    ...lesson,
    module,
    moduleIndex,
    lessonIndex,
  })),
)

export function getExcelLesson(slug: string) {
  return excelCourseLessons.find((lesson) => lesson.slug === slug)
}

export const excelCourseStats = {
  modules: excelCourseModules.length,
  lessons: excelCourseLessons.length,
  workload: '18h',
}
