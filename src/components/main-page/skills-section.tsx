"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function SkillsSectionV4() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillsData = {
    all: [
      { name: "React", level: 95, category: "frontend", color: "from-blue-500 to-cyan-500" },
      { name: "Next.js", level: 92, category: "frontend", color: "from-slate-400 to-slate-600" },
      { name: "TypeScript", level: 90, category: "frontend", color: "from-blue-600 to-blue-400" },
      { name: "Tailwind CSS", level: 94, category: "frontend", color: "from-cyan-400 to-blue-500" },
      { name: "Node.js", level: 88, category: "backend", color: "from-green-600 to-emerald-500" },
      { name: "Express", level: 87, category: "backend", color: "from-yellow-600 to-yellow-400" },
      { name: "PostgreSQL", level: 85, category: "database", color: "from-blue-700 to-blue-500" },
      { name: "MongoDB", level: 86, category: "database", color: "from-green-600 to-green-400" },
      { name: "Git", level: 93, category: "tools", color: "from-orange-600 to-red-500" },
      { name: "Docker", level: 82, category: "tools", color: "from-blue-500 to-cyan-400" },
      { name: "AWS", level: 80, category: "tools", color: "from-orange-500 to-yellow-500" },
      { name: "GraphQL", level: 84, category: "backend", color: "from-pink-500 to-rose-500" },
    ],
    frontend: [
      { name: "React", level: 95, category: "frontend", color: "from-blue-500 to-cyan-500" },
      { name: "Next.js", level: 92, category: "frontend", color: "from-slate-400 to-slate-600" },
      { name: "TypeScript", level: 90, category: "frontend", color: "from-blue-600 to-blue-400" },
      { name: "Tailwind CSS", level: 94, category: "frontend", color: "from-cyan-400 to-blue-500" },
    ],
    backend: [
      { name: "Node.js", level: 88, category: "backend", color: "from-green-600 to-emerald-500" },
      { name: "Express", level: 87, category: "backend", color: "from-yellow-600 to-yellow-400" },
      { name: "GraphQL", level: 84, category: "backend", color: "from-pink-500 to-rose-500" },
    ],
    database: [
      { name: "PostgreSQL", level: 85, category: "database", color: "from-blue-700 to-blue-500" },
      { name: "MongoDB", level: 86, category: "database", color: "from-green-600 to-green-400" },
    ],
    tools: [
      { name: "Git", level: 93, category: "tools", color: "from-orange-600 to-red-500" },
      { name: "Docker", level: 82, category: "tools", color: "from-blue-500 to-cyan-400" },
      { name: "AWS", level: 80, category: "tools", color: "from-orange-500 to-yellow-500" },
    ],
  }

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Tools" },
  ]

  const skills = skillsData[selectedCategory as keyof typeof skillsData]

  if (!mounted) return null

  return (
    <section id="skills" className="min-h-screen relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
        <div
          className="absolute inset-0 opacity-5 sm:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px sm:30px sm:30px md:40px md:40px lg:50px lg:50px",
          }}
        />
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for building scalable applications
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50"
                  : "bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 border border-zinc-700/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6" layout>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              layout
            >
              <div className="relative h-full p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-900/20 backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:brightness-125 group-hover:shadow-2xl group-hover:shadow-emerald-500/20">
                {/* Top-left corner accent */}
                <motion.div
                  className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-500/60 rounded-tl-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    duration: 0.5,
                  }}
                />

                {/* Bottom-right corner accent */}
                <motion.div
                  className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-teal-500/60 rounded-br-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 0.5,
                  }}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                />

                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                  }}
                />

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                  <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-zinc-200 group-hover:from-emerald-100 group-hover:to-cyan-100 bg-clip-text text-transparent transition-all duration-300">
                    {skill.name}
                  </h3>

                  <motion.div
                    className={`mt-3 inline-block px-2 sm:px-3 py-1 bg-gradient-to-r ${skill.color}/10 text-xs sm:text-sm rounded-full border border-${skill.color}/20 border-opacity-30 group-hover:border-opacity-60 transition-all duration-300`}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <span className={`bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-semibold`}>
                      {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
