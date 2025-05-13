"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface MagneticElementProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export default function MagneticElement({ children, className = "", strength = 30 }: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()

    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)

    // Calculate distance from center (0-1)
    const distance = Math.sqrt(x * x + y * y)
    const maxDistance = Math.sqrt((width / 2) * (width / 2) + (height / 2) * (height / 2))
    const distanceRatio = Math.min(distance / maxDistance, 1)

    // Apply strength with falloff based on distance
    const strengthFactor = 1 - distanceRatio * 0.5

    setPosition({
      x: x * strengthFactor * (strength / 100),
      y: y * strengthFactor * (strength / 100),
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <motion.div
      ref={ref}
      className={`magnetic-element ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      {children}
    </motion.div>
  )
}
