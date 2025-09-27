"use client"

import MagneticElement from "@/components/magnetic-element"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion"
import { ArrowRight, Calendar, ExternalLink, Github, Rocket } from "lucide-react"
import AnimatedButton from "../animated-button"
import SectionHeader from "../section-header"

const projects = [
  {
    slug: "project-1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
    category: "Full Stack",
    image: "/modern-ecommerce-website.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    stats: { views: "12.5k", likes: "2.1k", year: "2024" },
    status: "Live",
  },
  {
    slug: "project-2",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    category: "Web App",
    image: "/task-management-dashboard.png",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redux"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    stats: { views: "8.3k", likes: "1.5k", year: "2024" },
    status: "Live",
  },
  {
    slug: "project-3",
    title: "Portfolio Website",
    description: "Modern portfolio website with smooth animations, responsive design, and optimized performance.",
    category: "Frontend",
    image: "/modern-portfolio-website.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    stats: { views: "15.2k", likes: "3.8k", year: "2024" },
    status: "Live",
  },
  {
    slug: "project-4",
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI with smart responses and natural language processing.",
    category: "AI/ML",
    image: "/ai-chat-interface.png",
    technologies: ["Next.js", "OpenAI", "WebSocket", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    stats: { views: "22.1k", likes: "4.7k", year: "2024" },
    status: "Beta",
  },
  {
    slug: "project-5",
    title: "Analytics Dashboard",
    description: "Comprehensive analytics dashboard with real-time data visualization and reporting features.",
    category: "Data Viz",
    image: "/analytics-dashboard.png",
    technologies: ["React", "D3.js", "Chart.js", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    stats: { views: "9.8k", likes: "1.9k", year: "2023" },
    status: "Live",
  },
]

const ProjectCard = ({
  project,
  index,
  layout = "default",
}: {
  project: any
  index: number
  layout?: "large" | "default"
}) => {
  const isMobile = useMobile()

  if (layout === "large") {
    return (
      <motion.div
        className="group relative col-span-full lg:col-span-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <Card className="relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-emerald-400/50 transition-all duration-500 h-full overflow-hidden rounded-2xl">
          {/* Status badge */}
          <motion.div
            className="absolute top-6 left-6 z-20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Badge
              className={`${
                project.status === "Live"
                  ? "bg-green-500/20 text-green-400 border-green-400/30"
                  : "bg-orange-500/20 text-orange-400 border-orange-400/30"
              } backdrop-blur-sm`}
            >
              <div
                className={`w-2 h-2 rounded-full mr-2 ${
                  project.status === "Live" ? "bg-green-400" : "bg-orange-400"
                } animate-pulse`}
              />
              {project.status}
            </Badge>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-0 h-full">
            {/* Image section */}
            <div className="relative overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 via-zinc-900/20 to-transparent" />
            </div>

            {/* Content section */}
            <CardContent className="p-8 flex flex-col justify-center relative">
              <motion.div className="flex items-center justify-between gap-3 mb-6">
                  <Badge className="bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-semibold px-4 py-2">
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.stats.year}</span>
                  </div>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-zinc-300 mb-8 leading-relaxed text-lg">{project.description}</p>

              {/* Technology badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech: string, techIndex: number) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: techIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="outline"
                      className="border-zinc-600 text-zinc-300 hover:border-emerald-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-4">
                <a href={project.github} className="flex-1">
                  <AnimatedButton
                    variant="outline"
                    className="w-full border-zinc-600 hover:border-emerald-400 hover:bg-emerald-400/10 py-3"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View Code
                  </AnimatedButton>
                </a>
                <a href={project.demo} className="flex-1">
                  <AnimatedButton className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 py-3">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </AnimatedButton>
                </a>
              </div>
            </CardContent>
          </div>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-emerald-400/50 transition-all duration-500 h-full overflow-hidden rounded-xl">
        {/* Project image */}
        <div className="h-52 overflow-hidden relative">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent" />

          {/* Status and stats overlay */}
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge
              className={`${
                project.status === "Live"
                  ? "bg-green-500/20 text-green-400 border-green-400/30"
                  : "bg-orange-500/20 text-orange-400 border-orange-400/30"
              } backdrop-blur-sm text-xs`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                  project.status === "Live" ? "bg-green-400" : "bg-orange-400"
                } animate-pulse`}
              />
              {project.status}
            </Badge>
          </div>

        </div>

        <CardContent className="p-6 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <Badge className="bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-medium px-3 py-1">
              {project.category}
            </Badge>
            <div className="flex items-center gap-1 text-zinc-400">
              <Calendar className="w-3 h-3" />
              <span className="text-xs">{project.stats.year}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-zinc-300 mb-5 leading-relaxed line-clamp-3 text-sm">{project.description}</p>

          {/* Technology badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: techIndex * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="outline"
                  className="border-zinc-600 text-zinc-300 hover:border-emerald-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 text-xs px-2 py-1"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2 py-1">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <a href={project.github} className="flex-1">
              <AnimatedButton
                variant="outline"
                size="sm"
                className="w-full border-zinc-600 hover:border-emerald-400 hover:bg-emerald-400/10"
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </AnimatedButton>
            </a>
            <a href={project.demo} className="flex-1">
              <AnimatedButton
                size="sm"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </AnimatedButton>
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const isMobile = useMobile()
  const { scrollY } = useScroll()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const sectionY = useTransform(scrollY, [0, 1000], [0, -30])

  return (
    <section
      id="projects"
      className="py-20 md:py-32 relative overflow-hidden"
      onMouseMove={(e) => {
        if (!isMobile) {
          const rect = e.currentTarget.getBoundingClientRect()
          mouseX.set((e.clientX - rect.left - rect.width / 2) / 20)
          mouseY.set((e.clientY - rect.top - rect.height / 2) / 20)
        }
      }}
    >
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
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
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

      {!isMobile &&
        Array.from({ length: 8 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 8 + Math.random() * 6,
        })).map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-1.5 h-1.5 bg-emerald-400/40 rounded-full"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

      <motion.div className="container mx-auto relative z-10 px-4" style={{ y: sectionY }}>
        <SectionHeader
          title="Featured"
          highlight="Projects"
          icon={<Rocket className="h-8 w-8 text-emerald-400" />}
          description="Showcasing innovative solutions built with cutting-edge technologies"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Featured large project */}
          <ProjectCard key={projects[0].slug} project={projects[0]} index={0} layout="large" />

          {/* Other projects */}
          {projects.slice(1, 5).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index + 1} />
          ))}
        </div>

        {/* CTA section */}
        <div className="flex justify-center items-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <MagneticElement strength={80}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <AnimatedButton
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25"
                  dataCursorText="Let's Talk"
                >
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </motion.div>
            </MagneticElement>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
