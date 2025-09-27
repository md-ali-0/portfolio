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
}

export default function SectionHeader({
    title,
    highlight,
    description,
    icon,
    className,
}: SectionHeaderProps) {
    return (
        <motion.div
            className={cn("relative flex flex-col md:flex-row md:items-center md:justify-center mb-12 text-center md:text-left gap-4", className)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-emerald-500/5 via-teal-500/10 to-emerald-500/5 rounded-2xl blur-lg"
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [0.98, 1.02, 0.98],
                }}
                transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />

            <div className="relative z-10 flex flex-col justify-center items-center gap-4">
                <div className="flex items-center gap-4">
                    {icon && (
                        <motion.div
                            className="relative flex-shrink-0"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="size-10 md:size-12 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-emerald-400/20">
                                {icon}
                            </div>
                        </motion.div>
                    )}

                    <motion.div
                        className="flex items-baseline gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-white relative">
                            {title}
                            <motion.div
                                className="absolute -top-2 -right-2"
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                }}
                            >
                                <Sparkles className="h-4 w-4 text-emerald-400/80" />
                            </motion.div>
                        </h2>

                        {highlight && (
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <span className="text-2xl md:text-5xl font-medium text-emerald-400 relative">
                                    {highlight}
                                    <motion.div
                                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ duration: 1, delay: 0.8 }}
                                    />
                                </span>
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                <div className="flex-1">
                    {description && (
                        <motion.p
                            className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed mt-2"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            {description}
                        </motion.p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
