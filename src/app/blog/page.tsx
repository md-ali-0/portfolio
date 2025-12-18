import BlogList from "@/components/blog/blog-list";
import BlogPageSidebar from "@/components/blog/blog-page-sidebar";
import Breadcrumb from "@/components/breadcrumb";
import { baseMetadata } from "@/lib/metadata";
import { getCategories } from "@/service/category";
import { getPosts } from "@/service/post";
import type { Metadata } from "next";

export const metadata: Metadata = {
    ...baseMetadata,
    title: "Blog | Ali - Full Stack Developer",
    description:
        "Explore my thoughts, tutorials, and insights on web development, design, and technology.",
    openGraph: {
        ...baseMetadata.openGraph,
        title: "Blog | Ali - Full Stack Developer",
        description:
            "Explore my thoughts, tutorials, and insights on web development, design, and technology.",
        url: "https://md-ali.vercel.app/blog",
    },
    twitter: {
        ...baseMetadata.twitter,
        title: "Blog | Ali - Full Stack Developer",
        description:
            "Explore my thoughts, tutorials, and insights on web development, design, and technology.",
    },
};

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const resolvedParams = await searchParams;
    const currentPage = Number(resolvedParams.page) || 1;
    const itemsPerPage = 10;

    // Fetch posts with pagination from backend
    const { posts, meta } = await getPosts({
        page: currentPage,
        limit: itemsPerPage,
    });

    // Fetch categories
    const categories = await getCategories();

    // Get latest posts for sidebar (first 5)
    const { posts: latestPosts } = await getPosts({ limit: 5 });

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb
                title="Blog"
                description="Explore my thoughts, tutorials, and insights on web development, design, and technology."
            />

            {/* Blog Posts Section */}
            <section className="relative py-16 bg-gradient-to-b from-zinc-900/40 to-zinc-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            <BlogList posts={posts} currentPage={meta.page} totalPages={meta.totalPage} />
                        </div>

                        {/* Sidebar */}
                        <BlogPageSidebar
                            categories={categories}
                            popularPosts={latestPosts}
                            recentPosts={latestPosts}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
