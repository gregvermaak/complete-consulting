import Link from "next/link"
import { FC } from "react"

const Footer: FC = ({}) => {
  return (
    <footer className="border-t py-4 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <span className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()}. All Rights Reserved by Complete
            Consulting.{" "}
            <span>
              Built by{" "}
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4">
                Geevee Studios
              </Link>
            </span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
