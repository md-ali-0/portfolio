"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface Ripple {
  id: number
  x: number
  y: number
}

export default function RippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const rippleCount = useRef(0)
  const MAX_RIPPLES = 5 // Limit the number of simultaneous ripples

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Limit ripple creation to prevent performance issues
      if (rippleCount.current >= MAX_RIPPLES) return
      
      const { clientX, clientY } = e

      // Add new ripple
      const newRipple = {
        id: Date.now(),
        x: clientX,
        y: clientY,
      }

      setRipples((prev) => {
        // Keep only the most recent ripples
        const updated = [...prev, newRipple].slice(-MAX_RIPPLES)
        rippleCount.current = updated.length
        return updated
      })

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => {
          const filtered = prev.filter((ripple) => ripple.id !== newRipple.id)
          rippleCount.current = filtered.length
          return filtered
        })
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
            animate={{ width: 150, height: 150, opacity: 0 }} // Reduced size
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }} // Shorter duration
          />
        ))}
      </AnimatePresence>
    </div>
  )
}