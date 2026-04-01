import type { Metadata, Viewport } from 'next'
import { Fredoka, Comic_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const fredoka = Fredoka({ 
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'swap',
})

const comicNeue = Comic_Neue({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-comic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pet Mind Reader 🐾 | April Fools 2026',
  description: 'Ever wondered what your pet is REALLY thinking? Upload a photo and our totally real, definitely not silly AI will reveal their deepest thoughts!',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5a623',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} ${comicNeue.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
