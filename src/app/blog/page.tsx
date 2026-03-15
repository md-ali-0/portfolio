import BlogList from "@/components/blog/blog-list";
import BlogPageSidebar from "@/components/blog/blog-page-sidebar";
import Breadcrumb from "@/components/breadcrumb";
import { resolveCategoryId } from "@/lib/blog";
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

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string; searchTerm?: string; category?: string }>;
}) {
    const resolvedParams = await searchParams;
    const currentPage = Number(resolvedParams.page) || 1;
    const itemsPerPage = 10;
    const searchTerm = resolvedParams.searchTerm?.trim() || undefined;
    const selectedCategory = resolvedParams.category?.trim() || undefined;

    const categories = await getCategories();
    const categoryId = resolveCategoryId(selectedCategory, categories);

    const { posts, meta } = await getPosts({
        page: currentPage,
        limit: itemsPerPage,
        searchTerm,
        category: categoryId,
    });

    const { posts: latestPosts } = await getPosts({ limit: 5 });
    const popularPosts = [...latestPosts].sort((left, right) => right.viewCount - left.viewCount);

    return (
        <>
            <Breadcrumb
                title="Blog"
                description="Explore my thoughts, tutorials, and insights on web development, design, and technology."
            />

            <section className="relative py-16 bg-gradient-to-b from-zinc-900/40 to-zinc-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
                        <div className="lg:col-span-8">
                            <BlogList posts={posts} currentPage={meta.page} totalPages={meta.totalPage} />
                        </div>

                        <BlogPageSidebar
                            categories={categories}
                            popularPosts={popularPosts}
                            recentPosts={latestPosts}
                            initialSearchTerm={searchTerm ?? ""}
                            selectedCategory={selectedCategory ?? ""}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
