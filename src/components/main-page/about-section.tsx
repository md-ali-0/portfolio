"use client";

import AnimatedButton from "@/components/animated-button";
import MagneticElement from "@/components/magnetic-element";
import { Card, CardContent } from "@/components/ui/card";
import { useMobile } from "@/hooks/use-mobile";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Briefcase, Code, Layers, User } from "lucide-react";

export default function AboutSection() {
    const isMobile = useMobile();

    // Mouse position for parallax effects
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smoothed mouse values for parallax
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    return (
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
                        About <span className="text-emerald-400 mx-2">Me</span>
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
                            I'm a passionate Full-Stack Developer with expertise
                            in building responsive and performant web
                            applications. My journey in web development started
                            with a curiosity about how websites work, and it has
                            evolved into a professional career where I
                            continuously learn and apply new technologies.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            I specialize in both frontend and backend
                            development, creating seamless user experiences
                            while ensuring robust server-side functionality. My
                            approach combines technical expertise with creative
                            problem-solving to deliver solutions that exceed
                            expectations.
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
    );
}
