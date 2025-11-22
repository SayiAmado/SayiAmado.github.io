import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Patrick_Hand } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hand",
})

export const metadata: Metadata = {
  title: "RE Cambia - Student Marketplace",
  description: "The exclusive marketplace for university students.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${patrickHand.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
