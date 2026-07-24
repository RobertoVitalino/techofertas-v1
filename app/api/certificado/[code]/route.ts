import { getCertificateForCustomer } from '@/lib/certificates'
import { requireCustomer } from '@/lib/require-customer'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

const COURSE_TITLE =
  'Segurança da Informação: do Zero à Proteção na Prática'

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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const verificationUrl = `${siteUrl}/verificar-certificado/${certificate.verificationCode}`

  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([842, 595])
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

  const ink = rgb(0.06, 0.09, 0.16)
  const accent = rgb(0.03, 0.42, 0.68)
  const muted = rgb(0.4, 0.44, 0.52)

  page.drawRectangle({
    x: 24,
    y: 24,
    width: 842 - 48,
    height: 595 - 48,
    borderColor: accent,
    borderWidth: 2,
  })

  page.drawText('Vitalino Tech', {
    x: 60,
    y: 500,
    size: 16,
    font: boldFont,
    color: accent,
  })

  page.drawText('Certificado de Conclusão', {
    x: 60,
    y: 440,
    size: 32,
    font: boldFont,
    color: ink,
  })

  page.drawText('Certificamos que', {
    x: 60,
    y: 390,
    size: 14,
    font,
    color: muted,
  })

  page.drawText(customer.name, {
    x: 60,
    y: 355,
    size: 26,
    font: boldFont,
    color: ink,
  })

  page.drawText('concluiu com êxito o curso', {
    x: 60,
    y: 320,
    size: 14,
    font,
    color: muted,
  })

  page.drawText(COURSE_TITLE, {
    x: 60,
    y: 290,
    size: 18,
    font: boldFont,
    color: ink,
  })

  page.drawText(
    `Carga horária: ${certificate.hoursTotal}   •   Emitido em: ${formatDate(certificate.issuedAt)}`,
    { x: 60, y: 250, size: 12, font, color: muted },
  )

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
