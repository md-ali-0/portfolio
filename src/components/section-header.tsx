"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

interface SectionHeaderProps {
    title: string;
    highlight?: string;
    description?: string;
    icon?: ReactNode;
}

export default function SectionHeader({
    title,
    highlight,
    description,
    icon,
}: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-16"
        >
            <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <h2 className="text-5xl md:text-6xl font-bold text-center relative">
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-400 to-white">
                        {title}
                    </span>
                    <motion.span
                        className="text-emerald-400 mx-4 relative z-10"
                        animate={{
                            textShadow: [
                                "0 0 20px rgba(16, 185, 129, 0.5)",
                                "0 0 40px rgba(16, 185, 129, 0.8)",
                                "0 0 20px rgba(16, 185, 129, 0.5)",
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                        }}
                    >
                        {highlight}
                    </motion.span>

                    {/* Floating sparkles */}
                    <motion.div
                        className="absolute -top-8 -right-8"
                        animate={{
                            rotate: 360,
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            rotate: {
                                duration: 10,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            },
                            scale: {
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                            },
                        }}
                    >
                        <Sparkles className="h-8 w-8 text-emerald-400/70" />
                    </motion.div>

                    <motion.div
                        className="absolute -bottom-6 -left-6"
                        animate={{
                            rotate: -360,
                            y: [0, -15, 0],
                        }}
                        transition={{
                            rotate: {
                                duration: 8,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            },
                            y: {
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                            },
                        }}
                    >
                        {icon ? (
                            icon
                        ) : (
                            <Sparkles className="h-6 w-6 text-teal-400/70" />
                        )}
                    </motion.div>
                </h2>

                {/* Enhanced animated underline */}
                <motion.div
                    className="h-1.5 w-40 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 mt-8 rounded-full mx-auto relative overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: 160 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                        animate={{ x: [-100, 260] }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                </motion.div>
            </motion.div>

            <motion.p
                className="text-zinc-400 text-lg text-center max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                {description}
            </motion.p>
        </motion.div>
    );
}
