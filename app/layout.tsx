import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/ThemeProvider"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Footer from "@/components/Footer"
import SiteHeader from "@/components/SiteHeader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Complete Consulting | Home",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}>
        <ThemeProvider>
          <SiteHeader />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
