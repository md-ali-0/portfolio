"use client";

import MagneticElement from "@/components/magnetic-element";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/Project";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectSidebarProps {
    project: Project;
    relatedProjects?: Project[];
}

export default function ProjectSidebar({ project, relatedProjects = [] }: ProjectSidebarProps) {
    return (
        <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
        >
            {/* Project Info */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 mb-8">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-zinc-800">Project Information</h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="text-zinc-400 text-sm">Started</h4>
                        <p className="font-medium">{new Date(project.StartDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <h4 className="text-zinc-400 text-sm">Completed</h4>
                        <p className="font-medium">{new Date(project.EndDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <h4 className="text-zinc-400 text-sm">Status</h4>
                        <p className="font-medium">{project.deletedAt ? "Archived" : "Active"}</p>
                    </div>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800 space-y-4">
                    {project.liveUrl && (
                        <MagneticElement strength={40}>
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
                                <Button
                                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black"
                                    data-cursor="button"
                                >
                                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </MagneticElement>
                    )}

                    {project.SourceFront && (
                        <MagneticElement strength={40}>
                            <Link href={project.SourceFront} target="_blank" rel="noopener noreferrer" className="block">
                                <Button
                                    variant="outline"
                                    className="w-full border-emerald-400 text-emerald-400"
                                    data-cursor="button"
                                >
                                    Frontend Code <Github className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </MagneticElement>
                    )}

                    {project.SourceBack && (
                        <MagneticElement strength={40}>
                            <Link href={project.SourceBack} target="_blank" rel="noopener noreferrer" className="block">
                                <Button
                                    variant="outline"
                                    className="w-full border-emerald-400 text-emerald-400"
                                    data-cursor="button"
                                >
                                    Backend Code <Github className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </MagneticElement>
                    )}
                </div>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800">
                    <h3 className="text-xl font-bold mb-6 pb-4 border-b border-zinc-800">Related Projects</h3>
                    <div className="space-y-6">
                        {relatedProjects.map((relatedProject, index) => (
                            <motion.div
                                key={relatedProject.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/projects/${relatedProject.slug}`}
                                    className="block group"
                                    data-cursor="project"
                                >
                                    <div className="flex gap-4">
                                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                            <img
                                                src={relatedProject.thumbnail || "/placeholder.svg"}
                                                alt={relatedProject.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                width={80}
                                                height={80}
                                                data-cursor="image"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-medium line-clamp-2 group-hover:text-emerald-400 transition-colors">
                                                {relatedProject.title}
                                            </h4>
                                            <p className="text-sm text-zinc-400 mt-1">
                                                {new Date(relatedProject.StartDate).getFullYear()}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-zinc-800">
                        <MagneticElement strength={40}>
                            <Link href="/projects">
                                <Button
                                    variant="ghost"
                                    className="w-full text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10"
                                    data-cursor="button"
                                >
                                    View All Projects
                                </Button>
                            </Link>
                        </MagneticElement>
                    </div>
                </div>
            )}
        </motion.div>
    );
}
