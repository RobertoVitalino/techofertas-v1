// Monta um vídeo vertical (1080x1920, 30 fps) de oferta a partir de um produto.
// Requer ffmpeg, ffprobe e rsvg-convert (librsvg2-bin) instalados.
import { execFile } from 'node:child_process'
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { promisify } from 'node:util'

const run = promisify(execFile)
const W = 1080
const H = 1920
const FONT = "DejaVu Sans, Arial, sans-serif"

function esc(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// Remove emojis e símbolos que a fonte do servidor não desenha.
export function plainText(value) {
  return String(value)
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
}

// Quebra o texto em linhas de até `max` caracteres (no máximo `lines` linhas).
export function wrap(text, max, lines) {
  const words = plainText(text).split(' ')
  const out = []
  let current = ''
  for (const word of words) {
    if ((current + ' ' + word).trim().length > max) {
      if (current) out.push(current)
      current = word
    } else {
      current = (current + ' ' + word).trim()
    }
  }
  if (current) out.push(current)
  if (out.length > lines) {
    const kept = out.slice(0, lines)
    kept[lines - 1] = kept[lines - 1].replace(/[\s,.;:-]*$/, '') + '…'
    return kept
  }
  return out
}

function textLines(lines, { x = W / 2, y, size, weight = 800, fill = '#ffffff', gap = 1.18, anchor = 'middle' }) {
  return lines
    .map((line, i) => `<text x="${x}" y="${y + i * size * gap}" font-family="${FONT}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(line)}</text>`)
    .join('')
}

function background() {
  return `<defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#062a5c"/><stop offset="1" stop-color="#0b6bd3"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="0" width="${W}" height="140" fill="#041d40"/>
  ${textLines(['VITALINO TECH OFERTAS'], { y: 92, size: 46, weight: 900, fill: '#ffd400' })}`
}

function productCard(imageDataUri, { y, size }) {
  const x = (W - size) / 2
  return `<rect x="${x - 20}" y="${y - 20}" width="${size + 40}" height="${size + 40}" rx="48" fill="#ffffff"/>
  <image href="${imageDataUri}" x="${x}" y="${y}" width="${size}" height="${size}" preserveAspectRatio="xMidYMid meet"/>`
}

function svg(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${background()}${body}</svg>`
}

export function sceneHook({ imageDataUri, hook, badge }) {
  return svg(`${productCard(imageDataUri, { y: 300, size: 860 })}
    ${badge ? `<rect x="${W / 2 - 330}" y="162" width="660" height="96" rx="48" fill="#dc2626"/>
      ${textLines([badge], { y: 227, size: 50, weight: 900 })}` : ''}
    ${textLines(wrap(hook, 22, 4), { y: 1340, size: 66, weight: 900 })}`)
}

export function scenePrice({ imageDataUri, title, price, oldPrice, discount, installments }) {
  const hasDiscount = discount && discount !== '-0%' && oldPrice && oldPrice !== price
  return svg(`${productCard(imageDataUri, { y: 230, size: 620 })}
    ${textLines(wrap(title, 34, 2), { y: 990, size: 46, weight: 700, fill: '#dbeafe' })}
    ${hasDiscount ? `${textLines([`DE ${oldPrice}`], { y: 1180, size: 56, weight: 700, fill: '#cbd5e1' })}
      <line x1="${W / 2 - 230}" y1="1162" x2="${W / 2 + 230}" y2="1162" stroke="#f87171" stroke-width="7"/>` : ''}
    ${textLines([hasDiscount ? 'POR APENAS' : 'POR'], { y: 1290, size: 52, weight: 800 })}
    ${textLines([price], { y: 1440, size: 132, weight: 900, fill: '#ffd400' })}
    ${hasDiscount ? `<rect x="${W / 2 - 170}" y="1500" width="340" height="110" rx="55" fill="#16a34a"/>
      ${textLines([`${discount.replace('-', '')} OFF`], { y: 1578, size: 62, weight: 900 })}` : ''}
    ${installments && !/consulte/i.test(installments) ? textLines([plainText(installments)], { y: 1700, size: 44, weight: 700, fill: '#e2e8f0' }) : ''}`)
}

export function sceneCta({ channelUrl, siteHost }) {
  return svg(`${textLines(['Link da oferta', 'no nosso canal', 'do Telegram'], { y: 640, size: 92, weight: 900 })}
    <rect x="110" y="1000" width="860" height="140" rx="70" fill="#ffd400"/>
    ${textLines([channelUrl.replace(/^https?:\/\//, '')], { y: 1092, size: 56, weight: 900, fill: '#062a5c' })}
    ${textLines(['ou acesse', siteHost], { y: 1330, size: 60, weight: 800, fill: '#dbeafe' })}
    ${textLines(['Preço e estoque podem mudar a qualquer momento.'], { y: 1780, size: 34, weight: 500, fill: '#bfdbfe' })}`)
}

async function svgToPng(svgText, file) {
  const svgFile = file.replace(/\.png$/, '.svg')
  await writeFile(svgFile, svgText)
  await run('rsvg-convert', ['-w', String(W), '-h', String(H), '-o', file, svgFile])
}

// Converte a foto do produto (webp/jpg) para PNG e devolve como data URI.
export async function imageToDataUri(imageBuffer, dir) {
  const src = join(dir, 'produto-src')
  const out = join(dir, 'produto.png')
  await writeFile(src, imageBuffer)
  await run('ffmpeg', ['-y', '-loglevel', 'error', '-i', src, '-vf', 'scale=900:900:force_original_aspect_ratio=decrease', out])
  return `data:image/png;base64,${(await readFile(out)).toString('base64')}`
}

export async function audioDuration(file) {
  const { stdout } = await run('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file])
  return Number(stdout.trim()) || 0
}

// Áudio do Gemini: WAV pronto ou PCM 16-bit 24 kHz mono.
export async function saveNarration(base64, mimeType, dir) {
  const out = join(dir, 'narracao.wav')
  const raw = Buffer.from(base64, 'base64')
  if (/wav/i.test(mimeType)) {
    await writeFile(out, raw)
  } else {
    const rate = Number(mimeType.match(/rate=(\d+)/i)?.[1] || 24000)
    const pcm = join(dir, 'narracao.pcm')
    await writeFile(pcm, raw)
    await run('ffmpeg', ['-y', '-loglevel', 'error', '-f', 's16le', '-ar', String(rate), '-ac', '1', '-i', pcm, out])
  }
  return out
}

async function encodeStill(png, seconds, file) {
  const tmp = file.replace(/\.mp4$/, '.tmp.mp4')
  await run('ffmpeg', [
    '-y', '-loglevel', 'error', '-framerate', '30', '-i', png,
    '-vf', `format=yuv420p,loop=-1:1,trim=duration=${seconds.toFixed(2)},fade=t=in:st=0:d=0.25`,
    '-c:v', 'libx264', '-crf', '20', '-preset', 'veryfast', '-pix_fmt', 'yuv420p', '-r', '30', tmp,
  ])
  await rename(tmp, file)
}

// Monta o vídeo final. scenes: [{ svg, weight }]; narration: caminho do .wav (ou null).
export async function renderVideo({ dir, scenes, narration, output, minSeconds = 9 }) {
  await mkdir(dir, { recursive: true })
  const voice = narration ? await audioDuration(narration) : 0
  const total = Math.max(minSeconds, voice + 0.8)
  const weightSum = scenes.reduce((sum, scene) => sum + scene.weight, 0)

  const parts = []
  for (const [index, scene] of scenes.entries()) {
    const png = join(dir, `cena-${index}.png`)
    const mp4 = join(dir, `cena-${index}.mp4`)
    await svgToPng(scene.svg, png)
    await encodeStill(png, (total * scene.weight) / weightSum, mp4)
    parts.push(mp4)
  }

  const list = join(dir, 'lista.txt')
  await writeFile(list, parts.map((part) => `file '${part}'`).join('\n'))
  const silent = join(dir, 'video-mudo.mp4')
  await run('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', list, '-c', 'copy', silent])

  const tmp = output.replace(/\.mp4$/, '.tmp.mp4')
  if (narration) {
    await run('ffmpeg', [
      '-y', '-loglevel', 'error', '-i', silent, '-i', narration,
      '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '128k',
      '-af', 'adelay=300|300,apad', '-t', total.toFixed(2), '-movflags', '+faststart', tmp,
    ])
  } else {
    await run('ffmpeg', ['-y', '-loglevel', 'error', '-i', silent, '-c', 'copy', '-movflags', '+faststart', tmp])
  }
  await rename(tmp, output)
  return { seconds: total }
}
