import Link from "next/link"
import React from "react"
import { buttonVariants } from "@/components/ui/Buttons"
import ThemeToggle from "./ThemeToggle"
import MobileNav from "./MobileNav"
import Navbar from "./Navbar"

export default function SiteHeader() {
  return (
    <div className="px-8 md:px-0 w-full bg-background/95 fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-between border-b shadow-md backdrop-blur-sm">
      <Navbar />
      <MobileNav />
      <div className="md:hidden">
        <ThemeToggle />
      </div>
    </div>
  )
}
