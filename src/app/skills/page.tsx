"use client";

import Breadcrumb from "@/components/breadcrumb";
import { motion } from "framer-motion";
import {
    Columns,
    Database,
    Grid,
    Layers,
    Server,
    Wrench,
    Zap,
} from "lucide-react";
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

type LayoutType = "grid" | "compact" | "horizontal";

export default function SkillsPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [layout, setLayout] = useState<LayoutType>("grid");
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
            description: "Server-side rendering and full-stack applications",
        },
        {
            name: "TypeScript",
            category: "frontend",
            color: "from-blue-600 to-blue-400",
            description: "Type-safe JavaScript for scalable applications",
        },
        {
            name: "JavaScript",
            category: "frontend",
            color: "from-yellow-400 to-yellow-300",
            description: "Core web programming language for dynamic behavior",
        },
        {
            name: "Tailwind CSS",
            category: "frontend",
            color: "from-teal-500 to-emerald-400",
            description: "Rapid UI development with utility-first CSS",
        },
        {
            name: "Ant Design",
            category: "frontend",
            color: "from-blue-500 to-indigo-400",
            description: "Elegant and enterprise-level React UI framework",
        },
        {
            name: "Framer Motion",
            category: "frontend",
            color: "from-pink-500 to-purple-500",
            description: "Modern animation library for React",
        },
        {
            name: "Redux",
            category: "frontend",
            color: "from-purple-600 to-indigo-500",
            description: "State management for complex React apps",
        },

        // --- Backend ---
        {
            name: "Node.js",
            category: "backend",
            color: "from-green-600 to-emerald-500",
            description: "Server-side JavaScript runtime environment",
        },
        {
            name: "Express",
            category: "backend",
            color: "from-gray-800 to-gray-600",
            description: "Minimalist web framework for Node.js",
        },
        {
            name: "Prisma",
            category: "backend",
            color: "from-indigo-500 to-purple-400",
            description: "Next-generation ORM for Node.js and TypeScript",
        },
        {
            name: "Swagger",
            category: "backend",
            color: "from-amber-400 to-yellow-300",
            description: "API documentation and testing tool",
        },

        // --- Database ---
        {
            name: "PostgreSQL",
            category: "database",
            color: "from-blue-700 to-blue-500",
            description: "Advanced open-source relational database",
        },
        {
            name: "MongoDB",
            category: "database",
            color: "from-green-700 to-green-500",
            description: "NoSQL document database for flexible data",
        },
        {
            name: "Redis",
            category: "database",
            color: "from-red-600 to-orange-500",
            description: "In-memory cache for fast data access and sessions",
        },

        // --- Tools & Deployment ---
        {
            name: "Git",
            category: "others",
            color: "from-orange-600 to-red-500",
            description: "Distributed version control system",
        },
        {
            name: "GitHub",
            category: "others",
            color: "from-gray-900 to-black",
            description:
                "Code hosting platform for version control and collaboration",
        },
        {
            name: "Docker",
            category: "others",
            color: "from-blue-500 to-cyan-300",
            description: "Containerization platform for applications",
        },
        {
            name: "Linux",
            category: "others",
            color: "from-gray-700 to-gray-600",
            description:
                "Server administration and shell scripting environment",
        },
        {
            name: "Nginx",
            category: "others",
            color: "from-green-600 to-teal-500",
            description: "High-performance web server and reverse proxy",
        },
        {
            name: "Vercel",
            category: "others",
            color: "from-black to-gray-800",
            description:
                "Cloud platform for static sites and Serverless Functions",
        },
        {
            name: "Cloudflare",
            category: "others",
            color: "from-orange-400 to-yellow-500",
            description: "Edge CDN and DDoS protection service",
        },
        {
            name: "DigitalOcean",
            category: "others",
            color: "from-blue-600 to-sky-500",
            description: "Cloud infrastructure and hosting",
        },
        {
            name: "Postman",
            category: "others",
            color: "from-orange-500 to-red-400",
            description: "API testing and documentation tool",
        },
        {
            name: "Jest",
            category: "others",
            color: "from-red-600 to-pink-500",
            description: "Delightful JavaScript testing framework",
        },
        {
            name: "VS Code",
            category: "others",
            color: "from-sky-600 to-blue-500",
            description: "Powerful code editor for web development",
        },
    ];

    const skillsData: SkillsData = {
        all: allSkills,
        frontend: allSkills.filter((skill) => skill.category === "frontend"),
        backend: allSkills.filter((skill) => skill.category === "backend"),
        database: allSkills.filter((skill) => skill.category === "database"),
        others: allSkills.filter((skill) => skill.category === "others"),
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
        <>
            <Breadcrumb />
            <div className="min-h-screen relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
                            backgroundSize: "30px 30px",
                        }}
                    />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Category Tabs and Layout Controls */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
                        <motion.div
                            className="flex flex-wrap gap-3"
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
                                    {cat.id === "all" && (
                                        <Zap className="w-4 h-4" />
                                    )}
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

                        {/* Layout Controls */}
                        <div className="flex gap-2 bg-zinc-800/50 p-1 rounded-xl border border-zinc-700/50">
                            <button
                                onClick={() => setLayout("grid")}
                                className={`p-2 rounded-lg transition-all ${
                                    layout === "grid"
                                        ? "bg-emerald-500/20 text-emerald-400"
                                        : "text-zinc-400 hover:text-zinc-200"
                                }`}
                                aria-label="Grid layout"
                            >
                                <Grid className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setLayout("compact")}
                                className={`p-2 rounded-lg transition-all ${
                                    layout === "compact"
                                        ? "bg-emerald-500/20 text-emerald-400"
                                        : "text-zinc-400 hover:text-zinc-200"
                                }`}
                                aria-label="Compact layout"
                            >
                                <Columns className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Skills Display - Different Layouts */}
                    <motion.div
                        className={
                            layout === "grid"
                                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                                : layout === "compact"
                                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                                : "flex flex-col gap-4"
                        }
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
                                {layout === "grid" ? (
                                    // Grid Card Layout
                                    <div
                                        key={skill.name}
                                        className="group relative h-full rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 backdrop-blur-xl p-5 sm:p-6 transition-all duration-300 hover:border-emerald-500/30 overflow-hidden"
                                    >
                                        {/* Animated background on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                        {/* Static shine effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

                                        <div className="relative z-10">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                                                    {skillIcons[skill.name]}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-white mb-1">
                                                        {skill.name}
                                                    </h3>
                                                    <p className="text-xs text-emerald-400 font-medium px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 inline-block">
                                                        {skill.category}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="text-zinc-400 text-sm leading-relaxed">
                                                {skill.description}
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    // Compact Card Layout
                                    <div className="p-4 rounded-xl bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/30 transition-all duration-500 flex items-center gap-4 group-hover:shadow-xl group-hover:shadow-emerald-500/10 relative overflow-hidden">
                                        {/* Animated background on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                        {/* Shine effect on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

                                        <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                                            {skillIcons[skill.name]}
                                        </div>

                                        <div className="flex-grow relative z-10">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <motion.h3
                                                    className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300"
                                                    whileHover={{ x: 3 }}
                                                >
                                                    {skill.name}
                                                </motion.h3>
                                                <motion.span
                                                    className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    {skill.category}
                                                </motion.span>
                                            </div>

                                            <motion.p
                                                className="text-zinc-400 text-xs mt-1 line-clamp-2"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                {skill.description}
                                            </motion.p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
}
