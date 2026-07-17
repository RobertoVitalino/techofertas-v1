export const ADMIN_SESSION_COOKIE = 'vitalino_admin_session'
export const ADMIN_SESSION_DURATION_SECONDS = 60 * 60 * 2
export const ADMIN_SESSION_IDLE_SECONDS = 60 * 30

const encoder = new TextEncoder()
const base32Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'

function getAuthSecret() {
  const secret = process.env.AUTH_SECRET

  if (!secret || secret.length < 32) {
    throw new Error('AUTH_SECRET must contain at least 32 characters')
  }

  return secret
}

function toHex(bytes: ArrayBuffer | Uint8Array) {
  const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes)

  return Array.from(view, (byte) =>
    byte.toString(16).padStart(2, '0'),
  ).join('')
}

async function sha256(value: string) {
  return toHex(await crypto.subtle.digest('SHA-256', encoder.encode(value)))
}

function safeEqual(left: string, right: string) {
  if (left.length !== right.length) return false

  let difference = 0

  for (let index = 0; index < left.length; index += 1) {
    difference |= left.charCodeAt(index) ^ right.charCodeAt(index)
  }

  return difference === 0
}

function decodeBase32(value: string) {
  const normalized = value.trim().toUpperCase().replace(/[\s=-]/g, '')

  if (normalized.length < 16) return null

  let buffer = 0
  let bits = 0
  const bytes: number[] = []

  for (const character of normalized) {
    const index = base32Alphabet.indexOf(character)

    if (index < 0) return null

    buffer = (buffer << 5) | index
    bits += 5

    if (bits >= 8) {
      bits -= 8
      bytes.push((buffer >> bits) & 0xff)
      buffer &= (1 << bits) - 1
    }
  }

  return new Uint8Array(bytes)
}

async function generateTotpCode(secret: Uint8Array, counter: number) {
  const counterBytes = new Uint8Array(8)
  const secretBuffer = new ArrayBuffer(secret.byteLength)
  new Uint8Array(secretBuffer).set(secret)
  new DataView(counterBytes.buffer).setBigUint64(0, BigInt(counter), false)
  const key = await crypto.subtle.importKey(
    'raw',
    secretBuffer,
    { name: 'HMAC', hash: 'SHA-1' },
    false,
    ['sign'],
  )
  const digest = new Uint8Array(
    await crypto.subtle.sign('HMAC', key, counterBytes),
  )
  const offset = digest[digest.length - 1] & 0x0f
  const value =
    ((digest[offset] & 0x7f) << 24) |
    ((digest[offset + 1] & 0xff) << 16) |
    ((digest[offset + 2] & 0xff) << 8) |
    (digest[offset + 3] & 0xff)

  return String(value % 1_000_000).padStart(6, '0')
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
  const sessionId = toHex(crypto.getRandomValues(new Uint8Array(32)))
  const payload = `${expiresAt}.${sessionId}`
  const signature = await sign(payload)

  return {
    expiresAt: new Date(expiresAt * 1000),
    sessionHash: await sha256(sessionId),
    token: `${payload}.${signature}`,
  }
}

export async function verifyAdminSessionToken(token?: string) {
  if (!token) return false

  const [expiresAtValue, sessionId, receivedSignature, extraPart] =
    token.split('.')
  const expiresAt = Number(expiresAtValue)

  if (
    extraPart !== undefined ||
    !expiresAtValue ||
    !sessionId ||
    !/^[a-f0-9]{64}$/i.test(sessionId) ||
    !receivedSignature ||
    !Number.isSafeInteger(expiresAt) ||
    expiresAt <= Math.floor(Date.now() / 1000)
  ) {
    return false
  }

  try {
    const expectedSignature = await sign(`${expiresAtValue}.${sessionId}`)

    return safeEqual(receivedSignature, expectedSignature)
      ? {
          expiresAt: new Date(expiresAt * 1000),
          sessionHash: await sha256(sessionId),
        }
      : null
  } catch {
    return null
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

export function isAdminMfaEnabled() {
  return decodeBase32(process.env.ADMIN_TOTP_SECRET || '') !== null
}

export async function verifyAdminTotp(code: string) {
  const secret = decodeBase32(process.env.ADMIN_TOTP_SECRET || '')
  const normalizedCode = code.trim()

  if (!secret || !/^\d{6}$/.test(normalizedCode)) return false

  const currentCounter = Math.floor(Date.now() / 1000 / 30)
  const candidates = await Promise.all(
    [-1, 0, 1].map((offset) =>
      generateTotpCode(secret, currentCounter + offset),
    ),
  )

  return candidates.some((candidate) => safeEqual(candidate, normalizedCode))
}
