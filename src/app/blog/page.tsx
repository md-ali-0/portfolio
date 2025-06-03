import type { Metadata } from "next"
import { baseMetadata } from "@/lib/metadata"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Blog | Ali - Full Stack Developer",
  description: "Explore my thoughts, tutorials, and insights on web development, design, and technology.",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Blog | Ali - Full Stack Developer",
    description: "Explore my thoughts, tutorials, and insights on web development, design, and technology.",
    url: "https://md-ali.vercel.app/blog",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Blog | Ali - Full Stack Developer",
    description: "Explore my thoughts, tutorials, and insights on web development, design, and technology.",
  },
}

export default function BlogPage() {
  return <BlogClientPage />
}
