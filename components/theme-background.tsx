"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function ThemeBackground() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="fixed inset-0 z-0 overflow-hidden transition-colors duration-300">
      {/* Base background color */}
      <div className="absolute inset-0 bg-white dark:bg-zinc-950 transition-colors duration-300" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-20 transition-opacity duration-300"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px), 
                           linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/30 to-transparent dark:from-emerald-900/10 dark:to-transparent opacity-50 transition-colors duration-300" />

      {/* Animated dots */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-emerald-500/20 dark:bg-emerald-400/20 transition-colors duration-300"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-radial-gradient-to-center from-transparent to-black/5 dark:to-black/20 transition-colors duration-300" />
    </div>
  )
}
