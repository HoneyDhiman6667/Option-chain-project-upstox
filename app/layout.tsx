import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Option Chain Dashboard',
  description: 'Created by Dev',
  generator: 'developer',
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
