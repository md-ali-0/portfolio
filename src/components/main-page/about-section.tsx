"use client";

import { ProfessionalTimelineSection } from "@/components/about-sections";
import ServicesSection from "@/components/about-sections/services-section";
import StatisticsSection from "@/components/about-sections/statistics-section";
import { useMobile } from "@/hooks/use-mobile";
import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function AboutSection() {
    const isMobile = useMobile();

    // Mouse position for parallax effects - matching hero section
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth - 0.5) * 20;
            const y = (clientY / innerHeight - 0.5) * 20;
            mouseX.set(x);
            mouseY.set(y);
        };

        if (!isMobile) {
            window.addEventListener("mousemove", handleMouseMove);
            return () =>
                window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [isMobile, mouseX, mouseY]);

    return (
        <section
            id="about"
            className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
        >
            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
                <StatisticsSection />

                <div className="text-center mb-16 sm:mb-20 md:mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/tight font-bold text-slate-400 leading-loose mb-4 sm:mb-6">
                        Creating{" "}
                        <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent relative">
                            scalable web applications
                            <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500" />
                        </span>
                        <br className="hidden sm:block" />
                        <span className="block sm:inline">
                            {" "}
                            with modern technologies
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed px-2">
                        Passionate about building seamless user experiences and
                        robust backend solutions that drive business growth and
                        user satisfaction.
                    </p>
                </div>

                <ServicesSection />
            </div>
            <ProfessionalTimelineSection />
        </section>
    );
}
