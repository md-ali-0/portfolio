import AboutSection from "@/components/main-page/about-section";
import ContactSection from "@/components/main-page/contact-section";
import HomeSection from "@/components/main-page/hero-section";
import ProjectsSection from "@/components/main-page/projects-section";
import SkillsSection from "@/components/main-page/skills-section";
import { baseMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
    ...baseMetadata,
    title: "Ali - Full Stack Developer",
    description:
        "Personal portfolio of Ali, a dedicated Full-Stack Developer on a journey of continuous learning and growth.",
};

export default function HomePage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
            {/* Hero Section */}
            <HomeSection />

            {/* About Section */}
            <AboutSection />

            {/* Skills Section */}
            <SkillsSection />
            {/* Projects Section */}
            <ProjectsSection />

            {/* Contact Section */}
            <ContactSection />
        </div>
    );
}
