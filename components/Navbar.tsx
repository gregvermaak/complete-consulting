import Link from "next/link"
import React from "react"
import { buttonVariants } from "@/components/ui/Buttons"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <div className="bg-background/95 fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-between border-b shadow-md backdrop-blur-sm">
      <div className="container mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          Complete Consulting
        </Link>
        <div className="md:hidden">
          <ThemeToggle />
        </div>

        <div className="hidden gap-4 md:flex items-center">
          <Link href="/about" className={buttonVariants({ variant: "ghost" })}>
            About
          </Link>
          <Link
            href="/services"
            className={buttonVariants({ variant: "ghost" })}>
            Services
          </Link>
          <Link
            href="/gallery"
            className={buttonVariants({ variant: "ghost" })}>
            Gallery
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "ghost" })}>
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
