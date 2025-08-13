import { blogPosts } from "@/data/blog-data"
import { baseMetadata, generateBlogMetadata } from "@/lib/metadata"
import type { Metadata } from "next"
import BlogPostClient from "./BlogPostClient"

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      ...baseMetadata,
      title: "Post Not Found",
    }
  }

  return generateBlogMetadata(post)
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  console.log(params);
  
  return <BlogPostClient params={params} />
}
