"use client"

import { rollingGalleryImages } from "@/lib/rolling-gallery"
import { useEffect, useState } from "react"
import { motion, AnimatePresence, MotionConfig } from "framer-motion"

const variants = {
  hidden: { opacity: 0 },
  exiting: { opacity: 0 },
  visible: { opacity: 1 },
}

const RollingGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === rollingGalleryImages.length - 1) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="h-[calc(100vh-81px)]">
      <MotionConfig transition={{ duration: 1.0 }}>
        <AnimatePresence initial={false}>
          <motion.img
            className="w-screen h-[calc(100vh-80px)] absolute top-0 left-0 object-cover"
            key={rollingGalleryImages[currentIndex].src}
            src={rollingGalleryImages[currentIndex].src}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exiting"
            alt={rollingGalleryImages[currentIndex].alt}
          />
        </AnimatePresence>
      </MotionConfig>
    </div>
  )
}

export default RollingGallery
