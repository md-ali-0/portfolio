"use client"

import { motion } from "framer-motion"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  text?: string
  fullScreen?: boolean
}

export default function LoadingSpinner({ size = "md", text = "Loading...", fullScreen = false }: LoadingSpinnerProps) {
  const sizeMap = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  const spinner = (
    <div className={`relative ${fullScreen ? "flex flex-col items-center justify-center" : ""}`}>
      <motion.div
        className={`${sizeMap[size]} rounded-full border-4 border-emerald-400/30 border-t-emerald-400`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      {text && <div className="mt-4 text-emerald-400 font-medium text-center">{text}</div>}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-50 flex items-center justify-center">
        {spinner}
      </div>
    )
  }

  return spinner
}
