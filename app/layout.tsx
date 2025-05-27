import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Praivy',
  description: 'Encontre as melhores criadoras de conteúdo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
