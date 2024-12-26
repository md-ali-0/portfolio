import BlogList from "@/components/blog/blog-list";
import config from "@/config";

async function fetchBlogs(page: number) {
    const response = await fetch(`${config.host}/api/post?page=${page}`, {
        cache: "no-store"
    });
    const data = await response.json();
    return data;
}

export default async function BlogsPage() {
    const blogs = await fetchBlogs(1);

    return (
        <div className="container mx-auto px-4 pt-20">
            <BlogList initialProjects={blogs.data} />
        </div>
    );
}
