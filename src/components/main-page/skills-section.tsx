"use client"

import MagneticElement from "@/components/magnetic-element"
import { Card, CardContent } from "@/components/ui/card"
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
  Layers,
  Package,
  Server,
  Sparkles,
  Terminal,
  TestTube,
  Triangle,
  Wrench,
  Zap,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function SkillsSection() {
  const isMobile = useMobile()
  const { scrollY } = useScroll()

  // Mouse position for parallax effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // Scroll-based animations
  const sectionY = useTransform(scrollY, [0, 1500], [0, -100])
  const backgroundOpacity = useTransform(scrollY, [500, 1000], [0.1, 0.4])

  // Floating elements state
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
    // Generate floating elements
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 6 + Math.random() * 8,
      size: 1 + Math.random() * 2,
    }))
    setFloatingElements(elements)

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      const normalizedX = (clientX - centerX) / centerX
      const normalizedY = (clientY - centerY) / centerY

      mouseX.set(normalizedX * 12)
      mouseY.set(normalizedY * 12)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const frontendSkills = [
    { name: "React / Next.js", level: "Expert", years: "3+", icon: <Globe className="h-4 w-4" />, color: "emerald" },
    {
      name: "JavaScript / TypeScript",
      level: "Expert",
      years: "4+",
      icon: <Code className="h-4 w-4" />,
      color: "emerald",
    },
    { name: "HTML5 / CSS3", level: "Expert", years: "5+", icon: <Layers className="h-4 w-4" />, color: "emerald" },
    { name: "Tailwind CSS", level: "Advanced", years: "2+", icon: <Zap className="h-4 w-4" />, color: "teal" },
    { name: "Framer Motion", level: "Advanced", years: "2+", icon: <Sparkles className="h-4 w-4" />, color: "teal" },
  ]

  const backendSkills = [
    { name: "Node.js / Express", level: "Expert", years: "3+", icon: <Server className="h-4 w-4" />, color: "emerald" },
    {
      name: "MongoDB / PostgreSQL",
      level: "Advanced",
      years: "3+",
      icon: <Database className="h-4 w-4" />,
      color: "teal",
    },
    { name: "REST API / GraphQL", level: "Advanced", years: "2+", icon: <Globe className="h-4 w-4" />, color: "teal" },
    {
      name: "Firebase / Supabase",
      level: "Intermediate",
      years: "2+",
      icon: <Cpu className="h-4 w-4" />,
      color: "cyan",
    },
    { name: "AWS / Vercel", level: "Intermediate", years: "1+", icon: <Triangle className="h-4 w-4" />, color: "cyan" },
  ]

  const tools = [
    { name: "Git", icon: <Github className="h-8 w-8" />, color: "from-orange-400 to-red-500" },
    { name: "VS Code", icon: <Code className="h-8 w-8" />, color: "from-blue-400 to-cyan-500" },
    { name: "Figma", icon: <Figma className="h-8 w-8" />, color: "from-purple-400 to-pink-500" },
    { name: "Docker", icon: <Box className="h-8 w-8" />, color: "from-cyan-400 to-blue-500" },
    { name: "Jest", icon: <TestTube className="h-8 w-8" />, color: "from-green-400 to-emerald-500" },
    { name: "Webpack", icon: <Package className="h-8 w-8" />, color: "from-yellow-400 to-orange-500" },
    { name: "NPM", icon: <Package className="h-8 w-8" />, color: "from-red-400 to-rose-500" },
    { name: "Vercel", icon: <Triangle className="h-8 w-8" />, color: "from-zinc-400 to-zinc-600" },
    { name: "GitHub", icon: <Github className="h-8 w-8" />, color: "from-zinc-400 to-zinc-700" },
    { name: "Terminal", icon: <Terminal className="h-8 w-8" />, color: "from-emerald-400 to-teal-500" },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
          style={{ opacity: backgroundOpacity }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Animated mesh gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-25"
          style={{
            background: `radial-gradient(circle at ${40 + smoothMouseX.get()}% ${35 + smoothMouseY.get()}%, 
                            rgba(16, 185, 129, 0.2) 0%, 
                            rgba(20, 184, 166, 0.15) 25%, 
                            transparent 50%),
                        radial-gradient(circle at ${65 + smoothMouseX.get() * -1}% ${75 + smoothMouseY.get() * -1}%, 
                            rgba(6, 182, 212, 0.15) 0%, 
                            rgba(16, 185, 129, 0.1) 30%, 
                            transparent 60%),
                        radial-gradient(circle at ${25 + smoothMouseX.get() * 0.5}% ${60 + smoothMouseY.get() * 0.5}%, 
                            rgba(20, 184, 166, 0.1) 0%, 
                            rgba(6, 182, 212, 0.05) 25%, 
                            transparent 50%)`,
          }}
          animate={{
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Enhanced grid pattern */}
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `
                            linear-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
                        `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Circuit-like pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
                            radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
                        `,
            backgroundSize: "100px 100px",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      {!isMobile &&
        floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-emerald-400/30 to-teal-400/30"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size * 8}px`,
              height: `${element.size * 8}px`,
            }}
            animate={{
              y: [-25, 25, -25],
              x: [-15, 15, -15],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

      <motion.div className="container mx-auto relative z-10" style={{ y: sectionY }}>
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center mb-20"
        >
          <motion.div
            className="flex items-center space-x-4 mb-6"
            style={{
              x: !isMobile ? smoothMouseX.get() * -0.8 : 0,
              y: !isMobile ? smoothMouseY.get() * -0.8 : 0,
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Cpu className="h-10 w-10 text-emerald-400" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-center relative">
              <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400/20 via-teal-300/20 to-emerald-500/20 blur-sm scale-110">
                My Skills
              </span>
              <motion.span
                className="relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500"
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
                My Skills
              </motion.span>
            </h2>
          </motion.div>

          {/* Enhanced decorative line with particles */}
          <motion.div
            className="relative"
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="h-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 rounded-full relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 rounded-full"
                animate={{
                  x: ["-100%", "100%", "-100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </div>

            {/* Animated particles on line */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 w-1 h-1 bg-emerald-400 rounded-full transform -translate-y-1/2"
                style={{ left: `${i * 25 + 10}%` }}
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 1, 0.5],
                  y: [-2, 2, -2],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          <motion.p
            className="text-zinc-400 text-xl text-center max-w-3xl mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Mastering cutting-edge technologies to build exceptional digital experiences
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto">
          {/* Enhanced Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{
              x: !isMobile ? smoothMouseX.get() * -2 : 0,
              y: !isMobile ? smoothMouseY.get() * -2 : 0,
            }}
          >
            <motion.div className="relative mb-12" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              {/* Enhanced decorative line */}
              <motion.div
                className="absolute -left-6 top-0 h-full w-2 rounded-full overflow-hidden"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full bg-gradient-to-b from-emerald-400 via-teal-400 to-emerald-500">
                  <motion.div
                    className="w-full bg-gradient-to-b from-white/50 to-transparent rounded-full"
                    animate={{
                      height: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>

              <div className="flex items-center space-x-4 mb-8">
                <motion.div
                  className="relative p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 overflow-hidden"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.4)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(16, 185, 129, 0.3)",
                      "0 0 30px rgba(16, 185, 129, 0.5)",
                      "0 0 20px rgba(16, 185, 129, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <Code className="h-6 w-6 text-black relative z-10" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                    Frontend Development
                  </h3>
                  <p className="text-zinc-500 mt-1">User Interface & Experience</p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <motion.div
                    className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-4 group-hover:border-emerald-500/30 transition-all duration-300"
                    whileHover={{
                      boxShadow: "0 0 30px rgba(16, 185, 129, 0.1)",
                      backgroundColor: "rgba(16, 185, 129, 0.05)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className="text-emerald-400 group-hover:text-emerald-300 transition-colors"
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-semibold group-hover:text-emerald-400 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-zinc-500">{skill.years} experience</p>
                        </div>
                      </div>

                      <motion.div
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          skill.level === "Expert"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : skill.level === "Advanced"
                              ? "bg-teal-500/20 text-teal-400 border border-teal-500/30"
                              : "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.level}
                      </motion.div>
                    </div>

                    <div className="flex items-center space-x-1 mt-3">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <motion.div
                          key={dot}
                          className={`w-2 h-2 rounded-full ${
                            (skill.level === "Expert" && dot <= 5) ||
                            (skill.level === "Advanced" && dot <= 4) ||
                            (skill.level === "Intermediate" && dot <= 3)
                              ? "bg-emerald-400"
                              : "bg-zinc-700"
                          }`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + dot * 0.05 }}
                          viewport={{ once: true }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Backend Skills */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{
              x: !isMobile ? smoothMouseX.get() * 2 : 0,
              y: !isMobile ? smoothMouseY.get() * 2 : 0,
            }}
          >
            <motion.div className="relative mb-12" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              {/* Enhanced decorative line */}
              <motion.div
                className="absolute -left-6 top-0 h-full w-2 rounded-full overflow-hidden"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full bg-gradient-to-b from-teal-400 via-emerald-400 to-teal-500">
                  <motion.div
                    className="w-full bg-gradient-to-b from-white/50 to-transparent rounded-full"
                    animate={{
                      height: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </div>
              </motion.div>

              <div className="flex items-center space-x-4 mb-8">
                <motion.div
                  className="relative p-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 overflow-hidden"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 20px 40px -10px rgba(20, 184, 166, 0.4)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(20, 184, 166, 0.3)",
                      "0 0 30px rgba(20, 184, 166, 0.5)",
                      "0 0 20px rgba(20, 184, 166, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                  }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 1,
                    }}
                  />
                  <Server className="h-6 w-6 text-black relative z-10" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">
                    Backend Development
                  </h3>
                  <p className="text-zinc-500 mt-1">Server & Database Logic</p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ x: -10, scale: 1.02 }}
                >
                  <motion.div
                    className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-4 group-hover:border-teal-500/30 transition-all duration-300"
                    whileHover={{
                      boxShadow: "0 0 30px rgba(20, 184, 166, 0.1)",
                      backgroundColor: "rgba(20, 184, 166, 0.05)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className="text-teal-400 group-hover:text-teal-300 transition-colors"
                          whileHover={{ rotate: -360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-semibold group-hover:text-teal-400 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-zinc-500">{skill.years} experience</p>
                        </div>
                      </div>

                      <motion.div
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          skill.level === "Expert"
                            ? "bg-teal-500/20 text-teal-400 border border-teal-500/30"
                            : skill.level === "Advanced"
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                              : "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.level}
                      </motion.div>
                    </div>

                    <div className="flex items-center space-x-1 mt-3">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <motion.div
                          key={dot}
                          className={`w-2 h-2 rounded-full ${
                            (skill.level === "Expert" && dot <= 5) ||
                            (skill.level === "Advanced" && dot <= 4) ||
                            (skill.level === "Intermediate" && dot <= 3)
                              ? "bg-teal-400"
                              : "bg-zinc-700"
                          }`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + dot * 0.05 + 0.5 }}
                          viewport={{ once: true }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Tools & Technologies Section */}
        <motion.div
          className="mt-24 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="relative mb-16 text-center"
            style={{
              x: !isMobile ? smoothMouseX.get() * -1 : 0,
              y: !isMobile ? smoothMouseY.get() * -1 : 0,
            }}
          >
            <motion.div
              className="flex justify-center items-center space-x-4 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative p-4 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 20px 40px -10px rgba(147, 51, 234, 0.4)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                    "0 0 30px rgba(147, 51, 234, 0.5)",
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                  ],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <Wrench className="h-7 w-7 text-white relative z-10" />
              </motion.div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                  Tools & Technologies
                </h3>
                <p className="text-zinc-500 mt-2 text-lg">Development Arsenal & Workflow</p>
              </div>
            </motion.div>

            {/* Enhanced decorative elements */}
            <motion.div
              className="flex justify-center"
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-full relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/80 to-white/50"
                  animate={{
                    x: ["-100%", "100%", "-100%"],
                    scaleX: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {tools.map((tool, index) => (
              <MagneticElement key={tool.name} strength={60}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -15,
                    rotateY: 10,
                    scale: 1.08,
                  }}
                  className="group relative"
                  data-cursor="button"
                  data-cursor-text={tool.name}
                >
                  <Card className="bg-zinc-800/40 border-zinc-700/50 hover:border-transparent transition-all duration-500 backdrop-blur-sm overflow-hidden relative">
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />

                    {/* Glowing border effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      animate={{
                        boxShadow: [
                          `0 0 0 0 ${tool.color.includes("emerald") ? "rgba(16, 185, 129, 0)" : "rgba(59, 130, 246, 0)"}`,
                          `0 0 20px 2px ${tool.color.includes("emerald") ? "rgba(16, 185, 129, 0.3)" : "rgba(59, 130, 246, 0.3)"}`,
                          `0 0 0 0 ${tool.color.includes("emerald") ? "rgba(16, 185, 129, 0)" : "rgba(59, 130, 246, 0)"}`,
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.3,
                      }}
                    />

                    <CardContent className="p-8 text-center relative z-10">
                      {/* Enhanced icon with orbital elements */}
                      <motion.div
                        className="flex justify-center mb-6 relative"
                        whileHover={{
                          rotate: [0, 5, -5, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <div
                          className={`text-zinc-300 group-hover:bg-gradient-to-r group-hover:${tool.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 relative`}
                        >
                          {/* Pulsing background */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${tool.color} rounded-full opacity-0 group-hover:opacity-20 blur-lg`}
                            animate={{
                              scale: [0.8, 1.2, 0.8],
                              opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: index * 0.2,
                            }}
                          />

                          {/* Orbiting particles */}
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100"
                              style={{
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                              }}
                              animate={{
                                x: [
                                  0,
                                  25 * Math.cos((i * 2 * Math.PI) / 3),
                                  25 * Math.cos((i * 2 * Math.PI) / 3 + Math.PI),
                                  0,
                                ],
                                y: [
                                  0,
                                  25 * Math.sin((i * 2 * Math.PI) / 3),
                                  25 * Math.sin((i * 2 * Math.PI) / 3 + Math.PI),
                                  0,
                                ],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.3,
                              }}
                            />
                          ))}

                          <span className="relative z-10">{tool.icon}</span>
                        </div>
                      </motion.div>

                      <motion.h4
                        className="font-semibold text-zinc-300 group-hover:text-white transition-colors duration-300 text-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tool.name}
                      </motion.h4>

                      {/* Floating decorative dots */}
                      <motion.div
                        className="absolute top-3 right-3 w-2 h-2 bg-emerald-400/40 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.2,
                        }}
                      />

                      <motion.div
                        className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-teal-400/40 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.3 + 1,
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </MagneticElement>
            ))}
          </div>
        </motion.div>

        {/* Additional decorative elements */}
        {!isMobile && (
          <>
            {/* Large floating orbs */}
            <motion.div
              className="absolute top-32 right-16 w-40 h-40 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-2xl"
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                x: smoothMouseX.get() * 4,
                y: smoothMouseY.get() * 4,
              }}
            />

            <motion.div
              className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-2xl"
              animate={{
                y: [0, 25, 0],
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 3,
              }}
              style={{
                x: smoothMouseX.get() * -3,
                y: smoothMouseY.get() * -3,
              }}
            />

            {/* Geometric shapes */}
            <motion.div
              className="absolute top-1/4 left-8 w-6 h-6 border-2 border-emerald-400/20 rotate-45"
              animate={{
                rotate: [45, 405, 45],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute bottom-1/4 right-12 w-8 h-8 border-2 border-teal-400/20 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.6, 0.2],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Tech orbit rings */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-96 h-96 border border-emerald-400/10 rounded-full -translate-x-1/2 -translate-y-1/2"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 40,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-emerald-400/40 rounded-full"
                  style={{
                    top: `${50 + 45 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    left: `${50 + 45 * Math.sin((i * Math.PI * 2) / 6)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  )
}

