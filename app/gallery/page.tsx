import { FC } from "react"
import { Metadata } from "next"
import { gallery } from "@/lib/gallery"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Complete Consulting | Gallery",
}

const page: FC = () => {
  return (
    <div className="container mx-auto min-h-screen mt-12 max-w-7xl">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {gallery.map(({ id, src, title, slug }) => (
            <Link
              key={id}
              href={`/gallery/${slug}`}
              as={`/gallery/${slug}`}
              className="flex flex-col gap-3 md:gap-6 text-center">
              <Image
                className="rounded-md aspect-square md:aspect-[8/5] object-cover"
                src={src}
                alt={title}
                width={1280}
                height={720}
                priority={true}
              />
              <span className="text-xs pb-2 md:text-base md:pb-0">{title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
