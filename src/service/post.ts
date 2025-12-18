import config from "@/config";
import { Post } from "@/types/Posts";

interface GetPostsParams {
    page?: number;
    limit?: number;
    searchTerm?: string;
    category?: string;
}

interface PostsResponse {
    posts: Post[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPage: number;
    };
}

export const getPosts = async (params?: GetPostsParams): Promise<PostsResponse> => {
    try {
        const queryParams = new URLSearchParams();
        
        if (params?.page) queryParams.append("page", params.page.toString());
        if (params?.limit) queryParams.append("limit", params.limit.toString());
        if (params?.searchTerm) queryParams.append("search", params.searchTerm);
        if (params?.category) queryParams.append("category", params.category);

        const url = `${config.host}/api/v1/post${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
        
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "force-cache",
            next: {
                revalidate: 60 * 60,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch posts: ${response.statusText}`);
        }

        const data = await response.json();

        return {
            posts: data?.data || [],
            meta: data?.meta || {
                page: 1,
                limit: 10,
                total: 0,
                totalPage: 1,
            },
        };
    } catch (error) {
        console.error("Error fetching posts:", error);
        return {
            posts: [],
            meta: {
                page: 1,
                limit: 10,
                total: 0,
                totalPage: 1,
            },
        };
    }
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
    try {
        const url = `${config.host}/api/v1/post/${slug}`;
        
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });

        if (!response.ok) {
            if (response.status === 404) {
                return null;
            }
            throw new Error(`Failed to fetch post: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching post with slug ${slug}:`, error);
        return null;
    }
};

export const getAllPostSlugs = async (): Promise<string[]> => {
    try {
        const { posts } = await getPosts();
        return posts.map((post) => post.slug);
    } catch (error) {
        console.error("Error fetching post slugs:", error);
        return [];
    }
};
