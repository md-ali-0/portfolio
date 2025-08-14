"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github, Rocket } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with advanced features including real-time inventory, payment processing, and admin dashboard.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
      category: "Full-Stack",
      featured: true,
    },
    {
      id: 2,
      title: "AI Chat Application",
      description:
        "Intelligent chat application powered by machine learning with real-time messaging and smart responses.",
      image: "/ai-chat-interface.png",
      technologies: ["React", "Node.js", "OpenAI", "Socket.io", "MongoDB"],
      category: "AI/ML",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative project management tool with team features, time tracking, and advanced analytics.",
      image: "/project-management-dashboard.png",
      technologies: ["Vue.js", "Express", "Redis", "Chart.js", "Docker"],
      category: "Productivity",
      featured: false,
    },
    {
      id: 4,
      title: "Crypto Trading Bot",
      description: "Automated cryptocurrency trading bot with advanced algorithms and risk management features.",
      image: "/cryptocurrency-trading-dashboard.png",
      technologies: ["Python", "FastAPI", "WebSocket", "TensorFlow", "Docker"],
      category: "FinTech",
      featured: true,
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics platform with real-time data visualization and insights.",
      image: "/social-media-analytics-dashboard.png",
      technologies: ["React", "D3.js", "GraphQL", "PostgreSQL", "AWS"],
      category: "Analytics",
      featured: false,
    },
    {
      id: 6,
      title: "IoT Monitoring System",
      description:
        "Real-time IoT device monitoring system with alerts, data visualization, and remote control capabilities.",
      image: "/placeholder-xq9sa.png",
      technologies: ["Angular", "MQTT", "InfluxDB", "Grafana", "Kubernetes"],
      category: "IoT",
      featured: false,
    },
  ]

  const categoryColors = {
    "Full-Stack": "from-emerald-400 to-teal-500",
    "AI/ML": "from-purple-400 to-pink-500",
    Productivity: "from-blue-400 to-cyan-500",
    FinTech: "from-yellow-400 to-orange-500",
    Analytics: "from-indigo-400 to-purple-500",
    IoT: "from-green-400 to-emerald-500",
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/*  Simplified background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.08),transparent_50%)]" />
      </div>

      <div className="container mx-auto relative z-10">
        {/*  Simplified section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Rocket className="h-8 w-8 text-emerald-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mb-6" />
          
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions built with cutting-edge technologies
          </p>
        </motion.div>

        {/*  Simplified projects grid with cleaner cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="bg-zinc-800/50 border-zinc-700/50 hover:border-emerald-400/50 transition-all duration-300 h-full backdrop-blur-sm overflow-hidden">
                {/*  Simplified featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-semibold">
                      Featured
                    </Badge>
                  </div>
                )}

                {/*  Clean image section */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  {/*  Simple category badge */}
                  <Badge
                    className={`bg-gradient-to-r ${categoryColors[project.category as keyof typeof categoryColors]} text-black font-medium mb-3`}
                  >
                    {project.category}
                  </Badge>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/*  Clean technology badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-zinc-600 text-zinc-300 hover:border-emerald-400/50 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/*  Simple action buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-600 hover:border-emerald-400 hover:text-emerald-400 transition-colors flex-1"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white flex-1"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/*  Simple CTA section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 px-8 py-3 text-lg group"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

