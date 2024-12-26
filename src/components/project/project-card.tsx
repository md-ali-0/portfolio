import { Project } from "@/types";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";

export default function ProjectCard({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card
                key={project.id}
                className="bg-[#111111] transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden"
            >
                <div className="p-2.5">
                    <div className="relative overflow-hidden h-48 rounded-xl">
                        <Image
                            src={project.thumbnail || "/default-image.jpg"}
                            alt={project.title}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <CardHeader>
                    <Link
                        href={`/projects/${project.slug}`}
                        className="flex justify-between items-center"
                    >
                        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                            {project.title}
                        </CardTitle>
                    </Link>
                </CardHeader>

                <CardContent>
                    <div className="mb-4">
                        <CardDescription className="text-sm text-gray-700 dark:text-white/70 line-clamp-2">
                            {project.content}
                        </CardDescription>
                    </div>

                    {/* Technologies Used */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-gray-800 text-sm text-white px-2 py-1 rounded-lg"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="mt-4 flex justify-between gap-3">
                        <Link
                            href={project.liveUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-1 text-primary hover:text-primary/80"
                        >
                            <ExternalLink className="size-5" />
                            Live
                        </Link>
                        <Link
                            href={project.SourceFront || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-1 text-primary hover:text-primary/80"
                        >
                            <Github className="size-5" />
                            Frontend
                        </Link>
                        <Link
                            href={project.SourceBack || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-1 text-primary hover:text-primary/80"
                        >
                            <Github className="size-5" />
                            Backend
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
