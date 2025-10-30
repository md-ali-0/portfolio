"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
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
    const [visibleCards, setVisibleCards] = useState<number[]>([]);

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

    // Handle card visibility animation with throttling
    useEffect(() => {
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const newVisibleCards: number[] = [];
                    projects.forEach((_, index) => {
                        const element = document.getElementById(`project-card-${index}`);
                        if (element) {
                            const rect = element.getBoundingClientRect();
                            const windowHeight = window.innerHeight;
                            // When card is 20% visible from bottom
                            if (rect.top < windowHeight * 0.8) {
                                newVisibleCards.push(index);
                            }
                        }
                    });
                    setVisibleCards(newVisibleCards);
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Initial check
        handleScroll();
        
        // Add scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id="projects"
            className="min-h-screen relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-teal-500/5 rounded-full blur-3xl" />
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
                        <div
                            key={project.title}
                            id={`project-card-${index}`}
                            className={`
                                group relative
                                bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20
                                ${visibleCards.includes(index) 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-8'}
                            `}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {/* Static shine sweep effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none z-10" />
                            
                            <div className="p-6 relative z-20">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Image with subtle hover effect */}
                                    <div className="relative h-64 lg:h-full rounded-xl overflow-hidden">
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                                        {/* Featured badge */}
                                        {project.featured && (
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                                    </svg>
                                                    FEATURED
                                                </span>
                                            </div>
                                        )}
                                        {/* Year badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1.5 bg-black/40 backdrop-blur-md text-zinc-200 text-xs font-medium rounded-full border border-zinc-600/30">
                                                {project.year}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="lg:col-span-2">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <h3 className="text-2xl font-bold text-white">
                                                {project.title}
                                            </h3>
                                            <span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/30">
                                                {project.category}
                                            </span>
                                        </div>

                                        <p className="text-zinc-300 mb-6 text-lg leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2.5 mb-8">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1.5 bg-zinc-700/50 text-zinc-200 text-sm rounded-lg border border-zinc-600/50 hover:border-emerald-500/50 transition-colors duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex flex-wrap gap-4">
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-lg border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group/link"
                                                    data-cursor="link"
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                    <span>Live Demo</span>
                                                    <ExternalLink className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                                </a>
                                            )}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800/50 text-zinc-300 rounded-lg border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300 group/link"
                                                    data-cursor="link"
                                                >
                                                    <Github className="h-4 w-4" />
                                                    <span>Source Code</span>
                                                    <Github className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}