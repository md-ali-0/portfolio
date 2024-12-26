import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Blogs() {
  const blogs = [
    { title: "Blog Post 1", description: "A summary of blog post 1" },
    { title: "Blog Post 2", description: "A summary of blog post 2" },
    { title: "Blog Post 3", description: "A summary of blog post 3" },
  ]

  return (
    <main className="container mx-auto px-4 pt-20">
      <h1 className="text-4xl font-bold mb-8">My Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{blog.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}

