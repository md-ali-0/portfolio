"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"
import { useEffect, useState } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [floatingElements, setFloatingElements] = useState<
    Array<{
      id: number
      x: number
      y: number
      delay: number
      duration: number
      size: number
    }>
  >([])

  useEffect(() => {
    console.error(error)

    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 4,
      size: 0.5 + Math.random() * 1,
    }))
    setFloatingElements(elements)
  }, [error])

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-15"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.08) 0%, transparent 60%)",
              "radial-gradient(circle at 60% 30%, rgba(239, 68, 68, 0.12) 0%, transparent 50%), radial-gradient(circle at 40% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 60%)",
              "radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.08) 0%, transparent 60%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-r from-red-400/20 to-emerald-400/20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size * 10}px`,
            height: `${element.size * 10}px`,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="text-center max-w-md mx-auto relative z-10">
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.h1
            className="text-8xl md:text-9xl font-bold relative"
            animate={{
              textShadow: [
                "0 0 20px rgba(239, 68, 68, 0.5)",
                "0 0 40px rgba(239, 68, 68, 0.8)",
                "0 0 20px rgba(239, 68, 68, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-red-400/20 via-emerald-300/20 to-red-500/20 blur-sm scale-110">
              500
            </span>
            <motion.span
              className="relative bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-emerald-300 to-red-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              500
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          className="flex items-center justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AlertTriangle className="h-6 w-6 text-red-400 mr-2" />
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Something went wrong!
          </h2>
        </motion.div>

        <motion.p
          className="text-zinc-400 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          An unexpected error occurred. Please try again or contact support if the problem persists.
        </motion.p>

        <motion.div
          className="relative z-10 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={reset}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 px-6 py-3 rounded-lg font-medium relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative flex items-center">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/")}
                className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 backdrop-blur-sm px-6 py-3 rounded-lg font-medium"
              >
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
