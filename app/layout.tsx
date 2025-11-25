import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TANISHIM AI - Ovozli TANISHLAR boshqaruvi",
  description:
    "Save contacts in 15 seconds with voice. AI-powered contact management that parses, corrects, and organizes automatically. Search by role, not name. Perfect for networking professionals.",
  keywords: [
    "TANISHIM",
    "Muhammadbobur",
    "voice contact management",
    "AI contact manager",
    "networking app",
    "voice recognition",
    "contact organization",
    "smart search",
    "ovozli kontaktlar ilovasi",
    "Sun'iy intelekt kontaktlar",
    "tanishlar ilovasi",
    "instagram",
    "youtube",
    "chatgpt",
    "AI",
    "ai",
    "Ai",
    "Sun'iy intelekt",
    "uzbek",
    "O'zbek",
  ],
  authors: [{ name: "TANISHIM AI", url: "https://tanishim.vercel.app" }],
  creator: "TANISHIM",
  publisher: "TANISHIM AI",
  formatDetection: {
    email: "muhammadboburotaxanov@gmail.com",
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://tanishim.vercel.app",
    title: "TANISHIM AI - Voice-Powered Contact Management",
    description:
      "Save contacts in 15 seconds with your voice. AI automatically parses, corrects, and organizes everything.",
    siteName: "TANISHIM AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "TANISHIM AI - Voice Contact Management",
    description: "Save contacts in 15 seconds with voice. AI-powered organizing.",
    creator: "@Muhammadbobur",
  },
  generator: "TANISHIM ai by MUHAMMADBOBUR",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "TANISHIM AI",
              description: "Voice-powered contact management and networking application",
              url: "https://tanishim-ai.vercel.app",
              applicationCategory: "ProductivityApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Person",
                name: "Muhammadbobur",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
