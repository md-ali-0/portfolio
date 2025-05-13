import type { Metadata } from "next"
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
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      ...baseMetadata,
      title: "Project Not Found",
    }
  }

  return generateProjectMetadata(project)
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectPageClient params={params} />
}
