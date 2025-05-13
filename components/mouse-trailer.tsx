"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function MouseTrailer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [cursorText, setCursorText] = useState("")
  const [isHovering, setIsHovering] = useState(false)
  const isMobile = useMobile()

  // Use motion values for smoother animations
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  // Add springs for smoother following
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
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
    if (isMobile) return

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

    // Apply to all interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, [role='button'], .interactive-item, [data-cursor]",
    )

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [isHovering, cursorX, cursorY, isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-white"
          style={{
            width: cursorVariant === "default" ? 12 : 24,
            height: cursorVariant === "default" ? 12 : 24,
          }}
          animate={{
            scale: cursorVariant === "default" ? 1 : 1.2,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Text cursor for special elements */}
      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 text-white font-medium text-sm bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 px-3 py-1 rounded-full flex items-center justify-center whitespace-nowrap shadow-lg"
          style={{
            x: mousePosition.x,
            y: mousePosition.y + 30,
            translateX: "-50%",
            translateY: "0",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  )
}
