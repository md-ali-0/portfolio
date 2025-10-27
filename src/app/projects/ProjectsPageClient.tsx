"use client"

import MagneticElement from "@/components/magnetic-element"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects-data"
import { motion } from "framer-motion"
import { ArrowUpRight, Calendar, Code, Globe, Palette, Smartphone, Zap } from "lucide-react"
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
      {/* Hero Section - Enhanced Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
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
                <MagneticElement strength={50}>
                  <Button 
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 px-8 py-4 rounded-full text-lg transition-all hover:shadow-emerald-500/40"
                    data-cursor="button"
                  >
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      View Projects
                    </motion.span>
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </MagneticElement>
                
                <MagneticElement strength={50}>
                  <Link href="/#contact">
                    <Button 
                      variant="outline"
                      className="border-2 border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg transition-all hover:border-emerald-400 hover:shadow-emerald-500/20"
                      data-cursor="button"
                    >
                      Get in Touch
                    </Button>
                  </Link>
                </MagneticElement>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Enhanced floating project cards with better animations */}
              <div className="relative h-96 md:h-[500px]">
                {featuredProjects.slice(0, 3).map((project, index) => (
                  <motion.div
                    key={project.slug}
                    className="absolute w-64 md:w-80 bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-2xl"
                    style={{
                      top: `${index * 30}%`,
                      left: `${index % 2 === 0 ? 10 : 50}%`,
                      zIndex: 10 - index,
                    }}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    whileHover={{ 
                      y: -15, 
                      rotate: index % 2 === 0 ? -3 : 3,
                      scale: 1.03,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Decorative corner elements */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400/30 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-teal-400/30 rounded-full"></div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs backdrop-blur-sm">
                        {project.category}
                      </Badge>
                      <span className="text-xs text-zinc-500 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" /> {new Date(project.completedAt).getFullYear()}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                      {project.shortDescription}
                    </p>
                    <div className="flex items-center text-emerald-400 text-sm font-medium">
                      View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Floating decorative elements around the cards */}
              <motion.div 
                className="absolute -top-6 -right-6 w-16 h-16 rounded-full border-2 border-emerald-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-teal-500/10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer group"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <motion.div className="text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
              <Zap className="h-5 w-5" />
            </motion.div>
            <motion.div className="w-5 h-8 border-2 border-emerald-400/60 rounded-full flex justify-center relative group-hover:border-emerald-400 transition-colors">
              <motion.div
                className="w-1 h-2 bg-emerald-400 rounded-full mt-1"
                animate={{
                  y: [0, 10, 0],
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.span 
              className="text-xs text-zinc-500 mt-2 group-hover:text-zinc-400 transition-colors"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              Explore Projects
            </motion.span>
          </motion.div>
        </motion.div>
      </section>

      {/* Category Navigation - Horizontal Scrolling */}
      <section className="relative py-12 border-y border-zinc-800 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name === "All" ? null : category.name)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category.name || 
                    (!selectedCategory && category.name === "All")
                      ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/30"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                  }`}
                >
                  {category.icon && <span className={category.color}>{category.icon}</span>}
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase - Masonry Grid */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900/20"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="mb-16 text-center">
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
                Project Gallery
              </span>
            </motion.h2>
            <motion.p 
              className="text-zinc-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Explore my diverse range of projects, each representing a unique challenge and solution.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredProject(project.slug)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <div className="h-full bg-gradient-to-br from-zinc-900/50 to-zinc-900/20 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-emerald-500/30 group-hover:shadow-xl group-hover:shadow-emerald-500/10">
                    {/* Project Image with Overlay */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent transition-opacity duration-300 ${hoveredProject === project.slug ? 'opacity-80' : 'opacity-60'}`}></div>
                      
                      {/* Hover Content */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === project.slug ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="bg-zinc-900/80 backdrop-blur-sm rounded-full p-4 border border-zinc-700">
                          <ArrowUpRight className="h-8 w-8 text-emerald-400" />
                        </div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-sm">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm text-zinc-500 flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1" /> {new Date(project.completedAt).getFullYear()}
                        </span>
                      </div>
                      
                      <p className="text-zinc-400 mb-4">
                        {project.shortDescription}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="border-zinc-700 text-zinc-500 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="border-zinc-700 text-zinc-500 text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-2xl font-medium mb-2">No projects found</h3>
              <p className="text-zinc-500">Try selecting a different category</p>
            </motion.div>
          )}
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
              Tools and technologies I leverage to build modern digital experiences
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
                transition={{ duration: 0.3, delay: index * 0.05 }}
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
                    Ready to bring your <span className="text-emerald-400">vision</span> to life?
                  </h2>
                  <p className="text-zinc-400 mb-8">
                    Let's collaborate to create something extraordinary that pushes boundaries and delivers exceptional results.
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
  )
}