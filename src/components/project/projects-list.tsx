"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import ProjectCard from "./project-card";

export default function ProjectsList({
    initialProjects,
}: {
    initialProjects: Project[];
}) {
    const [projects, setProjects] = useState<Project[]>(initialProjects);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(2);
    const [hasMore, setHasMore] = useState(true);

    const fetchProjects = async (page: number) => {
        setLoading(true);
        try {
            const response = await fetch(`/api/project?page=${page}`, {
                cache: "no-store"
            });
            const result = await response.json();
            if (result?.data && result.data.length > 0) {
                setProjects((prevProjects) => [
                    ...prevProjects,
                    ...result.data,
                ]);
                setHasMore(result.meta.totalPage > page);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = useCallback(() => {
        const bottom =
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight;
        if (bottom && hasMore && !loading) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [hasMore, loading]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        if (page > 1) {
            fetchProjects(page);
        }
    }, [page]);

    return (
        <>
            <motion.h6
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-mono font-medium uppercase text-xl tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:-top-3.5 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-6xl after:opacity-15 mb-10"
                data-backdrop-text="Projects"
            >
                My Project
            </motion.h6>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
            >
                {projects.map((project: Project, index) => (
                    <ProjectCard project={project} key={index} index={index} />
                ))}
                {loading && (
                    <div className="text-center mt-4 text-white">
                        Loading...
                    </div>
                )}
            </motion.div>
        </>
    );
}
