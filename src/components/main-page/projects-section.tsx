"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionHeader from "../section-header";

type Project = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
    github?: string;
    featured?: boolean;
    category: "Frontend" | "Backend" | "Full Stack" | "E-commerce" | "Dashboard" | "API";
    year: string;
};

export default function ProjectsSection() {
    const [visibleCards] = useState<number[]>(Array.from({length: 4}, (_, i) => i));

    const projects: Project[] = [
        {
            title: "E-Commerce Platform",
            description:
                "A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.",
            image: "/Screenshot_48.png",
            technologies: [
                "Next.js",
                "React",
                "Node.js",
                "PostgreSQL",
                "Stripe",
            ],
            link: "https://example.com",
            github: "https://github.com",
            featured: true,
            category: "E-commerce",
            year: "2024"
        },
        {
            title: "Analytics Dashboard",
            description:
                "Comprehensive analytics platform with interactive charts, real-time data visualization, and custom reporting features for business intelligence.",
            image: "/Screenshot_49.png",
            technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
            link: "https://example.com",
            github: "https://github.com",
            category: "Dashboard",
            year: "2024"
        },
        {
            title: "Task Management API",
            description:
                "RESTful API for task management application with authentication, real-time updates, and comprehensive documentation.",
            image: "/Screenshot_50.png",
            technologies: ["Node.js", "Express", "MongoDB", "JWT"],
            link: "https://example.com",
            github: "https://github.com",
            category: "API",
            year: "2023"
        },
        {
            title: "Social Media Dashboard",
            description:
                "Full-stack dashboard application with user management, content analytics, and real-time notification system.",
            image: "/Screenshot_51.png",
            technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
            link: "https://example.com",
            github: "https://github.com",
            category: "Full Stack",
            year: "2023"
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
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
                    title="Creative"
                    highlight="Showcase"
                    description="Explore my portfolio of web development projects with modern design and clean aesthetics."
                />

                {/* Projects List with Reduced Animations */}
                <div className="space-y-8 mt-12">
                    {projects.map((project, index) => (
                        <Link 
                            key={project.title}
                            href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block"
                        >
                            <div
                                id={`project-card-${index}`}
                                className="
                                    group relative
                                    bg-zinc-900/60 backdrop-blur-xl rounded-2xl border border-zinc-800 overflow-hidden transition-all duration-300 hover:border-emerald-500/30
                                "
                            >
                                {/* Static shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                                
                                <div className="p-6 relative z-10">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                        {/* Image with subtle hover effect */}
                                        <div className="relative h-48 lg:h-full rounded-lg overflow-hidden">
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                                            {/* Featured badge */}
                                            {project.featured && (
                                                <div className="absolute top-3 left-3">
                                                    <span className="px-2 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                                        </svg>
                                                        FEATURED
                                                    </span>
                                                </div>
                                            )}
                                            {/* Year badge */}
                                            <div className="absolute top-3 right-3">
                                                <span className="px-2 py-1 bg-black/40 backdrop-blur-md text-zinc-200 text-xs font-medium rounded-full border border-zinc-600/30">
                                                    {project.year}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="lg:col-span-2">
                                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                                <h3 className="text-xl font-bold text-white">
                                                    {project.title}
                                                </h3>
                                                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/30">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <p className="text-zinc-400 mb-4 text-base leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 bg-zinc-800/50 text-zinc-200 text-xs rounded-lg border border-zinc-700/50"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Links */}
                                            <div className="flex flex-wrap gap-3">
                                                <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-lg border border-emerald-500/30 text-sm">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                                        <circle cx="12" cy="12" r="3"/>
                                                    </svg>
                                                    <span>View Details</span>
                                                </span>
                                                
                                                {project.link && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-lg border border-emerald-500/30 text-sm"
                                                    >
                                                        <ExternalLink className="h-3 w-3" />
                                                        <span>Live Demo</span>
                                                    </a>
                                                )}
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 text-zinc-300 rounded-lg border border-zinc-700/50 text-sm"
                                                    >
                                                        <Github className="h-3 w-3" />
                                                        <span>Source</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}