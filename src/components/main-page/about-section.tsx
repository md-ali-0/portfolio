"use client";

import AnimatedButton from "@/components/animated-button";
import MagneticElement from "@/components/magnetic-element";
import { Card, CardContent } from "@/components/ui/card";
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
    Award,
    Code,
    Coffee,
    Heart,
    Layers,
    Sparkles,
    Target,
    User,
    Zap
} from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutSection() {
    const isMobile = useMobile();
    const { scrollY } = useScroll();

    // Mouse position for parallax effects
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smoothed mouse values for parallax
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Scroll-based animations
    const sectionY = useTransform(scrollY, [0, 1000], [0, -50]);
    const backgroundOpacity = useTransform(scrollY, [0, 500], [0.1, 0.3]);

    // Floating elements state
    const [floatingElements, setFloatingElements] = useState<Array<{
        id: number;
        x: number;
        y: number;
        delay: number;
        duration: number;
    }>>([]);

    useEffect(() => {
        // Generate floating elements
        const elements = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 3,
            duration: 8 + Math.random() * 6,
        }));
        setFloatingElements(elements);

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const normalizedX = (clientX - centerX) / centerX;
            const normalizedY = (clientY - centerY) / centerY;

            mouseX.set(normalizedX * 8);
            mouseY.set(normalizedY * 8);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const stats = [
        {
            title: "3+",
            subtitle: "Years Experience",
            icon: <User className="h-6 w-6" />,
            color: "from-emerald-400 to-teal-500",
            bgColor: "bg-emerald-500/20",
            description: "Professional development"
        },
        {
            title: "50+",
            subtitle: "Projects Completed",
            icon: <Code className="h-6 w-6" />,
            color: "from-blue-400 to-cyan-500",
            bgColor: "bg-blue-500/20",
            description: "Successful deliveries"
        },
        {
            title: "25+",
            subtitle: "Happy Clients",
            icon: <Heart className="h-6 w-6" />,
            color: "from-pink-400 to-rose-500",
            bgColor: "bg-pink-500/20",
            description: "Satisfied customers"
        },
        {
            title: "15+",
            subtitle: "Technologies",
            icon: <Layers className="h-6 w-6" />,
            color: "from-purple-400 to-indigo-500",
            bgColor: "bg-purple-500/20",
            description: "Tech stack mastery"
        },
    ];

    const achievements = [
        {
            icon: <Award className="h-5 w-5" />,
            title: "Top Performer",
            description: "Consistently delivered high-quality projects"
        },
        {
            icon: <Target className="h-5 w-5" />,
            title: "Problem Solver",
            description: "Expert at finding creative solutions"
        },
        {
            icon: <Zap className="h-5 w-5" />,
            title: "Fast Learner",
            description: "Quick to adapt to new technologies"
        },
        {
            icon: <Coffee className="h-5 w-5" />,
            title: "Team Player",
            description: "Collaborative and supportive colleague"
        }
    ];

    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                {/* Base gradient */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
                    style={{ opacity: backgroundOpacity }}
                />

                {/* Animated mesh gradient */}
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: `radial-gradient(circle at ${30 + smoothMouseX.get()}% ${40 + smoothMouseY.get()}%, 
                            rgba(16, 185, 129, 0.15) 0%, 
                            rgba(20, 184, 166, 0.1) 25%, 
                            transparent 50%),
                        radial-gradient(circle at ${70 + smoothMouseX.get() * -1}% ${60 + smoothMouseY.get() * -1}%, 
                            rgba(6, 182, 212, 0.1) 0%, 
                            rgba(16, 185, 129, 0.05) 30%, 
                            transparent 60%)`,
                    }}
                    animate={{
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Grid pattern */}
                <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            {/* Floating Decorative Elements */}
            {!isMobile && floatingElements.map((element) => (
                <motion.div
                    key={element.id}
                    className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400/40 to-teal-400/40 rounded-full"
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
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <motion.div 
                className="container mx-auto relative z-10"
                style={{ y: sectionY }}
            >
                {/* Enhanced Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center mb-16"
                >
                    <motion.div
                        className="flex items-center space-x-3 mb-4"
                        style={{
                            x: !isMobile ? smoothMouseX.get() * -0.5 : 0,
                            y: !isMobile ? smoothMouseY.get() * -0.5 : 0,
                        }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 15, 0] }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity,
                                repeatDelay: 2 
                            }}
                        >
                            <Sparkles className="h-8 w-8 text-emerald-400" />
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-center">
                            About{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
                                Me
                            </span>
                        </h2>
                    </motion.div>

                    {/* Enhanced decorative line */}
                    <motion.div
                        className="relative"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-sm"
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            />
                        </div>
                        
                        {/* Glowing dots */}
                        <motion.div
                            className="absolute -left-2 top-1/2 w-2 h-2 bg-emerald-400 rounded-full transform -translate-y-1/2"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                            }}
                        />
                        <motion.div
                            className="absolute -right-2 top-1/2 w-2 h-2 bg-teal-400 rounded-full transform -translate-y-1/2"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: 0.5,
                            }}
                        />
                    </motion.div>

                    <motion.p
                        className="text-zinc-400 text-lg text-center max-w-2xl mt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Passionate about creating exceptional digital experiences through innovative development
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Enhanced Content Section */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        style={{
                            x: !isMobile ? smoothMouseX.get() * -1.5 : 0,
                            y: !isMobile ? smoothMouseY.get() * -1.5 : 0,
                        }}
                    >
                        {/* Enhanced text content */}
                        <div className="space-y-6">
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                <p className="text-zinc-300 leading-relaxed text-lg relative z-10">
                                    I'm a passionate{" "}
                                    <span className="text-emerald-400 font-semibold">Full-Stack Developer</span>{" "}
                                    with expertise in building responsive and performant web applications. My journey in web development started with a curiosity about how websites work, and it has evolved into a professional career where I continuously learn and apply{" "}
                                    <span className="text-teal-400 font-semibold">cutting-edge technologies</span>.
                                </p>
                            </motion.div>

                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                <p className="text-zinc-300 leading-relaxed text-lg relative z-10">
                                    I specialize in both{" "}
                                    <span className="text-emerald-400 font-semibold">frontend</span>{" "}
                                    and{" "}
                                    <span className="text-teal-400 font-semibold">backend</span>{" "}
                                    development, creating seamless user experiences while ensuring robust server-side functionality. My approach combines technical expertise with creative problem-solving to deliver solutions that{" "}
                                    <span className="text-emerald-400 font-semibold">exceed expectations</span>.
                                </p>
                            </motion.div>
                        </div>

                        {/* Achievements Grid */}
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    className="group p-4 rounded-lg bg-zinc-800/30 border border-zinc-700/50 hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-sm"
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)"
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-start space-x-3">
                                        <div className="p-2 rounded-full bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30 transition-colors">
                                            {achievement.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                                                {achievement.title}
                                            </h4>
                                            <p className="text-sm text-zinc-400 mt-1">
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Enhanced CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <MagneticElement strength={80}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <AnimatedButton 
                                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 relative overflow-hidden group"
                                        dataCursorText="More About Me"
                                    >
                                        {/* Animated background */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500"
                                            initial={{ x: "-100%" }}
                                            whileHover={{ x: "0%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        
                                        <span className="relative flex items-center">
                                            <motion.span
                                                animate={{ x: [0, 3, 0] }}
                                                transition={{ 
                                                    duration: 2, 
                                                    repeat: Infinity,
                                                    ease: "easeInOut" 
                                                }}
                                            >
                                                Learn More
                                            </motion.span>
                                            <motion.div
                                                className="ml-2"
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ 
                                                    duration: 2, 
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: 0.1
                                                }}
                                            >
                                                <ArrowRight className="h-4 w-4" />
                                            </motion.div>
                                        </span>
                                    </AnimatedButton>
                                </motion.div>
                            </MagneticElement>
                        </motion.div>
                    </motion.div>

                    {/* Enhanced Stats Grid */}
                    <motion.div
                        className="grid grid-cols-2 gap-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {stats.map((stat, index) => (
                            <MagneticElement key={index} strength={60}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.1 * index,
                                    }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    whileHover={{
                                        scale: 1.05,
                                        rotateY: 5,
                                    }}
                                    style={{
                                        x: !isMobile
                                            ? smoothMouseX.get() * (index % 2 === 0 ? 1.5 : -1.5)
                                            : 0,
                                        y: !isMobile
                                            ? smoothMouseY.get() * (index < 2 ? 1.5 : -1.5)
                                            : 0,
                                    }}
                                    data-cursor="button"
                                >
                                    <Card className="bg-zinc-800/40 border-zinc-700/50 hover:border-emerald-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden group relative">
                                        {/* Animated background gradient */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            animate={{
                                                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                                            }}
                                            transition={{
                                                duration: 8,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        />

                                        {/* Glowing border effect */}
                                        <motion.div
                                            className="absolute inset-0 rounded-lg"
                                            animate={{
                                                boxShadow: [
                                                    "0 0 0 0 rgba(16, 185, 129, 0)",
                                                    "0 0 20px 0 rgba(16, 185, 129, 0.1)",
                                                    "0 0 0 0 rgba(16, 185, 129, 0)",
                                                ],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: index * 0.5,
                                            }}
                                        />

                                        <CardContent className="p-8 text-center relative z-10">
                                            {/* Enhanced icon with animation */}
                                            <motion.div
                                                className="flex justify-center mb-4"
                                                whileHover={{ 
                                                    rotate: [0, -10, 10, 0],
                                                    scale: 1.1 
                                                }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <div className={`p-4 rounded-full ${stat.bgColor} text-emerald-400 relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                                                    {/* Pulsing background */}
                                                    <motion.div
                                                        className="absolute inset-0 bg-emerald-400/20 rounded-full"
                                                        animate={{
                                                            scale: [1, 1.2, 1],
                                                            opacity: [0.5, 0.8, 0.5],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            delay: index * 0.3,
                                                        }}
                                                    />
                                                    <span className="relative z-10">
                                                        {stat.icon}
                                                    </span>
                                                </div>
                                            </motion.div>

                                            {/* Enhanced number with counter animation */}
                                            <motion.h3
                                                className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-2`}
                                                whileInView={{
                                                    scale: [0.8, 1.1, 1],
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: 0.2 * index,
                                                }}
                                                viewport={{ once: true }}
                                            >
                                                {stat.title}
                                            </motion.h3>

                                            <p className="text-zinc-300 font-medium mb-2 group-hover:text-white transition-colors">
                                                {stat.subtitle}
                                            </p>

                                            <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
                                                {stat.description}
                                            </p>

                                            {/* Decorative elements */}
                                            <motion.div
                                                className="absolute top-2 right-2 w-2 h-2 bg-emerald-400/60 rounded-full"
                                                animate={{
                                                    scale: [1, 1.5, 1],
                                                    opacity: [0.6, 1, 0.6],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: index * 0.4,
                                                }}
                                            />

                                            <motion.div
                                                className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-teal-400/60 rounded-full"
                                                animate={{
                                                    scale: [1, 1.3, 1],
                                                    opacity: [0.4, 0.8, 0.4],
                                                }}
                                                transition={{
                                                    duration: 2.5,
                                                    repeat: Infinity,
                                                    delay: index * 0.6,
                                                }}
                                            />
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </MagneticElement>
                        ))}
                    </motion.div>
                </div>

                {/* Additional decorative elements */}
                {!isMobile && (
                    <>
                        {/* Large floating orbs */}
                        <motion.div
                            className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-xl"
                            animate={{
                                y: [0, -20, 0],
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{
                                x: smoothMouseX.get() * 3,
                                y: smoothMouseY.get() * 3,
                            }}
                        />

                        <motion.div
                            className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-xl"
                            animate={{
                                y: [0, 15, 0],
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2,
                            }}
                            style={{
                                x: smoothMouseX.get() * -2,
                                y: smoothMouseY.get() * -2,
                            }}
                        />

                        {/* Geometric shapes */}
                        <motion.div
                            className="absolute top-1/3 left-5 w-4 h-4 border-2 border-emerald-400/30 rotate-45"
                            animate={{
                                rotate: [45, 225, 45],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        <motion.div
                            className="absolute bottom-1/3 right-8 w-6 h-6 border-2 border-teal-400/30 rounded-full"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </>
                )}
            </motion.div>
        </section>
    );
}