import type { Metadata } from "next"
import { baseMetadata } from "@/lib/metadata"
import ProjectsPageClient from "./ProjectsPageClient"

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
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
