import { getProjects } from "@/service/project";
import SectionHeader from "../section-header";
import ProjectCard from "./project-card";

export default async function ProjectsSection() {

    const projects = await getProjects({limit: 5});

    return (
        <section
            id="projects"
            className="min-h-screen relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: "30px 30px",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    title="Creative"
                    highlight="Showcase"
                    description="Explore my portfolio of web development projects with modern design and clean aesthetics."
                />

                {/* Projects List with Reduced Animations */}
                <div className="space-y-8 mt-12">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            index={index} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
