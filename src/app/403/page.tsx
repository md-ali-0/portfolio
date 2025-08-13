"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Home, Mail, Shield } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Forbidden() {
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
    const elements = Array.from({ length: 7 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2.5,
      duration: 7 + Math.random() * 5,
      size: 0.5 + Math.random() * 1,
    }))
    setFloatingElements(elements)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-15"
          animate={{
            background: [
              "radial-gradient(circle at 25% 35%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 65%, rgba(16, 185, 129, 0.08) 0%, transparent 60%)",
              "radial-gradient(circle at 65% 25%, rgba(245, 158, 11, 0.12) 0%, transparent 50%), radial-gradient(circle at 35% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 60%)",
              "radial-gradient(circle at 25% 35%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 65%, rgba(16, 185, 129, 0.08) 0%, transparent 60%)",
            ],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-r from-amber-400/20 to-emerald-400/20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size * 9}px`,
            height: `${element.size * 9}px`,
          }}
          animate={{
            y: [-18, 18, -18],
            x: [-12, 12, -12],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
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
                "0 0 20px rgba(245, 158, 11, 0.5)",
                "0 0 40px rgba(245, 158, 11, 0.8)",
                "0 0 20px rgba(245, 158, 11, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-amber-400/20 via-emerald-300/20 to-amber-500/20 blur-sm scale-110">
              403
            </span>
            <motion.span
              className="relative bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-emerald-300 to-amber-500"
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
              403
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          className="flex items-center justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Shield className="h-6 w-6 text-amber-400 mr-2" />
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Access Forbidden
          </h2>
        </motion.div>

        <motion.p
          className="text-zinc-400 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          You don't have permission to access this resource. Please contact an administrator if you believe this is an
          error.
        </motion.p>

        <motion.div
          className="relative z-10 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 px-6 py-3 rounded-lg font-medium relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative flex items-center">
                    <Home className="mr-2 h-4 w-4" />
                    Return Home
                  </span>
                </Button>
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 backdrop-blur-sm px-6 py-3 rounded-lg font-medium bg-transparent"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
