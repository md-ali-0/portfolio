import Breadcrumb from "@/components/breadcrumb";
import AboutSection from "@/components/main-page/about-section";
import { baseMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
    ...baseMetadata,
    title: "About Me | Ali - Full Stack Developer",
    description:
        "Learn more about Ali, a dedicated Full-Stack Developer with experience in building modern web applications.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
            <Breadcrumb 
                title="About Me" 
                description="Learn more about my background, experience, and the journey that shaped me as a developer" 
            />
            <AboutSection />
        </div>
    );
}