import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Baums - Our Story",
  description: "A timeline of our relationship milestones and memories",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "The Baums - Our Story",
    description: "A timeline of our relationship milestones and memories",
    images: ["/og.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  )
}
