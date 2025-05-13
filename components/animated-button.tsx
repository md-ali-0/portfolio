"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface RippleProps {
  x: number
  y: number
  size: number
}

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: () => void
  dataCursor?: string
  dataCursorText?: string
  glowEffect?: boolean
  animatedBorder?: boolean
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export default function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  onClick,
  dataCursor = "button",
  dataCursorText,
  glowEffect = true,
  animatedBorder = true,
  disabled = false,
  type = "button",
}: AnimatedButtonProps) {
  const [ripples, setRipples] = useState<RippleProps[]>([])
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return

    const button = buttonRef.current
    const rect = button.getBoundingClientRect()

    // Calculate ripple position relative to button
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate ripple size (should be larger than the button for full effect)
    const size = Math.max(rect.width, rect.height) * 2.5

    // Add new ripple
    const newRipple = {
      x,
      y,
      size,
    }

    setRipples([...ripples, newRipple])

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((ripple) => ripple !== newRipple))
    }, 800)

    // Call the original onClick handler if provided
    if (onClick) onClick()
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleMouseDown = () => {
    setIsPressed(true)
  }

  const handleMouseUp = () => {
    setIsPressed(false)
  }

  // Determine base styles based on variant
  const getBaseStyles = () => {
    if (variant === "default") {
      return "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black"
    }
    if (variant === "outline") {
      return "bg-transparent border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10"
    }
    if (variant === "ghost") {
      return "bg-transparent hover:bg-emerald-500/10 text-emerald-400"
    }
    return ""
  }

  const baseClassName = cn(
    "relative overflow-hidden transition-all duration-300 transform",
    getBaseStyles(),
    glowEffect && isHovered && "shadow-lg shadow-emerald-500/30",
    disabled && "opacity-50 cursor-not-allowed",
    className,
  )

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      transition={{ type: "spring", stiffness: 500, damping: 15 }}
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
    >
      {/* Animated border effect */}
      {animatedBorder && variant === "outline" && !disabled && (
        <motion.div
          className="absolute inset-0 rounded-md opacity-70"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            background: [
              "linear-gradient(90deg, #10b981, #14b8a6, #10b981)",
              "linear-gradient(180deg, #10b981, #14b8a6, #10b981)",
              "linear-gradient(270deg, #10b981, #14b8a6, #10b981)",
              "linear-gradient(360deg, #10b981, #14b8a6, #10b981)",
              "linear-gradient(90deg, #10b981, #14b8a6, #10b981)",
            ],
          }}
          transition={{
            opacity: { duration: 0.3 },
            background: {
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        />
      )}

      {/* Glow effect for default variant */}
      {variant === "default" && glowEffect && !disabled && (
        <motion.div
          className="absolute inset-0 rounded-md bg-gradient-to-r from-emerald-500 to-teal-500 blur-md"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      <Button
        ref={buttonRef}
        variant={variant as any}
        size={size}
        className={baseClassName}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        data-cursor={dataCursor}
        data-cursor-text={dataCursorText}
        disabled={disabled}
        type={type}
      >
        {/* Ripple effects */}
        {ripples.map((ripple, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/30 pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: `${ripple.size}px`,
              height: `${ripple.size}px`,
              transform: "translate(-50%, -50%) scale(0)",
              animation: "ripple 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards",
            }}
          />
        ))}

        {/* Shine effect on hover */}
        {!disabled && (
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: "linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
                transform: isPressed ? "translateX(100%)" : "translateX(-100%)",
                transition: "transform 0.5s ease-in-out",
              }}
            />
          </motion.div>
        )}

        {/* Button content */}
        <motion.span
          className="relative z-10 flex items-center justify-center"
          animate={{
            y: isPressed ? 1 : 0,
            scale: isPressed ? 0.98 : 1,
          }}
          transition={{ duration: 0.1 }}
        >
          {children}
        </motion.span>
      </Button>
    </motion.div>
  )
}
