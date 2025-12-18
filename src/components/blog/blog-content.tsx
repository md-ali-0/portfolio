"use client";

import { Badge } from "@/components/ui/badge";
import { Post } from "@/types/Posts";
import { motion } from "framer-motion";
import { Calendar, Clock, Eye, Share2, User } from "lucide-react";

interface BlogContentProps {
    post: Post;
}

export default function BlogContent({ post }: BlogContentProps) {
    // Calculate read time
    const calculateReadTime = (content: string) => {
        const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
        return Math.ceil(words / 200);
    };

    const readTime = calculateReadTime(post.content);

    return (
        <motion.article
            className="lg:col-span-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800">
                {/* Post Header */}
                <div className="mb-8">
                    {/* Category */}
                    {post.category && (
                        <Badge className="bg-emerald-500 text-black hover:bg-emerald-600 mb-4">
                            {post.category.name}
                        </Badge>
                    )}

                    {/* Title */}
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 pb-6 border-b border-zinc-800">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{readTime} min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            <span>{post.viewCount} views</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Share2 className="h-4 w-4" />
                            <span>{post.shareCount} shares</span>
                        </div>
                    </div>
                </div>

                {/* Post Content */}
                <div className="prose prose-lg prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-zinc-800">
                        <h3 className="text-lg font-medium mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                                <motion.div
                                    key={tag}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <Badge
                                        variant="outline"
                                        className="border-zinc-700 hover:border-emerald-500 hover:text-emerald-400 transition-colors py-1.5 px-3"
                                    >
                                        #{tag}
                                    </Badge>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.article>
    );
}
