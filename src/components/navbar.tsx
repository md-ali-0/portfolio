"use client";

import { useMobile } from "@/hooks/use-mobile";
import {
    motion,
    useMotionValue,
    useScroll,
    useTransform
} from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AnimatedButton from "./animated-button";
import CursorAlternative from "./cursor-alternative";
import DarkPatternBackground from "./dark-pattern-background";
import MagneticElement from "./magnetic-element";
import RippleEffect from "./ripple-effect";

export default function Navbar() {
    const isMobile = useMobile();
    const { scrollY } = useScroll();
    const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);
    const headerBlur = useTransform(scrollY, [0, 100], [0, 8]);

    const [activeSection, setActiveSection] = useState("home");

    // Mouse position for parallax effects
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);


    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            const sections = [
                { id: "home", ref: homeRef },
                { id: "about", ref: aboutRef },
                { id: "skills", ref: skillsRef },
                { id: "projects", ref: projectsRef },
                { id: "contact", ref: contactRef },
            ];

            for (const section of sections) {
                if (!section.ref.current) continue;

                const offsetTop = section.ref.current.offsetTop;
                const offsetHeight = section.ref.current.offsetHeight;

                if (
                    scrollPosition >= offsetTop &&
                    scrollPosition < offsetTop + offsetHeight
                ) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        // Track mouse position for parallax effects with throttling for better performance
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
            // Get mouse position relative to window center
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Calculate normalized values (-1 to 1)
            const normalizedX = (clientX - centerX) / centerX;
            const normalizedY = (clientY - centerY) / centerY;

            mouseX.set(normalizedX * 10); // Reduced multiplier for lighter effect
            mouseY.set(normalizedY * 10);
        }, 20); // 20ms throttle for better performance

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {!isMobile && <CursorAlternative />}
            {!isMobile && <RippleEffect />}
            <DarkPatternBackground />
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 backdrop-blur transition-all duration-300"
                style={{
                    opacity: headerOpacity,
                    backdropFilter: `blur(${headerBlur}px)`,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
            >
                <div className="container mx-auto py-4">
                    <nav className="flex justify-between items-center">
                        <MagneticElement strength={50}>
                            <Link
                                href="/"
                                className="text-xl font-bold relative group"
                                data-cursor="link"
                                data-cursor-text="Home"
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
                                    Ali<span className="text-white">.</span>
                                </span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </MagneticElement>
                        <div className="hidden md:flex gap-8 items-center">
                            {[
                                { name: "Home", href: "#home", id: "home" },
                                { name: "About", href: "#about", id: "about" },
                                {
                                    name: "Skills",
                                    href: "#skills",
                                    id: "skills",
                                },
                                {
                                    name: "Projects",
                                    href: "#projects",
                                    id: "projects",
                                },
                                {
                                    name: "Contact",
                                    href: "#contact",
                                    id: "contact",
                                },
                            ].map((item) => (
                                <MagneticElement key={item.name} strength={40}>
                                    <Link
                                        href={item.href}
                                        className={`relative group ${
                                            activeSection === item.id
                                                ? "text-emerald-400"
                                                : "text-white"
                                        }`}
                                        data-cursor="link"
                                        data-cursor-text={item.name}
                                    >
                                        {item.name}
                                        <span
                                            className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-400 transition-all duration-300 ${
                                                activeSection === item.id
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                            }`}
                                        ></span>
                                    </Link>
                                </MagneticElement>
                            ))}
                        </div>
                        <MagneticElement strength={60}>
                            <AnimatedButton
                                variant="outline"
                                className="text-emerald-400 hover:text-emerald-300 transition-all duration-300"
                                dataCursorText="Download CV"
                            >
                                <Download className="mr-2 h-4 w-4" /> Resume
                            </AnimatedButton>
                        </MagneticElement>
                    </nav>
                </div>
            </motion.header>
        </>
    );
}
