"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Post } from "@/types/Posts";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Pagination from "../projects/pagination";


interface BlogListProps {
    posts: Post[];
    currentPage: number;
    totalPages: number;
}

export default function BlogList({ posts, currentPage, totalPages }: BlogListProps) {
    return (
        <>
            <div className="space-y-6 mb-10">
                {posts.map((post, index) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                        <div className="relative bg-gradient-to-br from-zinc-900/80 via-zinc-800/40 to-zinc-900/20 backdrop-blur-md rounded-2xl overflow-hidden border border-zinc-800/50 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:shadow-lg group-hover:shadow-emerald-500/10 transform group-hover:-translate-y-1">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-64 h-48 md:h-auto overflow-hidden relative flex-shrink-0">
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-900/80 via-zinc-900/20 to-transparent z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="absolute top-4 left-4 z-20">
                                        <Badge className="bg-black/70 backdrop-blur-sm text-emerald-400 border border-emerald-500/30 font-semibold text-xs px-3 py-1">
                                            {post.category?.name || "Uncategorized"}
                                        </Badge>
                                    </div>

                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 border border-zinc-700/50">
                                            <span className="text-zinc-300 text-xs flex items-center">
                                                <Clock className="h-3 w-3 mr-1" />
                                                {Math.ceil(
                                                    post.content.replace(/<[^>]*>/g, "").split(/\s+/).length / 200
                                                )}
                                                m
                                            </span>
                                        </div>
                                    </div>

                                    <img
                                        src={
                                            post.featuredImage ||
                                            "/placeholder.svg?height=200&width=300&query=blog post cover"
                                        }
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <span className="text-emerald-400 text-sm flex items-center">
                                            <Calendar className="h-4 w-4 mr-1.5" />
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </span>
                                        <div className="w-1 h-1 bg-zinc-600 rounded-full" />
                                        <span className="text-zinc-400 text-sm">By {post.author.name}</span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-emerald-400 transition-colors duration-300">
                                        {post.title}
                                    </h3>

                                    <p className="text-zinc-300 mb-5 text-base leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500/30">
                                                <img
                                                    src={
                                                        post.author.email
                                                            ? `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                                                  post.author.name
                                                              )}&background=10b981&color=fff`
                                                            : "/placeholder.svg?height=40&width=40&query=author avatar"
                                                    }
                                                    alt={post.author.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <span className="text-sm text-zinc-200 font-medium block">
                                                    {post.author.name}
                                                </span>
                                            </div>
                                        </div>

                                        <Button
                                            variant="ghost"
                                            className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 px-4 py-2 transition-all duration-300"
                                        >
                                            <span className="mr-2">Read Article</span>
                                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} />}
        </>
    );
}
