export const ADMIN_SESSION_COOKIE = 'vitalino_admin_session'
export const ADMIN_SESSION_DURATION_SECONDS = 60 * 60 * 12

const encoder = new TextEncoder()

function getAuthSecret() {
  const secret = process.env.AUTH_SECRET

  if (!secret || secret.length < 32) {
    throw new Error('AUTH_SECRET must contain at least 32 characters')
  }

  return secret
}

function toHex(bytes: ArrayBuffer) {
  return Array.from(new Uint8Array(bytes), (byte) =>
    byte.toString(16).padStart(2, '0'),
  ).join('')
}

function safeEqual(left: string, right: string) {
  if (left.length !== right.length) return false

  let difference = 0

  for (let index = 0; index < left.length; index += 1) {
    difference |= left.charCodeAt(index) ^ right.charCodeAt(index)
  }

  return difference === 0
}

async function sign(value: string) {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(getAuthSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )

  return toHex(
    await crypto.subtle.sign('HMAC', key, encoder.encode(value)),
  )
}

export async function createAdminSessionToken() {
  const expiresAt =
    Math.floor(Date.now() / 1000) + ADMIN_SESSION_DURATION_SECONDS
  const signature = await sign(String(expiresAt))

  return `${expiresAt}.${signature}`
}

export async function verifyAdminSessionToken(token?: string) {
  if (!token) return false

  const [expiresAtValue, receivedSignature, extraPart] = token.split('.')
  const expiresAt = Number(expiresAtValue)

  if (
    extraPart !== undefined ||
    !expiresAtValue ||
    !receivedSignature ||
    !Number.isSafeInteger(expiresAt) ||
    expiresAt <= Math.floor(Date.now() / 1000)
  ) {
    return false
  }

  try {
    const expectedSignature = await sign(expiresAtValue)
    return safeEqual(receivedSignature, expectedSignature)
  } catch {
    return false
  }
}

export async function verifyAdminCredentials(email: string, password: string) {
  const configuredEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase()
  const configuredPassword = process.env.ADMIN_PASSWORD

  if (!configuredEmail || !configuredPassword) return false

  try {
    const [receivedEmail, expectedEmail, receivedPassword, expectedPassword] =
      await Promise.all([
        sign(email.trim().toLowerCase()),
        sign(configuredEmail),
        sign(password),
        sign(configuredPassword),
      ])

    return (
      safeEqual(receivedEmail, expectedEmail) &&
      safeEqual(receivedPassword, expectedPassword)
    )
  } catch {
    return false
  }
}
