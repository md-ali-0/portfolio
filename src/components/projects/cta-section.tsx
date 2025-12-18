"use client";

import MagneticElement from "@/components/magnetic-element";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative py-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"></div>

            {/* Mesh gradient overlay */}
            <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
                style={{
                    background: `radial-gradient(circle at 50% 50%, 
                rgba(16, 185, 129, 0.15) 0%, 
                rgba(20, 184, 166, 0.1) 25%, 
                transparent 50%),
            radial-gradient(circle at 30% 70%, 
                rgba(6, 182, 212, 0.1) 0%, 
                rgba(16, 185, 129, 0.05) 30%, 
                transparent 60%)`,
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-12 md:p-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Ready to bring your <span className="text-emerald-400">vision</span> to life?
                                </h2>
                                <p className="text-zinc-400 mb-8">
                                    Let's collaborate to create something extraordinary that pushes boundaries and
                                    delivers exceptional results.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <MagneticElement strength={60}>
                                    <Link href="/#contact">
                                        <Button
                                            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/25 px-8 py-6 text-lg rounded-full transition-all duration-300 w-full"
                                            data-cursor="button"
                                        >
                                            Start a Project
                                            <ArrowUpRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                </MagneticElement>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
