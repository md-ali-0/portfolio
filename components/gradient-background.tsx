"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Create gradient blobs
    const blobs = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 300 + 100,
      xSpeed: (Math.random() - 0.5) * 0.7,
      ySpeed: (Math.random() - 0.5) * 0.7,
      hue: Math.random() * 60 + 140, // Green to teal hues (140-200)
    }))

    // Animation function
    const animate = () => {
      // Clear canvas with a dark background
      ctx.fillStyle = "rgba(9, 9, 11, 0.2)" // Zinc-950 with opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw each blob
      blobs.forEach((blob) => {
        // Move blob
        blob.x += blob.xSpeed
        blob.y += blob.ySpeed

        // Bounce off edges
        if (blob.x < -blob.radius || blob.x > canvas.width + blob.radius) {
          blob.xSpeed *= -1
        }
        if (blob.y < -blob.radius || blob.y > canvas.height + blob.radius) {
          blob.ySpeed *= -1
        }

        // Create gradient
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius)

        gradient.addColorStop(0, `hsla(${blob.hue}, 84%, 39%, 0.3)`) // Emerald-like color
        gradient.addColorStop(1, "rgba(16, 185, 129, 0)") // Transparent

        // Draw blob
        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Additional decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_70%)]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Moving light dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-emerald-400/30"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
            }}
            transition={{
              duration: 20 + Math.random() * 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}
