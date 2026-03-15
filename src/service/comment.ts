import { BlogComment, CreateCommentPayload } from "@/types/Comment";

export async function getCommentsByPost(postId: string): Promise<BlogComment[]> {
    try {
        const response = await fetch(`/api/comments/${postId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch comments: ${response.statusText}`);
        }

        const result = await response.json();
        return result?.data || [];
    } catch (error) {
        console.error("Error fetching comments:", error);
        return [];
    }
}

export async function createComment(postId: string, payload: CreateCommentPayload) {
    const response = await fetch(`/api/comments/${postId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result?.message || "Failed to submit comment");
    }

    return result;
}
