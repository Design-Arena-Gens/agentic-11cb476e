import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Path to Mastery - A Guide to Discipline & Success',
  description: 'An interactive self-help book about discipline, focus, rules and pillars for success',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
