"use client";

import AboutSection from "@/components/main-page/about-section";
import ContactSection from "@/components/main-page/contact-section";
import HomeSection from "@/components/main-page/hero-section";
import ProjectsSection from "@/components/main-page/projects-section";
import SkillsSection from "@/components/main-page/skills-section";
import { useMobile } from "@/hooks/use-mobile";
import { useMotionValue, useSpring } from "framer-motion";

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
           <HomeSection/>

            {/* About Section */}
            <AboutSection/>

            {/* Skills Section */}
            <SkillsSection/>
            {/* Projects Section */}
            <ProjectsSection/>

            {/* Contact Section */}
            <ContactSection/>
        </div>
    );
}
