"use client";

import MagneticElement from "@/components/magnetic-element";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useMobile } from "@/hooks/use-mobile";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ExternalLink, Github, Rocket, Star } from "lucide-react";
import AnimatedButton from "../animated-button";
import SectionHeader from "../section-header";

const projects = [
    {
        slug: "project-1",
        title: "E-Commerce Platform",
        description:
            "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
        category: "Full Stack",
        image: "/modern-ecommerce-website.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Stripe",
            "MongoDB",
        ],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        slug: "project-2",
        title: "Task Management App",
        description:
            "Collaborative task management application with real-time updates and team collaboration features.",
        category: "Web App",
        image: "/task-management-dashboard.png",
        technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redux"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        slug: "project-3",
        title: "Portfolio Website",
        description:
            "Modern portfolio website with smooth animations, responsive design, and optimized performance.",
        category: "Frontend",
        image: "/modern-portfolio-website.png",
        technologies: [
            "Next.js",
            "Framer Motion",
            "Tailwind CSS",
            "TypeScript",
        ],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        slug: "project-4",
        title: "AI Chat Application",
        description:
            "Real-time chat application powered by AI with smart responses and natural language processing.",
        category: "AI/ML",
        image: "/ai-chat-interface.png",
        technologies: [
            "Next.js",
            "OpenAI",
            "WebSocket",
            "Prisma",
            "PostgreSQL",
        ],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        slug: "project-5",
        title: "Analytics Dashboard",
        description:
            "Comprehensive analytics dashboard with real-time data visualization and reporting features.",
        category: "Data Viz",
        image: "/analytics-dashboard.png",
        technologies: ["React", "D3.js", "Chart.js", "Node.js", "MongoDB"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        slug: "project-6",
        title: "Mobile Banking App",
        description:
            "Secure mobile banking application with biometric authentication and transaction management.",
        category: "Mobile",
        image: "/mobile-banking-app.png",
        technologies: [
            "React Native",
            "TypeScript",
            "Firebase",
            "Stripe",
            "Redux",
        ],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
];

const ProjectCard = ({
    project,
    index,
    layout = "default",
}: {
    project: any;
    index: number;
    layout?: "large" | "vertical" | "horizontal" | "compact" | "default";
}) => {
    if (layout === "large") {
        // Featured large card with side-by-side layout
        return (
            <motion.div
                className="group relative col-span-full lg:col-span-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
            >
                <MagneticElement strength={20} className="h-full">
                    <Card className="bg-gradient-to-br from-zinc-800/90 via-zinc-800/70 to-zinc-900/90 border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-700 h-full backdrop-blur-xl overflow-hidden relative">
                        {/* Enhanced featured badge */}
                        <motion.div
                            className="absolute top-6 right-6 z-20"
                            initial={{ rotate: -15, scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{
                                delay: 0.5,
                                type: "spring",
                                bounce: 0.4,
                            }}
                        >
                            <Badge className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black font-bold px-4 py-2 shadow-2xl">
                                <Star className="w-4 h-4 mr-2 animate-pulse" />
                                Featured Project
                            </Badge>
                        </motion.div>

                        {/* Animated border glow effect */}
                        <motion.div
                            style={{
                                background:
                                    "linear-gradient(45deg, transparent, rgba(16, 185, 129, 0.3), transparent, rgba(20, 184, 166, 0.3), transparent)",
                                backgroundSize: "400% 400%",
                            }}
                            animate={{
                                backgroundPosition: [
                                    "0% 50%",
                                    "100% 50%",
                                    "0% 50%",
                                ],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />

                        <div className="grid lg:grid-cols-2 gap-0 h-full">
                            {/* Enhanced image section */}
                            <div className="relative overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                    whileHover={{ rotateY: 5, rotateX: 2 }}
                                />

                                {/* Enhanced floating particles */}
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100"
                                        style={{
                                            left: `${15 + i * 12}%`,
                                            top: `${20 + (i % 3) * 25}%`,
                                        }}
                                        animate={{
                                            y: [-15, -40, -15],
                                            x: [0, Math.sin(i) * 10, 0],
                                            opacity: [0, 1, 0],
                                            scale: [1, 1.5, 1],
                                        }}
                                        transition={{
                                            duration: 3,
                                            delay: i * 0.3,
                                            repeat: Number.POSITIVE_INFINITY,
                                        }}
                                    />
                                ))}

                                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/60 via-transparent to-zinc-900/20" />
                            </div>

                            {/* Enhanced content section */}
                            <CardContent className="p-8 flex flex-col justify-center">
                                <motion.div
                                    className="flex items-center justify-between mb-4"
                                    whileHover={{ x: 3 }}
                                >
                                    <Badge className="bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-semibold px-3 py-1">
                                        {project.category}
                                    </Badge>
                                </motion.div>

                                <motion.h3
                                    className="text-3xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors"
                                    whileHover={{
                                        textShadow:
                                            "0 0 30px rgba(16, 185, 129, 0.6)",
                                        scale: 1.02,
                                    }}
                                >
                                    {project.title}
                                </motion.h3>

                                <p className="text-zinc-300 mb-6 leading-relaxed text-lg">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.technologies.map(
                                        (tech: string, techIndex: number) => (
                                            <motion.div
                                                key={tech}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    delay: techIndex * 0.1,
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    y: -3,
                                                }}
                                            >
                                                <Badge
                                                    variant="outline"
                                                    className="border-zinc-500 text-zinc-300 hover:border-emerald-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300"
                                                >
                                                    {tech}
                                                </Badge>
                                            </motion.div>
                                        )
                                    )}
                                </div>

                                <div className="flex gap-4">
                                    <motion.a
                                        href={project.github}
                                        className="flex-1"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <AnimatedButton
                                            variant="outline"
                                            className="w-full border-zinc-500 hover:border-emerald-400 py-3"
                                        >
                                            <Github className="mr-2 h-5 w-5" />
                                            View Code
                                        </AnimatedButton>
                                    </motion.a>
                                    <motion.a
                                        href={project.demo}
                                        className="flex-1"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <AnimatedButton className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 py-3">
                                            <ExternalLink className="mr-2 h-5 w-5" />
                                            Live Demo
                                        </AnimatedButton>
                                    </motion.a>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                </MagneticElement>
            </motion.div>
        );
    }

    if (layout === "horizontal") {
        // Horizontal card layout
        return (
            <motion.div
                className="group relative col-span-full lg:col-span-2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
            >
                <MagneticElement strength={10}>
                    <Card className="bg-gradient-to-r from-zinc-800/90 via-zinc-800/70 to-zinc-900/90 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-700 h-64 backdrop-blur-xl overflow-hidden relative">
                        {/* Diagonal accent line */}
                        <motion.div
                            className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 origin-right"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />

                        <div className="grid grid-cols-5 gap-0 h-full">
                            {/* Compact image section */}
                            <div className="col-span-2 relative overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    whileHover={{ rotateY: -3 }}
                                />

                                {/* Ripple effect on hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100"
                                    animate={{
                                        background: [
                                            "radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)",
                                            "radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)",
                                            "radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)",
                                        ],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                    }}
                                />
                            </div>

                            {/* Content section */}
                            <CardContent className="col-span-3 p-6 flex flex-col justify-center">
                                <motion.div
                                    className="flex items-center justify-between mb-3"
                                    whileHover={{ x: 3 }}
                                >
                                    <Badge className="bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-medium">
                                        {project.category}
                                    </Badge>
                                </motion.div>

                                <motion.h3
                                    className="text-2xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors"
                                    whileHover={{
                                        textShadow:
                                            "0 0 25px rgba(20, 184, 166, 0.6)",
                                    }}
                                >
                                    {project.title}
                                </motion.h3>

                                <p className="text-zinc-300 mb-4 leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies
                                        .slice(0, 3)
                                        .map(
                                            (
                                                tech: string,
                                                techIndex: number
                                            ) => (
                                                <motion.div
                                                    key={tech}
                                                    whileHover={{
                                                        scale: 1.05,
                                                        y: -2,
                                                    }}
                                                >
                                                    <Badge
                                                        variant="outline"
                                                        className="border-zinc-500 text-zinc-300 hover:border-teal-400 hover:text-teal-400 text-xs"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                </motion.div>
                                            )
                                        )}
                                </div>

                                <div className="flex gap-3">
                                    <motion.a
                                        href={project.github}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <AnimatedButton
                                            variant="outline"
                                            size="sm"
                                            className="border-zinc-500 hover:border-teal-400"
                                        >
                                            <Github className="mr-2 h-4 w-4" />
                                            Code
                                        </AnimatedButton>
                                    </motion.a>
                                    <motion.a
                                        href={project.demo}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <AnimatedButton
                                            size="sm"
                                            className="bg-gradient-to-r from-teal-500 to-cyan-500"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Demo
                                        </AnimatedButton>
                                    </motion.a>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                </MagneticElement>
            </motion.div>
        );
    }

    if (layout === "vertical") {
        // Vertical card layout with overlay
        return (
            <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
            >
                <MagneticElement strength={55}>
                    <Card className="bg-gradient-to-b from-zinc-800/90 via-zinc-800/70 to-zinc-900/90 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-700 h-full backdrop-blur-xl overflow-hidden relative">
                        {/* Corner accent animations */}
                        <motion.div
                            className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-purple-400"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />
                        <motion.div
                            className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-purple-400"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        />

                        {/* Image with sliding overlay */}
                        <div className="h-56 overflow-hidden relative">
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                whileHover={{ rotateZ: -1 }}
                            />

                            {/* Sliding overlay effect */}
                            <motion.div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-800/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center justify-between text-white">
                                        <div className="flex items-center gap-2">
                                            <Star className="h-4 w-4 text-yellow-400" />
                                            <span className="text-sm font-medium">
                                                4.9 Rating
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ExternalLink className="h-4 w-4" />
                                            <span className="text-sm">
                                                1.2k Views
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <CardContent className="p-6 relative z-10">
                            <motion.div
                                className="flex items-center justify-between mb-3"
                                whileHover={{ x: 2 }}
                            >
                                <Badge className="bg-gradient-to-r from-purple-400 to-pink-400 text-black font-medium">
                                    {project.category}
                                </Badge>
                            </motion.div>

                            <motion.h3
                                className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors"
                                whileHover={{
                                    textShadow:
                                        "0 0 20px rgba(168, 85, 247, 0.5)",
                                }}
                            >
                                {project.title}
                            </motion.h3>

                            <p className="text-zinc-300 mb-4 leading-relaxed line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies
                                    .slice(0, 4)
                                    .map((tech: string, techIndex: number) => (
                                        <motion.div
                                            key={tech}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                        >
                                            <Badge
                                                variant="outline"
                                                className="border-zinc-500 text-zinc-300 hover:border-purple-400 hover:text-purple-400 text-xs"
                                            >
                                                {tech}
                                            </Badge>
                                        </motion.div>
                                    ))}
                            </div>

                            <div className="flex gap-3">
                                <motion.a
                                    href={project.github}
                                    className="flex-1"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <AnimatedButton
                                        variant="outline"
                                        className="w-full border-zinc-500 hover:border-purple-400"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </AnimatedButton>
                                </motion.a>
                                <motion.a
                                    href={project.demo}
                                    className="flex-1"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <AnimatedButton className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Demo
                                    </AnimatedButton>
                                </motion.a>
                            </div>
                        </CardContent>
                    </Card>
                </MagneticElement>
            </motion.div>
        );
    }

    if (layout === "compact") {
        // Compact card layout with side image
        return (
            <motion.div
                className="group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
            >
                <MagneticElement strength={40}>
                    <Card className="bg-gradient-to-br from-zinc-800/90 via-zinc-800/70 to-zinc-900/90 border border-orange-400/30 hover:border-orange-400/60 transition-all duration-700 h-full backdrop-blur-xl overflow-hidden relative">
                        {/* Pulsing glow effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-red-400/10 opacity-0 group-hover:opacity-100 rounded-lg"
                            animate={{
                                opacity: [0, 0.3, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        />

                        <div className="grid grid-cols-3 gap-0 h-full">
                            {/* Side image */}
                            <div className="relative overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    whileHover={{ rotateY: 5 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/60" />
                            </div>

                            {/* Compact content */}
                            <CardContent className="col-span-2 p-4 flex flex-col justify-center">
                                <motion.div
                                    className="mb-2"
                                    whileHover={{ x: 2 }}
                                >
                                    <Badge className="bg-gradient-to-r from-orange-400 to-red-400 text-black font-medium text-xs">
                                        {project.category}
                                    </Badge>
                                </motion.div>

                                <motion.h3
                                    className="text-lg font-bold mb-2 text-white group-hover:text-orange-400 transition-colors"
                                    whileHover={{
                                        textShadow:
                                            "0 0 15px rgba(251, 146, 60, 0.5)",
                                    }}
                                >
                                    {project.title}
                                </motion.h3>

                                <p className="text-zinc-300 mb-3 leading-relaxed text-sm line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1 mb-3">
                                    {project.technologies
                                        .slice(0, 2)
                                        .map((tech: string) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className="border-zinc-500 text-zinc-300 hover:border-orange-400 text-xs"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    <Badge
                                        variant="outline"
                                        className="border-zinc-500 text-zinc-300 text-xs"
                                    >
                                        +{project.technologies.length - 2}
                                    </Badge>
                                </div>

                                <div className="flex gap-2">
                                    <motion.a
                                        href={project.github}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <AnimatedButton
                                            variant="outline"
                                            size="sm"
                                            className="border-zinc-500 hover:border-orange-400 px-3"
                                        >
                                            <Github className="h-3 w-3" />
                                        </AnimatedButton>
                                    </motion.a>
                                    <motion.a
                                        href={project.demo}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <AnimatedButton
                                            size="sm"
                                            className="bg-gradient-to-r from-orange-500 to-red-500 px-3"
                                        >
                                            <ExternalLink className="h-3 w-3" />
                                        </AnimatedButton>
                                    </motion.a>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                </MagneticElement>
            </motion.div>
        );
    }

    // Default enhanced card design
    return (
        <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <MagneticElement strength={50}>
                <Card className="bg-gradient-to-br from-zinc-800/90 via-zinc-800/70 to-zinc-900/90 border border-emerald-400/20 hover:border-emerald-400/50 transition-all duration-500 h-full backdrop-blur-xl overflow-hidden relative group-hover:shadow-2xl group-hover:shadow-emerald-400/20">
                    {/* Enhanced animated border */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-conic from-emerald-400/30 via-teal-400/30 to-emerald-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                    <div className="absolute inset-[1px] bg-gradient-to-br from-zinc-800/90 via-zinc-800/70 to-zinc-900/90 rounded-lg" />

                    {/* Enhanced project image */}
                    <div className="h-48 overflow-hidden relative">
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            whileHover={{ rotateZ: 1, scale: 1.05 }}
                        />

                        {/* Enhanced floating particles */}
                        {Array.from({ length: 6 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100"
                                style={{
                                    left: `${20 + i * 15}%`,
                                    top: `${25 + (i % 2) * 35}%`,
                                }}
                                animate={{
                                    y: [-12, -35, -12],
                                    x: [0, Math.sin(i) * 8, 0],
                                    opacity: [0, 1, 0],
                                    scale: [1, 1.3, 1],
                                }}
                                transition={{
                                    duration: 2.5,
                                    delay: i * 0.2,
                                    repeat: Number.POSITIVE_INFINITY,
                                }}
                            />
                        ))}

                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent" />
                    </div>

                    <CardContent className="p-6 relative z-10">
                        <motion.div
                            className="flex items-center justify-between mb-3"
                            whileHover={{ x: 2 }}
                        >
                            <Badge className="bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-medium">
                                {project.category}
                            </Badge>
                        </motion.div>

                        <motion.h3
                            className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors"
                            whileHover={{
                                textShadow: "0 0 20px rgba(16, 185, 129, 0.5)",
                                scale: 1.02,
                            }}
                        >
                            {project.title}
                        </motion.h3>

                        <p className="text-zinc-300 mb-4 leading-relaxed line-clamp-3">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies
                                .slice(0, 4)
                                .map((tech: string, techIndex: number) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: techIndex * 0.1 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        <Badge
                                            variant="outline"
                                            className="border-zinc-500 text-zinc-300 hover:border-emerald-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 text-xs"
                                        >
                                            {tech}
                                        </Badge>
                                    </motion.div>
                                ))}
                            {project.technologies.length > 4 && (
                                <Badge
                                    variant="outline"
                                    className="border-zinc-500 text-zinc-300 text-xs"
                                >
                                    +{project.technologies.length - 4}
                                </Badge>
                            )}
                        </div>

                        <div className="flex gap-3">
                            <motion.a
                                href={project.github}
                                className="flex-1"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <AnimatedButton
                                    variant="outline"
                                    size="sm"
                                    className="w-full border-zinc-500 hover:border-emerald-400"
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    Code
                                </AnimatedButton>
                            </motion.a>
                            <motion.a
                                href={project.demo}
                                className="flex-1"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <AnimatedButton
                                    size="sm"
                                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                                >
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Demo
                                </AnimatedButton>
                            </motion.a>
                        </div>
                    </CardContent>
                </Card>
            </MagneticElement>
        </motion.div>
    );
};

export default function ProjectsSection() {
    const isMobile = useMobile();
    const { scrollY } = useScroll();

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const sectionY = useTransform(scrollY, [0, 1000], [0, -50]);

    return (
        <section
            id="projects"
            className="py-20 md:py-32 relative overflow-hidden"
        >
            {/* Enhanced Background Effects - matching hero section pattern */}
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

                {/* Animated mesh gradient overlay - matching hero section */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `radial-gradient(circle at ${
                            50 + smoothMouseX.get()
                        }% ${50 + smoothMouseY.get()}%, 
                            rgba(16, 185, 129, 0.15) 0%, 
                            rgba(20, 184, 166, 0.1) 25%, 
                            transparent 50%),
                        radial-gradient(circle at ${
                            30 + smoothMouseX.get() * -1
                        }% ${70 + smoothMouseY.get() * -1}%, 
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

                {/* Grid pattern - matching hero section */}
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

            {/* Floating Decorative Elements - matching hero section pattern */}
            {!isMobile &&
                Array.from({ length: 10 }, (_, i) => ({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    delay: Math.random() * 5,
                    duration: 10 + Math.random() * 10,
                })).map((element) => (
                    <motion.div
                        key={element.id}
                        className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400/60 to-teal-400/60 rounded-full"
                        style={{
                            left: `${element.x}%`,
                            top: `${element.y}%`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            x: [-10, 10, -10],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: element.duration,
                            delay: element.delay,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                ))}

            <motion.div
                className="container mx-auto relative z-10"
                style={{ y: sectionY }}
            >
                {/* Enhanced Section Header - consistent with other sections */}
                <SectionHeader
                    title="Featured"
                    highlight="Projects"
                    icon={<Rocket className="h-8 w-8 text-emerald-400" />}
                    description="Showcasing innovative solutions built with cutting-edge technologies"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {/* Featured large project */}
                    <ProjectCard
                        key={projects[0].slug}
                        project={projects[0]}
                        index={0}
                        layout="large"
                    />

                    {/* Second project */}
                    <ProjectCard
                        key={projects[1].slug}
                        project={projects[1]}
                        index={1}
                    />

                    {/* Third project with horizontal layout */}
                    <ProjectCard
                        key={projects[2].slug}
                        project={projects[2]}
                        index={2}
                        layout="compact"
                    />

                    {/* Fourth project with vertical layout */}
                    <ProjectCard
                        key={projects[3].slug}
                        project={projects[3]}
                        index={3}
                        layout="compact"
                    />

                    {/* Fifth project with compact layout */}
                    <ProjectCard
                        key={projects[4].slug}
                        project={projects[4]}
                        index={4}
                        layout="compact"
                    />
                </div>

                {/* Enhanced CTA section with consistent styling */}
                <div className="flex justify-center items-center">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <MagneticElement strength={80}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <AnimatedButton
                                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25"
                                    dataCursorText="Let's Talk"
                                >
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        View Projects
                                    </motion.div>
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </AnimatedButton>
                            </motion.div>
                        </MagneticElement>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
