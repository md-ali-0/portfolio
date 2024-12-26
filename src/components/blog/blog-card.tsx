import { Post } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({
    post,
    index,
}: {
    post: Post;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="max-w-sm mx-auto border bg-[#111111]  rounded-lg shadow-lg overflow-hidden"
        >
            <Image
                className="w-full h-48 object-cover"
                src={post.thumbnail}
                width={300}
                height={200}
                alt={post.title}
            />
            <div className="p-4">
                <h2 className="text-xl font-bold">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                </h2>
                <div className="text-gray-600 mt-2 line-clamp-2" dangerouslySetInnerHTML={{ __html: post?.content }}>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <Link
                        href={`/blogs/${post.slug}`}
                        className="text-blue-500 font-medium hover:underline"
                    >
                        Read more
                    </Link>
                    <span className="text-sm text-gray-500">
                        Category: {post.category.name}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
