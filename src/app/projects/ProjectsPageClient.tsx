"use client"

import Breadcrumb from "@/components/breadcrumb"
import MagneticElement from "@/components/magnetic-element"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects-data"
import { motion } from "framer-motion"
import { ArrowUpRight, Code, Globe, Palette, Smartphone } from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"

export default function ProjectsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  // Get all unique categories with icons
  const categories = useMemo(() => {
    const categoryMap: Record<string, { icon: React.ReactNode; color: string }> = {
      "Web App": { icon: <Globe className="h-4 w-4" />, color: "text-emerald-400" },
      "Mobile App": { icon: <Smartphone className="h-4 w-4" />, color: "text-teal-400" },
      "Website": { icon: <Palette className="h-4 w-4" />, color: "text-cyan-400" },
      "API": { icon: <Code className="h-4 w-4" />, color: "text-emerald-300" },
    }
    
    const uniqueCategories = Array.from(new Set(projects.map((project) => project.category)))
    return [
      { name: "All", icon: null, color: "" },
      ...uniqueCategories.map(category => ({
        name: category,
        ...categoryMap[category] || { icon: <Code className="h-4 w-4" />, color: "text-zinc-400" }
      }))
    ]
  }, [])

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (!selectedCategory || selectedCategory === "All") {
      return projects
    }
    return projects.filter((project) => project.category === selectedCategory)
  }, [selectedCategory])

  // Get featured projects
  const featuredProjects = useMemo(() => {
    return projects.filter(project => project.featured)
  }, [])

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techs = projects.flatMap((project) => project.technologies)
    return Array.from(new Set(techs)).slice(0, 15)
  }, [])

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb />
      
      {/* Hero Section - Enhanced Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"></div>
        
        {/* Enhanced mesh gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            background: `radial-gradient(circle at 30% 30%, 
                rgba(16, 185, 129, 0.2) 0%, 
                rgba(20, 184, 166, 0.15) 25%, 
                transparent 50%),
            radial-gradient(circle at 70% 70%, 
                rgba(6, 182, 212, 0.15) 0%, 
                rgba(16, 185, 129, 0.1) 30%, 
                transparent 60%)`,
          }}
        />
        
        {/* Enhanced grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        
        {/* Floating orbs for enhanced visual effect */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/40 rounded-full"
            style={{
              top: `${10 + i * 15}%`,
              left: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          />
        ))}
        
        {/* Decorative rings */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-emerald-500/10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full border border-teal-500/10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Enhanced badge with animation */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/30 rounded-full px-4 py-1.5 backdrop-blur-sm">
                  <motion.span
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400"
                  >
                    Creative Portfolio
                  </motion.span>
                </Badge>
              </motion.div>
              
              {/* Enhanced heading with multiple animations */}
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="block">Creative</span>
                <span className="block relative">
                  <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400/30 via-teal-300/30 to-emerald-500/30 blur-sm">
                    Development
                  </span>
                  <motion.span
                    className="relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    Development
                  </motion.span>
                </span>
                <span className="block">Showcase</span>
              </motion.h1>
              
              {/* Enhanced description with better typography */}
              <motion.p 
                className="text-xl text-zinc-300 max-w-lg leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                A curated collection of innovative projects that blend <span className="text-emerald-400 font-medium">design excellence</span> with <span className="text-teal-400 font-medium">technical precision</span> to create meaningful digital experiences.
              </motion.p>
              
              {/* Enhanced buttons with better spacing and animations */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <MagneticElement strength={60}>
                  <Link href="/#contact">
                    <Button
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/25 px-8 py-6 text-lg rounded-full transition-all duration-300 w-full"
                      data-cursor="button"
                    >
                      Start a Project
                      <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </MagneticElement>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Cloud */}
      <section className="relative py-24 bg-gradient-to-b from-zinc-900/20 to-zinc-900">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Technology Stack
            </motion.h2>
            <motion.p
              className="text-zinc-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Tools and technologies I leverage to build modern
              digital experiences
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {allTechnologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Badge
                  className="bg-zinc-800/50 hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-teal-500/20 text-zinc-300 py-3 px-5 text-base border border-zinc-700 hover:border-emerald-500/30 transition-all"
                  data-cursor="button"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Consistent styling */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"></div>

        {/* Mesh gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            background: `radial-gradient(circle at 50% 50%, 
                rgba(16, 185, 129, 0.15) 0%, 
                rgba(20, 184, 166, 0.1) 25%, 
                transparent 50%),
            radial-gradient(circle at 30% 70%, 
                rgba(6, 182, 212, 0.1) 0%, 
                rgba(16, 185, 129, 0.05) 30%, 
                transparent 60%)`,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-12 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to bring your{" "}
                    <span className="text-emerald-400">
                      vision
                    </span>{" "}
                    to life?
                  </h2>
                  <p className="text-zinc-400 mb-8">
                    Let's collaborate to create something
                    extraordinary that pushes boundaries and
                    delivers exceptional results.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticElement strength={60}>
                    <Link href="/#contact">
                      <Button
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/25 px-8 py-6 text-lg rounded-full transition-all duration-300 w-full"
                        data-cursor="button"
                      >
                        Start a Project
                        <ArrowUpRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </MagneticElement>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
