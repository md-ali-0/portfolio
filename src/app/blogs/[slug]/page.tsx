import config from "@/config";
import { Post } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

// Dynamic Metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const slug = params.slug;

    const response = await fetch(`${config.host}/api/post/${slug}`, {
        cache: "no-store"
    });
    if (!response.ok) {
        return {
            title: "Post Not Found",
            description: "The requested blog post could not be found.",
        };
    }

    const result = await response.json();
    const post: Post = await result.data;

    return {
        title: post.metaTitle || post.title,
        description: post.metaDesc || post.shortDescription,
        keywords: post.metaKey || "",
        openGraph: {
            title: post.metaTitle || post.title,
            description: post.metaDesc || post.shortDescription,
            url: `${config.host}/post/${post.slug}`,
            images: [
                {
                    url: post.thumbnail,
                    width: 1200,
                    height: 630,
                },
            ],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: post.metaTitle || post.title,
            description: post.metaDesc || post.shortDescription,
            images: [post.thumbnail],
        },
    };
}


export default async function Page({ params }: { params: { slug: string } }) {
    const slug = params.slug;

    const response = await fetch(`${config.host}/api/post/${slug}`, {
        cache: "no-store"
    });
    if (!response.ok) {
        notFound();
    }

    const result = await response.json();
    const post: Post = await result.data;

    return (
        <div className="container py-8 sm:py-12 md:py-16">
            <div className="border rounded-2xl bg-[#111111] px-4 sm:px-5 md:px-10">
                <Image
                    alt="blog"
                    src={post?.thumbnail}
                    width={700}
                    height={400}
                    decoding="async"
                    data-nimg={1}
                    className=" w-full md:h-[450px] object-cover rounded-xl mt-6"
                    loading="lazy"
                    style={{ color: "transparent" }}
                />
                <div className="flex mt-4 text-tiny text-black dark:text-white">
                    <span>
                        {new Date(String(post?.createdAt)).toLocaleDateString(
                            "en-US",
                            {
                                weekday: "short",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            }
                        )}
                    </span>
                    <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">
                        {post?.category?.name}
                    </span>
                </div>
                <h2 className="dark:text-white sm:text-3xl mt-2 font-medium">
                    {post?.title}
                </h2>
                <div
                    dangerouslySetInnerHTML={{ __html: post?.content }}
                    className="prose dark:prose-invert my-4"
                ></div>
            </div>
        </div>
    );
}
