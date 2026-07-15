import {
  Cpu,
  Gamepad2,
  Headphones,
  Home,
  Laptop,
  Monitor,
  Smartphone,
  Wrench,
  Code2,
  Network,
  ShieldCheck,
  Database,
} from 'lucide-react'

export const categories = [
  {
    name: 'Notebooks',
    offers: 156,
    icon: Laptop,
    affiliate: 'https://meli.la/1gdYbd7',
  },
  {
    name: 'Celulares',
    offers: 232,
    icon: Smartphone,
    affiliate: 'https://meli.la/1sXqMvB',
  },
  {
    name: 'Informática',
    offers: 189,
    icon: Cpu,
    affiliate: 'https://meli.la/12BRoSy',
  },
  {
    name: 'Games',
    offers: 98,
    icon: Gamepad2,
    affiliate: 'https://meli.la/28K9h8j',
  },
  {
    name: 'Smart Home',
    offers: 72,
    icon: Home,
    affiliate: 'https://meli.la/1s72DRt',
  },
  {
    name: 'Acessórios',
    offers: 213,
    icon: Headphones,
    affiliate: 'https://meli.la/2KuycwK',
  },
  {
    name: 'Monitores',
    offers: 86,
    icon: Monitor,
    affiliate: 'https://meli.la/2Ta8TYK',
  },
]

export const products = [
  {
    title: 'Notebook Acer Aspire 5 Intel Core i5 16GB SSD 512GB',
    price: 'R$ 2.999,00',
    oldPrice: 'R$ 3.529,00',
    discount: '-15%',
    category: 'Notebooks',
    image: '💻',
    rating: 128,
    store: 'Mercado Livre',
    installments: '10x de R$ 299,90',
    shipping: 'Frete grátis',
    affiliate: 'https://www.mercadolivre.com.br/',
  },
  {
    title: 'Smartphone Samsung Galaxy S23 128GB 5G',
    price: 'R$ 2.399,00',
    oldPrice: 'R$ 2.999,00',
    discount: '-20%',
    category: 'Celulares',
    image: '📱',
    rating: 96,
    store: 'Mercado Livre',
    installments: '10x de R$ 239,90',
    shipping: 'Frete grátis',
    affiliate: 'https://www.mercadolivre.com.br/',
  },
  {
    title: 'Headset HyperX Cloud Stinger Core Gamer',
    price: 'R$ 179,90',
    oldPrice: 'R$ 199,90',
    discount: '-10%',
    category: 'Acessórios',
    image: '🎧',
    rating: 75,
    store: 'Mercado Livre',
    installments: '6x de R$ 29,98',
    shipping: 'Envio rápido',
    affiliate: 'https://www.mercadolivre.com.br/',
  },
  {
    title: 'Placa de Vídeo RTX 3060 12GB GDDR6',
    price: 'R$ 1.899,00',
    oldPrice: 'R$ 2.099,00',
    discount: '-8%',
    category: 'Informática',
    image: '🎮',
    rating: 53,
    store: 'Mercado Livre',
    installments: '10x de R$ 189,90',
    shipping: 'Frete grátis',
    affiliate: 'https://www.mercadolivre.com.br/',
  },
  {
    title: 'Console PlayStation 5 Digital Edition',
    price: 'R$ 2.799,00',
    oldPrice: 'R$ 3.199,00',
    discount: '-12%',
    category: 'Games',
    image: '🕹️',
    rating: 87,
    store: 'Mercado Livre',
    installments: '10x de R$ 279,90',
    shipping: 'Frete grátis',
    affiliate: 'https://www.mercadolivre.com.br/',
  },
]

export const services = [
  {
    title: 'Manutenção de Computadores',
    description:
      'Formatação, limpeza interna, instalação de programas, upgrade e otimização de desempenho.',
    icon: Wrench,
  },
  {
    title: 'Manutenção de Notebooks',
    description:
      'Troca de tela, teclado, bateria, limpeza, upgrade de SSD e diagnóstico técnico.',
    icon: ShieldCheck,
  },
  {
    title: 'Desenvolvimento de Sistemas',
    description:
      'Criação de sistemas web, sites profissionais, landing pages e soluções sob medida.',
    icon: Code2,
  },
  {
    title: 'Redes e Infraestrutura',
    description:
      'Configuração de redes, cabeamento, roteadores, Wi-Fi, backup e segurança básica.',
    icon: Network,
  },
  {
    title: 'Banco de Dados',
    description:
      'Modelagem, backup, relatórios, consultas SQL e organização de informações.',
    icon: Database,
  },
]

export const posts = [
  {
    title: 'Como escolher o melhor notebook para trabalho e estudo',
    date: '22 de Junho de 2026',
    tag: 'Guia',
  },
  {
    title: '5 celulares com melhor custo-benefício para comprar online',
    date: '22 de Junho de 2026',
    tag: 'Review',
  },
  {
    title: 'Guia completo para montar um PC gamer gastando menos',
    date: '22 de Junho de 2026',
    tag: 'Tutorial',
  },
  {
    title: 'Como a inteligência artificial pode ajudar pequenos negócios',
    date: '22 de Junho de 2026',
    tag: 'Tecnologia',
  },{

  title: 'Desenvolvimento de Sistemas',

  description: 'Sistemas web personalizados desenvolvidos pela Vitalino Tech.',

  icon: Code2,

},

{

  title: 'Aplicativos Mobile',

  description: 'Aplicativos Android e iOS para empresas e empreendedores.',

  icon: Smartphone,

},

{

  title: 'Consultoria em TI',

  description: 'Planejamento, implantação e suporte tecnológico.',

  icon: ShieldCheck,

},
]
