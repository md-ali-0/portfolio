"use client";

import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Database,
    Layers,
    Server,
    Wrench,
    Zap,
} from "lucide-react";
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
            description: "Server-side rendering and full-stack applications",
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
        <section
            id="skills"
            className="min-h-screen relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28"
        >
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
                <SectionHeader
                    title="My"
                    highlight="Skills"
                    description="Explore my skills and experience in various areas of software development."
                />

                {/* Category Tabs - Reduced animations */}

                <div className="flex justify-between mt-12 sm:mt-16">
                    <div className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                                    selectedCategory === cat.id
                                        ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/40 shadow-lg shadow-emerald-500/20"
                                        : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-200 border border-zinc-700/50 hover:border-zinc-600"
                                }`}
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
                            </button>
                        ))}
                    </div>
                    <Link href="/skills">
                        <Button
                            variant="outline"
                            className="border-2 border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 backdrop-blur-sm px-6 py-3 rounded-lg font-medium group"
                        >
                            View All Skills
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                {/* Skills Grid - Reduced animations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="group relative h-full rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 backdrop-blur-xl p-5 sm:p-6 transition-all duration-300 hover:border-emerald-500/30 overflow-hidden"
                        >
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
                    ))}
                </div>
            </div>
        </section>
    );
}
