"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
    const [floatingElements, setFloatingElements] = useState<
        Array<{
            id: number;
            x: number;
            y: number;
            delay: number;
            duration: number;
            size: number;
        }>
    >([]);

    useEffect(() => {
        const elements = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 3,
            duration: 8 + Math.random() * 6,
            size: 0.5 + Math.random() * 1,
        }));
        setFloatingElements(elements);
    }, []);

    return (
        <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4 relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                {/* Animated mesh gradient overlay */}
                <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.1) 0%, transparent 60%)",
                            "radial-gradient(circle at 60% 20%, rgba(16, 185, 129, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(20, 184, 166, 0.15) 0%, transparent 60%)",
                            "radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.1) 0%, transparent 60%)",
                        ],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            {/* Floating Elements */}
            {floatingElements.map((element) => (
                <motion.div
                    key={element.id}
                    className="absolute rounded-full bg-gradient-to-r from-emerald-400/30 to-teal-400/30"
                    style={{
                        left: `${element.x}%`,
                        top: `${element.y}%`,
                        width: `${element.size * 8}px`,
                        height: `${element.size * 8}px`,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        x: [-15, 15, -15],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: element.duration,
                        delay: element.delay,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <div className="text-center max-w-md mx-auto relative z-10">
                <motion.div
                    className="relative mb-8"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                    }}
                >
                    {/*  Updated 404 number with emerald gradient and enhanced effects */}
                    <motion.h1
                        className="text-8xl md:text-9xl font-bold relative"
                        animate={{
                            textShadow: [
                                "0 0 20px rgba(16, 185, 129, 0.5)",
                                "0 0 40px rgba(16, 185, 129, 0.8)",
                                "0 0 20px rgba(16, 185, 129, 0.5)",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400/20 via-teal-300/20 to-emerald-500/20 blur-sm scale-110">
                            404
                        </span>
                        <motion.span
                            className="relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500"
                            animate={{
                                backgroundPosition: [
                                    "0% 50%",
                                    "100% 50%",
                                    "0% 50%",
                                ],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                            style={{
                                backgroundSize: "200% 200%",
                            }}
                        >
                            404
                        </motion.span>
                    </motion.h1>
                </motion.div>

                <motion.h2
                    className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Page Not Found
                </motion.h2>

                <motion.p
                    className="text-zinc-400 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    The page you're looking for doesn't exist or has been moved
                    to a different location.
                </motion.p>

                <motion.div
                    className="relative z-10 space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 px-6 py-3 rounded-lg font-medium relative overflow-hidden group">
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <span className="relative flex items-center">
                                        <Home className="mr-2 h-4 w-4" />
                                        Go Back Home
                                    </span>
                                </Button>
                            </motion.div>
                        </Link>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="outline"
                                onClick={() => window.history.back()}
                                className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 backdrop-blur-sm px-6 py-3 rounded-lg font-medium"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Go Back
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative corner elements */}
            <motion.div
                className="absolute top-10 right-10 w-3 h-3 bg-emerald-400/60 rounded-full"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                }}
                transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                }}
            />

            <motion.div
                className="absolute bottom-10 left-10 w-2 h-2 bg-teal-400/60 rounded-full"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                }}
            />
        </div>
    );
}
