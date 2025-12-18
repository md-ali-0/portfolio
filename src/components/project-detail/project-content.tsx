"use client";

import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/Project";
import { motion } from "framer-motion";
import { Tag } from "lucide-react";
import ProjectGallery from "./project-gallery";

interface ProjectContentProps {
    project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
    return (
        <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800">
                <div className="prose prose-lg prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: project.content }} />
                </div>

                {/* Project Gallery */}
                <ProjectGallery images={project.images} projectTitle={project.title} />

                {/* Technologies Used */}
                <div className="mt-12 pt-8 border-t border-zinc-800">
                    <h3 className="text-lg font-medium mb-4 flex items-center">
                        <Tag className="mr-2 h-5 w-5 text-emerald-400" /> Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <Badge
                                    className="bg-zinc-800 hover:bg-zinc-700 transition-colors py-1.5 px-3"
                                    data-cursor="button"
                                >
                                    {tech}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Languages Used */}
                {project.languages && project.languages.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-zinc-800">
                        <h3 className="text-lg font-medium mb-4 flex items-center">
                            <Tag className="mr-2 h-5 w-5 text-emerald-400" /> Programming Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.languages.map((lang, index) => (
                                <motion.div
                                    key={lang}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <Badge
                                        className="bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 border-teal-500/30 transition-colors py-1.5 px-3"
                                        data-cursor="button"
                                    >
                                        {lang}
                                    </Badge>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
