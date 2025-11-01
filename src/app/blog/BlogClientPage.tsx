"use client";
import Breadcrumb from "@/components/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/data/blog-data";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  ClockIcon,
  Search,
  Tag,
  TrendingUp,
  User
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredPosts, setFilteredPosts] = useState(blogPosts);
    const [featuredPost, setFeaturedPost] = useState<any>(null);

    const categories = Array.from(
        new Set(blogPosts.map((post) => post.category))
    );
    const allTags = Array.from(
        new Set(blogPosts.flatMap((post) => post.tags || []))
    );

    const popularPosts = [...blogPosts]
        .sort((a, b) => b.readTime - a.readTime)
        .slice(0, 4);
    const recentPosts = [...blogPosts].slice(0, 4);
    const editorsPicks = blogPosts
        .filter((post) => post.featured || post.category === "Web Development")
        .slice(0, 3);

    useEffect(() => {
        const featured =
            blogPosts.find((post) => post.featured) || blogPosts[0];
        setFeaturedPost(featured);
    }, []);

    useEffect(() => {
        let filtered = blogPosts;

        if (searchTerm) {
            filtered = filtered.filter(
                (post) =>
                    post.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    post.excerpt
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    post.category
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    (post.tags &&
                        post.tags.some((tag) =>
                            tag.toLowerCase().includes(searchTerm.toLowerCase())
                        ))
            );
        }

        setFilteredPosts(filtered);
        setCurrentPage(1);
    }, [searchTerm]);

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const currentPosts = filteredPosts.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
            {/* Breadcrumb */}
            <Breadcrumb
                title="Blog"
                description="Explore my thoughts, tutorials, and insights on web development, design, and technology."
            />

            {/* Featured Post Section */}
            {featuredPost && (
                <section className="relative py-16 overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 backdrop-blur-md rounded-3xl overflow-hidden border border-zinc-800/50 shadow-2xl shadow-emerald-500/10">
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent z-10" />
                                    <img
                                        src={
                                            featuredPost.coverImage ||
                                            "/placeholder.svg?height=400&width=600&query=featured blog post"
                                        }
                                        alt={featuredPost.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <Link
                                            href={`/blog/category/${featuredPost.category.toLowerCase()}`}
                                        >
                                            <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold text-sm px-3 py-1 hover:bg-emerald-500/30 transition-colors">
                                                {featuredPost.category}
                                            </Badge>
                                        </Link>
                                        <span className="text-zinc-500">•</span>
                                        <span className="text-emerald-400 text-sm flex items-center">
                                            <Calendar className="h-4 w-4 mr-1.5" />{" "}
                                            {featuredPost.date}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                                        {featuredPost.title}
                                    </h2>

                                    <p className="text-zinc-300 mb-6 text-base md:text-lg leading-relaxed">
                                        {featuredPost.excerpt}
                                    </p>

                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/30">
                                                <img
                                                    src={
                                                        featuredPost.author
                                                            .avatar ||
                                                        "/placeholder.svg?height=48&width=48&query=author avatar"
                                                    }
                                                    alt={
                                                        featuredPost.author.name
                                                    }
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="font-semibold text-white">
                                                    {featuredPost.author.name}
                                                </p>
                                                <p className="text-xs text-zinc-400">
                                                    {featuredPost.author.title}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center text-zinc-400 text-sm">
                                                <Clock className="h-4 w-4 mr-1.5" />
                                                <span>
                                                    {featuredPost.readTime} min
                                                    read
                                                </span>
                                            </div>

                                            <Link
                                                href={`/blog/${featuredPost.slug}`}
                                            >
                                                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-2.5 rounded-lg">
                                                    Read Article
                                                    <ArrowRight className="h-4 w-4 ml-2" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className="py-16 sm:py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
                                <h2 className="text-2xl sm:text-3xl font-bold flex items-center">
                                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-2 rounded-lg mr-3 backdrop-blur-sm">
                                        <Tag className="h-5 w-5" />
                                    </span>
                                    Latest Articles
                                </h2>
                                <div className="text-zinc-400 text-sm">
                                    {filteredPosts.length}{" "}
                                    {filteredPosts.length === 1
                                        ? "article"
                                        : "articles"}
                                </div>
                            </div>

                            {currentPosts.length === 0 ? (
                                <div className="text-center py-16 sm:py-20 bg-zinc-900/30 backdrop-blur-sm rounded-2xl border border-zinc-800/50">
                                    <div className="text-4xl sm:text-5xl mb-4">
                                        🔍
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3">
                                        No articles found
                                    </h3>
                                    <p className="text-zinc-400 mb-6">
                                        Try adjusting your search criteria
                                    </p>
                                    <Button
                                        variant="outline"
                                        onClick={() => setSearchTerm("")}
                                        className="border-emerald-400 text-emerald-400 bg-transparent hover:bg-emerald-400/10 px-6 py-2.5"
                                    >
                                        Clear Search
                                    </Button>
                                </div>
                            ) : (
                                <>
                                    <div className="space-y-6 mb-10">
                                        {currentPosts.map((post, index) => (
                                            <Link
                                                key={post.slug}
                                                href={`/blog/${post.slug}`}
                                                className="block group"
                                            >
                                                <div className="relative bg-gradient-to-br from-zinc-900/80 via-zinc-800/40 to-zinc-900/20 backdrop-blur-md rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-emerald-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/10">
                                                    <div className="flex flex-col md:flex-row">
                                                        <div className="md:w-64 h-48 md:h-auto overflow-hidden relative flex-shrink-0">
                                                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-900/80 via-zinc-900/20 to-transparent z-10" />
                                                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                            <div className="absolute top-4 left-4 z-20">
                                                                <Badge className="bg-black/70 backdrop-blur-sm text-emerald-400 border border-emerald-500/30 font-semibold text-xs px-3 py-1">
                                                                    {
                                                                        post.category
                                                                    }
                                                                </Badge>
                                                            </div>

                                                            <div className="absolute top-4 right-4 z-20">
                                                                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 border border-zinc-700/50">
                                                                    <span className="text-zinc-300 text-xs flex items-center">
                                                                        <Clock className="h-3 w-3 mr-1" />{" "}
                                                                        {
                                                                            post.readTime
                                                                        }
                                                                        m
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <img
                                                                src={
                                                                    post.coverImage ||
                                                                    "/placeholder.svg?height=200&width=300&query=blog post cover"
                                                                }
                                                                alt={post.title}
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                        </div>

                                                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                                                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                                                <span className="text-emerald-400 text-sm flex items-center">
                                                                    <Calendar className="h-4 w-4 mr-1.5" />{" "}
                                                                    {post.date}
                                                                </span>
                                                                <div className="w-1 h-1 bg-zinc-600 rounded-full" />
                                                                <span className="text-zinc-400 text-sm">
                                                                    By{" "}
                                                                    {
                                                                        post
                                                                            .author
                                                                            .name
                                                                    }
                                                                </span>
                                                            </div>

                                                            <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-emerald-400 transition-colors">
                                                                {post.title}
                                                            </h3>

                                                            <p className="text-zinc-300 mb-5 text-base leading-relaxed">
                                                                {post.excerpt}
                                                            </p>

                                                            <div className="flex items-center justify-between">
                                                                <div className="flex items-center">
                                                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500/30">
                                                                        <img
                                                                            src={
                                                                                post
                                                                                    .author
                                                                                    .avatar ||
                                                                                "/placeholder.svg?height=40&width=40&query=author avatar"
                                                                            }
                                                                            alt={
                                                                                post
                                                                                    .author
                                                                                    .name
                                                                            }
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    </div>
                                                                    <div className="ml-3">
                                                                        <span className="text-sm text-zinc-200 font-medium block">
                                                                            {
                                                                                post
                                                                                    .author
                                                                                    .name
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <Button
                                                                    variant="ghost"
                                                                    className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 px-4 py-2"
                                                                >
                                                                    <span className="mr-2">
                                                                        Read
                                                                        Article
                                                                    </span>
                                                                    <ArrowRight className="h-4 w-4" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                    {totalPages > 1 && (
                                        <div className="flex justify-center items-center gap-2 flex-wrap">
                                            <Button
                                                variant="outline"
                                                onClick={() =>
                                                    handlePageChange(
                                                        currentPage - 1
                                                    )
                                                }
                                                disabled={currentPage === 1}
                                                className="border-zinc-700 hover:border-emerald-400 hover:text-emerald-400 bg-transparent rounded-lg px-4 py-2"
                                            >
                                                <ChevronLeft className="h-4 w-4 mr-2" />
                                                Previous
                                            </Button>

                                            {Array.from(
                                                {
                                                    length: Math.min(
                                                        totalPages,
                                                        5
                                                    ),
                                                },
                                                (_, i) => {
                                                    let page;
                                                    if (totalPages <= 5) {
                                                        page = i + 1;
                                                    } else if (
                                                        currentPage <= 3
                                                    ) {
                                                        page = i + 1;
                                                    } else if (
                                                        currentPage >=
                                                        totalPages - 2
                                                    ) {
                                                        page =
                                                            totalPages - 4 + i;
                                                    } else {
                                                        page =
                                                            currentPage - 2 + i;
                                                    }
                                                    return (
                                                        <Button
                                                            key={page}
                                                            variant={
                                                                currentPage ===
                                                                page
                                                                    ? "default"
                                                                    : "outline"
                                                            }
                                                            onClick={() =>
                                                                handlePageChange(
                                                                    page
                                                                )
                                                            }
                                                            className={
                                                                currentPage ===
                                                                page
                                                                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg px-4 py-2"
                                                                    : "border-zinc-700 hover:border-emerald-400 hover:text-emerald-400 bg-transparent rounded-lg px-4 py-2"
                                                            }
                                                        >
                                                            {page}
                                                        </Button>
                                                    );
                                                }
                                            )}

                                            <Button
                                                variant="outline"
                                                onClick={() =>
                                                    handlePageChange(
                                                        currentPage + 1
                                                    )
                                                }
                                                disabled={
                                                    currentPage === totalPages
                                                }
                                                className="border-zinc-700 hover:border-emerald-400 hover:text-emerald-400 bg-transparent rounded-lg px-4 py-2"
                                            >
                                                Next
                                                <ChevronRight className="h-4 w-4 ml-2" />
                                            </Button>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        <div className="lg:col-span-4 space-y-6">
                            {/* Search */}
                            <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50 shadow-lg">
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
                                        className="pl-10 bg-zinc-800/70 border-zinc-700 focus:border-emerald-400 text-base py-5"
                                    />
                                </div>
                            </div>

                            {/* Popular Posts */}
                            <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50 shadow-lg">
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
                                            <div className="flex gap-3 p-3 rounded-xl hover:bg-zinc-800/30 transition-colors">
                                                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-zinc-700/50">
                                                    <img
                                                        src={
                                                            post.coverImage ||
                                                            "/placeholder.svg?height=64&width=64&query=popular post"
                                                        }
                                                        alt={post.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-emerald-400 transition-colors">
                                                        {post.title}
                                                    </h4>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <span className="text-xs text-zinc-500 flex items-center">
                                                            <Clock className="h-3 w-3 mr-1" />{" "}
                                                            {post.readTime}m
                                                        </span>
                                                        <span className="text-xs text-zinc-500">
                                                            •
                                                        </span>
                                                        <span className="text-xs text-zinc-500">
                                                            {post.date}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50 shadow-lg">
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
                                            <div className="flex gap-3 p-3 rounded-xl hover:bg-zinc-800/30 transition-colors">
                                                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-zinc-700/50">
                                                    <img
                                                        src={
                                                            post.coverImage ||
                                                            "/placeholder.svg?height=64&width=64&query=recent post"
                                                        }
                                                        alt={post.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-emerald-400 transition-colors">
                                                        {post.title}
                                                    </h4>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <span className="text-xs text-zinc-500">
                                                            {post.date}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50 shadow-lg">
                                <h3 className="text-lg font-bold mb-4 flex items-center">
                                    <Tag className="h-5 w-5 mr-2 text-emerald-400" />
                                    Categories
                                </h3>
                                <div className="space-y-2">
                                    {categories.map((category) => {
                                        const count = blogPosts.filter(
                                            (post) => post.category === category
                                        ).length;
                                        return (
                                            <Link
                                                key={category}
                                                href={`/blog?category=${category.toLowerCase()}`}
                                                className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-zinc-800/50 transition-colors"
                                            >
                                                <span className="font-medium">
                                                    {category}
                                                </span>
                                                <Badge
                                                    variant="outline"
                                                    className="border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
                                                >
                                                    {count}
                                                </Badge>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Tag Cloud */}
                            <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50 shadow-lg">
                                <h3 className="text-lg font-bold mb-4 flex items-center">
                                    <Tag className="h-5 w-5 mr-2 text-emerald-400" />
                                    Popular Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {allTags.slice(0, 15).map((tag, index) => {
                                        const count = blogPosts.filter(
                                            (post) =>
                                                post.tags &&
                                                post.tags.includes(tag)
                                        ).length;
                                        return (
                                            <Link
                                                key={tag}
                                                href={`/blog?tag=${tag.toLowerCase()}`}
                                                className="px-3 py-1.5 text-sm rounded-full bg-zinc-800/50 hover:bg-emerald-500/20 border border-zinc-700/50 hover:border-emerald-500/30 transition-all"
                                            >
                                                {tag}{" "}
                                                <span className="text-zinc-500">
                                                    ({count})
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Subscribe */}
                            <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-sm rounded-2xl p-6 border border-emerald-800/40 shadow-lg">
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
                                        className="bg-zinc-800/70 border-zinc-700 focus:border-emerald-400 py-5"
                                    />
                                    <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-5">
                                        Subscribe to Newsletter
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
