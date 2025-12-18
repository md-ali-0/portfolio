"use client";

import { motion } from "framer-motion";
import { Code, Globe, LayoutGrid, LayoutList, Palette, Smartphone } from "lucide-react";
import { useMemo } from "react";

interface ProjectsFilterProps {
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
    layout: "grid" | "list";
    setLayout: (layout: "grid" | "list") => void;
    categories: string[];
}

export default function ProjectsFilter({
    selectedCategory,
    setSelectedCategory,
    layout,
    setLayout,
    categories: projectCategories,
}: ProjectsFilterProps) {
    // Get all unique categories with icons
    const categories = useMemo(() => {
        const categoryMap: Record<string, { icon: React.ReactNode; color: string }> = {
            "Web App": { icon: <Globe className="h-4 w-4" />, color: "text-emerald-400" },
            "Mobile App": { icon: <Smartphone className="h-4 w-4" />, color: "text-teal-400" },
            "Website": { icon: <Palette className="h-4 w-4" />, color: "text-cyan-400" },
            "API": { icon: <Code className="h-4 w-4" />, color: "text-emerald-300" },
        };

        const uniqueCategories = Array.from(new Set(projectCategories));
        return [
            { name: "All", icon: null, color: "" },
            ...uniqueCategories.map((category) => ({
                name: category,
                ...(categoryMap[category] || { icon: <Code className="h-4 w-4" />, color: "text-zinc-400" }),
            })),
        ];
    }, [projectCategories]);

    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 max-w-4xl mx-auto">
            <motion.div
                className="flex flex-wrap justify-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {categories.map((category) => (
                    <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name === "All" ? null : category.name)}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                            selectedCategory === category.name || (!selectedCategory && category.name === "All")
                                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-black shadow-lg shadow-emerald-500/25"
                                : "bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 border border-zinc-700 hover:border-emerald-500/30"
                        }`}
                        data-cursor="button"
                    >
                        {category.icon && <span className={category.color}>{category.icon}</span>}
                        {category.name}
                    </button>
                ))}
            </motion.div>

            {/* Layout Switcher */}
            <motion.div
                className="flex items-center gap-2 bg-zinc-800/50 rounded-lg p-1 border border-zinc-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <button
                    onClick={() => setLayout("grid")}
                    className={`p-2 rounded-md transition-colors ${
                        layout === "grid" ? "bg-emerald-500/20 text-emerald-400" : "text-zinc-400 hover:text-zinc-200"
                    }`}
                    aria-label="Grid view"
                >
                    <LayoutGrid className="h-5 w-5" />
                </button>
                <button
                    onClick={() => setLayout("list")}
                    className={`p-2 rounded-md transition-colors ${
                        layout === "list" ? "bg-emerald-500/20 text-emerald-400" : "text-zinc-400 hover:text-zinc-200"
                    }`}
                    aria-label="List view"
                >
                    <LayoutList className="h-5 w-5" />
                </button>
            </motion.div>
        </div>
    );
}
