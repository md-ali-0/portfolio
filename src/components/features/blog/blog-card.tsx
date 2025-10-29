"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
            <motion.div 
                className="relative bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/40 backdrop-blur-2xl rounded-2xl overflow-hidden h-full border border-zinc-800/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-emerald-500/20"
                transition={{ duration: 0.3 }}
            >
                {/* Animated gradient background on hover */}

                {/* Content wrapper */}
                <div className="relative z-10">
                    {/* Image section */}
                    <div className="relative h-56 overflow-hidden">
                        <motion.img
                            src={
                                post.image ||
                                `/placeholder.svg?height=224&width=400&query=${post.category} development coding`
                            }
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Enhanced gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent group-hover:from-zinc-900/95 transition-all duration-500" />

                        {/* Animated shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                        />

                        {/* Category badge */}
                        <motion.div 
                            className="absolute top-4 left-4"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 text-xs font-semibold px-3 py-1.5 shadow-lg shadow-emerald-500/50">
                                {post.category}
                            </Badge>
                        </motion.div>

                        {/* Read time */}
                        <motion.div 
                            className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-md rounded-full px-3 py-1.5 border border-zinc-600/30"
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            >
                                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                            </motion.div>
                            <span className="text-xs text-zinc-100 font-medium">
                                {post.readTime}
                            </span>
                        </motion.div>
                    </div>

                    {/* Content section */}
                    <div className="p-6">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags
                                .slice(0, 3)
                                .map((tag: string, tagIndex: number) => (
                                    <motion.span
                                        key={tag}
                                        className="relative text-xs px-3 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full font-medium backdrop-blur-sm hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-200"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            {post.tags.length > 3 && (
                                <motion.span 
                                    className="text-xs px-3 py-1.5 bg-zinc-800/60 text-zinc-300 border border-zinc-600/40 rounded-full font-medium backdrop-blur-sm"
                                >
                                    +{post.tags.length - 3}
                                </motion.span>
                            )}
                        </div>

                        {/* Title */}
                        <motion.h3 
                            className="text-xl font-bold mb-3 leading-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-400 transition-all duration-300"
                        >
                            {post.title}
                        </motion.h3>

                        {/* Excerpt */}
                        <p className="text-zinc-400 mb-5 text-sm leading-relaxed line-clamp-2 group-hover:text-zinc-300 transition-colors duration-300">
                            {post.excerpt}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50 group-hover:border-zinc-700/50 transition-colors duration-300">
                            <div className="flex items-center gap-3">
                                {/* Avatar */}
                                <motion.div 
                                    className="relative"
                                    whileHover={{ rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                                    <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                        MA
                                    </div>
                                </motion.div>
                                
                                <div>
                                    <h6 className="text-white font-semibold text-sm group-hover:text-emerald-400 transition-colors duration-300">
                                        {post.author}
                                    </h6>
                                    <div className="flex items-center gap-1.5 text-zinc-400 text-xs group-hover:text-zinc-300 transition-colors duration-300">
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
                            <motion.div
                                whileHover={{ rotate: 0 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400 hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/0 hover:shadow-emerald-500/50"
                                >
                                    <motion.div
                                        animate={{ x: [0, 3, 0] }}
                                        transition={{ 
                                            duration: 1.5, 
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}