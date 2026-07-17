export const CUSTOMER_SESSION_COOKIE = 'vitalino_customer_session'
export const CUSTOMER_SESSION_DURATION_SECONDS = 60 * 60 * 24 * 7
export const CUSTOMER_SESSION_IDLE_SECONDS = 60 * 60 * 12

const PBKDF2_ITERATIONS = 600_000
const LEGACY_PBKDF2_ITERATIONS = 210_000
const MINIMUM_PASSWORD_LENGTH = 15
const encoder = new TextEncoder()

const blockedPasswords = new Set([
  '123456789012345',
  'administrador',
  'administrator',
  'passwordpassword',
  'qwertyqwertyqwerty',
  'senha1234567890',
  'vitalinotech',
])

function getAuthSecret() {
  const secret = process.env.AUTH_SECRET

  if (!secret || secret.length < 32) {
    throw new Error('AUTH_SECRET must contain at least 32 characters')
  }

  return secret
}

function toHex(bytes: ArrayBuffer | Uint8Array) {
  const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes)

  return Array.from(view, (byte) => byte.toString(16).padStart(2, '0')).join('')
}

async function sha256(value: string) {
  return toHex(await crypto.subtle.digest('SHA-256', encoder.encode(value)))
}

function fromHex(value: string) {
  if (!value || value.length % 2 !== 0 || !/^[a-f0-9]+$/i.test(value)) {
    return null
  }

  const bytes = new Uint8Array(value.length / 2)

  for (let index = 0; index < value.length; index += 2) {
    bytes[index / 2] = Number.parseInt(value.slice(index, index + 2), 16)
  }

  return bytes
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

  return toHex(await crypto.subtle.sign('HMAC', key, encoder.encode(value)))
}

export function normalizeCustomerEmail(email: string) {
  return email.trim().toLowerCase()
}

export function isValidCustomerEmail(email: string) {
  return (
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  )
}

export function normalizeCustomerUsername(username: string) {
  return username.trim().toLowerCase()
}

export function isValidCustomerUsername(username: string) {
  return /^[a-z0-9._-]{3,30}$/.test(username)
}

export function isAcceptableCustomerPassword(password: string) {
  const normalized = password.trim().toLowerCase()

  return (
    password.length >= MINIMUM_PASSWORD_LENGTH &&
    password.length <= 128 &&
    !blockedPasswords.has(normalized)
  )
}

export async function hashCustomerPassword(password: string) {
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  )
  const derivedKey = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      hash: 'SHA-256',
      salt,
      iterations: PBKDF2_ITERATIONS,
    },
    keyMaterial,
    256,
  )

  return `pbkdf2_sha256$${PBKDF2_ITERATIONS}$${toHex(salt)}$${toHex(derivedKey)}`
}

export async function verifyCustomerPassword(
  password: string,
  storedHash: string,
) {
  const [algorithm, iterationsValue, saltValue, expectedHash, extraPart] =
    storedHash.split('$')
  const iterations = Number(iterationsValue)
  const salt = fromHex(saltValue || '')

  if (
    extraPart !== undefined ||
    algorithm !== 'pbkdf2_sha256' ||
    !Number.isSafeInteger(iterations) ||
    iterations < LEGACY_PBKDF2_ITERATIONS ||
    iterations > PBKDF2_ITERATIONS ||
    !salt ||
    !expectedHash
  ) {
    return false
  }

  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  )
  const derivedKey = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      hash: 'SHA-256',
      salt,
      iterations,
    },
    keyMaterial,
    256,
  )

  return safeEqual(toHex(derivedKey), expectedHash)
}

export function customerPasswordNeedsRehash(storedHash: string) {
  const [algorithm, iterationsValue] = storedHash.split('$')

  return (
    algorithm !== 'pbkdf2_sha256' ||
    Number(iterationsValue) !== PBKDF2_ITERATIONS
  )
}

export async function createCustomerSessionToken(customerId: number) {
  const expiresAt =
    Math.floor(Date.now() / 1000) + CUSTOMER_SESSION_DURATION_SECONDS
  const sessionId = toHex(crypto.getRandomValues(new Uint8Array(32)))
  const payload = `${customerId}.${expiresAt}.${sessionId}`
  const signature = await sign(payload)

  return {
    expiresAt: new Date(expiresAt * 1000),
    sessionHash: await sha256(sessionId),
    token: `${payload}.${signature}`,
  }
}

export async function verifyCustomerSessionToken(token?: string) {
  if (!token) return null

  const [
    customerIdValue,
    expiresAtValue,
    sessionId,
    receivedSignature,
    extraPart,
  ] =
    token.split('.')
  const customerId = Number(customerIdValue)
  const expiresAt = Number(expiresAtValue)

  if (
    extraPart !== undefined ||
    !sessionId ||
    !/^[a-f0-9]{64}$/i.test(sessionId) ||
    !receivedSignature ||
    !Number.isSafeInteger(customerId) ||
    customerId <= 0 ||
    !Number.isSafeInteger(expiresAt) ||
    expiresAt <= Math.floor(Date.now() / 1000)
  ) {
    return null
  }

  try {
    const payload = `${customerId}.${expiresAt}.${sessionId}`
    const expectedSignature = await sign(payload)

    return safeEqual(receivedSignature, expectedSignature)
      ? {
          customerId,
          expiresAt: new Date(expiresAt * 1000),
          sessionHash: await sha256(sessionId),
        }
      : null
  } catch {
    return null
  }
}

export async function hashSensitiveAuthValue(
  purpose: string,
  value: string,
) {
  return sign(`${purpose}:${value.trim().toLowerCase()}`)
}
