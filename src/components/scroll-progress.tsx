"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { usePathname } from "next/navigation"

export default function ScrollProgress() {
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Only show on blog posts
  if (!pathname.startsWith("/blog/") || pathname === "/blog") {
    return null
  }

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 z-50 origin-left"
      style={{ scaleX }}
    />
  )
}
