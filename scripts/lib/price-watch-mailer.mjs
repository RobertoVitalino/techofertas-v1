// Envia os e-mails de "baixou de preço" para quem pediu aviso do produto.

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vitalinotech.com.br').replace(/\/$/, '')
const FROM_ADDRESS = process.env.DEAL_ALERT_FROM_EMAIL || 'Vitalino Tech <onboarding@resend.dev>'
const RESEND_INTERVAL_DAYS = 3
const BATCH_SIZE = 100
const DROP_RATIO = 0.95

function escapeHtml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function buildEmail(product, previousPrice, watch) {
  const buyUrl = `${SITE_URL}/ir/${product.id}?origem=email`
  const cancelUrl = `${SITE_URL}/alerta-preco/cancelar?token=${watch.token}`
  const cancelAllUrl = `${cancelUrl}&todos=1`
  const image = /^https?:\/\//.test(product.image)
    ? `<img src="${escapeHtml(product.image)}" alt="" width="160" style="display:block;margin:0 auto 12px;max-width:160px;" />`
    : ''

  return {
    from: FROM_ADDRESS,
    to: [watch.email],
    subject: `📉 Baixou de preço: ${product.title.slice(0, 60)}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 520px; margin: 0 auto; color: #0f172a;">
        <p style="font-size: 13px; font-weight: bold; color: #b45309; text-transform: uppercase;">Alerta de preço · Vitalino Tech</p>
        <h1 style="font-size: 20px; line-height: 1.3;">O produto que você acompanha baixou de preço!</h1>
        ${image}
        <p style="font-size: 15px; font-weight: bold;">${escapeHtml(product.title)}</p>
        <p style="font-size: 15px;">
          De <span style="text-decoration: line-through; color: #64748b;">${escapeHtml(previousPrice)}</span>
          por <strong style="font-size: 20px; color: #047857;">${escapeHtml(product.price)}</strong>
        </p>
        <p style="margin: 20px 0;">
          <a href="${buyUrl}" style="background: #006fe8; color: #fff; padding: 12px 22px; border-radius: 8px; text-decoration: none; font-weight: bold;">
            Ver oferta no Mercado Livre
          </a>
        </p>
        <p style="font-size: 12px; color: #64748b;">Preços e estoque podem mudar a qualquer momento. Link de afiliado, sem custo extra para você.</p>
        <p style="margin-top: 28px; font-size: 11px; color: #94a3b8;">
          Você recebeu este e-mail porque pediu para ser avisado sobre este produto.
          <a href="${cancelUrl}" style="color: #94a3b8;">Cancelar este alerta</a> ·
          <a href="${cancelAllUrl}" style="color: #94a3b8;">Cancelar todos</a>.
        </p>
      </div>`,
  }
}

function parseBRL(value) {
  const number = Number(String(value ?? '').replace(/[^\d,]/g, '').replace(',', '.'))
  return Number.isFinite(number) && number > 0 ? number : null
}

// products: produtos lidos com sucesso hoje, já com o preço novo.
// Avisa quem acompanha o produto quando o preço ficou 5% ou mais abaixo do preço
// registrado no alerta (o do cadastro ou o do último aviso). Depois do aviso,
// o preço de referência passa a ser o novo, para só avisar de novo se cair mais.
export async function notifyPriceWatchers(prisma, products, { dryRun = false } = {}) {
  if (!products.length) return 0

  const since = new Date(Date.now() - RESEND_INTERVAL_DAYS * 24 * 60 * 60 * 1000)
  const byProduct = new Map(products.map((product) => [product.id, product]))
  const candidates = await prisma.priceWatch.findMany({
    where: {
      productId: { in: [...byProduct.keys()] },
      unsubscribedAt: null,
      OR: [{ lastNotifiedAt: null }, { lastNotifiedAt: { lt: since } }],
    },
  })

  const due = candidates.filter((watch) => {
    const reference = parseBRL(watch.priceAtSignup)
    const current = parseBRL(byProduct.get(watch.productId)?.price)
    return reference !== null && current !== null && current <= reference * DROP_RATIO
  })
  if (!due.length) return 0

  const emails = due.map((watch) => buildEmail(byProduct.get(watch.productId), watch.priceAtSignup, watch))

  if (dryRun) {
    console.log(`[simulação] ${emails.length} e-mail(s) de queda de preço seriam enviados.`)
    return emails.length
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('RESEND_API_KEY não configurada: alertas de preço não enviados.')

  for (let start = 0; start < emails.length; start += BATCH_SIZE) {
    const batch = emails.slice(start, start + BATCH_SIZE)
    const response = await fetch('https://api.resend.com/emails/batch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify(batch),
    })
    if (!response.ok) {
      throw new Error(`Resend respondeu ${response.status}: ${(await response.text()).slice(0, 300)}`)
    }
  }

  const now = new Date()
  for (const watch of due) {
    await prisma.priceWatch.update({
      where: { id: watch.id },
      data: { lastNotifiedAt: now, priceAtSignup: byProduct.get(watch.productId).price },
    })
  }
  return emails.length
}
