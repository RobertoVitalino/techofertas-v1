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

- Next.js 16 e React 19
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
- `npm run bestsellers:discover`: busca os mais vendidos no Mercado Livre e salva uma lista de candidatos em `bestsellers-candidates.txt`
- `npm run bestsellers:apply`: lê `bestsellers-links.txt` e substitui o catálogo pelos 20 produtos informados (use `--dry-run` para simular)

## Atualização dos mais vendidos

A API do Mercado Livre não permite consultar preço/título de itens de outros
vendedores nem raspar as páginas automaticamente (ambos são bloqueados), então
o processo tem uma etapa manual curta. Roda localmente (não em CI, pois o
Mercado Livre e o Prisma Postgres bloqueiam conexões vindas do GitHub Actions):

1. `npm run bestsellers:discover` — busca os mais vendidos por categoria (API oficial `/highlights`) e salva até ~40 candidatos em `bestsellers-candidates.txt`, cada um com um link para visualizar o produto.
2. Abra os links, escolha 20, e gere o link de afiliado de cada um no [painel do Mercado Livre](https://www.mercadolivre.com.br/l/afiliados-home). Cole no arquivo `bestsellers-links.txt` (na raiz do projeto), uma linha por produto, no formato:

   ```
   Título do produto | https://meli.la/xxxxx
   ```

3. `npm run bestsellers:apply` — busca preço, imagem e parcelamento reais de cada link e substitui o catálogo do site pelos 20 produtos.

Configuração necessária (uma única vez), só para a etapa de descoberta:

1. Crie um aplicativo em [developers.mercadolivre.com.br](https://developers.mercadolivre.com.br/apps) para obter `client_id` e `client_secret`.
2. Autorize o aplicativo uma vez (fluxo OAuth) para obter o `refresh_token` inicial — depois disso o próprio script renova o token sozinho e guarda o novo refresh token no banco (tabela `MercadoLivreToken`).
3. Cadastre `MERCADO_LIVRE_CLIENT_ID`, `MERCADO_LIVRE_CLIENT_SECRET` e `MERCADO_LIVRE_REFRESH_TOKEN` no `.env` local.

## Publicação na Vercel

1. Importe o repositório `RobertoVitalino/techofertas-v1` na Vercel.
2. Conecte um PostgreSQL do Marketplace, como Neon ou Prisma Postgres.
3. Confirme que a integração criou a variável `DATABASE_URL`.
4. Faça o deploy. O script `vercel-build` gera o cliente, aplica as migrações e compila o projeto.
5. Execute `npm run db:seed` uma vez usando a mesma `DATABASE_URL` para importar os produtos existentes.

Nunca envie o arquivo `.env` ao GitHub.

## Segurança e privacidade

- Senhas de clientes são derivadas com PBKDF2-HMAC-SHA256 e 600 mil iterações.
- Sessões são aleatórias, registradas no banco, expiram e podem ser revogadas.
- Logins e cadastros têm limitação de tentativas persistida no PostgreSQL.
- O site envia CSP, HSTS, proteção contra iframe, política de permissões e outros cabeçalhos de segurança.
- Eventos de autenticação guardam somente identificadores pseudonimizados e são eliminados após 90 dias.
- O cliente pode baixar seus dados e excluir permanentemente a conta pela Área do Cliente.
- A auditoria das dependências de produção deve ser executada regularmente com `npm audit --omit=dev`.

Para ativar o segundo fator do painel, execute `npm run mfa:setup`, cadastre a chave gerada no aplicativo autenticador e salve-a como `ADMIN_TOTP_SECRET` nas variáveis do Vercel. Não envie essa chave ao GitHub.

Confirme também no console do provedor PostgreSQL se backups automáticos e restauração estão disponíveis no plano contratado. A verificação de e-mail exige um provedor transacional antes de ser ativada.
