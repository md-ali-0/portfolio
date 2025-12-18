"use client";

import { Project } from "@/types/Project";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
    index: number;
    hoveredProject: string | null;
    setHoveredProject: (slug: string | null) => void;
}

export function GridProjectCard({ project, index, hoveredProject, setHoveredProject }: ProjectCardProps) {
    return (
        <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative group"
            onMouseEnter={() => setHoveredProject(project.slug)}
            onMouseLeave={() => setHoveredProject(null)}
        >
            <Link href={`/projects/${project.slug}`} className="block h-full">
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm border border-zinc-800 overflow-hidden transition-all duration-300 group-hover:border-emerald-500/30">
                    {/* Static shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

                    <div className="p-6 relative z-10">
                        <div className="mb-4 rounded-lg overflow-hidden aspect-video bg-zinc-800/50 flex items-center justify-center">
                            <img
                                src={project.thumbnail || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                width={400}
                                height={225}
                                data-cursor="image"
                            />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-100 transition-colors duration-300">
                            {project.title}
                        </h3>

                        <p className="text-zinc-300 text-base mb-4 leading-relaxed line-clamp-3">
                            {project.content.replace(/<[^>]*>/g, "").substring(0, 150)}...
                        </p>

                        {/* Project metadata */}
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-zinc-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-emerald-400" />
                                <span className="font-medium">{new Date(project.StartDate).getFullYear()}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.technologies.slice(0, 4).map((tech: string) => (
                                <span
                                    key={tech}
                                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full bg-zinc-800/60 text-zinc-200 border border-zinc-700/60 hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-100 transition-all duration-300"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > 4 && (
                                <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full bg-zinc-800/60 text-zinc-400 border border-zinc-700/60">
                                    +{project.technologies.length - 4} more
                                </span>
                            )}
                        </div>

                        {/* Project links */}
                        <div className="flex flex-wrap gap-3 mb-4">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg border border-emerald-500/30 text-sm hover:bg-emerald-500/30 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    <span>Live Demo</span>
                                </a>
                            )}

                            {(project.SourceFront || project.SourceBack) && (
                                <a
                                    href={project.SourceFront || project.SourceBack}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800/60 text-zinc-300 rounded-lg border border-zinc-700/60 text-sm hover:bg-zinc-700/60 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Github className="h-4 w-4" />
                                    <span>Source Code</span>
                                </a>
                            )}
                        </div>

                        <div className="flex items-center text-emerald-400 text-base font-medium group-hover:text-emerald-300 transition-colors duration-300">
                            View Project Details
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export function ListProjectCard({ project, index, hoveredProject, setHoveredProject }: ProjectCardProps) {
    return (
        <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            className="relative group"
            onMouseEnter={() => setHoveredProject(project.slug)}
            onMouseLeave={() => setHoveredProject(null)}
        >
            <Link href={`/projects/${project.slug}`} className="block h-full">
                <div className="relative rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm border border-zinc-800 overflow-hidden transition-all duration-300 group-hover:border-emerald-500/30">
                    {/* Static shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

                    <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="md:w-1/3">
                            <div className="h-48 md:h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden bg-zinc-800/50 flex items-center justify-center">
                                <img
                                    src={project.thumbnail || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    width={400}
                                    height={225}
                                    data-cursor="image"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="md:w-2/3 p-6 md:p-8 relative z-10">
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-100 transition-colors duration-300">
                                    {project.title}
                                </h3>
                            </div>

                            <p className="text-zinc-300 text-base mb-5 leading-relaxed line-clamp-2">
                                {project.content.replace(/<[^>]*>/g, "").substring(0, 200)}...
                            </p>

                            {/* Project metadata */}
                            <div className="flex flex-wrap items-center gap-5 mb-5 text-sm text-zinc-400">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-emerald-400" />
                                    <span className="font-medium">{new Date(project.StartDate).getFullYear()}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.slice(0, 6).map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full bg-zinc-800/60 text-zinc-200 border border-zinc-700/60 hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-100 transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 6 && (
                                    <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full bg-zinc-800/60 text-zinc-400 border border-zinc-700/60">
                                        +{project.technologies.length - 6} more
                                    </span>
                                )}
                            </div>

                            {/* Project links and View Details */}
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-3">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg border border-emerald-500/30 text-sm hover:bg-emerald-500/30 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            <span>Live Demo</span>
                                        </a>
                                    )}

                                    {(project.SourceFront || project.SourceBack) && (
                                        <a
                                            href={project.SourceFront || project.SourceBack}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-zinc-800/60 text-zinc-300 rounded-lg border border-zinc-700/60 text-sm hover:bg-zinc-700/60 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github className="h-4 w-4" />
                                            <span>Source Code</span>
                                        </a>
                                    )}
                                </div>

                                <div className="flex items-center text-emerald-400 text-base font-medium group-hover:text-emerald-300 transition-colors duration-300">
                                    View Project Details
                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
