"use client";

import { useMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Code,
    Download,
    Github,
    Linkedin,
    Mail,
    Send,
    Sparkles,
    Zap,
} from "lucide-react";
import Link from "next/link";
import Button from "../custom-button";

export default function HomeSection() {
    const isMobile = useMobile();

    const socialLinks = [
        {
            icon: <Github className="h-5 w-5 sm:h-6 sm:w-6" />,
            href: "https://github.com",
            label: "GitHub",
            color: "hover:text-emerald-400",
        },
        {
            icon: <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />,
            href: "https://linkedin.com",
            label: "LinkedIn",
            color: "hover:text-blue-400",
        },
        {
            icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6" />,
            href: "mailto:contact@example.com",
            label: "Email",
            color: "hover:text-teal-400",
        },
    ];

    return (
        <section
            id="home"
            className="min-h-screen flex items-center relative overflow-hidden"
        >
            {/* Enhanced Background Effects - Simplified */}
            <div className="absolute inset-0">
                {/* Main gradient background - static */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />

                {/* Static mesh gradient overlay */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, 
                            rgba(16, 185, 129, 0.15) 0%, 
                            rgba(20, 184, 166, 0.1) 25%, 
                            transparent 50%),
                        radial-gradient(circle at 30% 70%, 
                            rgba(6, 182, 212, 0.1) 0%, 
                            rgba(16, 185, 129, 0.05) 30%, 
                            transparent 60%)`,
                    }}
                />

                {/* Grid pattern - static */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize:
                            "30px 30px sm:40px sm:40px md:50px md:50px",
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 flex flex-col-reverse lg:flex-row items-center lg:justify-between z-10">
                {/* Text Content - Reduced animations */}
                <div className="lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
                    {/* Greeting - Simplified */}
                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        <div className="flex items-center justify-center lg:justify-start space-x-2">
                            <div>
                                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-emerald-400" />
                            </div>
                            <h2 className="text-emerald-400 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-medium">
                                Hello, I'm
                            </h2>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold relative leading-tight">
                            {/* Glowing background text */}
                            <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400/20 via-teal-300/20 to-emerald-500/20 blur-sm scale-110">
                                Mohammad Ali
                            </span>

                            {/* Main text with static gradient */}
                            <span
                                className="relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500"
                                style={{
                                    backgroundSize: "200% 200%",
                                }}
                            >
                                Mohammad Ali
                            </span>

                            {/* Static floating particles */}
                            {!isMobile &&
                                [...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                                        style={{
                                            top: `${20 + i * 10}%`,
                                            left: `${100 + i * 5}%`,
                                        }}
                                        animate={{
                                            y: [0, -15, 0],
                                            opacity: [0.4, 1, 0.4],
                                            scale: [1, 1.5, 1],
                                        }}
                                        transition={{
                                            duration: 2 + i * 0.3,
                                            repeat: Number.POSITIVE_INFINITY,
                                            delay: i * 0.2,
                                        }}
                                    />
                                ))}
                        </h1>

                        <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-3">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            >
                                <Code className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-teal-400" />
                            </motion.div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-zinc-300 font-semibold">
                                Full-Stack Developer
                            </h3>
                        </div>
                    </div>

                    {/* Enhanced Description - Reduced animations */}
                    <div className="space-y-3 sm:space-y-4">
                        <p className="text-zinc-400 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                            A dedicated developer on a journey of continuous
                            learning and growth, creating{" "}
                            <span className="text-emerald-400 font-semibold">
                                impactful projects
                            </span>{" "}
                            with creativity and expertise.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 pt-3 sm:pt-4">
                            {[
                                { number: "50+", label: "Projects" },
                                { number: "3+", label: "Years" },
                                { number: "20+", label: "Technologies" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-emerald-400">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs sm:text-sm md:text-sm lg:text-base text-zinc-500">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-4 lg:gap-5 pt-4 sm:pt-6">
                        <div>
                            <Button
                                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                                dataCursorText="Let's Talk"
                            >
                                Contact Me
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                        <div>
                            <Link href={"/projects"}>
                                <Button
                                    variant="outline"
                                    className="border-2 border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 backdrop-blur-sm w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                                    dataCursorText="See Projects"
                                >
                                    View Projects
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>

                        <div>
                            <Button
                                variant="outline"
                                className="border-2 border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:text-white backdrop-blur-sm w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                                dataCursorText="Download CV"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Resume
                            </Button>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 pt-4 sm:pt-6 md:pt-8">
                        {socialLinks.map((social, index) => (
                            <div key={index}>
                                <Link
                                    href={social.href}
                                    className={`text-zinc-400 ${social.color} transition-all duration-300 p-2 sm:p-3 md:p-3 lg:p-4 rounded-full border border-zinc-700 hover:border-emerald-400/50 backdrop-blur-sm bg-zinc-900/30 hover:bg-zinc-800/50 block`}
                                    data-cursor="link"
                                    data-cursor-text={social.label}
                                >
                                    {social.icon}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2 mb-8 sm:mb-10 md:mb-12 lg:mb-0 flex justify-center">
                    <div className="relative">
                        {/* Large decorative background */}
                        <div
                            className="absolute -inset-6 sm:-inset-8 md:-inset-12 lg:-inset-16 xl:-inset-20 rounded-full opacity-30"
                            style={{
                                background: `
                                    radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
                                    radial-gradient(circle at 70% 70%, rgba(20, 184, 166, 0.15) 0%, transparent 50%),
                                    radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)
                                `,
                            }}
                        />

                        {/* Outer rotating ring - static */}
                        <motion.div
                            className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 lg:-top-8 lg:-left-8 w-[calc(100%+24px)] sm:w-[calc(100%+32px)] md:w-[calc(100%+48px)] lg:w-[calc(100%+64px)] h-[calc(100%+24px)] sm:h-[calc(100%+32px)] md:h-[calc(100%+48px)] lg:h-[calc(100%+64px)] rounded-full"
                            animate={{ rotate: [0, 360] }}
                            transition={{
                                duration: 50,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                        >
                            <div className="w-full h-full rounded-full border-2 sm:border-2 md:border-3 lg:border-4 border-dashed border-emerald-400/40" />
                        </motion.div>

                        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 relative z-10">
                            <div className="w-full h-full relative overflow-hidden">
                                {/* Static border */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/40 via-teal-400/40 to-emerald-500/40" />

                                {/* Image container */}
                                <div className="absolute inset-1 sm:inset-1 md:inset-2 lg:inset-2 overflow-hidden rounded-full bg-zinc-900">
                                    <img
                                        src="/profile-image.png"
                                        alt="Ali - Full Stack Developer"
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-emerald-500/10" />
                                </div>
                            </div>
                        </div>

                        {[
                            {
                                size: 24,
                                color: "emerald",
                                position: { bottom: -8, right: -8 },
                                smPosition: { bottom: -10, right: -10 },
                                mdPosition: { bottom: -12, right: -12 },
                            },
                            {
                                size: 18,
                                color: "teal",
                                position: { top: -6, right: 12 },
                                smPosition: { top: -8, right: 15 },
                                mdPosition: { top: -8, right: 15 },
                            },
                            {
                                size: 16,
                                color: "cyan",
                                position: { bottom: 12, left: -6 },
                                smPosition: { bottom: 15, left: -8 },
                                mdPosition: { bottom: 15, left: -8 },
                            },
                        ].map((orb, i) => (
                            <div
                                key={i}
                                className={`absolute w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-${orb.color}-500 to-${orb.color}-400 rounded-full blur-xl opacity-70`}
                                style={orb.position}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex absolute bottom-6 xl:bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center z-10">
                <div className="flex flex-col items-center cursor-pointer group">
                    <div className="text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
                        <Zap className="h-5 w-5 lg:h-6 lg:w-6" />
                    </div>
                    <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-emerald-400/60 rounded-full flex justify-center relative group-hover:border-emerald-400 transition-colors">
                        <div className="w-1 h-2 lg:h-3 bg-emerald-400 rounded-full mt-1 lg:mt-2" />
                    </div>
                    <span className="text-xs text-zinc-500 mt-2 lg:mt-3 group-hover:text-zinc-400 transition-colors">
                        Explore More
                    </span>
                </div>
            </div>
        </section>
    );
}
