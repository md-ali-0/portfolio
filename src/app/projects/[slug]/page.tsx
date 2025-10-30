import { projects } from "@/data/projects-data"
import { baseMetadata, generateProjectMetadata } from "@/lib/metadata"
import ProjectPageClient from "./ProjectPageClient"

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    return {
      ...baseMetadata,
      title: "Project Not Found",
    }
  }

  return generateProjectMetadata(project)
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <ProjectPageClient params={resolvedParams} />
}