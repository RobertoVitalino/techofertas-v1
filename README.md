# TechOfertas V1.1

Portal de tecnologia, ofertas, afiliados e serviços de TI desenvolvido com Next.js.

## Funcionalidades

- Home responsiva com categorias, ofertas, serviços e blog
- Busca por produto, categoria ou loja
- Páginas individuais de produtos
- Painel administrativo com cadastro, edição e exclusão
- Imagens locais ou emojis nos produtos
- Banco PostgreSQL com Prisma ORM
- Migrações e carga inicial automatizadas
- Configuração preparada para Vercel

## Tecnologias

- Next.js 14 e React 18
- TypeScript e Tailwind CSS
- Prisma ORM 6
- PostgreSQL

## Configuração local

Requisitos: Node.js, npm e uma URL de conexão PostgreSQL.

1. Copie `.env.example` para `.env` e informe a conexão:

```env
DATABASE_URL="postgresql://usuario:senha@host:5432/techofertas?sslmode=require"
```

2. Instale as dependências:

```bash
npm install
```

3. Aplique as migrações e carregue os produtos iniciais:

```bash
npm run db:deploy
npm run db:seed
```

4. Inicie o projeto:

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts

- `npm run dev`: inicia o ambiente local
- `npm run build`: gera o Prisma Client e compila o Next.js
- `npm run vercel-build`: aplica migrações e compila na Vercel
- `npm run db:deploy`: aplica migrações pendentes
- `npm run db:seed`: sincroniza os produtos iniciais
- `npm run db:studio`: abre o Prisma Studio

## Publicação na Vercel

1. Importe o repositório `RobertoVitalino/techofertas-v1` na Vercel.
2. Conecte um PostgreSQL do Marketplace, como Neon ou Prisma Postgres.
3. Confirme que a integração criou a variável `DATABASE_URL`.
4. Faça o deploy. O script `vercel-build` gera o cliente, aplica as migrações e compila o projeto.
5. Execute `npm run db:seed` uma vez usando a mesma `DATABASE_URL` para importar os produtos existentes.

Nunca envie o arquivo `.env` ao GitHub.
