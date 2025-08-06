import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  
  title: "BASHRA.AI - Revolutionary AI-Powered Medical Diagnostics",
  description:
    "Transform healthcare with cutting-edge artificial intelligence. BASHRA.AI provides instant, accurate diagnoses and streamlines healthcare delivery.",
    generator: 'Abdallah Mohamed'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/logo192.ico" sizes="any" />
        {/* يمكنك استخدام png أيضاً */}
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
