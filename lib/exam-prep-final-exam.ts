export type ExamQuestion = {
  id: string
  moduleSlug: string
  question: string
  options: string[]
  answer: number
  explanation: string
}

export const examPrepFinalExamQuestions: ExamQuestion[] = [
  // Hardware e Software
  {
    id: 'sim-q1',
    moduleSlug: 'hardware-e-software',
    question: 'Qual das alternativas apresenta um componente de hardware responsável por processar as instruções dos programas?',
    options: ['Sistema operacional', 'Processador (CPU)', 'Navegador de internet', 'Antivírus'],
    answer: 1,
    explanation: 'O processador (CPU) é o componente físico que executa as instruções dos programas.',
  },
  {
    id: 'sim-q2',
    moduleSlug: 'hardware-e-software',
    question: 'Diferente da memória RAM, o armazenamento em HD ou SSD é do tipo não volátil, ou seja, mantém os dados mesmo após o desligamento do computador.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. O armazenamento é não volátil, ao contrário da RAM, que perde os dados ao desligar.',
  },
  {
    id: 'sim-q3',
    moduleSlug: 'hardware-e-software',
    question: 'Um monitor de computador é classificado como um periférico de:',
    options: ['Entrada', 'Saída', 'Entrada e saída', 'Armazenamento'],
    answer: 1,
    explanation: 'O monitor exibe (entrega) informações ao usuário, sendo um periférico de saída.',
  },
  {
    id: 'sim-q4',
    moduleSlug: 'hardware-e-software',
    question: 'Softwares proprietários se caracterizam por terem o código-fonte aberto e disponível para qualquer pessoa modificar livremente.',
    options: ['Certo', 'Errado'],
    answer: 1,
    explanation: 'Errado. Softwares proprietários têm código fechado; código aberto é característica do software livre.',
  },

  // Sistemas Operacionais
  {
    id: 'sim-q5',
    moduleSlug: 'sistemas-operacionais',
    question: 'No Windows, qual atalho de teclado é utilizado para copiar um item selecionado?',
    options: ['Ctrl+V', 'Ctrl+X', 'Ctrl+C', 'Ctrl+Z'],
    answer: 2,
    explanation: 'Ctrl+C copia o item selecionado para a área de transferência.',
  },
  {
    id: 'sim-q6',
    moduleSlug: 'sistemas-operacionais',
    question: 'A extensão de arquivo ".pptx" está associada a documentos criados em qual tipo de programa?',
    options: ['Editor de texto', 'Planilha eletrônica', 'Editor de apresentações', 'Navegador de internet'],
    answer: 2,
    explanation: '.pptx é a extensão padrão de apresentações criadas no PowerPoint.',
  },
  {
    id: 'sim-q7',
    moduleSlug: 'sistemas-operacionais',
    question: 'O atalho Ctrl+Alt+Del no Windows é utilizado exclusivamente para desligar o computador imediatamente, sem outra opção disponível.',
    options: ['Certo', 'Errado'],
    answer: 1,
    explanation: 'Errado. Esse atalho abre uma tela com várias opções (bloquear, trocar de usuário, gerenciador de tarefas, entre outras), não apenas desligar.',
  },
  {
    id: 'sim-q8',
    moduleSlug: 'sistemas-operacionais',
    question: 'Distribuições Linux como Ubuntu e Mint são exemplos de sistemas operacionais de código aberto.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. O Linux e suas distribuições são projetos de código aberto (open source).',
  },

  // Editor de Texto
  {
    id: 'sim-q9',
    moduleSlug: 'editor-de-texto',
    question: 'No Microsoft Word, qual atalho de teclado aplica a formatação de itálico ao texto selecionado?',
    options: ['Ctrl+B', 'Ctrl+I', 'Ctrl+U', 'Ctrl+P'],
    answer: 1,
    explanation: 'Ctrl+I (italic) aplica a formatação de itálico ao texto selecionado.',
  },
  {
    id: 'sim-q10',
    moduleSlug: 'editor-de-texto',
    question: 'O recurso "Controlar Alterações" do Word permite apenas visualizar o documento, sem possibilidade de registrar quem fez cada modificação.',
    options: ['Certo', 'Errado'],
    answer: 1,
    explanation: 'Errado. Esse recurso registra e identifica exatamente quais modificações cada revisor fez no documento.',
  },
  {
    id: 'sim-q11',
    moduleSlug: 'editor-de-texto',
    question: 'Qual das alternativas apresenta a extensão de arquivo padrão do LibreOffice Writer?',
    options: ['.docx', '.odt', '.ods', '.pdf'],
    answer: 1,
    explanation: '.odt é o formato padrão do LibreOffice Writer.',
  },
  {
    id: 'sim-q12',
    moduleSlug: 'editor-de-texto',
    question: 'No Word, a tecla de atalho F12 abre a caixa de diálogo "Salvar Como".',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. F12 é o atalho tradicional para abrir a caixa "Salvar Como".',
  },

  // Planilhas Eletrônicas
  {
    id: 'sim-q13',
    moduleSlug: 'planilhas-eletronicas',
    question: 'Qual função do Excel é utilizada para somar os valores de um intervalo de células?',
    options: ['MÉDIA', 'SOMA', 'CONT.SE', 'SE'],
    answer: 1,
    explanation: 'A função SOMA soma os valores de um intervalo especificado.',
  },
  {
    id: 'sim-q14',
    moduleSlug: 'planilhas-eletronicas',
    question: 'Uma referência relativa em uma fórmula do Excel permanece fixa e não se altera quando a fórmula é copiada para outra célula.',
    options: ['Certo', 'Errado'],
    answer: 1,
    explanation: 'Errado. É a referência absoluta (com $) que permanece fixa; a relativa se ajusta automaticamente ao ser copiada.',
  },
  {
    id: 'sim-q15',
    moduleSlug: 'planilhas-eletronicas',
    question: 'Qual função do Excel realiza uma busca vertical em uma tabela, retornando um valor correspondente de outra coluna?',
    options: ['CONT.SE', 'MÁXIMO', 'PROCV', 'SOMA'],
    answer: 2,
    explanation: 'A função PROCV realiza busca vertical, retornando um valor correspondente de outra coluna da tabela.',
  },
  {
    id: 'sim-q16',
    moduleSlug: 'planilhas-eletronicas',
    question: 'No LibreOffice Calc, a extensão padrão de arquivo utilizada é ".ods".',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. .ods (OpenDocument Spreadsheet) é o formato padrão do LibreOffice Calc.',
  },

  // Apresentações
  {
    id: 'sim-q17',
    moduleSlug: 'apresentacoes',
    question: 'No PowerPoint, um efeito aplicado a um texto ou imagem dentro de um mesmo slide é chamado de:',
    options: ['Transição', 'Animação', 'Slide Mestre', 'Modo de Leitura'],
    answer: 1,
    explanation: 'Animações são efeitos aplicados a elementos dentro de um mesmo slide; transições ocorrem entre slides.',
  },
  {
    id: 'sim-q18',
    moduleSlug: 'apresentacoes',
    question: 'O atalho F5 no PowerPoint inicia a apresentação sempre a partir do slide atualmente selecionado, nunca do primeiro.',
    options: ['Certo', 'Errado'],
    answer: 1,
    explanation: 'Errado. F5 inicia do primeiro slide; Shift+F5 é que inicia do slide atual.',
  },
  {
    id: 'sim-q19',
    moduleSlug: 'apresentacoes',
    question: 'Qual recurso do PowerPoint permite aplicar um layout e uma formatação padrão a todos os slides de uma vez?',
    options: ['Slide Mestre', 'Modo de Classificação', 'Transições', 'Anotações do Orador'],
    answer: 0,
    explanation: 'O Slide Mestre define um layout/formatação padrão aplicado a toda a apresentação.',
  },
  {
    id: 'sim-q20',
    moduleSlug: 'apresentacoes',
    question: 'O LibreOffice Impress é o editor de apresentações equivalente ao Microsoft PowerPoint.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. O Impress é o programa de apresentações do pacote LibreOffice.',
  },

  // Internet, Navegadores e Cookies
  {
    id: 'sim-q21',
    moduleSlug: 'internet-navegadores-e-cookies',
    question: 'A navegação anônima de um navegador impede completamente que o provedor de internet identifique os sites acessados pelo usuário.',
    options: ['Certo', 'Errado'],
    answer: 1,
    explanation: 'Errado. A navegação anônima apenas evita salvar dados localmente; o provedor de internet ainda pode ver o tráfego.',
  },
  {
    id: 'sim-q22',
    moduleSlug: 'internet-navegadores-e-cookies',
    question: 'Qual recurso do navegador é responsável por armazenar temporariamente arquivos de páginas para acelerar carregamentos futuros?',
    options: ['Cookie', 'Extensão', 'Cache', 'Favorito'],
    answer: 2,
    explanation: 'O cache armazena arquivos temporários para acelerar o carregamento de páginas já visitadas.',
  },
  {
    id: 'sim-q23',
    moduleSlug: 'internet-navegadores-e-cookies',
    question: 'O protocolo HTTPS utiliza criptografia para proteger a comunicação entre o navegador e o servidor.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. O "S" de HTTPS indica o uso de criptografia (SSL/TLS) na comunicação.',
  },
  {
    id: 'sim-q24',
    moduleSlug: 'internet-navegadores-e-cookies',
    question: 'Cookies são exemplos de:',
    options: ['Programas executáveis', 'Vírus de computador', 'Pequenos arquivos de texto', 'Protocolos de rede'],
    answer: 2,
    explanation: 'Cookies são pequenos arquivos de texto, sem capacidade de execução de código.',
  },

  // Correio Eletrônico e Protocolos
  {
    id: 'sim-q25',
    moduleSlug: 'correio-eletronico-e-protocolos',
    question: 'Qual protocolo é utilizado para o ENVIO de mensagens de correio eletrônico?',
    options: ['POP3', 'IMAP', 'SMTP', 'FTP'],
    answer: 2,
    explanation: 'SMTP é o protocolo padrão de envio de e-mails.',
  },
  {
    id: 'sim-q26',
    moduleSlug: 'correio-eletronico-e-protocolos',
    question: 'O protocolo IMAP mantém as mensagens sincronizadas no servidor, permitindo acesso de múltiplos dispositivos.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. O IMAP mantém as mensagens no servidor, permitindo acesso sincronizado de vários dispositivos.',
  },
  {
    id: 'sim-q27',
    moduleSlug: 'correio-eletronico-e-protocolos',
    question: 'No campo "Cco" (cópia oculta) de um e-mail, o destinatário incluído:',
    options: [
      'Não recebe a mensagem',
      'Recebe a mensagem, mas seu endereço não é visto pelos demais destinatários',
      'Tem seu endereço visível para todos os destinatários',
      'Só pode ser incluído se o campo "Para" estiver vazio',
    ],
    answer: 1,
    explanation: 'O destinatário em Cco recebe o e-mail normalmente, mas seu endereço fica oculto para os demais.',
  },
  {
    id: 'sim-q28',
    moduleSlug: 'correio-eletronico-e-protocolos',
    question: 'O protocolo POP3, diferente do IMAP, tipicamente baixa as mensagens para o dispositivo local e as remove do servidor.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. Essa é justamente a diferença clássica entre POP3 e IMAP cobrada em prova.',
  },

  // Redes de Computadores
  {
    id: 'sim-q29',
    moduleSlug: 'redes-de-computadores',
    question: 'A internet é o exemplo mais conhecido de rede do tipo:',
    options: ['LAN', 'WAN', 'PAN', 'MAN'],
    answer: 1,
    explanation: 'A internet é uma rede WAN (Wide Area Network), de abrangência mundial.',
  },
  {
    id: 'sim-q30',
    moduleSlug: 'redes-de-computadores',
    question: 'O protocolo IPv6 foi criado principalmente para aumentar a velocidade de conexão à internet.',
    options: ['Certo', 'Errado'],
    answer: 1,
    explanation: 'Errado. O IPv6 foi criado principalmente para resolver o esgotamento de endereços do IPv4.',
  },
  {
    id: 'sim-q31',
    moduleSlug: 'redes-de-computadores',
    question: 'No modelo cliente-servidor, quem centraliza e disponibiliza recursos para os demais computadores da rede é o:',
    options: ['Cliente', 'Roteador', 'Servidor', 'Firewall'],
    answer: 2,
    explanation: 'O servidor centraliza recursos e os disponibiliza aos clientes conectados à rede.',
  },
  {
    id: 'sim-q32',
    moduleSlug: 'redes-de-computadores',
    question: 'Redes Wi-Fi protegidas por WPA2 ou WPA3 exigem autenticação por senha para conexão.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. WPA2 e WPA3 são protocolos de segurança que exigem autenticação por senha.',
  },

  // Segurança da Informação
  {
    id: 'sim-q33',
    moduleSlug: 'seguranca-da-informacao-concursos',
    question: 'Qual tipo de malware se propaga automaticamente pela rede, sem depender de um programa hospedeiro?',
    options: ['Vírus', 'Worm', 'Trojan', 'Spyware'],
    answer: 1,
    explanation: 'O worm se propaga sozinho pela rede, diferente do vírus, que precisa de um hospedeiro.',
  },
  {
    id: 'sim-q34',
    moduleSlug: 'seguranca-da-informacao-concursos',
    question: 'O backup incremental copia apenas os dados alterados desde o último backup completo, ignorando backups incrementais anteriores.',
    options: ['Certo', 'Errado'],
    answer: 1,
    explanation: 'Errado. Essa é a descrição do backup diferencial. O incremental considera o último backup de qualquer tipo.',
  },
  {
    id: 'sim-q35',
    moduleSlug: 'seguranca-da-informacao-concursos',
    question: 'Um firewall tem como função principal:',
    options: [
      'Remover vírus já instalados',
      'Filtrar o tráfego de rede com base em regras de segurança',
      'Realizar backups automáticos',
      'Criptografar arquivos no disco',
    ],
    answer: 1,
    explanation: 'O firewall controla e filtra o tráfego de rede conforme regras de segurança definidas.',
  },
  {
    id: 'sim-q36',
    moduleSlug: 'seguranca-da-informacao-concursos',
    question: 'Um malware que criptografa arquivos e exige pagamento de resgate é chamado de ransomware.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. Ransomware sequestra/criptografa arquivos e exige resgate para restaurar o acesso.',
  },

  // Computação em Nuvem
  {
    id: 'sim-q37',
    moduleSlug: 'computacao-em-nuvem-concursos',
    question: 'O modelo de serviço em nuvem que entrega um software pronto para uso, como o Gmail, é chamado de:',
    options: ['IaaS', 'PaaS', 'SaaS', 'DaaS'],
    answer: 2,
    explanation: 'SaaS (Software as a Service) entrega o software já pronto para uso, como o Gmail.',
  },
  {
    id: 'sim-q38',
    moduleSlug: 'computacao-em-nuvem-concursos',
    question: 'Uma das principais desvantagens da computação em nuvem é a dependência de conexão à internet.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. Sem internet, geralmente não é possível acessar dados/serviços armazenados na nuvem.',
  },
  {
    id: 'sim-q39',
    moduleSlug: 'computacao-em-nuvem-concursos',
    question: 'O modelo de nuvem que fornece servidores virtuais e infraestrutura sob demanda é chamado de:',
    options: ['SaaS', 'PaaS', 'IaaS', 'FaaS'],
    answer: 2,
    explanation: 'IaaS (Infrastructure as a Service) fornece infraestrutura de computação sob demanda.',
  },
  {
    id: 'sim-q40',
    moduleSlug: 'computacao-em-nuvem-concursos',
    question: 'O Google Drive e o OneDrive são exemplos de serviços de armazenamento em nuvem.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. Ambos são serviços populares de armazenamento em nuvem.',
  },

  // Noções de Banco de Dados
  {
    id: 'sim-q41',
    moduleSlug: 'nocoes-de-banco-de-dados',
    question: 'O elemento que identifica de forma única cada registro de uma tabela em um banco de dados relacional é a:',
    options: ['Chave estrangeira', 'Chave primária', 'Consulta SQL', 'View'],
    answer: 1,
    explanation: 'A chave primária identifica de forma única cada registro de uma tabela.',
  },
  {
    id: 'sim-q42',
    moduleSlug: 'nocoes-de-banco-de-dados',
    question: 'MySQL, PostgreSQL e Oracle são exemplos de Sistemas Gerenciadores de Banco de Dados (SGBD).',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. Todos são softwares SGBD amplamente utilizados.',
  },
  {
    id: 'sim-q43',
    moduleSlug: 'nocoes-de-banco-de-dados',
    question: 'Vídeos, imagens e e-mails são geralmente classificados como dados:',
    options: ['Estruturados', 'Relacionais', 'Não estruturados', 'Indexados'],
    answer: 2,
    explanation: 'Esses tipos de arquivo não seguem um formato pré-definido de tabela, sendo dados não estruturados.',
  },
  {
    id: 'sim-q44',
    moduleSlug: 'nocoes-de-banco-de-dados',
    question: 'A chave estrangeira em um banco de dados relacional serve para referenciar a chave primária de outra tabela, criando um relacionamento entre elas.',
    options: ['Certo', 'Errado'],
    answer: 0,
    explanation: 'Correto. Essa é justamente a função da chave estrangeira: relacionar tabelas entre si.',
  },
]

export const EXAM_PREP_FINAL_EXAM_PASSING_SCORE = 31
export const EXAM_PREP_FINAL_EXAM_TOTAL_QUESTIONS = 44
