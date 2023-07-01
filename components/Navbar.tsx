import Link from "next/link"
import React from "react"
import { buttonVariants } from "@/components/ui/Buttons"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <div className="container hidden md:flex w-full max-w-7xl items-center justify-between">
      <Link href="/" className={buttonVariants({ variant: "link" })}>
        Complete Consulting
      </Link>

      <nav className="gap-4 flex items-center">
        <Link href="/about" className={buttonVariants({ variant: "ghost" })}>
          About
        </Link>
        <Link href="/gallery" className={buttonVariants({ variant: "ghost" })}>
          Gallery
        </Link>
        <Link href="/contact" className={buttonVariants({ variant: "ghost" })}>
          Contact
        </Link>
        <ThemeToggle />
      </nav>
    </div>
  )
}
