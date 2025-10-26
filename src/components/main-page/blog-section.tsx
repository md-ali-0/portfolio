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
            className="group bg-gradient-to-br from-zinc-900/60 to-zinc-900/20 backdrop-blur-xl rounded-2xl border border-zinc-800 overflow-hidden h-full transition-all duration-300 hover:border-emerald-500/30"
            transition={{ duration: 0.3 }}
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={
                        post.image ||
                        `/placeholder.svg?height=224&width=400&query=${post.category} development coding`
                    }
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />

                <div className="absolute top-3 left-3">
                    <Badge className="bg-emerald-500/90 text-white border-0 text-xs font-medium px-2.5 py-1">
                        {post.category}
                    </Badge>
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/30 rounded-full px-2 py-1 border border-zinc-700/50">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span className="text-xs text-zinc-200">
                        {post.readTime}
                    </span>
                </div>
            </div>

            <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags
                        .slice(0, 3)
                        .map((tag: string, tagIndex: number) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    {post.tags.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 rounded-full">
                            +{post.tags.length - 3}
                        </span>
                    )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-emerald-400 transition-colors duration-300">
                    {post.title}
                </h3>

                <p className="text-zinc-400 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-xs font-bold">
                            MA
                        </div>
                        <div>
                            <h6 className="text-white font-medium text-sm">
                                {post.author}
                            </h6>
                            <div className="flex items-center gap-1 text-zinc-500 text-xs">
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
                        className="w-9 h-9 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/30"
                    >
                        <ArrowRight className="w-4 h-4" />
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
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-zinc-950">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-emerald-950/5 to-zinc-950" />
            </div>

            <div className="container mx-auto relative z-10 px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                            <span className="text-emerald-400">Latest</span>
                            <span>Articles</span>
                            <Sparkles className="h-5 w-5 text-emerald-400/80" />
                        </h2>
                        <p className="text-zinc-400 max-w-xl">
                            Insights, tutorials, and best practices from the
                            development trenches.
                        </p>
                    </motion.div>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                            disabled={currentIndex === 0}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full border-emerald-500/50 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 hover:text-emerald-300"
                            disabled={currentIndex === totalSlides - 1}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mb-10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {getCurrentPosts().map((post, index) => (
                            <BlogCard
                                key={post.slug}
                                post={post}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>

                <div className="flex justify-center">
                    <div className="flex gap-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? "bg-emerald-500"
                                        : "bg-zinc-700 hover:bg-zinc-600"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}