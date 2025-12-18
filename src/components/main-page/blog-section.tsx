"use client";

import { Button } from "@/components/ui/button";
import { Post } from "@/types/Posts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import BlogCard from "../blog/blog-card";

interface BlogSectionProps {
    posts: Post[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const postsPerSlide = 3;
    const totalSlides = Math.ceil(posts.length / postsPerSlide);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const getCurrentPosts = () => {
        const startIndex = currentIndex * postsPerSlide;
        return posts.slice(startIndex, startIndex + postsPerSlide);
    };

    return (
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-zinc-950">
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

            <div className="container mx-auto relative z-10 px-4 sm:px-6">
                {/* Header section */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2">
                            Latest
                            <span className="ms-3 text-2xl sm:text-3xl md:text-5xl font-medium text-emerald-400 relative">
                                Articles
                                <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                            </span>
                        </h2>
                        <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
                            Insights, tutorials, and best practices from the development trenches.
                        </p>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex items-center gap-2">
                        <div>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-white hover:border-zinc-600 transition-all duration-300"
                                disabled={currentIndex === 0}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                        </div>
                        <div>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full border border-emerald-500/50 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400 transition-all duration-300"
                                disabled={currentIndex === totalSlides - 1}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Blog posts grid */}
                <div className="mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {getCurrentPosts().map((post, index) => (
                            <div key={post.slug}>
                                <BlogCard post={post} index={index} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-center">
                    <div className="flex gap-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-6 h-2.5 rounded-lg transition-all duration-300 ${
                                    index === currentIndex
                                        ? "bg-gradient-to-r from-emerald-400 to-teal-400 border border-emerald-300/50"
                                        : "bg-zinc-700/50 border border-zinc-600 hover:bg-zinc-600 hover:border-zinc-500"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
