import { getCertificateForCustomer } from '@/lib/certificates'
import { getCourseConfig } from '@/lib/courses-config'
import { requireCustomer } from '@/lib/require-customer'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ code: string }> },
) {
  const { code } = await params
  const customer = await requireCustomer(`/api/certificado/${code}`)

  const certificate = await getCertificateForCustomer(customer.id, code)

  if (!certificate) {
    return new Response('Certificado não encontrado.', { status: 404 })
  }

  const courseConfig = getCourseConfig(certificate.courseSlug)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const verificationUrl = `${siteUrl}/verificar-certificado/${certificate.verificationCode}`

  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([842, 595])
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

  const ink = rgb(0.06, 0.09, 0.16)
  const accent = rgb(0.03, 0.42, 0.68)
  const brandDark = rgb(0, 0.278, 0.643)
  const muted = rgb(0.4, 0.44, 0.52)
  const white = rgb(1, 1, 1)
  const whiteMuted = rgb(0.85, 0.9, 0.98)

  const logoBytes = await readFile(
    path.join(process.cwd(), 'app', 'apple-icon.png'),
  )
  const logoImage = await pdfDoc.embedPng(logoBytes)

  page.drawRectangle({
    x: 24,
    y: 24,
    width: 842 - 48,
    height: 595 - 48,
    borderColor: accent,
    borderWidth: 2,
  })

  const headerHeight = 74
  const headerY = 595 - 24 - headerHeight

  page.drawRectangle({
    x: 24,
    y: headerY,
    width: 842 - 48,
    height: headerHeight,
    color: brandDark,
  })

  const logoSize = 42

  page.drawImage(logoImage, {
    x: 55,
    y: headerY + (headerHeight - logoSize) / 2,
    width: logoSize,
    height: logoSize,
  })

  page.drawText('Vitalino Tech', {
    x: 55 + logoSize + 16,
    y: headerY + headerHeight / 2 + 2,
    size: 22,
    font: boldFont,
    color: white,
  })

  page.drawText('Transformando ideias em soluções digitais.', {
    x: 55 + logoSize + 16,
    y: headerY + headerHeight / 2 - 16,
    size: 10,
    font,
    color: whiteMuted,
  })

  page.drawText('Certificado de Conclusão', {
    x: 60,
    y: headerY - 40,
    size: 30,
    font: boldFont,
    color: ink,
  })

  page.drawText('Certificamos que', {
    x: 60,
    y: headerY - 78,
    size: 14,
    font,
    color: muted,
  })

  page.drawText(customer.name, {
    x: 60,
    y: headerY - 113,
    size: 26,
    font: boldFont,
    color: ink,
  })

  page.drawText('concluiu com êxito o curso', {
    x: 60,
    y: headerY - 148,
    size: 14,
    font,
    color: muted,
  })

  page.drawText(courseConfig.title, {
    x: 60,
    y: headerY - 178,
    size: 18,
    font: boldFont,
    color: ink,
  })

  page.drawText(
    `Carga horária: ${certificate.hoursTotal}   •   Emitido em: ${formatDate(certificate.issuedAt)}`,
    { x: 60, y: headerY - 218, size: 12, font, color: muted },
  )

  const sealSize = 56

  page.drawImage(logoImage, {
    x: 842 - 24 - 30 - sealSize,
    y: 55,
    width: sealSize,
    height: sealSize,
    opacity: 0.9,
  })

  page.drawText(`Código de verificação: ${certificate.verificationCode}`, {
    x: 60,
    y: 80,
    size: 11,
    font,
    color: muted,
  })

  page.drawText(`Verifique em: ${verificationUrl}`, {
    x: 60,
    y: 62,
    size: 11,
    font,
    color: muted,
  })

  const pdfBytes = await pdfDoc.save()

  return new Response(Buffer.from(pdfBytes), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="certificado-${certificate.verificationCode}.pdf"`,
    },
  })
}
