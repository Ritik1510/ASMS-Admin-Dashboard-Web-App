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
  metadataBase: new URL("https://admin.thinkwithoutlimits.com"),

  title: {
    default: "Gate-G — Apartment & Society Management System",
    template: "%s | Gate-G",
  },

  description:
    "Gate-G is an apartment and society management system for managing residents, apartments, visitors, complaints, notices, and everyday society operations.",

  applicationName: "Gate-G",

  openGraph: {
    type: "website",
    url: "https://admin.thinkwithoutlimits.com.com",
    siteName: "Gate-G",
    title: "Gate-G — Apartment & Society Management System",
    description:
      "Manage residents, apartments, visitors, complaints, notices, and everyday society operations with Gate-G.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Gate-G — Apartment & Society Management System",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gate-G — Apartment & Society Management System",
    description:
      "A simple platform for managing apartments, residents, visitors, complaints, notices, and society operations.",
    images: ["/twitter-image.png"],
  },

  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
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