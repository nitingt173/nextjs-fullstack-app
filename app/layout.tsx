import type { Metadata } from 'next'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Next.js Fullstack App!!! TESTING 123',
  description: 'A Next.js application with frontend UI and backend API!!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <SpeedInsights />
    </html>
  )
}
