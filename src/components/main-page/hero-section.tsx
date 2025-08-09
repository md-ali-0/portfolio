"use client";

import AnimatedButton from "@/components/animated-button";
import MagneticElement from "@/components/magnetic-element";
import { useMobile } from "@/hooks/use-mobile";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    const isMobile = useMobile();

    // Mouse position for parallax effects
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smoothed mouse values for parallax
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-20 relative"
        >
            <div className="container mx-auto py-20 md:py-32 flex flex-col md:flex-row items-center z-10">
                <motion.div
                    className="md:w-1/2 space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="space-y-2">
                        <motion.h2
                            className="text-emerald-400 text-xl font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            style={{
                                x: !isMobile ? smoothMouseX.get() * -0.5 : 0,
                                y: !isMobile ? smoothMouseY.get() * -0.5 : 0,
                            }}
                        >
                            Hello, I'm
                        </motion.h2>
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            style={{
                                x: !isMobile ? smoothMouseX.get() * -1 : 0,
                                y: !isMobile ? smoothMouseY.get() * -1 : 0,
                            }}
                        >
                            Ali
                        </motion.h1>
                        <motion.h3
                            className="text-2xl md:text-3xl text-zinc-300 font-medium mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            style={{
                                x: !isMobile ? smoothMouseX.get() * -0.7 : 0,
                                y: !isMobile ? smoothMouseY.get() * -0.7 : 0,
                            }}
                        >
                            Full-Stack Developer
                        </motion.h3>
                    </div>
                    <motion.p
                        className="text-zinc-400 text-lg max-w-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        style={{
                            x: !isMobile ? smoothMouseX.get() * -0.3 : 0,
                            y: !isMobile ? smoothMouseY.get() * -0.3 : 0,
                        }}
                    >
                        A dedicated developer on a journey of continuous
                        learning and growth, creating impactful projects with
                        creativity and expertise.
                    </motion.p>
                    <motion.div
                        className="flex gap-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <MagneticElement strength={80}>
                            <AnimatedButton dataCursorText="Let's Talk">
                                Contact Me <Send className="ml-2 h-4 w-4" />
                            </AnimatedButton>
                        </MagneticElement>
                        <MagneticElement strength={60}>
                            <AnimatedButton
                                variant="outline"
                                className="backdrop-blur-sm bg-zinc-900/30"
                                dataCursorText="See Projects"
                            >
                                View Projects{" "}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </AnimatedButton>
                        </MagneticElement>
                    </motion.div>
                    <motion.div
                        className="flex gap-4 pt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                    >
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
                            <MagneticElement key={index} strength={100}>
                                <Link
                                    href={social.href}
                                    className="text-zinc-400 hover:text-emerald-400 transition-colors"
                                    data-cursor="link"
                                    data-cursor-text={social.label}
                                >
                                    {social.icon}
                                </Link>
                            </MagneticElement>
                        ))}
                    </motion.div>
                </motion.div>
                <motion.div
                    className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        x: !isMobile ? smoothMouseX.get() * 2 : 0,
                        y: !isMobile ? smoothMouseY.get() * 2 : 0,
                        rotate: !isMobile ? smoothMouseX.get() * 2 : 0,
                    }}
                >
                    <div className="relative">
                        {/* Decorative elements */}
                        <motion.div
                            className="absolute -top-10 -left-10 w-full h-full rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 z-0"
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 5, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                            }}
                            style={{
                                x: !isMobile ? smoothMouseX.get() * -5 : 0,
                                y: !isMobile ? smoothMouseY.get() * -5 : 0,
                            }}
                        />

                        {/* Outer decorative ring */}
                        <motion.div
                            className="absolute -top-6 -left-6 w-[calc(100%+48px)] h-[calc(100%+48px)] rounded-full border-4 border-dashed border-emerald-400/30 z-0"
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 40,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                        />

                        {/* Middle decorative ring */}
                        <motion.div
                            className="absolute -top-3 -left-3 w-[calc(100%+24px)] h-[calc(100%+24px)] rounded-full border-2 border-emerald-400/50 z-0"
                            animate={{
                                rotate: [360, 0],
                            }}
                            transition={{
                                duration: 30,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                        />

                        {/* Profile image container with fancy border */}
                        <motion.div
                            className="w-64 h-64 md:w-80 md:h-80 relative z-10"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            data-cursor="image"
                        >
                            {/* Hexagon clip path for the image */}
                            <div className="w-full h-full relative overflow-hidden">
                                {/* Fancy border with gradient and animation */}
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] z-0">
                                    <motion.div
                                        className="w-full h-full"
                                        animate={{
                                            borderRadius: [
                                                "30% 70% 70% 30% / 30% 30% 70% 70%",
                                                "70% 30% 30% 70% / 70% 70% 30% 30%",
                                                "30% 70% 70% 30% / 30% 30% 70% 70%",
                                            ],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatType: "reverse",
                                        }}
                                    />
                                </div>

                                {/* Image with padding for border effect */}
                                <div className="absolute inset-3 overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] glow-effect">
                                    <motion.div
                                        animate={{
                                            borderRadius: [
                                                "30% 70% 70% 30% / 30% 30% 70% 70%",
                                                "70% 30% 30% 70% / 70% 70% 30% 30%",
                                                "30% 70% 70% 30% / 30% 30% 70% 70%",
                                            ],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatType: "reverse",
                                        }}
                                        className="w-full h-full"
                                    >
                                        <img
                                            src="/profile-image.png"
                                            alt="Ali - Full Stack Developer"
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Glowing orb decoration */}
                        <motion.div
                            className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full z-0 blur-xl opacity-60"
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                            }}
                            style={{
                                x: !isMobile ? smoothMouseX.get() * 8 : 0,
                                y: !isMobile ? smoothMouseY.get() * 8 : 0,
                            }}
                        />

                        {/* Small floating particles */}
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full bg-emerald-400"
                                style={{
                                    top: `${20 + i * 15}%`,
                                    left: `${80 - i * 15}%`,
                                }}
                                animate={{
                                    y: [0, -10, 0],
                                    opacity: [0.4, 0.8, 0.4],
                                }}
                                transition={{
                                    duration: 2 + i,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                    delay: i * 0.3,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="text-emerald-400"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 5L12 19M12 19L19 12M12 19L5 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.div>
                <span className="text-xs text-zinc-500 mt-2">Scroll Down</span>
            </div>
        </section>
    );
}
