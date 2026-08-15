import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Cinzel, Elms_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// marketing
const marketing_font = Elms_Sans({
  variable: '--font-marketing',
  subsets: ['latin'],
})

// product
const product_font = JetBrains_Mono({
  variable: '--font-product',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ASMS Admin Panel',
  description: 'Marketing site and authenticated product experience',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${marketing_font.variable} ${product_font.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}