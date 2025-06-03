"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionHeaderProps {
  title: string
  highlight?: string
  description?: string
  icon?: ReactNode
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  title,
  highlight,
  description,
  icon,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className="text-3xl font-bold inline-flex items-center">
        {icon && <span className="bg-emerald-500/20 text-emerald-400 p-2 rounded-md mr-3">{icon}</span>}
        {title}{" "}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mx-2">
            {highlight}
          </span>
        )}
      </h2>
      {description && <p className="text-zinc-400 mt-4 max-w-3xl">{description}</p>}
      <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mt-4 rounded-full"></div>
    </motion.div>
  )
}
