const FEATURED_COUNT = 8
const BATCH_SIZE = 100
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '')
const FROM_ADDRESS = process.env.DEAL_ALERT_FROM_EMAIL || 'Vitalino Tech <onboarding@resend.dev>'

function buildEmailHtml(products, unsubscribeUrl) {
  const productsHtml = products
    .map(
      (product) => `
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
            <a href="${product.affiliate}" style="color: #006fe8; font-weight: bold; text-decoration: none; font-size: 15px;">
              ${product.title}
            </a>
            <div style="margin-top: 4px; font-size: 14px; color: #475569;">
              <strong style="color: #0f172a; font-size: 16px;">${product.price}</strong>
              ${product.discount && product.discount !== '-0%' ? ` <span style="color: #059669; font-weight: bold;">${product.discount}</span>` : ''}
            </div>
          </td>
        </tr>`,
    )
    .join('')

  return `
    <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #0f172a;">
      <h1 style="font-size: 20px;">Novas ofertas na Vitalino Tech</h1>
      <p style="font-size: 14px; color: #475569;">Separamos algumas das melhores ofertas de hoje para você:</p>
      <table style="width: 100%; border-collapse: collapse;">${productsHtml}</table>
      <p style="margin-top: 24px;">
        <a href="${SITE_URL}" style="background: #006fe8; color: #fff; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">
          Ver todas as ofertas
        </a>
      </p>
      <p style="margin-top: 32px; font-size: 11px; color: #94a3b8;">
        Você recebeu este e-mail porque se cadastrou nos alertas de ofertas da Vitalino Tech.
        <a href="${unsubscribeUrl}" style="color: #94a3b8;">Cancelar inscrição</a>.
      </p>
    </div>
  `
}

async function sendBatch(emails) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    throw new Error('RESEND_API_KEY must be configured')
  }

  const response = await fetch('https://api.resend.com/emails/batch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(emails),
  })

  if (!response.ok) {
    const bodyText = await response.text()

    throw new Error(`Resend batch send failed with status ${response.status}: ${bodyText}`)
  }
}

export async function sendDealAlertToSubscribers(prisma, { dryRun = false } = {}) {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
    take: FEATURED_COUNT,
  })

  if (products.length === 0) {
    console.log('Nenhum produto no catálogo. Nada a enviar.')
    return
  }

  const subscribers = await prisma.dealAlertSubscriber.findMany({
    where: { unsubscribedAt: null },
    select: { email: true, unsubscribeToken: true },
  })

  if (subscribers.length === 0) {
    console.log('Nenhum inscrito ativo. Nada a enviar.')
    return
  }

  const emails = subscribers.map((subscriber) => ({
    from: FROM_ADDRESS,
    to: subscriber.email,
    subject: 'Novas ofertas selecionadas para você',
    html: buildEmailHtml(
      products,
      `${SITE_URL}/alertas/cancelar?token=${subscriber.unsubscribeToken}`,
    ),
  }))

  if (dryRun) {
    console.log(`Simulação: ${emails.length} e-mail(s) seriam enviados com ${products.length} produto(s).`)
    return
  }

  for (let index = 0; index < emails.length; index += BATCH_SIZE) {
    await sendBatch(emails.slice(index, index + BATCH_SIZE))
  }

  console.log(`Alerta enviado para ${emails.length} inscrito(s).`)
}
