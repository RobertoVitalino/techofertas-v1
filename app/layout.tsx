import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vitalino Tech',
  description:
    'Vitalino Tech - Desenvolvimento de Sistemas, Tecnologia e Soluções Digitais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}