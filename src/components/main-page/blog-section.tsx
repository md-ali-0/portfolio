"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Clock,
    Sparkles,
} from "lucide-react";
import { useState } from "react";

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
        image: "/modern-web-development.png",
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
        image: "/microservices-architecture.png",
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
        image: "/ai-development-tools.png",
        tags: ["AI", "Productivity", "Tools"],
    },
];

const BlogCard = ({ post, index }: { post: any; index: number }) => {
    return (
        <motion.div
            className="group bg-gradient-to-br from-zinc-800/80 to-zinc-900/60 backdrop-blur-sm rounded-2xl border border-zinc-700/50 overflow-hidden h-full hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
            transition={{ duration: 0.3 }}
        >
            <div className="relative h-56 overflow-hidden">
                <img
                    src={
                        post.image ||
                        `/placeholder.svg?height=224&width=400&query=${post.category} development coding`
                    }
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-500/90 text-white border-0 text-xs font-medium px-3 py-1 backdrop-blur-sm">
                        {post.category}
                    </Badge>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                    <Clock className="w-3 h-3 text-zinc-300" />
                    <span className="text-xs text-zinc-300">
                        {post.readTime}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags
                        .slice(0, 3)
                        .map((tag: string, tagIndex: number) => (
                            <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: tagIndex * 0.1 }}
                                className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-medium"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    {post.tags.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-zinc-700/50 text-zinc-400 rounded-full">
                            +{post.tags.length - 3}
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-emerald-400 transition-colors duration-300">
                    {post.title}
                </h3>

                <p className="text-zinc-300 mb-6 leading-relaxed text-sm line-clamp-3">
                    {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center ring-2 ring-emerald-500/20">
                            <span className="text-white font-bold text-sm">
                                MA
                            </span>
                        </div>
                        <div>
                            <h6 className="text-white font-medium text-sm">
                                {post.author}
                            </h6>
                            <div className="flex items-center gap-1 text-zinc-400 text-xs">
                                <Calendar className="w-3 h-3" />
                                <span>
                                    {new Date(
                                        post.publishedAt
                                    ).toLocaleDateString("en-GB")}
                                </span>
                            </div>
                        </div>
                    </div>

                    <Button
                        variant="ghost"
                        size="sm"
                        className="w-10 h-10 rounded-full bg-zinc-800/80 border border-zinc-600/50 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-700/80 group-hover:bg-white group-hover:text-emerald-600 group-hover:border-white transition-all duration-300 flex items-center justify-center p-0"
                    >
                        <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

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
        <section className="py-20 relative overflow-hidden bg-zinc-950">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-emerald-950/5 to-zinc-950" />

                {/* Animated grid pattern */}
                <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
                    <motion.svg
                        viewBox="0 0 400 400"
                        className="w-full h-full"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 120,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    >
                        <defs>
                            <pattern
                                id="grid"
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 40 0 L 0 0 0 40"
                                    fill="none"
                                    stroke="rgb(16 185 129)"
                                    strokeWidth="0.5"
                                    opacity="0.3"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </motion.svg>
                </div>

                {/* Floating orbs */}
                <motion.div
                    className="absolute bottom-0 left-0 w-64 h-64 opacity-10"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full blur-3xl" />
                </motion.div>

                <motion.div
                    className="absolute top-1/4 right-1/4 w-32 h-32 opacity-5"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Number.POSITIVE_INFINITY,
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-bl from-emerald-400/30 to-transparent rounded-full blur-2xl" />
                </motion.div>
            </div>

            <div className="container mx-auto relative z-10 px-4">
                <div className="flex items-center justify-between mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="flex gap-4 text-2xl md:text-5xl font-bold text-white mb-4">
                            <motion.div
                                className="relative"
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <span className="text-2xl md:text-5xl font-medium text-emerald-400 relative">
                                    Latest
                                    <motion.div
                                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ duration: 1, delay: 0.8 }}
                                    />
                                </span>
                            </motion.div>
                            <span className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-white relative">
                                Articles
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
                            </span>
                        </h2>
                        <p className="text-zinc-300 text-lg max-w-xl">
                            Dive into the world of modern development with
                            insights, tutorials, and best practices from the
                            trenches.
                        </p>
                    </motion.div>

                    <div className="hidden md:flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border-zinc-600 bg-zinc-800/50 hover:bg-zinc-700 text-zinc-300 hover:text-white"
                            disabled={currentIndex === 0}
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border-emerald-500/50 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 hover:text-emerald-300"
                            disabled={currentIndex === totalSlides - 1}
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {getCurrentPosts().map((post, index) => (
                            <BlogCard
                                key={post.slug}
                                post={post}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>

                <div className="flex justify-center mb-8">
                    <div className="flex gap-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentIndex
                                        ? "bg-emerald-400"
                                        : "bg-zinc-600"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium">
                            View More
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
