export type ExamQuestion = {
  id: string
  moduleSlug: string
  question: string
  options: string[]
  answer: number
  explanation: string
}

export const computingFinalExamQuestions: ExamQuestion[] = [
  // Módulo 1 — Introdução à Informática
  {
    id: 'm1-q1',
    moduleSlug: 'introducao-a-informatica',
    question: 'O que diferencia hardware de software em um computador?',
    options: [
      'Hardware são os programas instalados; software são as peças físicas',
      'Hardware são as peças físicas do computador; software são os programas e instruções que ele executa',
      'Hardware e software são sinônimos e representam a mesma coisa',
      'Hardware é usado apenas em celulares; software, apenas em computadores',
    ],
    answer: 1,
    explanation:
      'Hardware são os componentes físicos, como monitor, teclado e processador. Software são os programas e instruções que fazem esse hardware funcionar.',
  },
  {
    id: 'm1-q2',
    moduleSlug: 'introducao-a-informatica',
    question: 'Qual é a função principal do sistema operacional em um computador?',
    options: [
      'Armazenar fisicamente os dados dentro do processador',
      'Substituir a necessidade de instalar qualquer outro programa',
      'Gerenciar o hardware e servir de intermediário entre o usuário e a máquina, permitindo que os programas rodem',
      'Conectar o computador à internet sem precisar de roteador ou provedor',
    ],
    answer: 2,
    explanation:
      'O sistema operacional (como Windows, macOS ou Linux) controla os recursos do hardware e oferece a base para que outros programas sejam executados.',
  },

  // Módulo 2 — Usando o Sistema Operacional
  {
    id: 'm2-q1',
    moduleSlug: 'sistema-operacional',
    question: 'O que representam os ícones exibidos na área de trabalho de um computador?',
    options: [
      'Atalhos que permitem abrir rapidamente arquivos, pastas ou programas',
      'Cópias de segurança automáticas de todos os arquivos do computador',
      'Uma lista de contatos vinculada ao e-mail do usuário',
      'Publicidade instalada automaticamente pelo fabricante do computador',
    ],
    answer: 0,
    explanation:
      'Os ícones na área de trabalho são, na maioria das vezes, atalhos: um clique duplo neles abre o programa, arquivo ou pasta correspondente.',
  },
  {
    id: 'm2-q2',
    moduleSlug: 'sistema-operacional',
    question: 'Qual atalho de teclado é usado no Windows para alternar rapidamente entre as janelas abertas?',
    options: ['Ctrl + P', 'Alt + Tab', 'Ctrl + S', 'F5'],
    answer: 1,
    explanation:
      'Alt + Tab alterna entre as janelas abertas. Ctrl + P imprime, Ctrl + S salva e F5 atualiza a tela ou página.',
  },

  // Módulo 3 — Arquivos e Pastas
  {
    id: 'm3-q1',
    moduleSlug: 'arquivos-e-pastas',
    question: 'Qual é a principal diferença entre copiar e mover um arquivo?',
    options: [
      'Copiar cria uma duplicata no destino mantendo o arquivo original; mover transfere o arquivo, removendo-o do local de origem',
      'Copiar sempre exclui o arquivo original; mover cria uma cópia extra dele',
      'Não existe diferença: os dois comandos fazem exatamente a mesma coisa',
      'Copiar funciona apenas com pastas inteiras; mover funciona apenas com arquivos individuais',
    ],
    answer: 0,
    explanation:
      'Ao copiar, o arquivo original permanece no lugar e uma cópia é criada no destino. Ao mover, o arquivo sai do local original e passa a existir apenas no destino.',
  },
  {
    id: 'm3-q2',
    moduleSlug: 'arquivos-e-pastas',
    question: 'Qual é a forma correta e segura de remover um pen drive do computador após copiar arquivos para ele?',
    options: [
      'Puxar o pen drive assim que a barra de cópia desaparecer da tela',
      'Usar a opção "ejetar" ou "remover com segurança" antes de desconectar o dispositivo',
      'Desligar o computador imediatamente, sem finalizar nenhuma janela aberta',
      'Formatar o pen drive toda vez antes de removê-lo',
    ],
    answer: 1,
    explanation:
      'A opção de remoção segura garante que todas as gravações pendentes sejam concluídas antes de desconectar o dispositivo, evitando arquivos corrompidos.',
  },

  // Módulo 4 — Internet e Navegador
  {
    id: 'm4-q1',
    moduleSlug: 'internet-e-navegador',
    question: 'Qual é a função de um navegador (browser), como Chrome, Firefox ou Edge?',
    options: [
      'Ele é a própria internet, armazenada dentro do computador',
      'É o programa usado para acessar e exibir páginas e serviços disponíveis na internet',
      'É um tipo de vírus que precisa ser removido do sistema',
      'Serve apenas para enviar e receber e-mails',
    ],
    answer: 1,
    explanation:
      'O navegador é o programa que permite acessar sites e serviços online; a internet é a rede à qual ele se conecta.',
  },
  {
    id: 'm4-q2',
    moduleSlug: 'internet-e-navegador',
    question: 'O que o cadeado (HTTPS) exibido ao lado do endereço de um site indica?',
    options: [
      'Que a conexão está criptografada, mas isso, por si só, não garante que o site seja confiável',
      'Que o site é automaticamente livre de golpes e vírus',
      'Que o site pertence obrigatoriamente a um órgão do governo',
      'Que não é mais necessário conferir o endereço antes de inserir dados pessoais',
    ],
    answer: 0,
    explanation:
      'O HTTPS protege os dados enviados entre o navegador e o site, mas sites falsos também podem ter esse cadeado. É preciso conferir o endereço com atenção.',
  },

  // Módulo 5 — E-mail e Comunicação
  {
    id: 'm5-q1',
    moduleSlug: 'email-e-comunicacao',
    question: 'Ao escrever um e-mail profissional, qual prática é recomendada?',
    options: [
      'Usar um assunto vago, como "Oi", em todas as mensagens',
      'Escrever um assunto claro e objetivo que resuma o conteúdo da mensagem',
      'Escrever tudo em letras maiúsculas para chamar mais atenção',
      'Evitar cumprimento e despedida para a mensagem ficar mais curta',
    ],
    answer: 1,
    explanation:
      'Um assunto claro ajuda o destinatário a entender rapidamente o propósito do e-mail e a priorizar sua leitura.',
  },
  {
    id: 'm5-q2',
    moduleSlug: 'email-e-comunicacao',
    question:
      'Você recebe um e-mail inesperado pedindo para clicar em um link e confirmar sua senha imediatamente. Qual é a atitude mais segura?',
    options: [
      'Clicar no link rapidamente, antes que a conta seja supostamente bloqueada',
      'Responder ao e-mail perguntando se a mensagem é confiável',
      'Não clicar no link e verificar a informação diretamente no site ou aplicativo oficial do serviço',
      'Encaminhar o e-mail para vários contatos para alertar todo mundo',
    ],
    answer: 2,
    explanation:
      'Esse é um padrão comum de golpe (phishing). O caminho seguro é ignorar o link e confirmar a situação acessando o serviço diretamente pelo canal oficial.',
  },

  // Módulo 6 — Editor de Texto
  {
    id: 'm6-q1',
    moduleSlug: 'editor-de-texto',
    question: 'Para que serve a formatação em negrito, itálico ou sublinhado em um editor de texto?',
    options: [
      'Para alterar automaticamente o idioma do documento',
      'Para destacar palavras ou trechos importantes dentro do texto',
      'Para corrigir automaticamente erros de ortografia',
      'Para aumentar o tamanho do arquivo sem alterar o conteúdo',
    ],
    answer: 1,
    explanation:
      'Recursos de formatação como negrito, itálico e sublinhado ajudam a dar ênfase visual a partes específicas do texto, facilitando a leitura.',
  },
  {
    id: 'm6-q2',
    moduleSlug: 'editor-de-texto',
    question: 'Qual é uma vantagem de exportar um documento em formato PDF antes de enviá-lo a outra pessoa?',
    options: [
      'O PDF permite que qualquer pessoa edite o texto livremente',
      'O PDF preserva a formatação original e dificulta alterações acidentais no conteúdo',
      'O PDF é sempre menor que o arquivo original, em qualquer situação',
      'O PDF é o único formato aceito por impressoras',
    ],
    answer: 1,
    explanation:
      'Ao exportar em PDF, a aparência do documento (fontes, imagens, layout) fica preservada e o conteúdo é mais difícil de ser alterado por engano.',
  },

  // Módulo 7 — Planilhas
  {
    id: 'm7-q1',
    moduleSlug: 'planilhas',
    question: 'Em uma planilha, o que representa a referência "B3"?',
    options: [
      'A terceira planilha (aba) do arquivo',
      'A célula localizada no cruzamento da coluna B com a linha 3',
      'O terceiro gráfico criado na planilha',
      'Uma fórmula de soma automática',
    ],
    answer: 1,
    explanation:
      'Nas planilhas, cada célula é identificada pela letra da coluna seguida do número da linha. "B3" é a célula da coluna B com a linha 3.',
  },
  {
    id: 'm7-q2',
    moduleSlug: 'planilhas',
    question:
      'Qual fórmula deve ser usada para somar automaticamente os valores das células de A1 até A10 no Excel ou no LibreOffice Calc?',
    options: ['=SOMA(A1:A10) ou =SUM(A1:A10)', '=MULT(A1-A10)', '=TEXTO(A1;A10)', '=DATA(A1;A10)'],
    answer: 0,
    explanation:
      'A função SOMA (ou SUM, dependendo do idioma do programa) adiciona automaticamente os valores de um intervalo de células.',
  },

  // Módulo 8 — Apresentações
  {
    id: 'm8-q1',
    moduleSlug: 'apresentacoes',
    question: 'Qual prática de design é recomendada ao criar slides para uma apresentação?',
    options: [
      'Colocar o máximo de texto possível em cada slide, para não esquecer nada',
      'Usar poucas palavras por slide, com tópicos curtos e boa legibilidade',
      'Usar muitas fontes e cores diferentes para deixar a apresentação mais chamativa',
      'Evitar imagens e gráficos, usando apenas texto corrido',
    ],
    answer: 1,
    explanation:
      'Slides com poucas palavras e boa organização visual são mais fáceis de acompanhar; o conteúdo detalhado deve vir da fala do apresentador.',
  },
  {
    id: 'm8-q2',
    moduleSlug: 'apresentacoes',
    question: 'Qual atitude ajuda a apresentar com mais confiança diante de um público?',
    options: [
      'Ler o slide inteiro, palavra por palavra, sem olhar para o público',
      'Praticar a apresentação com antecedência e usar os slides como apoio, não como um roteiro completo',
      'Colocar o máximo de informação possível nos slides para não precisar falar muito',
      'Evitar pausas e falar o mais rápido possível durante toda a apresentação',
    ],
    answer: 1,
    explanation:
      'Ensaiar antes e tratar os slides como apoio visual (não como script) deixa a apresentação mais natural e reduz a insegurança na hora de falar.',
  },

  // Módulo 9 — Nuvem e Aplicativos Online
  {
    id: 'm9-q1',
    moduleSlug: 'nuvem-e-aplicativos-online',
    question: 'Qual é uma vantagem de guardar arquivos em serviços de nuvem, como Google Drive ou OneDrive?',
    options: [
      'Os arquivos ficam disponíveis apenas no computador onde foram criados',
      'É possível acessar os arquivos de diferentes dispositivos conectados à internet, com uma cópia protegida fora do computador',
      'Os arquivos deixam de precisar de senha ou login para serem abertos',
      'Os arquivos são impressos automaticamente assim que são salvos',
    ],
    answer: 1,
    explanation:
      'Serviços de nuvem permitem acessar os mesmos arquivos em celular, computador ou tablet, além de manter uma cópia fora do dispositivo original.',
  },
  {
    id: 'm9-q2',
    moduleSlug: 'nuvem-e-aplicativos-online',
    question:
      'Ao compartilhar um documento na nuvem, qual é a diferença entre dar permissão de "visualizar" e de "editar"?',
    options: [
      'Não há diferença: ambas as permissões permitem alterar o conteúdo do arquivo',
      '"Visualizar" permite apenas ler o conteúdo; "editar" permite também alterar o documento',
      '"Visualizar" permite apagar o arquivo; "editar" permite apenas lê-lo',
      'Essas permissões existem somente para arquivos de vídeo',
    ],
    answer: 1,
    explanation:
      'A permissão de "visualizar" restringe o acesso à leitura, enquanto "editar" autoriza a pessoa a modificar o conteúdo do arquivo compartilhado.',
  },

  // Módulo 10 — Manutenção Básica e Boas Práticas
  {
    id: 'm10-q1',
    moduleSlug: 'manutencao-e-boas-praticas',
    question: 'Qual prática ajuda a manter um computador rápido e seguro ao longo do tempo?',
    options: [
      'Nunca instalar atualizações, para não alterar o funcionamento do sistema',
      'Manter o sistema operacional e os programas atualizados e remover arquivos e programas que não são mais usados',
      'Instalar o máximo possível de programas, mesmo sem usá-los no dia a dia',
      'Desativar qualquer proteção antivírus para o computador funcionar mais rápido',
    ],
    answer: 1,
    explanation:
      'Atualizações corrigem falhas de segurança e desempenho, e remover programas e arquivos desnecessários libera espaço e reduz riscos.',
  },
  {
    id: 'm10-q2',
    moduleSlug: 'manutencao-e-boas-praticas',
    question: 'Um programa trava e para de responder. Qual costuma ser o primeiro passo simples para tentar resolver o problema?',
    options: [
      'Formatar o computador imediatamente',
      'Fechar o programa (ou reiniciar o computador) e tentar abri-lo novamente',
      'Comprar um computador novo',
      'Desinstalar o sistema operacional',
    ],
    answer: 1,
    explanation:
      'Fechar o programa travado ou reiniciar o computador resolve a maioria dos travamentos simples antes de se pensar em soluções mais drásticas.',
  },
]

export const COMPUTING_FINAL_EXAM_PASSING_SCORE = 14
export const COMPUTING_FINAL_EXAM_TOTAL_QUESTIONS = 20
