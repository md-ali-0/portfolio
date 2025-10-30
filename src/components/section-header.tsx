"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

interface SectionHeaderProps {
    title: string;
    highlight?: string;
    description?: string;
    icon?: ReactNode;
    className?: string;
    descriptionClassName?: string;
}

export default function SectionHeader({
    title,
    highlight,
    description,
    icon,
    className,
    descriptionClassName,
}: SectionHeaderProps) {
    return (
        <div
            className={cn("relative flex flex-col md:flex-row md:items-center md:justify-center mb-12 text-center md:text-left gap-4", className)}
        >
            <div className="relative z-10 flex flex-col justify-center items-center gap-4">
                <div className="flex items-center gap-4">
                    {icon && (
                        <motion.div
                            className="relative flex-shrink-0"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ y: -2 }}
                        >
                            <div className="size-10 md:size-12 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-emerald-400/20">
                                {icon}
                            </div>
                        </motion.div>
                    )}

                    <div className="flex items-baseline gap-3">
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-white relative">
                            {title}
                            <div className="absolute -top-2 -right-2">
                                <Sparkles className="h-4 w-4 text-emerald-400/80" />
                            </div>
                        </h2>

                        {highlight && (
                            <div className="relative">
                                <span className="text-2xl md:text-5xl font-medium text-emerald-400 relative">
                                    {highlight}
                                    <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex-1">
                    {description && (
                        <p
                            className={cn("text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed mt-2 text-center", descriptionClassName)}
                        >
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}