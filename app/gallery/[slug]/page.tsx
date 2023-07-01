import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Complete Consulting | Gallery",
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const imagesBySlug = await import(`@/lib/gallery/${slug}.ts`)
  const gallery = imagesBySlug.images

  return (
    <div className="container mx-auto min-h-screen mt-12 max-w-7xl">
      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gallery.map(({ id, src, alt }: any) => (
            <Image
              key={id}
              className="rounded-md aspect-[8/5] object-cover"
              src={src}
              alt={alt}
              width={1280}
              height={720}
              priority={true}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
