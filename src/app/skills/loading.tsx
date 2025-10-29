"use client";

import SectionHeader from "@/components/section-header";
import { motion } from "framer-motion";

export default function SkillsLoading() {
    return (
        <div className="min-h-screen relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: "30px 30px",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    title="My"
                    highlight="Skills"
                    description="Explore my skills and experience in various areas of software development."
                />

                {/* Loading skeleton for category tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16">
                    {[...Array(5)].map((_, index) => (
                        <motion.div
                            key={index}
                            className="px-5 py-2.5 rounded-xl bg-zinc-800/50 border border-zinc-700/50"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="w-16 h-4 bg-zinc-700 rounded animate-pulse" />
                        </motion.div>
                    ))}
                </div>

                {/* Loading skeleton for skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[...Array(6)].map((_, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                        >
                            <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 backdrop-blur-xl border border-zinc-800">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-800 animate-pulse" />
                                    <div>
                                        <div className="w-24 h-5 bg-zinc-700 rounded mb-2 animate-pulse" />
                                        <div className="w-16 h-4 bg-zinc-800 rounded animate-pulse" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="w-full h-3 bg-zinc-800 rounded animate-pulse" />
                                    <div className="w-4/5 h-3 bg-zinc-800 rounded animate-pulse" />
                                    <div className="w-3/4 h-3 bg-zinc-800 rounded animate-pulse" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}