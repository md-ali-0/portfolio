"use client";

import AnimatedButton from "@/components/animated-button";
import BackToTop from "@/components/back-to-top";
import CursorAlternative from "@/components/cursor-alternative";
import DarkPatternBackground from "@/components/dark-pattern-background";
import MagneticElement from "@/components/magnetic-element";
import RippleEffect from "@/components/ripple-effect";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog-data";
import { useMobile } from "@/hooks/use-mobile";
import { generateBlogJsonLd } from "@/lib/metadata";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bookmark,
  Calendar,
  Clock,
  Eye,
  Github,
  Heart,
  Linkedin,
  Mail,
  MessageCircle,
  Share2,
  Tag,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPostClient({
    params,
}: {
    params: { slug: string };
}) {
    const slug = params.slug;
    console.log("BlogPostClient slug:", slug);
    const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

    if (!post) {
        notFound();
    }

    const [isLoading, setIsLoading] = useState(true);
    const isMobile = useMobile();
    const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        // Simulate loading data
        setIsLoading(true);
        setTimeout(() => {
            // Get related posts (excluding current post)
            const related = blogPosts
                .filter((p) => p.slug !== slug && p.category === post?.category)
                .slice(0, 3);
            setRelatedPosts(related);

            setIsLoading(false);
        }, 500);
    }, [slug, post?.category]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
                <div className="relative">
                    <div className="absolute inset-0 animate-pulse">
                        <div
                            className="absolute top-0 left-0 w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0s" }}
                        ></div>
                        <div
                            className="absolute top-0 right-0 w-2 h-2 bg-teal-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                            className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                        ></div>
                        <div
                            className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.6s" }}
                        ></div>
                    </div>
                    <div className="h-16 w-16 rounded-full border-4 border-emerald-400/30 border-t-emerald-400 animate-spin"></div>
                    <div className="mt-4 text-emerald-400 font-medium">
                        Loading post...
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-400/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>

            {/* JSON-LD structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBlogJsonLd(post)),
                }}
            />
            {!isMobile && <CursorAlternative />}
            {!isMobile && <RippleEffect />}
            <DarkPatternBackground />
            <BackToTop />

            <header className="sticky py-6 border-b border-zinc-800/50 backdrop-blur-xl bg-zinc-950/80 top-0 z-50">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <MagneticElement strength={40}>
                            <Link
                                href="/"
                                className="text-xl font-bold relative group"
                                data-cursor="link"
                                data-cursor-text="Home"
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
                                    Ali<span className="text-white">.</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </Link>
                        </MagneticElement>
                        <nav className="hidden md:flex gap-8 items-center">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Blog", href: "/blog" },
                                { name: "Projects", href: "/projects" },
                                { name: "Contact", href: "/#contact" },
                            ].map((item) => (
                                <MagneticElement key={item.name} strength={40}>
                                    <Link
                                        href={item.href}
                                        className="relative group text-white hover:text-emerald-400 transition-colors duration-300"
                                        data-cursor="link"
                                        data-cursor-text={item.name}
                                    >
                                        {item.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </MagneticElement>
                            ))}
                        </nav>
                        <MagneticElement strength={60}>
                            <Link href="/blog">
                                <AnimatedButton
                                    variant="outline"
                                    className="text-emerald-400 hover:text-emerald-300 transition-all duration-300 border-emerald-400/30 hover:border-emerald-400/60"
                                    dataCursorText="Back to Blog"
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                                    to Blog
                                </AnimatedButton>
                            </Link>
                        </MagneticElement>
                    </div>
                </div>
            </header>

            <section className="relative py-20 lg:py-32">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent opacity-30"></div>
                <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-20 right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                ></div>

                <div className="container mx-auto relative z-10">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <motion.div
                            className="mb-6 flex items-center justify-center gap-3 flex-wrap"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Link
                                href={`/blog/category/${post.category.toLowerCase()}`}
                                className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-full text-sm font-medium hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-300 border border-emerald-500/20 backdrop-blur-sm"
                                data-cursor="link"
                            >
                                {post.category}
                            </Link>
                            <span className="text-zinc-500">•</span>
                            <span className="text-zinc-400 flex items-center text-sm bg-zinc-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
                                <Calendar className="h-4 w-4 mr-1" />{" "}
                                {post.date}
                            </span>
                            <span className="text-zinc-500">•</span>
                            <span className="text-zinc-400 flex items-center text-sm bg-zinc-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
                                <Clock className="h-4 w-4 mr-1" />{" "}
                                {post.readTime} min read
                            </span>
                            <span className="text-zinc-500">•</span>
                            <span className="text-zinc-400 flex items-center text-sm bg-zinc-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
                                <Eye className="h-4 w-4 mr-1" />{" "}
                                {"1.2k"} views
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-white"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            {post.title}
                        </motion.h1>

                        <motion.p
                            className="text-xl lg:text-2xl text-zinc-300 mb-10 leading-relaxed max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {post.excerpt}
                        </motion.p>

                        <motion.div
                            className="flex items-center justify-center gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <div className="flex items-center bg-zinc-900/50 backdrop-blur-sm rounded-full p-2 pr-6 border border-zinc-800/50">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400 mr-4">
                                    <img
                                        src={
                                            post.author.avatar ||
                                            "/placeholder.svg" ||
                                            "/placeholder.svg"
                                        }
                                        alt={post.author.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <p className="font-medium text-white">
                                        {post.author.name}
                                    </p>
                                    <p className="text-sm text-zinc-400">
                                        {post.author.title}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-500/20">
                                <TrendingUp className="h-4 w-4 text-emerald-400" />
                                <span className="text-sm text-emerald-400 font-medium">
                                    Trending
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="relative mb-20">
                <div className="container mx-auto">
                    <motion.div
                        className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20 relative group"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent z-10"></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img
                            src={post.coverImage || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="relative pb-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
                        {/* Main Content */}
                        <motion.div
                            className="lg:col-span-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-zinc-800/50 shadow-2xl">
                                <div className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-zinc-300 prose-p:leading-relaxed prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300 prose-strong:text-white prose-code:text-emerald-400 prose-code:bg-zinc-800/50 prose-code:px-2 prose-code:py-1 prose-code:rounded">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: post.content,
                                        }}
                                    />
                                </div>

                                <div className="mt-16 pt-8 border-t border-zinc-800/50">
                                    <h3 className="text-xl font-bold mb-6 flex items-center text-white">
                                        <Tag className="mr-3 h-6 w-6 text-emerald-400" />{" "}
                                        Tags
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {post.tags.map((tag: string) => (
                                            <Link
                                                key={tag}
                                                href={`/blog/tag/${tag.toLowerCase()}`}
                                                className="px-4 py-2 bg-gradient-to-r from-zinc-800/50 to-zinc-700/50 hover:from-emerald-500/20 hover:to-teal-500/20 rounded-full text-sm transition-all duration-300 border border-zinc-700/50 hover:border-emerald-500/30 backdrop-blur-sm"
                                                data-cursor="link"
                                            >
                                                #{tag}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-zinc-800/50">
                                    <h3 className="text-xl font-bold mb-6 flex items-center text-white">
                                        <Share2 className="mr-3 h-6 w-6 text-emerald-400" />{" "}
                                        Share this post
                                    </h3>
                                    <div className="flex gap-4">
                                        {[
                                            {
                                                name: "Twitter",
                                                color: "bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2]/20 border-[#1DA1F2]/20",
                                            },
                                            {
                                                name: "Facebook",
                                                color: "bg-[#4267B2]/10 text-[#4267B2] hover:bg-[#4267B2]/20 border-[#4267B2]/20",
                                            },
                                            {
                                                name: "LinkedIn",
                                                color: "bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5]/20 border-[#0077B5]/20",
                                            },
                                            {
                                                name: "Copy Link",
                                                color: "bg-zinc-700/20 text-zinc-400 hover:bg-zinc-700/40 border-zinc-700/30",
                                            },
                                        ].map((social) => (
                                            <MagneticElement
                                                key={social.name}
                                                strength={50}
                                            >
                                                <button
                                                    className={`p-4 rounded-xl ${social.color} hover:scale-110 transition-all duration-300 border backdrop-blur-sm`}
                                                    data-cursor="button"
                                                    data-cursor-text={
                                                        social.name
                                                    }
                                                >
                                                    <Share2 className="h-5 w-5" />
                                                </button>
                                            </MagneticElement>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-zinc-800/50">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-8">
                                            <button
                                                className={`flex items-center gap-3 transition-all duration-300 ${
                                                    isLiked
                                                        ? "text-red-400"
                                                        : "text-zinc-400 hover:text-red-400"
                                                }`}
                                                onClick={() =>
                                                    setIsLiked(!isLiked)
                                                }
                                            >
                                                <Heart
                                                    className={`h-6 w-6 ${
                                                        isLiked
                                                            ? "fill-current"
                                                            : ""
                                                    }`}
                                                />
                                                <span className="font-medium">
                                                    {post.likes}
                                                </span>
                                            </button>
                                            <button className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors duration-300">
                                                <MessageCircle className="h-6 w-6" />
                                                <span className="font-medium">
                                                    {post.comments}
                                                </span>
                                            </button>
                                        </div>
                                        <button
                                            className={`flex items-center gap-3 transition-all duration-300 ${
                                                isSaved
                                                    ? "text-emerald-400"
                                                    : "text-zinc-400 hover:text-emerald-400"
                                            }`}
                                            onClick={() => setIsSaved(!isSaved)}
                                        >
                                            <Bookmark
                                                className={`h-6 w-6 ${
                                                    isSaved
                                                        ? "fill-current"
                                                        : ""
                                                }`}
                                            />
                                            <span className="font-medium">
                                                Save
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-16 bg-gradient-to-r from-zinc-800/50 to-zinc-700/30 rounded-2xl p-8 border border-zinc-700/50 backdrop-blur-sm">
                                    <div className="flex items-start gap-6">
                                        <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-emerald-400 flex-shrink-0 shadow-lg shadow-emerald-400/20">
                                            <img
                                                src={
                                                    post.author.avatar ||
                                                    "/placeholder.svg" ||
                                                    "/placeholder.svg"
                                                }
                                                alt={post.author.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {post.author.name}
                                            </h3>
                                            <p className="text-emerald-400 mb-4 font-medium">
                                                {post.author.title}
                                            </p>
                                            <p className="text-zinc-300 leading-relaxed mb-6">
                                                {post.author.bio}
                                            </p>
                                            <div className="flex gap-4">
                                                <MagneticElement strength={40}>
                                                    <AnimatedButton
                                                        variant="outline"
                                                        size="sm"
                                                        className="text-emerald-400 border-emerald-400/30 hover:border-emerald-400/60"
                                                        dataCursorText="View Profile"
                                                    >
                                                        View Profile
                                                    </AnimatedButton>
                                                </MagneticElement>
                                                <MagneticElement strength={40}>
                                                    <AnimatedButton
                                                        size="sm"
                                                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                                                        dataCursorText="Follow"
                                                    >
                                                        Follow
                                                    </AnimatedButton>
                                                </MagneticElement>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:col-span-4 space-y-8"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {/* Related Posts */}
                            <div className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-xl">
                                <h3 className="text-2xl font-bold mb-8 pb-4 border-b border-zinc-800/50 text-white">
                                    Related Posts
                                </h3>
                                <div className="space-y-6">
                                    {relatedPosts.map((relatedPost) => (
                                        <Link
                                            key={relatedPost.slug}
                                            href={`/blog/${relatedPost.slug}`}
                                            className="block group"
                                            data-cursor="link"
                                        >
                                            <div className="flex gap-4 p-3 rounded-xl hover:bg-zinc-800/30 transition-all duration-300">
                                                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                                    <img
                                                        src={
                                                            relatedPost.coverImage ||
                                                            "/placeholder.svg" ||
                                                            "/placeholder.svg"
                                                        }
                                                        alt={relatedPost.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold line-clamp-2 group-hover:text-emerald-400 transition-colors duration-300 text-white mb-2">
                                                        {relatedPost.title}
                                                    </h4>
                                                    <p className="text-sm text-zinc-400">
                                                        {relatedPost.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-zinc-800/50">
                                    <Link href="/blog">
                                        <Button
                                            variant="ghost"
                                            className="w-full text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300"
                                        >
                                            View All Posts
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-xl">
                                <h3 className="text-2xl font-bold mb-8 pb-4 border-b border-zinc-800/50 text-white">
                                    Categories
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { name: "Technology", count: 12 },
                                        { name: "Web Development", count: 8 },
                                        { name: "UI/UX Design", count: 6 },
                                        { name: "Programming", count: 10 },
                                        { name: "Career", count: 4 },
                                    ].map((category) => (
                                        <Link
                                            key={category.name}
                                            href={`/blog/category/${category.name
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")}`}
                                            className="flex justify-between items-center py-3 px-4 rounded-xl hover:bg-zinc-800/40 transition-all duration-300 group border border-transparent hover:border-zinc-700/50"
                                            data-cursor="link"
                                        >
                                            <span className="group-hover:text-emerald-400 transition-colors duration-300 text-white font-medium">
                                                {category.name}
                                            </span>
                                            <span className="text-zinc-500 text-sm bg-zinc-800/50 px-2 py-1 rounded-full">
                                                {category.count}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/30 shadow-xl">
                                <h3 className="text-2xl font-bold mb-4 text-white">
                                    Subscribe to Newsletter
                                </h3>
                                <p className="text-zinc-300 mb-8 leading-relaxed">
                                    Get the latest posts and updates delivered
                                    to your inbox.
                                </p>
                                <form className="space-y-6">
                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder="Your email address"
                                            className="w-full bg-zinc-800/70 border border-zinc-700/50 rounded-xl px-6 py-4 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 backdrop-blur-sm text-white placeholder-zinc-400"
                                        />
                                    </div>
                                    <MagneticElement strength={40}>
                                        <AnimatedButton
                                            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 py-4"
                                            dataCursorText="Subscribe"
                                        >
                                            Subscribe
                                        </AnimatedButton>
                                    </MagneticElement>
                                </form>
                                <p className="text-xs text-zinc-400 mt-6 leading-relaxed">
                                    By subscribing, you agree to our Privacy
                                    Policy and consent to receive updates from
                                    our company.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* More Posts */}
            <section className="relative py-20 bg-zinc-900/50">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-4xl lg:text-5xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            More Articles
                        </motion.h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.slice(0, 3).map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true, margin: "-100px" }}
                                whileHover={{ y: -10 }}
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="block h-full bg-zinc-800/60 rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-emerald-500/50 transition-all duration-500 group backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10"
                                    data-cursor="link"
                                >
                                    <div className="h-56 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent z-10"></div>
                                        <img
                                            src={
                                                post.coverImage ||
                                                "/placeholder.svg" ||
                                                "/placeholder.svg"
                                            }
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/20">
                                                {post.category}
                                            </span>
                                            <span className="text-zinc-500 text-xs">
                                                •
                                            </span>
                                            <span className="text-zinc-400 text-xs">
                                                {post.date}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-400 transition-colors duration-300 text-white leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-zinc-400 mb-6 line-clamp-2 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400/50">
                                                <img
                                                    src={
                                                        post.author.avatar ||
                                                        "/placeholder.svg" ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={post.author.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <span className="ml-3 text-sm text-white font-medium">
                                                {post.author.name}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <MagneticElement strength={60}>
                            <Link href="/blog">
                                <AnimatedButton
                                    variant="outline"
                                    className="text-emerald-400 border-emerald-400/30 hover:border-emerald-400/60 px-8 py-4"
                                    dataCursorText="View All Posts"
                                >
                                    View All Posts
                                </AnimatedButton>
                            </Link>
                        </MagneticElement>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-zinc-900/80 py-12 border-t border-zinc-800 backdrop-blur-sm">
                <div className="container mx-auto text-center">
                    <p className="text-zinc-400 mb-6">
                        © {new Date().getFullYear()} Ali. All rights reserved.
                    </p>
                    <div className="flex justify-center gap-8">
                        {[
                            {
                                icon: <Github className="h-6 w-6" />,
                                href: "https://github.com",
                                label: "GitHub",
                            },
                            {
                                icon: <Linkedin className="h-6 w-6" />,
                                href: "https://linkedin.com",
                                label: "LinkedIn",
                            },
                            {
                                icon: <Mail className="h-6 w-6" />,
                                href: "mailto:contact@example.com",
                                label: "Email",
                            },
                        ].map((social, index) => (
                            <MagneticElement key={index} strength={80}>
                                <motion.div
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: 5,
                                        y: -5,
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Link
                                        href={social.href}
                                        className="text-zinc-500 hover:text-emerald-400 transition-colors duration-300 p-3 rounded-full hover:bg-emerald-400/10 border border-transparent hover:border-emerald-400/20"
                                        data-cursor="link"
                                        data-cursor-text={social.label}
                                    >
                                        {social.icon}
                                    </Link>
                                </motion.div>
                            </MagneticElement>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
}
