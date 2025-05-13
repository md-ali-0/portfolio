import type { MetadataRoute } from "next"
import { blogPosts } from "@/data/blog-data"
import { projects } from "@/data/projects-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://md-ali.vercel.app"

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // Blog posts
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Projects
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.completedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...routes, ...blogRoutes, ...projectRoutes]
}
