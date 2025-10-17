"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
    github?: string;
    featured?: boolean;
    solution?: string;
    stats?: { label: string; value: string }[];
};

export default function ProjectsSection() {
    const [active, setActive] = useState(0);

    // Mouse position for parallax effects
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth - 0.5) * 20;
            const y = (clientY / innerHeight - 0.5) * 20;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const projects: Project[] = [
        {
            title: "E-Commerce Platform",
            description:
                "A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.",
            image: "https://images.pexels.com/photos/34170816/pexels-photo-34170816.jpeg",
            technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
            link: "https://example.com",
            github: "https://github.com",
            featured: true,
            stats: [
                { label: "Performance", value: "98/100" },
                { label: "Conversion Rate", value: "+35%" },
                { label: "Load Time", value: "1.2s" },
            ],
        },
        {
            title: "AI Content Generator",
            description:
                "Intelligent content generation tool powered by AI, featuring real-time collaboration and version control.",
            image: "https://images.pexels.com/photos/33373140/pexels-photo-33373140.jpeg",
            technologies: ["React", "TypeScript", "OpenAI API", "Tailwind CSS"],
            link: "https://example.com",
            github: "https://github.com",
            stats: [
                { label: "User Satisfaction", value: "4.8★" },
                { label: "Content Quality", value: "94%" },
                { label: "Generation Speed", value: "2.5s" },
            ],
        },
        {
            title: "Project Management App",
            description:
                "Collaborative project management platform with real-time updates, task tracking, and team communication.",
            image: "https://images.pexels.com/photos/34284811/pexels-photo-34284811.jpeg",
            technologies: ["Next.js", "WebSocket", "MongoDB", "Redux"],
            link: "https://example.com",
            github: "https://github.com",
            stats: [
                { label: "Team Productivity", value: "+45%" },
                { label: "Active Teams", value: "500+" },
                { label: "Uptime", value: "99.8%" },
            ],
        },
        {
            title: "Analytics Dashboard",
            description:
                "Comprehensive analytics platform with interactive charts, real-time data visualization, and custom reporting.",
            image: "https://images.pexels.com/photos/34316104/pexels-photo-34316104.jpeg",
            technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
            link: "https://example.com",
            github: "https://github.com",
            stats: [
                { label: "Data Processing", value: "1M+/sec" },
                { label: "Visualization Speed", value: "<500ms" },
                { label: "Accuracy", value: "99.99%" },
            ],
        },
        {
            title: "Mobile Learning App",
            description:
                "Cross-platform learning application with interactive lessons, progress tracking, and gamification features.",
            image: "https://images.pexels.com/photos/33488221/pexels-photo-33488221.jpeg",
            technologies: ["React Native", "Firebase", "TypeScript"],
            link: "https://example.com",
            github: "https://github.com",
            stats: [
                { label: "Completion Rate", value: "85%" },
                { label: "Daily Active Users", value: "25K+" },
                { label: "Avg Session", value: "18 min" },
            ],
        },
    ];

    const handleNext = () => {
        setActive((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };

    return (
        <section
            id="projects"
            className="min-h-screen relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
        >
            {/* Background */}
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
                    className="absolute inset-0 opacity-20"
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
                        opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <div
                    className="absolute inset-0 opacity-5"
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
                {/* Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Featured{" "}
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Explore my latest work showcasing full-stack
                        development, innovative solutions, and cutting-edge
                        technologies.
                    </motion.p>
                </motion.div>

                {/* Projects Carousel */}
                <motion.div
                    className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* Image Section */}
                    <div className="relative h-[500px] w-full">
                        <AnimatePresence>
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotateY(),
                                    }}
                                    animate={{
                                        opacity: index === active ? 1 : 0.7,
                                        scale: index === active ? 1 : 0.95,
                                        z: index === active ? 0 : -100,
                                        rotate: index === active ? 0 : randomRotateY(),
                                        zIndex:
                                            index === active
                                                ? 999
                                                : projects.length + 2 - index,
                                        y: index === active ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotateY(),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        width={500}
                                        height={500}
                                        draggable={false}
                                        className="h-full w-full rounded-3xl object-cover object-center"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-between py-4">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{
                                    y: 30,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: index === active ? 0 : 30,
                                    opacity: index === active ? 1 : 0,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                                className={`space-y-6 ${
                                    index === active
                                        ? "pointer-events-auto"
                                        : "pointer-events-none absolute"
                                }`}
                            >
                                {/* Title */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, ease: "easeOut" }}
                                >
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </motion.div>
                                {project.stats && project.stats.length > 0 && (
                                    <motion.div
                                        className="grid grid-cols-3 gap-3 pt-2"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.25,
                                            ease: "easeOut",
                                        }}
                                    >
                                        {project.stats.map((stat, idx) => (
                                            <div
                                                key={stat.label}
                                                className="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg hover:border-emerald-500/30 transition-all duration-300"
                                            >
                                                <p className="text-xs text-zinc-400 mb-1">
                                                    {stat.label}
                                                </p>
                                                <p className="text-lg font-bold text-emerald-400">
                                                    {stat.value}
                                                </p>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}

                                {/* Technologies */}
                                <motion.div
                                    className="space-y-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, ease: "easeOut" }}
                                >
                                    <p className="text-sm font-semibold text-zinc-300">
                                        Technologies Used
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(
                                            (tech, idx) => (
                                                <motion.span
                                                    key={tech}
                                                    className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-300"
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0.8,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                    }}
                                                    transition={{
                                                        delay:
                                                            0.35 + idx * 0.04,
                                                        ease: "easeOut",
                                                    }}
                                                    whileHover={{
                                                        scale: 1.05,
                                                        y: -2,
                                                    }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            )
                                        )}
                                    </div>
                                </motion.div>

                                {/* Links */}
                                <motion.div
                                    className="flex gap-4 pt-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, ease: "easeOut" }}
                                >
                                    {project.link && (
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            View Project
                                            <ExternalLink className="h-4 w-4" />
                                        </motion.a>
                                    )}
                                    {project.github && (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            GitHub
                                            <Github className="h-4 w-4" />
                                        </motion.a>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}

                        <div className="flex gap-4 pt-8">
                            <motion.button
                                onClick={handlePrev}
                                className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center group/button hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 relative overflow-hidden"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0"
                                    animate={{
                                        x: ["-100%", "100%"],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "linear",
                                    }}
                                />
                                <ArrowRight className="h-5 w-5 text-foreground group-hover/button:rotate-180 transition-transform duration-500 rotate-180 relative z-10" />
                            </motion.button>
                            <motion.button
                                onClick={handleNext}
                                className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center group/button hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 relative overflow-hidden"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0"
                                    animate={{
                                        x: ["-100%", "100%"],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "linear",
                                    }}
                                />
                                <ArrowRight className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-500 relative z-10" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}