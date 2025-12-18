import AboutSection from "@/components/main-page/about-section";
import BlogSection from "@/components/main-page/blog-section";
import ContactSection from "@/components/main-page/contact-section";
import HomeSection from "@/components/main-page/hero-section";
import ProjectsSection from "@/components/main-page/projects-section";
import SkillsSection from "@/components/main-page/skills-section";
import { getAboutMe } from "@/service/about-me";
import { getPosts } from "@/service/post";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ali - Full Stack Developer | Portfolio",
    description:
        "Personal portfolio of Ali, a dedicated Full-Stack Developer on a journey of continuous learning and growth.",
};

export default async function HomePage() {
    // Fetch latest 3 blog posts for the blog section
    const { posts: latestPosts } = await getPosts({ limit: 3 });

    // Fetch about-me data for resume URL
    const aboutMe = await getAboutMe();

    return (
        <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
            {/* Hero Section */}
            <HomeSection resumeUrl={aboutMe?.resume} />

            {/* About Section */}
            <AboutSection />

            {/* Skills Section */}
            <SkillsSection />
            {/* Projects Section */}
            <ProjectsSection />
            {/* Blog Sections */}
            <BlogSection posts={latestPosts} />
            {/* Contact Section */}
            <ContactSection />
        </div>
    );
}
