"use client";

import MagneticElement from "@/components/magnetic-element";
import { Button } from "@/components/ui/button";
import { Post } from "@/types/Posts";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";

interface BlogSidebarProps {
    post: Post;
    relatedPosts?: Post[];
}

export default function BlogSidebar({ post, relatedPosts = [] }: BlogSidebarProps) {
    return (
        <motion.aside
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
        >
            {/* Post Info */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 mb-8">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-zinc-800">Post Information</h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="text-zinc-400 text-sm">Published</h4>
                        <p className="font-medium">{new Date(post.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <h4 className="text-zinc-400 text-sm">Last Updated</h4>
                        <p className="font-medium">{new Date(post.updatedAt).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <h4 className="text-zinc-400 text-sm">Comments</h4>
                        <p className="font-medium flex items-center gap-2">
                            <MessageCircle className="h-4 w-4" />
                            {post.commentsCount}
                        </p>
                    </div>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800">
                    <MagneticElement strength={40}>
                        <Link href="/blog">
                            <Button
                                variant="outline"
                                className="w-full border-emerald-400 text-emerald-400"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Blog
                            </Button>
                        </Link>
                    </MagneticElement>
                </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800">
                    <h3 className="text-xl font-bold mb-6 pb-4 border-b border-zinc-800">Related Posts</h3>
                    <div className="space-y-6">
                        {relatedPosts.map((relatedPost, index) => (
                            <motion.div
                                key={relatedPost.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Link href={`/blog/${relatedPost.slug}`} className="block group">
                                    <div className="flex gap-4">
                                        {relatedPost.featuredImage && (
                                            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                                <img
                                                    src={relatedPost.featuredImage}
                                                    alt={relatedPost.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    width={80}
                                                    height={80}
                                                />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <h4 className="font-medium line-clamp-2 group-hover:text-emerald-400 transition-colors">
                                                {relatedPost.title}
                                            </h4>
                                            <p className="text-sm text-zinc-400 mt-1 flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {new Date(relatedPost.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-zinc-800">
                        <MagneticElement strength={40}>
                            <Link href="/blog">
                                <Button
                                    variant="ghost"
                                    className="w-full text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10"
                                >
                                    View All Posts
                                </Button>
                            </Link>
                        </MagneticElement>
                    </div>
                </div>
            )}
        </motion.aside>
    );
}
