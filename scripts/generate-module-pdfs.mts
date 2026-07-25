import { computingCourseModules } from '../lib/computing-course'
import { PDFDocument, rgb, StandardFonts, type PDFFont, type PDFPage } from 'pdf-lib'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const PAGE_WIDTH = 595
const PAGE_HEIGHT = 842
const MARGIN = 56
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2

const ink = rgb(0.06, 0.09, 0.16)
const accent = rgb(0.02, 0.4, 0.29)
const muted = rgb(0.4, 0.44, 0.52)

function wrapText(text: string, font: PDFFont, size: number, maxWidth: number) {
  const words = text.split(/\s+/)
  const lines: string[] = []
  let current = ''

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word
    if (font.widthOfTextAtSize(candidate, size) > maxWidth && current) {
      lines.push(current)
      current = word
    } else {
      current = candidate
    }
  }
  if (current) lines.push(current)

  return lines
}

type PdfState = {
  doc: PDFDocument
  page: PDFPage
  font: PDFFont
  boldFont: PDFFont
  y: number
  moduleLabel: string
}

function newPage(state: Omit<PdfState, 'page' | 'y'>): PdfState {
  const page = state.doc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
  const headerText = `Vitalino Tech · Computação Básica · ${state.moduleLabel}`
  page.drawText(headerText, {
    x: MARGIN,
    y: PAGE_HEIGHT - 40,
    size: 9,
    font: state.font,
    color: muted,
  })
  return { ...state, page, y: PAGE_HEIGHT - 72 }
}

function ensureSpace(state: PdfState, needed: number): PdfState {
  if (state.y - needed < MARGIN) {
    return newPage(state)
  }
  return state
}

function drawParagraph(
  state: PdfState,
  text: string,
  { size = 11, font, color = ink, lineGap = 15, spaceAfter = 10 }: {
    size?: number
    font?: PDFFont
    color?: ReturnType<typeof rgb>
    lineGap?: number
    spaceAfter?: number
  } = {},
): PdfState {
  const usedFont = font ?? state.font
  const lines = wrapText(text, usedFont, size, CONTENT_WIDTH)
  let current = state

  for (const line of lines) {
    current = ensureSpace(current, lineGap)
    current.page.drawText(line, {
      x: MARGIN,
      y: current.y,
      size,
      font: usedFont,
      color,
    })
    current = { ...current, y: current.y - lineGap }
  }

  return { ...current, y: current.y - spaceAfter }
}

function drawHeading(state: PdfState, text: string, size = 14) {
  const s = ensureSpace(state, size + 14)
  return drawParagraph(s, text, { size, font: s.boldFont, color: accent, lineGap: size + 4, spaceAfter: 8 })
}

async function generateModulePdf(moduleIndex: number) {
  const courseModule = computingCourseModules[moduleIndex]
  const doc = await PDFDocument.create()
  const font = await doc.embedFont(StandardFonts.Helvetica)
  const boldFont = await doc.embedFont(StandardFonts.HelveticaBold)
  const moduleLabel = `Módulo ${moduleIndex + 1} de ${computingCourseModules.length}`

  let state = newPage({ doc, font, boldFont, moduleLabel })

  state = drawParagraph(state, moduleLabel, { size: 10, font: boldFont, color: muted, spaceAfter: 4 })
  state = drawParagraph(state, courseModule.title, { size: 22, font: boldFont, color: ink, lineGap: 26, spaceAfter: 6 })
  state = drawParagraph(state, courseModule.description, { size: 11, color: muted, spaceAfter: 18 })

  for (const [lessonIndex, lesson] of courseModule.lessons.entries()) {
    state = ensureSpace(state, 40)
    state = drawHeading(state, `Aula ${lessonIndex + 1}: ${lesson.title}`, 13)
    state = drawParagraph(state, lesson.summary, { size: 10.5, color: ink, spaceAfter: 8 })

    for (const point of lesson.keyPoints) {
      state = ensureSpace(state, 30)
      state = drawParagraph(state, `• ${point.title}`, {
        size: 10.5,
        font: boldFont,
        color: ink,
        spaceAfter: 3,
      })
      state = drawParagraph(state, point.description, { size: 10, color: muted, spaceAfter: 10 })
    }

    state = { ...state, y: state.y - 6 }
  }

  const pdfBytes = await doc.save()
  return Buffer.from(pdfBytes)
}

async function main() {
  const outDir = path.join(process.cwd(), 'public', 'resumos-computacao-basica')
  await mkdir(outDir, { recursive: true })

  for (const [index, module] of computingCourseModules.entries()) {
    const bytes = await generateModulePdf(index)
    const fileName = `modulo-${String(index + 1).padStart(2, '0')}.pdf`
    await writeFile(path.join(outDir, fileName), bytes)
    console.log(`Gerado: ${fileName} (${module.title})`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
