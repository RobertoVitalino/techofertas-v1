import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const products = [
  {
    title: 'Notebook Acer Aspire 5 Intel Core i5 16GB SSD 512GB',
    category: 'Notebooks',
    price: 'R$ 2.999,00',
    oldPrice: 'R$ 3.529,00',
    discount: '-15%',
    image: '/produtos/Notebook-Acer-Aspire-5.jpg',
    rating: 150,
    store: 'Mercado Livre',
    installments: '10x de R$ 299,90',
    shipping: 'Frete grátis',
    affiliate: 'https://meli.la/1xjmjVS',
  },
  {
    title: 'Impressora multifuncional cor Epson EcoTank L3250',
    category: 'Impressora',
    price: 'R$ 1.221,00',
    oldPrice: 'R$ 1.359,00',
    discount: '-10%',
    image: '/produtos/Impressora-multifuncional-Epson-L3250.jpg',
    rating: 65000,
    store: 'Mercado livre',
    installments: '12x de 10x R$ 118,53',
    shipping: 'Frete Gratis',
    affiliate: 'https://meli.la/286F1hT',
  },
]

async function main() {
  for (const product of products) {
    await prisma.product.upsert({
      where: { affiliate: product.affiliate },
      update: product,
      create: product,
    })
  }

  console.log(`${products.length} produtos sincronizados no PostgreSQL.`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
