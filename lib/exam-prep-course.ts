export type ExamPrepQuestion = {
  id: string
  format: 'certo-errado' | 'multipla-escolha'
  statement: string
  options: string[]
  answer: number
  explanation: string
}

export type ExamPrepTopic = {
  slug: string
  title: string
  duration: string
  summary: string
  reviewPoints: Array<{ title: string; description: string }>
  examTips: string[]
  questions: ExamPrepQuestion[]
  reference: { label: string; href: string }
  video?: { youtubeId: string; title: string }
}

export const examPrepTopics: ExamPrepTopic[] = [
  {
    slug: 'hardware-e-software',
    title: 'Hardware e Software — Conceitos Fundamentais',
    duration: '35 min',
    video: { youtubeId: 'mzwDUdlZIJE', title: 'Informática para Concursos 2025 - Aula #01 - Noções de Hardware e Software' },
    summary:
      'A base de quase toda prova de informática: a diferença entre hardware (as partes físicas) e software (os programas), e a classificação dos periféricos.',
    reviewPoints: [
      {
        title: 'Hardware x Software',
        description:
          'Hardware é a parte física do computador: processador, memória RAM, HD/SSD, placa-mãe e periféricos. Software é o conjunto de instruções e programas que fazem esse hardware funcionar — sistema operacional, aplicativos e firmware.',
      },
      {
        title: 'Memória RAM x Armazenamento (HD/SSD)',
        description:
          'A memória RAM é volátil: perde todo o conteúdo quando o computador é desligado, sendo usada para processamento temporário. O armazenamento (HD ou SSD) é não volátil, guardando os dados permanentemente. O SSD é mais rápido que o HD por não ter partes mecânicas móveis.',
      },
      {
        title: 'Tipos de software',
        description:
          'Software de sistema (sistema operacional, drivers, firmware) x software aplicativo (Word, navegadores, jogos). Também se classifica quanto à licença: software livre/open source (código aberto, pode ser estudado e modificado) x software proprietário (código fechado).',
      },
      {
        title: 'Periféricos de entrada, saída e híbridos',
        description:
          'Periféricos de entrada enviam dados ao computador (mouse, teclado, scanner). Periféricos de saída exibem ou entregam o resultado do processamento (monitor, impressora, caixas de som). Alguns são híbridos, funcionando nos dois sentidos (telas touchscreen, pen drives, HDs externos).',
      },
    ],
    examTips: [
      'Cebraspe adora trocar "volátil" por "não volátil" entre RAM e HD/SSD — decore que a RAM é volátil.',
      'Firmware é software gravado em um chip de hardware (como a BIOS) — não é "apenas hardware".',
      'Bancas como FCC cobram bastante a classificação de periféricos como entrada, saída ou híbridos.',
    ],
    questions: [
      {
        id: 'hw-q1',
        format: 'certo-errado',
        statement: 'A memória RAM é do tipo volátil, ou seja, seu conteúdo é perdido quando o computador é desligado.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. A RAM perde todo o conteúdo ao ser desenergizada, por isso é usada só para processamento temporário.',
      },
      {
        id: 'hw-q2',
        format: 'certo-errado',
        statement: 'O SSD (Solid State Drive) utiliza partes mecânicas móveis para armazenar dados, o que o torna mais lento que o HD tradicional.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. O SSD NÃO tem partes mecânicas móveis, o que o torna mais rápido e resistente que o HD tradicional.',
      },
      {
        id: 'hw-q3',
        format: 'multipla-escolha',
        statement: 'Assinale a alternativa que apresenta apenas exemplos de hardware.',
        options: [
          'Windows, Word, Excel',
          'Processador, memória RAM, placa-mãe',
          'Antivírus, navegador, sistema operacional',
          'Firmware, driver, aplicativo',
        ],
        answer: 1,
        explanation: 'Processador, memória RAM e placa-mãe são componentes físicos (hardware); as demais opções trazem softwares.',
      },
      {
        id: 'hw-q4',
        format: 'multipla-escolha',
        statement: 'O firmware é:',
        options: [
          'Um tipo de vírus que ataca hardwares antigos',
          'Um software embutido em um chip de hardware, responsável por controlar funções básicas do dispositivo',
          'Sinônimo de hardware',
          'Um periférico de entrada',
        ],
        answer: 1,
        explanation: 'O firmware é um software gravado em um componente de hardware (como a BIOS), controlando funções básicas do dispositivo.',
      },
      {
        id: 'hw-q5',
        format: 'certo-errado',
        statement: 'O mouse é classificado como um periférico de entrada, pois envia informações para o computador.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. O mouse envia comandos ao computador, sendo um periférico de entrada clássico.',
      },
      {
        id: 'hw-q6',
        format: 'certo-errado',
        statement: 'Um pen drive (dispositivo USB de armazenamento) é considerado um periférico exclusivamente de saída.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. O pen drive é um periférico de entrada E saída, pois tanto recebe quanto fornece dados ao computador.',
      },
      {
        id: 'hw-q7',
        format: 'multipla-escolha',
        statement: 'Um software livre (open source) se caracteriza por:',
        options: [
          'Ser sempre gratuito e não poder ser vendido',
          'Ter seu código-fonte aberto, podendo ser estudado, modificado e redistribuído',
          'Funcionar apenas em sistemas Linux',
          'Ser desenvolvido exclusivamente por empresas privadas',
        ],
        answer: 1,
        explanation: 'Software livre tem o código-fonte aberto, permitindo estudo, modificação e redistribuição — não é necessariamente gratuito.',
      },
      {
        id: 'hw-q8',
        format: 'certo-errado',
        statement: 'A placa-mãe (motherboard) é o componente responsável por interligar e permitir a comunicação entre os demais componentes de hardware do computador.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. A placa-mãe é o componente central que conecta processador, memória, armazenamento e demais periféricos.',
      },
    ],
    reference: {
      label: 'gov.br — Portal de Serviços do Governo Federal',
      href: 'https://www.gov.br/pt-br',
    },
  },
  {
    slug: 'sistemas-operacionais',
    title: 'Sistemas Operacionais (Windows e noções de Linux)',
    duration: '35 min',
    video: { youtubeId: 'SdgTMUWRuO0', title: 'AULA - SISTEMA OPERACIONAL WINDOWS | INFORMÁTICA PARA CONCURSOS' },
    summary:
      'Atalhos de teclado, extensões de arquivo e conceitos básicos de Windows e Linux — um dos assuntos mais cobrados literalmente ao pé da letra.',
    reviewPoints: [
      {
        title: 'Função do sistema operacional',
        description:
          'O sistema operacional gerencia o hardware, os softwares e a interação com o usuário. Exemplos: Windows, Linux e macOS.',
      },
      {
        title: 'Atalhos de teclado essenciais no Windows',
        description:
          'Ctrl+C (copiar), Ctrl+V (colar), Ctrl+X (recortar), Ctrl+Z (desfazer), Ctrl+Y (refazer), Windows+E (abrir o Gerenciador/Explorador de Arquivos), Windows+L (bloquear a tela), Alt+Tab (alternar entre janelas), Ctrl+Alt+Del (abrir opções de segurança/gerenciador de tarefas).',
      },
      {
        title: 'Extensões de arquivo comuns',
        description:
          '.docx (Word), .xlsx (Excel), .pptx (PowerPoint), .pdf (documento portátil), .exe (executável), .zip/.rar (arquivo compactado).',
      },
      {
        title: 'Noções básicas de Linux',
        description:
          'O Linux é um sistema operacional de código aberto (open source), organizado em distribuições (Ubuntu, Fedora, Mint). Possui interface gráfica normalmente, e sua estrutura de diretórios é diferente da do Windows (não usa letras de unidade como C: ou D:).',
      },
    ],
    examTips: [
      'Decore os atalhos de teclado do Windows — é um dos assuntos mais cobrados literalmente palavra por palavra.',
      'Cebraspe gosta de confundir Linux com "não ter interface gráfica" — o Linux TEM interface gráfica (ex: Ubuntu).',
    ],
    questions: [
      {
        id: 'so-q1',
        format: 'certo-errado',
        statement: 'O atalho de teclado Ctrl+Z no Windows é utilizado para refazer a última ação desfeita.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. Ctrl+Z desfaz a última ação; Ctrl+Y é que refaz uma ação desfeita.',
      },
      {
        id: 'so-q2',
        format: 'certo-errado',
        statement: 'O Linux é um sistema operacional de código fechado, desenvolvido e mantido exclusivamente por uma única empresa.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. O Linux é de código aberto (open source), mantido por uma comunidade e organizado em diversas distribuições.',
      },
      {
        id: 'so-q3',
        format: 'multipla-escolha',
        statement: 'No Windows, o atalho de teclado utilizado para abrir o Gerenciador de Arquivos é:',
        options: ['Windows + L', 'Windows + E', 'Ctrl + Alt + Del', 'Alt + F4'],
        answer: 1,
        explanation: 'Windows + E abre o Gerenciador (Explorador) de Arquivos.',
      },
      {
        id: 'so-q4',
        format: 'multipla-escolha',
        statement: 'A extensão de arquivo ".xlsx" está associada a qual tipo de programa?',
        options: ['Editor de texto', 'Editor de apresentações', 'Planilha eletrônica', 'Compactador de arquivos'],
        answer: 2,
        explanation: '.xlsx é a extensão padrão de arquivos do Microsoft Excel, um programa de planilhas eletrônicas.',
      },
      {
        id: 'so-q5',
        format: 'certo-errado',
        statement: 'O atalho Alt+Tab no Windows permite alternar entre janelas de programas abertos.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Alt+Tab é o atalho clássico para alternar entre janelas/programas abertos.',
      },
      {
        id: 'so-q6',
        format: 'certo-errado',
        statement: 'Distribuições Linux, como Ubuntu e Fedora, não possuem interface gráfica, funcionando exclusivamente por linha de comando.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. Distribuições como Ubuntu possuem interface gráfica completa, além de suporte a linha de comando.',
      },
      {
        id: 'so-q7',
        format: 'multipla-escolha',
        statement: 'O atalho Windows + L tem como função:',
        options: ['Abrir o menu iniciar', 'Bloquear a tela do computador', 'Fechar o programa ativo', 'Abrir o gerenciador de tarefas'],
        answer: 1,
        explanation: 'Windows + L bloqueia imediatamente a tela do computador.',
      },
      {
        id: 'so-q8',
        format: 'multipla-escolha',
        statement: 'Assinale a opção que apresenta um exemplo de sistema operacional:',
        options: ['Word', 'Chrome', 'Linux', 'Excel'],
        answer: 2,
        explanation: 'Linux é um sistema operacional; as demais opções são softwares aplicativos.',
      },
    ],
    reference: {
      label: 'Microsoft — Central de Ajuda do Windows',
      href: 'https://support.microsoft.com/pt-br/windows',
    },
  },
  {
    slug: 'editor-de-texto',
    title: 'Editor de Texto (Word e Writer)',
    duration: '30 min',
    video: { youtubeId: 'Ob36BKGnz5g', title: 'Informática para Concursos – Microsoft Word | Prof. André Play' },
    summary:
      'Guias, atalhos e recursos de revisão do Microsoft Word e do LibreOffice Writer — recursos clássicos cobrados em prova.',
    reviewPoints: [
      {
        title: 'Principais guias do Word',
        description:
          'Página Inicial (formatação de fonte e parágrafo), Inserir (tabelas, imagens, cabeçalho/rodapé), Layout (margens, orientação da página) e Revisão (verificação ortográfica, comentários, controle de alterações).',
      },
      {
        title: 'Atalhos essenciais',
        description:
          'Ctrl+N (novo documento), Ctrl+O (abrir), Ctrl+S (salvar), Ctrl+B (negrito), Ctrl+I (itálico), Ctrl+U (sublinhado), Ctrl+P (imprimir), F12 (salvar como).',
      },
      {
        title: 'Formatos de arquivo',
        description:
          '.docx é o formato padrão do Word a partir da versão 2007; .doc era usado em versões antigas; .odt é o formato padrão do LibreOffice Writer; é possível exportar diretamente para .pdf.',
      },
      {
        title: 'Recursos de revisão',
        description:
          '"Controlar Alterações" registra e exibe todas as modificações feitas por diferentes revisores em um documento. "Comentários" permitem anotações sem alterar o texto original.',
      },
    ],
    examTips: [
      'Cebraspe adora perguntar "o atalho X faz Y" — decore de cor o que cada Ctrl+letra faz.',
      'Não confunda "Salvar" (Ctrl+S, sobrescreve o arquivo atual) com "Salvar Como" (F12, cria um novo arquivo).',
    ],
    questions: [
      {
        id: 'word-q1',
        format: 'certo-errado',
        statement: 'No Microsoft Word, o atalho Ctrl+B aplica a formatação de itálico ao texto selecionado.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. Ctrl+B aplica negrito (bold); Ctrl+I é que aplica itálico.',
      },
      {
        id: 'word-q2',
        format: 'certo-errado',
        statement: 'A extensão padrão de arquivos criados pelo Microsoft Word, a partir da versão 2007, é ".docx".',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Desde a versão 2007, o formato padrão do Word é .docx.',
      },
      {
        id: 'word-q3',
        format: 'multipla-escolha',
        statement: 'No Word, a tecla de atalho F12 é utilizada para:',
        options: ['Salvar o documento com o mesmo nome', 'Abrir a caixa de diálogo "Salvar Como"', 'Imprimir o documento', 'Verificar a ortografia'],
        answer: 1,
        explanation: 'F12 abre a caixa de diálogo "Salvar Como", permitindo salvar uma cópia com outro nome ou local.',
      },
      {
        id: 'word-q4',
        format: 'multipla-escolha',
        statement: 'O recurso do Word que permite registrar e visualizar todas as modificações feitas em um documento por diferentes revisores é chamado de:',
        options: ['Comentários', 'Controlar Alterações', 'Marca d\'água', 'Formatação condicional'],
        answer: 1,
        explanation: '"Controlar Alterações" registra inserções, exclusões e formatações feitas por cada revisor no documento.',
      },
      {
        id: 'word-q5',
        format: 'certo-errado',
        statement: 'O atalho Ctrl+U no Microsoft Word aplica a formatação de sublinhado ao texto selecionado.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Ctrl+U (underline) aplica sublinhado ao texto selecionado.',
      },
      {
        id: 'word-q6',
        format: 'certo-errado',
        statement: 'É possível exportar um documento do Microsoft Word diretamente para o formato PDF, sem a necessidade de programas adicionais.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. O Word permite salvar/exportar diretamente em PDF pelo menu "Salvar Como" ou "Exportar".',
      },
      {
        id: 'word-q7',
        format: 'multipla-escolha',
        statement: 'Qual guia do Word contém, tipicamente, as ferramentas de inserção de tabelas e imagens?',
        options: ['Página Inicial', 'Layout', 'Inserir', 'Revisão'],
        answer: 2,
        explanation: 'A guia "Inserir" concentra recursos como tabelas, imagens, formas, cabeçalho e rodapé.',
      },
      {
        id: 'word-q8',
        format: 'multipla-escolha',
        statement: 'O LibreOffice Writer, equivalente ao Microsoft Word no pacote LibreOffice, utiliza como extensão padrão de seus arquivos:',
        options: ['.docx', '.odt', '.pptx', '.xlsx'],
        answer: 1,
        explanation: '.odt é o formato padrão (OpenDocument Text) do LibreOffice Writer.',
      },
    ],
    reference: {
      label: 'Microsoft — Central de Ajuda do Windows',
      href: 'https://support.microsoft.com/pt-br/windows',
    },
  },
  {
    slug: 'planilhas-eletronicas',
    title: 'Planilhas Eletrônicas (Excel e Calc)',
    duration: '35 min',
    video: { youtubeId: '8t59E-3zdFs', title: 'EXCEL PARA CONCURSOS PÚBLICOS: AS FUNÇÕES MAIS COBRADAS (Gabriel Pacheco)' },
    summary:
      'As funções e conceitos de Excel/Calc mais cobrados em concursos: SOMA, MÉDIA, SE, PROCV e a diferença entre referências relativas e absolutas.',
    reviewPoints: [
      {
        title: 'Funções mais cobradas',
        description:
          'SOMA (soma valores de um intervalo), MÉDIA (calcula a média aritmética), SE (testa uma condição e retorna um valor para verdadeiro e outro para falso), PROCV/PROCX (busca um valor em uma tabela), CONT.SE (conta células que atendem a um critério), MÁXIMO e MÍNIMO.',
      },
      {
        title: 'Referências relativas x absolutas',
        description:
          'Uma referência relativa (ex: A1) muda automaticamente quando a fórmula é copiada para outra célula. Uma referência absoluta (ex: $A$1, usando o símbolo $) permanece fixa, não mudando ao copiar a fórmula.',
      },
      {
        title: 'Sintaxe básica',
        description:
          'Toda fórmula no Excel começa com o sinal "=". Os argumentos de uma função são separados por ";" ou "," dependendo da configuração regional do programa.',
      },
      {
        title: 'Gráficos e formatação condicional',
        description:
          'Gráficos ajudam a visualizar dados de forma gráfica. A formatação condicional aplica destaques visuais (cores, ícones) automaticamente conforme regras definidas pelo usuário.',
      },
    ],
    examTips: [
      'A função SE (=SE(condição;verdadeiro;falso)) é uma das mais cobradas — decore a sintaxe.',
      'Cebraspe adora perguntar sobre referência absoluta com $ — se disserem que $A$1 muda ao copiar a fórmula, está ERRADO.',
    ],
    questions: [
      {
        id: 'excel-q1',
        format: 'certo-errado',
        statement: 'A função =MÉDIA(A1:A10) calcula a média aritmética dos valores contidos nas células de A1 até A10.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. A função MÉDIA soma os valores do intervalo e divide pela quantidade de células.',
      },
      {
        id: 'excel-q2',
        format: 'certo-errado',
        statement: 'Ao copiar a fórmula que contém a referência absoluta $A$1 para outra célula, o Excel ajusta automaticamente a referência para a nova posição.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. A referência absoluta (com $) permanece fixa e NÃO se ajusta ao copiar a fórmula.',
      },
      {
        id: 'excel-q3',
        format: 'multipla-escolha',
        statement: 'A função do Excel utilizada para contar quantas células dentro de um intervalo atendem a um determinado critério é:',
        options: ['SOMA', 'CONT.SE', 'MÉDIA', 'PROCV'],
        answer: 1,
        explanation: 'CONT.SE conta o número de células que atendem a um critério específico dentro de um intervalo.',
      },
      {
        id: 'excel-q4',
        format: 'multipla-escolha',
        statement: 'Toda fórmula no Microsoft Excel deve necessariamente começar com o caractere:',
        options: ['#', '@', '=', '$'],
        answer: 2,
        explanation: 'Toda fórmula no Excel começa com o sinal de igual "=".',
      },
      {
        id: 'excel-q5',
        format: 'certo-errado',
        statement: 'A função PROCV realiza uma busca vertical, procurando um valor na primeira coluna de uma tabela e retornando um valor na mesma linha de outra coluna especificada.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. PROCV busca verticalmente pela primeira coluna e retorna um valor correspondente de outra coluna.',
      },
      {
        id: 'excel-q6',
        format: 'multipla-escolha',
        statement: 'A função =SE(A1>10;"Aprovado";"Reprovado") retornará "Aprovado" quando:',
        options: ['O valor de A1 for igual a 10', 'O valor de A1 for menor que 10', 'O valor de A1 for maior que 10', 'A célula A1 estiver vazia'],
        answer: 2,
        explanation: 'A condição "A1>10" só é verdadeira quando o valor de A1 for maior que 10, retornando "Aprovado".',
      },
      {
        id: 'excel-q7',
        format: 'certo-errado',
        statement: 'No Excel, o símbolo $ utilizado antes da letra da coluna e/ou do número da linha em uma fórmula serve para fixar (tornar absoluta) essa referência ao copiar a fórmula.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. O símbolo $ fixa a coluna, a linha, ou ambas, impedindo que a referência mude ao copiar a fórmula.',
      },
      {
        id: 'excel-q8',
        format: 'multipla-escolha',
        statement: 'Assinale a alternativa que apresenta a extensão padrão de arquivos do LibreOffice Calc:',
        options: ['.xlsx', '.ods', '.csv', '.odt'],
        answer: 1,
        explanation: '.ods (OpenDocument Spreadsheet) é o formato padrão do LibreOffice Calc.',
      },
    ],
    reference: {
      label: 'Microsoft — Central de Ajuda do Windows',
      href: 'https://support.microsoft.com/pt-br/windows',
    },
  },
  {
    slug: 'apresentacoes',
    title: 'Apresentações (PowerPoint e Impress)',
    duration: '25 min',
    video: { youtubeId: '6Dbn6s-P7vg', title: 'PowerPoint para concursos - Aula 1 de informática sobre editores de apresentação' },
    summary:
      'Modos de exibição, a diferença entre transições e animações, e o recurso de Slide Mestre — a pegadinha mais clássica desse tópico.',
    reviewPoints: [
      {
        title: 'Modos de exibição',
        description:
          'Normal (edição padrão dos slides), Classificação de Slides (miniaturas de todos os slides, útil para reorganizar a ordem), Apresentação de Slides (tela cheia, atalho F5) e Anotações do Orador.',
      },
      {
        title: 'Transições x Animações',
        description:
          'Transições são efeitos aplicados ENTRE slides, na troca de um slide para o outro. Animações são efeitos aplicados a elementos DENTRO de um mesmo slide (textos, imagens), controlando como e quando aparecem.',
      },
      {
        title: 'Atalhos de apresentação',
        description:
          'F5 inicia a apresentação a partir do primeiro slide. Shift+F5 inicia a partir do slide atualmente selecionado. Esc encerra a apresentação em andamento.',
      },
      {
        title: 'Slide Mestre',
        description:
          'Recurso que permite definir um layout e uma formatação padrão, aplicados de uma só vez a todos os slides da apresentação.',
      },
    ],
    examTips: [
      'Não confunda transição (entre slides) com animação (dentro do slide) — é a pegadinha mais clássica desse tópico.',
      'F5 inicia do PRIMEIRO slide; Shift+F5 inicia do slide ATUAL — decore a diferença.',
    ],
    questions: [
      {
        id: 'ppt-q1',
        format: 'certo-errado',
        statement: 'No PowerPoint, uma "transição de slides" refere-se ao efeito visual aplicado a um objeto dentro de um mesmo slide.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. Isso descreve uma animação. Transição é o efeito aplicado na troca ENTRE slides.',
      },
      {
        id: 'ppt-q2',
        format: 'certo-errado',
        statement: 'A tecla de atalho F5 no PowerPoint inicia a apresentação a partir do primeiro slide.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. F5 sempre inicia a apresentação desde o primeiro slide.',
      },
      {
        id: 'ppt-q3',
        format: 'multipla-escolha',
        statement: 'O recurso do PowerPoint que permite definir um layout padrão de formatação para ser aplicado a todos os slides de uma apresentação é chamado de:',
        options: ['Slide Mestre', 'Anotações do Orador', 'Modo de Classificação', 'Transição Padrão'],
        answer: 0,
        explanation: 'O Slide Mestre permite definir formatação e layout padrão para todos os slides de uma vez.',
      },
      {
        id: 'ppt-q4',
        format: 'multipla-escolha',
        statement: 'Para iniciar uma apresentação de slides a partir do slide atualmente selecionado (e não do início), utiliza-se o atalho:',
        options: ['F5', 'Shift+F5', 'Ctrl+F5', 'Alt+F5'],
        answer: 1,
        explanation: 'Shift+F5 inicia a apresentação a partir do slide atualmente selecionado, e não do primeiro.',
      },
      {
        id: 'ppt-q5',
        format: 'certo-errado',
        statement: 'Animações no PowerPoint são efeitos aplicados a elementos (textos, imagens) dentro de um mesmo slide, controlando como e quando eles aparecem ou desaparecem.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Essa é exatamente a definição de animação, diferente da transição entre slides.',
      },
      {
        id: 'ppt-q6',
        format: 'multipla-escolha',
        statement: 'No Microsoft PowerPoint, o modo de exibição que apresenta miniaturas de todos os slides, facilitando a reorganização da ordem, é:',
        options: ['Modo Normal', 'Modo de Anotações', 'Modo de Classificação de Slides', 'Modo de Leitura'],
        answer: 2,
        explanation: 'O Modo de Classificação de Slides exibe miniaturas de todos os slides, facilitando reordená-los.',
      },
      {
        id: 'ppt-q7',
        format: 'certo-errado',
        statement: 'O LibreOffice Impress é o programa de apresentações equivalente ao Microsoft PowerPoint dentro do pacote LibreOffice.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. O Impress é o editor de apresentações do LibreOffice, equivalente ao PowerPoint.',
      },
      {
        id: 'ppt-q8',
        format: 'multipla-escolha',
        statement: 'A extensão padrão de arquivos criados pelo PowerPoint (a partir da versão 2007) é:',
        options: ['.pptx', '.ppsx', '.potx', '.pdf'],
        answer: 0,
        explanation: '.pptx é a extensão padrão de apresentações do PowerPoint a partir da versão 2007.',
      },
    ],
    reference: {
      label: 'Microsoft — Central de Ajuda do Windows',
      href: 'https://support.microsoft.com/pt-br/windows',
    },
  },
  {
    slug: 'internet-navegadores-e-cookies',
    title: 'Internet, Navegadores e Cookies',
    duration: '30 min',
    video: { youtubeId: 'raVrqJvlJrs', title: 'Cache de Internet - Pasta Temporária e Cookies - Informática | Concurso STM' },
    summary:
      'Cookies, cache, navegação anônima e a diferença entre HTTP e HTTPS — recheado de pegadinhas sobre o que a navegação privada realmente esconde.',
    reviewPoints: [
      {
        title: 'Cookies',
        description:
          'São pequenos arquivos de texto armazenados pelo navegador, usados para lembrar preferências do usuário, manter sessões de login e, em alguns casos, rastrear a navegação.',
      },
      {
        title: 'Cache do navegador',
        description:
          'Armazena temporariamente arquivos de páginas visitadas (imagens, scripts) para acelerar o carregamento em acessos futuros. Limpar o cache pode resolver problemas de exibição de conteúdo desatualizado.',
      },
      {
        title: 'Navegação anônima/privada',
        description:
          'Não salva localmente o histórico, cookies ou dados de formulário após fechar a janela — mas NÃO torna o usuário anônimo perante o site visitado, o provedor de internet ou a rede utilizada.',
      },
      {
        title: 'HTTP x HTTPS',
        description:
          'O HTTPS utiliza criptografia (SSL/TLS) para proteger a comunicação entre o navegador e o servidor, sendo mais seguro que o HTTP tradicional.',
      },
    ],
    examTips: [
      'Pegadinha clássica: navegação anônima NÃO esconde sua atividade do provedor de internet nem do site visitado — só não salva os dados localmente.',
      'Cookies não são vírus nem programas executáveis — são apenas arquivos de texto.',
    ],
    questions: [
      {
        id: 'net-q1',
        format: 'certo-errado',
        statement: 'Cookies são pequenos arquivos de texto armazenados pelo navegador que podem ser usados para lembrar preferências do usuário e sessões de login em sites.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Cookies armazenam informações como preferências e dados de sessão de login.',
      },
      {
        id: 'net-q2',
        format: 'certo-errado',
        statement: 'A navegação anônima (ou privada) de um navegador torna o usuário completamente invisível para o provedor de internet e para os sites visitados.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. A navegação privada apenas evita salvar dados localmente; o provedor e os sites ainda podem identificar a atividade.',
      },
      {
        id: 'net-q3',
        format: 'multipla-escolha',
        statement: 'O recurso do navegador que armazena temporariamente arquivos de páginas já visitadas, com o objetivo de acelerar o carregamento em acessos futuros, é chamado de:',
        options: ['Cookie', 'Cache', 'Extensão', 'Favorito'],
        answer: 1,
        explanation: 'O cache armazena arquivos temporários de páginas visitadas para acelerar carregamentos futuros.',
      },
      {
        id: 'net-q4',
        format: 'multipla-escolha',
        statement: 'O protocolo HTTPS se diferencia do HTTP principalmente por:',
        options: [
          'Ser mais lento em qualquer situação',
          'Utilizar criptografia para proteger a comunicação entre navegador e servidor',
          'Funcionar apenas em redes locais',
          'Não permitir o uso de formulários',
        ],
        answer: 1,
        explanation: 'O HTTPS adiciona uma camada de criptografia (SSL/TLS) à comunicação, tornando-a mais segura que o HTTP.',
      },
      {
        id: 'net-q5',
        format: 'certo-errado',
        statement: 'Cookies são programas executáveis capazes de instalar vírus no computador do usuário.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. Cookies são apenas arquivos de texto, sem capacidade de execução de código ou instalação de vírus.',
      },
      {
        id: 'net-q6',
        format: 'multipla-escolha',
        statement: 'Ao limpar o cache e os cookies de um navegador, o usuário normalmente:',
        options: [
          'Formata o disco rígido do computador',
          'Remove dados temporários e de sessão, podendo ser desconectado de sites onde estava logado',
          'Desinstala o navegador',
          'Impede o acesso à internet permanentemente',
        ],
        answer: 1,
        explanation: 'Limpar cache e cookies remove dados temporários e de sessão, o que pode encerrar logins ativos em sites.',
      },
      {
        id: 'net-q7',
        format: 'certo-errado',
        statement: 'É possível navegar na internet utilizando diferentes navegadores, como Google Chrome, Mozilla Firefox e Microsoft Edge, todos capazes de acessar as mesmas páginas web.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Diferentes navegadores seguem os mesmos padrões web e conseguem acessar as mesmas páginas.',
      },
      {
        id: 'net-q8',
        format: 'multipla-escolha',
        statement: 'Assinale a alternativa correta sobre "favoritos" (ou marcadores) em um navegador:',
        options: [
          'São vírus armazenados no cache',
          'São atalhos salvos pelo usuário para acessar páginas frequentemente visitadas',
          'São cookies de terceiros',
          'São extensões de segurança',
        ],
        answer: 1,
        explanation: 'Favoritos/marcadores são atalhos que o usuário salva para acessar rapidamente páginas de interesse.',
      },
    ],
    reference: {
      label: 'CISA — Secure Our World',
      href: 'https://www.cisa.gov/secure-our-world',
    },
  },
  {
    slug: 'correio-eletronico-e-protocolos',
    title: 'Correio Eletrônico e Protocolos (POP3, IMAP, SMTP)',
    duration: '30 min',
    video: { youtubeId: 'aD1zjBpqzB8', title: 'Protocolos POP, IMAP e SMTP - Correio Eletrônico - Informática | Concurso TRE/TO' },
    summary:
      'A base de quase toda questão desse tópico: SMTP envia, POP3 e IMAP recebem — e a diferença entre os campos Cc e Cco.',
    reviewPoints: [
      {
        title: 'SMTP (envio)',
        description:
          'O SMTP (Simple Mail Transfer Protocol) é o protocolo utilizado para o ENVIO de mensagens de correio eletrônico.',
      },
      {
        title: 'POP3 (recebimento local)',
        description:
          'O POP3 é um protocolo de recebimento que baixa as mensagens para o dispositivo local, geralmente removendo-as do servidor após o download.',
      },
      {
        title: 'IMAP (recebimento sincronizado)',
        description:
          'O IMAP é um protocolo de recebimento que mantém as mensagens sincronizadas no servidor, permitindo acesso a partir de múltiplos dispositivos diferentes.',
      },
      {
        title: 'Campos de um e-mail',
        description:
          '"Para" (To) indica o destinatário principal. "Cc" (com cópia) inclui destinatários visíveis a todos os demais. "Cco" (com cópia oculta / Bcc) inclui um destinatário que recebe o e-mail normalmente, mas cujo endereço não é visto pelos outros destinatários.',
      },
    ],
    examTips: [
      'SMTP = enviar (S de Send/Enviar). POP3 e IMAP = receber. Essa é a base de quase toda questão desse tópico.',
      'Cco (cópia oculta) esconde o destinatário dos DEMAIS destinatários — mas o próprio e-mail chega normalmente para ele.',
    ],
    questions: [
      {
        id: 'mail-q1',
        format: 'certo-errado',
        statement: 'O protocolo SMTP é utilizado para o envio de mensagens de correio eletrônico.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. SMTP é o protocolo padrão para envio de e-mails.',
      },
      {
        id: 'mail-q2',
        format: 'certo-errado',
        statement: 'O protocolo POP3 mantém as mensagens sincronizadas no servidor, permitindo que sejam acessadas de vários dispositivos diferentes sem serem removidas.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. Essa é a descrição do IMAP. O POP3 tipicamente baixa as mensagens e as remove do servidor.',
      },
      {
        id: 'mail-q3',
        format: 'multipla-escolha',
        statement: 'O protocolo de e-mail que permite o acesso e a sincronização das mensagens a partir de múltiplos dispositivos, mantendo-as armazenadas no servidor, é:',
        options: ['SMTP', 'POP3', 'IMAP', 'FTP'],
        answer: 2,
        explanation: 'O IMAP mantém as mensagens no servidor, permitindo acesso sincronizado de vários dispositivos.',
      },
      {
        id: 'mail-q4',
        format: 'multipla-escolha',
        statement: 'Ao inserir um destinatário no campo "Cco" (cópia oculta / Bcc) de um e-mail:',
        options: [
          'Todos os destinatários visualizam o endereço desse destinatário',
          'Esse destinatário não recebe o e-mail',
          'Os demais destinatários não visualizam o endereço desse destinatário, mas ele recebe o e-mail normalmente',
          'O e-mail não pode ser enviado',
        ],
        answer: 2,
        explanation: 'O destinatário em Cco recebe o e-mail normalmente, mas seu endereço fica oculto para os demais destinatários.',
      },
      {
        id: 'mail-q5',
        format: 'certo-errado',
        statement: 'O campo "Cc" (com cópia) de um e-mail permite que os endereços dos destinatários incluídos sejam visualizados por todos os demais destinatários da mensagem.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Diferente do Cco, os destinatários em Cc são visíveis para todos os demais.',
      },
      {
        id: 'mail-q6',
        format: 'certo-errado',
        statement: 'É impossível configurar um cliente de e-mail (como o Outlook) para acessar uma conta de e-mail utilizando o protocolo IMAP.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. É perfeitamente possível configurar clientes de e-mail para usar IMAP, sendo inclusive recomendado para uso em múltiplos dispositivos.',
      },
      {
        id: 'mail-q7',
        format: 'multipla-escolha',
        statement: 'Assinale a sigla que representa o protocolo típico de ENVIO de e-mails:',
        options: ['IMAP', 'POP3', 'SMTP', 'HTTP'],
        answer: 2,
        explanation: 'SMTP é o protocolo padrão utilizado para o envio de e-mails.',
      },
      {
        id: 'mail-q8',
        format: 'multipla-escolha',
        statement: 'Um usuário deseja acessar seus e-mails tanto pelo celular quanto pelo computador, com as mensagens sempre sincronizadas nos dois aparelhos. O protocolo mais indicado para essa configuração é:',
        options: ['POP3', 'IMAP', 'SMTP', 'FTP'],
        answer: 1,
        explanation: 'O IMAP é o mais indicado, pois mantém as mensagens sincronizadas no servidor entre múltiplos dispositivos.',
      },
    ],
    reference: {
      label: 'gov.br — Portal de Serviços do Governo Federal',
      href: 'https://www.gov.br/pt-br',
    },
  },
  {
    slug: 'redes-de-computadores',
    title: 'Redes de Computadores',
    duration: '30 min',
    video: { youtubeId: 'E32DtOkiHGM', title: 'Aula 01 - Informática para Concursos - Redes - Conceitos Básicos' },
    summary:
      'LAN, WAN, o modelo cliente-servidor, endereços IP e Wi-Fi — os conceitos de rede que mais aparecem em prova.',
    reviewPoints: [
      {
        title: 'Tipos de rede por abrangência',
        description:
          'LAN (Local Area Network) é uma rede local, de área pequena, como uma casa ou escritório. WAN (Wide Area Network) é uma rede de longa distância, como a própria internet. MAN (Metropolitan Area Network) abrange uma área do tamanho de uma cidade.',
      },
      {
        title: 'Modelo Cliente-Servidor',
        description:
          'O servidor centraliza recursos e serviços (arquivos, e-mails, páginas web), e os clientes acessam esses recursos através da rede.',
      },
      {
        title: 'Endereço IP',
        description:
          'É a identificação numérica única de um dispositivo em uma rede. O IPv4 usa 4 blocos de números; o IPv6 foi criado para resolver o esgotamento de endereços disponíveis no IPv4.',
      },
      {
        title: 'Wi-Fi',
        description:
          'Tecnologia de rede sem fio baseada no padrão IEEE 802.11. Redes protegidas exigem autenticação por senha, geralmente usando os protocolos de segurança WPA2 ou WPA3.',
      },
    ],
    examTips: [
      'LAN = local (rede pequena, ex: sua casa); WAN = ampla (ex: a internet, que interliga LANs do mundo todo).',
      'IPv6 foi criado para resolver o esgotamento de endereços do IPv4 — decore essa justificativa, é cobrada direto.',
    ],
    questions: [
      {
        id: 'net2-q1',
        format: 'certo-errado',
        statement: 'Uma rede LAN (Local Area Network) tipicamente abrange uma área geográfica pequena, como uma residência ou escritório.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. LAN é justamente a rede de área local, restrita a um espaço pequeno.',
      },
      {
        id: 'net2-q2',
        format: 'certo-errado',
        statement: 'A internet pode ser classificada como uma rede do tipo LAN, por interligar computadores de todo o mundo.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. A internet é o exemplo clássico de rede WAN, por abranger uma área geográfica muito ampla.',
      },
      {
        id: 'net2-q3',
        format: 'multipla-escolha',
        statement: 'O principal motivo para a criação do protocolo IPv6 foi:',
        options: [
          'Aumentar a velocidade da internet',
          'O esgotamento dos endereços disponíveis no IPv4',
          'Substituir o protocolo Wi-Fi',
          'Eliminar a necessidade de senhas em redes sem fio',
        ],
        answer: 1,
        explanation: 'O IPv6 foi criado principalmente para resolver o esgotamento de endereços IP do IPv4.',
      },
      {
        id: 'net2-q4',
        format: 'multipla-escolha',
        statement: 'No modelo cliente-servidor, o servidor tem como principal função:',
        options: [
          'Solicitar recursos e serviços de outros computadores',
          'Centralizar e fornecer recursos ou serviços a outros computadores (clientes) da rede',
          'Funcionar apenas como um dispositivo de armazenamento sem conexão à rede',
          'Substituir a necessidade de uma rede de computadores',
        ],
        answer: 1,
        explanation: 'O servidor centraliza e disponibiliza recursos/serviços que os clientes acessam pela rede.',
      },
      {
        id: 'net2-q5',
        format: 'certo-errado',
        statement: 'Uma rede Wi-Fi protegida por senha, utilizando protocolos como WPA2 ou WPA3, oferece maior segurança do que uma rede aberta, sem qualquer autenticação.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Redes protegidas por WPA2/WPA3 exigem autenticação, sendo mais seguras que redes abertas.',
      },
      {
        id: 'net2-q6',
        format: 'multipla-escolha',
        statement: 'Uma rede que interliga computadores de uma mesma cidade, abrangendo uma área maior que uma LAN mas menor que uma WAN, é classificada como:',
        options: ['PAN', 'MAN', 'SAN', 'VPN'],
        answer: 1,
        explanation: 'MAN (Metropolitan Area Network) é a rede de abrangência do tamanho de uma cidade/região metropolitana.',
      },
      {
        id: 'net2-q7',
        format: 'certo-errado',
        statement: 'Um endereço IP tem como função identificar de forma única um dispositivo conectado a uma rede.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. O endereço IP identifica de forma única cada dispositivo em uma rede.',
      },
      {
        id: 'net2-q8',
        format: 'multipla-escolha',
        statement: 'Wi-Fi é uma tecnologia de rede baseada no padrão:',
        options: ['IEEE 802.11', 'TCP/IP exclusivamente', 'Bluetooth 5.0', 'USB 3.0'],
        answer: 0,
        explanation: 'O Wi-Fi é baseado no conjunto de padrões IEEE 802.11.',
      },
    ],
    reference: {
      label: 'gov.br — Portal de Serviços do Governo Federal',
      href: 'https://www.gov.br/pt-br',
    },
  },
  {
    slug: 'seguranca-da-informacao-concursos',
    title: 'Segurança da Informação',
    duration: '35 min',
    video: { youtubeId: 'mIJqb1XQ0rI', title: 'Conceitos básicos de segurança na Internet e vírus de computadores | Informática para Concursos' },
    summary:
      'Tipos de malware, backup, firewall e criptografia — um dos tópicos com mais pegadinhas de definição em prova.',
    reviewPoints: [
      {
        title: 'Tipos de malware',
        description:
          'Vírus precisa de um programa hospedeiro para se propagar. Worm se propaga sozinho pela rede, sem precisar de hospedeiro. Trojan (cavalo de troia) se disfarça de programa legítimo. Ransomware sequestra/criptografa arquivos e exige resgate. Spyware espiona atividades do usuário. Keylogger registra as teclas digitadas.',
      },
      {
        title: 'Tipos de backup',
        description:
          'Backup completo copia todos os dados. Backup incremental copia apenas o que mudou desde o ÚLTIMO backup (de qualquer tipo). Backup diferencial copia apenas o que mudou desde o último backup COMPLETO.',
      },
      {
        title: 'Firewall',
        description:
          'Controla e filtra o tráfego de rede que entra e sai de um dispositivo ou rede, com base em regras de segurança, podendo bloquear acessos não autorizados.',
      },
      {
        title: 'Criptografia',
        description:
          'Criptografia simétrica usa a mesma chave para cifrar e decifrar os dados. Criptografia assimétrica usa um par de chaves distintas: uma pública e uma privada.',
      },
    ],
    examTips: [
      'Worm se propaga SOZINHO pela rede; vírus precisa de um hospedeiro (arquivo/programa) para se espalhar — não troque essa distinção.',
      'Backup incremental copia o que mudou desde o ÚLTIMO backup (qualquer tipo); diferencial copia o que mudou desde o último COMPLETO — pegadinha clássica.',
    ],
    questions: [
      {
        id: 'sec-q1',
        format: 'certo-errado',
        statement: 'O worm é um tipo de malware capaz de se propagar automaticamente através de uma rede, sem a necessidade de um programa hospedeiro.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Essa é a característica que diferencia o worm do vírus tradicional.',
      },
      {
        id: 'sec-q2',
        format: 'certo-errado',
        statement: 'O ransomware é um tipo de malware que tem como principal característica registrar as teclas digitadas pelo usuário para roubo de senhas.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. Essa é a descrição do keylogger. O ransomware sequestra/criptografa arquivos e exige pagamento de resgate.',
      },
      {
        id: 'sec-q3',
        format: 'multipla-escolha',
        statement: 'O tipo de backup que copia apenas os arquivos alterados desde o último backup completo (full) é o:',
        options: ['Backup incremental', 'Backup diferencial', 'Backup espelhado', 'Backup em nuvem'],
        answer: 1,
        explanation: 'O backup diferencial copia o que mudou desde o último backup COMPLETO, acumulando tamanho a cada execução.',
      },
      {
        id: 'sec-q4',
        format: 'multipla-escolha',
        statement: 'Um firewall tem como principal função:',
        options: [
          'Remover vírus já instalados no computador',
          'Controlar e filtrar o tráfego de rede que entra e sai de um dispositivo, com base em regras de segurança',
          'Realizar backups automáticos dos arquivos',
          'Criptografar arquivos armazenados no disco',
        ],
        answer: 1,
        explanation: 'O firewall filtra o tráfego de rede conforme regras de segurança, bloqueando acessos não autorizados.',
      },
      {
        id: 'sec-q5',
        format: 'certo-errado',
        statement: 'Na criptografia assimétrica, é utilizado um par de chaves distintas: uma pública e uma privada.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. A criptografia assimétrica usa duas chaves diferentes, uma pública e outra privada.',
      },
      {
        id: 'sec-q6',
        format: 'certo-errado',
        statement: 'Um cavalo de troia (trojan) se caracteriza por se disfarçar de um programa legítimo para enganar o usuário e obter acesso ao sistema.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. O trojan se disfarça de software legítimo para induzir o usuário a executá-lo.',
      },
      {
        id: 'sec-q7',
        format: 'multipla-escolha',
        statement: 'O tipo de backup que copia apenas os dados alterados desde o ÚLTIMO backup realizado (seja ele completo, incremental ou diferencial) é chamado de:',
        options: ['Backup completo', 'Backup incremental', 'Backup diferencial', 'Backup espelhado'],
        answer: 1,
        explanation: 'O backup incremental sempre copia apenas o que mudou desde o último backup de qualquer tipo.',
      },
      {
        id: 'sec-q8',
        format: 'multipla-escolha',
        statement: 'Um malware que criptografa os arquivos da vítima e exige pagamento de resgate para restaurar o acesso é conhecido como:',
        options: ['Spyware', 'Worm', 'Ransomware', 'Adware'],
        answer: 2,
        explanation: 'Ransomware é o malware que sequestra/criptografa arquivos e exige resgate para restaurar o acesso.',
      },
    ],
    reference: {
      label: 'CISA — Secure Our World',
      href: 'https://www.cisa.gov/secure-our-world',
    },
  },
  {
    slug: 'computacao-em-nuvem-concursos',
    title: 'Computação em Nuvem',
    duration: '25 min',
    video: { youtubeId: '67qOUQtpsA0', title: 'Informática para Concursos - Aula 05.01 - Computação em Nuvem - Conceito (cloud computing)' },
    summary:
      'SaaS, PaaS e IaaS: a hierarquia de serviços em nuvem mais cobrada em prova, além de vantagens e riscos do modelo.',
    reviewPoints: [
      {
        title: 'Conceito de computação em nuvem',
        description:
          'Modelo que permite acesso a recursos de computação (armazenamento, processamento, softwares) através da internet, sem a necessidade de manter toda a infraestrutura física localmente.',
      },
      {
        title: 'Modelos de serviço',
        description:
          'SaaS (Software as a Service) entrega o software pronto para uso, como o Gmail. PaaS (Platform as a Service) oferece uma plataforma para desenvolvedores criarem e implantarem aplicações. IaaS (Infrastructure as a Service) fornece infraestrutura sob demanda, como servidores virtuais.',
      },
      {
        title: 'Exemplos de armazenamento em nuvem',
        description:
          'Google Drive, Microsoft OneDrive, Dropbox e iCloud (Apple) são exemplos populares de serviços de armazenamento em nuvem.',
      },
      {
        title: 'Vantagens e riscos',
        description:
          'Vantagens: acesso de qualquer lugar com internet e redução de custos com infraestrutura própria. Risco: dependência de uma conexão à internet e da confiabilidade do provedor do serviço.',
      },
    ],
    examTips: [
      'SaaS = Software (você usa o programa pronto, tipo Gmail); PaaS = Plataforma (para desenvolvedores); IaaS = Infraestrutura (servidores virtuais) — decore essa hierarquia.',
      'Sem internet, normalmente não há acesso aos dados/serviços em nuvem — é um risco clássico cobrado em prova.',
    ],
    questions: [
      {
        id: 'cloud-q1',
        format: 'certo-errado',
        statement: 'A computação em nuvem permite o acesso a recursos de armazenamento e processamento através da internet, sem a necessidade de manter toda a infraestrutura física localmente.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Essa é a definição central de computação em nuvem.',
      },
      {
        id: 'cloud-q2',
        format: 'certo-errado',
        statement: 'O modelo de serviço em nuvem SaaS (Software as a Service) é voltado principalmente para desenvolvedores que precisam de uma plataforma para criar e implantar suas próprias aplicações.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. Essa é a descrição do PaaS. O SaaS entrega o software já pronto para uso do usuário final.',
      },
      {
        id: 'cloud-q3',
        format: 'multipla-escolha',
        statement: 'O Google Drive e o Microsoft OneDrive são exemplos de:',
        options: ['Sistemas operacionais', 'Serviços de armazenamento em nuvem', 'Protocolos de e-mail', 'Firewalls'],
        answer: 1,
        explanation: 'Google Drive e OneDrive são serviços populares de armazenamento em nuvem.',
      },
      {
        id: 'cloud-q4',
        format: 'multipla-escolha',
        statement: 'No modelo de computação em nuvem, o serviço que oferece servidores virtuais, redes e armazenamento como infraestrutura sob demanda é conhecido como:',
        options: ['SaaS', 'PaaS', 'IaaS', 'DaaS'],
        answer: 2,
        explanation: 'IaaS (Infrastructure as a Service) fornece infraestrutura de computação (servidores, redes) sob demanda.',
      },
      {
        id: 'cloud-q5',
        format: 'certo-errado',
        statement: 'Uma das principais desvantagens da computação em nuvem é a dependência de uma conexão à internet para acessar os dados e serviços armazenados remotamente.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Sem conexão à internet, normalmente não é possível acessar dados/serviços em nuvem.',
      },
      {
        id: 'cloud-q6',
        format: 'multipla-escolha',
        statement: 'Assinale a alternativa que apresenta um exemplo de aplicação SaaS (Software as a Service):',
        options: [
          'Um servidor virtual alugado para hospedar um site',
          'O Gmail, acessado diretamente pelo navegador',
          'Uma plataforma de desenvolvimento de aplicativos',
          'Um data center físico próprio',
        ],
        answer: 1,
        explanation: 'O Gmail é um software pronto para uso entregue via nuvem — o exemplo clássico de SaaS.',
      },
      {
        id: 'cloud-q7',
        format: 'certo-errado',
        statement: 'Arquivos armazenados exclusivamente na nuvem não podem, em hipótese alguma, ser acessados a partir de múltiplos dispositivos diferentes.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. Um dos principais benefícios da nuvem é justamente permitir acesso de múltiplos dispositivos diferentes.',
      },
      {
        id: 'cloud-q8',
        format: 'multipla-escolha',
        statement: 'Uma das principais vantagens da computação em nuvem para empresas é:',
        options: [
          'A eliminação total da necessidade de conexão à internet',
          'A redução de custos com infraestrutura física própria',
          'A impossibilidade de acesso remoto aos dados',
          'A obrigatoriedade de uso de um único fornecedor de nuvem',
        ],
        answer: 1,
        explanation: 'A redução de custos com infraestrutura física própria é uma das principais vantagens da nuvem.',
      },
    ],
    reference: {
      label: 'gov.br — Portal de Serviços do Governo Federal',
      href: 'https://www.gov.br/pt-br',
    },
  },
  {
    slug: 'nocoes-de-banco-de-dados',
    title: 'Noções de Banco de Dados',
    duration: '30 min',
    video: { youtubeId: '5KLBfI4Oevc', title: 'Informática para Concursos - Aula de Banco de Dados - Banco de dados relacionais' },
    summary:
      'Bancos de dados relacionais, SGBD, chave primária e estrangeira, e a diferença entre dados estruturados e não estruturados.',
    reviewPoints: [
      {
        title: 'Conceito de banco de dados',
        description:
          'Conjunto organizado de dados relacionados, armazenados de forma estruturada para facilitar acesso, gerenciamento e atualização.',
      },
      {
        title: 'Bancos de dados relacionais',
        description:
          'Organizam os dados em tabelas (linhas e colunas), relacionadas entre si por meio de chaves. Exemplos de sistemas: MySQL, PostgreSQL, Oracle e SQL Server.',
      },
      {
        title: 'SGBD (Sistema Gerenciador de Banco de Dados)',
        description:
          'É o software responsável por armazenar, organizar e permitir consultas aos dados de um banco de dados — não deve ser confundido com o "banco de dados" em si, que é o conjunto de dados armazenado.',
      },
      {
        title: 'Dados estruturados x não estruturados',
        description:
          'Dados estruturados seguem um formato fixo e organizado, como tabelas. Dados não estruturados não têm um formato pré-definido, como e-mails, vídeos, imagens e textos livres.',
      },
    ],
    examTips: [
      'Chave primária identifica um registro de forma ÚNICA dentro de uma tabela; chave estrangeira faz referência à chave primária de OUTRA tabela — essa relação é muito cobrada.',
      '"Banco de dados" é o conjunto de dados; "SGBD" é o SOFTWARE que gerencia esse banco — não confunda os dois termos.',
    ],
    questions: [
      {
        id: 'db-q1',
        format: 'certo-errado',
        statement: 'Um Sistema Gerenciador de Banco de Dados (SGBD) é o software responsável por organizar, armazenar e permitir consultas aos dados de um banco de dados.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. O SGBD é o software (como MySQL ou PostgreSQL) que gerencia o banco de dados.',
      },
      {
        id: 'db-q2',
        format: 'certo-errado',
        statement: 'Em um banco de dados relacional, os dados são organizados exclusivamente em arquivos de texto livre, sem qualquer estrutura de tabelas.',
        options: ['Certo', 'Errado'],
        answer: 1,
        explanation: 'Errado. Bancos de dados relacionais organizam os dados em tabelas, com linhas e colunas.',
      },
      {
        id: 'db-q3',
        format: 'multipla-escolha',
        statement: 'Em um banco de dados relacional, o elemento responsável por identificar de forma única cada registro de uma tabela é chamado de:',
        options: ['Chave estrangeira', 'Chave primária', 'Índice secundário', 'Consulta SQL'],
        answer: 1,
        explanation: 'A chave primária identifica de forma única cada registro de uma tabela.',
      },
      {
        id: 'db-q4',
        format: 'multipla-escolha',
        statement: 'Assinale a alternativa que apresenta apenas exemplos de Sistemas Gerenciadores de Banco de Dados (SGBD):',
        options: ['Word, Excel, PowerPoint', 'MySQL, PostgreSQL, Oracle', 'Windows, Linux, macOS', 'Chrome, Firefox, Edge'],
        answer: 1,
        explanation: 'MySQL, PostgreSQL e Oracle são exemplos clássicos de SGBDs.',
      },
      {
        id: 'db-q5',
        format: 'certo-errado',
        statement: 'Dados não estruturados, como vídeos, imagens e e-mails, não seguem um formato pré-definido de organização em tabelas.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Dados não estruturados não possuem um formato fixo, ao contrário dos dados estruturados em tabelas.',
      },
      {
        id: 'db-q6',
        format: 'multipla-escolha',
        statement: 'A chave estrangeira (foreign key) em um banco de dados relacional tem como função:',
        options: [
          'Criptografar os dados da tabela',
          'Fazer referência à chave primária de outra tabela, estabelecendo um relacionamento entre elas',
          'Definir o nome da tabela',
          'Impedir qualquer tipo de consulta ao banco de dados',
        ],
        answer: 1,
        explanation: 'A chave estrangeira referencia a chave primária de outra tabela, criando um relacionamento entre elas.',
      },
      {
        id: 'db-q7',
        format: 'certo-errado',
        statement: 'Um banco de dados pode ser definido como um conjunto organizado de dados relacionados, estruturado para facilitar o acesso e o gerenciamento das informações.',
        options: ['Certo', 'Errado'],
        answer: 0,
        explanation: 'Correto. Essa é a definição básica de banco de dados.',
      },
      {
        id: 'db-q8',
        format: 'multipla-escolha',
        statement: 'Fotos, vídeos e documentos de texto livre são geralmente classificados como dados:',
        options: ['Estruturados', 'Relacionais', 'Não estruturados', 'Primários'],
        answer: 2,
        explanation: 'Fotos, vídeos e textos livres não têm formato fixo, sendo classificados como dados não estruturados.',
      },
    ],
    reference: {
      label: 'gov.br — Portal de Serviços do Governo Federal',
      href: 'https://www.gov.br/pt-br',
    },
  },
]

export const examPrepLessons = examPrepTopics.map((topic, topicIndex) => ({
  ...topic,
  topicIndex,
}))

export const examPrepStats = {
  topics: examPrepTopics.length,
  modules: examPrepTopics.length,
  lessons: examPrepTopics.length,
  questions: examPrepTopics.reduce((total, topic) => total + topic.questions.length, 0),
  workload: '10h',
}

export function getExamPrepTopic(slug: string) {
  return examPrepLessons.find((topic) => topic.slug === slug)
}
