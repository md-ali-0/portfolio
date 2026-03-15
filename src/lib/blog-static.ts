import { blogPosts } from "@/data/blog-data";
import { defaultPostsMeta, PostsMeta } from "@/lib/blog";
import { Category } from "@/types/Category";
import { Post } from "@/types/Posts";

function toSlug(value: string) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

const staticCategories: Category[] = Array.from(
    new Map(
        blogPosts.map((post) => {
            const slug = toSlug(post.category);
            const now = new Date(post.date);

            return [
                slug,
                {
                    id: `static-category-${slug}`,
                    name: post.category,
                    slug,
                    createdAt: now,
                    updatedAt: now,
                },
            ] as const;
        })
    ).values()
);

const staticPosts: Post[] = blogPosts.map((post, index) => {
    const category = staticCategories.find((item) => item.name === post.category) ?? null;
    const timestamp = new Date(post.date).toISOString();

    return {
        id: `static-post-${index + 1}`,
        title: post.title,
        slug: post.slug,
        content: post.content,
        excerpt: post.excerpt,
        featuredImage: post.coverImage,
        published: true,
        authorId: "static-author-ali",
        categoryId: category?.id ?? `static-category-${toSlug(post.category)}`,
        tags: post.tags,
        commentsCount: post.comments,
        viewCount: post.likes * 10,
        shareCount: Math.max(1, Math.floor(post.likes / 4)),
        createdAt: timestamp,
        updatedAt: timestamp,
        deletedAt: null,
        category,
        author: {
            id: "static-author-ali",
            name: post.author.name,
            email: "ali@example.com",
            avatar: post.author.avatar,
            title: post.author.title,
        },
    };
});

export function getStaticBlogCategories() {
    return staticCategories;
}

export function getStaticBlogPosts(limit?: number) {
    return typeof limit === "number" ? staticPosts.slice(0, limit) : staticPosts;
}

export function getStaticBlogPostBySlug(slug: string) {
    return staticPosts.find((post) => post.slug === slug) ?? null;
}

export function getStaticBlogPageData(limit?: number): { posts: Post[]; meta: PostsMeta } {
    const posts = getStaticBlogPosts(limit);
    const total = staticPosts.length;

    return {
        posts,
        meta: {
            ...defaultPostsMeta,
            limit: limit ?? posts.length,
            total,
        },
    };
}
