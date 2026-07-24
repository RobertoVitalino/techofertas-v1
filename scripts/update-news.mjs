import { readFile, writeFile } from 'node:fs/promises'

const HOMEPAGE_URL = 'https://olhardigital.com.br'
const SECTIONS_FILE = new URL('../components/Sections.tsx', import.meta.url)
const START_MARKER = '// AUTO-NEWS-START (gerado por scripts/update-news.mjs, não editar manualmente)'
const END_MARKER = '// AUTO-NEWS-END'
const requestHeaders = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/140.0 Safari/537.36',
}

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&eacute;/g, 'é')
    .replace(/&atilde;/g, 'ã')
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: requestHeaders,
    signal: AbortSignal.timeout(20_000),
  })

  if (!response.ok) {
    throw new Error(`${url} respondeu ${response.status}`)
  }

  return response.text()
}

function extractMostRead(html) {
  const itemPattern =
    /<a class="pbl-mostread-item" href="([^"]+)" title="([^"]+)">[\s\S]*?<span class="pbl-mostread-cat">([^<]+)<\/span>/g

  const items = []
  let match

  while ((match = itemPattern.exec(html)) && items.length < 5) {
    items.push({
      href: match[1],
      title: decodeEntities(match[2]),
      category: decodeEntities(match[3]).trim(),
    })
  }

  return items
}

function extractMeta(html, property) {
  const pattern = new RegExp(
    `<meta property="${property}" content="([^"]*)"`,
  )
  return decodeEntities(html.match(pattern)?.[1] || '')
}

function jsStringLiteral(value) {
  return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
}

async function main() {
  const homepageHtml = await fetchText(HOMEPAGE_URL)
  const mostRead = extractMostRead(homepageHtml)

  if (mostRead.length < 5) {
    throw new Error(
      `Apenas ${mostRead.length} notícias encontradas na seção "Mais Lidas do Dia" (esperado 5).`,
    )
  }

  const news = []

  for (const item of mostRead) {
    const articleHtml = await fetchText(item.href)
    const summary = extractMeta(articleHtml, 'og:description')
    const image = extractMeta(articleHtml, 'og:image')

    if (!summary || !image) {
      throw new Error(`Não achei resumo/imagem para: ${item.title}`)
    }

    news.push({ ...item, summary, image })
  }

  const arraySource = [
    START_MARKER,
    'const featuredNews = [',
    ...news.map(
      (item) =>
        `  {\n` +
        `    title: ${jsStringLiteral(item.title)},\n` +
        `    category: ${jsStringLiteral(item.category)},\n` +
        `    summary: ${jsStringLiteral(item.summary)},\n` +
        `    image: ${jsStringLiteral(item.image)},\n` +
        `    href: ${jsStringLiteral(item.href)},\n` +
        `  },`,
    ),
    ']',
    END_MARKER,
  ].join('\n')

  const sectionsSource = await readFile(SECTIONS_FILE, 'utf8')
  const blockPattern = new RegExp(
    `${START_MARKER.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${END_MARKER}`,
  )

  if (!blockPattern.test(sectionsSource)) {
    throw new Error('Marcadores AUTO-NEWS não encontrados em Sections.tsx')
  }

  const updatedSource = sectionsSource.replace(blockPattern, arraySource)

  if (updatedSource === sectionsSource) {
    console.log('Notícias já estão atualizadas, nada para mudar.')
    return
  }

  await writeFile(SECTIONS_FILE, updatedSource, 'utf8')
  console.log(`Atualizado com ${news.length} notícias:`)
  for (const item of news) console.log(`  - ${item.title}`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
