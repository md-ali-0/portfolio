import ProjectContent from "@/components/project-detail/project-content";
import ProjectCTA from "@/components/project-detail/project-cta";
import ProjectHero from "@/components/project-detail/project-hero";
import ProjectSidebar from "@/components/project-detail/project-sidebar";
import { baseMetadata } from "@/lib/metadata";
import { getProjectBySlug, getProjects } from "@/service/project";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Generate static params for all projects
export async function generateStaticParams() {
    const projects = await getProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Generate metadata for each project with SEO optimization
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const project = await getProjectBySlug(resolvedParams.slug);

    if (!project) {
        return {
            ...baseMetadata,
            title: "Project Not Found",
        };
    }

    // Extract plain text from HTML content for description
    const plainTextContent = project.content.replace(/<[^>]*>/g, "").substring(0, 160);

    return {
        title: `${project.title} | ${project.metaTitle || "Ali - Full Stack Developer"}`,
        description: project.metaDesc || plainTextContent,
        keywords: project.metaKey || project.technologies.join(", "),
        authors: [{ name: "Ali" }],
        openGraph: {
            title: project.metaTitle || project.title,
            description: project.metaDesc || plainTextContent,
            url: `https://md-ali.vercel.app/projects/${project.slug}`,
            siteName: "Ali - Full Stack Developer",
            images: [
                {
                    url: project.thumbnail || "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
            locale: "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: project.metaTitle || project.title,
            description: project.metaDesc || plainTextContent,
            images: [project.thumbnail || "/og-image.png"],
        },
        alternates: {
            canonical: `https://md-ali.vercel.app/projects/${project.slug}`,
        },
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const project = await getProjectBySlug(resolvedParams.slug);

    if (!project) {
        notFound();
    }

    // Get related projects (you might want to add a category field or use technologies for matching)
    const allProjects = await getProjects({ limit: 10 });
    const relatedProjects = allProjects
        .filter((p) => p.id !== project.id && p.technologies.some((tech) => project.technologies.includes(tech)))
        .slice(0, 3);

    // Generate JSON-LD structured data for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.content.replace(/<[^>]*>/g, "").substring(0, 200),
        url: project.liveUrl || `https://md-ali.vercel.app/projects/${project.slug}`,
        author: {
            "@type": "Person",
            name: "Ali",
            url: "https://md-ali.vercel.app",
        },
        datePublished: project.StartDate,
        dateModified: project.updatedAt,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
    };

    return (
        <>
            {/* JSON-LD structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />

            {/* Hero Section */}
            <ProjectHero project={project} />

            {/* Featured Image */}
            <section className="relative mb-12">
                <div className="container mx-auto">
                    <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/10">
                        <img
                            src={project.thumbnail || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-auto"
                            width={1200}
                            height={675}
                            data-cursor="image"
                        />
                    </div>
                </div>
            </section>

            {/* Project Content */}
            <section className="relative pb-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
                        {/* Main Content */}
                        <ProjectContent project={project} />

                        {/* Sidebar */}
                        <ProjectSidebar project={project} relatedProjects={relatedProjects} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <ProjectCTA />
        </>
    );
}