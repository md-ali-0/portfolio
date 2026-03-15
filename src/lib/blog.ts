import { Category } from "@/types/Category";
import { Author, Post } from "@/types/Posts";

const DEFAULT_POSTS_META = {
    page: 1,
    limit: 10,
    total: 0,
    totalPage: 1,
};

export type PostsMeta = typeof DEFAULT_POSTS_META;

export const defaultPostsMeta = DEFAULT_POSTS_META;

export function calculateReadTime(content: string) {
    const plainText = content.replace(/<[^>]*>/g, " ").trim();

    if (!plainText) {
        return 1;
    }

    return Math.max(1, Math.ceil(plainText.split(/\s+/).length / 200));
}

export function getCategoryName(post: Pick<Post, "category">) {
    if (!post.category) {
        return "Uncategorized";
    }

    return typeof post.category === "string" ? post.category : post.category.name;
}

export function getAuthorAvatar(author?: Partial<Author> | null) {
    if (!author?.name) {
        return "/placeholder.svg?height=40&width=40&query=author avatar";
    }

    return author.avatar
        ? author.avatar
        : `https://ui-avatars.com/api/?name=${encodeURIComponent(author.name)}&background=10b981&color=fff`;
}

export function resolveCategoryId(categoryQuery: string | undefined, categories: Category[]) {
    if (!categoryQuery) {
        return undefined;
    }

    const normalizedQuery = categoryQuery.trim().toLowerCase();
    const matchedCategory = categories.find((category) => {
        return (
            category.id.toLowerCase() === normalizedQuery ||
            category.slug.toLowerCase() === normalizedQuery ||
            category.name.toLowerCase() === normalizedQuery
        );
    });

    return matchedCategory?.id;
}
