"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

export default function BlogCard({
    post,
    index,
}: {
    post: any;
    index: number;
}) {
    return (
        <div className="group relative bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/40 backdrop-blur-2xl rounded-3xl overflow-hidden h-full border border-zinc-800/50 transition-all duration-300 hover:border-emerald-500/50">
            {/* Content wrapper */}
            <div className="relative z-10">
                {/* Image section with subtle effect */}
                <div className="relative h-56 overflow-hidden">
                    <img
                        src={
                            post.image ||
                            `/placeholder.svg?height=224&width=400&query=${post.category} development coding`
                        }
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 text-xs font-semibold px-3 py-1.5 shadow-lg shadow-emerald-500/30">
                            {post.category}
                        </Badge>
                    </div>

                    {/* Read time */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 border border-zinc-600/30">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-xs text-zinc-100 font-medium">
                            {post.readTime}
                        </span>
                    </div>
                </div>

                {/* Content section */}
                <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags
                            .slice(0, 3)
                            .map((tag: string, tagIndex: number) => (
                                <span
                                    key={tag}
                                    className="relative text-xs px-3 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        {post.tags.length > 3 && (
                            <span className="text-xs px-3 py-1.5 bg-zinc-800/60 text-zinc-300 border border-zinc-600/40 rounded-full font-medium">
                                +{post.tags.length - 3}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 leading-tight bg-gradient-to-r from-white to-zinc-100 bg-clip-text text-transparent">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-zinc-400 mb-5 text-sm leading-relaxed">
                        {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                        <div className="flex items-center gap-3">
                            {/* Avatar */}
                            <div className="relative">
                                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                    MA
                                </div>
                            </div>
                            
                            <div>
                                <h6 className="text-white font-semibold text-sm">
                                    {post.author}
                                </h6>
                                <div className="flex items-center gap-1.5 text-zinc-400 text-xs">
                                    <Calendar className="w-3.5 h-3.5" />
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
                            className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30 hover:border-emerald-400/50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M5 12h14"/>
                                <path d="m12 5 7 7-7 7"/>
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}