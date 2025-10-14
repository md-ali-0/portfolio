"use client";

import { useMobile } from "@/hooks/use-mobile";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
    ArrowRight,
    Briefcase,
    Code,
    Database,
    Globe,
    Server,
} from "lucide-react";
import { useEffect } from "react";

export default function AboutSection() {
    const isMobile = useMobile();

    // Mouse position for parallax effects - matching hero section
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

        if (!isMobile) {
            window.addEventListener("mousemove", handleMouseMove);
            return () =>
                window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [isMobile, mouseX, mouseY]);

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
    ];

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
            description:
                "Creating robust server-side applications with Node.js, Express, and RESTful API development.",
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
            description:
                "End-to-end web application development from concept to deployment with modern tech stacks.",
        },
    ];

    const experiences = [
        {
            icon: <Briefcase className="h-5 w-5" />,
            title: "Full Stack Web Developer",
            company: "Naria It Solutions",
            period: "March 2025 - Present",
            description:
                "Leading development of cutting-edge web applications with a focus on performance and user experience.",
            achievements: [
                "Architected and deployed 5+ production applications using Next.js and React",
                "Optimized application performance resulting in 40% faster load times",
                "Mentored junior developers and established coding best practices",
            ],
            technologies: ["Next.js", "React", "TypeScript", "Node.js"],
            color: "from-emerald-500 to-teal-500",
        },
        {
            icon: <Code className="h-5 w-5" />,
            title: "Full Stack Web Developer",
            company: "Edupy Academy",
            period: "May 2024 - February 2025",
            description:
                "Developed comprehensive educational platforms and learning management systems.",
            achievements: [
                "Built scalable LMS platform serving 1000+ students",
                "Implemented real-time features using WebSocket technology",
                "Collaborated with design team to create pixel-perfect UI components",
            ],
            technologies: ["React", "Node.js", "WebSocket", "MongoDB"],
            color: "from-teal-500 to-cyan-500",
        },
    ];

    return (
        <section
            id="about"
            className="min-h-screen relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
        >
            <div className="absolute inset-0">
                {/* Main gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />

                {/* Animated mesh gradient overlay */}
                <div
                    className="absolute inset-0 opacity-5 sm:opacity-10"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize:
                            "20px 20px sm:30px sm:30px md:40px md:40px lg:50px lg:50px",
                    }}
                />
            </div>

            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
                {/* Simplified stats section with simple, clean cards */}
                <motion.div
                    className="relative mb-12 sm:mb-16 md:mb-20 lg:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-10">
                        {statistics.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="relative group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                            >
                                <div className="relative h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm overflow-hidden">
                                    {/* Animated corner accents */}
                                    <motion.div
                                        className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-emerald-500/50 rounded-tl-2xl"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: index * 0.15 + 0.3,
                                            duration: 0.5,
                                        }}
                                    />
                                    <motion.div
                                        className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-teal-500/50 rounded-br-2xl"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: index * 0.15 + 0.4,
                                            duration: 0.5,
                                        }}
                                    />

                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-teal-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:via-teal-500/5 group-hover:to-cyan-500/10 transition-all duration-500" />

                                    <div className="relative flex items-center justify-between gap-6">
                                        <div className="flex-1">
                                            <motion.div
                                                className="text-3xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 mb-2"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                }}
                                            >
                                                {stat.number}
                                            </motion.div>
                                            <div className="space-y-1">
                                                <div className="text-zinc-400 text-base">
                                                    {stat.label}
                                                </div>
                                                <div className="text-white text-lg font-bold">
                                                    {stat.sublabel}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Vertical divider with gradient */}
                                        <div className="w-1 h-24 bg-gradient-to-b from-emerald-500/20 via-teal-500/40 to-cyan-500/20 rounded-full" />

                                        {/* Index number */}
                                        <div className="text-4xl md:text-6xl font-black text-zinc-800/30 group-hover:text-emerald-500/10 transition-colors duration-500">
                                            {(index + 1)
                                                .toString()
                                                .padStart(2, "0")}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="text-center mb-16 sm:mb-20 md:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/tight font-bold text-slate-400 leading-loose mb-4 sm:mb-6"
                        whileInView={{
                            backgroundPosition: [
                                "0% 50%",
                                "100% 50%",
                                "0% 50%",
                            ],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    >
                        Creating{" "}
                        <motion.span
                            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent relative"
                            whileHover={{ scale: 1.05 }}
                            style={{
                                backgroundSize: "200% 200%",
                            }}
                        >
                            scalable web applications
                            <motion.div
                                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                        </motion.span>
                        <br className="hidden sm:block" />
                        <span className="block sm:inline">
                            {" "}
                            with modern technologies
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed px-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Passionate about building seamless user experiences and
                        robust backend solutions that drive business growth and
                        user satisfaction.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`relative group`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className={`relative h-full p-8 md:p-10 rounded-2xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 overflow-hidden group-hover:border-emerald-500/50 transition-all duration-500`}
                            >
                                {/* Animated gradient background */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-teal-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    initial={false}
                                    whileHover={{
                                        background: [
                                            "linear-gradient(135deg, rgba(16,185,129,0) 0%, rgba(20,184,166,0) 50%, rgba(6,182,212,0) 100%)",
                                            "linear-gradient(135deg, rgba(16,185,129,0.05) 0%, rgba(20,184,166,0.03) 50%, rgba(6,182,212,0.05) 100%)",
                                        ],
                                    }}
                                    transition={{ duration: 0.5 }}
                                />

                                {/* Grid pattern overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                                    style={{
                                        backgroundImage: `
                        linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
                      `,
                                        backgroundSize: "20px 20px",
                                    }}
                                />

                                <div
                                    className={`relative z-10`}
                                >
                                    <motion.div
                                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl mb-6 text-emerald-400 border border-emerald-500/20 group-hover:border-emerald-400/40 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-500`}
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: [0, -5, 5, 0],
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {service.icon}
                                    </motion.div>

                                    <div
                                    >
                                        <h3
                                            className={`text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-emerald-100 transition-colors duration-300`}
                                        >
                                            {service.title}
                                        </h3>
                                        <p
                                            className={`text-zinc-400 text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors duration-300`}
                                        >
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Corner accent */}
                                <motion.div
                                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/0 to-teal-500/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    initial={false}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mb-16 sm:mb-20 md:mb-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <motion.h3
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Professional{" "}
                            <span className="text-shimmer">Timeline</span>
                        </motion.h3>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
                            Each role has been a stepping stone in my journey of
                            growth and impact.
                        </p>
                    </div>

                    <div className="relative mx-auto">
                        {/* Central timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 via-teal-500 to-emerald-700 hidden lg:block rounded-md" />

                        <div className="space-y-16">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative flex items-center ${
                                        index % 2 === 0
                                            ? "lg:flex-row"
                                            : "lg:flex-row-reverse"
                                    }`}
                                    initial={{
                                        opacity: 0,
                                        x: index % 2 === 0 ? -100 : 100,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.3,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-zinc-950 timeline-pulse hidden lg:block z-10" />

                                    <motion.div
                                        className={`w-full lg:w-6/12 ${
                                            index % 2 === 0
                                                ? "lg:pr-8"
                                                : "lg:pl-8"
                                        }`}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="morph-card p-8 relative overflow-hidden rounded-xl sm:rounded-2xl">
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5`}
                                            />

                                            <div className="relative z-10">
                                                <div className="flex items-start gap-4 mb-6">
                                                    <motion.div
                                                        className="flex-shrink-0 w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center"
                                                        whileHover={{
                                                            rotate: 15,
                                                            scale: 1.1,
                                                        }}
                                                    >
                                                        {exp.icon}
                                                    </motion.div>
                                                    <div className="flex-1">
                                                        <h4 className="text-xl font-bold text-white mb-2">
                                                            {exp.title}
                                                        </h4>
                                                        <p className="text-emerald-400 font-semibold mb-1">
                                                            {exp.company}
                                                        </p>
                                                        <span className="text-zinc-500 text-sm">
                                                            {exp.period}
                                                        </span>
                                                    </div>
                                                </div>

                                                <p className="text-zinc-400 mb-6 leading-relaxed">
                                                    {exp.description}
                                                </p>

                                                <div className="space-y-3 mb-6">
                                                    {exp.achievements.map(
                                                        (
                                                            achievement,
                                                            achIndex
                                                        ) => (
                                                            <motion.div
                                                                key={achIndex}
                                                                className="flex items-start gap-3"
                                                                initial={{
                                                                    opacity: 0,
                                                                    x: -20,
                                                                }}
                                                                whileInView={{
                                                                    opacity: 1,
                                                                    x: 0,
                                                                }}
                                                                transition={{
                                                                    duration: 0.5,
                                                                    delay:
                                                                        achIndex *
                                                                        0.1,
                                                                }}
                                                                viewport={{
                                                                    once: true,
                                                                }}
                                                            >
                                                                <ArrowRight className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                                                <span className="text-zinc-300 text-sm">
                                                                    {
                                                                        achievement
                                                                    }
                                                                </span>
                                                            </motion.div>
                                                        )
                                                    )}
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map(
                                                        (tech, techIndex) => (
                                                            <motion.span
                                                                key={techIndex}
                                                                className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-300"
                                                                whileHover={{
                                                                    scale: 1.05,
                                                                    y: -2,
                                                                }}
                                                                initial={{
                                                                    opacity: 0,
                                                                    scale: 0.8,
                                                                }}
                                                                whileInView={{
                                                                    opacity: 1,
                                                                    scale: 1,
                                                                }}
                                                                transition={{
                                                                    duration: 0.3,
                                                                    delay:
                                                                        techIndex *
                                                                        0.05,
                                                                }}
                                                                viewport={{
                                                                    once: true,
                                                                }}
                                                            >
                                                                {tech}
                                                            </motion.span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
