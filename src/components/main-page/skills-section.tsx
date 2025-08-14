"use client"

import type React from "react"

import MagneticElement from "@/components/magnetic-element"
import { useMobile } from "@/hooks/use-mobile"
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion"
import {
    Box,
    Code,
    Cpu,
    Database,
    Figma,
    Github,
    Globe,
    Package,
    Server,
    Sparkles,
    TestTube,
    Triangle,
    Wrench,
    Zap,
} from "lucide-react"
import { useState } from "react"
import SectionHeader from "../section-header"

export default function SkillsSection() {
  const isMobile = useMobile()
  const { scrollY } = useScroll()
  const [activeCategory, setActiveCategory] = useState("all")

  // Mouse position for parallax effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // Scroll-based animations
  const sectionY = useTransform(scrollY, [0, 1500], [0, -50])

  const skills = [
    // Frontend Skills
    {
      name: "React",
      icon: <Globe className="h-5 w-5" />,
      category: "frontend",
      color: "emerald",
      description: "Building dynamic user interfaces",
      experience: "2+ years",
      projects: "18+",
    },
    {
      name: "Next.js",
      icon: <Triangle className="h-5 w-5" />,
      category: "frontend",
      color: "teal",
      description: "Full-stack React framework",
      experience: "2+ years",
      projects: "12+",
    },
    {
      name: "TypeScript",
      icon: <Code className="h-5 w-5" />,
      category: "frontend",
      color: "emerald",
      description: "Type-safe development",
      experience: "2+ years",
      projects: "15+",
    },
    {
      name: "Tailwind CSS",
      icon: <Zap className="h-5 w-5" />,
      category: "frontend",
      color: "cyan",
      description: "Utility-first CSS framework",
      experience: "2+ years",
      projects: "20+",
    },
    {
      name: "Framer Motion",
      icon: <Sparkles className="h-5 w-5" />,
      category: "frontend",
      color: "teal",
      description: "Animation and interaction library",
      experience: "1+ years",
      projects: "8+",
    },

    // Backend Skills
    {
      name: "Node.js",
      icon: <Server className="h-5 w-5" />,
      category: "backend",
      color: "teal",
      description: "Server-side JavaScript runtime",
      experience: "2+ years",
      projects: "14+",
    },
    {
      name: "MongoDB",
      icon: <Database className="h-5 w-5" />,
      category: "backend",
      color: "emerald",
      description: "NoSQL document database",
      experience: "2+ years",
      projects: "10+",
    },
    {
      name: "PostgreSQL",
      icon: <Database className="h-5 w-5" />,
      category: "backend",
      color: "cyan",
      description: "Advanced relational database",
      experience: "1+ years",
      projects: "6+",
    },
    {
      name: "GraphQL",
      icon: <Globe className="h-5 w-5" />,
      category: "backend",
      color: "teal",
      description: "Query language for APIs",
      experience: "1+ years",
      projects: "5+",
    },
    {
      name: "AWS",
      icon: <Triangle className="h-5 w-5" />,
      category: "backend",
      color: "emerald",
      description: "Cloud computing services",
      experience: "1+ years",
      projects: "4+",
    },

    // Tools
    {
      name: "Git",
      icon: <Github className="h-5 w-5" />,
      category: "tools",
      color: "emerald",
      description: "Version control system",
      experience: "3+ years",
      projects: "25+",
    },
    {
      name: "Docker",
      icon: <Box className="h-5 w-5" />,
      category: "tools",
      color: "cyan",
      description: "Application containerization",
      experience: "1+ years",
      projects: "7+",
    },
    {
      name: "Figma",
      icon: <Figma className="h-5 w-5" />,
      category: "tools",
      color: "teal",
      description: "UI/UX design platform",
      experience: "2+ years",
      projects: "15+",
    },
    {
      name: "Jest",
      icon: <TestTube className="h-5 w-5" />,
      category: "tools",
      color: "emerald",
      description: "JavaScript testing framework",
      experience: "1+ years",
      projects: "8+",
    },
    {
      name: "Webpack",
      icon: <Package className="h-5 w-5" />,
      category: "tools",
      color: "cyan",
      description: "Module bundling tool",
      experience: "2+ years",
      projects: "12+",
    },
  ]

  const categories = [
    { key: "all", label: "All Skills", icon: <Cpu className="h-4 w-4" /> },
    { key: "frontend", label: "Frontend", icon: <Code className="h-4 w-4" /> },
    { key: "backend", label: "Backend", icon: <Server className="h-4 w-4" /> },
    { key: "tools", label: "Tools", icon: <Wrench className="h-4 w-4" /> },
  ]

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      mouseX.set(x * 20)
      mouseY.set(y * 20)
    }
  }

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + smoothMouseX.get()}% ${50 + smoothMouseY.get()}%, 
                            rgba(16, 185, 129, 0.15) 0%, 
                            rgba(20, 184, 166, 0.1) 25%, 
                            transparent 50%),
                        radial-gradient(circle at ${30 + smoothMouseX.get() * -1}% ${70 + smoothMouseY.get() * -1}%, 
                            rgba(6, 182, 212, 0.1) 0%, 
                            rgba(16, 185, 129, 0.05) 30%, 
                            transparent 60%)`,
          }}
        />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Particles */}
      {!isMobile &&
        Array.from({ length: 15 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 6 + Math.random() * 4,
          size: 0.5 + Math.random() * 1.5,
        })).map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * 3}px`,
              height: `${particle.size * 3}px`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-8, 8, -8],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

      <motion.div className="container mx-auto relative z-10" style={{ y: sectionY }}>
        <SectionHeader
          title="Technical"
          highlight="Skills"
          icon={<Cpu className="h-8 w-8 text-emerald-400" />}
          description="A showcase of my development expertise and technical proficiency"
        />

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-2 gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.key
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-black shadow-lg"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                <span className="text-sm">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <MagneticElement key={`${skill.name}-${activeCategory}`} strength={25}>
                <motion.div
                  className={`bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 rounded-2xl overflow-hidden group hover:border-${skill.color}-500/50 transition-all duration-500 relative`}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  layout
                >
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br from-${skill.color}-500/10 via-transparent to-${skill.color === "emerald" ? "teal" : skill.color === "teal" ? "emerald" : "cyan"}-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />

                  {/* Floating Particles on Hover */}
                  {!isMobile && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {Array.from({ length: 4 }, (_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1.5 h-1.5 bg-${skill.color}-400 rounded-full`}
                          style={{
                            left: `${20 + i * 20}%`,
                            top: `${30 + i * 15}%`,
                          }}
                          animate={{
                            y: [-10, 10, -10],
                            x: [-5, 5, -5],
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  )}

                  <div className="p-6 text-center relative z-10">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r from-${skill.color}-500 to-${skill.color === "emerald" ? "teal" : skill.color === "teal" ? "emerald" : "cyan"}-500 text-black`}
                      >
                        {skill.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>

                    {/* Experience and Projects Info */}
                    <div className="flex justify-center space-x-4 mb-3">
                      <span className="text-xs text-zinc-400">
                        Experience <span className="text-emerald-400 font-medium">{skill.experience}</span>
                      </span>
                      <span className="text-xs text-zinc-400">
                        Projects <span className="text-teal-400 font-medium">{skill.projects}</span>
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-500 text-xs leading-relaxed">{skill.description}</p>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-${skill.color}-400/10 to-${skill.color === "emerald" ? "teal" : skill.color === "teal" ? "emerald" : "cyan"}-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </MagneticElement>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
