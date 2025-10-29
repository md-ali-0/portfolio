"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Database, Layers, Server, Wrench, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    SiAntdesign,
    SiCloudflare,
    SiCodecov,
    SiDigitalocean,
    SiDocker,
    SiExpress,
    SiFramer,
    SiGit,
    SiGithub,
    SiJavascript,
    SiJest,
    SiLinux,
    SiMongodb,
    SiNextdotjs,
    SiNginx,
    SiNodedotjs,
    SiPostgresql,
    SiPostman,
    SiPrisma,
    SiReact,
    SiRedis,
    SiRedux,
    SiSwagger,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";
import SectionHeader from "../section-header";

// Define types for our skills data
type Skill = {
    name: string;
    category: string;
    color: string;
    description: string;
};

type SkillsData = {
    all: Skill[];
    frontend: Skill[];
    backend: Skill[];
    database: Skill[];
    others: Skill[];
};

export default function SkillsSectionV4() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Map skills to icons
    const skillIcons: Record<string, React.ReactNode> = {
        React: <SiReact className="w-6 h-6" />,
        "Next.js": <SiNextdotjs className="w-6 h-6" />,
        TypeScript: <SiTypescript className="w-6 h-6" />,
        JavaScript: <SiJavascript className="w-6 h-6" />,
        "Tailwind CSS": <SiTailwindcss className="w-6 h-6" />,
        "Node.js": <SiNodedotjs className="w-6 h-6" />,
        Express: <SiExpress className="w-6 h-6" />,
        Prisma: <SiPrisma className="w-6 h-6" />,
        PostgreSQL: <SiPostgresql className="w-6 h-6" />,
        MongoDB: <SiMongodb className="w-6 h-6" />,
        Redis: <SiRedis className="w-6 h-6" />,
        Git: <SiGit className="w-6 h-6" />,
        GitHub: <SiGithub className="w-6 h-6" />,
        Docker: <SiDocker className="w-6 h-6" />,
        Vercel: <SiVercel className="w-6 h-6" />,
        Swagger: <SiSwagger className="w-6 h-6" />,
        Jest: <SiJest className="w-6 h-6" />,
        Postman: <SiPostman className="w-6 h-6" />,
        Linux: <SiLinux className="w-6 h-6" />,
        Nginx: <SiNginx className="w-6 h-6" />,
        "VS Code": <SiCodecov className="w-6 h-6" />,
        "Ant Design": <SiAntdesign className="w-6 h-6" />,
        Redux: <SiRedux className="w-6 h-6" />,
        "Framer Motion": <SiFramer className="w-6 h-6" />,
        Cloudflare: <SiCloudflare className="w-6 h-6" />,
        DigitalOcean: <SiDigitalocean className="w-6 h-6" />,
    };

    // Define skills data with proper typing
    const allSkills: Skill[] = [
        // --- Frontend ---
        {
            name: "React",
            category: "frontend",
            color: "from-blue-500 to-cyan-400",
            description: "Building dynamic UIs with modern React patterns",
        },
        {
            name: "Next.js",
            category: "frontend",
            color: "from-gray-900 to-black",
            description:
                "Server-side rendering and full-stack applications",
        },
        {
            name: "TypeScript",
            category: "frontend",
            color: "from-blue-600 to-blue-400",
            description: "Type-safe JavaScript for scalable applications",
        },
        {
            name: "Tailwind CSS",
            category: "frontend",
            color: "from-teal-500 to-emerald-400",
            description: "Rapid UI development with utility-first CSS",
        },
        {
            name: "Node.js",
            category: "backend",
            color: "from-green-600 to-emerald-500",
            description: "Server-side JavaScript runtime environment",
        },
        {
            name: "Prisma",
            category: "backend",
            color: "from-indigo-500 to-purple-400",
            description: "Next-generation ORM for Node.js and TypeScript",
        },
        {
            name: "PostgreSQL",
            category: "database",
            color: "from-blue-700 to-blue-500",
            description: "Advanced open-source relational database",
        },
        {
            name: "Docker",
            category: "others",
            color: "from-blue-500 to-cyan-300",
            description: "Containerization platform for applications",
        },
    ];

    const skillsData: SkillsData = {
        all: allSkills,
        frontend: allSkills.filter(skill => skill.category === "frontend"),
        backend: allSkills.filter(skill => skill.category === "backend"),
        database: allSkills.filter(skill => skill.category === "database"),
        others: allSkills.filter(skill => skill.category === "others"),
    };

    const categories = [
        { id: "all", label: "All Skills" },
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend" },
        { id: "database", label: "Database" },
        { id: "others", label: "Others" },
    ];
    
    const skills = skillsData[selectedCategory as keyof SkillsData];

    if (!mounted) return null;

    return (
        <section
            id="skills"
            className="min-h-screen relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28"
        >
            {/* Background with floating icons */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"></div>
                
                {/* Enhanced mesh gradient overlay */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                    style={{
                        background: `radial-gradient(circle at 30% 30%, 
                            rgba(16, 185, 129, 0.2) 0%, 
                            rgba(20, 184, 166, 0.15) 25%, 
                            transparent 50%),
                        radial-gradient(circle at 70% 70%, 
                            rgba(6, 182, 212, 0.15) 0%, 
                            rgba(16, 185, 129, 0.1) 30%, 
                            transparent 60%)`,
                    }}
                />
                
                {/* Enhanced grid pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                        linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: "40px 40px",
                    }}
                />
                
                {/* Floating skill icons */}
                <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-6 h-6 text-emerald-400/20"
                            style={{
                                top: `${Math.sin(i * 60 * Math.PI / 180) * 60}px`,
                                left: `${Math.cos(i * 60 * Math.PI / 180) * 60}px`,
                                rotate: `${i * 60}deg`,
                            }}
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 180, 360],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 6 + i,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: i * 0.2,
                            }}
                        >
                            {Object.values(skillIcons)[i % Object.values(skillIcons).length]}
                        </motion.div>
                    ))}
                </div>
                
                {/* Additional floating elements */}
                <motion.div 
                    className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full border border-emerald-500/10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div 
                    className="absolute bottom-1/3 right-1/3 w-16 h-16 rounded-full bg-teal-500/5"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    title="My"
                    highlight="Skills"
                    description="Explore my skills and experience in various areas of software development."
                />

                {/* Category Tabs */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                                selectedCategory === cat.id
                                    ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/40 shadow-lg shadow-emerald-500/20"
                                    : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-200 border border-zinc-700/50 hover:border-zinc-600"
                            }`}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {cat.id === "all" && <Zap className="w-4 h-4" />}
                            {cat.id === "frontend" && (
                                <Layers className="w-4 h-4" />
                            )}
                            {cat.id === "backend" && (
                                <Server className="w-4 h-4" />
                            )}
                            {cat.id === "database" && (
                                <Database className="w-4 h-4" />
                            )}
                            {cat.id === "others" && (
                                <Wrench className="w-4 h-4" />
                            )}
                            {cat.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid - Enhanced Design */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto"
                    layout
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            layout
                        >
                            <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/30 transition-all duration-500 flex flex-col group-hover:shadow-2xl group-hover:shadow-emerald-500/10 relative overflow-hidden">
                                {/* Animated background on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

                                {/* Header with icon and title */}
                                <div className="flex items-start gap-4 mb-4 relative z-10">
                                    <motion.div
                                        className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} p-2 flex-shrink-0`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    >
                                        <div className="text-white">
                                            {skillIcons[skill.name] || (
                                                <Wrench className="w-6 h-6" />
                                            )}
                                        </div>
                                    </motion.div>
                                    <div>
                                        <motion.h3
                                            className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors duration-300"
                                            whileHover={{ x: 5 }}
                                        >
                                            {skill.name}
                                        </motion.h3>
                                        <motion.span
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {skill.category}
                                        </motion.span>
                                    </div>
                                </div>

                                {/* Description */}
                                <motion.p
                                    className="text-zinc-400 text-sm mb-5 flex-grow relative z-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {skill.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Skills Button */}
                <motion.div
                    className="flex justify-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Link href="/skills">
                        <Button className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-medium relative overflow-hidden transition-all duration-300 flex items-center gap-2">
                            <span>View All Skills</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}