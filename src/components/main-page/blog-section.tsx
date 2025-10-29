"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";
import BlogCard from "../features/blog/blog-card";

const blogPosts = [
    {
        slug: "modern-web-development-trends-2024",
        title: "Modern Web Development Trends in 2024",
        excerpt:
            "Exploring the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.",
        category: "Web Development",
        author: "Mohammad Ali",
        publishedAt: "2024-01-15",
        readTime: "8 min read",
        image: "/Screenshot_45.png",
        tags: ["React", "Next.js", "AI"],
    },
    {
        slug: "building-scalable-applications",
        title: "Building Scalable Applications with Microservices",
        excerpt:
            "Learn how to architect and build scalable applications using microservices architecture and modern deployment strategies.",
        category: "Architecture",
        author: "Mohammad Ali",
        publishedAt: "2024-01-10",
        readTime: "12 min read",
        image: "/Screenshot_46.png",
        tags: ["Microservices", "Docker", "Kubernetes"],
    },
    {
        slug: "ai-powered-development-tools",
        title: "AI-Powered Development Tools That Boost Productivity",
        excerpt:
            "Discover the latest AI tools and techniques that can significantly improve your development workflow and code quality.",
        category: "AI & Tools",
        author: "Mohammad Ali",
        publishedAt: "2024-01-05",
        readTime: "6 min read",
        image: "/Screenshot_47.png",
        tags: ["AI", "Productivity", "Tools"],
    },
];

export default function BlogSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const postsPerSlide = 3;
    const totalSlides = Math.ceil(blogPosts.length / postsPerSlide);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const getCurrentPosts = () => {
        const startIndex = currentIndex * postsPerSlide;
        return blogPosts.slice(startIndex, startIndex + postsPerSlide);
    };

    return (
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-zinc-950">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                {/* Main gradient background */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />

                {/* Animated mesh gradient overlay */}
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, 
                            rgba(16, 185, 129, 0.15) 0%, 
                            rgba(20, 184, 166, 0.1) 25%, 
                            transparent 50%),
                        radial-gradient(circle at 80% 20%, 
                            rgba(6, 182, 212, 0.1) 0%, 
                            rgba(16, 185, 129, 0.05) 30%, 
                            transparent 60%)`,
                    }}
                    animate={{
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 8,
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
                        backgroundSize: "50px 50px",
                    }}
                />

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 15}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto relative z-10 px-4 sm:px-6">
                <motion.div 
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div>
                        <motion.h2 
                            className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
                            transition={{ duration: 0.2 }}
                        >
                            {/* Glowing background text */}
                            <span className="relative">
                                <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400/20 via-teal-300/20 to-emerald-500/20 blur-sm scale-110">
                                    Latest
                                </span>
                                <motion.span
                                    className="relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500"
                                    animate={{
                                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "linear",
                                    }}
                                    style={{
                                        backgroundSize: "200% 200%",
                                    }}
                                >
                                    Latest
                                </motion.span>
                            </span>
                            <span className="text-white">Articles</span>
                            <motion.div
                                animate={{ rotate: [0, 20, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatDelay: 3,
                                }}
                            >
                                <Sparkles className="h-5 w-5 text-emerald-400" />
                            </motion.div>
                        </motion.h2>
                        <motion.p 
                            className="text-zinc-400 max-w-xl text-sm sm:text-base"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Insights, tutorials, and best practices from the development trenches.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.div
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full border-2 border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-white hover:border-zinc-600 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-zinc-700/50"
                                disabled={currentIndex === 0}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full border-2 border-emerald-500/50 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/50"
                                disabled={currentIndex === totalSlides - 1}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {getCurrentPosts().map((post, index) => (
                            <motion.div 
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1 * index,
                                }}
                            >
                                <BlogCard
                                    post={post}
                                    index={index}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    className="flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="flex gap-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-6 h-2.5 rounded-lg transition-all duration-300 backdrop-blur-sm ${
                                    index === currentIndex
                                        ? "bg-gradient-to-r from-emerald-400 to-teal-400 border border-emerald-300/50 shadow-lg shadow-emerald-500/30 scale-125" 
                                        : "bg-zinc-700/50 border border-zinc-600 hover:bg-zinc-600 hover:border-zinc-500 hover:shadow-sm hover:shadow-zinc-500/20"
                                }`}
                                whileHover={{ scale: index === currentIndex ? 1.2 : 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}