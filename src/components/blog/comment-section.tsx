"use client";

import { createComment, getCommentsByPost } from "@/service/comment";
import { BlogComment, CreateCommentPayload } from "@/types/Comment";
import { MessageCircle, Reply, Send } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

type CommentSectionProps = {
    postId: string;
};

type CommentFormState = {
    name: string;
    email: string;
    content: string;
};

const initialFormState: CommentFormState = {
    name: "",
    email: "",
    content: "",
};

function countComments(comments: BlogComment[]): number {
    return comments.reduce((total, comment) => total + 1 + countComments(comment.replies || []), 0);
}

function CommentForm({
    onSubmit,
    isSubmitting,
    submitLabel,
}: {
    onSubmit: (payload: CommentFormState) => Promise<void>;
    isSubmitting: boolean;
    submitLabel: string;
}) {
    const [form, setForm] = useState<CommentFormState>(initialFormState);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await onSubmit(form);
        setForm(initialFormState);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <input
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
                    required
                />
                <input
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                    placeholder="Your email"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
                    required
                />
            </div>
            <textarea
                value={form.content}
                onChange={(event) => setForm((current) => ({ ...current, content: event.target.value }))}
                placeholder="Write your comment..."
                className="min-h-[120px] w-full rounded-lg border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
                minLength={10}
                maxLength={1000}
                required
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Submitting..." : submitLabel}
            </button>
        </form>
    );
}

function CommentItem({
    comment,
    onReplySubmit,
    replyingTo,
    setReplyingTo,
    isSubmitting,
}: {
    comment: BlogComment;
    onReplySubmit: (parentId: string, payload: CommentFormState) => Promise<void>;
    replyingTo: string | null;
    setReplyingTo: (value: string | null) => void;
    isSubmitting: boolean;
}) {
    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
            <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-semibold text-emerald-300">
                    {comment.name.slice(0, 1).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-white">{comment.name}</span>
                        <span className="text-xs text-zinc-500">
                            {new Date(comment.createdAt).toLocaleString()}
                        </span>
                    </div>
                    <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-zinc-300">{comment.content}</p>
                    <button
                        type="button"
                        onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                        className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-400 transition hover:text-emerald-300"
                    >
                        <Reply className="h-4 w-4" />
                        Reply
                    </button>
                </div>
            </div>

            {replyingTo === comment.id && (
                <div className="mt-5 border-l border-zinc-700 pl-4">
                    <CommentForm
                        submitLabel="Submit Reply"
                        isSubmitting={isSubmitting}
                        onSubmit={(payload) => onReplySubmit(comment.id, payload)}
                    />
                </div>
            )}

            {comment.replies?.length > 0 && (
                <div className="mt-5 space-y-4 border-l border-zinc-800 pl-4 sm:pl-6">
                    {comment.replies.map((reply) => (
                        <CommentItem
                            key={reply.id}
                            comment={reply}
                            onReplySubmit={onReplySubmit}
                            replyingTo={replyingTo}
                            setReplyingTo={setReplyingTo}
                            isSubmitting={isSubmitting}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function CommentSection({ postId }: CommentSectionProps) {
    const [comments, setComments] = useState<BlogComment[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const totalComments = useMemo(() => countComments(comments), [comments]);

    const loadComments = async () => {
        setIsLoading(true);
        setError(null);

        const nextComments = await getCommentsByPost(postId);
        setComments(nextComments);
        setIsLoading(false);
    };

    useEffect(() => {
        loadComments();
    }, [postId]);

    const handleSubmit = async (payload: CommentFormState, parentId?: string) => {
        setIsSubmitting(true);
        setError(null);
        setFeedback(null);

        try {
            const requestBody: CreateCommentPayload = {
                ...payload,
                ...(parentId ? { parentId } : {}),
            };

            const result = await createComment(postId, requestBody);
            setFeedback(result?.message || "Comment submitted successfully.");
            setReplyingTo(null);
            await loadComments();
        } catch (submitError) {
            setError(submitError instanceof Error ? submitError.message : "Failed to submit comment.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
            <div className="mb-8 flex items-center gap-3">
                <div className="rounded-full bg-emerald-500/15 p-3 text-emerald-400">
                    <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-white">Comments</h2>
                    <p className="text-sm text-zinc-400">{totalComments} approved comments</p>
                </div>
            </div>

            <div className="mb-8">
                <p className="mb-4 text-sm leading-6 text-zinc-400">
                    Your comment will be reviewed before it appears publicly.
                </p>
                {feedback && <p className="mb-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">{feedback}</p>}
                {error && <p className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</p>}
                <CommentForm
                    submitLabel="Submit Comment"
                    isSubmitting={isSubmitting}
                    onSubmit={(payload) => handleSubmit(payload)}
                />
            </div>

            {isLoading ? (
                <p className="text-sm text-zinc-400">Loading comments...</p>
            ) : comments.length === 0 ? (
                <p className="text-sm text-zinc-400">No approved comments yet. Be the first to start the conversation.</p>
            ) : (
                <div className="space-y-5">
                    {comments.map((comment) => (
                        <CommentItem
                            key={comment.id}
                            comment={comment}
                            onReplySubmit={(parentId, payload) => handleSubmit(payload, parentId)}
                            replyingTo={replyingTo}
                            setReplyingTo={setReplyingTo}
                            isSubmitting={isSubmitting}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
