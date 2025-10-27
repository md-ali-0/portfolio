"use client";

import { useMobile } from "@/hooks/use-mobile";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedButton from "./animated-button";

export default function Navbar() {
    const isMobile = useMobile();
    const { scrollY } = useScroll();

    // Enhanced scroll effects
    const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 0.9]);
    const headerBlur = useTransform(scrollY, [0, 100], [8, 80]);
    const headerY = useTransform(scrollY, [0, 100], [0, -5]);

    // Background gradient animation
    const backgroundOpacity = useTransform(scrollY, [0, 200], [0.5, 0.9]);
    const gradientPosition = useTransform(scrollY, [0, 1000], [0, 100]);

    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Mouse position for parallax effects
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            const sections = ["home", "about", "skills", "projects", "contact"];

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }

            // Handle edge case for home section at the very top
            if (window.scrollY < 100) {
                setActiveSection("home");
            }
        };

        const throttle = (callback: Function, limit: number) => {
            let waiting = false;
            return function (this: any, ...args: any[]) {
                if (!waiting) {
                    callback.apply(this, args);
                    waiting = true;
                    setTimeout(() => {
                        waiting = false;
                    }, limit);
                }
            };
        };

        const handleMouseMove = throttle((e: MouseEvent) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const normalizedX = (clientX - centerX) / centerX;
            const normalizedY = (clientY - centerY) / centerY;

            mouseX.set(normalizedX * 5);
            mouseY.set(normalizedY * 5);
        }, 16);

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    const navItems = [
        { name: "Home", href: "/#home", id: "home" },
        { name: "About", href: "/#about", id: "about" },
        { name: "Skills", href: "/#skills", id: "skills" },
        { name: "Projects", href: "/projects", id: "projects" },
        { name: "Blog", href: "/blog", id: "blog" },
        { name: "Contact", href: "/#contact", id: "contact" },
    ];

    return (
        <motion.header
            className="sticky top-0 left-0 right-0 z-50 transition-all duration-500"
            style={{
                opacity: headerOpacity,
                y: headerY,
            }}
        >
            {/* Enhanced Background with Multiple Layers */}
            <motion.div
                className="absolute inset-0 overflow-hidden"
                style={{
                    backdropFilter: headerBlur,
                }}
            >
                {/* Base background */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-zinc-900/70 to-zinc-950/60"
                    style={{
                        opacity: backgroundOpacity,
                    }}
                />

                {/* Animated gradient overlay */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(${gradientPosition}deg, 
                                rgba(16, 185, 129, 0.1) 0%, 
                                rgba(20, 184, 166, 0.05) 25%, 
                                rgba(6, 182, 212, 0.1) 50%, 
                                rgba(16, 185, 129, 0.05) 75%, 
                                rgba(20, 184, 166, 0.1) 100%)`,
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Shimmer effect */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(90deg, 
                                transparent 0%, 
                                rgba(16, 185, 129, 0.1) 40%, 
                                rgba(16, 185, 129, 0.2) 50%, 
                                rgba(16, 185, 129, 0.1) 60%, 
                                transparent 100%)`,
                        x: useTransform(scrollY, [0, 1000], [-100, 100]),
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                    }}
                />

                {/* Border gradients */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                <motion.div
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
                    animate={{
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            <div className="container mx-auto py-5 relative z-10 sm:px-6 lg:px-8">
                <nav className="flex justify-between items-center">
                    {/* Enhanced Logo */}
                    <motion.div
                        style={{
                            x: !isMobile ? smoothMouseX.get() * -2 : 0,
                            y: !isMobile ? smoothMouseY.get() * -2 : 0,
                        }}
                    >
                        <Link
                            href="/"
                            className="relative group"
                            data-cursor="link"
                            data-cursor-text="Home"
                        >
                            {/* Glowing background */}
                            <motion.div
                                className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            <motion.div className="relative text-2xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
                                    Ali
                                </span>
                                <motion.span
                                    className="text-white ml-1"
                                    animate={{
                                        color: [
                                            "#ffffff",
                                            "#10b981",
                                            "#ffffff",
                                        ],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    .
                                </motion.span>

                                {/* Animated underline */}
                                <motion.span
                                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Floating particles around logo */}
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={`particle-${i}`}
                                        className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-60"
                                        style={{
                                            top: `${-10 + i * 5}px`,
                                            left: `${60 + i * 10}px`,
                                        }}
                                        animate={{
                                            y: [0, -8, 0],
                                            opacity: [0.6, 1, 0.6],
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2 + i * 0.5,
                                            repeat: Infinity,
                                            delay: i * 0.3,
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-8 items-center">
                        {navItems.map((item, index) => (
                            <motion.div
                                style={{
                                    x: !isMobile
                                        ? smoothMouseX.get() *
                                          (index % 2 === 0 ? -1 : 1)
                                        : 0,
                                    y: !isMobile
                                        ? smoothMouseY.get() *
                                          (index % 2 === 0 ? -1 : 1)
                                        : 0,
                                }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                key={index}
                            >
                                <Link
                                    href={item.href}
                                    className="relative group py-2 px-1"
                                    data-cursor="link"
                                    data-cursor-text={item.name}
                                >
                                    {/* Glowing background for active/hover */}
                                    {/* <motion.div
                                                className="absolute -inset-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg opacity-0"
                                                animate={{
                                                    opacity: activeSection === item.id ? 0.7 : 0,
                                                }}
                                                whileHover={{ opacity: 0.5 }}
                                                transition={{ duration: 0.3 }}
                                            /> */}

                                    <motion.span
                                        className={`relative font-medium transition-all duration-300 ${
                                            activeSection === item.id
                                                ? "text-emerald-400"
                                                : "text-zinc-200 group-hover:text-emerald-400"
                                        }`}
                                        whileHover={{
                                            scale: 1.05,
                                            textShadow:
                                                "0 0 8px rgba(16, 185, 129, 0.5)",
                                        }}
                                    >
                                        {item.name}
                                    </motion.span>

                                    {/* Enhanced underline */}
                                    <motion.span
                                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{
                                            width:
                                                activeSection === item.id
                                                    ? "100%"
                                                    : "0%",
                                        }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Glowing dots */}
                                    {/* {activeSection === item.id && (
                                                <motion.div
                                                    className="absolute -top-2 left-1/2 w-1 h-1 bg-emerald-400 rounded-full"
                                                    initial={{ scale: 0, x: "-50%" }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <motion.div
                                                        className="absolute inset-0 bg-emerald-400 rounded-full"
                                                        animate={{
                                                            scale: [1, 2, 1],
                                                            opacity: [1, 0, 1],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                        }}
                                                    />
                                                </motion.div>
                                            )} */}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Enhanced Resume Button */}
                    <div className="flex items-center gap-4">
                        <AnimatedButton
                            variant="outline"
                            className="relative border-2 border-emerald-400/50 text-emerald-400 hover:text-white hover:border-emerald-400 transition-all duration-300 overflow-hidden group text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5"
                            dataCursorText="Download CV"
                        >
                            {/* Button content with responsive sizing */}
                            <span className="relative flex items-center">
                                <motion.div
                                    animate={{
                                        rotate: [0, 10, -10, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatDelay: 2,
                                    }}
                                >
                                    <Download className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                </motion.div>
                                <span className="hidden sm:inline">Resume</span>
                                <span className="sm:hidden">CV</span>
                            </span>

                            {/* Glowing border */}
                            <motion.div
                                className="absolute inset-0 border-2 border-emerald-400/0 rounded-md"
                                whileHover={{
                                    borderColor: "rgba(16, 185, 129, 0.5)",
                                    boxShadow:
                                        "0 0 20px rgba(16, 185, 129, 0.3)",
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </AnimatedButton>

                        {/* Mobile Menu Toggle */}
                        {isMobile && (
                            <motion.button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-3 text-emerald-400 relative min-w-[44px] min-h-[44px] flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                data-cursor="button"
                            >
                                <AnimatePresence mode="wait">
                                    {isMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{
                                                rotate: -90,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                rotate: 0,
                                                opacity: 1,
                                            }}
                                            exit={{
                                                rotate: 90,
                                                opacity: 0,
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="h-6 w-6" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{
                                                rotate: 90,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                rotate: 0,
                                                opacity: 1,
                                            }}
                                            exit={{
                                                rotate: -90,
                                                opacity: 0,
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="h-6 w-6" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Ripple effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border border-emerald-400/30"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 0, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                    }}
                                />
                            </motion.button>
                        )}
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && isMobile && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-t border-zinc-700/50 backdrop-blur-xl"
                    >
                        {/* Base background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-zinc-900/95 to-zinc-950/95"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Container with responsive max-widths */}
                        <div className="container mx-auto py-4 sm:py-6 px-4 sm:px-6 relative z-10 max-w-7xl">
                            <div className="flex flex-col space-y-2 sm:space-y-3">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`block py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 min-h-[48px] text-base sm:text-lg ${
                                                activeSection === item.id
                                                    ? "bg-emerald-500/20 text-emerald-400 border-l-4 border-emerald-400"
                                                    : "text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800/50"
                                            }`}
                                            data-cursor="link"
                                        >
                                            <span className="font-medium">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Decorative Elements */}
            {!isMobile && (
                <>
                    {/* Floating orbs */}
                    <motion.div
                        className="absolute top-2 left-20 w-2 h-2 bg-emerald-400/60 rounded-full"
                        animate={{
                            y: [0, -5, 0],
                            opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            x: smoothMouseX.get() * 3,
                            y: smoothMouseY.get() * 3,
                        }}
                    />

                    <motion.div
                        className="absolute top-4 right-32 w-1.5 h-1.5 bg-teal-400/60 rounded-full"
                        animate={{
                            y: [0, -8, 0],
                            opacity: [0.4, 0.9, 0.4],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                        style={{
                            x: smoothMouseX.get() * -2,
                            y: smoothMouseY.get() * -2,
                        }}
                    />
                </>
            )}
        </motion.header>
    );
}
