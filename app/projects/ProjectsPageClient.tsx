"use client"

import Link from "next/link"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects-data"
import SectionHeader from "@/components/section-header"
import MagneticElement from "@/components/magnetic-element"
import { motion } from "framer-motion"

export default function ProjectsPageClient() {
  // Get all unique categories
  const categories = Array.from(new Set(projects.map((project) => project.category)))

  // Get all unique technologies
  const allTechnologies = projects.flatMap((project) => project.technologies)
  const uniqueTechnologies = Array.from(new Set(allTechnologies))

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-30"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                Projects
              </span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8">
              Explore my portfolio of web development projects, showcasing my skills, creativity, and problem-solving
              abilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative pb-20">
        <div className="container mx-auto">
          <div className="mb-12">
            <SectionHeader title="Featured" highlight="Projects" icon={<ArrowRight className="h-5 w-5" />} />

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.slug}
                    className="bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 group"
                    data-cursor="project"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        width={800}
                        height={600}
                        data-cursor="image"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border-0">
                          {project.category}
                        </Badge>
                        <span className="text-zinc-400 text-sm">{project.completedAt}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-300 mb-6">{project.shortDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-zinc-700 text-zinc-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <MagneticElement strength={40}>
                          <Link href={`/projects/${project.slug}`}>
                            <Button
                              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black"
                              data-cursor="button"
                            >
                              View Details <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </MagneticElement>
                        <MagneticElement strength={40}>
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="outline"
                              className="border-zinc-700 hover:border-emerald-400 transition-colors"
                              data-cursor="button"
                            >
                              Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </MagneticElement>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="relative pb-20">
        <div className="container mx-auto">
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <SectionHeader title="All" highlight="Projects" icon={<ArrowRight className="h-5 w-5" />} />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    className="bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer"
                    data-cursor="button"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  className="bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700 hover:border-emerald-500/50 transition-colors group h-full flex flex-col"
                  data-cursor="project"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -10 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      width={800}
                      height={600}
                      data-cursor="image"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 mb-4 line-clamp-2 flex-grow">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="border-zinc-700 text-zinc-400">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <MagneticElement strength={30}>
                        <Link href={`/projects/${project.slug}`} className="flex-1">
                          <Button
                            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black"
                            data-cursor="button"
                          >
                            Details
                          </Button>
                        </Link>
                      </MagneticElement>
                      <MagneticElement strength={30}>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="outline"
                            className="border-zinc-700 hover:border-emerald-400 transition-colors"
                            data-cursor="button"
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        </Link>
                      </MagneticElement>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-20 bg-zinc-900/50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold">Technologies I Work With</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {uniqueTechnologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <Badge
                  className="bg-zinc-800 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors py-2 px-4 text-base"
                  data-cursor="button"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
        <div className="container mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-zinc-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <MagneticElement strength={60}>
              <Link href="/#contact">
                <Button
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black px-8 py-6 text-lg"
                  data-cursor="button"
                >
                  Let's Work Together <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </MagneticElement>
          </motion.div>
        </div>
      </section>
    </>
  )
}
