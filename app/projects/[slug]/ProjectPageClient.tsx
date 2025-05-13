"use client"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Tag, Github, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects-data"
import { generateProjectJsonLd } from "@/lib/metadata"
import MagneticElement from "@/components/magnetic-element"
import { motion } from "framer-motion"

export default function ProjectPageClient({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  // Get related projects (excluding current project)
  const relatedProjects = projects.filter((p) => p.slug !== params.slug && p.category === project.category).slice(0, 3)

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProjectJsonLd(project)),
        }}
      />

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
            <div className="mb-4 flex items-center justify-center gap-2">
              <Link
                href={`/projects?category=${project.category.toLowerCase()}`}
                className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium hover:bg-emerald-500/30 transition-colors"
                data-cursor="link"
              >
                {project.category}
              </Link>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400 flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-1" /> {project.completedAt}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{project.title}</h1>
            <p className="text-xl text-zinc-300 mb-8">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border-0"
                  data-cursor="button"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4">
              <MagneticElement strength={50}>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black"
                    data-cursor="button"
                  >
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </MagneticElement>
              <MagneticElement strength={50}>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-emerald-400 text-emerald-400" data-cursor="button">
                    View Code <Github className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </MagneticElement>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative mb-16">
        <div className="container mx-auto">
          <motion.div
            className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-auto"
              width={1200}
              height={675}
              data-cursor="image"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Content */}
      <section className="relative pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800">
                <div className="prose prose-lg prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: project.content }} />
                </div>

                {/* Project Images */}
                <div className="mt-12 pt-8 border-t border-zinc-800">
                  <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.map((image, index) => (
                      <motion.div
                        key={index}
                        className="rounded-lg overflow-hidden"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} - Screenshot ${index + 1}`}
                          className="w-full h-auto transition-transform duration-500 hover:scale-105"
                          width={800}
                          height={600}
                          data-cursor="image"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mt-12 pt-8 border-t border-zinc-800">
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Tag className="mr-2 h-5 w-5 text-emerald-400" /> Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Badge
                          className="bg-zinc-800 hover:bg-zinc-700 transition-colors py-1.5 px-3"
                          data-cursor="button"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Project Info */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 mb-8">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-zinc-800">Project Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-zinc-400 text-sm">Client</h4>
                    <p className="font-medium">{project.client}</p>
                  </div>
                  <div>
                    <h4 className="text-zinc-400 text-sm">Role</h4>
                    <p className="font-medium">{project.role}</p>
                  </div>
                  <div>
                    <h4 className="text-zinc-400 text-sm">Completed</h4>
                    <p className="font-medium">{project.completedAt}</p>
                  </div>
                  <div>
                    <h4 className="text-zinc-400 text-sm">Category</h4>
                    <p className="font-medium">{project.category}</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800 space-y-4">
                  <MagneticElement strength={40}>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black"
                        data-cursor="button"
                      >
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </MagneticElement>
                  <MagneticElement strength={40}>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        variant="outline"
                        className="w-full border-emerald-400 text-emerald-400"
                        data-cursor="button"
                      >
                        View Code <Github className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </MagneticElement>
                </div>
              </div>

              {/* Related Projects */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-zinc-800">Related Projects</h3>
                <div className="space-y-6">
                  {relatedProjects.map((relatedProject, index) => (
                    <motion.div
                      key={relatedProject.slug}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link href={`/projects/${relatedProject.slug}`} className="block group" data-cursor="project">
                        <div className="flex gap-4">
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={relatedProject.image || "/placeholder.svg"}
                              alt={relatedProject.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              width={80}
                              height={80}
                              data-cursor="image"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium line-clamp-2 group-hover:text-emerald-400 transition-colors">
                              {relatedProject.title}
                            </h4>
                            <p className="text-sm text-zinc-400 mt-1">{relatedProject.category}</p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800">
                  <MagneticElement strength={40}>
                    <Link href="/projects">
                      <Button
                        variant="ghost"
                        className="w-full text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10"
                        data-cursor="button"
                      >
                        View All Projects
                      </Button>
                    </Link>
                  </MagneticElement>
                </div>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-zinc-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <MagneticElement strength={60}>
              <Link href="/#contact">
                <Button
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black px-8 py-6 text-lg"
                  data-cursor="button"
                >
                  Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </MagneticElement>
          </motion.div>
        </div>
      </section>
    </>
  )
}
