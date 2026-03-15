import config from "@/config";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = {
    params: Promise<{
        postId: string;
    }>;
};

export async function GET(_request: NextRequest, context: RouteContext) {
    const { postId } = await context.params;

    try {
        const response = await fetch(`${config.host}/api/v1/posts/${postId}/comments`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });

        const payload = await response.json();
        return NextResponse.json(payload, { status: response.status });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error instanceof Error ? error.message : "Failed to fetch comments",
            },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest, context: RouteContext) {
    const { postId } = await context.params;

    try {
        const body = await request.json();
        const response = await fetch(`${config.host}/api/v1/posts/${postId}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const payload = await response.json();
        return NextResponse.json(payload, { status: response.status });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error instanceof Error ? error.message : "Failed to submit comment",
            },
            { status: 500 }
        );
    }
}
