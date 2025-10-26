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
      { name: "React", level: 95, category: "frontend", color: "from-blue-500 to-cyan-500" },
      { name: "Next.js", level: 92, category: "frontend", color: "from-slate-400 to-slate-600" },
      { name: "TypeScript", level: 90, category: "frontend", color: "from-blue-600 to-blue-400" },
      { name: "Tailwind CSS", level: 94, category: "frontend", color: "from-cyan-400 to-blue-500" },
      { name: "Node.js", level: 88, category: "backend", color: "from-green-600 to-emerald-500" },
      { name: "Express", level: 87, category: "backend", color: "from-yellow-600 to-yellow-400" },
      { name: "PostgreSQL", level: 85, category: "database", color: "from-blue-700 to-blue-500" },
      { name: "MongoDB", level: 86, category: "database", color: "from-green-600 to-green-400" },
      { name: "Git", level: 93, category: "tools", color: "from-orange-600 to-red-500" },
      { name: "Docker", level: 82, category: "tools", color: "from-blue-500 to-cyan-400" }
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
            Technical <span className="text-emerald-400">Skills</span>
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
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid - Simple and Clean */}
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
              <div className="h-full p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 flex flex-col items-center text-center">
                {/* Icon container */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} mb-3`}>
                  <div className="text-white">
                    {skillIcons[skill.name] || <Wrench className="w-5 h-5" />}
                  </div>
                </div>
                
                {/* Skill name */}
                <h3 className="text-sm font-semibold text-white mb-1">
                  {skill.name}
                </h3>

                {/* Category */}
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider">
                  {skill.category}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}