"use client";

import AnimatedButton from "@/components/animated-button";
import MagneticElement from "@/components/magnetic-element";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog-data";
import { useMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import {
    Bookmark,
    Calendar,
    Clock,
    Eye,
    Heart,
    MessageCircle,
    Send,
    Share2,
    Tag,
    TrendingUp,
    User,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

// Define types
interface Author {
    name: string;
    title: string;
    avatar?: string;
    bio: string;
}

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: number;
    coverImage?: string;
    author: Author;
    tags: string[];
    content: string;
    likes: number;
    comments: number;
    featured: boolean;
}

// Mock authentication hook (replace with real auth in production)
const useAuth = () => {
    // Simulating a logged-in user; replace with actual auth logic
    return {
        isAuthenticated: false,
        user: null as { name: string; avatar: string } | null,
    };
};

interface Comment {
    id: string;
    author: string;
    avatar?: string;
    text: string;
    timestamp: string;
    likes: number;
}

export default function BlogPostClient({
    params,
}: {
    params: { slug: string };
}) {
    const slug = params.slug;
    const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

    if (!post) {
        notFound();
    }

    const [isLoading, setIsLoading] = useState(true);
    const isMobile = useMobile();
    const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [comments, setComments] = useState<Comment[]>([]);
    const [commentText, setCommentText] = useState("");
    const [anonymousName, setAnonymousName] = useState("");
    const { isAuthenticated, user } = useAuth();

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            const related = blogPosts
                .filter((p) => p.slug !== slug && p.category === post?.category)
                .slice(0, 3);
            setRelatedPosts(related);
            setIsLoading(false);
        }, 500);
    }, [slug, post?.category]);

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!commentText.trim()) return;

        const newComment: Comment = {
            id: Date.now().toString(),
            author: isAuthenticated && user
                ? user.name
                : anonymousName || "Anonymous",
            avatar: isAuthenticated && user
                ? user.avatar
                : post.author.avatar || "/placeholder.svg",
            text: commentText.trim(),
            timestamp: new Date().toLocaleString(),
            likes: 0,
        };

        setComments([newComment, ...comments]);
        setCommentText("");
        setAnonymousName("");
    };

    const handleCommentLike = (commentId: string) => {
        if (!isAuthenticated) return; // Only logged-in users can like comments
        setComments(
            comments.map((comment) =>
                comment.id === commentId
                    ? { ...comment, likes: comment.likes + 1 }
                    : comment
            )
        );
    };

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
        <div className="min-h-screen bg-zinc-950 text-white font-sans">
            {/* Hero Section */}
            <section className="relative py-16 lg:py-24">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-teal-500/5 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg shadow-emerald-500/20 relative group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent z-10"></div>
                        <img
                            src={post.coverImage || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Post Metadata and Title */}
            <section className="relative py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="mb-6 flex items-center justify-center gap-2 flex-wrap">
                            <Link
                                href={`/blog/category/${post.category.toLowerCase()}`}
                                className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium hover:bg-emerald-500/30 transition-all duration-300 border border-emerald-500/20"
                            >
                                {post.category}
                            </Link>
                            <span className="text-zinc-500">•</span>
                            <span className="text-zinc-400 flex items-center text-sm bg-zinc-800/50 px-3 py-1 rounded-full">
                                <Calendar className="h-4 w-4 mr-1" />{" "}
                                {post.date}
                            </span>
                            <span className="text-zinc-500">•</span>
                            <span className="text-zinc-400 flex items-center text-sm bg-zinc-800/50 px-3 py-1 rounded-full">
                                <Clock className="h-4 w-4 mr-1" />{" "}
                                {post.readTime} min read
                            </span>
                            <span className="text-zinc-500">•</span>
                            <span className="text-zinc-400 flex items-center text-sm bg-zinc-800/50 px-3 py-1 rounded-full">
                                <Eye className="h-4 w-4 mr-1" /> 1.2k views
                            </span>
                        </div>

                        <motion.h1
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {post.title}
                        </motion.h1>

                        <motion.p
                            className="text-lg sm:text-xl text-zinc-300 mb-8 leading-relaxed max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {post.excerpt}
                        </motion.p>

                        <motion.div
                            className="flex items-center justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <div className="flex items-center bg-zinc-900/50 rounded-lg p-3 border border-zinc-800/50">
                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400 mr-3">
                                    <img
                                        src={
                                            post.author.avatar ||
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
                                    <p className="text-xs text-zinc-400">
                                        {post.author.title}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 bg-emerald-500/20 rounded-lg px-3 py-2 border border-emerald-500/20">
                                <TrendingUp className="h-4 w-4 text-emerald-400" />
                                <span className="text-sm text-emerald-400 font-medium">
                                    Trending
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content and Sidebar */}
            <section className="relative py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Main Content */}
                        <motion.div
                            className="lg:col-span-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="bg-zinc-900/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-800/50 shadow-lg">
                                <div className="prose prose-invert max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-zinc-300 prose-p:leading-relaxed prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300 prose-strong:text-white prose-code:text-emerald-400 prose-code:bg-zinc-800/50 prose-code:px-2 prose-code:py-1 prose-code:rounded">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: post.content,
                                        }}
                                    />
                                </div>

                                {/* Tags */}
                                <div className="mt-12 pt-6 border-t border-zinc-800/50">
                                    <h3 className="text-lg font-bold mb-4 flex items-center text-white">
                                        <Tag className="mr-2 h-5 w-5 text-emerald-400" />{" "}
                                        Tags
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag: string) => (
                                            <Link
                                                key={tag}
                                                href={`/blog/tag/${tag.toLowerCase()}`}
                                                className="px-3 py-1 bg-zinc-800/50 hover:bg-emerald-500/20 rounded-full text-sm transition-all duration-300 border border-zinc-700/50 hover:border-emerald-500/30"
                                            >
                                                #{tag}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Share Section */}
                                <div className="mt-12 pt-6 border-t border-zinc-800/50">
                                    <h3 className="text-lg font-bold mb-4 flex items-center text-white">
                                        <Share2 className="mr-2 h-5 w-5 text-emerald-400" />{" "}
                                        Share this post
                                    </h3>
                                    <div className="flex gap-3">
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
                                                strength={30}
                                            >
                                                <button
                                                    className={`p-3 rounded-lg ${social.color} hover:scale-105 transition-all duration-300 border`}
                                                >
                                                    <Share2 className="h-4 w-4" />
                                                </button>
                                            </MagneticElement>
                                        ))}
                                    </div>
                                </div>

                                {/* Like, Comment, Save */}
                                <div className="mt-12 pt-6 border-t border-zinc-800/50">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-6">
                                            <button
                                                className={`flex items-center gap-2 transition-all duration-300 ${
                                                    isLiked
                                                        ? "text-red-400"
                                                        : "text-zinc-400 hover:text-red-400"
                                                }`}
                                                onClick={() =>
                                                    setIsLiked(!isLiked)
                                                }
                                            >
                                                <Heart
                                                    className={`h-5 w-5 ${
                                                        isLiked
                                                            ? "fill-current"
                                                            : ""
                                                    }`}
                                                />
                                                <span className="text-sm">
                                                    {post.likes}
                                                </span>
                                            </button>
                                            <button className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors duration-300">
                                                <MessageCircle className="h-5 w-5" />
                                                <span className="text-sm">
                                                    {comments.length}
                                                </span>
                                            </button>
                                        </div>
                                        <button
                                            className={`flex items-center gap-2 transition-all duration-300 ${
                                                isSaved
                                                    ? "text-emerald-400"
                                                    : "text-zinc-400 hover:text-emerald-400"
                                            }`}
                                            onClick={() => setIsSaved(!isSaved)}
                                        >
                                            <Bookmark
                                                className={`h-5 w-5 ${
                                                    isSaved
                                                        ? "fill-current"
                                                        : ""
                                                }`}
                                            />
                                            <span className="text-sm">
                                                Save
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Author Bio */}
                                <div className="mt-12 bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-400 flex-shrink-0">
                                            <img
                                                src={
                                                    post.author.avatar ||
                                                    "/placeholder.svg"
                                                }
                                                alt={post.author.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-1">
                                                {post.author.name}
                                            </h3>
                                            <p className="text-emerald-400 text-sm mb-3">
                                                {post.author.title}
                                            </p>
                                            <p className="text-zinc-300 text-sm leading-relaxed">
                                                {post.author.bio}
                                            </p>
                                            <div className="flex gap-3 mt-4">
                                                <MagneticElement strength={30}>
                                                    <AnimatedButton
                                                        variant="outline"
                                                        size="sm"
                                                        className="text-emerald-400 border-emerald-400/30 hover:border-emerald-400/50"
                                                    >
                                                        View Profile
                                                    </AnimatedButton>
                                                </MagneticElement>
                                                <MagneticElement strength={30}>
                                                    <AnimatedButton
                                                        size="sm"
                                                        className="bg-emerald-500 hover:bg-emerald-600"
                                                    >
                                                        Follow
                                                    </AnimatedButton>
                                                </MagneticElement>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Comment Section */}
                            <motion.div
                                className="mt-8 lg:col-span-8 bg-zinc-900/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-800/50 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <h3 className="text-lg font-bold mb-4 flex items-center text-white">
                                    <MessageCircle className="mr-2 h-5 w-5 text-emerald-400" />{" "}
                                    Comments
                                </h3>
                                <form
                                    onSubmit={handleCommentSubmit}
                                    className="space-y-4 mb-8"
                                >
                                    {!isAuthenticated && (
                                        <input
                                            type="text"
                                            placeholder="Your name (optional)"
                                            value={anonymousName}
                                            onChange={(e) =>
                                                setAnonymousName(e.target.value)
                                            }
                                            className="w-full bg-zinc-800/70 border border-zinc-700/50 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all duration-300 text-white placeholder-zinc-400"
                                        />
                                    )}
                                    <textarea
                                        placeholder="Add a comment..."
                                        value={commentText}
                                        onChange={(e) =>
                                            setCommentText(e.target.value)
                                        }
                                        className="w-full bg-zinc-800/70 border border-zinc-700/50 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all duration-300 text-white placeholder-zinc-400 resize-y min-h-[100px]"
                                        maxLength={500}
                                    />
                                    <MagneticElement strength={30}>
                                        <AnimatedButton
                                            type="submit"
                                            className="bg-emerald-500 hover:bg-emerald-600 py-3 px-6"
                                            disabled={!commentText.trim()}
                                        >
                                            <Send className="h-4 w-4 mr-2" />{" "}
                                            Post Comment
                                        </AnimatedButton>
                                    </MagneticElement>
                                </form>

                                <div className="space-y-4">
                                    {comments.length === 0 ? (
                                        <p className="text-zinc-400 text-sm">
                                            No comments yet. Be the first to
                                            comment!
                                        </p>
                                    ) : (
                                        comments.map((comment, index) => (
                                            <motion.div
                                                key={comment.id}
                                                className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-4 border border-zinc-700/50"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: index * 0.1,
                                                }}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400/50 flex-shrink-0">
                                                        <img
                                                            src={
                                                                comment.avatar ||
                                                                "/placeholder.svg"
                                                            }
                                                            alt={comment.author}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex justify-between items-center">
                                                            <div>
                                                                <span className="text-white font-medium text-sm">
                                                                    {
                                                                        comment.author
                                                                    }
                                                                </span>
                                                                <span className="text-zinc-400 text-xs ml-2">
                                                                    {
                                                                        comment.timestamp
                                                                    }
                                                                </span>
                                                            </div>
                                                            {isAuthenticated && (
                                                                <button
                                                                    className="flex items-center gap-1 text-zinc-400 hover:text-red-400 transition-colors duration-300"
                                                                    onClick={() =>
                                                                        handleCommentLike(
                                                                            comment.id
                                                                        )
                                                                    }
                                                                >
                                                                    <Heart className="h-4 w-4" />
                                                                    <span className="text-xs">
                                                                        {
                                                                            comment.likes
                                                                        }
                                                                    </span>
                                                                </button>
                                                            )}
                                                        </div>
                                                        <p className="text-zinc-300 text-sm mt-1">
                                                            {comment.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Sidebar */}
                        <motion.div
                            className="lg:col-span-4 space-y-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {/* Related Posts */}
                            <div className="bg-zinc-900/70 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50">
                                <h3 className="text-xl font-bold mb-6 text-white">
                                    Related Posts
                                </h3>
                                <div className="space-y-4">
                                    {relatedPosts.map((relatedPost) => (
                                        <Link
                                            key={relatedPost.slug}
                                            href={`/blog/${relatedPost.slug}`}
                                            className="block group"
                                        >
                                            <div className="flex gap-3 p-3 rounded-lg hover:bg-zinc-800/30 transition-all duration-300">
                                                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                                    <img
                                                        src={
                                                            relatedPost.coverImage ||
                                                            "/placeholder.svg"
                                                        }
                                                        alt={relatedPost.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-sm font-semibold line-clamp-2 group-hover:text-emerald-400 transition-colors duration-300 text-white">
                                                        {relatedPost.title}
                                                    </h4>
                                                    <p className="text-xs text-zinc-400 mt-1">
                                                        {relatedPost.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-6 pt-4 border-t border-zinc-800/50">
                                    <Link href="/blog">
                                        <Button
                                            variant="ghost"
                                            className="w-full text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10 border border-emerald-400/20 hover:border-emerald-400/40"
                                        >
                                            View All Posts
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-zinc-900/70 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50">
                                <h3 className="text-xl font-bold mb-6 text-white">
                                    Categories
                                </h3>
                                <div className="space-y-2">
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
                                            className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-zinc-800/30 transition-all duration-300 group"
                                        >
                                            <span className="group-hover:text-emerald-400 transition-colors duration-300 text-white text-sm font-medium">
                                                {category.name}
                                            </span>
                                            <span className="text-zinc-500 text-xs bg-zinc-800/50 px-2 py-1 rounded-full">
                                                {category.count}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/30">
                                <div className="flex items-center gap-2 mb-3">
                                    <User className="h-5 w-5 text-emerald-400" />
                                    <h3 className="text-xl font-bold text-white">
                                        Subscribe to Newsletter
                                    </h3>
                                </div>
                                <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
                                    Get the latest posts and updates delivered
                                    to your inbox.
                                </p>
                                <form className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full bg-zinc-800/70 border border-zinc-700/50 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all duration-300 text-white placeholder-zinc-400"
                                    />
                                    <MagneticElement strength={30}>
                                        <AnimatedButton className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 py-3">
                                            Subscribe
                                        </AnimatedButton>
                                    </MagneticElement>
                                </form>
                                <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
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
            <section className="relative py-16 bg-zinc-900/30">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-teal-500/5 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold text-white mb-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            More Articles
                        </motion.h2>
                        <div className="h-1 w-16 bg-emerald-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.slice(0, 3).map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="block h-full bg-zinc-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-700/50 hover:border-emerald-500/50 transition-all duration-300 group"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent z-10"></div>
                                        <img
                                            src={
                                                post.coverImage ||
                                                "/placeholder.svg"
                                            }
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs">
                                                {post.category}
                                            </span>
                                            <span className="text-zinc-400 text-xs">
                                                {post.date}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors duration-300 text-white">
                                            {post.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center mt-3">
                                            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-400/50">
                                                <img
                                                    src={
                                                        post.author.avatar ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={post.author.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <span className="ml-2 text-sm text-white">
                                                {post.author.name}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <MagneticElement strength={30}>
                            <AnimatedButton
                                variant="outline"
                                className="text-emerald-400 border-emerald-400/30 hover:border-emerald-400/50 px-6 py-3"
                            >
                                View All Posts
                            </AnimatedButton>
                        </MagneticElement>
                    </div>
                </div>
            </section>
        </div>
    );
}