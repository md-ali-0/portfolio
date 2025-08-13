"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { blogPosts } from "@/data/blog-data"
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Clock, Search, Star, Tag, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const POSTS_PER_PAGE = 6

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const [featuredPost, setFeaturedPost] = useState<any>(null)

  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  const popularPosts = [...blogPosts].sort((a, b) => b.readTime - a.readTime).slice(0, 4)
  const editorsPicks = blogPosts.filter((post) => post.featured || post.category === "Web Development").slice(0, 3)

  useEffect(() => {
    const featured = blogPosts.find((post) => post.featured) || blogPosts[0]
    setFeaturedPost(featured)
  }, [])

  useEffect(() => {
    let filtered = blogPosts

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredPosts(filtered)
    setCurrentPage(1) // Reset to first page when filtering
  }, [searchTerm])

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <section className="py-20 bg-gradient-to-b from-emerald-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Blog &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                Articles
              </span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8">
              Insights, tutorials, and thoughts on web development, design, and technology.
            </p>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <span className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg mr-3">
                  <ArrowRight className="h-5 w-5" />
                </span>
                Featured Post
              </h2>
              <div className="grid md:grid-cols-2 gap-8 bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-emerald-500/30 transition-colors group">
                <div className="h-64 md:h-full overflow-hidden">
                  <img
                    src={featuredPost.coverImage || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-0">{featuredPost.category}</Badge>
                    <span className="text-zinc-400 flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-1" /> {featuredPost.date}
                    </span>
                    <span className="text-zinc-400 flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-1" /> {featuredPost.readTime} min
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-zinc-300 mb-6">{featuredPost.excerpt}</p>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold flex items-center">
                  <span className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg mr-3">
                    <Tag className="h-5 w-5" />
                  </span>
                  Latest Posts
                </h2>
                <div className="text-zinc-400">
                  {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
                </div>
              </div>

              {currentPosts.length === 0 ? (
                <div className="text-center py-20 bg-zinc-900/30 rounded-xl border border-zinc-800">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                  <p className="text-zinc-400 mb-6">Try adjusting your search criteria</p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchTerm("")}
                    className="border-emerald-400 text-emerald-400 bg-transparent"
                  >
                    Clear Search
                  </Button>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {currentPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block h-full bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 group"
                      >
                        <div className="h-48 overflow-hidden">
                          <img
                            src={post.coverImage || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge className="bg-emerald-500/20 text-emerald-400 border-0 text-xs">
                              {post.category}
                            </Badge>
                            <span className="text-zinc-500 text-xs">•</span>
                            <span className="text-zinc-400 text-xs">{post.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-zinc-400 mb-4 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img
                                  src={post.author.avatar || "/placeholder.svg"}
                                  alt={post.author.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <span className="ml-2 text-sm">{post.author.name}</span>
                            </div>
                            <span className="text-zinc-500 text-sm flex items-center">
                              <Clock className="h-3 w-3 mr-1" /> {post.readTime} min
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="border-zinc-700 hover:border-emerald-400 hover:text-emerald-400 bg-transparent"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => handlePageChange(page)}
                          className={
                            currentPage === page
                              ? "bg-emerald-500 hover:bg-emerald-600 text-black"
                              : "border-zinc-700 hover:border-emerald-400 hover:text-emerald-400 bg-transparent"
                          }
                        >
                          {page}
                        </Button>
                      ))}

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="border-zinc-700 hover:border-emerald-400 hover:text-emerald-400 bg-transparent"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Search className="h-5 w-5 mr-2 text-emerald-400" />
                  Search
                </h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-zinc-800/50 border-zinc-700 focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-emerald-400" />
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                      <div className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={post.coverImage || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm line-clamp-2 group-hover:text-emerald-400 transition-colors">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-zinc-500">{post.date}</span>
                            <span className="text-xs text-zinc-500">•</span>
                            <span className="text-xs text-zinc-500">{post.readTime} min</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Tag className="h-5 w-5 mr-2 text-emerald-400" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const count = blogPosts.filter((post) => post.category === category).length
                    return (
                      <div
                        key={category}
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-pointer group"
                      >
                        <span className="text-sm group-hover:text-emerald-400 transition-colors">{category}</span>
                        <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-400">
                          {count}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-emerald-400" />
                  Editor's Pick
                </h3>
                <div className="space-y-4">
                  {editorsPicks.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                      <div className="space-y-2">
                        <div className="w-full h-24 rounded-lg overflow-hidden">
                          <img
                            src={post.coverImage || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-emerald-400 transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-emerald-500/20 text-emerald-400 border-0 text-xs">{post.category}</Badge>
                          <span className="text-xs text-zinc-500">{post.readTime} min</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-xl p-6 border border-emerald-800/30">
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2 text-emerald-400" />
                  Stay Updated
                </h3>
                <p className="text-sm text-zinc-300 mb-4">Get the latest articles delivered to your inbox.</p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-zinc-800/70 border-zinc-700 focus:border-emerald-400 text-sm"
                  />
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black text-sm">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
