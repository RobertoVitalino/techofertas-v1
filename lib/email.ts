import 'server-only'

const RESEND_API = 'https://api.resend.com/emails'

function getFromAddress() {
  return process.env.DEAL_ALERT_FROM_EMAIL || 'Vitalino Tech <onboarding@resend.dev>'
}

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    throw new Error('RESEND_API_KEY must be configured')
  }

  const response = await fetch(RESEND_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: getFromAddress(),
      to,
      subject,
      html,
    }),
  })

  if (!response.ok) {
    const bodyText = await response.text()

    throw new Error(`Resend send failed with status ${response.status}: ${bodyText}`)
  }

  return response.json() as Promise<{ id: string }>
}
