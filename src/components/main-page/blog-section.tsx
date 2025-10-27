"use client"

import { Button } from "@/components/ui/button";
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
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-emerald-950/5 to-zinc-950" />
            </div>

            <div className="container mx-auto relative z-10 px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-12">
                    <div 
                        className="transition-all duration-500 ease-in-out transform hover:translate-y-[-5px]"
                    >
                        <h2 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                            <span className="text-emerald-400">Latest</span>
                            <span>Articles</span>
                            <Sparkles className="h-5 w-5 text-emerald-400/80 animate-pulse" />
                        </h2>
                        <p className="text-zinc-400 max-w-xl">
                            Insights, tutorials, and best practices from the
                            development trenches.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-all duration-300 hover:scale-105"
                            disabled={currentIndex === 0}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full border-emerald-500/50 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 hover:text-emerald-300 transition-all duration-300 hover:scale-105"
                            disabled={currentIndex === totalSlides - 1}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div 
                    className="mb-10 transition-opacity duration-500 ease-in-out"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {getCurrentPosts().map((post, index) => (
                            <div 
                                key={post.slug}
                                className="transition-all duration-300 ease-in-out hover:-translate-y-1"
                            >
                                <BlogCard
                                    post={post}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex gap-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? "bg-emerald-500 scale-125"
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