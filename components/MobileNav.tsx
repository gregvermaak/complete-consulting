"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet"
import { Button, buttonVariants } from "@/ui/Buttons"
import { SidebarOpen } from "lucide-react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
          <SidebarOpen className="w-6 h-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className={buttonVariants({ variant: "link" })}
          onOpenChange={setOpen}>
          Complete Consulting
        </MobileLink>

        <nav className="flex flex-col space-y-3 items-start pt-4">
          <MobileLink
            href="/about"
            className={buttonVariants({ variant: "ghost" })}
            onOpenChange={setOpen}>
            About
          </MobileLink>
          <MobileLink
            href="/gallery"
            className={buttonVariants({ variant: "ghost" })}
            onOpenChange={setOpen}>
            Gallery
          </MobileLink>
          <MobileLink
            href="/contact"
            className={buttonVariants({ variant: "ghost" })}
            onOpenChange={setOpen}>
            Contact
          </MobileLink>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}>
      {children}
    </Link>
  )
}

export default MobileNav
