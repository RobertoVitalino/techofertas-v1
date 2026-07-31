// Session cookies now carry an explicit Domain (see SESSION_COOKIE_DOMAIN in
// lib/site.ts) so they're shared between the apex domain and www. Browsers
// don't overwrite a cookie set for one (name, domain, path) with one set for
// a different domain — so anyone who authenticated before that change still
// has an old host-only cookie sitting alongside the new domain-scoped one.
// Both get sent on every request, and the standard `cookies().get(name)` /
// `request.cookies.get(name)` helpers only ever look at one of them. These
// helpers read every value for a given cookie name from the raw header and
// try each until one verifies, so a stale duplicate can't shadow a valid
// session.
export function extractCookieValues(
  cookieHeader: string | null | undefined,
  name: string,
) {
  if (!cookieHeader) return []

  const prefix = `${name}=`

  return cookieHeader
    .split(';')
    .map((pair) => pair.trim())
    .filter((pair) => pair.startsWith(prefix))
    .map((pair) => {
      const rawValue = pair.slice(prefix.length)

      try {
        return decodeURIComponent(rawValue)
      } catch {
        return rawValue
      }
    })
}

export async function findFirstValidCookieValue<T>(
  values: string[],
  verify: (value: string) => Promise<T | null | false | undefined>,
): Promise<T | null> {
  for (const value of values) {
    const result = await verify(value)

    if (result) return result
  }

  return null
}
