import { NextResponse, type NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isLikelyBot, normalizeClickSource } from '@/lib/click-tracking'

export const dynamic = 'force-dynamic'

// Redireciona para o link de afiliado e registra o clique (produto + origem).
// Ex.: /ir/42?origem=telegram
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const productId = Number(id)
  const fallback = new URL('/#produtos-por-categoria', request.url)

  if (!Number.isInteger(productId) || productId <= 0) {
    return NextResponse.redirect(fallback, 302)
  }

  const product = await prisma.product
    .findUnique({ where: { id: productId }, select: { affiliate: true, active: true } })
    .catch(() => null)

  // Produto removido do catálogo (ex.: post antigo no Telegram): manda para a vitrine.
  if (!product?.affiliate || !product.active) {
    return NextResponse.redirect(fallback, 302)
  }

  const source = normalizeClickSource(request.nextUrl.searchParams.get('origem'))

  if (!isLikelyBot(request.headers.get('user-agent'))) {
    // Falha ao registrar nunca impede o redirecionamento.
    await prisma.affiliateClick
      .create({ data: { productId, source } })
      .catch((error) => console.error('Falha ao registrar clique', error))
  }

  const response = NextResponse.redirect(product.affiliate, 302)
  response.headers.set('Cache-Control', 'no-store')
  response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  return response
}
