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
  video?: { youtubeId: string; title: string }
  lessons: CourseLesson[]
}

export const computingCourseModules: CourseModule[] = [
  {
    slug: 'introducao-a-informatica',
    title: 'Introdução à Informática',
    description:
      'Entenda o que é um computador, suas partes principais e como hardware e software trabalham juntos no dia a dia.',
    video: {
      youtubeId: 'GLcZsyTh-T8',
      title: 'A verdade sobre gabinete aberto: componentes do computador',
    },
    lessons: [
      {
        slug: 'o-que-e-um-computador',
        title: 'O que é um computador e para que serve',
        duration: '30 min',
        summary:
          'Antes de usar qualquer programa, é importante entender o que é um computador e como ele processa informações. Este é o primeiro passo para perder o medo da tecnologia e ganhar confiança no dia a dia.',
        objectives: [
          'Explicar com suas próprias palavras o que é um computador.',
          'Reconhecer os tipos mais comuns de computador usados no dia a dia.',
        ],
        keyPoints: [
          {
            title: 'Um computador é uma máquina de processar informação',
            description:
              'De forma simples, um computador recebe informações (entrada), processa essas informações seguindo instruções e mostra um resultado (saída). Quando você digita um texto, o computador guarda essa informação; quando você aperta "imprimir", ele processa o pedido e envia para a impressora.',
          },
          {
            title: 'Tipos de computador no dia a dia',
            description:
              'Computador de mesa (desktop), notebook, tablet e até o celular são todos tipos de computador, cada um com um formato e um uso mais indicado. Um desktop costuma ser mais barato e potente para casa ou escritório fixo, enquanto notebook e celular priorizam mobilidade.',
          },
          {
            title: 'Para que serve um computador',
            description:
              'Um computador ajuda a escrever documentos, pesquisar informações, se comunicar, fazer contas, guardar fotos, estudar e trabalhar. Praticamente qualquer tarefa que envolva organizar, calcular ou comunicar informação pode ser feita com a ajuda de um computador.',
          },
        ],
        activity: {
          title: 'Reconhecendo computadores ao seu redor',
          steps: [
            'Liste três aparelhos que você usa no dia a dia e que também são computadores (por exemplo, celular, caixa eletrônico, smart TV).',
            'Para cada um, escreva uma tarefa que ele processa (entrada) e um resultado que ele mostra (saída).',
            'Escreva, em uma frase, o que você mais espera aprender neste curso.',
          ],
        },
        quiz: {
          question: 'Qual das opções abaixo é a melhor definição de computador?',
          options: [
            'Um aparelho que serve apenas para acessar a internet',
            'Uma máquina que recebe, processa e mostra informações',
            'Um programa instalado dentro do celular',
            'Um tipo de impressora avançada',
          ],
          answer: 1,
          explanation:
            'O computador recebe dados de entrada, processa essas informações seguindo instruções e apresenta um resultado de saída; essa é sua função central.',
        },
        reference: {
          label: 'Microsoft — Central de Ajuda do Windows',
          href: 'https://support.microsoft.com/pt-br/windows',
        },
      },
      {
        slug: 'hardware-partes-fisicas',
        title: 'Hardware: as partes físicas do computador',
        duration: '35 min',
        summary:
          'Hardware é tudo aquilo que você pode tocar em um computador: tela, teclado, mouse, gabinete e cabos. Conhecer o nome e a função de cada parte ajuda a usar o equipamento com mais segurança e a pedir ajuda técnica corretamente quando algo dá errado.',
        objectives: [
          'Identificar as principais partes físicas de um computador.',
          'Explicar a função básica de processador, memória e armazenamento.',
        ],
        keyPoints: [
          {
            title: 'Periféricos de entrada e saída',
            description:
              'Teclado, mouse e microfone são periféricos de entrada, pois enviam informação para o computador. Monitor, caixa de som e impressora são periféricos de saída, pois mostram ou entregam o resultado do processamento.',
          },
          {
            title: 'Processador e memória',
            description:
              'O processador (CPU) é como o "cérebro" do computador, responsável por executar as instruções dos programas. A memória RAM guarda temporariamente as informações que estão em uso; quanto mais programas abertos ao mesmo tempo, mais memória é necessária.',
          },
          {
            title: 'Armazenamento',
            description:
              'O armazenamento (HD ou SSD) guarda os arquivos e programas mesmo quando o computador é desligado, diferente da memória RAM. O SSD é mais rápido e resistente que o HD tradicional, mas ambos cumprem a mesma função de guardar dados permanentemente.',
          },
        ],
        activity: {
          title: 'Tour pelo seu computador',
          steps: [
            'Observe o computador ou notebook que você usa e aponte fisicamente teclado, mouse, tela e caixas de som.',
            'Descubra, nas configurações do sistema, quanta memória RAM e quanto espaço de armazenamento seu equipamento possui.',
            'Escreva uma frase explicando, com suas palavras, a diferença entre memória RAM e armazenamento.',
          ],
        },
        quiz: {
          question:
            'O que acontece quando você guarda um arquivo no armazenamento (HD ou SSD) do computador?',
          options: [
            'O arquivo desaparece ao desligar o computador',
            'O arquivo permanece salvo mesmo depois de desligar o computador',
            'O arquivo é apagado automaticamente após uma hora',
            'O arquivo só existe enquanto o programa está aberto',
          ],
          answer: 1,
          explanation:
            'Diferente da memória RAM, o armazenamento (HD ou SSD) mantém os arquivos salvos mesmo quando o computador é desligado.',
        },
        reference: {
          label: 'Microsoft — Central de Ajuda do Windows',
          href: 'https://support.microsoft.com/pt-br/windows',
        },
      },
      {
        slug: 'software-sistema-operacional-e-programas',
        title: 'Software: sistema operacional e programas',
        duration: '35 min',
        summary:
          'Software é a parte "invisível" do computador: instruções que fazem o hardware funcionar. Entender a diferença entre sistema operacional e programas ajuda você a se localizar em qualquer computador, mesmo um que nunca usou antes.',
        objectives: [
          'Diferenciar sistema operacional de programas (aplicativos).',
          'Reconhecer os sistemas operacionais mais comuns.',
        ],
        keyPoints: [
          {
            title: 'O que é software',
            description:
              'Software é um conjunto de instruções escritas por programadores que diz ao hardware o que fazer. Diferente do hardware, o software não pode ser tocado fisicamente, mas você o vê na tela na forma de janelas, ícones e menus.',
          },
          {
            title: 'Sistema operacional',
            description:
              'O sistema operacional é o software principal, responsável por organizar tudo o que acontece no computador, como abrir programas, gerenciar arquivos e conectar à internet. Windows, macOS e Linux são exemplos de sistemas operacionais para computadores; Android e iOS são exemplos para celulares.',
          },
          {
            title: 'Programas e aplicativos',
            description:
              'Programas (ou aplicativos) são instalados dentro do sistema operacional para tarefas específicas, como editor de texto, navegador de internet ou planilha. Alguns programas já vêm instalados de fábrica e outros precisam ser baixados de uma loja oficial ou do site do fabricante.',
          },
        ],
        activity: {
          title: 'Mapeando o software do seu computador',
          steps: [
            'Descubra qual é o sistema operacional do computador que você usa e a versão instalada.',
            'Liste cinco programas ou aplicativos que já estão instalados nesse computador.',
            'Separe essa lista em "programas que uso toda semana" e "programas que nunca usei".',
          ],
        },
        quiz: {
          question:
            'Qual é a principal diferença entre sistema operacional e um programa como um editor de texto?',
          options: [
            'Não existe diferença, são a mesma coisa',
            'O sistema operacional organiza o computador como um todo; o programa executa uma tarefa específica',
            'O programa sempre vem antes do sistema operacional',
            'Sistema operacional é hardware e programa é software',
          ],
          answer: 1,
          explanation:
            'O sistema operacional gerencia o computador de forma geral (arquivos, memória, conexões), enquanto um programa como o editor de texto cumpre uma função específica dentro desse ambiente.',
        },
        reference: {
          label: 'Microsoft — Central de Ajuda do Windows',
          href: 'https://support.microsoft.com/pt-br/windows',
        },
      },
    ],
  },
  {
    slug: 'sistema-operacional',
    title: 'Usando o Sistema Operacional',
    description:
      'Aprenda a navegar pela área de trabalho, controlar janelas com atalhos de teclado e ajustar as configurações básicas do sistema.',
    video: {
      youtubeId: 'GgKqk88OwH8',
      title: 'Como deixar a área de trabalho do Windows mais bonita',
    },
    lessons: [
      {
        slug: 'area-de-trabalho-icones-barra-de-tarefas',
        title: 'Área de trabalho, ícones e barra de tarefas',
        duration: '30 min',
        summary:
          'A área de trabalho é a "mesa" onde você organiza atalhos e vê a barra de tarefas com os programas abertos. Dominar esse espaço é o primeiro passo para se sentir confortável usando qualquer computador.',
        objectives: [
          'Reconhecer os elementos principais da área de trabalho.',
          'Organizar ícones e usar a barra de tarefas para alternar entre programas.',
        ],
        keyPoints: [
          {
            title: 'Área de trabalho e ícones',
            description:
              'A área de trabalho é a tela inicial que aparece depois de ligar o computador. Os ícones são pequenos desenhos que representam programas, pastas ou arquivos; clicar duas vezes (ou uma vez, dependendo do sistema) abre o item.',
          },
          {
            title: 'Barra de tarefas',
            description:
              'A barra de tarefas geralmente fica na parte inferior da tela e mostra os programas abertos no momento, além de um botão para acessar todos os programas instalados. Ela permite alternar rapidamente entre janelas sem precisar fechar o que já está aberto.',
          },
          {
            title: 'Área de notificações e relógio',
            description:
              'Em um canto da barra de tarefas fica a área de notificações, com ícones de rede Wi-Fi, volume, bateria e data e hora. É ali que você confirma se está conectado à internet e recebe avisos do sistema.',
          },
        ],
        activity: {
          title: 'Explorando sua área de trabalho',
          steps: [
            'Identifique na tela do seu computador a área de trabalho, a barra de tarefas e a área de notificações.',
            'Abra dois programas diferentes e pratique alternar entre eles clicando na barra de tarefas.',
            'Organize os ícones da área de trabalho agrupando os que você mais usa em um canto.',
          ],
        },
        quiz: {
          question: 'Para alternar rapidamente entre dois programas já abertos, o que você deve usar?',
          options: ['A área de notificações', 'A barra de tarefas', 'O ícone da lixeira', 'O papel de parede'],
          answer: 1,
          explanation:
            'A barra de tarefas mostra os programas abertos no momento e permite alternar entre eles com um clique.',
        },
        reference: {
          label: 'Microsoft — Central de Ajuda do Windows',
          href: 'https://support.microsoft.com/pt-br/windows',
        },
      },
      {
        slug: 'janelas-menus-atalhos-de-teclado',
        title: 'Janelas, menus e atalhos de teclado',
        duration: '40 min',
        summary:
          'Todo programa abre dentro de uma janela que pode ser movida, redimensionada ou fechada. Conhecer os botões básicos e alguns atalhos de teclado torna o uso do computador muito mais rápido.',
        objectives: [
          'Controlar janelas (abrir, minimizar, maximizar e fechar).',
          'Usar pelo menos cinco atalhos de teclado do dia a dia.',
        ],
        keyPoints: [
          {
            title: 'Controlando janelas',
            description:
              'No canto superior de cada janela existem botões para minimizar (esconder), maximizar (ocupar a tela toda) e fechar o programa. Arrastando a borda da janela com o mouse, também é possível deixá-la maior ou menor.',
          },
          {
            title: 'Menus do programa',
            description:
              'A maioria dos programas tem uma barra de menus ou um conjunto de ícones no topo, com opções como "Arquivo", "Editar" e "Ajuda". É ali que ficam comandos importantes como salvar, imprimir e desfazer uma ação.',
          },
          {
            title: 'Atalhos de teclado essenciais',
            description:
              'Atalhos combinam teclas para executar uma ação sem usar o mouse, economizando tempo. Alguns dos mais úteis são Ctrl+C (copiar), Ctrl+V (colar), Ctrl+Z (desfazer), Ctrl+S (salvar) e Alt+Tab (alternar entre janelas).',
          },
        ],
        activity: {
          title: 'Praticando atalhos',
          steps: [
            'Abra um programa de texto simples e digite uma frase qualquer.',
            'Pratique selecionar o texto e usar Ctrl+C e Ctrl+V para copiar e colar.',
            'Use Alt+Tab para alternar entre duas janelas abertas e Ctrl+Z para desfazer uma alteração.',
          ],
        },
        quiz: {
          question:
            'Qual atalho de teclado é usado para desfazer a última ação em quase todos os programas?',
          options: ['Ctrl+P', 'Ctrl+Z', 'Ctrl+X', 'Ctrl+B'],
          answer: 1,
          explanation:
            'Ctrl+Z é o atalho padrão para desfazer a última ação na grande maioria dos programas de computador.',
        },
        reference: {
          label: 'Microsoft — Central de Ajuda do Windows',
          href: 'https://support.microsoft.com/pt-br/windows',
        },
      },
      {
        slug: 'configuracoes-basicas-do-sistema',
        title: 'Configurações básicas do sistema',
        duration: '35 min',
        summary:
          'O painel de configurações permite ajustar volume, brilho, Wi-Fi, idioma e outras preferências do computador. Saber onde encontrar essas opções evita depender de outra pessoa para pequenos ajustes.',
        objectives: [
          'Localizar o painel de configurações do sistema.',
          'Ajustar volume, brilho, rede e data/hora com autonomia.',
        ],
        keyPoints: [
          {
            title: 'Onde encontrar as configurações',
            description:
              'A maioria dos sistemas tem um único lugar central de configurações, geralmente acessado por um ícone de engrenagem no menu iniciar ou na barra de tarefas. Ali ficam opções organizadas por categorias, como Sistema, Rede, Contas e Personalização.',
          },
          {
            title: 'Ajustes do dia a dia',
            description:
              'Volume, brilho da tela, conexão Wi-Fi e modo avião costumam ter atalhos rápidos na área de notificações, sem precisar abrir o painel completo. Isso é útil para ajustes rápidos durante o uso normal do computador.',
          },
          {
            title: 'Contas de usuário',
            description:
              'Um computador pode ter mais de uma conta de usuário, cada uma com seus próprios arquivos e preferências. Isso é importante quando o computador é compartilhado entre várias pessoas da casa ou do trabalho.',
          },
        ],
        activity: {
          title: 'Ajustando preferências',
          steps: [
            'Abra o painel de configurações do seu computador e localize a seção de rede e a de vídeo/tela.',
            'Ajuste o brilho da tela e o volume do som para um nível confortável.',
            'Confirme se a data e a hora do sistema estão corretas e corrija se necessário.',
          ],
        },
        quiz: {
          question:
            'Onde normalmente você encontra as opções para ajustar Wi-Fi, volume e brilho de forma centralizada?',
          options: [
            'No painel ou central de configurações do sistema',
            'Somente dentro do navegador de internet',
            'Apenas formatando o computador',
            'No gerenciador de arquivos',
          ],
          answer: 0,
          explanation:
            'O painel de configurações reúne, em categorias organizadas, os principais ajustes do sistema, incluindo rede, som e tela.',
        },
        reference: {
          label: 'Microsoft — Central de Ajuda do Windows',
          href: 'https://support.microsoft.com/pt-br/windows',
        },
      },
    ],
  },
  {
    slug: 'arquivos-e-pastas',
    title: 'Arquivos e Pastas',
    description:
      'Aprenda a organizar seus documentos em pastas, manipular arquivos com segurança e fazer cópias de backup simples.',
    video: {
      youtubeId: 'posSwdbk1jU',
      title: 'Como criar uma pasta no Windows para salvar arquivos',
    },
    lessons: [
      {
        slug: 'criando-e-organizando-pastas',
        title: 'Criando e organizando pastas',
        duration: '35 min',
        summary:
          'Pastas funcionam como gavetas que ajudam a organizar arquivos por assunto, evitando perder documentos importantes. Uma boa organização economiza tempo de busca no futuro.',
        objectives: [
          'Criar pastas e subpastas com nomes claros.',
          'Organizar arquivos existentes em uma estrutura lógica.',
        ],
        keyPoints: [
          {
            title: 'O que é uma pasta',
            description:
              'Uma pasta é um espaço para guardar e organizar arquivos relacionados, parecido com uma pasta de papel física. Dentro de uma pasta você pode colocar outras pastas (subpastas) para criar categorias mais específicas.',
          },
          {
            title: 'Criando uma pasta nova',
            description:
              'Para criar uma pasta, geralmente basta clicar com o botão direito do mouse em um espaço vazio e escolher a opção "Nova pasta". Em seguida, dê um nome claro e específico, como "Contas 2026" em vez de "Nova pasta 1".',
          },
          {
            title: 'Estrutura lógica de organização',
            description:
              'Uma boa estrutura agrupa arquivos por assunto (Trabalho, Família, Estudos) e, dentro de cada assunto, por data ou projeto. Evite deixar tudo solto na área de trabalho, pois isso dificulta encontrar arquivos depois.',
          },
        ],
        activity: {
          title: 'Organizando suas primeiras pastas',
          steps: [
            'Crie uma pasta principal chamada "Meus Documentos 2026" e três subpastas dentro dela.',
            'Dê nomes específicos para cada subpasta, de acordo com assuntos da sua vida (por exemplo, Trabalho, Família, Cursos).',
            'Mova um arquivo existente do computador para a subpasta correta.',
          ],
        },
        quiz: {
          question: 'Qual é a melhor prática ao nomear uma pasta nova?',
          options: [
            'Deixar o nome padrão "Nova pasta"',
            'Usar um nome claro e específico sobre o conteúdo',
            'Usar apenas números aleatórios',
            'Nomear todas as pastas da mesma forma',
          ],
          answer: 1,
          explanation:
            'Um nome claro e específico facilita encontrar o conteúdo da pasta rapidamente no futuro, sem precisar abrir cada uma para conferir.',
        },
        reference: {
          label: 'Microsoft — Central de Ajuda do Windows',
          href: 'https://support.microsoft.com/pt-br/windows',
        },
      },
      {
        slug: 'copiar-mover-renomear-excluir-arquivos',
        title: 'Copiar, mover, renomear e excluir arquivos',
        duration: '35 min',
        summary:
          'Manipular arquivos corretamente evita perda de dados e duplicações desnecessárias. Estas são as operações mais usadas no dia a dia de qualquer computador.',
        objectives: [
          'Copiar e mover arquivos entre pastas com segurança.',
          'Renomear e excluir arquivos sem apagar informações por engano.',
        ],
        keyPoints: [
          {
            title: 'Copiar versus mover',
            description:
              'Copiar cria uma segunda versão do arquivo, mantendo o original no lugar; mover transfere o arquivo para outro local, sem deixar cópia no lugar original. Usar Ctrl+C copia e Ctrl+X recorta (para depois mover com Ctrl+V).',
          },
          {
            title: 'Renomeando um arquivo',
            description:
              'Para renomear, clique com o botão direito sobre o arquivo e escolha "Renomear", ou selecione o arquivo e pressione a tecla F2. Evite usar caracteres especiais como / ou * no nome, pois alguns sistemas não aceitam.',
          },
          {
            title: 'Excluindo com segurança',
            description:
              'Ao excluir um arquivo, ele normalmente vai para a Lixeira antes de ser apagado definitivamente, funcionando como uma rede de segurança. É importante verificar o conteúdo da Lixeira antes de esvaziá-la, pois depois disso a recuperação fica muito mais difícil.',
          },
        ],
        activity: {
          title: 'Praticando operações com arquivos',
          steps: [
            'Crie um arquivo de texto simples e copie-o para outra pasta usando Ctrl+C e Ctrl+V.',
            'Renomeie a cópia com um nome diferente do original.',
            'Exclua um arquivo de teste e depois verifique se ele está na Lixeira.',
          ],
        },
        quiz: {
          question: 'Qual é a diferença entre copiar e mover um arquivo?',
          options: [
            'Não há diferença, o resultado é sempre o mesmo',
            'Copiar mantém o original e cria uma cópia; mover transfere sem deixar cópia',
            'Mover sempre apaga o arquivo definitivamente',
            'Copiar só funciona dentro da mesma pasta',
          ],
          answer: 1,
          explanation:
            'Copiar duplica o arquivo, mantendo o original no lugar de origem, enquanto mover apenas transfere o arquivo para outro local, sem duplicá-lo.',
        },
        reference: {
          label: 'Microsoft — Central de Ajuda do Windows',
          href: 'https://support.microsoft.com/pt-br/windows',
        },
      },
      {
        slug: 'pen-drive-hd-externo-e-backup-simples',
        title: 'Pen drive, HD externo e backup simples',
        duration: '40 min',
        summary:
          'Guardar cópias importantes fora do computador principal protege você contra perda de arquivos por falha do equipamento, roubo ou erro humano. Pen drives e HDs externos são formas simples e baratas de começar.',
        objectives: [
          'Usar um pen drive ou HD externo para copiar arquivos com segurança.',
          'Aplicar uma rotina simples de backup dos arquivos mais importantes.',
        ],
        keyPoints: [
          {
            title: 'O que são dispositivos externos de armazenamento',
            description:
              'Pen drive e HD externo são pequenos dispositivos que se conectam ao computador (geralmente por USB) e permitem guardar cópias de arquivos fora do computador principal. Eles são úteis para transportar arquivos e para guardar backups.',
          },
          {
            title: 'Removendo com segurança',
            description:
              'Antes de desconectar um pen drive ou HD externo, é importante usar a opção "Ejetar" ou "Remover com segurança" oferecida pelo sistema. Retirar o dispositivo sem essa etapa pode corromper arquivos que ainda estavam sendo gravados.',
          },
          {
            title: 'Backup simples',
            description:
              'Backup é uma cópia extra de arquivos importantes, guardada em um lugar diferente do original, para o caso de perda, roubo ou falha do computador. Uma rotina simples pode ser copiar fotos e documentos importantes para um pen drive uma vez por mês.',
          },
        ],
        activity: {
          title: 'Fazendo seu primeiro backup',
          steps: [
            'Conecte um pen drive ou HD externo ao computador.',
            'Copie para o dispositivo uma pasta com arquivos que você não gostaria de perder.',
            'Use a opção "Remover com segurança" antes de desconectar o dispositivo.',
          ],
        },
        quiz: {
          question: 'Por que é importante usar "Remover com segurança" antes de desconectar um pen drive?',
          options: [
            'Para deixar o pen drive mais rápido',
            'Para evitar corromper arquivos que ainda estavam sendo gravados',
            'Porque é obrigatório por lei',
            'Para apagar o conteúdo automaticamente',
          ],
          answer: 1,
          explanation:
            'Retirar o dispositivo sem finalizar a gravação pode corromper arquivos, especialmente se algum processo de cópia ainda não terminou.',
        },
        reference: {
          label: 'Microsoft — Central de Ajuda do Windows',
          href: 'https://support.microsoft.com/pt-br/windows',
        },
      },
    ],
  },
  {
    slug: 'internet-e-navegador',
    title: 'Internet e Navegador',
    description:
      'Entenda como a internet funciona, navegue com segurança e aprenda a pesquisar informações de forma eficiente.',
    video: {
      youtubeId: 'kjj5pwjh_SQ',
      title: 'Como adicionar um site na barra de favoritos do navegador',
    },
    lessons: [
      {
        slug: 'como-funciona-a-internet',
        title: 'Como funciona a internet',
        duration: '30 min',
        summary:
          'A internet é uma rede mundial que conecta computadores para trocar informações. Entender o básico de como ela funciona ajuda a usar navegadores, sites e aplicativos com mais confiança.',
        objectives: [
          'Explicar de forma simples o que é a internet.',
          'Diferenciar navegador, site e mecanismo de busca.',
        ],
        keyPoints: [
          {
            title: 'Rede de computadores conectados',
            description:
              'A internet conecta milhões de computadores e servidores ao redor do mundo, permitindo que informações sejam trocadas em segundos. Quando você acessa um site, seu computador "conversa" com outro computador (servidor) que guarda aquele conteúdo.',
          },
          {
            title: 'Navegador de internet',
            description:
              'O navegador é o programa usado para acessar sites, como Google Chrome, Microsoft Edge ou Mozilla Firefox. Ele traduz o código dos sites em páginas visuais que você consegue ler e clicar.',
          },
          {
            title: 'Endereço de site e mecanismo de busca',
            description:
              'Cada site tem um endereço único, chamado URL, que geralmente começa com "www" ou "https://". Quando você não sabe o endereço exato, pode usar um mecanismo de busca, como o Google, para encontrar o site desejado.',
          },
        ],
        activity: {
          title: 'Primeiros passos no navegador',
          steps: [
            'Abra o navegador instalado no seu computador e identifique a barra de endereços.',
            'Digite o endereço de um site conhecido diretamente na barra de endereços.',
            'Em seguida, pesquise o mesmo assunto usando um mecanismo de busca e compare os resultados.',
          ],
        },
        quiz: {
          question: 'Qual é a função principal de um navegador de internet?',
          options: [
            'Guardar arquivos no computador',
            'Acessar e exibir páginas da internet',
            'Formatar o computador',
            'Enviar mensagens de texto pelo celular',
          ],
          answer: 1,
          explanation:
            'O navegador é o programa responsável por buscar e exibir o conteúdo de sites na internet de forma visual e organizada.',
        },
        reference: {
          label: 'Google Chrome — Central de Ajuda',
          href: 'https://support.google.com/chrome/',
        },
      },
      {
        slug: 'navegando-com-seguranca',
        title: 'Navegando com segurança (abas, favoritos, downloads)',
        duration: '40 min',
        summary:
          'Usar abas, favoritos e downloads corretamente torna a navegação mais organizada e reduz o risco de cair em páginas perigosas. Pequenos hábitos fazem grande diferença na segurança do dia a dia.',
        objectives: [
          'Usar abas e favoritos para organizar a navegação.',
          'Baixar arquivos de fontes confiáveis com segurança.',
        ],
        keyPoints: [
          {
            title: 'Abas do navegador',
            description:
              'Uma aba permite abrir vários sites ao mesmo tempo dentro de uma única janela do navegador, sem precisar abrir um programa novo para cada página. Isso facilita comparar informações e voltar rapidamente a uma página anterior.',
          },
          {
            title: 'Favoritos',
            description:
              'Favoritos são atalhos salvos para sites que você visita com frequência, como banco, e-mail e redes sociais. Acessar um site pelos favoritos é mais seguro do que clicar em links recebidos por mensagem, pois evita cair em páginas falsas.',
          },
          {
            title: 'Downloads seguros',
            description:
              'Baixe programas e arquivos apenas de sites oficiais ou lojas de aplicativos reconhecidas, nunca de anúncios ou links duvidosos. Antes de abrir um arquivo baixado, verifique se a extensão e a origem fazem sentido com o que você esperava.',
          },
        ],
        activity: {
          title: 'Organizando a navegação',
          steps: [
            'Abra três abas diferentes no navegador e pratique alternar entre elas.',
            'Adicione aos favoritos dois ou três sites que você usa com frequência.',
            'Baixe um arquivo de um site oficial e localize onde ele foi salvo no computador.',
          ],
        },
        quiz: {
          question: 'Qual é a forma mais segura de acessar o site do seu banco?',
          options: [
            'Clicar em um link recebido por mensagem',
            'Digitar o endereço manualmente ou usar um favorito salvo por você',
            'Pesquisar "banco" e clicar no primeiro anúncio',
            'Usar o link enviado por um desconhecido',
          ],
          answer: 1,
          explanation:
            'Digitar o endereço diretamente ou usar um favorito salvo por você reduz o risco de acessar uma página falsa criada por golpistas.',
        },
        reference: {
          label: 'Google Chrome — Central de Ajuda',
          href: 'https://support.google.com/chrome/',
        },
      },
      {
        slug: 'pesquisando-informacoes-com-eficiencia',
        title: 'Pesquisando informações com eficiência',
        duration: '35 min',
        summary:
          'Saber pesquisar bem economiza tempo e ajuda a encontrar informações confiáveis em meio a tanto conteúdo disponível na internet. Pequenos ajustes na forma de pesquisar melhoram muito os resultados.',
        objectives: [
          'Usar palavras-chave eficientes em mecanismos de busca.',
          'Avaliar a confiabilidade das informações encontradas.',
        ],
        keyPoints: [
          {
            title: 'Palavras-chave certas',
            description:
              'Em vez de digitar uma pergunta inteira, use palavras-chave diretas relacionadas ao que você procura, como "previsão do tempo São Paulo" em vez de uma frase longa. Isso ajuda o mecanismo de busca a entender melhor sua intenção.',
          },
          {
            title: 'Refinando a pesquisa',
            description:
              'Se os resultados não forem úteis, tente palavras diferentes, adicione o nome de uma cidade, data ou categoria, ou use aspas para buscar uma frase exata. A maioria dos buscadores também oferece filtros, como imagens, notícias ou período de tempo.',
          },
          {
            title: 'Avaliando fontes confiáveis',
            description:
              'Prefira sites oficiais, de instituições reconhecidas ou de veículos de notícia estabelecidos, em vez de páginas desconhecidas sem identificação de autor. Desconfie de resultados com muitos erros de português, promessas exageradas ou pedidos de dados pessoais.',
          },
        ],
        activity: {
          title: 'Praticando pesquisas melhores',
          steps: [
            'Escolha um assunto do seu interesse e pesquise usando uma frase longa e depois usando apenas palavras-chave.',
            'Compare os resultados e identifique qual pesquisa trouxe informações mais úteis.',
            'Escolha três resultados e avalie se a fonte parece confiável, explicando por quê.',
          ],
        },
        quiz: {
          question: 'Qual é a forma mais eficiente de pesquisar sobre o clima em uma cidade específica?',
          options: [
            'Digitar uma pergunta longa e informal',
            'Usar palavras-chave diretas, como "previsão do tempo" e o nome da cidade',
            'Pesquisar apenas o nome da cidade sem contexto',
            'Evitar usar o mecanismo de busca e adivinhar',
          ],
          answer: 1,
          explanation:
            'Palavras-chave diretas ajudam o mecanismo de busca a entender exatamente o que você procura, trazendo resultados mais relevantes e rápidos.',
        },
        reference: {
          label: 'Google — Central de Ajuda da Pesquisa',
          href: 'https://support.google.com/websearch/',
        },
      },
    ],
  },
  {
    slug: 'email-e-comunicacao',
    title: 'E-mail e Comunicação',
    description:
      'Crie e configure uma conta de e-mail, escreva mensagens profissionais e reconheça golpes comuns por e-mail.',
    video: {
      youtubeId: 'MdzplvOipXI',
      title: 'Como criar uma conta de e-mail do Gmail',
    },
    lessons: [
      {
        slug: 'criando-e-configurando-conta-de-email',
        title: 'Criando e configurando uma conta de e-mail',
        duration: '40 min',
        summary:
          'O e-mail é uma das formas mais usadas de comunicação formal, tanto para trabalho quanto para cadastros importantes. Criar e configurar bem sua conta é um passo essencial para a vida digital.',
        objectives: [
          'Criar uma conta de e-mail em um provedor gratuito.',
          'Configurar nome de exibição, foto e assinatura básica.',
        ],
        keyPoints: [
          {
            title: 'Escolhendo um provedor de e-mail',
            description:
              'Provedores como Gmail e Outlook são gratuitos, confiáveis e amplamente aceitos no Brasil. Ao criar a conta, escolha um endereço de e-mail simples e profissional, de preferência baseado no seu nome.',
          },
          {
            title: 'Configurações iniciais',
            description:
              'Depois de criar a conta, é importante configurar o nome de exibição (como seu nome aparece para quem recebe a mensagem) e ativar a verificação em duas etapas para maior segurança. Uma foto de perfil discreta também ajuda a identificar quem está enviando a mensagem.',
          },
          {
            title: 'Assinatura de e-mail',
            description:
              'Uma assinatura é um texto curto que aparece automaticamente no final de cada mensagem enviada, com seu nome e, se for o caso, telefone ou cargo. Ela passa profissionalismo e facilita que a pessoa que recebeu o e-mail saiba como te responder.',
          },
        ],
        activity: {
          title: 'Configurando sua conta de e-mail',
          steps: [
            'Crie uma conta de e-mail gratuita, caso ainda não tenha uma, escolhendo um endereço simples e profissional.',
            'Ative a verificação em duas etapas nas configurações de segurança da conta.',
            'Configure uma assinatura simples com seu nome.',
          ],
        },
        quiz: {
          question: 'Por que é recomendado ativar a verificação em duas etapas em uma conta de e-mail?',
          options: [
            'Para deixar o e-mail mais bonito',
            'Para adicionar uma camada extra de segurança além da senha',
            'Porque é obrigatório em todos os provedores',
            'Para reduzir o tamanho da caixa de entrada',
          ],
          answer: 1,
          explanation:
            'A verificação em duas etapas exige uma segunda confirmação além da senha, dificultando o acesso de outra pessoa mesmo que a senha seja descoberta.',
        },
        reference: {
          label: 'Google — Central de Ajuda do Gmail',
          href: 'https://support.google.com/mail/',
        },
      },
      {
        slug: 'escrevendo-emails-profissionais',
        title: 'Escrevendo e enviando e-mails profissionais',
        duration: '40 min',
        summary:
          'Um e-mail bem escrito transmite clareza e profissionalismo, seja para buscar emprego, falar com uma empresa ou se comunicar no trabalho. Pequenos cuidados na estrutura fazem grande diferença na forma como você é percebido.',
        objectives: [
          'Escrever e-mails claros, com saudação, corpo e despedida.',
          'Usar corretamente os campos "Para", "Cc" e "Assunto".',
        ],
        keyPoints: [
          {
            title: 'Estrutura de um e-mail',
            description:
              'Um e-mail profissional costuma ter saudação (Olá, ...), corpo do texto explicando o motivo da mensagem de forma direta, e despedida com seu nome. Parágrafos curtos facilitam a leitura, especialmente em telas de celular.',
          },
          {
            title: 'Assunto e destinatários',
            description:
              'O campo "Assunto" deve resumir o conteúdo da mensagem em poucas palavras, como "Currículo para vaga de atendimento". O campo "Para" recebe o destinatário principal, enquanto "Cc" (com cópia) serve para incluir outras pessoas que devem apenas acompanhar a conversa.',
          },
          {
            title: 'Revisão antes de enviar',
            description:
              'Antes de clicar em enviar, releia o texto em busca de erros de digitação, confira se o destinatário está correto e verifique se algum anexo prometido no texto foi realmente adicionado. Um e-mail enviado não pode ser totalmente "desfeito" na maioria dos provedores.',
          },
        ],
        activity: {
          title: 'Escrevendo seu primeiro e-mail profissional',
          steps: [
            'Escolha um motivo real, como pedir informações a uma empresa ou se candidatar a uma vaga.',
            'Escreva um e-mail com saudação, corpo claro e despedida, preenchendo um assunto objetivo.',
            'Releia o texto em voz alta antes de enviar, corrigindo erros encontrados.',
          ],
        },
        quiz: {
          question: 'Qual é a função do campo "Assunto" em um e-mail?',
          options: [
            'Mostrar quantas pessoas vão receber a mensagem',
            'Resumir em poucas palavras o conteúdo da mensagem',
            'Definir a cor do texto do e-mail',
            'Anexar arquivos automaticamente',
          ],
          answer: 1,
          explanation:
            'O campo "Assunto" ajuda quem recebe a entender rapidamente do que se trata a mensagem, antes mesmo de abri-la.',
        },
        reference: {
          label: 'Google — Central de Ajuda do Gmail',
          href: 'https://support.google.com/mail/',
        },
      },
      {
        slug: 'anexos-spam-e-golpes-por-email',
        title: 'Anexos, spam e golpes por e-mail',
        duration: '40 min',
        summary:
          'E-mail também é um dos canais mais usados por golpistas para roubar dados e dinheiro. Saber identificar spam e mensagens suspeitas protege você e as pessoas ao seu redor.',
        objectives: [
          'Anexar e abrir arquivos de e-mail com segurança.',
          'Reconhecer sinais comuns de spam e golpes por e-mail.',
        ],
        keyPoints: [
          {
            title: 'Anexando e abrindo arquivos',
            description:
              'Para anexar um arquivo, use o ícone de clipe ou "Anexar" ao escrever a mensagem, e confira se o arquivo certo foi selecionado antes de enviar. Ao receber um anexo, só abra se conhecer o remetente e esperar aquele tipo de arquivo.',
          },
          {
            title: 'O que é spam',
            description:
              'Spam são mensagens indesejadas, geralmente propaganda em massa, que chegam à caixa de entrada sem seu consentimento. A maioria dos provedores tem uma pasta específica de spam ou lixo eletrônico, que filtra boa parte dessas mensagens automaticamente.',
          },
          {
            title: 'Sinais de golpe por e-mail',
            description:
              'Desconfie de mensagens com urgência exagerada, prêmios inesperados, erros de português, remetente estranho ou pedido para clicar em um link e informar senha ou dados bancários. Bancos e empresas sérias normalmente não pedem senha completa por e-mail.',
          },
        ],
        activity: {
          title: 'Identificando mensagens suspeitas',
          steps: [
            'Abra sua caixa de entrada e verifique a pasta de spam ou lixo eletrônico.',
            'Escolha três mensagens recebidas e avalie se parecem confiáveis, observando remetente, link e tom do texto.',
            'Escreva o que você faria antes de clicar em um link de uma mensagem suspeita.',
          ],
        },
        quiz: {
          question: 'Qual é um sinal comum de golpe por e-mail?',
          options: [
            'Mensagem sem nenhum link ou anexo',
            'Urgência exagerada e pedido de dados bancários por link',
            'E-mail enviado por um contato conhecido sobre um assunto esperado',
            'Assunto claro e objetivo',
          ],
          answer: 1,
          explanation:
            'Urgência exagerada combinada com pedido de dados sensíveis por link é um padrão clássico de golpes de phishing por e-mail.',
        },
        reference: {
          label: 'Google — Como identificar e-mails de phishing',
          href: 'https://support.google.com/mail/answer/8253',
        },
      },
    ],
  },
  {
    slug: 'editor-de-texto',
    title: 'Editor de Texto (Word/LibreOffice Writer)',
    description:
      'Aprenda a criar, formatar e organizar documentos de texto usando o Microsoft Word ou o LibreOffice Writer.',
    video: {
      youtubeId: 'y6xnCNwsR0Q',
      title: 'Como dimensionar uma imagem no Word corretamente',
    },
    lessons: [
      {
        slug: 'criando-e-formatando-documentos',
        title: 'Criando e formatando documentos',
        duration: '40 min',
        summary:
          'O editor de texto é uma das ferramentas mais usadas no trabalho e nos estudos, seja no Microsoft Word ou no LibreOffice Writer (gratuito). Aprender o básico de formatação já resolve a maioria das tarefas do dia a dia.',
        objectives: [
          'Criar um novo documento e digitar texto formatado.',
          'Aplicar negrito, itálico, sublinhado e alinhamento.',
        ],
        keyPoints: [
          {
            title: 'Criando um documento novo',
            description:
              'Ao abrir o Word ou o Writer, você pode escolher um documento em branco ou um modelo pronto. É importante salvar o arquivo logo no início, dando um nome claro, para não perder o trabalho em caso de falta de energia ou travamento.',
          },
          {
            title: 'Formatação básica de texto',
            description:
              'Selecionando um trecho de texto, você pode aplicar negrito (destaque), itálico (ênfase) ou sublinhado usando os botões da barra de ferramentas ou atalhos como Ctrl+N (negrito) e Ctrl+I (itálico). O tamanho e o tipo da fonte também podem ser ajustados na mesma barra.',
          },
          {
            title: 'Alinhamento de parágrafo',
            description:
              'O alinhamento define como o texto se posiciona na página: à esquerda, centralizado, à direita ou justificado (as duas bordas alinhadas). Títulos costumam ficar centralizados, enquanto textos corridos geralmente usam alinhamento à esquerda ou justificado.',
          },
        ],
        activity: {
          title: 'Criando seu primeiro documento',
          steps: [
            'Abra o Word ou o LibreOffice Writer e crie um documento em branco.',
            'Digite um pequeno texto sobre você e aplique negrito no título e itálico em uma palavra importante.',
            'Salve o documento com um nome claro em uma pasta organizada.',
          ],
        },
        quiz: {
          question: 'Qual atalho de teclado costuma aplicar negrito ao texto selecionado?',
          options: ['Ctrl+I', 'Ctrl+U', 'Ctrl+N', 'Ctrl+P'],
          answer: 2,
          explanation:
            'Ctrl+N é o atalho padrão para aplicar negrito ao texto selecionado na maioria dos editores de texto em português.',
        },
        reference: {
          label: 'Microsoft — Introdução ao Word',
          href: 'https://support.microsoft.com/pt-br/word',
        },
      },
      {
        slug: 'imagens-tabelas-e-listas',
        title: 'Inserindo imagens, tabelas e listas',
        duration: '40 min',
        summary:
          'Imagens, tabelas e listas ajudam a organizar visualmente um documento e a comunicar informação de forma mais clara. Essas ferramentas são simples de usar depois que você aprende onde encontrá-las.',
        objectives: [
          'Inserir e ajustar o tamanho de uma imagem no documento.',
          'Criar tabelas e listas com marcadores ou numeração.',
        ],
        keyPoints: [
          {
            title: 'Inserindo imagens',
            description:
              'No menu "Inserir", é possível adicionar uma imagem salva no computador diretamente ao documento. Depois de inserida, clique e arraste as bordas da imagem para ajustar o tamanho sem distorcer a proporção.',
          },
          {
            title: 'Criando tabelas',
            description:
              'Tabelas organizam informação em linhas e colunas, sendo úteis para listas de preços, horários ou comparações. No menu "Inserir", escolha "Tabela" e defina quantas linhas e colunas você precisa; é possível adicionar mais depois.',
          },
          {
            title: 'Listas com marcadores e numeração',
            description:
              'Listas com marcadores (bolinhas) organizam itens sem ordem específica, enquanto listas numeradas indicam sequência ou prioridade. Basta selecionar os itens de texto e clicar no ícone de lista correspondente na barra de ferramentas.',
          },
        ],
        activity: {
          title: 'Montando um documento organizado',
          steps: [
            'Insira uma imagem salva no seu computador dentro de um documento novo e ajuste o tamanho dela.',
            'Crie uma tabela simples com três linhas e duas colunas preenchendo com informações fictícias.',
            'Adicione uma lista com marcadores contendo três itens relacionados ao mesmo assunto.',
          ],
        },
        quiz: {
          question:
            'Quando é mais adequado usar uma lista numerada em vez de uma lista com marcadores?',
          options: [
            'Quando a ordem dos itens é importante, como em um passo a passo',
            'Quando os itens não têm nenhuma relação entre si',
            'Nunca, listas numeradas não existem em editores de texto',
            'Apenas em tabelas',
          ],
          answer: 0,
          explanation:
            'Listas numeradas indicam sequência ou ordem de importância, sendo ideais para instruções passo a passo.',
        },
        reference: {
          label: 'Microsoft — Introdução ao Word',
          href: 'https://support.microsoft.com/pt-br/word',
        },
      },
      {
        slug: 'salvando-exportando-e-imprimindo',
        title: 'Salvando, exportando e imprimindo',
        duration: '35 min',
        summary:
          'Saber salvar corretamente, exportar em PDF e configurar a impressão evita retrabalho e problemas na hora de compartilhar um documento. São etapas simples, mas essenciais no dia a dia.',
        objectives: [
          'Salvar documentos em diferentes formatos e locais.',
          'Exportar um documento em PDF e configurar a impressão.',
        ],
        keyPoints: [
          {
            title: 'Salvar versus salvar como',
            description:
              '"Salvar" (Ctrl+S) atualiza o mesmo arquivo com as últimas alterações, enquanto "Salvar como" cria uma cópia nova com outro nome, local ou formato. Usar "Salvar como" é útil quando você quer manter uma versão anterior do documento.',
          },
          {
            title: 'Exportando em PDF',
            description:
              'O formato PDF preserva a formatação do documento exatamente como ela aparece na tela, sendo ideal para enviar arquivos que não devem ser editados. A maioria dos editores de texto tem uma opção "Exportar como PDF" ou "Salvar como PDF" no menu Arquivo.',
          },
          {
            title: 'Configurando a impressão',
            description:
              'Antes de imprimir, é possível escolher o número de cópias, quais páginas imprimir e se a impressão será colorida ou em preto e branco. Usar a visualização de impressão evita desperdiçar papel com erros de formatação.',
          },
        ],
        activity: {
          title: 'Salvando e exportando seu documento',
          steps: [
            'Salve um documento já criado e depois use "Salvar como" para criar uma cópia com outro nome.',
            'Exporte o documento em formato PDF e confira se a formatação foi mantida.',
            'Abra a visualização de impressão e observe como o documento ficaria em papel.',
          ],
        },
        quiz: {
          question: 'Qual é a principal vantagem de exportar um documento como PDF antes de enviá-lo?',
          options: [
            'O arquivo fica editável para qualquer pessoa',
            'A formatação é preservada exatamente como aparece na tela',
            'O documento é apagado automaticamente depois de aberto',
            'O PDF sempre ocupa mais espaço que o documento original',
          ],
          answer: 1,
          explanation:
            'O formato PDF mantém a aparência e a formatação do documento fixas, evitando alterações acidentais quando outra pessoa abre o arquivo.',
        },
        reference: {
          label: 'Microsoft — Introdução ao Word',
          href: 'https://support.microsoft.com/pt-br/word',
        },
      },
    ],
  },
  {
    slug: 'planilhas',
    title: 'Planilhas (Excel/LibreOffice Calc)',
    description:
      'Organize dados em células, aplique fórmulas básicas de cálculo e crie gráficos simples usando o Excel ou o LibreOffice Calc.',
    video: {
      youtubeId: 'lGTkb9qrO60',
      title: 'Como somar automaticamente no Excel',
    },
    lessons: [
      {
        slug: 'celulas-linhas-e-colunas',
        title: 'Células, linhas e colunas',
        duration: '35 min',
        summary:
          'Uma planilha organiza informação em uma grade de linhas e colunas, muito útil para listas, orçamentos e controles do dia a dia. Entender essa estrutura básica é o primeiro passo para usar o Excel ou o Calc com confiança.',
        objectives: [
          'Identificar células, linhas e colunas em uma planilha.',
          'Digitar e organizar dados básicos em uma planilha.',
        ],
        keyPoints: [
          {
            title: 'O que é uma célula',
            description:
              'Cada quadradinho da planilha é chamado de célula, identificado por uma letra (coluna) e um número (linha), como "B3". É dentro das células que você digita textos, números ou fórmulas.',
          },
          {
            title: 'Linhas e colunas',
            description:
              'Linhas são as faixas horizontais, numeradas de cima para baixo, e colunas são as faixas verticais, identificadas por letras da esquerda para a direita. Organizar dados em colunas com cabeçalhos (como "Nome", "Data", "Valor") facilita a leitura e os cálculos.',
          },
          {
            title: 'Selecionando e ajustando células',
            description:
              'Clicando e arrastando o mouse, você seleciona várias células de uma vez, útil para formatar ou copiar dados em bloco. É possível ajustar a largura de uma coluna arrastando a borda entre os cabeçalhos de letras.',
          },
        ],
        activity: {
          title: 'Montando uma lista simples',
          steps: [
            'Abra o Excel ou o LibreOffice Calc e crie cabeçalhos como "Item", "Quantidade" e "Valor" na primeira linha.',
            'Preencha cinco linhas com dados fictícios de uma lista de compras.',
            'Ajuste a largura das colunas para que todo o conteúdo fique visível.',
          ],
        },
        quiz: {
          question: 'Como é identificada uma célula específica em uma planilha?',
          options: [
            'Apenas por um número',
            'Por uma letra de coluna combinada com um número de linha, como B3',
            'Pela cor de fundo escolhida',
            'Pelo nome do arquivo da planilha',
          ],
          answer: 1,
          explanation:
            'Cada célula é identificada pela combinação da letra da coluna com o número da linha em que ela se encontra, como B3.',
        },
        reference: {
          label: 'Microsoft — Introdução ao Excel',
          href: 'https://support.microsoft.com/pt-br/excel',
        },
      },
      {
        slug: 'formulas-e-calculos-basicos',
        title: 'Fórmulas e cálculos básicos',
        duration: '45 min',
        summary:
          'Fórmulas transformam a planilha em uma calculadora poderosa, capaz de somar, calcular médias e atualizar resultados automaticamente. Dominar o básico de fórmulas economiza muito tempo em contas do dia a dia.',
        objectives: [
          'Criar fórmulas simples de soma, subtração e média.',
          'Entender como referenciar células dentro de uma fórmula.',
        ],
        keyPoints: [
          {
            title: 'Toda fórmula começa com "="',
            description:
              'Para que a planilha entenda que você está digitando um cálculo e não um texto comum, toda fórmula deve começar com o sinal de igual (=). Por exemplo, "=A1+A2" soma o conteúdo das células A1 e A2.',
          },
          {
            title: 'Funções prontas',
            description:
              'Além de fazer contas célula por célula, é possível usar funções prontas, como =SOMA(A1:A10) para somar um intervalo de células, ou =MÉDIA(A1:A10) para calcular a média. O símbolo de dois pontos (:) indica um intervalo entre duas células.',
          },
          {
            title: 'Cálculo automático',
            description:
              'Quando você altera o valor de uma célula usada em uma fórmula, o resultado é recalculado automaticamente, sem precisar refazer a conta manualmente. Essa é uma das maiores vantagens de usar planilhas em vez de uma calculadora comum.',
          },
        ],
        activity: {
          title: 'Praticando fórmulas',
          steps: [
            'Na lista de compras criada anteriormente, adicione uma coluna "Total" multiplicando quantidade por valor unitário.',
            'Some a coluna "Total" usando a função =SOMA() em uma célula separada.',
            'Altere o valor de um item e observe o total sendo recalculado automaticamente.',
          ],
        },
        quiz: {
          question: 'Qual símbolo é obrigatório no início de toda fórmula em uma planilha?',
          options: ['O sinal de arroba (@)', 'O sinal de igual (=)', 'O sinal de porcentagem (%)', 'O sinal de cifrão ($)'],
          answer: 1,
          explanation:
            'O sinal de igual (=) indica ao programa que o conteúdo digitado na célula é uma fórmula de cálculo, e não um texto comum.',
        },
        reference: {
          label: 'Microsoft — Introdução ao Excel',
          href: 'https://support.microsoft.com/pt-br/excel',
        },
      },
      {
        slug: 'graficos-simples',
        title: 'Gráficos simples',
        duration: '40 min',
        summary:
          'Transformar números em gráficos facilita a compreensão de informações, seja em uma apresentação de trabalho ou no controle de gastos pessoais. Criar um gráfico simples leva poucos cliques depois que os dados estão organizados.',
        objectives: [
          'Selecionar dados e criar um gráfico básico.',
          'Escolher o tipo de gráfico adequado para cada situação.',
        ],
        keyPoints: [
          {
            title: 'Preparando os dados',
            description:
              'Antes de criar um gráfico, os dados devem estar organizados em colunas com cabeçalhos claros, sem linhas ou colunas vazias no meio. Um gráfico só fica claro se os dados de origem também estiverem bem organizados.',
          },
          {
            title: 'Tipos comuns de gráfico',
            description:
              'O gráfico de barras ou colunas é ótimo para comparar valores entre categorias, como vendas por mês. O gráfico de pizza mostra a proporção de cada parte em relação ao total, sendo indicado quando há poucas categorias.',
          },
          {
            title: 'Inserindo o gráfico',
            description:
              'Depois de selecionar os dados desejados, use o menu "Inserir" e escolha o tipo de gráfico. É possível ajustar título, cores e legenda clicando sobre o gráfico já criado.',
          },
        ],
        activity: {
          title: 'Criando seu primeiro gráfico',
          steps: [
            'Selecione os dados de quantidade ou valor da sua lista de compras.',
            'Insira um gráfico de colunas usando o menu "Inserir".',
            'Adicione um título ao gráfico explicando o que ele representa.',
          ],
        },
        quiz: {
          question:
            'Qual tipo de gráfico é mais indicado para mostrar a proporção de cada parte em relação a um total?',
          options: ['Gráfico de linhas', 'Gráfico de pizza', 'Gráfico de dispersão', 'Gráfico de área empilhada apenas'],
          answer: 1,
          explanation:
            'O gráfico de pizza divide o total em fatias proporcionais, sendo ideal para mostrar a participação de cada categoria no todo.',
        },
        reference: {
          label: 'Microsoft — Introdução ao Excel',
          href: 'https://support.microsoft.com/pt-br/excel',
        },
      },
    ],
  },
  {
    slug: 'apresentacoes',
    title: 'Apresentações (PowerPoint/Impress)',
    description:
      'Crie slides organizados, aplique um design visual claro e desenvolva confiança para apresentar usando o PowerPoint ou o LibreOffice Impress.',
    video: {
      youtubeId: 't0MNW1wQDhc',
      title: 'Como fazer um slide no PowerPoint',
    },
    lessons: [
      {
        slug: 'criando-slides',
        title: 'Criando slides',
        duration: '35 min',
        summary:
          'Uma apresentação de slides ajuda a comunicar ideias de forma visual, seja em uma reunião de trabalho, uma aula ou um projeto pessoal. Aprender a estrutura básica de um slide é o primeiro passo para apresentações melhores.',
        objectives: [
          'Criar uma apresentação nova com múltiplos slides.',
          'Organizar título e conteúdo em cada slide.',
        ],
        keyPoints: [
          {
            title: 'Estrutura de um slide',
            description:
              'A maioria dos modelos de slide tem uma área de título na parte superior e uma área de conteúdo abaixo, onde entram textos, imagens ou listas. Manter essa estrutura simples ajuda a plateia a acompanhar a apresentação.',
          },
          {
            title: 'Adicionando e organizando slides',
            description:
              'No PowerPoint ou no Impress, é possível adicionar um novo slide clicando em "Novo slide" e escolher um layout pronto, como "Título e conteúdo". Os slides aparecem em uma lista lateral, onde podem ser arrastados para mudar a ordem.',
          },
          {
            title: 'Menos é mais',
            description:
              'Slides com pouco texto e ideias diretas são mais fáceis de acompanhar do que slides lotados de frases longas. Uma boa prática é usar tópicos curtos e deixar a explicação detalhada para a fala de quem apresenta.',
          },
        ],
        activity: {
          title: 'Criando sua primeira apresentação',
          steps: [
            'Crie uma apresentação nova com três slides sobre um assunto de sua escolha.',
            'No primeiro slide, adicione um título chamativo; nos outros dois, adicione tópicos curtos.',
            'Reorganize a ordem dos slides arrastando-os na lista lateral.',
          ],
        },
        quiz: {
          question: 'Por que é recomendado evitar textos longos em um slide?',
          options: [
            'Porque slides não aceitam muito texto tecnicamente',
            'Porque tópicos curtos facilitam o acompanhamento da plateia',
            'Porque o programa apaga textos longos automaticamente',
            'Não há nenhum motivo, tanto faz o tamanho do texto',
          ],
          answer: 1,
          explanation:
            'Tópicos curtos e diretos ajudam a plateia a acompanhar a apresentação, deixando os detalhes para a explicação falada por quem apresenta.',
        },
        reference: {
          label: 'Microsoft — Introdução ao PowerPoint',
          href: 'https://support.microsoft.com/pt-br/powerpoint',
        },
      },
      {
        slug: 'design-e-organizacao-visual',
        title: 'Design e organização visual',
        duration: '35 min',
        summary:
          'Um design visual limpo e consistente deixa a apresentação mais profissional e fácil de entender. Pequenos cuidados com cores, fontes e imagens fazem grande diferença no resultado final.',
        objectives: [
          'Aplicar um tema visual consistente em toda a apresentação.',
          'Usar imagens e contraste de cores de forma equilibrada.',
        ],
        keyPoints: [
          {
            title: 'Temas prontos',
            description:
              'PowerPoint e Impress oferecem temas prontos, com combinações de cores e fontes já testadas, disponíveis no menu "Design". Usar um tema pronto é mais seguro do que criar combinações de cores do zero, especialmente para iniciantes.',
          },
          {
            title: 'Contraste e legibilidade',
            description:
              'O texto precisa ter bom contraste com o fundo do slide, como texto escuro em fundo claro ou o contrário, para ser lido com facilidade à distância. Evite fundos muito coloridos combinados com fontes pequenas ou de cor parecida.',
          },
          {
            title: 'Uso equilibrado de imagens',
            description:
              'Imagens ajudam a ilustrar ideias, mas devem ter relação direta com o conteúdo do slide, sem exagero na quantidade. Prefira imagens de boa qualidade e evite distorcer a proporção ao redimensionar.',
          },
        ],
        activity: {
          title: 'Aplicando um design consistente',
          steps: [
            'Escolha um tema pronto para a apresentação criada na aula anterior.',
            'Verifique se o contraste entre texto e fundo está bom em todos os slides.',
            'Adicione uma imagem relevante a pelo menos um dos slides, ajustando o tamanho corretamente.',
          ],
        },
        quiz: {
          question: 'Qual é a vantagem de usar um tema pronto em vez de escolher cores aleatórias?',
          options: [
            'O tema pronto impede qualquer personalização',
            'O tema pronto já combina cores e fontes testadas para boa legibilidade',
            'Temas prontos deixam a apresentação mais lenta',
            'Não existe vantagem real',
          ],
          answer: 1,
          explanation:
            'Temas prontos aplicam combinações de cores e fontes já pensadas para boa legibilidade e visual profissional, reduzindo erros comuns de design.',
        },
        reference: {
          label: 'Microsoft — Introdução ao PowerPoint',
          href: 'https://support.microsoft.com/pt-br/powerpoint',
        },
      },
      {
        slug: 'apresentando-com-confianca',
        title: 'Apresentando com confiança',
        duration: '35 min',
        summary:
          'Uma boa apresentação depende tanto do slide quanto da forma como a pessoa fala e conduz o tempo. Praticar e usar os recursos certos do programa ajuda a reduzir o nervosismo.',
        objectives: [
          'Usar o modo de apresentação e as anotações do apresentador.',
          'Aplicar técnicas simples para falar com mais confiança.',
        ],
        keyPoints: [
          {
            title: 'Modo de apresentação',
            description:
              'O modo de apresentação (tecla F5 no PowerPoint) exibe os slides em tela cheia, ideal para o público, enquanto quem apresenta pode ver anotações e o próximo slide em outra tela, quando disponível. Praticar com esse modo evita surpresas no momento real.',
          },
          {
            title: 'Anotações do apresentador',
            description:
              'É possível adicionar anotações abaixo de cada slide, visíveis apenas para quem está apresentando, com lembretes do que falar. Isso evita a tentação de encher o slide com texto que deveria ser falado, não lido.',
          },
          {
            title: 'Praticando a fala',
            description:
              'Ensaiar em voz alta, cronometrar o tempo de cada parte e respirar antes de começar reduzem o nervosismo. Falar de forma pausada e olhar para a plateia, mesmo que rapidamente, transmite mais confiança do que ler o slide palavra por palavra.',
          },
        ],
        activity: {
          title: 'Ensaiando sua apresentação',
          steps: [
            'Adicione uma anotação curta em cada slide da sua apresentação com o que você pretende falar.',
            'Use o modo de apresentação para ensaiar em voz alta, cronometrando o tempo total.',
            'Peça para alguém assistir ao ensaio e dar um feedback rápido.',
          ],
        },
        quiz: {
          question: 'Qual é a principal função das anotações do apresentador?',
          options: [
            'Substituir o conteúdo do slide',
            'Servir de lembrete para quem apresenta, sem aparecer para a plateia',
            'Aumentar o tamanho da fonte do slide',
            'Traduzir automaticamente a apresentação',
          ],
          answer: 1,
          explanation:
            'As anotações do apresentador funcionam como um lembrete privado de conteúdo a falar, sem ficar visível para quem assiste à apresentação.',
        },
        reference: {
          label: 'Microsoft — Introdução ao PowerPoint',
          href: 'https://support.microsoft.com/pt-br/powerpoint',
        },
      },
    ],
  },
  {
    slug: 'nuvem-e-aplicativos-online',
    title: 'Nuvem e Aplicativos Online',
    description:
      'Descubra como guardar e compartilhar arquivos na nuvem e conheça aplicativos essenciais para o dia a dia digital.',
    video: {
      youtubeId: 'hiwTQNSz-mQ',
      title: 'Google Drive: como usar a nuvem e abrir arquivos de qualquer lugar',
    },
    lessons: [
      {
        slug: 'google-drive-onedrive-e-nuvem',
        title: 'Google Drive, OneDrive e armazenamento em nuvem',
        duration: '35 min',
        summary:
          'Armazenamento em nuvem permite guardar arquivos na internet, acessíveis de qualquer aparelho conectado, sem depender de um único computador. Google Drive e OneDrive são dois dos serviços mais usados no Brasil.',
        objectives: [
          'Entender o conceito de armazenamento em nuvem.',
          'Enviar e organizar arquivos no Google Drive ou OneDrive.',
        ],
        keyPoints: [
          {
            title: 'O que é a nuvem',
            description:
              '"Nuvem" é um termo usado para descrever servidores conectados à internet que guardam arquivos fora do seu computador. Isso significa que, mesmo se seu computador quebrar ou for roubado, os arquivos salvos na nuvem continuam acessíveis por outro aparelho.',
          },
          {
            title: 'Google Drive e OneDrive',
            description:
              'O Google Drive costuma vir integrado a contas do Gmail, e o OneDrive vem integrado a contas Microsoft. Ambos oferecem um espaço gratuito inicial e permitem enviar (upload) arquivos do computador diretamente pelo navegador ou por um aplicativo.',
          },
          {
            title: 'Sincronização automática',
            description:
              'Ao instalar o aplicativo do Google Drive ou OneDrive no computador, uma pasta especial é criada, e tudo que você coloca nela é enviado automaticamente para a nuvem. Isso cria uma cópia de segurança sem esforço extra no dia a dia.',
          },
        ],
        activity: {
          title: 'Primeiros passos na nuvem',
          steps: [
            'Acesse o Google Drive ou o OneDrive com sua conta e explore a tela inicial.',
            'Envie (faça upload) de um arquivo do seu computador para uma pasta na nuvem.',
            'Organize esse arquivo dentro de uma nova pasta criada diretamente no serviço de nuvem.',
          ],
        },
        quiz: {
          question:
            'Qual é a principal vantagem de guardar arquivos na nuvem em vez de apenas no computador?',
          options: [
            'Os arquivos ficam maiores automaticamente',
            'Os arquivos ficam acessíveis de outros aparelhos, mesmo se o computador falhar',
            'A nuvem é mais lenta que o armazenamento local',
            'Não é possível compartilhar arquivos na nuvem',
          ],
          answer: 1,
          explanation:
            'Como os arquivos ficam guardados em servidores na internet, é possível acessá-los de qualquer aparelho conectado, mesmo que o computador original apresente problemas.',
        },
        reference: {
          label: 'Google — Central de Ajuda do Google Drive',
          href: 'https://support.google.com/drive/',
        },
      },
      {
        slug: 'compartilhando-e-colaborando',
        title: 'Compartilhando arquivos e colaborando',
        duration: '35 min',
        summary:
          'Compartilhar arquivos pela nuvem facilita o trabalho em equipe e evita o envio de várias versões diferentes por e-mail. Saber controlar quem pode ver ou editar cada arquivo é essencial para manter a segurança.',
        objectives: [
          'Compartilhar um arquivo ou pasta com outra pessoa pela nuvem.',
          'Diferenciar permissões de visualização e edição.',
        ],
        keyPoints: [
          {
            title: 'Compartilhando um link',
            description:
              'A maioria dos serviços de nuvem permite gerar um link de compartilhamento para um arquivo ou pasta, que pode ser enviado por e-mail ou mensagem. É possível escolher se qualquer pessoa com o link pode acessar ou apenas pessoas específicas convidadas por e-mail.',
          },
          {
            title: 'Permissões de visualização e edição',
            description:
              'Ao compartilhar, você escolhe se a pessoa poderá apenas visualizar, comentar ou também editar o conteúdo. Para documentos sensíveis, é mais seguro conceder apenas visualização, a menos que a edição seja realmente necessária.',
          },
          {
            title: 'Colaborando em tempo real',
            description:
              'Ferramentas como Google Docs e Planilhas Google permitem que várias pessoas editem o mesmo documento ao mesmo tempo, vendo as alterações em tempo real. Isso elimina a necessidade de enviar o arquivo de um lado para o outro por e-mail.',
          },
        ],
        activity: {
          title: 'Compartilhando um documento',
          steps: [
            'Crie ou escolha um arquivo na nuvem para compartilhar com outra pessoa.',
            'Compartilhe o arquivo definindo permissão apenas de visualização.',
            'Altere a permissão para edição e observe a diferença nas opções disponíveis para quem recebeu o link.',
          ],
        },
        quiz: {
          question: 'Qual é o risco de compartilhar um documento sensível com permissão de edição sem necessidade?',
          options: [
            'Nenhum risco, edição é sempre seguro',
            'A pessoa pode alterar ou apagar informações originais sem essa necessidade',
            'O arquivo fica automaticamente público na internet',
            'A permissão de edição impede o compartilhamento de links',
          ],
          answer: 1,
          explanation:
            'Conceder edição sem necessidade permite que a pessoa altere ou apague conteúdo original, por isso é mais seguro conceder apenas visualização quando possível.',
        },
        reference: {
          label: 'Google — Compartilhar arquivos no Google Drive',
          href: 'https://support.google.com/drive/answer/2494822',
        },
      },
      {
        slug: 'aplicativos-essenciais-no-dia-a-dia',
        title: 'Aplicativos essenciais no dia a dia',
        duration: '30 min',
        summary:
          'Além dos programas de escritório, alguns aplicativos online facilitam tarefas comuns, como mensagens, videochamadas e serviços públicos. Conhecer os principais ajuda a aproveitar melhor a internet no dia a dia.',
        objectives: [
          'Reconhecer aplicativos essenciais para comunicação e serviços online.',
          'Instalar e organizar aplicativos com segurança no computador ou celular.',
        ],
        keyPoints: [
          {
            title: 'Comunicação online',
            description:
              'Aplicativos de mensagem, como WhatsApp, e de videochamada, como Google Meet e Microsoft Teams, permitem conversar com outras pessoas e fazer reuniões à distância. Muitos desses aplicativos também funcionam pelo navegador, sem precisar instalar nada.',
          },
          {
            title: 'Serviços públicos digitais',
            description:
              'O aplicativo e o site gov.br concentram diversos serviços públicos brasileiros, como emissão de documentos, consulta de benefícios e agendamentos. Ter uma conta gov.br verificada facilita o acesso a esses serviços de forma segura.',
          },
          {
            title: 'Instalando aplicativos com segurança',
            description:
              'Instale aplicativos apenas de lojas oficiais, como Google Play ou App Store, e confira o número de downloads e as avaliações antes de instalar. Evite instalar aplicativos por links recebidos em mensagens ou anúncios duvidosos.',
          },
        ],
        activity: {
          title: 'Organizando seus aplicativos essenciais',
          steps: [
            'Liste três aplicativos que você já usa ou gostaria de aprender a usar no dia a dia.',
            'Verifique, na loja oficial, as avaliações e o número de downloads de um desses aplicativos antes de instalar.',
            'Se ainda não tiver, crie ou verifique sua conta no site gov.br.',
          ],
        },
        quiz: {
          question: 'Qual é a forma mais segura de instalar um novo aplicativo no celular ou computador?',
          options: [
            'Por um link recebido em uma mensagem de desconhecido',
            'Pela loja oficial do sistema, como Google Play ou App Store',
            'Por um anúncio em um site qualquer',
            'Baixando de qualquer site que aparecer na pesquisa',
          ],
          answer: 1,
          explanation:
            'Lojas oficiais analisam os aplicativos disponíveis e reduzem o risco de instalar programas maliciosos, diferente de links recebidos por mensagem ou anúncios.',
        },
        reference: {
          label: 'gov.br — Portal de Serviços do Governo Federal',
          href: 'https://www.gov.br/pt-br',
        },
      },
    ],
  },
  {
    slug: 'manutencao-e-boas-praticas',
    title: 'Manutenção Básica e Boas Práticas',
    description:
      'Aprenda a manter o computador rápido e seguro, resolver problemas comuns sozinho e planejar os próximos passos da sua jornada digital.',
    video: {
      youtubeId: '6AJg-VISYOE',
      title: 'Computador lento ou travando: o que fazer',
    },
    lessons: [
      {
        slug: 'mantendo-o-computador-rapido-e-seguro',
        title: 'Mantendo o computador rápido e seguro',
        duration: '40 min',
        summary:
          'Pequenos cuidados regulares evitam que o computador fique lento e reduzem o risco de vírus e outros problemas de segurança. Manutenção básica não exige conhecimento técnico avançado.',
        objectives: [
          'Aplicar hábitos simples para manter o computador rápido.',
          'Manter o sistema e os programas protegidos contra ameaças comuns.',
        ],
        keyPoints: [
          {
            title: 'Atualizações do sistema',
            description:
              'Manter o sistema operacional e os programas atualizados corrige falhas de segurança conhecidas e melhora o desempenho. A maioria dos sistemas permite ativar atualizações automáticas, reduzindo a necessidade de lembrar manualmente.',
          },
          {
            title: 'Programas de inicialização e espaço em disco',
            description:
              'Muitos programas configuram para abrir automaticamente quando o computador liga, deixando tudo mais lento; é possível desativar essa inicialização automática nas configurações do sistema. Excluir arquivos temporários e esvaziar a Lixeira regularmente também libera espaço.',
          },
          {
            title: 'Proteção contra vírus e malware',
            description:
              'Manter um antivírus atualizado, evitar downloads de fontes desconhecidas e não clicar em links suspeitos são as três medidas mais eficazes de proteção. O bom senso ao navegar continua sendo a defesa mais importante, mais até do que qualquer programa.',
          },
        ],
        activity: {
          title: 'Checklist de manutenção',
          steps: [
            'Verifique se o sistema operacional e o antivírus do seu computador estão atualizados.',
            'Desative, nas configurações, dois programas desnecessários que abrem automaticamente ao ligar o computador.',
            'Esvazie a Lixeira e remova arquivos temporários que não são mais necessários.',
          ],
        },
        quiz: {
          question: 'Por que manter o sistema operacional atualizado é importante para a segurança?',
          options: [
            'Atualizações servem apenas para mudar o visual do sistema',
            'Atualizações corrigem falhas de segurança conhecidas',
            'Atualizar deixa o computador permanentemente mais lento',
            'Atualizações não têm relação com segurança',
          ],
          answer: 1,
          explanation:
            'As atualizações frequentemente corrigem vulnerabilidades de segurança já conhecidas, reduzindo o risco de ataques que exploram essas falhas.',
        },
        reference: {
          label: 'Microsoft — Central de Ajuda do Windows',
          href: 'https://support.microsoft.com/pt-br/windows',
        },
      },
      {
        slug: 'resolvendo-problemas-comuns',
        title: 'Resolvendo problemas comuns',
        duration: '40 min',
        summary:
          'A maioria dos problemas básicos de computador tem soluções simples, como reiniciar o equipamento ou verificar conexões. Aprender a resolver esses casos com autonomia economiza tempo e evita frustração.',
        objectives: [
          'Aplicar um roteiro básico de diagnóstico diante de um problema.',
          'Resolver problemas comuns de travamento, lentidão e conexão.',
        ],
        keyPoints: [
          {
            title: 'Reiniciar resolve muita coisa',
            description:
              'Reiniciar o computador fecha programas travados e limpa a memória temporária, resolvendo boa parte dos problemas de lentidão e travamento. É sempre uma boa primeira tentativa antes de buscar soluções mais complexas.',
          },
          {
            title: 'Problemas de conexão com a internet',
            description:
              'Quando a internet para de funcionar, verifique primeiro se o Wi-Fi está ativado, se outros aparelhos também estão sem conexão e se o roteador está ligado. Desligar e religar o roteador, esperando alguns segundos, resolve muitos casos.',
          },
          {
            title: 'Quando pedir ajuda técnica',
            description:
              'Problemas que envolvem barulhos estranhos, superaquecimento, tela azul frequente ou perda de arquivos importantes merecem ajuda de um profissional de confiança. Tentar "consertar" esses casos sozinho pode piorar a situação ou causar perda definitiva de dados.',
          },
        ],
        activity: {
          title: 'Praticando o diagnóstico básico',
          steps: [
            'Escreva um roteiro de três perguntas que você faria antes de pedir ajuda técnica (por exemplo: "já reiniciei?", "outros aparelhos têm o mesmo problema?").',
            'Simule um problema de conexão desligando e religando o roteador de casa.',
            'Identifique um profissional ou serviço de confiança para casos que você não conseguir resolver sozinho.',
          ],
        },
        quiz: {
          question: 'Qual costuma ser a primeira ação recomendada diante de um computador lento ou travado?',
          options: [
            'Formatar o computador imediatamente',
            'Reiniciar o computador',
            'Comprar um computador novo',
            'Desinstalar o sistema operacional',
          ],
          answer: 1,
          explanation:
            'Reiniciar o computador fecha processos travados e limpa a memória temporária, resolvendo grande parte dos problemas comuns de lentidão.',
        },
        reference: {
          label: 'Microsoft — Central de Ajuda do Windows',
          href: 'https://support.microsoft.com/pt-br/windows',
        },
      },
      {
        slug: 'proximos-passos-no-mundo-digital',
        title: 'Próximos passos no mundo digital',
        duration: '35 min',
        summary:
          'Concluir este curso é o começo de uma jornada contínua de aprendizado digital. Definir próximos passos claros ajuda a manter a prática e aprofundar conhecimentos específicos.',
        objectives: [
          'Revisar os principais aprendizados do curso.',
          'Planejar próximos passos de estudo e prática digital.',
        ],
        keyPoints: [
          {
            title: 'Prática constante',
            description:
              'Assim como qualquer habilidade nova, o uso do computador melhora com a prática regular. Reserve um tempo por semana para usar o que aprendeu, mesmo em tarefas simples do dia a dia.',
          },
          {
            title: 'Aprofundando conhecimentos',
            description:
              'Depois do básico, é possível se aprofundar em áreas específicas, como planilhas avançadas, edição de fotos, digitação mais rápida ou preparação para o mercado de trabalho. Escolher uma área de interesse ajuda a manter a motivação de continuar aprendendo.',
          },
          {
            title: 'Recursos gratuitos de aprendizado',
            description:
              'Existem cursos gratuitos, tutoriais em vídeo e centrais de ajuda oficiais dos próprios programas que você pode consultar sempre que tiver dúvida. Buscar ajuda quando necessário faz parte do processo de aprendizado, não é sinal de fracasso.',
          },
        ],
        activity: {
          title: 'Planejando seus próximos passos',
          steps: [
            'Escreva os três aprendizados deste curso que você considera mais úteis para sua rotina.',
            'Escolha uma área específica para aprofundar nos próximos meses, como planilhas ou apresentações.',
            'Defina um dia da semana fixo para praticar o que aprendeu no computador.',
          ],
        },
        quiz: {
          question: 'Qual é a melhor forma de continuar evoluindo depois de concluir um curso básico de informática?',
          options: [
            'Parar de usar o computador até esquecer o que aprendeu',
            'Praticar regularmente e aprofundar áreas de interesse específicas',
            'Aprender tudo de uma vez em um único dia',
            'Evitar buscar ajuda em centrais de suporte',
          ],
          answer: 1,
          explanation:
            'A prática regular combinada com o aprofundamento em áreas específicas de interesse é a forma mais eficaz de consolidar e evoluir o conhecimento digital.',
        },
        reference: {
          label: 'gov.br — Portal de Serviços do Governo Federal',
          href: 'https://www.gov.br/pt-br',
        },
      },
    ],
  },
]

export const computingCourseLessons = computingCourseModules.flatMap(
  (module, moduleIndex) =>
    module.lessons.map((lesson, lessonIndex) => ({
      ...lesson,
      module,
      moduleIndex,
      lessonIndex,
    })),
)

export const computingCourseStats = {
  modules: computingCourseModules.length,
  lessons: computingCourseLessons.length,
  workload: '18h',
}

export function getComputingLesson(slug: string) {
  return computingCourseLessons.find((lesson) => lesson.slug === slug)
}

export const computingCourseSources = [
  {
    label: 'Microsoft — Central de Suporte (Windows e Office)',
    href: 'https://support.microsoft.com/pt-br',
  },
  {
    label: 'Google — Central de Ajuda',
    href: 'https://support.google.com/',
  },
  {
    label: 'LibreOffice — Ajuda oficial',
    href: 'https://help.libreoffice.org/',
  },
  {
    label: 'gov.br — Portal de Serviços do Governo Federal',
    href: 'https://www.gov.br/pt-br',
  },
  {
    label: 'CISA — Secure Our World',
    href: 'https://www.cisa.gov/secure-our-world',
  },
]
