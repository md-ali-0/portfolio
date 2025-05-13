"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

export default function CursorAlternative() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [cursorText, setCursorText] = useState("")
  const [isHovering, setIsHovering] = useState(false)

  // Use motion values for smoother animations
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  // Add springs for smoother following with optimized settings
  const springConfig = { damping: 20, stiffness: 200, mass: 0.2 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Throttle mouse move for better performance
  const throttle = (callback: Function, limit: number) => {
    let waiting = false
    return function (this: any, ...args: any[]) {
      if (!waiting) {
        callback.apply(this, args)
        waiting = true
        setTimeout(() => {
          waiting = false
        }, limit)
      }
    }
  }

  useEffect(() => {
    const handleMouseMove = throttle((e: MouseEvent) => {
      const { clientX, clientY } = e
      cursorX.set(clientX)
      cursorY.set(clientY)
      setMousePosition({
        x: clientX,
        y: clientY,
      })
    }, 10) // 10ms throttle for smoother performance

    window.addEventListener("mousemove", handleMouseMove)

    // Handle different element types
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const cursorType = target.getAttribute("data-cursor")
      const cursorTextContent = target.getAttribute("data-cursor-text")

      if (cursorTextContent) {
        setCursorText(cursorTextContent)
      }

      if (cursorType === "link") {
        setCursorVariant("link")
      } else if (cursorType === "button") {
        setCursorVariant("button")
      } else if (cursorType === "project") {
        setCursorVariant("project")
      } else if (cursorType === "image") {
        setCursorVariant("image")
      } else {
        setCursorVariant("hover")
      }

      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setCursorVariant("default")
      setCursorText("")
      setIsHovering(false)
    }

    // Add click effect
    const handleMouseDown = () => {
      setCursorVariant("click")
    }

    const handleMouseUp = () => {
      if (isHovering) {
        setCursorVariant("hover")
      } else {
        setCursorVariant("default")
      }
    }

    // Apply to all interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, [role='button'], .interactive-item, [data-cursor]",
    )

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)
    })

    // Add click listeners
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })

      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isHovering, cursorX, cursorY])

  return (
    <>
      {/* Futuristic cursor design */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 hardware-accelerated"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Main cursor element */}
        <motion.div
          className="relative"
          animate={{
            rotate: cursorVariant === "click" ? 45 : 0,
            scale: cursorVariant === "click" ? 0.8 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Diamond shape */}
          <motion.div
            className="absolute"
            style={{
              width: cursorVariant === "default" ? 20 : cursorVariant === "click" ? 15 : 30,
              height: cursorVariant === "default" ? 20 : cursorVariant === "click" ? 15 : 30,
              backgroundColor: "transparent",
              border: "2px solid rgba(16, 185, 129, 0.8)",
              transform: "rotate(45deg)",
              left: cursorVariant === "default" ? -10 : cursorVariant === "click" ? -7.5 : -15,
              top: cursorVariant === "default" ? -10 : cursorVariant === "click" ? -7.5 : -15,
              mixBlendMode: "difference",
            }}
            animate={{
              borderColor: ["rgba(16, 185, 129, 0.8)", "rgba(20, 184, 166, 0.8)", "rgba(16, 185, 129, 0.8)"],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />

          {/* Center dot */}
          <motion.div
            className="absolute rounded-full bg-emerald-400 mix-blend-difference"
            style={{
              width: 6,
              height: 6,
              left: -3,
              top: -3,
            }}
          />

          {/* Animated corner dots */}
          {(cursorVariant === "button" || cursorVariant === "link" || cursorVariant === "project") && (
            <>
              {[...Array(4)].map((_, i) => {
                const angle = (i * Math.PI) / 2
                const distance = 20
                return (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-emerald-400 mix-blend-difference"
                    style={{
                      width: 4,
                      height: 4,
                      left: Math.cos(angle) * distance - 2,
                      top: Math.sin(angle) * distance - 2,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: [0, Math.cos(angle) * 5, 0],
                      y: [0, Math.sin(angle) * 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: i * 0.2,
                    }}
                  />
                )
              })}
            </>
          )}
        </motion.div>

        {/* Outer ring that appears on hover */}
        {cursorVariant !== "default" && cursorVariant !== "click" && (
          <motion.div
            className="absolute rounded-full border-2 border-emerald-400/30 mix-blend-difference"
            style={{
              width: 60,
              height: 60,
              left: -30,
              top: -30,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>

      {/* Text cursor for special elements */}
      <AnimatePresence>
        {cursorText && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50 text-white font-medium text-sm bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 rounded-sm flex items-center justify-center whitespace-nowrap shadow-lg"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: mousePosition.x,
              y: mousePosition.y + 30,
            }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{
              type: "spring",
              mass: 0.2,
              damping: 20,
            }}
          >
            {cursorText}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click effect */}
      {cursorVariant === "click" && (
        <motion.div
          className="fixed pointer-events-none z-40 rounded-full border-2 border-emerald-400/30"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{ width: 80, height: 80, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      )}
    </>
  )
}
