"use client"
import MagneticElement from "@/components/magnetic-element"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects-data"
import { generateProjectJsonLd } from "@/lib/metadata"
import { motion } from "framer-motion"
import { ArrowRight, Building, Calendar, ExternalLink, Github, Tag, User } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={`/projects?category=${project.category.toLowerCase()}`}
                className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium hover:bg-emerald-500/30 transition-all duration-300"
                data-cursor="link"
              >
                {project.category}
              </Link>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400 flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-1.5" /> {project.completedAt}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-zinc-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {project.technologies.slice(0, 6).map((tech) => (
                <Badge
                  key={tech}
                  className="bg-zinc-800/60 hover:bg-zinc-700/60 text-zinc-200 border border-zinc-700/60 hover:border-emerald-500/40 px-3 py-1.5 text-sm transition-all duration-300"
                  data-cursor="button"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 6 && (
                <Badge className="bg-zinc-800/60 text-zinc-400 border border-zinc-700/60 px-3 py-1.5 text-sm">
                  +{project.technologies.length - 6} more
                </Badge>
              )}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticElement strength={50}>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black px-6 py-3 shadow-lg shadow-emerald-500/20"
                    data-cursor="button"
                  >
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </MagneticElement>
              
              {/* GitHub links - handle both single URL and array of URLs */}
              {project.githubUrls ? (
                Array.isArray(project.githubUrls) ? (
                  project.githubUrls.map((repo: { name: string; url: string }, idx: number) => (
                    <MagneticElement key={idx} strength={50}>
                      <Link href={repo.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 px-6 py-3" data-cursor="button">
                          View {repo.name} Code <Github className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </MagneticElement>
                  ))
                ) : (
                  <MagneticElement strength={50}>
                    <Link href={project.githubUrls} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 px-6 py-3" data-cursor="button">
                        View Code <Github className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </MagneticElement>
                )
              ) : null}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative mb-16">
        <div className="container mx-auto">
          <motion.div
            className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10 border border-zinc-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-video">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
                width={1200}
                height={675}
                data-cursor="image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent"></div>
            </div>
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
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 shadow-lg shadow-emerald-500/5">
                <div className="prose prose-lg prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: project.content }} />
                </div>

                {/* Project Images */}
                {project.images && project.images.length > 0 && (
                  <div className="mt-16 pt-10 border-t border-zinc-800">
                    <h3 className="text-2xl font-bold mb-8 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-emerald-400">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <path d="M21 15l-5-5L5 21"></path>
                      </svg>
                      Project Gallery
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.images.map((image, index) => (
                        <motion.div
                          key={index}
                          className="rounded-xl overflow-hidden border border-zinc-800"
                          whileHover={{ scale: 1.02 }}
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
                )}

                {/* Technologies Used */}
                <div className="mt-16 pt-10 border-t border-zinc-800">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Tag className="mr-2 h-6 w-6 text-emerald-400" /> Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Badge
                          className="bg-zinc-800 hover:bg-zinc-700 transition-colors py-2 px-4 text-base"
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
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 mb-8 shadow-lg shadow-emerald-500/5">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-zinc-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-emerald-400">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  Project Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <User className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-zinc-400 text-sm uppercase tracking-wide">Role</h4>
                      <p className="font-medium mt-1">{project.role}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Building className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-zinc-400 text-sm uppercase tracking-wide">Client</h4>
                      <p className="font-medium mt-1">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Calendar className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-zinc-400 text-sm uppercase tracking-wide">Completed</h4>
                      <p className="font-medium mt-1">{project.completedAt}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                        <path d="M12 2v2"></path>
                        <path d="M12 22v-2"></path>
                        <path d="m17 20.66-1-1.73"></path>
                        <path d="M11 10.27 7 3.34"></path>
                        <path d="m20.66 17-1.73-1"></path>
                        <path d="m3.34 7 1.73 1"></path>
                        <path d="M14 12h8"></path>
                        <path d="M2 12h2"></path>
                        <path d="m20.66 7-1.73 1"></path>
                        <path d="m3.34 17 1.73-1"></path>
                        <path d="m17 3.34-1 1.73"></path>
                        <path d="m11 13.73-4 6.93"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-zinc-400 text-sm uppercase tracking-wide">Category</h4>
                      <p className="font-medium mt-1">{project.category}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-800 space-y-4">
                  <MagneticElement strength={40}>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black py-3 shadow-lg shadow-emerald-500/20"
                        data-cursor="button"
                      >
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </MagneticElement>
                  
                  {/* GitHub links - handle both single URL and array of URLs */}
                  {project.githubUrls ? (
                    Array.isArray(project.githubUrls) ? (
                      <div className="grid grid-cols-1 gap-3">
                        {project.githubUrls.map((repo: { name: string; url: string }, idx: number) => (
                          <MagneticElement key={idx} strength={40}>
                            <Link href={repo.url} target="_blank" rel="noopener noreferrer" className="block">
                              <Button
                                variant="outline"
                                className="w-full border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 py-3"
                                data-cursor="button"
                              >
                                View {repo.name} Code <Github className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </MagneticElement>
                        ))}
                      </div>
                    ) : (
                      <MagneticElement strength={40}>
                        <Link href={project.githubUrls} target="_blank" rel="noopener noreferrer" className="block">
                          <Button
                            variant="outline"
                            className="w-full border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 py-3"
                            data-cursor="button"
                          >
                            View Code <Github className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </MagneticElement>
                    )
                  ) : null}
                </div>
              </div>

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 shadow-lg shadow-emerald-500/5">
                  <h3 className="text-xl font-bold mb-6 pb-4 border-b border-zinc-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-emerald-400">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Related Projects
                  </h3>
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
                            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-zinc-800">
                              <img
                                src={relatedProject.image || "/placeholder.svg"}
                                alt={relatedProject.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                width={80}
                                height={80}
                                data-cursor="image"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium line-clamp-2 group-hover:text-emerald-400 transition-colors text-base">
                                {relatedProject.title}
                              </h4>
                              <p className="text-sm text-zinc-400 mt-2">{relatedProject.category}</p>
                              <div className="flex items-center mt-2 text-xs text-zinc-500">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{relatedProject.completedAt}</span>
                              </div>
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
                          className="w-full text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10 py-3"
                          data-cursor="button"
                        >
                          View All Projects
                        </Button>
                      </Link>
                    </MagneticElement>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-t-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in working together?</h2>
            <p className="text-zinc-300 mb-10 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <MagneticElement strength={60}>
              <Link href="/#contact">
                <Button
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black px-8 py-6 text-lg rounded-full shadow-xl shadow-emerald-500/30"
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