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
    url: "https://admin.thinkwithoutlimits.com",
    siteName: "Gate-G",
    title: "Gate-G — Apartment & Society Management System",
    description:
      "Gate-G makes it simple to manage your society and all its everyday tasks with ease.",
    images: [
      {
        url: "/opengraph-image.webp",
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
    icon: "/icon.svg",
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