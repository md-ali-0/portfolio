"use client";

import { Project } from "@/types/Project";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Pagination from "./pagination";
import { GridProjectCard, ListProjectCard } from "./project-cards";
import ProjectsFilter from "./projects-filter";

interface ProjectsListProps {
    projects: Project[];
    currentPage: number;
    totalPages: number;
}

export default function ProjectsList({ projects, currentPage, totalPages }: ProjectsListProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [layout, setLayout] = useState<"grid" | "list">("grid");

    // Get all unique categories (you might want to add a category field to your API)
    const categories = useMemo(() => {
        // For now, we'll use a default set since the API doesn't have categories
        return ["Web App", "Mobile App", "Website", "API"];
    }, []);

    // Filter projects based on selected category
    const filteredProjects = useMemo(() => {
        if (!selectedCategory || selectedCategory === "All") {
            return projects;
        }
        // Since API doesn't have category field, we'll show all for now
        // You can add category logic based on technologies or other fields
        return projects;
    }, [selectedCategory, projects]);

    return (
        <>
            <div className="text-center mb-12">
                <motion.h2
                    className="text-3xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Project Categories
                </motion.h2>
                <motion.p
                    className="text-zinc-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    Filter projects by category to find exactly what you're looking for
                </motion.p>
            </div>

            {/* Category Filter and Layout Switcher */}
            <ProjectsFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                layout={layout}
                setLayout={setLayout}
                categories={categories}
            />

            {/* Projects Grid/List */}
            <motion.div
                className={
                    layout === "grid"
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        : "flex flex-col gap-6"
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {filteredProjects.map((project, index) =>
                    layout === "grid" ? (
                        <GridProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            hoveredProject={hoveredProject}
                            setHoveredProject={setHoveredProject}
                        />
                    ) : (
                        <ListProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            hoveredProject={hoveredProject}
                            setHoveredProject={setHoveredProject}
                        />
                    )
                )}
            </motion.div>

            {/* Pagination */}
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    );
}
