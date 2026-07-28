export type ExamQuestion = {
  id: string
  moduleSlug: string
  question: string
  options: string[]
  answer: number
  explanation: string
}

export const hardwareFinalExamQuestions: ExamQuestion[] = [
  // Módulo 1 — Introdução à Montagem e Manutenção
  {
    id: 'm1-q1',
    moduleSlug: 'introducao-a-montagem-e-manutencao',
    question: 'Qual é a principal diferença entre manutenção preventiva e manutenção corretiva?',
    options: [
      'Preventiva só existe em notebooks, corretiva só em desktops',
      'Preventiva é feita regularmente para evitar problemas; corretiva é feita depois que um problema já aconteceu',
      'Não existe diferença, os dois termos significam a mesma coisa',
      'Corretiva é sempre mais barata que preventiva',
    ],
    answer: 1,
    explanation:
      'Manutenção preventiva acontece antes do problema aparecer, como limpeza e trocas programadas. Manutenção corretiva é o conserto feito depois que algo já parou de funcionar corretamente.',
  },
  {
    id: 'm1-q2',
    moduleSlug: 'introducao-a-montagem-e-manutencao',
    question: 'Para que serve a pulseira antiestática ao montar ou consertar um computador?',
    options: [
      'Para prender os cabos soltos dentro do gabinete',
      'Para descarregar a eletricidade estática do corpo antes que ela danifique componentes sensíveis',
      'Para medir a temperatura dos componentes',
      'Para segurar a placa-mãe no lugar durante a montagem',
    ],
    answer: 1,
    explanation:
      'A pulseira antiestática aterra o corpo da pessoa, evitando que uma descarga de eletricidade estática danifique componentes eletrônicos sensíveis, como memória RAM e placas.',
  },

  // Módulo 2 — Componentes Internos do Desktop
  {
    id: 'm2-q1',
    moduleSlug: 'componentes-internos-do-desktop',
    question: 'Por que não é possível instalar qualquer processador em qualquer placa-mãe?',
    options: [
      'Porque todos os processadores são sempre compatíveis entre si',
      'Porque o processador precisa ser fisicamente compatível com o socket da placa-mãe',
      'Porque a cor do processador precisa combinar com o gabinete',
      'Porque isso depende apenas do sistema operacional instalado',
    ],
    answer: 1,
    explanation:
      'O socket é o formato físico de encaixe entre processador e placa-mãe. Só processadores com o socket correspondente ao da placa-mãe podem ser instalados nela.',
  },
  {
    id: 'm2-q2',
    moduleSlug: 'componentes-internos-do-desktop',
    question: 'O que acontece com o conteúdo da memória RAM quando o computador é desligado?',
    options: [
      'Ele permanece salvo para sempre, como em um HD ou SSD',
      'Ele é apagado, já que a RAM guarda dados apenas temporariamente enquanto o computador está ligado',
      'Ele é automaticamente enviado para a nuvem',
      'Ele é gravado permanentemente na placa-mãe',
    ],
    answer: 1,
    explanation:
      'A memória RAM é volátil: guarda dados apenas enquanto o computador está ligado, e todo o conteúdo é apagado ao desligar — diferente do armazenamento permanente em HD ou SSD.',
  },

  // Módulo 3 — Armazenamento e Fonte de Alimentação
  {
    id: 'm3-q1',
    moduleSlug: 'armazenamento-e-fonte-de-alimentacao',
    question: 'Qual é a principal vantagem do SSD NVMe em relação ao SSD SATA?',
    options: [
      'Ele é sempre mais barato por gigabyte',
      'Ele se conecta diretamente à placa-mãe (sem cabos) e é significativamente mais rápido',
      'Ele só funciona em notebooks, nunca em desktops',
      'Ele não precisa ser instalado, funciona sem estar conectado',
    ],
    answer: 1,
    explanation:
      'O SSD NVMe se conecta direto ao slot M.2 da placa-mãe, sem cabos, e oferece velocidades de leitura e escrita muito superiores às do SSD SATA.',
  },
  {
    id: 'm3-q2',
    moduleSlug: 'armazenamento-e-fonte-de-alimentacao',
    question: 'O que a certificação 80 Plus indica sobre uma fonte de alimentação?',
    options: [
      'Que ela tem garantia de 80 meses',
      'Que ela converte pelo menos 80% da energia da tomada em energia útil, desperdiçando menos em calor',
      'Que ela suporta até 80 dispositivos conectados',
      'Que ela funciona apenas com 80% da capacidade máxima',
    ],
    answer: 1,
    explanation:
      'A certificação 80 Plus atesta um nível mínimo de eficiência energética: pelo menos 80% da energia consumida da tomada é convertida em energia útil para os componentes.',
  },

  // Módulo 4 — Montagem Prática de um PC do Zero
  {
    id: 'm4-q1',
    moduleSlug: 'montagem-pratica-de-um-pc',
    question: 'Por que é recomendável instalar processador, cooler e memória na placa-mãe antes de colocá-la dentro do gabinete?',
    options: [
      'Porque isso é obrigatório por norma técnica',
      'Porque fora do gabinete há mais espaço e visibilidade para alinhar as peças corretamente',
      'Porque as peças não funcionam se instaladas dentro do gabinete',
      'Porque isso evita ter que aplicar pasta térmica',
    ],
    answer: 1,
    explanation:
      'Com a placa-mãe fora do gabinete, há mais espaço livre e visibilidade para alinhar o processador no socket e fixar o cooler corretamente, reduzindo o risco de erros.',
  },
  {
    id: 'm4-q2',
    moduleSlug: 'montagem-pratica-de-um-pc',
    question: 'Para que servem os "standoffs" usados ao fixar a placa-mãe no gabinete?',
    options: [
      'Para decorar o interior do gabinete',
      'Para manter a placa-mãe afastada da estrutura metálica do gabinete, evitando curto-circuito',
      'Para prender os cabos do painel frontal',
      'Para aumentar a velocidade da placa-mãe',
    ],
    answer: 1,
    explanation:
      'Os standoffs são pequenos parafusos/pinos que elevam a placa-mãe em relação à estrutura metálica do gabinete, evitando um curto-circuito.',
  },

  // Módulo 5 — BIOS/UEFI e Primeira Inicialização
  {
    id: 'm5-q1',
    moduleSlug: 'bios-uefi-e-primeira-inicializacao',
    question: 'Qual é a principal função da tela inicial da BIOS/UEFI logo após montar um computador?',
    options: [
      'Instalar automaticamente o sistema operacional',
      'Permitir conferir se processador, memória e armazenamento foram reconhecidos corretamente',
      'Formatar o armazenamento automaticamente',
      'Conectar o computador à internet',
    ],
    answer: 1,
    explanation:
      'A tela inicial da BIOS/UEFI mostra as informações básicas de hardware reconhecido, sendo o primeiro lugar para confirmar que os componentes foram instalados e detectados corretamente.',
  },
  {
    id: 'm5-q2',
    moduleSlug: 'bios-uefi-e-primeira-inicializacao',
    question: 'O que o perfil XMP/DOCP faz quando ativado na BIOS?',
    options: [
      'Aumenta o espaço de armazenamento disponível',
      'Faz a memória RAM rodar na velocidade máxima anunciada pelo fabricante, em vez da velocidade padrão mais conservadora',
      'Instala automaticamente o sistema operacional',
      'Desliga os componentes que não estão sendo usados',
    ],
    answer: 1,
    explanation:
      'Sem XMP/DOCP ativado, a memória RAM roda em uma velocidade padrão mais baixa. Ativar o perfil faz com que ela funcione na velocidade máxima informada na embalagem.',
  },

  // Módulo 6 — Manutenção Preventiva
  {
    id: 'm6-q1',
    moduleSlug: 'manutencao-preventiva',
    question: 'Por que aspiradores de pó comuns não devem ser usados diretamente sobre componentes eletrônicos?',
    options: [
      'Porque eles são silenciosos demais',
      'Porque podem gerar eletricidade estática e danificar componentes sensíveis',
      'Porque eles aumentam a temperatura dos componentes',
      'Porque eles não conseguem remover poeira de jeito nenhum',
    ],
    answer: 1,
    explanation:
      'Aspiradores comuns podem gerar eletricidade estática ao passar perto de componentes eletrônicos. Ar comprimido e pincel são as ferramentas recomendadas para essa limpeza.',
  },
  {
    id: 'm6-q2',
    moduleSlug: 'manutencao-preventiva',
    question: 'Qual é um sinal comum de que a pasta térmica de um processador precisa ser trocada?',
    options: [
      'O computador liga mais rápido do que o normal',
      'As temperaturas do processador ficam mais altas que o normal e o cooler trabalha em rotações mais altas com frequência',
      'O teclado para de responder',
      'A tela fica com mais brilho',
    ],
    answer: 1,
    explanation:
      'Quando a pasta térmica perde eficiência, o calor é transferido de forma menos eficaz do processador para o cooler, resultando em temperaturas mais altas.',
  },

  // Módulo 7 — Diagnóstico de Problemas Comuns
  {
    id: 'm7-q1',
    moduleSlug: 'diagnostico-de-problemas-comuns',
    question: 'Qual deve ser o primeiro passo ao diagnosticar um computador que não liga?',
    options: [
      'Trocar imediatamente a placa-mãe',
      'Conferir os itens mais simples, como conexão do cabo de força, tomada e botão da fonte',
      'Formatar o sistema operacional',
      'Comprar um computador novo',
    ],
    answer: 1,
    explanation:
      'A maioria dos diagnósticos deve começar pelos itens mais simples e baratos de verificar antes de suspeitar de peças internas com defeito.',
  },
  {
    id: 'm7-q2',
    moduleSlug: 'diagnostico-de-problemas-comuns',
    question: 'Telas azuis aleatórias que acontecem mesmo em tarefas leves são um sintoma clássico de qual problema?',
    options: [
      'Tela do monitor suja',
      'Memória RAM com defeito',
      'Excesso de programas instalados',
      'Falta de espaço na área de trabalho',
    ],
    answer: 1,
    explanation:
      'Telas azuis aleatórias, especialmente em tarefas leves, são um sintoma clássico de memória RAM com defeito, que pode ser confirmado com um teste específico de memória.',
  },

  // Módulo 8 — Notebooks: Peculiaridades e Manutenção
  {
    id: 'm8-q1',
    moduleSlug: 'notebooks-peculiaridades-e-manutencao',
    question: 'Por que é recomendável usar uma espátula plástica (em vez de uma chave de metal) para abrir a tampa de um notebook?',
    options: [
      'Porque é mais rápido',
      'Porque reduz o risco de arranhar ou quebrar as travas plásticas mais frágeis do notebook',
      'Porque a espátula plástica conduz eletricidade estática melhor',
      'Porque isso é apenas uma questão estética',
    ],
    answer: 1,
    explanation:
      'As travas plásticas de um notebook são mais frágeis que as de um gabinete de desktop, e uma ferramenta plástica reduz o risco de quebrá-las.',
  },
  {
    id: 'm8-q2',
    moduleSlug: 'notebooks-peculiaridades-e-manutencao',
    question: 'Qual é a principal diferença entre a memória RAM de um notebook e a de um desktop?',
    options: [
      'Não existe diferença nenhuma',
      'A memória de notebook (SO-DIMM) é fisicamente menor que a de desktop (DIMM)',
      'A memória de notebook não pode ser trocada nunca',
      'A memória de notebook funciona apenas com processadores AMD',
    ],
    answer: 1,
    explanation:
      'Notebooks usam módulos de memória SO-DIMM, fisicamente menores que os módulos DIMM usados em desktops, adaptados ao espaço interno reduzido.',
  },

  // Módulo 9 — Upgrade e Otimização
  {
    id: 'm9-q1',
    moduleSlug: 'upgrade-e-otimizacao',
    question: 'Em qual situação um upgrade pontual costuma ter melhor custo-benefício do que trocar o computador inteiro?',
    options: [
      'Quando o processador e a placa-mãe já estão totalmente ultrapassados',
      'Quando existe um gargalo específico identificável, como pouca memória RAM ou um HD mecânico antigo, com o restante do sistema ainda atendendo à necessidade',
      'Sempre, em qualquer situação',
      'Nunca, é sempre melhor comprar um computador novo',
    ],
    answer: 1,
    explanation:
      'Quando o problema de desempenho está concentrado em uma peça específica e o restante do sistema ainda é adequado, um upgrade pontual resolve o gargalo por um custo bem menor.',
  },
  {
    id: 'm9-q2',
    moduleSlug: 'upgrade-e-otimizacao',
    question: 'Por que desativar programas desnecessários da inicialização do Windows ajuda no desempenho?',
    options: [
      'Porque isso apaga arquivos pessoais automaticamente',
      'Porque programas de inicialização consomem memória e processamento mesmo sem estarem sendo usados no momento',
      'Porque isso aumenta a velocidade da internet',
      'Porque isso não tem nenhum efeito real',
    ],
    answer: 1,
    explanation:
      'Programas configurados para abrir junto com o Windows consomem recursos do sistema mesmo quando não estão em uso ativo, e desativar os desnecessários libera esses recursos.',
  },

  // Módulo 10 — Projeto Prático e Boas Práticas Profissionais
  {
    id: 'm10-q1',
    moduleSlug: 'projeto-pratico-e-boas-praticas',
    question: 'Por que é recomendável fazer backup antes de qualquer manutenção que envolva risco, mesmo em procedimentos considerados simples?',
    options: [
      'Porque backups são obrigatórios por lei',
      'Porque mesmo procedimentos simples podem, em casos raros, resultar em perda de dados, e o backup elimina esse risco',
      'Porque isso deixa o computador mais rápido',
      'Porque isso substitui a necessidade de manutenção',
    ],
    answer: 1,
    explanation:
      'Mesmo manutenções consideradas simples carregam algum risco de perda de dados em situações imprevistas. Ter um backup garante que os arquivos importantes estejam seguros.',
  },
  {
    id: 'm10-q2',
    moduleSlug: 'projeto-pratico-e-boas-praticas',
    question: 'Por que é importante explicar o problema e a solução em linguagem simples ao apresentar um orçamento ao cliente?',
    options: [
      'Porque isso é obrigatório por lei',
      'Porque ajuda o cliente a entender e confiar na avaliação, valorizando o serviço prestado',
      'Porque clientes não têm capacidade de entender termos técnicos',
      'Porque isso reduz o valor do serviço',
    ],
    answer: 1,
    explanation:
      'Explicar de forma clara e acessível ajuda o cliente a compreender o problema e a solução proposta, gerando confiança na avaliação técnica.',
  },
]

export const HARDWARE_FINAL_EXAM_PASSING_SCORE = 14
export const HARDWARE_FINAL_EXAM_TOTAL_QUESTIONS = 20
