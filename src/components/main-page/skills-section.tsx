"use client";

import { useMobile } from "@/hooks/use-mobile";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Box,
  Code,
  Cpu,
  Database,
  Figma,
  Github,
  Globe,
  Server,
  Sparkles,
  Star,
  Triangle,
  Wrench,
  Zap,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import SectionHeader from "../section-header";

export default function SkillsSection() {
    const isMobile = useMobile();
    const { scrollY } = useScroll();
    const [activeCategory, setActiveCategory] = useState("all");

    // Mouse position for parallax effects
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Scroll-based animations
    const sectionY = useTransform(scrollY, [0, 1500], [0, -50]);

    const skills = [
        // Frontend Skills
        {
            name: "React",
            icon: <Globe className="h-5 w-5" />,
            category: "frontend",
            color: "emerald",
            description: "Building dynamic user interfaces",
            experience: "2+ years",
            projects: "18+",
            level: 95,
        },
        {
            name: "Next.js",
            icon: <Triangle className="h-5 w-5" />,
            category: "frontend",
            color: "teal",
            description: "Full-stack React framework",
        },
        {
            name: "TypeScript",
            icon: <Code className="h-5 w-5" />,
            category: "frontend",
            color: "emerald",
            description: "Type-safe development",
        },
        {
            name: "Tailwind CSS",
            icon: <Zap className="h-5 w-5" />,
            category: "frontend",
            color: "cyan",
            description: "Utility-first CSS framework",
        },
        {
            name: "Framer Motion",
            icon: <Sparkles className="h-5 w-5" />,
            category: "frontend",
            color: "teal",
            description: "Animation and interaction library",
        },

        // Backend Skills
        {
            name: "Node.js",
            icon: <Server className="h-5 w-5" />,
            category: "backend",
            color: "teal",
            description: "Server-side JavaScript runtime",
        },
        {
            name: "MongoDB",
            icon: <Database className="h-5 w-5" />,
            category: "backend",
            color: "emerald",
            description: "NoSQL document database",
        },
        {
            name: "PostgreSQL",
            icon: <Database className="h-5 w-5" />,
            category: "backend",
            color: "cyan",
            description: "Advanced relational database",
        },
        {
            name: "GraphQL",
            icon: <Globe className="h-5 w-5" />,
            category: "backend",
            color: "teal",
            description: "Query language for APIs",
        },

        // Tools
        {
            name: "Git",
            icon: <Github className="h-5 w-5" />,
            category: "tools",
            color: "emerald",
            description: "Version control system",
        },
        {
            name: "Docker",
            icon: <Box className="h-5 w-5" />,
            category: "tools",
            color: "cyan",
            description: "Application containerization",
        },
        {
            name: "Figma",
            icon: <Figma className="h-5 w-5" />,
            category: "tools",
            color: "teal",
            description: "UI/UX design platform",
        },
    ];

    const categories = [
        {
            key: "all",
            label: "All Skills",
            icon: <Cpu className="h-4 w-4" />,
            count: skills.length,
        },
        {
            key: "frontend",
            label: "Frontend",
            icon: <Code className="h-4 w-4" />,
            count: skills.filter((s) => s.category === "frontend").length,
        },
        {
            key: "backend",
            label: "Backend",
            icon: <Server className="h-4 w-4" />,
            count: skills.filter((s) => s.category === "backend").length,
        },
        {
            key: "tools",
            label: "Tools",
            icon: <Wrench className="h-4 w-4" />,
            count: skills.filter((s) => s.category === "tools").length,
        },
    ];

    const filteredSkills =
        activeCategory === "all"
            ? skills
            : skills.filter((skill) => skill.category === activeCategory);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isMobile) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
            const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
            mouseX.set(x * 20);
            mouseY.set(y * 20);
        }
    };

    return (
        <section
            id="skills"
            className="min-h-screen py-20 md:py-32 relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Enhanced Background Effects - Matching Hero Section */}
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
                        background: `radial-gradient(circle at ${
                            50 + smoothMouseX.get()
                        }% ${50 + smoothMouseY.get()}%, 
              rgba(16, 185, 129, 0.15) 0%, 
              rgba(20, 184, 166, 0.1) 25%, 
              transparent 50%),
            radial-gradient(circle at ${30 + smoothMouseX.get() * -1}% ${
                            70 + smoothMouseY.get() * -1
                        }%, 
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
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            {/* Floating Particles - Matching Hero Section */}
            {!isMobile &&
                Array.from({ length: 20 }, (_, i) => ({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    delay: Math.random() * 2,
                    duration: 6 + Math.random() * 4,
                    size: 0.5 + Math.random() * 1.5,
                })).map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-sm"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: `${particle.size * 4}px`,
                            height: `${particle.size * 4}px`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            x: [-10, 10, -10],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                ))}

            <motion.div
                className="container mx-auto relative z-10"
                style={{ y: sectionY }}
            >
                <SectionHeader
                    title="Technical"
                    highlight="Skills"
                    icon={<Cpu className="h-8 w-8 text-emerald-400" />}
                    description="A showcase of my development expertise and technical proficiency"
                />

                {/* Enhanced Category Filter */}
                <motion.div
                    className="flex justify-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-wrap justify-center bg-zinc-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-2 gap-2">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category.key}
                                onClick={() => setActiveCategory(category.key)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
                                    activeCategory === category.key
                                        ? "text-black shadow-lg shadow-emerald-500/25"
                                        : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                                }`}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 200,
                                }}
                                viewport={{ once: true }}
                            >
                                {activeCategory === category.key && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl"
                                        layoutId="activeTab"
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30,
                                        }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center space-x-2">
                                    <motion.div
                                        animate={{
                                            rotate:
                                                activeCategory === category.key
                                                    ? [0, 360]
                                                    : 0,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {category.icon}
                                    </motion.div>
                                    <span className="text-sm font-medium">
                                        {category.label}
                                    </span>
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full ${
                                            activeCategory === category.key
                                                ? "bg-black/20 text-black"
                                                : "bg-emerald-500/20 text-emerald-400"
                                        }`}
                                    >
                                        {category.count}
                                    </span>
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Enhanced Skills Grid */}
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {filteredSkills.map((skill, index) => {
                            const colorClasses = {
                                emerald: {
                                    border: "border-emerald-500/20 hover:border-emerald-500/50",
                                    gradient:
                                        "from-emerald-500/5 via-transparent to-teal-500/5",
                                    iconBg: "from-emerald-500 to-teal-500",
                                    glow: "shadow-emerald-500/25",
                                    particles:
                                        "from-emerald-400/30 to-teal-400/30",
                                },
                                teal: {
                                    border: "border-teal-500/20 hover:border-teal-500/50",
                                    gradient:
                                        "from-teal-500/5 via-transparent to-emerald-500/5",
                                    iconBg: "from-teal-500 to-emerald-500",
                                    glow: "shadow-teal-500/25",
                                    particles:
                                        "from-teal-400/30 to-emerald-400/30",
                                },
                                cyan: {
                                    border: "border-cyan-500/20 hover:border-cyan-500/50",
                                    gradient:
                                        "from-cyan-500/5 via-transparent to-teal-500/5",
                                    iconBg: "from-cyan-500 to-teal-500",
                                    glow: "shadow-cyan-500/25",
                                    particles:
                                        "from-cyan-400/30 to-teal-400/30",
                                },
                            };

                            const colors =
                                colorClasses[
                                    skill.color as keyof typeof colorClasses
                                ];

                            return (
                                <motion.div
                                    key={`${skill.name}-${activeCategory}`}
                                    className={`bg-zinc-900/40 backdrop-blur-sm border ${colors.border} rounded-2xl overflow-hidden group transition-all duration-500 relative`}
                                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -30, scale: 0.9 }}
                                    layout
                                >
                                    {/* Enhanced Background Gradient */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                                        animate={{
                                            backgroundPosition: [
                                                "0% 0%",
                                                "100% 100%",
                                                "0% 0%",
                                            ],
                                        }}
                                        transition={{
                                            duration: 15,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "linear",
                                        }}
                                    />

                                    {/* Floating Particles on Hover */}
                                    {!isMobile && (
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                                            {Array.from(
                                                { length: 6 },
                                                (_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className={`absolute w-1 h-1 bg-gradient-to-r ${colors.particles} rounded-full blur-sm`}
                                                        style={{
                                                            left: `${
                                                                15 + i * 12
                                                            }%`,
                                                            top: `${
                                                                20 +
                                                                (i % 2) * 40
                                                            }%`,
                                                        }}
                                                        animate={{
                                                            y: [-15, 15, -15],
                                                            x: [-8, 8, -8],
                                                            opacity: [
                                                                0.2, 0.8, 0.2,
                                                            ],
                                                            scale: [1, 1.5, 1],
                                                        }}
                                                        transition={{
                                                            duration:
                                                                3 + i * 0.5,
                                                            repeat: Number.POSITIVE_INFINITY,
                                                            ease: "easeInOut",
                                                            delay: i * 0.2,
                                                        }}
                                                    />
                                                )
                                            )}
                                        </div>
                                    )}

                                    <div className="p-6 text-center relative z-10">
                                        {/* Enhanced Icon */}
                                        <div className="flex justify-center mb-4">
                                            <motion.div
                                                className={`p-4 rounded-2xl bg-gradient-to-r ${colors.iconBg} text-black relative overflow-hidden`}
                                                whileHover={{
                                                    rotate: [0, -10, 10, 0],
                                                    scale: 1.1,
                                                }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <motion.div
                                                    className="absolute inset-0 bg-white/20 rounded-2xl"
                                                    animate={{
                                                        x: ["-100%", "100%"],
                                                        opacity: [0, 0.5, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Number.POSITIVE_INFINITY,
                                                        repeatDelay: 3,
                                                        ease: "easeInOut",
                                                    }}
                                                />
                                                {skill.icon}
                                            </motion.div>
                                        </div>

                                        {/* Enhanced Title */}
                                        <motion.h3
                                            className="text-lg md:text-xl font-bold text-white mb-2"
                                            style={{
                                                x: !isMobile
                                                    ? smoothMouseX.get() * -0.2
                                                    : 0,
                                            }}
                                        >
                                            {skill.name}
                                        </motion.h3>

                                        {/* Enhanced Description */}
                                        <motion.p
                                            className="text-zinc-400 text-sm leading-relaxed mb-4"
                                            style={{
                                                y: !isMobile
                                                    ? smoothMouseY.get() * -0.1
                                                    : 0,
                                            }}
                                        >
                                            {skill.description}
                                        </motion.p>
                                    </div>

                                    {/* Corner Decorations */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <motion.div
                                            animate={{ rotate: [0, 360] }}
                                            transition={{
                                                duration: 8,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "linear",
                                            }}
                                        >
                                            <Star className="h-3 w-3 text-emerald-400/50" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
