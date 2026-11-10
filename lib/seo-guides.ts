// Guias de compra para SEO ("Melhor X até R$ Y").
// Os produtos vêm do catálogo em tempo real; aqui fica só o filtro e o texto.

export type GuideProduct = {
  id: number
  title: string
  category: string
  price: string
  oldPrice: string
  discount: string
  image: string
  affiliate: string
  store: string
  installments: string
  priceDroppedAt?: Date | null
}

export type Guide = {
  slug: string
  title: string // <title> e H1
  description: string // meta description
  intro: string
  tips: { title: string; text: string }[]
  faq: { q: string; a: string }[]
  include: RegExp
  exclude?: RegExp
  maxPrice?: number
  minPrice?: number
  sort?: 'discount' | 'price-asc' | 'price-desc'
  limit?: number
  onlyPriceDrops?: boolean
}

export function parsePrice(value: string) {
  const number = Number(String(value).replace(/[^\d,]/g, '').replace(',', '.'))
  return Number.isFinite(number) ? number : 0
}

export function discountPercent(value: string) {
  return Number(String(value).replace(/\D/g, '')) || 0
}

const PHONE = /\b(celular|smartphone|iphone|galaxy (a|s)\d|moto g|motorola (edge|moto)|redmi(?! (buds|watch))|poco|realme)\b/i
const PHONE_ACCESSORY = /(capa|capinha|pel[íi]cula|carregador|cabo|suporte|fone|buds|watch|power ?bank|cart[ãa]o|controle|joystick|gamer|headset)/i

export const guides: Guide[] = [
  {
    slug: 'melhor-celular-ate-1000-reais',
    title: 'Melhor celular até R$ 1.000 em 2026',
    description: 'Celulares bons e baratos até R$ 1.000 com preço atualizado todo dia: Motorola, Samsung e Xiaomi com desconto no Mercado Livre.',
    intro: 'Separamos os celulares mais vendidos que custam até R$ 1.000, com o preço conferido todos os dias no Mercado Livre. Nessa faixa dá para encontrar aparelho com bateria que dura o dia inteiro, tela grande e câmera boa para redes sociais.',
    tips: [
      { title: 'Memória RAM e armazenamento', text: 'Prefira pelo menos 4 GB de RAM e 128 GB de armazenamento. Com menos que isso, o celular fica lento com WhatsApp, Instagram e fotos em pouco tempo.' },
      { title: 'Bateria', text: 'Baterias de 5.000 mAh ou mais aguentam um dia inteiro de uso normal. É o item que mais faz diferença no dia a dia.' },
      { title: '4G ou 5G', text: 'O 5G ainda não chega em muitas cidades do interior. Se a sua região não tem 5G, um bom modelo 4G entrega mais pelo mesmo preço.' },
    ],
    faq: [
      { q: 'Vale a pena comprar celular até R$ 1.000?', a: 'Sim, para uso de redes sociais, WhatsApp, vídeos e fotos do dia a dia. Para jogos pesados ou fotos profissionais, vale olhar modelos acima de R$ 1.500.' },
      { q: 'O preço mostrado é o preço final?', a: 'É o preço do anúncio no Mercado Livre no momento da última atualização. O valor final pode mudar com frete, cupom e forma de pagamento.' },
    ],
    include: PHONE,
    exclude: PHONE_ACCESSORY,
    maxPrice: 1000,
    sort: 'price-asc',
  },
  {
    slug: 'melhor-celular-ate-1500-reais',
    title: 'Melhor celular até R$ 1.500 em 2026',
    description: 'Os celulares com melhor custo-benefício até R$ 1.500, com preço atualizado diariamente: Samsung Galaxy, Motorola e Xiaomi.',
    intro: 'Até R$ 1.500 já aparecem celulares com 5G, tela AMOLED e câmera bem melhor que os modelos de entrada. Esta lista mostra os mais vendidos dessa faixa, com o preço do Mercado Livre atualizado todos os dias.',
    tips: [
      { title: 'Tela AMOLED', text: 'Telas AMOLED têm cores mais vivas e economizam bateria em modo escuro. Nessa faixa de preço já vale a pena exigir.' },
      { title: 'Atualizações', text: 'Samsung e Motorola costumam garantir mais anos de atualizações de segurança nos modelos intermediários, o que aumenta a vida útil do aparelho.' },
      { title: 'NFC', text: 'Com NFC você paga por aproximação com o celular. Confira na descrição se o modelo tem.' },
    ],
    faq: [
      { q: 'Qual a diferença entre um celular de R$ 1.000 e um de R$ 1.500?', a: 'Geralmente tela melhor (AMOLED, 120 Hz), mais memória, 5G e câmeras mais consistentes à noite.' },
      { q: 'Como sei se o desconto é real?', a: 'Mostramos o preço antigo informado pelo próprio Mercado Livre e atualizamos todo dia. Se o preço cair, o produto ganha o selo de queda de preço no nosso canal do Telegram.' },
    ],
    include: PHONE,
    exclude: PHONE_ACCESSORY,
    maxPrice: 1500,
    sort: 'discount',
  },
  {
    slug: 'celulares-em-oferta',
    title: 'Celulares em oferta hoje: maiores descontos',
    description: 'Celulares com os maiores descontos do dia no Mercado Livre: iPhone, Samsung Galaxy, Motorola e Xiaomi, com preço conferido diariamente.',
    intro: 'Os celulares do nosso catálogo ordenados pelo maior desconto do momento. A lista é atualizada sozinha todos os dias com os preços do Mercado Livre.',
    tips: [
      { title: 'Compare com o preço antigo', text: 'O desconto é calculado sobre o preço antigo informado no anúncio. Desconfie de descontos acima de 70% em celulares de marca fora de lojas oficiais.' },
      { title: 'Loja oficial', text: 'Prefira anúncios de loja oficial ou "distribuidor autorizado", principalmente para iPhone e Samsung, por causa da garantia.' },
    ],
    faq: [
      { q: 'Com que frequência os preços são atualizados?', a: 'Todos os dias pela manhã. Mesmo assim, confirme o valor final no anúncio antes de comprar.' },
    ],
    include: PHONE,
    exclude: PHONE_ACCESSORY,
    sort: 'discount',
  },
  {
    slug: 'melhor-notebook-ate-3500-reais',
    title: 'Melhor notebook até R$ 3.500 em 2026',
    description: 'Notebooks bons e baratos até R$ 3.500 para estudar e trabalhar, com preço atualizado todo dia no Mercado Livre.',
    intro: 'Notebooks de até R$ 3.500 resolvem bem estudo, trabalho em escritório, internet e reuniões online. Selecionamos os mais vendidos dessa faixa, com o preço conferido diariamente.',
    tips: [
      { title: 'SSD é obrigatório', text: 'Notebook com SSD liga em segundos e abre programas rápido. Evite modelos só com HD ou com eMMC de 64 GB.' },
      { title: '8 GB de RAM', text: 'Com 4 GB o Windows 11 fica lento. Se o modelo tiver 4 GB, verifique se dá para fazer upgrade de memória depois.' },
      { title: 'Processador', text: 'Para o dia a dia, Intel Core i3/i5 ou AMD Ryzen 3/5 são suficientes. Celeron atende só tarefas bem básicas.' },
    ],
    faq: [
      { q: 'Notebook com Linux vale a pena?', a: 'Costuma sair mais barato. Se você precisa de Windows, dá para instalar depois, mas some o custo da licença na conta.' },
      { q: 'Vocês fazem upgrade de memória e SSD?', a: 'Sim. A Vitalino Tech faz instalação de SSD e memória, limpeza e formatação. Peça um orçamento pelo WhatsApp no site.' },
    ],
    include: /\b(notebook|macbook|chromebook)\b/i,
    exclude: /(mochila|capa|suporte|case|bolsa)/i,
    maxPrice: 3500,
    sort: 'price-asc',
  },
  {
    slug: 'melhor-notebook-para-estudar-e-trabalhar',
    title: 'Melhor notebook para estudar e trabalhar em 2026',
    description: 'Notebooks recomendados para estudo, home office e faculdade: Dell, Samsung, Acer, Asus e Vaio com preço atualizado.',
    intro: 'Todos os notebooks do nosso catálogo, do mais barato ao mais completo, para você escolher conforme o seu orçamento. Os preços são atualizados todos os dias.',
    tips: [
      { title: 'Tela de 15,6"', text: 'É o tamanho mais confortável para estudar e trabalhar por muitas horas. Prefira resolução Full HD (1920x1080).' },
      { title: 'Peso e bateria', text: 'Se vai carregar todo dia para a faculdade, notebooks abaixo de 1,8 kg fazem diferença.' },
      { title: 'Garantia e assistência', text: 'Marcas com assistência no Brasil facilitam muito em caso de defeito.' },
    ],
    faq: [
      { q: 'Qual o melhor notebook para faculdade?', a: 'Um modelo com SSD de 256 GB ou mais, 8 GB de RAM e processador Intel Core i5 ou AMD Ryzen 5 atende quase todos os cursos.' },
    ],
    include: /\b(notebook|macbook|chromebook)\b/i,
    exclude: /(mochila|capa|suporte|case|bolsa)/i,
    sort: 'price-asc',
  },
  {
    slug: 'melhor-fone-bluetooth',
    title: 'Melhor fone de ouvido Bluetooth em 2026',
    description: 'Fones Bluetooth sem fio mais vendidos com desconto: JBL, Soundcore, Samsung Galaxy Buds e Xiaomi, com preço atualizado diariamente.',
    intro: 'Fones sem fio para treinar, trabalhar e ouvir música, dos mais baratos aos com cancelamento de ruído. Todos com preço conferido diariamente no Mercado Livre.',
    tips: [
      { title: 'Intra-auricular ou headphone', text: 'Os pequenos (TWS) são práticos para levar no bolso; os headphones costumam ter bateria maior e som mais encorpado.' },
      { title: 'Cancelamento de ruído', text: 'Ajuda muito em ônibus, academia e escritório barulhento. Procure "ANC" ou "cancelamento de ruído ativo" na descrição.' },
      { title: 'Bateria total', text: 'Some a bateria do fone com a do estojo: acima de 30 horas no total dura a semana inteira sem preocupação.' },
    ],
    faq: [
      { q: 'Fone Bluetooth barato presta?', a: 'Para uso casual, sim. Para chamadas de trabalho e música com mais qualidade, marcas como JBL, Soundcore e Samsung entregam bem mais.' },
    ],
    include: /\b(fone|buds|headphone|headset|earbuds)\b/i,
    sort: 'discount',
  },
  {
    slug: 'melhor-smart-tv-custo-beneficio',
    title: 'Melhor Smart TV custo-benefício em 2026',
    description: 'Smart TVs de 32, 43, 50 e 55 polegadas com desconto: TCL, Samsung, LG, Philco e AOC, com preço atualizado todo dia.',
    intro: 'As Smart TVs mais vendidas do Mercado Livre, da 32" para quarto até a 55" Mini LED para a sala. Os preços são atualizados todos os dias.',
    tips: [
      { title: 'Tamanho x distância', text: 'Regra prática: até 2 m do sofá, 43"; de 2 a 3 m, 50" ou 55". Para quarto, 32" costuma bastar.' },
      { title: '4K e QLED', text: 'A partir de 50", vale a pena 4K. QLED e Mini LED têm cores e brilho melhores que LED comum.' },
      { title: 'Sistema', text: 'Google TV, Roku e webOS têm todos os aplicativos principais. Escolha o que achar mais fácil de usar.' },
    ],
    faq: [
      { q: 'Qual a melhor TV de 32 polegadas?', a: 'Para quarto ou cozinha, modelos com Roku ou Google TV da TCL, Philco e AOC são os mais vendidos pelo bom preço.' },
    ],
    include: /\b(smart ?tv|televis)/i,
    exclude: /(suporte|controle remoto|antena)/i,
    sort: 'price-asc',
  },
  {
    slug: 'melhores-produtos-gamer',
    title: 'Melhores produtos gamer em oferta',
    description: 'PS5, controles, headsets e acessórios gamer com desconto no Mercado Livre, com preço conferido diariamente.',
    intro: 'Console, controles e headsets gamer mais vendidos, ordenados pelo maior desconto do dia.',
    tips: [
      { title: 'Headset com microfone', text: 'Para jogar online, prefira headset com microfone removível ou com cancelamento de ruído no microfone.' },
      { title: 'Controles Hall Effect', text: 'Analógicos Hall Effect não sofrem com o "drift" (controle andando sozinho) e duram mais.' },
    ],
    faq: [
      { q: 'O PS5 digital vale a pena?', a: 'Sim, se você compra jogos digitais. Ele não lê discos, então não serve para quem compra jogos físicos.' },
    ],
    include: /\b(ps5|playstation|xbox|nintendo|controle|joystick|gamer|headset|gamesir)\b/i,
    exclude: /(gift ?card|cart[ãa]o presente|cadeira|ventilador|smart ?tv|televis)/i,
    sort: 'discount',
  },
  {
    slug: 'melhor-power-bank-e-carregador',
    title: 'Melhor power bank e carregador turbo em 2026',
    description: 'Power banks de 10.000 e 20.000 mAh e carregadores turbo para iPhone e Android com desconto e preço atualizado.',
    intro: 'Carregadores portáteis (power bank) e carregadores turbo de tomada mais vendidos, com preço conferido todo dia.',
    tips: [
      { title: 'Capacidade', text: '10.000 mAh carregam a maioria dos celulares uma vez e meia; 20.000 mAh, umas três vezes.' },
      { title: 'Potência', text: 'Para carregamento rápido, procure 20 W ou mais e confira se é compatível com o seu celular (USB-C PD para iPhone, por exemplo).' },
    ],
    faq: [
      { q: 'Posso levar power bank no avião?', a: 'Sim, na bagagem de mão. Modelos até 20.000 mAh costumam ser permitidos; confira a regra da companhia aérea.' },
    ],
    include: /\b(power ?bank|carregador)\b/i,
    exclude: /(pilha)/i,
    sort: 'discount',
  },
  {
    slug: 'melhor-whey-protein-e-creatina',
    title: 'Melhor whey protein e creatina em oferta',
    description: 'Whey protein e creatina das marcas mais vendidas com desconto: Growth, Max Titanium, Dark Lab e mais, com preço atualizado.',
    intro: 'Suplementos mais vendidos do Mercado Livre, ordenados pelo maior desconto. Confira sempre a tabela nutricional e, se tiver alguma condição de saúde, converse com um profissional antes de usar.',
    tips: [
      { title: 'Concentrado ou isolado', text: 'O whey isolado tem menos lactose e gordura; o concentrado é mais barato e atende a maioria das pessoas.' },
      { title: 'Creatina pura', text: 'Procure "creatina monohidratada" sem outros ingredientes. Marcas conhecidas costumam ter laudo de pureza.' },
    ],
    faq: [
      { q: 'Esses preços incluem frete?', a: 'Não necessariamente. O frete aparece no anúncio do Mercado Livre conforme o seu CEP.' },
    ],
    include: /\b(whey|creatina|prote[íi]na)\b/i,
    sort: 'discount',
  },
  {
    slug: 'ofertas-de-tecnologia-do-dia',
    title: 'Ofertas de tecnologia do dia: maiores descontos',
    description: 'Os maiores descontos de hoje em celulares, notebooks, TVs, fones e acessórios no Mercado Livre, atualizados diariamente.',
    intro: 'Os 24 produtos do nosso catálogo com os maiores descontos neste momento. A lista é recalculada todos os dias com os preços do Mercado Livre.',
    tips: [
      { title: 'Desconto real', text: 'Mostramos o preço antigo informado pelo próprio anúncio. Atualizamos todo dia para você não pegar oferta vencida.' },
      { title: 'Receba no celular', text: 'Entre no nosso canal do Telegram para receber as ofertas assim que elas aparecem.' },
    ],
    faq: [
      { q: 'A Vitalino Tech vende os produtos?', a: 'Não. A compra é feita direto no Mercado Livre; nós selecionamos e acompanhamos os preços. Alguns links são de afiliado, sem custo extra para você.' },
    ],
    include: /./,
    sort: 'discount',
    limit: 24,
  },
  {
    slug: 'produtos-que-baixaram-de-preco',
    title: 'Produtos que baixaram de preço nos últimos dias',
    description: 'Lista atualizada diariamente dos produtos que tiveram queda de preço no Mercado Livre: celulares, notebooks, TVs e mais.',
    intro: 'Todo dia de manhã conferimos o preço de cada produto do catálogo. Aqui aparecem os que ficaram pelo menos 5% mais baratos nos últimos 7 dias.',
    tips: [
      { title: 'Aproveite rápido', text: 'Quedas de preço costumam durar poucos dias. Se o produto estava na sua lista, esta é a hora de conferir.' },
    ],
    faq: [
      { q: 'Como vocês sabem que o preço caiu?', a: 'Comparamos o preço do dia com o preço registrado na verificação anterior. Quando cai 5% ou mais, o produto entra nesta lista.' },
    ],
    include: /./,
    onlyPriceDrops: true,
    sort: 'discount',
  },
]

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug)
}

export function selectGuideProducts<T extends GuideProduct>(guide: Guide, products: T[]): T[] {
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000
  const selected = products.filter((product) => {
    const text = `${product.title} ${product.category}`
    const price = parsePrice(product.price)
    if (!guide.include.test(text)) return false
    if (guide.exclude?.test(text)) return false
    if (guide.maxPrice && price > guide.maxPrice) return false
    if (guide.minPrice && price < guide.minPrice) return false
    if (guide.onlyPriceDrops && !(product.priceDroppedAt && product.priceDroppedAt.getTime() >= weekAgo)) return false
    return true
  })

  selected.sort((a, b) => {
    if (guide.sort === 'price-asc') return parsePrice(a.price) - parsePrice(b.price)
    if (guide.sort === 'price-desc') return parsePrice(b.price) - parsePrice(a.price)
    return discountPercent(b.discount) - discountPercent(a.discount)
  })

  return guide.limit ? selected.slice(0, guide.limit) : selected
}
