"use client";

import { Badge } from "@/components/ui/badge";
import { Post } from "@/types/Posts";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    post: Post;
    index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
    // Calculate read time (rough estimate: 200 words per minute)
    const calculateReadTime = (content: string) => {
        const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
        return Math.ceil(words / 200);
    };

    const readTime = calculateReadTime(post.content);
    
    return (
        <motion.article
            className="group bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
        >
            <Link href={`/blog/${post.slug}`}>
                {/* Featured Image */}
                <div className="relative aspect-video overflow-hidden bg-zinc-800">
                    {post.featuredImage ? (
                        <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                            <span className="text-4xl font-bold text-zinc-700">
                                {post.title.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    )}
                    {/* Category Badge */}
                    {post.category && (
                        <div className="absolute top-4 left-4">
                            <Badge className="bg-emerald-500 text-black hover:bg-emerald-600">
                                {post.category.name}
                            </Badge>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-zinc-400 mb-3">
                        <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{readTime} min read</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    {post.excerpt && (
                        <p className="text-zinc-400 mb-4 line-clamp-3">{post.excerpt}</p>
                    )}

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                                <Badge
                                    key={tag}
                                    variant="outline"
                                    className="border-zinc-700 text-zinc-400 hover:border-emerald-500 hover:text-emerald-400"
                                >
                                    #{tag}
                                </Badge>
                            ))}
                        </div>
                    )}

                    {/* Read More */}
                    <div className="flex items-center text-emerald-400 font-medium group-hover:gap-2 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
