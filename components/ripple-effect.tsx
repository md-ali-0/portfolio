"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Ripple {
  id: number
  x: number
  y: number
}

export default function RippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { clientX, clientY } = e

      // Add new ripple
      const newRipple = {
        id: Date.now(),
        x: clientX,
        y: clientY,
      }

      setRipples((prev) => [...prev, newRipple])

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
      }, 1000)
    }

    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full"
            style={{
              left: ripple.x,
              top: ripple.y,
              translateX: "-50%",
              translateY: "-50%",
              background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(16,185,129,0) 70%)",
            }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 200, height: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
