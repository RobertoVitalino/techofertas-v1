const BATCH_SIZE = 100
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '')
const FROM_ADDRESS = process.env.DEAL_ALERT_FROM_EMAIL || 'Vitalino Tech <onboarding@resend.dev>'

function courseLine(courseReminder, { showProgress }) {
  const href = `${SITE_URL}${courseReminder.landingHref}`

  return `
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
        <a href="${href}" style="color: #006fe8; font-weight: bold; text-decoration: none; font-size: 15px;">
          ${courseReminder.title}
        </a>
        ${
          showProgress
            ? `<div style="margin-top: 4px; font-size: 13px; color: #475569;">
                 ${courseReminder.completed} de ${courseReminder.total} aulas concluídas
               </div>`
            : ''
        }
      </td>
    </tr>`
}

function buildEmailHtml(customerName, incomplete, certificatePending) {
  const firstName = customerName.trim().split(/\s+/)[0] || customerName

  const incompleteSection =
    incomplete.length > 0
      ? `
        <h2 style="font-size: 16px; margin-top: 28px;">Termine o que você começou</h2>
        <p style="font-size: 14px; color: #475569;">Você já está no meio do caminho nesses cursos:</p>
        <table style="width: 100%; border-collapse: collapse;">
          ${incomplete.map((course) => courseLine(course, { showProgress: true })).join('')}
        </table>
      `
      : ''

  const certificateSection =
    certificatePending.length > 0
      ? `
        <h2 style="font-size: 16px; margin-top: 28px;">Parabéns! Emita seu certificado</h2>
        <p style="font-size: 14px; color: #475569;">
          Você concluiu todas as aulas destes cursos. Falta só emitir o certificado:
        </p>
        <table style="width: 100%; border-collapse: collapse;">
          ${certificatePending.map((course) => courseLine(course, { showProgress: false })).join('')}
        </table>
        <p style="margin-top: 16px; font-size: 14px; color: #475569;">
          Aproveite também para conhecer os outros cursos gratuitos disponíveis.
        </p>
      `
      : ''

  return `
    <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #0f172a;">
      <h1 style="font-size: 20px;">Olá, ${firstName}!</h1>
      <p style="font-size: 14px; color: #475569;">
        Temos novidades sobre o seu progresso nos cursos da Vitalino Tech:
      </p>
      ${incompleteSection}
      ${certificateSection}
      <p style="margin-top: 28px;">
        <a href="${SITE_URL}/cursos" style="background: #006fe8; color: #fff; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">
          Ver todos os cursos
        </a>
      </p>
      <p style="margin-top: 32px; font-size: 11px; color: #94a3b8;">
        Você recebeu este e-mail por ter uma conta e cursos em andamento na Vitalino Tech.
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

export async function sendCourseReminderEmails(reminders, { dryRun = false } = {}) {
  if (reminders.length === 0) {
    console.log('Nenhum cliente com lembrete pendente. Nada a enviar.')
    return
  }

  const emails = reminders.map((reminder) => ({
    from: FROM_ADDRESS,
    to: reminder.email,
    subject:
      reminder.certificatePending.length > 0
        ? 'Parabéns! Emita seu certificado na Vitalino Tech'
        : 'Falta pouco para terminar seu curso na Vitalino Tech',
    html: buildEmailHtml(reminder.name, reminder.incomplete, reminder.certificatePending),
  }))

  if (dryRun) {
    for (const reminder of reminders) {
      console.log(
        `[simulação] ${reminder.email} — incompletos: ${reminder.incomplete.length}, certificado pendente: ${reminder.certificatePending.length}`,
      )
    }
    console.log(`Simulação: ${emails.length} e-mail(s) seriam enviados.`)
    return
  }

  for (let index = 0; index < emails.length; index += BATCH_SIZE) {
    await sendBatch(emails.slice(index, index + BATCH_SIZE))
  }

  console.log(`Lembrete enviado para ${emails.length} cliente(s).`)
}
