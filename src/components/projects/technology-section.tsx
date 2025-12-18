"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface TechnologySectionProps {
    technologies: string[];
}

export default function TechnologySection({ technologies }: TechnologySectionProps) {
    return (
        <section className="relative py-24 bg-gradient-to-b from-zinc-900/20 to-zinc-900">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Technology Stack
                    </motion.h2>
                    <motion.p
                        className="text-zinc-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Tools and technologies I leverage to build modern digital experiences
                    </motion.p>
                </div>

                <motion.div
                    className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.05,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <Badge
                                className="bg-zinc-800/50 hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-teal-500/20 text-zinc-300 py-3 px-5 text-base border border-zinc-700 hover:border-emerald-500/30 transition-all"
                                data-cursor="button"
                            >
                                {tech}
                            </Badge>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
