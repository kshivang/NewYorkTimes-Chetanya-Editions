import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The New York Times - All the News That\'s Fit to Print',
  description: 'The New York Times newspaper webpage built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}
