"use client"

import { motion } from "framer-motion"
import {
  Code,
  Container,
  Database,
  FileCode,
  GitBranch,
  Globe,
  Layers,
  Palette,
  Server,
  Wrench
} from "lucide-react"
import { useEffect, useState } from "react"

export default function SkillsSectionV4() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Map skills to icons
  const skillIcons: Record<string, React.ReactNode> = {
    "React": <Layers className="w-5 h-5" />,
    "Next.js": <Globe className="w-5 h-5" />,
    "TypeScript": <FileCode className="w-5 h-5" />,
    "Tailwind CSS": <Palette className="w-5 h-5" />,
    "Node.js": <Server className="w-5 h-5" />,
    "Express": <Code className="w-5 h-5" />,
    "PostgreSQL": <Database className="w-5 h-5" />,
    "MongoDB": <Database className="w-5 h-5" />,
    "Git": <GitBranch className="w-5 h-5" />,
    "Docker": <Container className="w-5 h-5" />,
  }

  const skillsData = {
    all: [
      { name: "React", level: 95, category: "frontend", color: "from-emerald-500 to-teal-500" },
      { name: "Next.js", level: 92, category: "frontend", color: "from-emerald-500 to-teal-500" },
      { name: "TypeScript", level: 90, category: "frontend", color: "from-emerald-500 to-teal-500" },
      { name: "Tailwind CSS", level: 94, category: "frontend", color: "from-emerald-500 to-teal-500" },
      { name: "Node.js", level: 88, category: "backend", color: "from-emerald-500 to-teal-500" },
      { name: "Express", level: 87, category: "backend", color: "from-emerald-500 to-teal-500" },
      { name: "PostgreSQL", level: 85, category: "database", color: "from-emerald-500 to-teal-500" },
      { name: "MongoDB", level: 86, category: "database", color: "from-emerald-500 to-teal-500" },
      { name: "Git", level: 93, category: "tools", color: "from-emerald-500 to-teal-500" },
      { name: "Docker", level: 82, category: "tools", color: "from-emerald-500 to-teal-500" }
    ],
    frontend: [
      { name: "React", level: 95, category: "frontend", color: "from-emerald-500 to-teal-500" },
      { name: "Next.js", level: 92, category: "frontend", color: "from-emerald-500 to-teal-500" },
      { name: "TypeScript", level: 90, category: "frontend", color: "from-emerald-500 to-teal-500" },
      { name: "Tailwind CSS", level: 94, category: "frontend", color: "from-emerald-500 to-teal-500" },
    ],
    backend: [
      { name: "Node.js", level: 88, category: "backend", color: "from-emerald-500 to-teal-500" },
      { name: "Express", level: 87, category: "backend", color: "from-emerald-500 to-teal-500" },
    ],
    database: [
      { name: "PostgreSQL", level: 85, category: "database", color: "from-emerald-500 to-teal-500" },
      { name: "MongoDB", level: 86, category: "database", color: "from-emerald-500 to-teal-500" },
    ],
    tools: [
      { name: "Git", level: 93, category: "tools", color: "from-emerald-500 to-teal-500" },
      { name: "Docker", level: 82, category: "tools", color: "from-emerald-500 to-teal-500" },
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
    <section id="skills" className="min-h-screen relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Technical <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/30 shadow-lg shadow-emerald-500/10"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-200 border border-zinc-700/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid - Enhanced Design */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          layout
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              layout
            >
              <div className="h-full p-5 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-900/20 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/30 transition-all duration-500 flex flex-col items-center text-center group-hover:shadow-xl group-hover:shadow-emerald-500/10">
                {/* Icon container with glow effect */}
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300 relative`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
                  <div className="relative text-white">
                    {skillIcons[skill.name] || <Wrench className="w-5 h-5" />}
                  </div>
                </div>
                
                {/* Skill name */}
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Category badge */}
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {skill.category}
                  </span>
                </div>
                
                {/* Experience indicator */}
                <div className="mt-3 flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        i < Math.floor(skill.level / 20) 
                          ? "bg-emerald-500" 
                          : "bg-zinc-700"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}