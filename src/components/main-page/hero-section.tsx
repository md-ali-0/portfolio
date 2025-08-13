"use client";

import { useMobile } from "@/hooks/use-mobile";
import {
    motion,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform
} from "framer-motion";
import {
    ArrowRight,
    Code,
    Download,
    Github,
    Linkedin,
    Mail,
    Send,
    Sparkles,
    Zap
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedButton from "../animated-button";
import MagneticElement from "../magnetic-element";

export default function HomeSection() {
    const isMobile = useMobile();
    const { scrollY } = useScroll();
    
    // Advanced scroll effects
    const heroY = useTransform(scrollY, [0, 500], [0, -100]);
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
    const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);
    
    // Mouse position for parallax effects
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Floating elements
    const [floatingElements, setFloatingElements] = useState<Array<{
        id: number;
        x: number;
        y: number;
        delay: number;
        duration: number;
    }>>([]);

    useEffect(() => {
        // Generate floating elements
        const elements = Array.from({ length: 12 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 10 + Math.random() * 10,
        }));
        setFloatingElements(elements);

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const normalizedX = (clientX - centerX) / centerX;
            const normalizedY = (clientY - centerY) / centerY;

            mouseX.set(normalizedX * 10);
            mouseY.set(normalizedY * 10);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const socialLinks = [
        {
            icon: <Github className="h-6 w-6" />,
            href: "https://github.com",
            label: "GitHub",
            color: "hover:text-emerald-400",
        },
        {
            icon: <Linkedin className="h-6 w-6" />,
            href: "https://linkedin.com",
            label: "LinkedIn",
            color: "hover:text-blue-400",
        },
        {
            icon: <Mail className="h-6 w-6" />,
            href: "mailto:contact@example.com",
            label: "Email",
            color: "hover:text-teal-400",
        },
    ];

    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-12 relative overflow-hidden"
        >
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                {/* Main gradient background */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Animated mesh gradient overlay */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `radial-gradient(circle at ${50 + smoothMouseX.get()}% ${50 + smoothMouseY.get()}%, 
                            rgba(16, 185, 129, 0.15) 0%, 
                            rgba(20, 184, 166, 0.1) 25%, 
                            transparent 50%),
                        radial-gradient(circle at ${30 + smoothMouseX.get() * -1}% ${70 + smoothMouseY.get() * -1}%, 
                            rgba(6, 182, 212, 0.1) 0%, 
                            rgba(16, 185, 129, 0.05) 30%, 
                            transparent 60%)`,
                    }}
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Grid pattern */}
                <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Floating Decorative Elements */}
            {!isMobile && floatingElements.map((element) => (
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
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Main Content */}
            <motion.div 
                className="container mx-auto py-20 md:py-32 flex flex-col-reverse md:flex-row items-center z-10"
                style={{
                    y: heroY,
                    opacity: heroOpacity,
                    scale: heroScale,
                }}
            >
                {/* Text Content */}
                <motion.div
                    className="md:w-1/2 space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Greeting with animated typing effect */}
                    <div className="space-y-4">
                        <motion.div
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 20, 0] }}
                                transition={{ 
                                    duration: 2, 
                                    repeat: Infinity,
                                    repeatDelay: 3 
                                }}
                            >
                                <Sparkles className="h-6 w-6 text-emerald-400" />
                            </motion.div>
                            <motion.h2
                                className="text-emerald-400 text-xl font-medium"
                                style={{
                                    x: !isMobile ? smoothMouseX.get() * -0.5 : 0,
                                    y: !isMobile ? smoothMouseY.get() * -0.5 : 0,
                                }}
                            >
                                Hello, I'm
                            </motion.h2>
                        </motion.div>

                        {/* Enhanced Name with advanced gradient */}
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold relative"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            style={{
                                x: !isMobile ? smoothMouseX.get() * -1 : 0,
                                y: !isMobile ? smoothMouseY.get() * -1 : 0,
                            }}
                        >
                            {/* Glowing background text */}
                            <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400/20 via-teal-300/20 to-emerald-500/20 blur-sm scale-110">
                                Mohammad Ali
                            </span>
                            
                            {/* Main text with animated gradient */}
                            <motion.span
                                className="relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500"
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                style={{
                                    backgroundSize: "200% 200%",
                                }}
                            >
                                Mohammad Ali
                            </motion.span>

                            {/* Floating particles around name */}
                            {[...Array(6)].map((_, i) => (
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
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </motion.h1>

                        {/* Enhanced Role Title */}
                        <motion.div
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 180, 360] 
                                }}
                                transition={{ 
                                    duration: 3, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Code className="h-8 w-8 text-teal-400" />
                            </motion.div>
                            <motion.h3
                                className="text-2xl md:text-4xl text-zinc-300 font-semibold"
                                style={{
                                    x: !isMobile ? smoothMouseX.get() * -0.7 : 0,
                                    y: !isMobile ? smoothMouseY.get() * -0.7 : 0,
                                }}
                            >
                                Full-Stack Developer
                            </motion.h3>
                        </motion.div>
                    </div>

                    {/* Enhanced Description */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <motion.p
                            className="text-zinc-400 text-lg leading-relaxed max-w-xl"
                            style={{
                                x: !isMobile ? smoothMouseX.get() * -0.3 : 0,
                                y: !isMobile ? smoothMouseY.get() * -0.3 : 0,
                            }}
                        >
                            A dedicated developer on a journey of continuous
                            learning and growth, creating{" "}
                            <span className="text-emerald-400 font-semibold">impactful projects</span>
                            {" "}with creativity and expertise.
                        </motion.p>
                        
                        {/* Stats */}
                        <motion.div
                            className="flex space-x-8 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                        >
                            {[
                                { number: "50+", label: "Projects" },
                                { number: "3+", label: "Years" },
                                { number: "20+", label: "Technologies" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-2xl font-bold text-emerald-400">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-zinc-500">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Enhanced Action Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-4 pt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <MagneticElement strength={80}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <AnimatedButton 
                                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25"
                                    dataCursorText="Let's Talk"
                                >
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ 
                                            duration: 2, 
                                            repeat: Infinity,
                                            ease: "easeInOut" 
                                        }}
                                    >
                                        Contact Me
                                    </motion.div>
                                    <Send className="ml-2 h-4 w-4" />
                                </AnimatedButton>
                            </motion.div>
                        </MagneticElement>

                        <MagneticElement strength={60}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <AnimatedButton
                                    variant="outline"
                                    className="border-2 border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 backdrop-blur-sm"
                                    dataCursorText="See Projects"
                                >
                                    View Projects
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </AnimatedButton>
                            </motion.div>
                        </MagneticElement>

                        <MagneticElement strength={60}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <AnimatedButton
                                    variant="outline"
                                    className="border-2 border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:text-white backdrop-blur-sm"
                                    dataCursorText="Download CV"
                                >
                                    <motion.div
                                        animate={{ y: [0, -2, 0] }}
                                        transition={{ 
                                            duration: 1.5, 
                                            repeat: Infinity,
                                            ease: "easeInOut" 
                                        }}
                                    >
                                        <Download className="mr-2 h-4 w-4" />
                                    </motion.div>
                                    Resume
                                </AnimatedButton>
                            </motion.div>
                        </MagneticElement>
                    </motion.div>

                    {/* Enhanced Social Links */}
                    <motion.div
                        className="flex gap-6 pt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                    >
                        {socialLinks.map((social, index) => (
                            <MagneticElement key={index} strength={100}>
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.1,
                                        rotate: [0, -10, 10, 0],
                                    }}
                                    transition={{ 
                                        rotate: { duration: 0.5 },
                                        scale: { duration: 0.2 }
                                    }}
                                >
                                    <Link
                                        href={social.href}
                                        className={`text-zinc-400 ${social.color} transition-all duration-300 p-3 rounded-full border border-zinc-700 hover:border-emerald-400/50 backdrop-blur-sm bg-zinc-900/30 hover:bg-zinc-800/50 block`}
                                        data-cursor="link"
                                        data-cursor-text={social.label}
                                    >
                                        {social.icon}
                                    </Link>
                                </motion.div>
                            </MagneticElement>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Enhanced Image Section */}
                <motion.div
                    className="md:w-1/2 mb-12 md:mb-0 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        x: !isMobile ? smoothMouseX.get() * 1.5 : 0,
                        y: !isMobile ? smoothMouseY.get() * 1.5 : 0,
                        rotate: !isMobile ? smoothMouseX.get() * 1 : 0,
                    }}
                >
                    <div className="relative">
                        {/* Large decorative background */}
                        <motion.div
                            className="absolute -inset-20 rounded-full opacity-30"
                            style={{
                                background: `
                                    radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
                                    radial-gradient(circle at 70% 70%, rgba(20, 184, 166, 0.15) 0%, transparent 50%),
                                    radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)
                                `,
                            }}
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 10, 0],
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        {/* Outer rotating ring with enhanced design */}
                        <motion.div
                            className="absolute -top-8 -left-8 w-[calc(100%+64px)] h-[calc(100%+64px)] rounded-full"
                            animate={{ rotate: [0, 360] }}
                            transition={{
                                duration: 50,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <div className="w-full h-full rounded-full border-4 border-dashed border-emerald-400/40" />
                            {/* Dots on the ring */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-3 h-3 bg-emerald-400 rounded-full"
                                    style={{
                                        top: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
                                        left: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.25,
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Middle ring */}
                        <motion.div
                            className="absolute -top-4 -left-4 w-[calc(100%+32px)] h-[calc(100%+32px)] rounded-full border-2 border-emerald-400/60"
                            animate={{ rotate: [360, 0] }}
                            transition={{
                                duration: 35,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        {/* Profile image with advanced styling */}
                        <motion.div
                            className="w-72 h-72 md:w-96 md:h-96 relative z-10"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            data-cursor="image"
                        >
                            <div className="w-full h-full relative overflow-hidden">
                                {/* Animated border with lightning effect */}
                                <motion.div 
                                    className="absolute inset-0 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500"
                                    animate={{
                                        borderRadius: [
                                            "30% 70% 70% 30% / 30% 30% 70% 70%",
                                            "70% 30% 30% 70% / 70% 70% 30% 30%",
                                            "50% 50% 50% 50% / 50% 50% 50% 50%",
                                            "30% 70% 70% 30% / 30% 30% 70% 70%",
                                        ],
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    {/* Lightning effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-[inherit]"
                                        animate={{
                                            boxShadow: [
                                                "0 0 20px rgba(16, 185, 129, 0.5)",
                                                "0 0 40px rgba(16, 185, 129, 0.8)",
                                                "0 0 20px rgba(16, 185, 129, 0.5)",
                                            ],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </motion.div>

                                {/* Image container */}
                                <motion.div 
                                    className="absolute inset-4 overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-zinc-900"
                                    animate={{
                                        borderRadius: [
                                            "30% 70% 70% 30% / 30% 30% 70% 70%",
                                            "70% 30% 30% 70% / 70% 70% 30% 30%",
                                            "50% 50% 50% 50% / 50% 50% 50% 50%",
                                            "30% 70% 70% 30% / 30% 30% 70% 70%",
                                        ],
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <img
                                        src="/profile-image.png"
                                        alt="Ali - Full Stack Developer"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-emerald-500/10" />
                                </motion.div>
                            </div>

                            {/* Tech stack indicators floating around image */}
                            {/* {[
                                { icon: "⚛️", name: "React", angle: 0 },
                                { icon: "📱", name: "Next.js", angle: 60 },
                                { icon: "⚡", name: "Node.js", angle: 120 },
                                { icon: "🚀", name: "TypeScript", angle: 180 },
                                { icon: "🎨", name: "Tailwind", angle: 240 },
                                { icon: "🔥", name: "MongoDB", angle: 300 },
                            ].map((tech, i) => (
                                <motion.div
                                    key={tech.name}
                                    className="absolute w-12 h-12 bg-zinc-900/80 backdrop-blur-sm border border-emerald-400/30 rounded-full flex items-center justify-center text-xl"
                                    style={{
                                        top: `${50 + 60 * Math.cos((tech.angle * Math.PI) / 180)}%`,
                                        left: `${50 + 60 * Math.sin((tech.angle * Math.PI) / 180)}%`,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                    animate={{
                                        y: [0, -10, 0],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 3 + i * 0.5,
                                        repeat: Infinity,
                                        delay: i * 0.5,
                                    }}
                                    whileHover={{ 
                                        scale: 1.2,
                                        borderColor: "rgba(16, 185, 129, 0.8)",
                                    }}
                                    data-cursor="tech"
                                    title={tech.name}
                                >
                                    {tech.icon}
                                </motion.div>
                            ))} */}
                        </motion.div>

                        {/* Enhanced floating orbs with different sizes and colors */}
                        {[
                            { size: 32, color: "emerald", position: { bottom: -16, right: -16 } },
                            { size: 24, color: "teal", position: { top: -12, right: 20 } },
                            { size: 20, color: "cyan", position: { bottom: 20, left: -12 } },
                        ].map((orb, i) => (
                            <motion.div
                                key={i}
                                className={`absolute w-${orb.size/4} h-${orb.size/4} bg-gradient-to-r from-${orb.color}-500 to-${orb.color}-400 rounded-full blur-xl opacity-70`}
                                style={orb.position}
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 4 + i,
                                    repeat: Infinity,
                                    delay: i * 0.8,
                                }}
                            />
                        ))}

                        {/* Orbiting particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full bg-emerald-400/80"
                                style={{
                                    top: `${50}%`,
                                    left: `${50}%`,
                                    transform: "translate(-50%, -50%)",
                                }}
                                animate={{
                                    rotate: [0, 360],
                                    x: [0, 150 * Math.cos((i * Math.PI * 2) / 8)],
                                    y: [0, 150 * Math.sin((i * Math.PI * 2) / 8)],
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.3,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <motion.div 
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
            >
                <motion.div
                    className="flex flex-col items-center cursor-pointer group"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.1 }}
                >
                    <motion.div className="text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
                        <Zap className="h-6 w-6" />
                    </motion.div>
                    <motion.div
                        className="w-6 h-10 border-2 border-emerald-400/60 rounded-full flex justify-center relative group-hover:border-emerald-400 transition-colors"
                        whileHover={{ 
                            boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" 
                        }}
                    >
                        <motion.div
                            className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
                            animate={{
                                y: [0, 12, 0],
                                opacity: [1, 0.3, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                    <motion.span 
                        className="text-xs text-zinc-500 mt-3 group-hover:text-zinc-400 transition-colors"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Explore More
                    </motion.span>
                </motion.div>
            </motion.div>
        </section>
    );
}