import { randomBytes } from 'node:crypto'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'

function toBase32(bytes) {
  let buffer = 0
  let bits = 0
  let result = ''

  for (const byte of bytes) {
    buffer = (buffer << 8) | byte
    bits += 8

    while (bits >= 5) {
      bits -= 5
      result += alphabet[(buffer >> bits) & 31]
      buffer &= (1 << bits) - 1
    }
  }

  if (bits > 0) result += alphabet[(buffer << (5 - bits)) & 31]

  return result
}

const secret = toBase32(randomBytes(20))
const label = encodeURIComponent('Vitalino Tech:Administrador')
const issuer = encodeURIComponent('Vitalino Tech')

console.log('Cadastre esta chave manualmente no seu aplicativo autenticador:')
console.log(secret)
console.log('\nURI de configuração:')
console.log(`otpauth://totp/${label}?secret=${secret}&issuer=${issuer}&digits=6&period=30`)
console.log('\nDepois, salve a chave como ADMIN_TOTP_SECRET no Vercel e faça um novo deploy.')
