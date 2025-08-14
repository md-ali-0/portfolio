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
import {
    ArrowRight,
    BookOpen,
    Calendar,
    Clock,
    Eye,
    Heart,
    User,
} from "lucide-react";
import AnimatedButton from "../animated-button";
import SectionHeader from "../section-header";

// Mock blog posts data
const blogPosts = [
    {
        slug: "modern-web-development-trends-2024",
        title: "Modern Web Development Trends in 2024",
        excerpt:
            "Exploring the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.",
        content: "The web development landscape continues to evolve rapidly...",
        category: "Web Development",
        author: "John Doe",
        publishedAt: "2024-01-15",
        readTime: "8 min read",
        image: "/blog-web-development-trends.png",
        tags: ["React", "Next.js", "AI", "Web3", "Performance"],
        featured: true,
        stats: {
            views: "12.5K",
            likes: 245,
            comments: 32,
        },
    },
    {
        slug: "building-scalable-applications",
        title: "Building Scalable Applications with Microservices",
        excerpt:
            "Learn how to architect and build scalable applications using microservices architecture and modern deployment strategies.",
        content:
            "Microservices architecture has become increasingly popular...",
        category: "Architecture",
        author: "Jane Smith",
        publishedAt: "2024-01-10",
        readTime: "12 min read",
        image: "/blog-microservices-architecture.png",
        tags: ["Microservices", "Docker", "Kubernetes", "Scalability"],
        featured: false,
        stats: {
            views: "8.2K",
            likes: 189,
            comments: 24,
        },
    },
    {
        slug: "ai-powered-development-tools",
        title: "AI-Powered Development Tools That Boost Productivity",
        excerpt:
            "Discover the latest AI tools and techniques that can significantly improve your development workflow and code quality.",
        content:
            "Artificial Intelligence is revolutionizing software development...",
        category: "AI & Tools",
        author: "Alex Johnson",
        publishedAt: "2024-01-05",
        readTime: "6 min read",
        image: "/blog-ai-development-tools.png",
        tags: ["AI", "Productivity", "Tools", "Automation"],
        featured: false,
        stats: {
            views: "15.7K",
            likes: 312,
            comments: 45,
        },
    }
];

const BlogCard = ({ post, index }: { post: any; index: number }) => {
    return (
        <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <MagneticElement strength={40}>
                <Card className="bg-gradient-to-br from-zinc-800/80 via-zinc-800/60 to-zinc-900/80 border border-emerald-400/20 hover:border-emerald-400/50 transition-all duration-500 h-full backdrop-blur-xl overflow-hidden relative">
                    {/* Featured badge */}
                    {post.featured && (
                        <motion.div
                            className="absolute top-4 right-4 z-20"
                            initial={{ rotate: -10, scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                        >
                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold px-3 py-1 shadow-lg">
                                <BookOpen className="w-3 h-3 mr-1" />
                                Featured
                            </Badge>
                        </motion.div>
                    )}

                    {/* Animated border glow */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                    />

                    {/* Blog post image */}
                    <div className="h-48 overflow-hidden relative">
                        <motion.img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            whileHover={{ rotateZ: 1 }}
                        />

                        {/* Floating particles on hover */}
                        {Array.from({ length: 3 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100"
                                style={{
                                    left: `${25 + i * 25}%`,
                                    top: `${30 + (i % 2) * 40}%`,
                                }}
                                animate={{
                                    y: [-10, -30, -10],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    delay: i * 0.3,
                                    repeat: Number.POSITIVE_INFINITY,
                                }}
                            />
                        ))}

                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />

                        {/* Stats overlay */}
                        <motion.div
                            className="absolute bottom-3 left-3 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ y: 10 }}
                            whileInView={{ y: 0 }}
                        >
                            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                                <Eye className="w-3 h-3 text-emerald-400" />
                                <span className="text-xs text-white">
                                    {post.stats.views}
                                </span>
                            </div>
                            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                                <Heart className="w-3 h-3 text-red-400" />
                                <span className="text-xs text-white">
                                    {post.stats.likes}
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                            <Badge className="bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-medium">
                                {post.category}
                            </Badge>
                            <div className="flex items-center gap-1 text-zinc-400 text-xs">
                                <Clock className="w-3 h-3" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        <motion.h3
                            className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors line-clamp-2"
                            whileHover={{
                                textShadow: "0 0 20px rgba(16, 185, 129, 0.5)",
                            }}
                        >
                            {post.title}
                        </motion.h3>

                        <p className="text-zinc-300 mb-4 leading-relaxed line-clamp-3 text-sm">
                            {post.excerpt}
                        </p>

                        {/* Author and date */}
                        <div className="flex items-center gap-3 mb-4 text-xs text-zinc-400">
                            <div className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                <span>{post.author}</span>
                            </div>
                            <div className="w-px h-3 bg-zinc-600" />
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>
                                    {new Date(
                                        post.publishedAt
                                    ).toLocaleDateString()}
                                </span>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-6">
                            {post.tags
                                .slice(0, 3)
                                .map((tag: string, tagIndex: number) => (
                                    <motion.div
                                        key={tag}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: tagIndex * 0.1 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        <Badge
                                            variant="outline"
                                            className="border-zinc-500 text-zinc-300 hover:border-emerald-400 hover:text-emerald-400 transition-colors text-xs"
                                        >
                                            {tag}
                                        </Badge>
                                    </motion.div>
                                ))}
                            {post.tags.length > 3 && (
                                <Badge
                                    variant="outline"
                                    className="border-zinc-500 text-zinc-300 text-xs"
                                >
                                    +{post.tags.length - 3}
                                </Badge>
                            )}
                        </div>

                        {/* Read more button */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <AnimatedButton
                                variant="outline"
                                className="w-full border-zinc-500 hover:border-emerald-400 group/btn"
                            >
                                Read Article
                                <motion.div
                                    className="ml-2"
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <ArrowRight className="h-4 w-4" />
                                </motion.div>
                            </AnimatedButton>
                        </motion.div>
                    </CardContent>
                </Card>
            </MagneticElement>
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

    const sectionY = useTransform(scrollY, [0, 1000], [0, -50]);

    return (
        <section id="blog" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Effects - matching other sections */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />

                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `radial-gradient(circle at ${
                            50 + smoothMouseX.get()
                        }% ${50 + smoothMouseY.get()}%, 
                            rgba(16, 185, 129, 0.15) 0%, 
                            rgba(20, 184, 166, 0.1) 25%, 
                            transparent 50%),
                        radial-gradient(circle at ${
                            30 + smoothMouseX.get() * -1
                        }% ${70 + smoothMouseY.get() * -1}%, 
                            rgba(6, 182, 212, 0.1) 0%, 
                            rgba(16, 185, 129, 0.05) 30%, 
                            transparent 60%)`,
                    }}
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />

                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            {/* Floating Decorative Elements */}
            {!isMobile &&
                Array.from({ length: 8 }, (_, i) => ({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    delay: Math.random() * 5,
                    duration: 10 + Math.random() * 10,
                })).map((element) => (
                    <motion.div
                        key={element.id}
                        className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400/60 to-teal-400/60 rounded-full"
                        style={{
                            left: `${element.x}%`,
                            top: `${element.y}%`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            x: [-10, 10, -10],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1],
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
                    description="Insights, tutorials, and thoughts on modern web development"
                />

                {/* Blog posts grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                </div>

                {/* CTA section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <MagneticElement strength={80}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AnimatedButton
                                variant="outline"
                                className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 px-8 py-3 text-lg group backdrop-blur-sm"
                            >
                                View All Posts
                                <motion.div
                                    className="ml-2"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <ArrowRight className="h-5 w-5" />
                                </motion.div>
                            </AnimatedButton>
                        </motion.div>
                    </MagneticElement>
                </motion.div>
            </motion.div>
        </section>
    );
}
