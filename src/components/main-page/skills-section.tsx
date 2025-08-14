"use client";

import MagneticElement from "@/components/magnetic-element";
import { Card, CardContent } from "@/components/ui/card";
import { useMobile } from "@/hooks/use-mobile";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Box,
  Code,
  Cpu,
  Database,
  Figma,
  Github,
  Globe,
  Layers,
  Package,
  Server,
  Sparkles,
  Terminal,
  TestTube,
  Triangle,
  Wrench,
  Zap,
} from "lucide-react";
import SectionHeader from "../section-header";

export default function SkillsSection() {
    const isMobile = useMobile();
    const { scrollY } = useScroll();

    const sectionY = useTransform(scrollY, [0, 1500], [0, -50]);

    const frontendSkills = [
        {
            name: "React / Next.js",
            level: "Expert",
            years: "3+",
            icon: <Globe className="h-4 w-4" />,
            color: "emerald",
        },
        {
            name: "JavaScript / TypeScript",
            level: "Expert",
            years: "4+",
            icon: <Code className="h-4 w-4" />,
            color: "emerald",
        },
        {
            name: "HTML5 / CSS3",
            level: "Expert",
            years: "5+",
            icon: <Layers className="h-4 w-4" />,
            color: "emerald",
        },
        {
            name: "Tailwind CSS",
            level: "Advanced",
            years: "2+",
            icon: <Zap className="h-4 w-4" />,
            color: "teal",
        },
        {
            name: "Framer Motion",
            level: "Advanced",
            years: "2+",
            icon: <Sparkles className="h-4 w-4" />,
            color: "teal",
        },
    ];

    const backendSkills = [
        {
            name: "Node.js / Express",
            level: "Expert",
            years: "3+",
            icon: <Server className="h-4 w-4" />,
            color: "emerald",
        },
        {
            name: "MongoDB / PostgreSQL",
            level: "Advanced",
            years: "3+",
            icon: <Database className="h-4 w-4" />,
            color: "teal",
        },
        {
            name: "REST API / GraphQL",
            level: "Advanced",
            years: "2+",
            icon: <Globe className="h-4 w-4" />,
            color: "teal",
        },
        {
            name: "Firebase / Supabase",
            level: "Intermediate",
            years: "2+",
            icon: <Cpu className="h-4 w-4" />,
            color: "cyan",
        },
        {
            name: "AWS / Vercel",
            level: "Intermediate",
            years: "1+",
            icon: <Triangle className="h-4 w-4" />,
            color: "cyan",
        },
    ];

    const tools = [
        {
            name: "Git",
            icon: <Github className="h-8 w-8" />,
            color: "from-orange-400 to-red-500",
        },
        {
            name: "VS Code",
            icon: <Code className="h-8 w-8" />,
            color: "from-blue-400 to-cyan-500",
        },
        {
            name: "Figma",
            icon: <Figma className="h-8 w-8" />,
            color: "from-purple-400 to-pink-500",
        },
        {
            name: "Docker",
            icon: <Box className="h-8 w-8" />,
            color: "from-cyan-400 to-blue-500",
        },
        {
            name: "Jest",
            icon: <TestTube className="h-8 w-8" />,
            color: "from-green-400 to-emerald-500",
        },
        {
            name: "Webpack",
            icon: <Package className="h-8 w-8" />,
            color: "from-yellow-400 to-orange-500",
        },
        {
            name: "NPM",
            icon: <Package className="h-8 w-8" />,
            color: "from-red-400 to-rose-500",
        },
        {
            name: "Vercel",
            icon: <Triangle className="h-8 w-8" />,
            color: "from-zinc-400 to-zinc-600",
        },
        {
            name: "GitHub",
            icon: <Github className="h-8 w-8" />,
            color: "from-zinc-400 to-zinc-700",
        },
        {
            name: "Terminal",
            icon: <Terminal className="h-8 w-8" />,
            color: "from-emerald-400 to-teal-500",
        },
    ];

    return (
        <section
            id="skills"
            className="py-20 md:py-32 relative overflow-hidden"
        >
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_35%,rgba(16,185,129,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_75%,rgba(6,182,212,0.1),transparent_50%)]" />

                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
                        `,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            {!isMobile &&
                Array.from({ length: 8 }, (_, i) => ({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    delay: Math.random() * 2,
                    duration: 10 + Math.random() * 5, // Slower animations
                    size: 1 + Math.random() * 1,
                })).map((element) => (
                    <motion.div
                        key={element.id}
                        className="absolute rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20"
                        style={{
                            left: `${element.x}%`,
                            top: `${element.y}%`,
                            width: `${element.size * 6}px`,
                            height: `${element.size * 6}px`,
                        }}
                        animate={{
                            y: [-15, 15, -15],
                            opacity: [0.2, 0.5, 0.2],
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
                <SectionHeader
                    title="My"
                    highlight="Skills"
                    icon={<Cpu className="h-8 w-8 text-emerald-400" />}
                    description="Mastering cutting-edge technologies to build exceptional
                        digital experiences"
                />
                <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Frontend Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div className="relative mb-12">
                            <motion.div
                                className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"
                                initial={{ height: 0 }}
                                whileInView={{ height: "100%" }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                viewport={{ once: true }}
                            />

                            <div className="flex items-center space-x-4 mb-8">
                                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500">
                                    <Code className="h-6 w-6 text-black" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                                        Frontend Development
                                    </h3>
                                    <p className="text-zinc-500 mt-1">
                                        User Interface & Experience
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="space-y-6">
                            {frontendSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="group"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.05,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-4 group-hover:border-emerald-500/30 transition-all duration-300">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
                                                    {skill.icon}
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold group-hover:text-emerald-400 transition-colors">
                                                        {skill.name}
                                                    </h4>
                                                    <p className="text-sm text-zinc-500">
                                                        {skill.years} experience
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    skill.level === "Expert"
                                                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                                        : skill.level ===
                                                          "Advanced"
                                                        ? "bg-teal-500/20 text-teal-400 border border-teal-500/30"
                                                        : "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                                                }`}
                                            >
                                                {skill.level}
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-1 mt-3">
                                            {[1, 2, 3, 4, 5].map((dot) => (
                                                <motion.div
                                                    key={dot}
                                                    className={`w-2 h-2 rounded-full ${
                                                        (skill.level ===
                                                            "Expert" &&
                                                            dot <= 5) ||
                                                        (skill.level ===
                                                            "Advanced" &&
                                                            dot <= 4) ||
                                                        (skill.level ===
                                                            "Intermediate" &&
                                                            dot <= 3)
                                                            ? "bg-emerald-400"
                                                            : "bg-zinc-700"
                                                    }`}
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    transition={{
                                                        delay:
                                                            index * 0.05 +
                                                            dot * 0.02,
                                                    }}
                                                    viewport={{ once: true }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Backend Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div className="relative mb-12">
                            <motion.div
                                className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full"
                                initial={{ height: 0 }}
                                whileInView={{ height: "100%" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            />

                            <div className="flex items-center space-x-4 mb-8">
                                <div className="p-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500">
                                    <Server className="h-6 w-6 text-black" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">
                                        Backend Development
                                    </h3>
                                    <p className="text-zinc-500 mt-1">
                                        Server & Database Logic
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="space-y-6">
                            {backendSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="group"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.05,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: -5 }}
                                >
                                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-4 group-hover:border-teal-500/30 transition-all duration-300">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="text-teal-400 group-hover:text-teal-300 transition-colors">
                                                    {skill.icon}
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold group-hover:text-teal-400 transition-colors">
                                                        {skill.name}
                                                    </h4>
                                                    <p className="text-sm text-zinc-500">
                                                        {skill.years} experience
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    skill.level === "Expert"
                                                        ? "bg-teal-500/20 text-teal-400 border border-teal-500/30"
                                                        : skill.level ===
                                                          "Advanced"
                                                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                                        : "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                                                }`}
                                            >
                                                {skill.level}
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-1 mt-3">
                                            {[1, 2, 3, 4, 5].map((dot) => (
                                                <motion.div
                                                    key={dot}
                                                    className={`w-2 h-2 rounded-full ${
                                                        (skill.level ===
                                                            "Expert" &&
                                                            dot <= 5) ||
                                                        (skill.level ===
                                                            "Advanced" &&
                                                            dot <= 4) ||
                                                        (skill.level ===
                                                            "Intermediate" &&
                                                            dot <= 3)
                                                            ? "bg-teal-400"
                                                            : "bg-zinc-700"
                                                    }`}
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    transition={{
                                                        delay:
                                                            index * 0.05 +
                                                            dot * 0.02 +
                                                            0.3,
                                                    }}
                                                    viewport={{ once: true }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-20 max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div className="relative mb-12 text-center">
                        <div className="flex justify-center items-center space-x-4 mb-6">
                            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                                <Wrench className="h-7 w-7 text-white" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                                    Tools & Technologies
                                </h3>
                                <p className="text-zinc-500 mt-2 text-lg">
                                    Development Arsenal & Workflow
                                </p>
                            </div>
                        </div>

                        <motion.div
                            className="w-32 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-full mx-auto"
                            initial={{ width: 0 }}
                            whileInView={{ width: "8rem" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {tools.map((tool, index) => (
                            <MagneticElement key={tool.name} strength={40}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.05,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -8, scale: 1.05 }}
                                    className="group"
                                    data-cursor="button"
                                    data-cursor-text={tool.name}
                                >
                                    <Card className="bg-zinc-800/40 border-zinc-700/50 hover:border-transparent transition-all duration-300 backdrop-blur-sm overflow-hidden relative">
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                        />

                                        <CardContent className="p-6 text-center relative z-10">
                                            <motion.div
                                                className="flex justify-center mb-4"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="text-zinc-300 group-hover:text-white transition-colors duration-300">
                                                    {tool.icon}
                                                </div>
                                            </motion.div>

                                            <h4 className="font-semibold text-zinc-300 group-hover:text-white transition-colors duration-300 text-lg">
                                                {tool.name}
                                            </h4>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </MagneticElement>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
