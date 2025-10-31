"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export default function BlogCard({
    post,
    index,
}: {
    post: any;
    index: number;
}) {
    return (
        <Link href={`/blog/${post.slug}`} className="block group">
            <div 
                className="relative bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/40 backdrop-blur-2xl rounded-2xl overflow-hidden h-full border border-zinc-800/50 transition-all duration-300 group-hover:border-emerald-500/30"
            >
                {/* Content wrapper */}
                <div className="relative z-10">
                    {/* Image section */}
                    <div className="relative h-48 overflow-hidden">
                        <img
                            src={
                                post.image ||
                                `/placeholder.svg?height=224&width=400&query=${post.category} development coding`
                            }
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent" />

                        {/* Category badge */}
                        <div className="absolute top-3 left-3">
                            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 text-xs font-semibold px-2 py-1 shadow-none">
                                {post.category}
                            </Badge>
                        </div>

                        {/* Read time */}
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-md rounded-full px-2 py-1 border border-zinc-600/30">
                            <Clock className="w-3 h-3 text-emerald-400" />
                            <span className="text-xs text-zinc-100 font-medium">
                                {post.readTime}
                            </span>
                        </div>
                    </div>

                    {/* Content section */}
                    <div className="p-5">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags
                                .slice(0, 3)
                                .map((tag: string, tagIndex: number) => (
                                    <span
                                        key={tag}
                                        className="relative text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            {post.tags.length > 3 && (
                                <span 
                                    className="text-xs px-2 py-1 bg-zinc-800/60 text-zinc-300 border border-zinc-600/40 rounded-full font-medium"
                                >
                                    +{post.tags.length - 3}
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h3 
                            className="text-xl font-bold mb-2 leading-tight text-white"
                        >
                            {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-zinc-400 mb-4 text-sm leading-relaxed line-clamp-2">
                            {post.excerpt}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-3 border-t border-zinc-800/50">
                            <div className="flex items-center gap-2">
                                {/* Avatar */}
                                <div className="relative">
                                    <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                                        MA
                                    </div>
                                </div>
                                
                                <div>
                                    <h6 className="text-white font-semibold text-xs">
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

                            {/* Button */}
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400 hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400 transition-all duration-300"
                            >
                                <ArrowRight className="w-3 h-3" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}