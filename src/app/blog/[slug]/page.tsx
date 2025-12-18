import BlogContent from "@/components/blog/blog-content";
import BlogSidebar from "@/components/blog/blog-sidebar";
import { baseMetadata } from "@/lib/metadata";
import { getPostBySlug, getPosts } from "@/service/post";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Generate static params for all posts
export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for each post with SEO optimization
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug);

    if (!post) {
        return {
            ...baseMetadata,
            title: "Post Not Found",
        };
    }

    // Extract plain text from HTML content for description
    const plainTextContent = post.content.replace(/<[^>]*>/g, "").substring(0, 160);
    const description = post.excerpt || plainTextContent;

    return {
        title: `${post.title} | Ali - Full Stack Developer`,
        description: description,
        keywords: post.tags.join(", "),
        authors: [{ name: post.author.name }],
        openGraph: {
            title: post.title,
            description: description,
            url: `https://md-ali.vercel.app/blog/${post.slug}`,
            siteName: "Ali - Full Stack Developer",
            images: post.featuredImage
                ? [
                      {
                          url: post.featuredImage,
                          width: 1200,
                          height: 630,
                          alt: post.title,
                      },
                  ]
                : [],
            locale: "en_US",
            type: "article",
            publishedTime: post.createdAt,
            modifiedTime: post.updatedAt,
            authors: [post.author.name],
            tags: post.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: description,
            images: post.featuredImage ? [post.featuredImage] : [],
        },
        alternates: {
            canonical: `https://md-ali.vercel.app/blog/${post.slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    // Get related posts (same category)
    const allPosts = await getPosts();
    const relatedPosts = allPosts
        .filter((p) => p.id !== post.id && p.categoryId === post.categoryId)
        .slice(0, 3);

    // Generate JSON-LD structured data for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt || post.content.replace(/<[^>]*>/g, "").substring(0, 200),
        image: post.featuredImage || "",
        datePublished: post.createdAt,
        dateModified: post.updatedAt,
        author: {
            "@type": "Person",
            name: post.author.name,
            email: post.author.email,
        },
        publisher: {
            "@type": "Person",
            name: "Ali",
            url: "https://md-ali.vercel.app",
        },
        keywords: post.tags.join(", "),
        articleSection: post.category?.name || "Technology",
        wordCount: post.content.replace(/<[^>]*>/g, "").split(/\s+/).length,
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

            {/* Featured Image */}
            {post.featuredImage && (
                <section className="relative mb-12">
                    <div className="container mx-auto">
                        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/10">
                            <img
                                src={post.featuredImage}
                                alt={post.title}
                                className="w-full h-auto"
                                width={1200}
                                height={675}
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Post Content */}
            <section className="relative pb-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
                        {/* Main Content */}
                        <BlogContent post={post} />

                        {/* Sidebar */}
                        <BlogSidebar post={post} relatedPosts={relatedPosts} />
                    </div>
                </div>
            </section>
        </>
    );
}