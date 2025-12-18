"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Category } from "@/types/Category";
import { Post } from "@/types/Posts";
import { Clock, ClockIcon, Search, Tag, TrendingUp, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface BlogPageSidebarProps {
    categories: Category[];
    popularPosts: Post[];
    recentPosts: Post[];
}

export default function BlogPageSidebar({ categories, popularPosts, recentPosts }: BlogPageSidebarProps) {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="lg:col-span-4 space-y-6">
            {/* Search */}
            <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/30">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Search className="h-5 w-5 mr-2 text-emerald-400" />
                    Search Articles
                </h3>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 h-5 w-5" />
                    <Input
                        type="text"
                        placeholder="Search by title, category, or tags..."
                        value={searchTerm}
                        onChange={(e) =>
                            setSearchTerm(e.target.value)
                        }
                        className="pl-10 bg-zinc-800/70 border-zinc-700 focus:border-emerald-400 text-base py-5 transition-all duration-300 focus:ring-2 focus:ring-emerald-500/30 focus:ring-offset-0 focus:ring-offset-zinc-900"
                    />
                </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/30">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-emerald-400" />
                    Popular Articles
                </h3>
                <div className="space-y-4">
                    {popularPosts.map((post, index) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block group"
                        >
                            <div className="flex gap-3 p-3 rounded-xl hover:bg-zinc-800/30 transition-all duration-300">
                                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-zinc-700/50">
                                    <img
                                        src={
                                            post.featuredImage ||
                                            "/placeholder.svg?height=64&width=64&query=popular post"
                                        }
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-emerald-400 transition-colors duration-300">
                                        {post.title}
                                    </h4>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-xs text-zinc-500 flex items-center">
                                            <Clock className="h-3 w-3 mr-1" />{" "}
                                            {0}m
                                        </span>
                                        <span className="text-xs text-zinc-500">
                                            •
                                        </span>
                                        <span className="text-xs text-zinc-500">
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/30">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                    <ClockIcon className="h-5 w-5 mr-2 text-emerald-400" />
                    Recent Articles
                </h3>
                <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block group"
                        >
                            <div className="flex gap-3 p-3 rounded-xl hover:bg-zinc-800/30 transition-all duration-300">
                                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-zinc-700/50">
                                    <img
                                        src={
                                            post.featuredImage ||
                                            "/placeholder.svg?height=64&width=64&query=recent post"
                                        }
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-emerald-400 transition-colors duration-300">
                                        {post.title}
                                    </h4>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-xs text-zinc-500">
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Categories */}
            <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/30">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Tag className="h-5 w-5 mr-2 text-emerald-400" />
                    Categories
                </h3>
                <div className="space-y-2">
                    {categories.map((category) => {
                        return (
                            <Link
                                key={category.id}
                                href={`/blog?category=${category.slug}`}
                                className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-zinc-800/50 transition-all duration-300"
                            >
                                <span className="font-medium">
                                    {category.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Tag Cloud */}
            <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/30">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Tag className="h-5 w-5 mr-2 text-emerald-400" />
                    Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                    {['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Python', 'Django', 'Flask', 'Vue.js', 'Angular', 'Svelte', 'SvelteKit', 'Nuxt.js', 'NestJS', 'Strapi', 'Sanity'].map((tag, index) => {
                        return (
                            <Link
                                key={tag}
                                href={`/blog?tag=${tag.toLowerCase()}`}
                                className="px-3 py-1.5 text-sm rounded-full bg-zinc-800/50 hover:bg-emerald-500/20 border border-zinc-700/50 hover:border-emerald-500/30 transition-all duration-300"
                            >
                                {tag}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Subscribe */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-sm rounded-2xl p-6 border border-emerald-800/40 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-emerald-500/20 p-2 rounded-lg">
                        <User className="h-5 w-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-bold">
                        Stay Updated
                    </h3>
                </div>
                <p className="text-zinc-300 mb-4 text-sm">
                    Get the latest articles delivered to your
                    inbox.
                </p>
                <div className="space-y-3">
                    <Input
                        type="email"
                        placeholder="Your email address"
                        className="bg-zinc-800/70 border-zinc-700 focus:border-emerald-400 py-5 transition-all duration-300 focus:ring-2 focus:ring-emerald-500/30 focus:ring-offset-0 focus:ring-offset-zinc-900"
                    />
                    <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-5 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 transform hover:-translate-y-0.5">
                        Subscribe to Newsletter
                    </Button>
                </div>
            </div>
        </div>
    );
}
