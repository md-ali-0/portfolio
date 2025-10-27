"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogCard({
    post,
    index,
}: {
    post: any;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/40 backdrop-blur-2xl rounded-3xl overflow-hidden h-full"
        >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/50 via-teal-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-zinc-900/95 via-zinc-800/90 to-zinc-900/95 backdrop-blur-2xl" />
            
            {/* Content wrapper */}
            <div className="relative z-10">
                {/* Image section with holographic effect */}
                <div className="relative h-56 overflow-hidden">
                    {/* Holographic shimmer overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-emerald-400/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                    
                    <img
                        src={
                            post.image ||
                            `/placeholder.svg?height=224&width=400&query=${post.category} development coding`
                        }
                        alt={post.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />

                    {/* Category badge with glow */}
                    <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 text-xs font-semibold px-3 py-1.5 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow duration-300">
                            {post.category}
                        </Badge>
                    </div>

                    {/* Read time with enhanced styling */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 border border-zinc-600/30">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-xs text-zinc-100 font-medium">
                            {post.readTime}
                        </span>
                    </div>
                </div>

                {/* Content section */}
                <div className="p-6">
                    {/* Tags with neon glow effect */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags
                            .slice(0, 3)
                            .map((tag: string, tagIndex: number) => (
                                <motion.span
                                    key={tag}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: tagIndex * 0.1 }}
                                    className="relative text-xs px-3 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full font-medium hover:bg-emerald-500/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 cursor-default"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        {post.tags.length > 3 && (
                            <span className="text-xs px-3 py-1.5 bg-zinc-800/60 text-zinc-300 border border-zinc-600/40 rounded-full font-medium">
                                +{post.tags.length - 3}
                            </span>
                        )}
                    </div>

                    {/* Title with gradient on hover */}
                    <h3 className="text-xl font-bold mb-3 leading-tight bg-gradient-to-r from-white to-zinc-100 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-teal-400 transition-all duration-500">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-zinc-400 group-hover:text-zinc-300 mb-5 text-sm leading-relaxed transition-colors duration-300">
                        {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                        <div className="flex items-center gap-3">
                            {/* Enhanced avatar with ring */}
                            <div className="relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-75 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
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

                        {/* Enhanced button with glow */}
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 45 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30 hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
