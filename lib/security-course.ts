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
  emphasis?: boolean
  lessons: CourseLesson[]
}

export const securityCourseModules: CourseModule[] = [
  {
    slug: 'fundamentos',
    title: 'Fundamentos da Segurança da Informação',
    description:
      'Compreenda o que precisa ser protegido, como os riscos surgem e por que segurança depende de pessoas, processos e tecnologia.',
    lessons: [
      {
        slug: 'principios-da-seguranca',
        title: 'Princípios da segurança da informação',
        duration: '35 min',
        summary:
          'Segurança da informação protege dados em qualquer formato, não apenas arquivos digitais. O ponto de partida é entender confidencialidade, integridade e disponibilidade.',
        objectives: [
          'Diferenciar informação, dado, ativo e sistema.',
          'Aplicar confidencialidade, integridade e disponibilidade em situações reais.',
        ],
        keyPoints: [
          {
            title: 'Confidencialidade',
            description:
              'A informação deve ser acessada somente por pessoas e sistemas autorizados. Controle de acesso, criptografia e cuidado ao compartilhar arquivos ajudam a preservar esse princípio.',
          },
          {
            title: 'Integridade',
            description:
              'Dados precisam permanecer corretos, completos e rastreáveis. Permissões, registros de alterações e cópias confiáveis reduzem modificações indevidas ou acidentais.',
          },
          {
            title: 'Disponibilidade',
            description:
              'Informações e serviços devem estar acessíveis quando necessários. Redundância, manutenção, energia protegida e backups testados evitam paralisações prolongadas.',
          },
        ],
        activity: {
          title: 'Mapa dos seus ativos',
          steps: [
            'Liste dez informações ou sistemas importantes para sua rotina.',
            'Marque qual princípio seria mais afetado se cada ativo sofresse um incidente.',
            'Escolha os três ativos que merecem proteção prioritária.',
          ],
        },
        quiz: {
          question:
            'Um servidor fica indisponível durante todo o expediente. Qual princípio foi afetado principalmente?',
          options: ['Confidencialidade', 'Disponibilidade', 'Autenticidade', 'Privacidade'],
          answer: 1,
          explanation:
            'A indisponibilidade impede o acesso ao serviço no momento necessário, afetando diretamente a disponibilidade.',
        },
        reference: {
          label: 'Guia de Segurança da Informação da ANPD',
          href: 'https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-vf.pdf',
        },
      },
      {
        slug: 'ameacas-vulnerabilidades-e-riscos',
        title: 'Ameaças, vulnerabilidades e riscos',
        duration: '40 min',
        summary:
          'Risco nasce quando uma ameaça pode explorar uma vulnerabilidade e causar impacto. Avaliar probabilidade e consequência ajuda a priorizar recursos limitados.',
        objectives: [
          'Reconhecer a diferença entre ameaça, vulnerabilidade, impacto e risco.',
          'Construir uma matriz simples de priorização.',
        ],
        keyPoints: [
          {
            title: 'Ameaça e vulnerabilidade',
            description:
              'A ameaça é algo capaz de causar dano, como fraude, incêndio ou malware. A vulnerabilidade é a fraqueza que permite o dano, como senha reutilizada, sistema desatualizado ou sala sem controle de acesso.',
          },
          {
            title: 'Probabilidade e impacto',
            description:
              'O risco aumenta quando o evento é provável e o impacto é relevante. Avalie efeitos financeiros, operacionais, legais, reputacionais e sobre as pessoas.',
          },
          {
            title: 'Tratamento do risco',
            description:
              'Uma organização pode reduzir, evitar, transferir ou aceitar um risco. A decisão deve ter responsável, prazo, justificativa e acompanhamento.',
          },
        ],
        activity: {
          title: 'Matriz de risco básica',
          steps: [
            'Escolha cinco riscos relacionados aos ativos da aula anterior.',
            'Classifique probabilidade e impacto como baixo, médio ou alto.',
            'Defina uma ação, um responsável e um prazo para os riscos prioritários.',
          ],
        },
        quiz: {
          question: 'Qual exemplo representa uma vulnerabilidade?',
          options: [
            'Uma campanha de phishing em andamento',
            'Uma senha padrão que nunca foi alterada',
            'A perda financeira após uma fraude',
            'Um criminoso tentando acessar uma conta',
          ],
          answer: 1,
          explanation:
            'A senha padrão é uma fraqueza explorável. A campanha e o criminoso são ameaças; a perda financeira é impacto.',
        },
        reference: {
          label: 'NIST Cybersecurity Framework 2.0',
          href: 'https://www.nist.gov/cyberframework',
        },
      },
      {
        slug: 'cultura-e-responsabilidade',
        title: 'Cultura, ética e responsabilidade',
        duration: '35 min',
        summary:
          'Tecnologia não resolve tudo. Uma cultura saudável deixa regras claras, facilita o relato de erros e transforma segurança em responsabilidade compartilhada.',
        objectives: [
          'Identificar o papel de pessoas, liderança e fornecedores.',
          'Criar regras simples que possam ser realmente cumpridas.',
        ],
        keyPoints: [
          {
            title: 'Responsabilidade compartilhada',
            description:
              'A direção define prioridades, a equipe técnica implementa controles e todos os usuários adotam comportamentos seguros. Terceiros também precisam conhecer suas obrigações.',
          },
          {
            title: 'Políticas úteis',
            description:
              'Boas políticas são curtas, acessíveis e acompanhadas de exemplos. Devem explicar uso aceitável, proteção de dados, acesso remoto, incidentes e consequências.',
          },
          {
            title: 'Aprender com erros',
            description:
              'Pessoas escondem incidentes quando temem punição automática. Um canal simples e acolhedor acelera a contenção e permite corrigir processos frágeis.',
          },
        ],
        activity: {
          title: 'Compromisso de segurança',
          steps: [
            'Escreva cinco regras de segurança aplicáveis à sua realidade.',
            'Defina onde incidentes e suspeitas devem ser comunicados.',
            'Escolha uma mensagem mensal de conscientização para a equipe.',
          ],
        },
        quiz: {
          question: 'Qual atitude fortalece uma cultura de segurança?',
          options: [
            'Punir qualquer erro imediatamente',
            'Deixar segurança apenas com a equipe de TI',
            'Facilitar o relato rápido de suspeitas e incidentes',
            'Evitar falar sobre incidentes anteriores',
          ],
          answer: 2,
          explanation:
            'Relatos rápidos reduzem o tempo de resposta e ajudam a organização a aprender e melhorar seus controles.',
        },
        reference: {
          label: 'NIST CSF 2.0 para pequenos negócios',
          href: 'https://www.nist.gov/itl/smallbusinesscyber/nist-cybersecurity-framework-0',
        },
      },
    ],
  },
  {
    slug: 'identidades',
    title: 'Identidades, Senhas e Controle de Acesso',
    description:
      'Proteja contas com senhas únicas, autenticação multifator, recuperação segura e princípio do menor privilégio.',
    lessons: [
      {
        slug: 'senhas-e-gerenciadores',
        title: 'Senhas fortes e gerenciadores',
        duration: '40 min',
        summary:
          'Senhas longas, únicas e armazenadas em um gerenciador confiável reduzem o risco de invasões causadas por reutilização e vazamentos.',
        objectives: [
          'Criar uma estratégia de senhas longas e exclusivas.',
          'Adotar um gerenciador de senhas de forma segura.',
        ],
        keyPoints: [
          {
            title: 'Comprimento e exclusividade',
            description:
              'Prefira frases longas e memoráveis. O NIST recomenda no mínimo 15 caracteres para senha usada como único fator e alerta que regras artificiais de composição podem levar a padrões previsíveis.',
          },
          {
            title: 'Nunca reutilize',
            description:
              'Quando uma senha reutilizada vaza, criminosos testam a mesma combinação em outros serviços. Cada conta deve ter uma credencial diferente.',
          },
          {
            title: 'Gerenciador de senhas',
            description:
              'Um gerenciador gera e guarda credenciais únicas. Proteja o cofre com uma frase mestra forte, MFA e um plano seguro de recuperação.',
          },
        ],
        activity: {
          title: 'Plano de migração',
          steps: [
            'Liste as dez contas mais importantes da sua rotina.',
            'Priorize e-mail, banco, redes sociais, nuvem e conta de trabalho.',
            'Troque senhas repetidas e salve as novas em um gerenciador confiável.',
          ],
        },
        quiz: {
          question: 'Qual prática é mais segura?',
          options: [
            'Usar uma senha complexa em todos os serviços',
            'Trocar apenas uma letra da mesma senha em cada site',
            'Usar uma senha longa e diferente para cada conta',
            'Guardar senhas em um arquivo aberto na área de trabalho',
          ],
          answer: 2,
          explanation:
            'Credenciais longas e exclusivas limitam o dano caso um serviço sofra vazamento.',
        },
        reference: {
          label: 'NIST SP 800-63B-4 — autenticação',
          href: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b-4.pdf',
        },
      },
      {
        slug: 'mfa-passkeys-e-recuperacao',
        title: 'MFA, passkeys e recuperação de contas',
        duration: '40 min',
        summary:
          'Autenticação multifator adiciona uma barreira além da senha. Métodos resistentes a phishing, como passkeys e chaves físicas, oferecem proteção superior.',
        objectives: [
          'Comparar diferentes métodos de autenticação.',
          'Preparar códigos de recuperação sem enfraquecer a conta.',
        ],
        keyPoints: [
          {
            title: 'Mais de uma prova',
            description:
              'MFA combina fatores de conhecimento, posse ou característica biométrica. Um invasor que descobre a senha ainda precisará superar uma segunda barreira.',
          },
          {
            title: 'Resistência a phishing',
            description:
              'Códigos por SMS ou aplicativo ajudam, mas podem ser enganados. Passkeys e chaves de segurança vinculam a autenticação ao serviço correto e reduzem ataques de phishing.',
          },
          {
            title: 'Recuperação segura',
            description:
              'Guarde códigos de recuperação fora do dispositivo principal, proteja o e-mail de recuperação e remova telefones ou dispositivos antigos.',
          },
        ],
        activity: {
          title: 'Ative MFA nas contas críticas',
          steps: [
            'Ative MFA primeiro no e-mail principal e no gerenciador de senhas.',
            'Prefira passkey, chave física ou aplicativo autenticador quando disponível.',
            'Teste e armazene os códigos de recuperação em local protegido.',
          ],
        },
        quiz: {
          question: 'Qual método é geralmente mais resistente a phishing?',
          options: ['Código por SMS', 'Pergunta secreta', 'Passkey', 'Data de nascimento'],
          answer: 2,
          explanation:
            'Passkeys usam criptografia e validação do domínio, reduzindo a possibilidade de entregar a credencial a uma página falsa.',
        },
        reference: {
          label: 'CISA — autenticação multifator',
          href: 'https://www.cisa.gov/secure-our-world/turn-mfa',
        },
      },
      {
        slug: 'menor-privilegio',
        title: 'Menor privilégio e ciclo de acessos',
        duration: '40 min',
        summary:
          'Cada pessoa deve ter apenas o acesso necessário, pelo tempo necessário. Admissões, mudanças de função e desligamentos precisam gerar revisões.',
        objectives: [
          'Aplicar menor privilégio e segregação de funções.',
          'Organizar concessão, revisão e remoção de acessos.',
        ],
        keyPoints: [
          {
            title: 'Acesso mínimo',
            description:
              'Contas administrativas não devem ser usadas no trabalho cotidiano. Permissões elevadas devem ser temporárias, justificadas e registradas.',
          },
          {
            title: 'Funções e aprovações',
            description:
              'Agrupe permissões por função e exija aprovação do responsável pelo processo. Evite conceder acesso diretamente sem documentação.',
          },
          {
            title: 'Revisão e desligamento',
            description:
              'Revise acessos periodicamente e remova contas assim que deixam de ser necessárias. Contas órfãs são portas esquecidas para dados e sistemas.',
          },
        ],
        activity: {
          title: 'Revisão de acesso',
          steps: [
            'Escolha um sistema e liste usuários, funções e permissões.',
            'Identifique contas sem uso, compartilhadas ou com privilégio excessivo.',
            'Documente as correções e defina uma revisão trimestral.',
          ],
        },
        quiz: {
          question: 'O que representa menor privilégio?',
          options: [
            'Todos recebem acesso administrativo para evitar chamados',
            'A pessoa recebe somente o acesso necessário para sua função',
            'Uma conta é compartilhada pela equipe inteira',
            'Permissões nunca são removidas',
          ],
          answer: 1,
          explanation:
            'Menor privilégio limita permissões ao necessário, reduzindo a superfície de ataque e o impacto de erros.',
        },
        reference: {
          label: 'NIST CSF 2.0',
          href: 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20',
        },
      },
    ],
  },
  {
    slug: 'engenharia-social',
    title: 'Phishing e Engenharia Social',
    description:
      'Aprenda a reconhecer manipulação, validar pedidos e navegar com segurança sem depender apenas de ferramentas automáticas.',
    lessons: [
      {
        slug: 'reconhecendo-phishing',
        title: 'Reconhecendo phishing',
        duration: '40 min',
        summary:
          'Phishing usa mensagens convincentes para roubar dados, induzir pagamentos ou instalar software malicioso. A urgência é uma das armas mais comuns.',
        objectives: [
          'Identificar sinais de mensagens fraudulentas.',
          'Verificar remetentes, links e pedidos antes de agir.',
        ],
        keyPoints: [
          {
            title: 'Sinais de alerta',
            description:
              'Desconfie de urgência, ameaça, prêmio inesperado, mudança de pagamento, pedido de segredo, anexo incomum ou domínio parecido com o verdadeiro.',
          },
          {
            title: 'Verifique por outro canal',
            description:
              'Não use o telefone ou link fornecido na própria mensagem suspeita. Procure o contato oficial ou fale diretamente com a pessoa por um canal conhecido.',
          },
          {
            title: 'Relate sem interagir',
            description:
              'Não responda, não clique e não encaminhe para colegas. Use o mecanismo de denúncia e informe a equipe responsável preservando a mensagem original.',
          },
        ],
        activity: {
          title: 'Checklist de mensagem suspeita',
          steps: [
            'Selecione três mensagens reais, removendo dados pessoais.',
            'Verifique domínio, tom, pedido, link e anexo de cada uma.',
            'Escreva como confirmaria a legitimidade por outro canal.',
          ],
        },
        quiz: {
          question: 'Você recebe um pedido urgente de transferência do diretor. O que fazer primeiro?',
          options: [
            'Transferir para não atrasar',
            'Responder ao e-mail pedindo confirmação',
            'Confirmar por um canal oficial já conhecido',
            'Encaminhar a mensagem para toda a equipe',
          ],
          answer: 2,
          explanation:
            'A confirmação independente reduz o risco de fraude por conta comprometida ou falsificação de remetente.',
        },
        reference: {
          label: 'CISA — reconheça e reporte phishing',
          href: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing',
        },
      },
      {
        slug: 'tecnicas-de-manipulacao',
        title: 'Técnicas de manipulação e fraude',
        duration: '35 min',
        summary:
          'Engenharia social explora confiança, medo, autoridade, curiosidade e desejo de ajudar. Reconhecer a pressão emocional permite interromper o impulso.',
        objectives: [
          'Reconhecer pretexting, falsa autoridade e fraude de suporte.',
          'Usar um processo consistente de validação.',
        ],
        keyPoints: [
          {
            title: 'Pretexto convincente',
            description:
              'O golpista cria uma história com informações públicas ou vazadas para parecer legítimo. Detalhes corretos não provam identidade.',
          },
          {
            title: 'Pressão psicológica',
            description:
              'Urgência e autoridade reduzem o pensamento crítico. Pare, respire e aplique o mesmo processo de confirmação, independentemente de quem fez o pedido.',
          },
          {
            title: 'Procedimento vence improviso',
            description:
              'Mudança de dados bancários, reset de senha e acesso remoto devem seguir roteiro com múltiplas confirmações e registro da solicitação.',
          },
        ],
        activity: {
          title: 'Roteiro de validação',
          steps: [
            'Escolha um processo sensível, como pagamento ou redefinição de senha.',
            'Defina duas evidências independentes para confirmar a solicitação.',
            'Registre quem pode aprovar e como escalar uma dúvida.',
          ],
        },
        quiz: {
          question: 'Informações pessoais corretas em uma ligação provam a identidade?',
          options: [
            'Sim, sempre',
            'Somente se a pessoa souber o CPF',
            'Não, dados podem vir de fontes públicas ou vazamentos',
            'Sim, se a voz parecer conhecida',
          ],
          answer: 2,
          explanation:
            'Dados pessoais podem ser obtidos em redes sociais, vazamentos e pesquisas. Use confirmação independente.',
        },
        reference: {
          label: 'CISA — Secure Our World',
          href: 'https://www.cisa.gov/secure-our-world',
        },
      },
      {
        slug: 'navegacao-e-downloads-seguros',
        title: 'Navegação, links, QR codes e downloads',
        duration: '35 min',
        summary:
          'Links encurtados, anúncios falsos, extensões e QR codes podem levar a páginas perigosas. O hábito mais seguro é acessar serviços por favoritos ou endereço oficial.',
        objectives: [
          'Avaliar links e downloads antes de abrir.',
          'Reduzir riscos em navegadores e dispositivos compartilhados.',
        ],
        keyPoints: [
          {
            title: 'Origem confiável',
            description:
              'Baixe programas da loja oficial ou do site do fabricante. Evite cracks, instaladores agregados e resultados patrocinados sem verificar o domínio.',
          },
          {
            title: 'Link não é garantia',
            description:
              'HTTPS protege a conexão, mas sites falsos também podem ter cadeado. Confira o domínio completo e o contexto antes de inserir dados.',
          },
          {
            title: 'Sessões e dispositivos',
            description:
              'Em computadores compartilhados, evite salvar senhas, encerre a sessão e não ignore alertas do navegador ou do sistema operacional.',
          },
        ],
        activity: {
          title: 'Organize acessos seguros',
          steps: [
            'Crie favoritos para banco, e-mail, governo e sistemas de trabalho.',
            'Remova extensões de navegador que você não reconhece ou não usa.',
            'Revise permissões de notificações, câmera, microfone e localização.',
          ],
        },
        quiz: {
          question: 'O cadeado HTTPS significa que o site é legítimo?',
          options: [
            'Sim, sempre',
            'Não; ele protege a conexão, mas o site ainda pode ser falso',
            'Somente em celulares',
            'Somente quando o link veio por e-mail',
          ],
          answer: 1,
          explanation:
            'HTTPS criptografa o tráfego com o domínio acessado, mas não confirma que a empresa ou a intenção do site seja legítima.',
        },
        reference: {
          label: 'CISA — segurança online',
          href: 'https://www.cisa.gov/secure-our-world',
        },
      },
    ],
  },
  {
    slug: 'golpes-bancarios-falso-gerente',
    title: 'Golpes Bancários: Falso Gerente e Falsa Central',
    description:
      'Módulo especial para reconhecer criminosos que fingem ser gerentes ou funcionários de bancos, interromper a fraude e agir rapidamente se houver prejuízo.',
    emphasis: true,
    lessons: [
      {
        slug: 'golpe-do-falso-gerente',
        title: 'Como funciona o golpe do falso gerente',
        duration: '50 min',
        summary:
          'O criminoso usa nome, foto, logotipo, dados pessoais e linguagem bancária para construir confiança. Depois cria urgência e induz a vítima a entregar informações, instalar programas ou movimentar dinheiro.',
        objectives: [
          'Reconhecer as etapas e os sinais do golpe do falso gerente.',
          'Aplicar uma regra de interrupção e confirmação por canal independente.',
        ],
        keyPoints: [
          {
            title: 'A aparência pode ser convincente',
            description:
              'Foto do gerente, nome da agência, número parecido com o oficial e conhecimento de dados pessoais não provam identidade. Essas informações podem vir de redes sociais, vazamentos, documentos expostos ou conversas anteriores.',
          },
          {
            title: 'Urgência, medo e isolamento',
            description:
              'O falso gerente costuma falar em compra suspeita, invasão, bloqueio imediato ou prazo de poucos minutos. Também pode pedir segredo e insistir para que a vítima permaneça na ligação, impedindo uma confirmação tranquila.',
          },
          {
            title: 'Pare e confirme fora da conversa',
            description:
              'Não informe senha, código, token ou leitura da tela; não faça transferências e não siga procedimentos ditados. Encerre o contato e procure o banco pelo aplicativo, pelo telefone impresso no cartão ou por outro canal oficial obtido por você.',
          },
        ],
        activity: {
          title: 'Roteiro para interromper a pressão',
          steps: [
            'Escreva uma frase curta: “Não realizo procedimentos em contatos recebidos. Vou procurar meu banco pelo canal oficial.”',
            'Localize no aplicativo e no cartão os canais oficiais do seu banco e salve-os separadamente.',
            'Pratique encerrar uma ligação mesmo quando a pessoa conhece seus dados ou diz que o caso é urgente.',
          ],
        },
        quiz: {
          question:
            'Uma pessoa com a foto do seu gerente no WhatsApp conhece seu CPF e avisa sobre uma compra urgente. O que fazer?',
          options: [
            'Seguir as orientações porque ela conhece seus dados',
            'Pedir que envie um código para provar a identidade',
            'Encerrar o contato e confirmar pelo aplicativo ou canal oficial do banco',
            'Transferir o dinheiro temporariamente e conferir depois',
          ],
          answer: 2,
          explanation:
            'Dados e imagens podem ser copiados. A confirmação deve ocorrer fora do contato recebido, usando um canal oficial localizado por você.',
        },
        reference: {
          label: 'Banco Central — cuidado com falsas centrais de atendimento',
          href: 'https://www.bcb.gov.br/meubc/faqs/s/golpes',
        },
      },
      {
        slug: 'falsa-central-e-acesso-remoto',
        title: 'Falsa central, telefone mascarado e acesso remoto',
        duration: '45 min',
        summary:
          'Golpistas podem simular uma central de segurança, manipular a identificação da chamada e orientar a instalação de aplicativos que permitem visualizar ou controlar o aparelho.',
        objectives: [
          'Identificar pedidos incompatíveis com um atendimento bancário seguro.',
          'Saber como confirmar uma ligação sem reutilizar o canal suspeito.',
        ],
        keyPoints: [
          {
            title: 'O número exibido não basta',
            description:
              'A identificação de uma chamada pode ser falsificada e uma pesquisa rápida pode levar a anúncios enganosos. Mesmo que o número pareça conhecido, não trate a ligação recebida como prova de identidade.',
          },
          {
            title: 'Aplicativo de acesso remoto é sinal crítico',
            description:
              'Desligue se pedirem instalação de programa, compartilhamento de tela, ativação de acessibilidade, leitura de códigos, aproximação do cartão ou acesso simultâneo ao aplicativo do banco. Essas ações podem entregar o controle ao criminoso.',
          },
          {
            title: 'Refaça o contato com segurança',
            description:
              'Encerre a ligação, aguarde alguns instantes e abra diretamente o aplicativo oficial ou use o telefone impresso no cartão. Não clique no link, não ligue para o número enviado na mensagem e não aceite transferência para outro atendente.',
          },
        ],
        activity: {
          title: 'Auditoria rápida do celular',
          steps: [
            'Revise os aplicativos instalados e identifique ferramentas de acesso remoto que você não usa.',
            'Confira quais aplicativos possuem permissão de acessibilidade, sobreposição de tela, câmera e microfone.',
            'Mostre a uma pessoa de confiança onde ficam os canais oficiais e combine a quem pedir ajuda em caso de dúvida.',
          ],
        },
        quiz: {
          question: 'Qual pedido deve fazer você encerrar imediatamente uma suposta ligação do banco?',
          options: [
            'Confirmar apenas o primeiro nome',
            'Instalar um aplicativo para o atendente proteger sua conta',
            'Comparecer à agência em horário comercial',
            'Consultar uma informação no contrato que você já possui',
          ],
          answer: 1,
          explanation:
            'A instalação de acesso remoto ou o compartilhamento da tela pode dar ao golpista visão e controle do dispositivo e das operações bancárias.',
        },
        reference: {
          label: 'Banco Central — golpes e falsas centrais',
          href: 'https://www.bcb.gov.br/meubc/faqs/s/golpes',
        },
      },
      {
        slug: 'conta-segura-pix-e-boleto-falso',
        title: '“Conta segura”, PIX induzido e boleto falso',
        duration: '45 min',
        summary:
          'Nenhuma conta fica protegida porque o dinheiro foi transferido para outra pessoa. O suposto procedimento de segurança é, na verdade, a própria operação que entrega os valores ao criminoso.',
        objectives: [
          'Reconhecer transferências disfarçadas de cancelamento, teste ou proteção.',
          'Conferir destinatário, valor e tipo de pagamento antes de confirmar.',
        ],
        keyPoints: [
          {
            title: 'Não existe transferência para “conta segura”',
            description:
              'Desconfie de pedido para mover saldo, devolver PIX por nova transferência, pagar boleto de teste ou cancelar compra digitando códigos. Um golpista pode narrar a operação como cancelamento enquanto você realiza um pagamento real.',
          },
          {
            title: 'Leia a tela antes de autorizar',
            description:
              'Confira nome e instituição do recebedor, CPF ou CNPJ mascarado, valor e descrição. Em documentos com QR Code, confirme se o pagamento será um PIX instantâneo. Não avance apenas porque o atendente manda ignorar avisos.',
          },
          {
            title: 'Use limites como barreira',
            description:
              'Mantenha limites compatíveis com sua rotina, especialmente à noite, e ative alertas. Limites não substituem atenção, mas podem reduzir o prejuízo e criar tempo para interromper a fraude.',
          },
        ],
        activity: {
          title: 'Checklist antes de pagar',
          steps: [
            'Abra as configurações do banco e revise limites, alertas e dispositivos autorizados.',
            'Escreva cinco dados que sempre devem ser conferidos na tela final de PIX ou boleto.',
            'Combine uma confirmação adicional para transferências incomuns ou acima de um valor definido.',
          ],
        },
        quiz: {
          question:
            'Um suposto gerente diz que você precisa transferir todo o saldo para uma “conta segura”. Qual é a resposta correta?',
          options: [
            'Fazer a transferência se a conta for do mesmo banco',
            'Transferir apenas uma parte para testar',
            'Não transferir, encerrar o contato e procurar o banco oficialmente',
            'Pedir ao gerente que envie um boleto em vez de PIX',
          ],
          answer: 2,
          explanation:
            'Transferir, pagar boleto ou fazer PIX não é procedimento para proteger saldo. A operação pode enviar o dinheiro diretamente ao golpista.',
        },
        reference: {
          label: 'Banco Central — Segurança no Pix',
          href: 'https://www.bcb.gov.br/estabilidadefinanceira/pix-seguranca',
        },
      },
      {
        slug: 'o-que-fazer-apos-golpe-bancario',
        title: 'O que fazer durante e depois de um golpe bancário',
        duration: '50 min',
        summary:
          'A velocidade da reação faz diferença. Interrompa o contato, procure imediatamente o banco por canal oficial, proteja contas e dispositivos e preserve informações para a contestação e a investigação.',
        objectives: [
          'Executar um plano de emergência em ordem de prioridade.',
          'Entender quando e como solicitar a contestação de um PIX pelo MED.',
        ],
        keyPoints: [
          {
            title: 'Acione o banco imediatamente',
            description:
              'Use o aplicativo ou outro canal oficial para bloquear acessos e cartões, contestar operações e relatar a fraude. Em caso de PIX, solicite o Mecanismo Especial de Devolução (MED) o mais rápido possível. O Banco Central informa prazo de até 80 dias, mas a devolução não é garantida e depende da análise e de recursos disponíveis.',
          },
          {
            title: 'Proteja contas e dispositivo',
            description:
              'De um aparelho confiável, troque primeiro a senha do e-mail e depois as senhas bancárias, encerre sessões desconhecidas e remova aplicativos de acesso remoto. Se o aparelho foi controlado, peça ajuda técnica antes de voltar a usá-lo para operações sensíveis.',
          },
          {
            title: 'Preserve provas e registre',
            description:
              'Guarde conversas, números, horários, comprovantes, chaves PIX, nomes de recebedores e protocolos. Registre boletim de ocorrência e acompanhe a contestação. Avise contatos se sua conta ou número puder ter sido usado para enganar outras pessoas.',
          },
        ],
        activity: {
          title: 'Cartão de emergência antifraude',
          steps: [
            'Escreva em ordem: encerrar contato, abrir o app oficial, bloquear e contestar, proteger e-mail e banco, preservar provas e registrar ocorrência.',
            'Anote os canais oficiais, sem incluir senhas, e mantenha uma cópia acessível a uma pessoa de confiança.',
            'Simule o caso: “Fiz um PIX há cinco minutos”. Cronometre quanto tempo leva para localizar a contestação e o atendimento oficial.',
          ],
        },
        quiz: {
          question: 'Após perceber que fez um PIX em um golpe, qual deve ser a primeira providência?',
          options: [
            'Continuar conversando para tentar convencer o golpista',
            'Esperar até o dia seguinte para ver se o dinheiro volta',
            'Contatar imediatamente o banco por canal oficial e solicitar a contestação pelo MED',
            'Apagar todas as mensagens para esquecer o ocorrido',
          ],
          answer: 2,
          explanation:
            'Agir rapidamente aumenta a possibilidade de bloqueio dos recursos. Depois, preserve as provas, proteja as contas e registre a ocorrência.',
        },
        reference: {
          label: 'Banco Central — o que fazer em caso de golpe ou fraude',
          href: 'https://www.bcb.gov.br/meubc/faqs/p/o-que-fazer-em-caso-de-golpe-fraude-ou-um-crime',
        },
      },
    ],
  },
  {
    slug: 'dispositivos-e-redes',
    title: 'Dispositivos, Redes e Trabalho Remoto',
    description:
      'Reduza a superfície de ataque com atualizações, configuração segura, proteção de redes e cuidados fora do escritório.',
    lessons: [
      {
        slug: 'atualizacoes-e-endpoints',
        title: 'Atualizações e proteção de endpoints',
        duration: '40 min',
        summary:
          'Computadores e celulares acumulam falhas conhecidas. Atualizar rapidamente, remover programas desnecessários e usar proteção nativa reduz ataques comuns.',
        objectives: [
          'Criar uma rotina de atualizações e inventário.',
          'Aplicar uma configuração mínima segura em endpoints.',
        ],
        keyPoints: [
          {
            title: 'Atualização automática',
            description:
              'Ative atualizações automáticas para sistema, navegador, aplicativos, roteador e antivírus. Equipamentos sem suporte devem ser substituídos ou isolados.',
          },
          {
            title: 'Reduza o que não usa',
            description:
              'Cada programa, serviço e conta amplia a superfície de ataque. Desinstale software abandonado e desative recursos desnecessários.',
          },
          {
            title: 'Proteção em camadas',
            description:
              'Firewall, proteção antimalware, bloqueio de tela, criptografia e conta sem privilégio administrativo atuam em conjunto.',
          },
        ],
        activity: {
          title: 'Checklist do dispositivo',
          steps: [
            'Confirme sistema suportado e atualização automática ativa.',
            'Remova programas sem uso e revise inicialização automática.',
            'Ative bloqueio de tela, criptografia e proteção antimalware.',
          ],
        },
        quiz: {
          question: 'Por que remover programas sem uso melhora a segurança?',
          options: [
            'Apenas libera espaço',
            'Reduz componentes que podem conter falhas exploráveis',
            'Impede todos os vírus',
            'Substitui a necessidade de backup',
          ],
          answer: 1,
          explanation:
            'Menos software significa menos código vulnerável, serviços expostos e atualizações para acompanhar.',
        },
        reference: {
          label: 'CISA — atualize seus programas',
          href: 'https://www.cisa.gov/secure-our-world/update-business-software',
        },
      },
      {
        slug: 'wifi-roteadores-e-segmentacao',
        title: 'Wi-Fi, roteadores e segmentação',
        duration: '45 min',
        summary:
          'O roteador é a porta da rede. Credenciais únicas, firmware atualizado, criptografia moderna e redes separadas reduzem movimentos indevidos.',
        objectives: [
          'Configurar uma rede sem fio doméstica ou de pequeno negócio.',
          'Separar visitantes e equipamentos de maior risco.',
        ],
        keyPoints: [
          {
            title: 'Administração protegida',
            description:
              'Troque a senha padrão do roteador, desative administração remota quando não for necessária e mantenha o firmware atualizado.',
          },
          {
            title: 'Criptografia do Wi-Fi',
            description:
              'Use WPA3 ou WPA2 com senha longa. Evite padrões antigos e não divulgue a senha da rede principal para visitantes.',
          },
          {
            title: 'Separação de redes',
            description:
              'Use rede de convidados para visitantes e, quando possível, isole câmeras, TVs, impressoras e dispositivos IoT dos computadores com dados sensíveis.',
          },
        ],
        activity: {
          title: 'Revisão do roteador',
          steps: [
            'Acesse o painel pelo endereço oficial do equipamento.',
            'Revise senha administrativa, firmware, criptografia e dispositivos conectados.',
            'Crie uma rede de convidados e documente quem administra o roteador.',
          ],
        },
        quiz: {
          question: 'Qual dispositivo deve usar preferencialmente uma rede separada?',
          options: [
            'Servidor com dados financeiros e câmera IoT juntos',
            'Apenas o notebook do administrador',
            'Dispositivos IoT e visitantes',
            'Nenhum, separação não ajuda',
          ],
          answer: 2,
          explanation:
            'Visitantes e IoT podem ter controles mais fracos; separá-los reduz o acesso aos equipamentos críticos.',
        },
        reference: {
          label: 'NIST — recursos para pequenos negócios',
          href: 'https://www.nist.gov/itl/smallbusinesscyber',
        },
      },
      {
        slug: 'celulares-e-trabalho-remoto',
        title: 'Celulares e trabalho remoto',
        duration: '35 min',
        summary:
          'Fora do escritório aumentam os riscos de perda, redes inseguras e exposição visual. Controles simples preservam dados e acesso.',
        objectives: [
          'Proteger dispositivos móveis e dados em trânsito.',
          'Definir uma rotina segura para trabalho remoto.',
        ],
        keyPoints: [
          {
            title: 'Proteja o dispositivo',
            description:
              'Use bloqueio forte, criptografia, atualização automática, localização e apagamento remoto. Não deixe notificações sensíveis expostas na tela bloqueada.',
          },
          {
            title: 'Conexões desconhecidas',
            description:
              'Evite operações sensíveis em Wi-Fi público. Prefira rede móvel, hotspot próprio ou acesso corporativo aprovado e nunca ignore alertas de certificado.',
          },
          {
            title: 'Ambiente e privacidade',
            description:
              'Cuidado com conversas, telas visíveis, documentos impressos e carregadores desconhecidos. Mantenha dados de trabalho separados dos pessoais.',
          },
        ],
        activity: {
          title: 'Configuração móvel',
          steps: [
            'Ative bloqueio forte, localização e apagamento remoto.',
            'Revise aplicativos, permissões e contas conectadas.',
            'Defina como reportar rapidamente perda ou roubo.',
          ],
        },
        quiz: {
          question: 'Qual é a opção mais segura para uma operação sensível fora de casa?',
          options: [
            'Wi-Fi público sem senha',
            'Hotspot próprio ou rede móvel confiável',
            'Qualquer rede com nome conhecido',
            'Computador público do local',
          ],
          answer: 1,
          explanation:
            'Uma conexão sob seu controle reduz interceptação e redes falsas, embora outras medidas de segurança ainda sejam necessárias.',
        },
        reference: {
          label: 'CISA — Secure Our World',
          href: 'https://www.cisa.gov/secure-our-world',
        },
      },
    ],
  },
  {
    slug: 'dados-e-privacidade',
    title: 'Proteção de Dados, Backups e LGPD',
    description:
      'Classifique informações, reduza coleta desnecessária, faça backups restauráveis e entenda os princípios básicos da proteção de dados pessoais.',
    lessons: [
      {
        slug: 'classificacao-e-minimizacao',
        title: 'Classificação e minimização de dados',
        duration: '40 min',
        summary:
          'Você não pode proteger o que não conhece. Inventário, classificação e descarte seguro reduzem exposição e custo operacional.',
        objectives: [
          'Classificar dados segundo impacto e necessidade.',
          'Aplicar minimização e retenção adequada.',
        ],
        keyPoints: [
          {
            title: 'Saiba onde estão os dados',
            description:
              'Mapeie coleta, armazenamento, uso, compartilhamento e descarte. Inclua e-mail, nuvem, planilhas, papel, backups e fornecedores.',
          },
          {
            title: 'Classifique pelo impacto',
            description:
              'Uma escala simples pode separar conteúdo público, interno, confidencial e restrito. A classificação determina acesso, criptografia e retenção.',
          },
          {
            title: 'Colete e guarde menos',
            description:
              'Dados sem finalidade aumentam risco e custo. Defina prazo de retenção, eliminação segura e processo para suspender descarte quando houver obrigação legal.',
          },
        ],
        activity: {
          title: 'Inventário de dados',
          steps: [
            'Escolha um processo e registre quais dados ele coleta.',
            'Classifique sensibilidade, local, responsável e prazo de retenção.',
            'Identifique dados duplicados ou sem finalidade clara.',
          ],
        },
        quiz: {
          question: 'Qual prática reduz diretamente a exposição de dados?',
          options: [
            'Guardar tudo para sempre',
            'Copiar dados para mais planilhas',
            'Coletar somente o necessário e eliminar no prazo definido',
            'Compartilhar uma conta entre departamentos',
          ],
          answer: 2,
          explanation:
            'Minimização e retenção limitada reduzem a quantidade de informação que pode ser exposta em um incidente.',
        },
        reference: {
          label: 'ANPD — materiais sobre proteção de dados',
          href: 'https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes',
        },
      },
      {
        slug: 'backup-e-criptografia',
        title: 'Backups, restauração e criptografia',
        duration: '45 min',
        summary:
          'Backup só protege quando pode ser restaurado. Cópias isoladas, testes periódicos e criptografia adequada reduzem perda e extorsão.',
        objectives: [
          'Planejar backups conforme importância e tempo de recuperação.',
          'Diferenciar criptografia em trânsito e em repouso.',
        ],
        keyPoints: [
          {
            title: 'Estratégia 3-2-1',
            description:
              'Mantenha três cópias, em dois tipos de mídia, com uma cópia fora do ambiente principal. Pelo menos uma deve resistir a alteração ou exclusão indevida.',
          },
          {
            title: 'Teste de restauração',
            description:
              'Acompanhe falhas e realize testes. Defina quanto dado pode ser perdido e quanto tempo o serviço pode ficar parado para orientar frequência e arquitetura.',
          },
          {
            title: 'Criptografia e chaves',
            description:
              'Criptografe dispositivos, backups e comunicações sensíveis. Chaves e senhas de recuperação precisam de proteção separada e acesso controlado.',
          },
        ],
        activity: {
          title: 'Plano de backup',
          steps: [
            'Escolha três conjuntos de dados críticos.',
            'Defina frequência, destino, responsável e tempo esperado de restauração.',
            'Agende um teste documentado de recuperação.',
          ],
        },
        quiz: {
          question: 'O que confirma que um backup é realmente útil?',
          options: [
            'O ícone do programa está verde',
            'A cópia ocupa bastante espaço',
            'Um teste de restauração bem-sucedido',
            'O backup está no mesmo computador',
          ],
          answer: 2,
          explanation:
            'Somente a restauração testada demonstra que dados e procedimentos conseguem apoiar a recuperação.',
        },
        reference: {
          label: 'CISA — guia contra ransomware',
          href: 'https://www.cisa.gov/stopransomware/ransomware-guide',
        },
      },
      {
        slug: 'lgpd-na-pratica',
        title: 'LGPD na prática para pequenos negócios',
        duration: '45 min',
        summary:
          'A LGPD orienta o tratamento de dados pessoais no Brasil. Segurança, prevenção, transparência e necessidade devem aparecer em todo o ciclo de vida.',
        objectives: [
          'Reconhecer dados pessoais e papéis de tratamento.',
          'Relacionar princípios da LGPD a controles de segurança.',
        ],
        keyPoints: [
          {
            title: 'Dado pessoal e tratamento',
            description:
              'Dado pessoal identifica ou pode identificar uma pessoa. Tratamento inclui coleta, acesso, armazenamento, compartilhamento, alteração e eliminação.',
          },
          {
            title: 'Princípios',
            description:
              'Finalidade, adequação, necessidade, transparência, segurança, prevenção e prestação de contas orientam decisões. Consentimento não é a única hipótese legal.',
          },
          {
            title: 'Medidas proporcionais',
            description:
              'Documente processos, limite acessos, treine pessoas, escolha fornecedores e prepare resposta a incidentes. Situações legais específicas exigem orientação profissional.',
          },
        ],
        activity: {
          title: 'Mapa de tratamento',
          steps: [
            'Escolha um formulário, cadastro ou processo com dados pessoais.',
            'Registre finalidade, dados coletados, acesso, compartilhamento e retenção.',
            'Anote riscos, controles existentes e melhorias necessárias.',
          ],
        },
        quiz: {
          question: 'Qual princípio recomenda limitar dados ao necessário para a finalidade?',
          options: ['Publicidade', 'Necessidade', 'Disponibilidade', 'Irreversibilidade'],
          answer: 1,
          explanation:
            'O princípio da necessidade limita o tratamento aos dados pertinentes, proporcionais e não excessivos.',
        },
        reference: {
          label: 'ANPD — perguntas frequentes sobre LGPD',
          href: 'https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes/perguntas-frequentes',
        },
      },
    ],
  },
  {
    slug: 'incidentes',
    title: 'Detecção e Resposta a Incidentes',
    description:
      'Identifique sinais, organize comunicação, contenha danos e recupere operações com um plano simples e treinado.',
    lessons: [
      {
        slug: 'sinais-logs-e-alertas',
        title: 'Sinais, logs e alertas',
        duration: '40 min',
        summary:
          'Quanto mais cedo um incidente é percebido, menor tende a ser o impacto. Logs centralizados e alertas úteis dão contexto para investigar.',
        objectives: [
          'Reconhecer sinais comuns de comprometimento.',
          'Definir registros e alertas prioritários.',
        ],
        keyPoints: [
          {
            title: 'Comportamento incomum',
            description:
              'Acessos em horários ou locais estranhos, criação de contas, desativação de proteção, muitos erros, tráfego anormal e arquivos renomeados merecem atenção.',
          },
          {
            title: 'Logs com contexto',
            description:
              'Registre autenticação, privilégios, alterações administrativas, eventos de endpoint, nuvem e rede. Sincronize relógios e proteja os registros contra alteração.',
          },
          {
            title: 'Alerta acionável',
            description:
              'Cada alerta precisa de responsável, prioridade, prazo e procedimento. Excesso de alertas irrelevantes cria fadiga e esconde eventos importantes.',
          },
        ],
        activity: {
          title: 'Catálogo de sinais',
          steps: [
            'Liste cinco eventos que indicariam problema nos sistemas críticos.',
            'Defina onde cada evento é registrado e quem recebe o alerta.',
            'Crie uma instrução curta para a primeira análise.',
          ],
        },
        quiz: {
          question: 'Qual característica torna um alerta útil?',
          options: [
            'Ele dispara para qualquer evento',
            'Tem responsável e ação inicial definida',
            'Nunca é revisado',
            'Só pode ser entendido por quem criou',
          ],
          answer: 1,
          explanation:
            'Um alerta acionável direciona rapidamente a pessoa certa para um procedimento conhecido.',
        },
        reference: {
          label: 'NIST SP 800-61 Rev. 3',
          href: 'https://www.nist.gov/news-events/news/2025/04/nist-revises-sp-800-61-incident-response-recommendations-and-considerations',
        },
      },
      {
        slug: 'plano-de-resposta',
        title: 'Plano de resposta a incidentes',
        duration: '50 min',
        summary:
          'Um plano define autoridade, contatos, evidências, comunicação, contenção, recuperação e aprendizado antes do momento de crise.',
        objectives: [
          'Estruturar papéis e etapas de resposta.',
          'Preservar evidências e comunicação adequada.',
        ],
        keyPoints: [
          {
            title: 'Preparação e decisão',
            description:
              'Defina equipe, substitutos, contatos de fornecedores, jurídico, comunicação e critérios de severidade. Mantenha uma cópia do plano acessível fora dos sistemas principais.',
          },
          {
            title: 'Conter com cuidado',
            description:
              'Isole o necessário sem destruir evidências. Registre horários, decisões, pessoas envolvidas e mudanças realizadas durante o incidente.',
          },
          {
            title: 'Recuperar e aprender',
            description:
              'Elimine a causa, restaure de fonte confiável, monitore reincidência e conduza reunião sem culpabilização para corrigir controles e procedimentos.',
          },
        ],
        activity: {
          title: 'Plano de uma página',
          steps: [
            'Defina quem declara o incidente e quem pode desligar sistemas.',
            'Liste contatos, canais alternativos e critérios de severidade.',
            'Escreva as primeiras cinco ações para um acesso indevido.',
          ],
        },
        quiz: {
          question: 'Por que o plano deve existir antes do incidente?',
          options: [
            'Para eliminar todo risco',
            'Para reduzir improviso e tempo de decisão durante a crise',
            'Para substituir ferramentas de segurança',
            'Para evitar registrar decisões',
          ],
          answer: 1,
          explanation:
            'Papéis, contatos e critérios previamente definidos aceleram decisões e reduzem erros sob pressão.',
        },
        reference: {
          label: 'NIST — resposta a incidentes',
          href: 'https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/responding-cyber-incident',
        },
      },
      {
        slug: 'ransomware-e-recuperacao',
        title: 'Ransomware e recuperação',
        duration: '45 min',
        summary:
          'Ransomware pode criptografar, apagar e exfiltrar dados. Prevenção, segmentação, backups isolados e resposta treinada reduzem o impacto.',
        objectives: [
          'Reconhecer comportamentos associados a ransomware.',
          'Aplicar contenção e recuperação sem agravar o incidente.',
        ],
        keyPoints: [
          {
            title: 'Preparar antes',
            description:
              'Corrija vulnerabilidades, proteja acesso remoto, aplique MFA, segmente redes e mantenha backups isolados. Teste o plano e a recuperação regularmente.',
          },
          {
            title: 'Isolar rapidamente',
            description:
              'Ao confirmar sinais, desconecte sistemas afetados da rede conforme o plano. Preserve informações e acione especialistas, liderança e partes responsáveis.',
          },
          {
            title: 'Recuperação confiável',
            description:
              'Identifique o vetor inicial, redefina credenciais, reinstale quando necessário e restaure apenas após validar que o ambiente está limpo.',
          },
        ],
        activity: {
          title: 'Simulação de mesa',
          steps: [
            'Imagine que arquivos compartilhados começaram a ser renomeados.',
            'Liste as ações dos primeiros 15 minutos, da primeira hora e do primeiro dia.',
            'Anote decisões que dependem de fornecedor, jurídico ou direção.',
          ],
        },
        quiz: {
          question: 'Qual deve ser uma das primeiras ações diante de ransomware ativo?',
          options: [
            'Conectar mais discos para copiar arquivos',
            'Isolar os sistemas afetados conforme o plano',
            'Apagar todos os logs',
            'Publicar detalhes nas redes sociais',
          ],
          answer: 1,
          explanation:
            'O isolamento ajuda a limitar a propagação, preservando o processo de investigação e recuperação.',
        },
        reference: {
          label: 'CISA StopRansomware',
          href: 'https://www.cisa.gov/stopransomware/ransomware-guide',
        },
      },
    ],
  },
  {
    slug: 'governanca',
    title: 'Gestão de Segurança com NIST CSF 2.0',
    description:
      'Organize a segurança pelas funções Governar, Identificar, Proteger, Detectar, Responder e Recuperar.',
    lessons: [
      {
        slug: 'governar-e-identificar',
        title: 'Governar e Identificar',
        duration: '45 min',
        summary:
          'Governança conecta segurança aos objetivos do negócio. Identificação dá visibilidade sobre ativos, dependências, riscos e prioridades.',
        objectives: [
          'Relacionar segurança a decisões de negócio.',
          'Criar inventário, contexto e prioridades de risco.',
        ],
        keyPoints: [
          {
            title: 'Governar',
            description:
              'Defina estratégia, papéis, políticas, supervisão, apetite a risco e requisitos legais. A liderança deve acompanhar riscos cibernéticos como acompanha riscos financeiros e operacionais.',
          },
          {
            title: 'Identificar',
            description:
              'Conheça hardware, software, dados, serviços, pessoas, fornecedores e dependências. Avalie vulnerabilidades e impacto para priorizar recursos.',
          },
          {
            title: 'Perfil atual e desejado',
            description:
              'Registre como a organização está hoje e onde precisa chegar. Lacunas viram ações com prioridade, responsável, custo e prazo.',
          },
        ],
        activity: {
          title: 'Perfil inicial',
          steps: [
            'Liste objetivos do negócio que dependem de tecnologia.',
            'Associe ativos, fornecedores e principais riscos a cada objetivo.',
            'Defina três resultados de segurança desejados para os próximos 90 dias.',
          ],
        },
        quiz: {
          question: 'Qual é o papel principal da função Governar?',
          options: [
            'Instalar antivírus em cada computador',
            'Definir direção, responsabilidades e supervisão dos riscos',
            'Restaurar arquivos apagados',
            'Criar apenas relatórios técnicos',
          ],
          answer: 1,
          explanation:
            'Governar estabelece contexto, estratégia, responsabilidades e acompanhamento para orientar as demais funções.',
        },
        reference: {
          label: 'NIST CSF 2.0',
          href: 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20',
        },
      },
      {
        slug: 'proteger-e-detectar',
        title: 'Proteger e Detectar',
        duration: '45 min',
        summary:
          'Proteção reduz a probabilidade e o impacto; detecção identifica eventos para que a resposta comece no momento adequado.',
        objectives: [
          'Selecionar controles preventivos proporcionais.',
          'Planejar monitoramento e análise contínua.',
        ],
        keyPoints: [
          {
            title: 'Proteger',
            description:
              'Aplique identidade e acesso, conscientização, proteção de dados, manutenção e resiliência tecnológica conforme os riscos prioritários.',
          },
          {
            title: 'Detectar',
            description:
              'Monitore anomalias e eventos relevantes. Combine ferramentas, contexto do negócio e capacidade humana de investigar alertas.',
          },
          {
            title: 'Controle verificável',
            description:
              'Não basta declarar que um controle existe. Teste atualização, restauração, acesso, alerta e escalonamento para confirmar o resultado.',
          },
        ],
        activity: {
          title: 'Controles por risco',
          steps: [
            'Escolha três riscos prioritários do seu mapa.',
            'Defina um controle preventivo e um controle de detecção para cada risco.',
            'Descreva como testar se cada controle funciona.',
          ],
        },
        quiz: {
          question: 'Qual exemplo representa um controle de detecção?',
          options: [
            'MFA em uma conta',
            'Alerta de login impossível entre países distantes',
            'Criptografia de disco',
            'Política de mesa limpa',
          ],
          answer: 1,
          explanation:
            'O alerta identifica um comportamento anômalo para investigação; os demais exemplos atuam principalmente na prevenção.',
        },
        reference: {
          label: 'NIST CSF 2.0 — guia para pequenos negócios',
          href: 'https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=957322',
        },
      },
      {
        slug: 'responder-e-recuperar',
        title: 'Responder e Recuperar',
        duration: '40 min',
        summary:
          'Resposta limita o incidente e coordena comunicação. Recuperação restaura operações, confirma integridade e incorpora lições aprendidas.',
        objectives: [
          'Relacionar resposta e recuperação à continuidade.',
          'Definir comunicação e melhoria pós-incidente.',
        ],
        keyPoints: [
          {
            title: 'Responder',
            description:
              'Gerencie, analise, contenha, erradique e comunique de forma coordenada. Priorize segurança das pessoas e serviços críticos.',
          },
          {
            title: 'Recuperar',
            description:
              'Restaure por prioridade, valide dados e sistemas, monitore sinais residuais e mantenha partes interessadas informadas sobre progresso e riscos.',
          },
          {
            title: 'Melhoria contínua',
            description:
              'Registre causas, decisões, atrasos e controles que falharam. Atualize riscos, procedimentos, arquitetura e treinamento.',
          },
        ],
        activity: {
          title: 'Prioridades de recuperação',
          steps: [
            'Liste cinco serviços e ordene pela necessidade do negócio.',
            'Defina dependências, responsável e tempo desejado de retorno.',
            'Crie critérios para declarar cada serviço recuperado.',
          ],
        },
        quiz: {
          question: 'Quando um serviço deve ser considerado recuperado?',
          options: [
            'Assim que o equipamento liga',
            'Quando está restaurado, validado e monitorado conforme critérios definidos',
            'Quando o incidente deixa de aparecer nas notícias',
            'Antes de verificar a integridade dos dados',
          ],
          answer: 1,
          explanation:
            'Recuperação exige retorno funcional, integridade validada e acompanhamento para detectar recorrência.',
        },
        reference: {
          label: 'NIST SP 800-61 Rev. 3',
          href: 'https://www.nist.gov/news-events/news/2025/04/nist-revises-sp-800-61-incident-response-recommendations-and-considerations',
        },
      },
    ],
  },
  {
    slug: 'aplicacoes-e-nuvem',
    title: 'Aplicações, Nuvem e Fornecedores',
    description:
      'Conheça riscos comuns de aplicações web, configuração em nuvem e cadeia de fornecedores sem entrar em técnicas ofensivas.',
    lessons: [
      {
        slug: 'owasp-top-10-2025',
        title: 'OWASP Top 10:2025 para todos',
        duration: '50 min',
        summary:
          'O OWASP Top 10 organiza riscos críticos de aplicações web. Usuários, gestores e desenvolvedores podem usar a lista para melhorar requisitos e validações.',
        objectives: [
          'Reconhecer as categorias do OWASP Top 10:2025.',
          'Transformar riscos técnicos em perguntas de controle.',
        ],
        keyPoints: [
          {
            title: 'Acesso, autenticação e configuração',
            description:
              'Controle de acesso quebrado, falhas de autenticação e configuração insegura permitem que pessoas façam mais do que deveriam ou encontrem serviços expostos.',
          },
          {
            title: 'Projeto, criptografia e integridade',
            description:
              'Projeto inseguro, falhas criptográficas e problemas de integridade de software ou dados exigem decisões desde a arquitetura, não apenas correções finais.',
          },
          {
            title: 'Injeção, cadeia e monitoramento',
            description:
              'Entradas não tratadas, componentes comprometidos, logs fracos e condições excepcionais mal tratadas ampliam o impacto e dificultam resposta.',
          },
        ],
        activity: {
          title: 'Perguntas para um fornecedor',
          steps: [
            'Escolha um sistema web usado pela organização.',
            'Crie perguntas sobre MFA, permissões, atualizações, criptografia, logs e incidentes.',
            'Registre evidências esperadas, não apenas respostas “sim” ou “não”.',
          ],
        },
        quiz: {
          question: 'Qual risco ocupa a primeira posição no OWASP Top 10:2025?',
          options: [
            'Broken Access Control',
            'Insecure Design',
            'Cryptographic Failures',
            'Security Logging Failures',
          ],
          answer: 0,
          explanation:
            'A01:2025 é Broken Access Control, relacionado a falhas na aplicação das permissões e restrições de acesso.',
        },
        reference: {
          label: 'OWASP Top 10:2025',
          href: 'https://owasp.org/Top10/2025/0x00_2025-Introduction/',
        },
      },
      {
        slug: 'nuvem-e-responsabilidade',
        title: 'Nuvem e responsabilidade compartilhada',
        duration: '40 min',
        summary:
          'O provedor protege parte da infraestrutura, mas o cliente continua responsável por identidades, configurações, dados e uso seguro dos serviços.',
        objectives: [
          'Entender responsabilidade compartilhada.',
          'Revisar controles básicos de um serviço em nuvem.',
        ],
        keyPoints: [
          {
            title: 'Responsabilidades diferentes',
            description:
              'A divisão varia conforme o serviço. Quanto mais gerenciado, mais o provedor opera; ainda assim, contas, dados, permissões e configurações do cliente permanecem críticas.',
          },
          {
            title: 'Configuração e exposição',
            description:
              'Armazenamento público, chaves expostas, permissões amplas e ausência de logs são causas recorrentes de incidentes. Use padrões privados e revisão automatizada.',
          },
          {
            title: 'Continuidade e saída',
            description:
              'Entenda backup, região, disponibilidade, exportação e exclusão de dados. Prepare-se para falha do provedor ou encerramento do contrato.',
          },
        ],
        activity: {
          title: 'Revisão de um serviço em nuvem',
          steps: [
            'Escolha e-mail, armazenamento ou sistema SaaS usado pela equipe.',
            'Revise administradores, MFA, compartilhamentos, logs e recuperação.',
            'Documente como exportar dados e quem contatar em um incidente.',
          ],
        },
        quiz: {
          question: 'Ao usar nuvem, quem protege as permissões dos usuários da empresa?',
          options: [
            'Somente o provedor',
            'O cliente, dentro do modelo de responsabilidade compartilhada',
            'Ninguém',
            'A operadora de internet',
          ],
          answer: 1,
          explanation:
            'O cliente normalmente gerencia identidades e permissões, mesmo quando a infraestrutura é operada pelo provedor.',
        },
        reference: {
          label: 'ANPD — segurança para agentes de pequeno porte',
          href: 'https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-vf.pdf',
        },
      },
      {
        slug: 'fornecedores-e-cadeia',
        title: 'Fornecedores e cadeia de software',
        duration: '40 min',
        summary:
          'Um fornecedor pode processar dados ou acessar sistemas críticos. Avaliação, contratos, monitoramento e plano de saída reduzem dependências perigosas.',
        objectives: [
          'Avaliar fornecedores conforme risco.',
          'Incluir requisitos de segurança no ciclo de contratação.',
        ],
        keyPoints: [
          {
            title: 'Avalie pelo impacto',
            description:
              'Quanto maior o acesso a dados e operações, maior a diligência. Verifique controles, histórico, subcontratados, continuidade e capacidade de resposta.',
          },
          {
            title: 'Contrato e evidência',
            description:
              'Defina responsabilidades, notificação de incidentes, proteção de dados, auditoria, devolução, eliminação e encerramento. Peça evidências proporcionais ao risco.',
          },
          {
            title: 'Acompanhe mudanças',
            description:
              'A avaliação não termina na contratação. Revise acessos, relatórios, mudanças de serviço, incidentes e dependências durante todo o relacionamento.',
          },
        ],
        activity: {
          title: 'Ficha de fornecedor crítico',
          steps: [
            'Escolha um fornecedor com acesso a dados ou sistemas.',
            'Registre serviço, dados, acessos, subcontratados e dependências.',
            'Defina requisitos, evidências, frequência de revisão e plano de saída.',
          ],
        },
        quiz: {
          question: 'Quando a segurança de um fornecedor deve ser avaliada?',
          options: [
            'Somente depois de um incidente',
            'Apenas na assinatura do contrato',
            'Antes da contratação e durante todo o relacionamento',
            'Nunca, pois é responsabilidade exclusiva dele',
          ],
          answer: 2,
          explanation:
            'Riscos, serviços e controles mudam; por isso a avaliação precisa acompanhar o ciclo do fornecedor.',
        },
        reference: {
          label: 'NIST CSF 2.0 — cadeia de suprimentos',
          href: 'https://www.nist.gov/cyberframework/quick-start-guides',
        },
      },
    ],
  },
  {
    slug: 'projeto-final',
    title: 'Programa Prático de Segurança',
    description:
      'Transforme o aprendizado em diagnóstico, plano de 30 dias e exercício final para sua casa, equipe ou pequeno negócio.',
    lessons: [
      {
        slug: 'diagnostico-de-maturidade',
        title: 'Diagnóstico de maturidade',
        duration: '50 min',
        summary:
          'Um diagnóstico simples compara práticas atuais com resultados desejados. O objetivo não é obter nota perfeita, mas escolher melhorias relevantes.',
        objectives: [
          'Avaliar práticas nas seis funções do NIST CSF 2.0.',
          'Priorizar lacunas conforme risco e capacidade.',
        ],
        keyPoints: [
          {
            title: 'Perguntas objetivas',
            description:
              'Use perguntas verificáveis: existe responsável, registro, teste e evidência? Diferencie prática inexistente, informal, documentada e acompanhada.',
          },
          {
            title: 'Priorize resultados',
            description:
              'Comece por contas críticas, backups, atualizações, inventário e resposta. Considere impacto, esforço, dependências e ganhos rápidos.',
          },
          {
            title: 'Registre limitações',
            description:
              'Nem tudo pode ser resolvido imediatamente. Documente riscos aceitos, justificativas, responsáveis e data de revisão.',
          },
        ],
        activity: {
          title: 'Autoavaliação',
          steps: [
            'Dê uma nota de 0 a 3 para Governar, Identificar, Proteger, Detectar, Responder e Recuperar.',
            'Escreva uma evidência e uma lacuna para cada função.',
            'Escolha as cinco lacunas com maior relação com riscos prioritários.',
          ],
        },
        quiz: {
          question: 'Qual é o principal objetivo de um diagnóstico de maturidade?',
          options: [
            'Obter nota máxima imediatamente',
            'Comparar situação atual e desejada para priorizar melhorias',
            'Substituir a gestão de riscos',
            'Comprar todas as ferramentas disponíveis',
          ],
          answer: 1,
          explanation:
            'O diagnóstico orienta decisões e investimentos ao tornar lacunas e prioridades visíveis.',
        },
        reference: {
          label: 'NIST — guia rápido para pequenos negócios',
          href: 'https://www.nist.gov/itl/smallbusinesscyber/quick-start-guides',
        },
      },
      {
        slug: 'plano-de-30-dias',
        title: 'Plano de segurança em 30 dias',
        duration: '55 min',
        summary:
          'Um plano curto deve equilibrar proteção imediata, organização e capacidade de resposta. Poucas ações concluídas valem mais do que uma lista infinita.',
        objectives: [
          'Criar ações específicas, mensuráveis e responsáveis.',
          'Distribuir melhorias em quatro semanas realistas.',
        ],
        keyPoints: [
          {
            title: 'Semana 1 — visibilidade',
            description:
              'Inventarie ativos, contas críticas e dados; confirme responsáveis; identifique sistemas sem suporte e acessos administrativos.',
          },
          {
            title: 'Semanas 2 e 3 — proteção',
            description:
              'Ative MFA, corrija atualizações, revise privilégios, organize backups e proteja roteadores, dispositivos e compartilhamentos.',
          },
          {
            title: 'Semana 4 — resposta e teste',
            description:
              'Crie contatos e plano de incidente, teste restauração, faça simulação curta e defina indicadores para o próximo ciclo.',
          },
        ],
        activity: {
          title: 'Seu plano de 30 dias',
          steps: [
            'Escolha no máximo dez ações do diagnóstico.',
            'Defina responsável, prazo, evidência de conclusão e dependências.',
            'Agende revisões semanais e uma apresentação final dos resultados.',
          ],
        },
        quiz: {
          question: 'Qual ação deve ter prioridade em um plano inicial?',
          options: [
            'A ação mais cara disponível',
            'Uma ação ligada aos riscos críticos e que pode ser verificada',
            'Qualquer ação sem responsável',
            'A criação de documentos sem aplicação prática',
          ],
          answer: 1,
          explanation:
            'Prioridade deve combinar redução de risco, viabilidade, responsável claro e evidência de resultado.',
        },
        reference: {
          label: 'CISA — quatro práticas essenciais',
          href: 'https://www.cisa.gov/secure-our-world',
        },
      },
      {
        slug: 'projeto-e-revisao-final',
        title: 'Projeto e revisão final',
        duration: '70 min',
        summary:
          'O projeto final reúne inventário, riscos, controles, resposta e melhoria contínua em um programa simples que pode ser apresentado e acompanhado.',
        objectives: [
          'Consolidar os artefatos produzidos ao longo do curso.',
          'Definir indicadores e um próximo ciclo de melhoria.',
        ],
        keyPoints: [
          {
            title: 'Programa mínimo',
            description:
              'Reúna escopo, responsáveis, ativos críticos, riscos, controles prioritários, plano de incidente, backup, fornecedores e cronograma de revisão.',
          },
          {
            title: 'Indicadores úteis',
            description:
              'Acompanhe MFA em contas críticas, correções pendentes, restaurações testadas, acessos revisados, tempo de relato e ações concluídas.',
          },
          {
            title: 'Ciclo contínuo',
            description:
              'Segurança não termina. Reavalie quando houver mudança de sistema, fornecedor, equipe, ameaça, obrigação ou após incidentes e testes.',
          },
        ],
        activity: {
          title: 'Entrega final',
          steps: [
            'Organize os exercícios em um documento com versão, data e responsável.',
            'Apresente três riscos, cinco ações e o plano de resposta a alguém da equipe.',
            'Agende a próxima revisão e escolha um tema para aprofundamento.',
          ],
        },
        quiz: {
          question: 'Quando o programa de segurança está concluído definitivamente?',
          options: [
            'Depois de instalar antivírus',
            'Depois de escrever uma política',
            'Nunca; ele exige acompanhamento e melhoria contínua',
            'Quando não há incidentes por um mês',
          ],
          answer: 2,
          explanation:
            'Riscos, tecnologia e negócios mudam continuamente. O programa precisa ser revisto, testado e aprimorado.',
        },
        reference: {
          label: 'NIST Cybersecurity Framework 2.0',
          href: 'https://www.nist.gov/cyberframework',
        },
      },
    ],
  },
]

export const securityCourseLessons = securityCourseModules.flatMap(
  (module, moduleIndex) =>
    module.lessons.map((lesson, lessonIndex) => ({
      ...lesson,
      module,
      moduleIndex,
      lessonIndex,
    })),
)

export const securityCourseStats = {
  modules: securityCourseModules.length,
  lessons: securityCourseLessons.length,
  workload: '21h',
}

export function getSecurityLesson(slug: string) {
  return securityCourseLessons.find((lesson) => lesson.slug === slug)
}

export const securityCourseSources = [
  {
    label: 'NIST Cybersecurity Framework 2.0',
    href: 'https://www.nist.gov/cyberframework',
  },
  {
    label: 'CISA Secure Our World',
    href: 'https://www.cisa.gov/secure-our-world',
  },
  {
    label: 'OWASP Top 10:2025',
    href: 'https://owasp.org/Top10/2025/0x00_2025-Introduction/',
  },
  {
    label: 'ANPD — materiais educativos e LGPD',
    href: 'https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes',
  },
  {
    label: 'Banco Central — segurança, golpes e Pix',
    href: 'https://www.bcb.gov.br/estabilidadefinanceira/pix-seguranca',
  },
]
