"use client";

import AnimatedButton from "@/components/animated-button";
import MagneticElement from "@/components/magnetic-element";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMobile } from "@/hooks/use-mobile";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
    ArrowRight,
    Box,
    Briefcase,
    Code,
    ExternalLink,
    Figma,
    Github,
    Instagram,
    Layers,
    Linkedin,
    Mail,
    Package,
    Send,
    Server,
    Terminal,
    TestTube,
    Triangle,
    Twitter,
    User,
    Wrench,
} from "lucide-react";
import Link from "next/link";

export default function ClientPage() {
    const isMobile = useMobile();

    // Mouse position for parallax effects
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smoothed mouse values for parallax
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    return (
        <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
            {/* Hero Section */}
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
                                    x: !isMobile
                                        ? smoothMouseX.get() * -0.5
                                        : 0,
                                    y: !isMobile
                                        ? smoothMouseY.get() * -0.5
                                        : 0,
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
                                    x: !isMobile
                                        ? smoothMouseX.get() * -0.7
                                        : 0,
                                    y: !isMobile
                                        ? smoothMouseY.get() * -0.7
                                        : 0,
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
                            learning and growth, creating impactful projects
                            with creativity and expertise.
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
                    <span className="text-xs text-zinc-500 mt-2">
                        Scroll Down
                    </span>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 relative">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col items-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-center inline-flex items-center">
                            About{" "}
                            <span className="text-emerald-400 mx-2">Me</span>
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mt-4 rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            style={{
                                x: !isMobile ? smoothMouseX.get() * -1 : 0,
                                y: !isMobile ? smoothMouseY.get() * -1 : 0,
                            }}
                        >
                            <p className="text-zinc-300 leading-relaxed">
                                I'm a passionate Full-Stack Developer with
                                expertise in building responsive and performant
                                web applications. My journey in web development
                                started with a curiosity about how websites
                                work, and it has evolved into a professional
                                career where I continuously learn and apply new
                                technologies.
                            </p>
                            <p className="text-zinc-300 leading-relaxed">
                                I specialize in both frontend and backend
                                development, creating seamless user experiences
                                while ensuring robust server-side functionality.
                                My approach combines technical expertise with
                                creative problem-solving to deliver solutions
                                that exceed expectations.
                            </p>
                            <MagneticElement strength={60}>
                                <AnimatedButton dataCursorText="More About Me">
                                    Learn More{" "}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </AnimatedButton>
                            </MagneticElement>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    title: "3+",
                                    subtitle: "Years Experience",
                                    icon: <User className="h-5 w-5" />,
                                },
                                {
                                    title: "20+",
                                    subtitle: "Projects Completed",
                                    icon: <Code className="h-5 w-5" />,
                                },
                                {
                                    title: "10+",
                                    subtitle: "Happy Clients",
                                    icon: <Briefcase className="h-5 w-5" />,
                                },
                                {
                                    title: "5+",
                                    subtitle: "Technologies",
                                    icon: <Layers className="h-5 w-5" />,
                                },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1 * index,
                                    }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 10px 25px -5px rgba(16, 185, 129, 0.2)",
                                    }}
                                    style={{
                                        x: !isMobile
                                            ? smoothMouseX.get() *
                                              (index % 2 === 0 ? 1 : -1)
                                            : 0,
                                        y: !isMobile
                                            ? smoothMouseY.get() *
                                              (index < 2 ? 1 : -1)
                                            : 0,
                                    }}
                                    data-cursor="button"
                                >
                                    <Card className="bg-zinc-800/50 border-zinc-700 hover:border-emerald-400 transition-all duration-300 backdrop-blur-sm overflow-hidden group">
                                        <CardContent className="p-6 text-center relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="flex justify-center mb-3">
                                                <div className="p-2 rounded-full bg-emerald-500/20 text-emerald-400">
                                                    {stat.icon}
                                                </div>
                                            </div>
                                            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                                                {stat.title}
                                            </h3>
                                            <p className="text-zinc-400 mt-2">
                                                {stat.subtitle}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 relative">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col items-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-center inline-flex items-center">
                            My{" "}
                            <span className="text-emerald-400 mx-2">
                                Skills
                            </span>
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mt-4 rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                        {/* Frontend Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, margin: "-100px" }}
                            style={{
                                x: !isMobile ? smoothMouseX.get() * -1 : 0,
                                y: !isMobile ? smoothMouseY.get() * -1 : 0,
                            }}
                        >
                            <div className="relative mb-10">
                                <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"></div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                    <span className="bg-gradient-to-r from-emerald-400 to-teal-500 p-2 rounded-md mr-3">
                                        <Code className="h-5 w-5 text-black" />
                                    </span>
                                    Frontend Development
                                </h3>
                            </div>

                            <div className="space-y-8">
                                {[
                                    { name: "React / Next.js", percentage: 95 },
                                    {
                                        name: "JavaScript / TypeScript",
                                        percentage: 90,
                                    },
                                    { name: "HTML5 / CSS3", percentage: 92 },
                                    { name: "Tailwind CSS", percentage: 88 },
                                    { name: "Framer Motion", percentage: 85 },
                                ].map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className="space-y-2 group"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5 }}
                                        data-cursor="link"
                                        data-cursor-text={`${skill.percentage}%`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-base font-medium group-hover:text-emerald-400 transition-colors">
                                                {skill.name}
                                            </h4>
                                            <span className="text-emerald-400 font-bold">
                                                {skill.percentage}%
                                            </span>
                                        </div>
                                        <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden relative">
                                            <motion.div
                                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: `${skill.percentage}%`,
                                                }}
                                                transition={{
                                                    duration: 1,
                                                    delay: 0.1 * index,
                                                    ease: "easeOut",
                                                }}
                                                viewport={{ once: true }}
                                            ></motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Backend Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, margin: "-100px" }}
                            style={{
                                x: !isMobile ? smoothMouseX.get() * 1 : 0,
                                y: !isMobile ? smoothMouseY.get() * 1 : 0,
                            }}
                        >
                            <div className="relative mb-10">
                                <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"></div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                    <span className="bg-gradient-to-r from-emerald-400 to-teal-500 p-2 rounded-md mr-3">
                                        <Server className="h-5 w-5 text-black" />
                                    </span>
                                    Backend Development
                                </h3>
                            </div>

                            <div className="space-y-8">
                                {[
                                    {
                                        name: "Node.js / Express",
                                        percentage: 92,
                                    },
                                    {
                                        name: "MongoDB / PostgreSQL",
                                        percentage: 88,
                                    },
                                    {
                                        name: "REST API / GraphQL",
                                        percentage: 85,
                                    },
                                    {
                                        name: "Firebase / Supabase",
                                        percentage: 80,
                                    },
                                    { name: "AWS / Vercel", percentage: 78 },
                                ].map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className="space-y-2 group"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5 }}
                                        data-cursor="link"
                                        data-cursor-text={`${skill.percentage}%`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-base font-medium group-hover:text-emerald-400 transition-colors">
                                                {skill.name}
                                            </h4>
                                            <span className="text-emerald-400 font-bold">
                                                {skill.percentage}%
                                            </span>
                                        </div>
                                        <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden relative">
                                            <motion.div
                                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: `${skill.percentage}%`,
                                                }}
                                                transition={{
                                                    duration: 1,
                                                    delay: 0.1 * index,
                                                    ease: "easeOut",
                                                }}
                                                viewport={{ once: true }}
                                            ></motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Tools & Technologies */}
                    <motion.div
                        className="mt-16 max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="relative mb-10">
                            <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"></div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 p-2 rounded-md mr-3">
                                    <Wrench className="h-5 w-5 text-black" />
                                </span>
                                Tools & Technologies
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {[
                                {
                                    name: "Git",
                                    icon: <Github className="h-8 w-8" />,
                                },
                                {
                                    name: "VS Code",
                                    icon: <Code className="h-8 w-8" />,
                                },
                                {
                                    name: "Figma",
                                    icon: <Figma className="h-8 w-8" />,
                                },
                                {
                                    name: "Docker",
                                    icon: <Box className="h-8 w-8" />,
                                },
                                {
                                    name: "Jest",
                                    icon: <TestTube className="h-8 w-8" />,
                                },
                                {
                                    name: "Webpack",
                                    icon: <Package className="h-8 w-8" />,
                                },
                                {
                                    name: "NPM",
                                    icon: <Package className="h-8 w-8" />,
                                },
                                {
                                    name: "Vercel",
                                    icon: <Triangle className="h-8 w-8" />,
                                },
                                {
                                    name: "GitHub",
                                    icon: <Github className="h-8 w-8" />,
                                },
                                {
                                    name: "Terminal",
                                    icon: <Terminal className="h-8 w-8" />,
                                },
                            ].map((tool, index) => (
                                <MagneticElement key={tool.name} strength={50}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.05,
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            y: -10,
                                            boxShadow:
                                                "0 10px 25px -5px rgba(16, 185, 129, 0.2)",
                                            scale: 1.05,
                                        }}
                                        className="flex flex-col items-center justify-center p-6 bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-zinc-700 hover:border-emerald-400 transition-all duration-300"
                                        data-cursor="button"
                                        data-cursor-text={tool.name}
                                    >
                                        <div className="text-emerald-400 mb-3">
                                            {tool.icon}
                                        </div>
                                        <p className="font-medium">
                                            {tool.name}
                                        </p>
                                    </motion.div>
                                </MagneticElement>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 relative">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col items-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-center inline-flex items-center">
                            Featured{" "}
                            <span className="text-emerald-400 mx-2">
                                Projects
                            </span>
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mt-4 rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((project, index) => (
                            <MagneticElement key={project} strength={20}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    whileHover={{
                                        y: -10,
                                        boxShadow:
                                            "0 20px 25px -5px rgba(16, 185, 129, 0.2)",
                                    }}
                                    className="h-full"
                                    data-cursor="project"
                                    data-cursor-text="View Project"
                                >
                                    <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden transition-all duration-500 h-full backdrop-blur-sm group">
                                        <div className="h-48 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                            <motion.img
                                                src={`/placeholder.svg?key=q29o5&height=300&width=500&query=web application project ${project}`}
                                                alt={`Project ${project}`}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                whileHover={{ scale: 1.05 }}
                                                data-cursor="image"
                                            />
                                        </div>
                                        <CardContent className="p-6 relative z-20">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">
                                                    Project Title {project}
                                                </h3>
                                                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black">
                                                    Web App
                                                </Badge>
                                            </div>
                                            <p className="text-zinc-400 mb-4">
                                                A comprehensive web application
                                                built with modern technologies
                                                to solve real-world problems.
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                <Badge
                                                    variant="outline"
                                                    className="border-zinc-600 group-hover:border-emerald-400 transition-colors"
                                                >
                                                    React
                                                </Badge>
                                                <Badge
                                                    variant="outline"
                                                    className="border-zinc-600 group-hover:border-emerald-400 transition-colors"
                                                >
                                                    Node.js
                                                </Badge>
                                                <Badge
                                                    variant="outline"
                                                    className="border-zinc-600 group-hover:border-emerald-400 transition-colors"
                                                >
                                                    MongoDB
                                                </Badge>
                                            </div>
                                            <div className="flex gap-4">
                                                <MagneticElement strength={80}>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="border-zinc-700 hover:border-emerald-400 transition-colors"
                                                        data-cursor="button"
                                                        data-cursor-text="View Code"
                                                    >
                                                        <Github className="mr-2 h-4 w-4" />{" "}
                                                        Code
                                                    </Button>
                                                </MagneticElement>
                                                <MagneticElement strength={80}>
                                                    <Button
                                                        size="sm"
                                                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black"
                                                        data-cursor="button"
                                                        data-cursor-text="Live Demo"
                                                    >
                                                        Live Demo{" "}
                                                        <ExternalLink className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </MagneticElement>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </MagneticElement>
                        ))}
                    </div>

                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <MagneticElement strength={60}>
                            <Button
                                variant="outline"
                                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition-all duration-300"
                                data-cursor="button"
                                data-cursor-text="All Projects"
                            >
                                View All Projects{" "}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </MagneticElement>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 relative">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col items-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-center inline-flex items-center">
                            Get In{" "}
                            <span className="text-emerald-400 mx-2">Touch</span>
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mt-4 rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <motion.div
                            className="md:col-span-2 space-y-8"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, margin: "-100px" }}
                            style={{
                                x: !isMobile ? smoothMouseX.get() * -1 : 0,
                                y: !isMobile ? smoothMouseY.get() * -1 : 0,
                            }}
                        >
                            <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-md p-8 rounded-2xl border border-zinc-700 shadow-xl">
                                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
                                    Let's Connect
                                </h3>
                                <p className="text-zinc-300 mb-8">
                                    Feel free to reach out for collaborations,
                                    opportunities, or just a friendly chat about
                                    technology and development.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        {
                                            icon: (
                                                <Mail className="h-5 w-5 text-emerald-400" />
                                            ),
                                            title: "Email",
                                            value: "contact@example.com",
                                            link: "mailto:contact@example.com",
                                            description:
                                                "Send me an email anytime!",
                                        },
                                        {
                                            icon: (
                                                <Linkedin className="h-5 w-5 text-emerald-400" />
                                            ),
                                            title: "LinkedIn",
                                            value: "linkedin.com/in/ali",
                                            link: "https://linkedin.com/in/ali",
                                            description:
                                                "Let's connect professionally",
                                        },
                                        {
                                            icon: (
                                                <Github className="h-5 w-5 text-emerald-400" />
                                            ),
                                            title: "GitHub",
                                            value: "github.com/ali",
                                            link: "https://github.com/ali",
                                            description:
                                                "Check out my code repositories",
                                        },
                                    ].map((contact, index) => (
                                        <MagneticElement
                                            key={index}
                                            strength={40}
                                        >
                                            <motion.a
                                                href={contact.link}
                                                className="flex gap-4 p-4 items-center rounded-xl hover:bg-zinc-800/50 transition-all duration-300 group"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: 0.1 * index,
                                                }}
                                                viewport={{ once: true }}
                                                whileHover={{ x: 5 }}
                                                data-cursor="link"
                                                data-cursor-text={contact.title}
                                            >
                                                <div>
                                                    <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 p-2 rounded-full group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300 flex items-center justify-center">
                                                        {contact.icon}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-baseline gap-2">
                                                        <p className="font-medium text-white">
                                                            {contact.title}
                                                        </p>
                                                        <div className="h-px w-8 bg-zinc-700"></div>
                                                    </div>
                                                    <p className="text-emerald-400 font-medium mt-1">
                                                        {contact.value}
                                                    </p>
                                                    <p className="text-sm text-zinc-400 mt-1">
                                                        {contact.description}
                                                    </p>
                                                </div>
                                            </motion.a>
                                        </MagneticElement>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-zinc-700/50">
                                    <h4 className="text-lg font-medium mb-4">
                                        Follow Me
                                    </h4>
                                    <div className="flex items-center gap-4">
                                        {[
                                            {
                                                icon: (
                                                    <Github className="h-5 w-5" />
                                                ),
                                                href: "https://github.com",
                                                label: "GitHub",
                                            },
                                            {
                                                icon: (
                                                    <Linkedin className="h-5 w-5" />
                                                ),
                                                href: "https://linkedin.com",
                                                label: "LinkedIn",
                                            },
                                            {
                                                icon: (
                                                    <Twitter className="h-5 w-5" />
                                                ),
                                                href: "https://twitter.com",
                                                label: "Twitter",
                                            },
                                            {
                                                icon: (
                                                    <Instagram className="h-5 w-5" />
                                                ),
                                                href: "https://instagram.com",
                                                label: "Instagram",
                                            },
                                        ].map((social, index) => (
                                            <MagneticElement
                                                key={index}
                                                strength={100}
                                            >
                                                <motion.a
                                                    href={social.href}
                                                    className="bg-zinc-800 py-3 rounded-full text-zinc-400 hover:text-emerald-400 hover:bg-zinc-700 transition-all duration-300"
                                                    whileHover={{
                                                        y: -5,
                                                        scale: 1.1,
                                                    }}
                                                    whileTap={{ scale: 0.9 }}
                                                    data-cursor="link"
                                                    data-cursor-text={
                                                        social.label
                                                    }
                                                >
                                                    {social.icon}
                                                </motion.a>
                                            </MagneticElement>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="md:col-span-3"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, margin: "-100px" }}
                            style={{
                                x: !isMobile ? smoothMouseX.get() * 1 : 0,
                                y: !isMobile ? smoothMouseY.get() * 1 : 0,
                            }}
                        >
                            <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-md p-8 rounded-2xl border border-zinc-700 shadow-xl relative overflow-hidden">
                                {/* Decorative elements */}
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>

                                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500 relative z-10">
                                    Send Me a Message
                                </h3>

                                <form className="space-y-6 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="relative group">
                                            <input
                                                id="name"
                                                type="text"
                                                className="w-full bg-zinc-900/50 border-2 border-zinc-700 rounded-lg px-5 py-4 outline-none focus:border-emerald-400 transition-all duration-300 peer pt-7"
                                                placeholder=" "
                                                required
                                                data-cursor="text"
                                            />
                                            <label
                                                htmlFor="name"
                                                className="absolute text-zinc-400 left-5 top-5 cursor-text transition-all duration-300 peer-focus:text-xs peer-focus:text-emerald-400 peer-focus:top-2 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base"
                                            >
                                                Your Name
                                            </label>
                                        </div>

                                        <div className="relative group">
                                            <input
                                                id="email"
                                                type="email"
                                                className="w-full bg-zinc-900/50 border-2 border-zinc-700 rounded-lg px-5 py-4 outline-none focus:border-emerald-400 transition-all duration-300 peer pt-7"
                                                placeholder=" "
                                                required
                                                data-cursor="text"
                                            />
                                            <label
                                                htmlFor="email"
                                                className="absolute text-zinc-400 left-5 top-5 cursor-text transition-all duration-300 peer-focus:text-xs peer-focus:text-emerald-400 peer-focus:top-2 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base"
                                            >
                                                Your Email
                                            </label>
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <input
                                            id="subject"
                                            type="text"
                                            className="w-full bg-zinc-900/50 border-2 border-zinc-700 rounded-lg px-5 py-4 outline-none focus:border-emerald-400 transition-all duration-300 peer pt-7"
                                            placeholder=" "
                                            required
                                            data-cursor="text"
                                        />
                                        <label
                                            htmlFor="subject"
                                            className="absolute text-zinc-400 left-5 top-5 cursor-text transition-all duration-300 peer-focus:text-xs peer-focus:text-emerald-400 peer-focus:top-2 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base"
                                        >
                                            Subject
                                        </label>
                                    </div>

                                    <div className="relative group">
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="w-full bg-zinc-900/50 border-2 border-zinc-700 rounded-lg px-5 py-4 outline-none focus:border-emerald-400 transition-all duration-300 peer pt-7 resize-none"
                                            placeholder=" "
                                            required
                                            data-cursor="text"
                                        ></textarea>
                                        <label
                                            htmlFor="message"
                                            className="absolute text-zinc-400 left-5 top-5 cursor-text transition-all duration-300 peer-focus:text-xs peer-focus:text-emerald-400 peer-focus:top-2 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base"
                                        >
                                            Your Message
                                        </label>
                                    </div>

                                    <MagneticElement strength={80}>
                                        <Button
                                            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black shadow-lg shadow-emerald-500/20 py-6 text-lg font-medium"
                                            data-cursor="button"
                                            data-cursor-text="Send Message"
                                        >
                                            Send Message{" "}
                                            <Send className="ml-2 h-5 w-5" />
                                        </Button>
                                    </MagneticElement>
                                </form>

                                <div className="mt-6 text-center text-zinc-400 text-sm relative z-10">
                                    I'll respond to your message as soon as
                                    possible!
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
