"use client";

import MagneticElement from "@/components/magnetic-element";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useMobile } from "@/hooks/use-mobile";
import {
    motion,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { ArrowRight, BookOpen, Calendar, Clock, User } from "lucide-react";
import AnimatedButton from "../animated-button";
import SectionHeader from "../section-header";

// Mock blog posts data - only 3 posts
const blogPosts = [
    {
        slug: "modern-web-development-trends-2024",
        title: "Modern Web Development Trends in 2024",
        excerpt:
            "Exploring the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.",
        category: "Web Development",
        author: "John Doe",
        publishedAt: "2024-01-15",
        readTime: "8 min read",
        image: "/placeholder.jpg",
        tags: ["React", "Next.js", "AI"],
        stats: {
            views: "12.5K",
            likes: 245,
        },
    },
    {
        slug: "building-scalable-applications",
        title: "Building Scalable Applications with Microservices",
        excerpt:
            "Learn how to architect and build scalable applications using microservices architecture and modern deployment strategies.",
        category: "Architecture",
        author: "Jane Smith",
        publishedAt: "2024-01-10",
        readTime: "12 min read",
        image: "/placeholder.jpg",
        tags: ["Microservices", "Docker", "Kubernetes"],
        stats: {
            views: "8.2K",
            likes: 189,
        },
    },
    {
        slug: "ai-powered-development-tools",
        title: "AI-Powered Development Tools That Boost Productivity",
        excerpt:
            "Discover the latest AI tools and techniques that can significantly improve your development workflow and code quality.",
        category: "AI & Tools",
        author: "Alex Johnson",
        publishedAt: "2024-01-05",
        readTime: "6 min read",
        image: "/placeholder.jpg",
        tags: ["AI", "Productivity", "Tools"],
        stats: {
            views: "15.7K",
            likes: 312,
        },
    },
];

const BlogCard = ({ post, index }: { post: any; index: number }) => {
    return (
        <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                bounce: 0.3,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotateX: 5 }}
        >
                <Card className="bg-gradient-to-br from-zinc-900/95 via-zinc-800/90 to-zinc-900/95 border-0 h-full backdrop-blur-xl overflow-hidden relative group-hover:shadow-2xl group-hover:shadow-emerald-400/25 transition-all duration-700">
                    {/* Animated gradient border */}
                    <motion.div
                        className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-emerald-400/50 via-teal-400/50 to-emerald-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background:
                                "linear-gradient(45deg, #10b981, #14b8a6, #06b6d4, #10b981)",
                            backgroundSize: "300% 300%",
                        }}
                        animate={{
                            backgroundPosition: [
                                "0% 50%",
                                "100% 50%",
                                "0% 50%",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    >
                        <div className="w-full h-full bg-gradient-to-br from-zinc-900/95 via-zinc-800/90 to-zinc-900/95 rounded-lg" />
                    </motion.div>

                    {/* Content container */}
                    <div className="relative z-10 h-full flex flex-col">
                        {/* Image section with padding and rounded corners */}
                        <CardContent className="p-6 flex-1 flex flex-col">
                            <div className="relative mb-6 overflow-hidden rounded-xl">
                                <motion.img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent rounded-xl" />

                                {/* Category badge */}
                                <motion.div
                                    className="absolute top-3 left-3"
                                    initial={{ scale: 0, rotate: -10 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    transition={{
                                        delay: index * 0.2 + 0.3,
                                        type: "spring",
                                        bounce: 0.5,
                                    }}
                                >
                                    <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold px-3 py-1 shadow-lg">
                                        {post.category}
                                    </Badge>
                                </motion.div>

                                {/* Floating particles */}
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100"
                                        style={{
                                            left: `${25 + i * 20}%`,
                                            top: `${40 + (i % 2) * 15}%`,
                                        }}
                                        animate={{
                                            y: [-8, -20, -8],
                                            x: [0, Math.sin(i) * 8, 0],
                                            opacity: [0, 1, 0],
                                            scale: [1, 1.3, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            delay: i * 0.4,
                                            repeat: Number.POSITIVE_INFINITY,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Title */}
                            <motion.h3
                                className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2"
                                whileHover={{
                                    textShadow:
                                        "0 0 20px rgba(16, 185, 129, 0.6)",
                                }}
                            >
                                {post.title}
                            </motion.h3>

                            {/* Excerpt */}
                            <p className="text-zinc-300 mb-4 leading-relaxed line-clamp-3 flex-1">
                                {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map(
                                    (tag: string, tagIndex: number) => (
                                        <motion.div
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            transition={{
                                                delay:
                                                    index * 0.2 +
                                                    tagIndex * 0.1 +
                                                    0.5,
                                            }}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                        >
                                            <Badge
                                                variant="outline"
                                                className="border-zinc-600 text-zinc-400 hover:border-emerald-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 text-xs"
                                            >
                                                {tag}
                                            </Badge>
                                        </motion.div>
                                    )
                                )}
                            </div>

                            {/* Author and meta info */}
                            <div className="flex items-center justify-between mb-6 text-sm text-zinc-400">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span className="font-medium">
                                        {post.author}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>
                                            {new Date(
                                                post.publishedAt
                                            ).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="w-px h-4 bg-zinc-600" />
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Read more button */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-auto"
                            >
                                <AnimatedButton
                                    variant="outline"
                                    className="w-full border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-400 group/btn transition-all duration-300"
                                >
                                    Read Article
                                    <motion.div
                                        className="ml-2"
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <ArrowRight className="h-4 w-4 group-hover/btn:text-emerald-300 transition-colors" />
                                    </motion.div>
                                </AnimatedButton>
                            </motion.div>
                        </CardContent>
                    </div>
                </Card>
        </motion.div>
    );
};

export default function BlogSection() {
    const isMobile = useMobile();
    const { scrollY } = useScroll();

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const sectionY = useTransform(scrollY, [0, 1000], [0, -30]);

    return (
        <section
            id="blog"
            className="py-20 md:py-32 relative overflow-hidden"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                mouseX.set((e.clientX - rect.left - rect.width / 2) / 20);
                mouseY.set((e.clientY - rect.top - rect.height / 2) / 20);
            }}
        >
            {/* Enhanced background effects */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />

                {/* Dynamic gradient overlay */}
                <motion.div
                    className="absolute inset-0 opacity-40"
                    style={{
                        background: `radial-gradient(circle at ${
                            50 + smoothMouseX.get()
                        }% ${50 + smoothMouseY.get()}%, 
                            rgba(16, 185, 129, 0.2) 0%, 
                            rgba(20, 184, 166, 0.15) 25%, 
                            transparent 50%),
                        radial-gradient(circle at ${
                            70 + smoothMouseX.get() * -0.5
                        }% ${30 + smoothMouseY.get() * -0.5}%, 
                            rgba(6, 182, 212, 0.15) 0%, 
                            rgba(16, 185, 129, 0.1) 30%, 
                            transparent 60%)`,
                    }}
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
            `,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Floating decorative elements */}
            {!isMobile &&
                Array.from({ length: 6 }, (_, i) => ({
                    id: i,
                    x: 10 + Math.random() * 80,
                    y: 10 + Math.random() * 80,
                    delay: Math.random() * 3,
                    duration: 8 + Math.random() * 6,
                })).map((element) => (
                    <motion.div
                        key={element.id}
                        className="absolute w-3 h-3 bg-gradient-to-r from-emerald-400/40 to-teal-400/40 rounded-full blur-sm"
                        style={{
                            left: `${element.x}%`,
                            top: `${element.y}%`,
                        }}
                        animate={{
                            y: [-15, 15, -15],
                            x: [-8, 8, -8],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: element.duration,
                            delay: element.delay,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                ))}

            <motion.div
                className="container mx-auto relative z-10"
                style={{ y: sectionY }}
            >
                <SectionHeader
                    title="Latest"
                    highlight="Blog Posts"
                    icon={<BookOpen className="h-8 w-8 text-emerald-400" />}
                    description="Insights and tutorials on modern web development"
                />

                {/* Blog posts grid - 3 equal cards */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {blogPosts.map((post, index) => (
                        <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                </motion.div>

                {/* CTA section */}
                <div className="flex justify-center items-center">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <MagneticElement strength={80}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <AnimatedButton
                                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25"
                                    dataCursorText="Let's Talk"
                                >
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        View All Posts
                                    </motion.div>
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </AnimatedButton>
                            </motion.div>
                        </MagneticElement>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
