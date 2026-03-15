export interface BlogComment {
    id: string;
    postId: string;
    name: string;
    email: string;
    picture?: string | null;
    content: string;
    isApproved: boolean;
    approvedBy?: string | null;
    approvedAt?: string | null;
    parentId?: string | null;
    createdAt: string;
    updatedAt: string;
    replies: BlogComment[];
}

export interface CreateCommentPayload {
    name: string;
    email: string;
    content: string;
    picture?: string;
    parentId?: string;
}
