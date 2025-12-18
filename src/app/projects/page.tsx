import Breadcrumb from "@/components/breadcrumb";
import CTASection from "@/components/projects/cta-section";
import ProjectsList from "@/components/projects/projects-list";
import TechnologySection from "@/components/projects/technology-section";
import { baseMetadata } from "@/lib/metadata";
import { getProjects } from "@/service/project";
import type { Metadata } from "next";

// Generate metadata for SEO
export const metadata: Metadata = {
    ...baseMetadata,
    title: "Projects | Ali - Full Stack Developer",
    description:
        "Explore my portfolio of web development projects, including websites, web applications, and mobile apps.",
    openGraph: {
        ...baseMetadata.openGraph,
        title: "Projects | Ali - Full Stack Developer",
        description:
            "Explore my portfolio of web development projects, including websites, web applications, and mobile apps.",
        url: "https://md-ali.vercel.app/projects",
    },
    twitter: {
        ...baseMetadata.twitter,
        title: "Projects | Ali - Full Stack Developer",
        description:
            "Explore my portfolio of web development projects, including websites, web applications, and mobile apps.",
    },
};

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const resolvedParams = await searchParams;
    const currentPage = Number(resolvedParams.page) || 1;
    const itemsPerPage = 10;

    // Fetch all projects to get total count
    const allProjects = await getProjects();
    const totalPages = Math.ceil(allProjects.length / itemsPerPage);

    // Get projects for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProjects = allProjects.slice(startIndex, endIndex);

    // Get all unique technologies from all projects
    const allTechnologies = Array.from(
        new Set(allProjects.flatMap((project) => project.technologies))
    ).slice(0, 15);

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb
                title="Projects"
                description="Explore my portfolio of web development projects, including websites, web applications, and mobile apps."
            />

            {/* Projects Filter Section */}
            <section className="relative py-16 bg-gradient-to-b from-zinc-900/40 to-zinc-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <ProjectsList projects={paginatedProjects} currentPage={currentPage} totalPages={totalPages} />
                </div>
            </section>

            {/* Technology Cloud */}
            <TechnologySection technologies={allTechnologies} />

            {/* CTA Section */}
            <CTASection />
        </>
    );
}
