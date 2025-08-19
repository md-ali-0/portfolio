"use client"

import { useMobile } from "@/hooks/use-mobile"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Briefcase, Code, Database, Globe, Server } from "lucide-react"
import { useEffect } from "react"

export default function AboutSection() {
  const isMobile = useMobile()

  // Mouse position for parallax effects - matching hero section
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      mouseX.set(x)
      mouseY.set(y)
    }

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMobile, mouseX, mouseY])

  const statistics = [
    {
      number: "1.5+",
      label: "Years of",
      sublabel: "Experience",
    },
    {
      number: "25+",
      label: "Projects",
      sublabel: "Completed",
    },
    {
      number: "15+",
      label: "Clients",
      sublabel: "Worldwide",
    },
    {
      number: "5+",
      label: "Awards",
      sublabel: "Achieved",
    },
  ]

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Express, and RESTful API development.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Management",
      description:
        "Designing and optimizing databases using MongoDB, PostgreSQL, and implementing efficient data structures.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full-Stack Solutions",
      description: "End-to-end web application development from concept to deployment with modern tech stacks.",
    },
  ]

  const workExperience = [
    {
      period: "March 2025 - Present",
      title: "Full Stack Web Developer",
      company: "Naria It Solutions",
      description:
        "Leading development of cutting-edge web applications with a focus on performance and user experience. Architecting scalable solutions that drive business growth.",
      achievements: [
        "Architected and deployed 5+ production applications using Next.js and React",
        "Optimized application performance resulting in 40% faster load times",
        "Mentored junior developers and established coding best practices",
      ],
      icon: <Briefcase className="h-5 w-5" />,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      period: "May 2024 - February 2025",
      title: "Full Stack Web Developer",
      company: "Edupy Academy",
      description:
        "Developed comprehensive educational platforms and learning management systems. Focused on creating intuitive interfaces for enhanced learning experiences.",
      achievements: [
        "Built scalable LMS platform serving 1000+ students",
        "Implemented real-time features using WebSocket technology",
        "Collaborated with design team to create pixel-perfect UI components",
      ],
      icon: <Code className="h-5 w-5" />,
      color: "from-teal-500 to-emerald-500",
      bgColor: "bg-teal-500/10",
    },
  ]

  return (
    <section id="about" className="min-h-screen relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0">
        {/* Main gradient background */}
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

        {/* Animated mesh gradient overlay */}
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

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
                            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
                        `,
            backgroundSize: "30px 30px sm:40px sm:40px md:50px md:50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="relative mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            x: !isMobile ? smoothMouseX.get() * -0.5 : 0,
            y: !isMobile ? smoothMouseY.get() * -0.5 : 0,
          }}
        >
          {/* Enhanced glass container */}
          <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl backdrop-blur-sm bg-zinc-900/30 border border-zinc-700/50 shadow-2xl">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-emerald-500/5" />

            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    style={{
                      background: "linear-gradient(90deg, #10b981, #14b8a6, #10b981)",
                      backgroundSize: "200% 200%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium">{stat.label}</div>
                  <div className="text-emerald-400 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            x: !isMobile ? smoothMouseX.get() * -0.3 : 0,
            y: !isMobile ? smoothMouseY.get() * -0.3 : 0,
          }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Creating scalable web applications
          </motion.h2>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            with{" "}
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
              modern technologies
            </motion.span>
          </motion.h2>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            and seamless user experiences
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                x: !isMobile ? smoothMouseX.get() * (0.2 + index * 0.1) : 0,
                y: !isMobile ? smoothMouseY.get() * (0.2 + index * 0.1) : 0,
              }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-zinc-800/50 border border-zinc-700/50 rounded-xl mb-4 sm:mb-6 text-emerald-400 group-hover:border-emerald-400/50 group-hover:bg-emerald-500/10 transition-all duration-300 backdrop-blur-sm"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            x: !isMobile ? smoothMouseX.get() * -0.2 : 0,
            y: !isMobile ? smoothMouseY.get() * -0.2 : 0,
          }}
        >
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 text-center leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            My work{" "}
            <motion.span
              className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent"
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
              experience
            </motion.span>
          </motion.h3>

          <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8 md:mt-10">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                className="relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-zinc-900/40 border border-zinc-700/50 hover:border-emerald-400/50 transition-all duration-500 group backdrop-blur-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  boxShadow: "0 20px 60px rgba(16, 185, 129, 0.15)",
                }}
              >
                {/* Animated gradient background overlay */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${job.bgColor} via-transparent to-transparent`}
                  initial={false}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${job.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                      >
                        <div className="text-white">{job.icon}</div>
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-white mb-1 text-lg sm:text-xl md:text-2xl group-hover:text-emerald-300 transition-colors duration-300">
                          {job.title}
                        </h4>
                        <p className="text-emerald-400 text-sm sm:text-base font-semibold">{job.company}</p>
                      </div>
                    </div>
                    <motion.div
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 border border-zinc-600/50 backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-xs sm:text-sm text-zinc-300 font-medium">{job.period}</div>
                    </motion.div>
                  </div>

                  <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                    {job.description}
                  </p>

                  <div className="space-y-3">
                    <h5 className="text-emerald-400 font-semibold text-sm sm:text-base mb-3">Key Achievements:</h5>
                    <div className="space-y-2">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          className="flex items-start space-x-3 group/achievement"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.9 + index * 0.1 + achievementIndex * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed group-hover/achievement:text-zinc-300 transition-colors duration-300">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${job.color.split(" ")[1]}, transparent)`,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
