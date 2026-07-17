import { getCurrentCustomer } from '@/lib/require-customer'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const customer = await getCurrentCustomer()

  if (!customer) {
    return NextResponse.json({ erro: 'Não autorizado.' }, { status: 401 })
  }

  const body = JSON.stringify(
    {
      exportadoEm: new Date().toISOString(),
      conta: {
        id: customer.id,
        nome: customer.name,
        email: customer.email,
        usuario: customer.username,
        cadastradoEm: customer.createdAt.toISOString(),
        atualizadoEm: customer.updatedAt.toISOString(),
        termosAceitosEm: customer.termsAcceptedAt?.toISOString() || null,
        privacidadeAceitaEm:
          customer.privacyAcceptedAt?.toISOString() || null,
      },
    },
    null,
    2,
  )

  return new NextResponse(body, {
    headers: {
      'Cache-Control': 'no-store',
      'Content-Disposition': 'attachment; filename="dados-vitalino-tech.json"',
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
}
