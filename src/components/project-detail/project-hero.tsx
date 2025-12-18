"use client";

import MagneticElement from "@/components/magnetic-element";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/Project";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectHeroProps {
    project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
    return (
        <section className="relative py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-30"></div>
            <div className="container mx-auto relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <span className="text-zinc-400 flex items-center text-sm">
                            <Calendar className="h-4 w-4 mr-1" /> {new Date(project.StartDate).toLocaleDateString()}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{project.title}</h1>
                    <p className="text-xl text-zinc-300 mb-8 line-clamp-3">
                        {project.content.replace(/<[^>]*>/g, "").substring(0, 200)}...
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {project.technologies.map((tech) => (
                            <Badge
                                key={tech}
                                className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border-0"
                                data-cursor="button"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        {project.liveUrl && (
                            <MagneticElement strength={50}>
                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <Button
                                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black"
                                        data-cursor="button"
                                    >
                                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </MagneticElement>
                        )}

                        {project.SourceFront && (
                            <MagneticElement strength={50}>
                                <Link href={project.SourceFront} target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        className="border-emerald-400 text-emerald-400"
                                        data-cursor="button"
                                    >
                                        View Frontend Code <Github className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </MagneticElement>
                        )}

                        {project.SourceBack && (
                            <MagneticElement strength={50}>
                                <Link href={project.SourceBack} target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        className="border-emerald-400 text-emerald-400"
                                        data-cursor="button"
                                    >
                                        View Backend Code <Github className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </MagneticElement>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
