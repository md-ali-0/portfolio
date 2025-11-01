"use client"

import Breadcrumb from "@/components/breadcrumb"
import MagneticElement from "@/components/magnetic-element"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects-data"
import { motion } from "framer-motion"
import { ArrowUpRight, Building, Calendar, Code, ExternalLink, Github, Globe, LayoutGrid, LayoutList, Palette, Smartphone, User } from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"

export default function ProjectsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [layout, setLayout] = useState<"grid" | "list">("grid")

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
      <Breadcrumb 
        title="Projects" 
        description="Explore my portfolio of web development projects, including websites, web applications, and mobile apps." 
      />
      
      {/* Projects Filter Section */}
      <section className="relative py-16 bg-gradient-to-b from-zinc-900/40 to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Project Categories
            </motion.h2>
            <motion.p
              className="text-zinc-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Filter projects by category to find exactly what you're looking for
            </motion.p>
          </div>

          {/* Category Filter and Layout Switcher */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 max-w-4xl mx-auto">
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name === "All" ? null : category.name)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.name || 
                    (!selectedCategory && category.name === "All")
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-black shadow-lg shadow-emerald-500/25"
                      : "bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 border border-zinc-700 hover:border-emerald-500/30"
                  }`}
                  data-cursor="button"
                >
                  {category.icon && <span className={category.color}>{category.icon}</span>}
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Layout Switcher */}
            <motion.div
              className="flex items-center gap-2 bg-zinc-800/50 rounded-lg p-1 border border-zinc-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setLayout("grid")}
                className={`p-2 rounded-md transition-colors ${
                  layout === "grid" 
                    ? "bg-emerald-500/20 text-emerald-400" 
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
                aria-label="Grid view"
              >
                <LayoutGrid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setLayout("list")}
                className={`p-2 rounded-md transition-colors ${
                  layout === "list" 
                    ? "bg-emerald-500/20 text-emerald-400" 
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
                aria-label="List view"
              >
                <LayoutList className="h-5 w-5" />
              </button>
            </motion.div>
          </div>

          {/* Projects Grid/List */}
          <motion.div
            className={layout === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
              : "flex flex-col gap-6 mb-20"
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {filteredProjects.map((project, index) => (
              layout === "grid" ? (
                <GridProjectCard 
                  key={project.slug} 
                  project={project} 
                  index={index} 
                  hoveredProject={hoveredProject}
                  setHoveredProject={setHoveredProject}
                />
              ) : (
                <ListProjectCard 
                  key={project.slug} 
                  project={project} 
                  index={index} 
                  hoveredProject={hoveredProject}
                  setHoveredProject={setHoveredProject}
                />
              )
            ))}
          </motion.div>
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

// Grid Project Card Component
function GridProjectCard({ project, index, hoveredProject, setHoveredProject }: { 
  project: any; 
  index: number; 
  hoveredProject: string | null; 
  setHoveredProject: (slug: string | null) => void 
}) {
  return (
    <motion.div
      key={project.slug}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative group"
      onMouseEnter={() => setHoveredProject(project.slug)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="relative h-full rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm border border-zinc-800 overflow-hidden transition-all duration-300 group-hover:border-emerald-500/30">
          {/* Static shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
          
          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-black px-3 py-1.5 text-sm font-semibold">
                FEATURED
              </Badge>
            </div>
          )}
          
          {/* Category badge */}
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-zinc-800/80 text-zinc-200 border border-zinc-700 px-3 py-1.5 text-sm font-medium">
              {project.category}
            </Badge>
          </div>
          
          <div className="p-6 relative z-10">
            <div className="mb-4 rounded-lg overflow-hidden aspect-video bg-zinc-800/50 flex items-center justify-center">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                width={400}
                height={225}
                data-cursor="image"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-100 transition-colors duration-300">
              {project.title}
            </h3>
            
            <p className="text-zinc-300 text-base mb-4 leading-relaxed">
              {project.shortDescription}
            </p>
            
            {/* Project metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-400" />
                <span className="font-medium">{new Date(project.completedAt).getFullYear()}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-emerald-400" />
                <span className="font-medium">{project.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-emerald-400" />
                <span className="font-medium">{project.client}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.slice(0, 4).map((tech: string) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full bg-zinc-800/60 text-zinc-200 border border-zinc-700/60 hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-100 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full bg-zinc-800/60 text-zinc-400 border border-zinc-700/60">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
            
            {/* Project links */}
            <div className="flex flex-wrap gap-3 mb-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg border border-emerald-500/30 text-sm hover:bg-emerald-500/30 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              )}
              
              {/* GitHub links - handle both single URL and array of URLs */}
              {project.githubUrls ? (
                Array.isArray(project.githubUrls) ? (
                  project.githubUrls.map((repo: { name: string; url: string }, idx: number) => (
                    <a
                      key={idx}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-800/60 text-zinc-300 rounded-lg border border-zinc-700/60 text-sm hover:bg-zinc-700/60 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-4 w-4" />
                      <span>{repo.name}</span>
                    </a>
                  ))
                ) : (
                  <a
                    href={project.githubUrls}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800/60 text-zinc-300 rounded-lg border border-zinc-700/60 text-sm hover:bg-zinc-700/60 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </a>
                )
              ) : project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800/60 text-zinc-300 rounded-lg border border-zinc-700/60 text-sm hover:bg-zinc-700/60 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-4 w-4" />
                  <span>Source Code</span>
                </a>
              ) : null}
            </div>
            
            <div className="flex items-center text-emerald-400 text-base font-medium group-hover:text-emerald-300 transition-colors duration-300">
              View Project Details
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// List Project Card Component
function ListProjectCard({ project, index, hoveredProject, setHoveredProject }: { 
  project: any; 
  index: number; 
  hoveredProject: string | null; 
  setHoveredProject: (slug: string | null) => void 
}) {
  return (
    <motion.div
      key={project.slug}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      className="relative group"
      onMouseEnter={() => setHoveredProject(project.slug)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="relative rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm border border-zinc-800 overflow-hidden transition-all duration-300 group-hover:border-emerald-500/30">
          {/* Static shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/3">
              <div className="h-48 md:h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden bg-zinc-800/50 flex items-center justify-center">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={225}
                  data-cursor="image"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="md:w-2/3 p-6 md:p-8 relative z-10">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-100 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-black px-3 py-1.5 text-sm font-semibold">
                      FEATURED
                    </Badge>
                  )}
                  <Badge className="bg-zinc-800/80 text-zinc-200 border border-zinc-700 px-3 py-1.5 text-sm font-medium">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <p className="text-zinc-300 text-base mb-5 leading-relaxed">
                {project.shortDescription}
              </p>
              
              {/* Project metadata */}
              <div className="flex flex-wrap items-center gap-5 mb-5 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-emerald-400" />
                  <span className="font-medium">{new Date(project.completedAt).getFullYear()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-emerald-400" />
                  <span className="font-medium">{project.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-emerald-400" />
                  <span className="font-medium">{project.client}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 6).map((tech: string) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full bg-zinc-800/60 text-zinc-200 border border-zinc-700/60 hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-100 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 6 && (
                  <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full bg-zinc-800/60 text-zinc-400 border border-zinc-700/60">
                    +{project.technologies.length - 6} more
                  </span>
                )}
              </div>
              
              {/* Project links and View Details */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg border border-emerald-500/30 text-sm hover:bg-emerald-500/30 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  
                  {/* GitHub links - handle both single URL and array of URLs */}
                  {project.githubUrls ? (
                    Array.isArray(project.githubUrls) ? (
                      project.githubUrls.map((repo: { name: string; url: string }, idx: number) => (
                        <a
                          key={idx}
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-zinc-800/60 text-zinc-300 rounded-lg border border-zinc-700/60 text-sm hover:bg-zinc-700/60 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="h-4 w-4" />
                          <span>{repo.name}</span>
                        </a>
                      ))
                    ) : (
                      <a
                        href={project.githubUrls}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-zinc-800/60 text-zinc-300 rounded-lg border border-zinc-700/60 text-sm hover:bg-zinc-700/60 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-4 w-4" />
                        <span>Source Code</span>
                      </a>
                    )
                  ) : null}
                </div>
                
                <div className="flex items-center text-emerald-400 text-base font-medium group-hover:text-emerald-300 transition-colors duration-300">
                  View Project Details
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}