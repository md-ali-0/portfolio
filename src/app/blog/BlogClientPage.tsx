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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  const popularPosts = [...blogPosts].sort((a, b) => b.readTime - a.readTime).slice(0, 4)
  const editorsPicks = blogPosts.filter((post) => post.featured || post.category === "Web Development").slice(0, 3)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
    setCurrentPage(1)
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
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full px-4 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm text-emerald-400 font-medium">Latest Insights</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Blog &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient-x">
                Articles
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Insights, tutorials, and thoughts on web development, design, and technology.
            </p>
            <div className="flex justify-center">
              <div className="w-6 h-10 border-2 border-emerald-400/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="pb-16 sm:pb-20 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center">
                <span className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg mr-3 backdrop-blur-sm">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                Featured Article
              </h2>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-zinc-800/50 hover:border-emerald-500/30 transition-all duration-700">
                  <div className="grid lg:grid-cols-2 min-h-[500px]">
                    {/* Content Side */}
                    <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                      <div className="space-y-6">
                        {/* Category Badge */}
                        <div className="inline-flex">
                          <Badge className="bg-emerald-500 text-black border-0 font-semibold text-sm px-4 py-2">
                            {featuredPost.category}
                          </Badge>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight group-hover:text-emerald-400 transition-colors duration-500">
                          {featuredPost.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed max-w-lg">
                          {featuredPost.excerpt}
                        </p>

                        {/* Author & Meta */}
                        <div className="flex items-center gap-6 pt-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/30">
                              <img
                                src={
                                  featuredPost.author.avatar ||
                                  "/placeholder.svg?height=48&width=48&query=author avatar" ||
                                  "/placeholder.svg"
                                }
                                alt={featuredPost.author.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-emerald-400 font-semibold">{featuredPost.author.name}</p>
                              <p className="text-zinc-500 text-sm">{featuredPost.author.role || "Author"}</p>
                            </div>
                          </div>

                          <div className="h-8 w-px bg-zinc-700" />

                          <div className="flex items-center gap-4 text-zinc-400">
                            <span className="flex items-center text-sm">
                              <Calendar className="h-4 w-4 mr-2" /> {featuredPost.date}
                            </span>
                            <span className="flex items-center text-sm">
                              <Clock className="h-4 w-4 mr-2" /> {featuredPost.readTime} min
                            </span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6">
                          <Link href={`/blog/${featuredPost.slug}`}>
                            <Button
                              size="lg"
                              className="bg-emerald-500 hover:bg-emerald-600 text-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 group/btn text-lg px-8 py-6"
                            >
                              Read Full Story
                              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative overflow-hidden order-1 lg:order-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 z-10" />
                      <div className="absolute top-6 right-6 z-20">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-500/30">
                          <span className="text-emerald-400 text-sm font-medium">Featured</span>
                        </div>
                      </div>

                      {/* Floating Tags */}
                      <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
                        {(featuredPost.tags?.slice(0, 2) || ["webdev", "tutorial"]).map((tag: string) => (
                          <Badge
                            key={tag}
                            className="bg-black/70 backdrop-blur-sm text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
                          >
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <img
                        src={
                          featuredPost.coverImage || "/placeholder.svg?height=600&width=800&query=featured article hero"
                        }
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
                <h2 className="text-xl sm:text-2xl font-bold flex items-center">
                  <span className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg mr-3 backdrop-blur-sm">
                    <Tag className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  Latest Posts
                </h2>
                <div className="text-zinc-400 text-sm sm:text-base">
                  {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
                </div>
              </div>

              {currentPosts.length === 0 ? (
                <div className="text-center py-16 sm:py-20 bg-zinc-900/30 backdrop-blur-sm rounded-xl border border-zinc-800/50">
                  <div className="text-4xl sm:text-6xl mb-4">🔍</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">No articles found</h3>
                  <p className="text-zinc-400 mb-6">Try adjusting your search criteria</p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchTerm("")}
                    className="border-emerald-400 text-emerald-400 bg-transparent hover:bg-emerald-400/10"
                  >
                    Clear Search
                  </Button>
                </div>
              ) : (
                <>
                  <div className="space-y-6 mb-12">
                    {currentPosts.map((post, index) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block group"
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        <div className="relative">
                          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          <div className="relative bg-zinc-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-emerald-500/50 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 group-hover:bg-zinc-900/80">
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                              {[...Array(3)].map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute w-1 h-1 bg-emerald-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                                  style={{
                                    left: `${20 + i * 30}%`,
                                    top: `${20 + i * 20}%`,
                                    animationDelay: `${i * 200}ms`,
                                    animation: "float 3s ease-in-out infinite",
                                  }}
                                />
                              ))}
                            </div>

                            <div className="flex flex-col md:flex-row">
                              <div className="md:w-80 h-48 md:h-auto overflow-hidden relative flex-shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-900/60 via-zinc-900/20 to-transparent z-10" />
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="absolute top-4 left-4 z-30">
                                  <Badge className="bg-black/70 backdrop-blur-sm text-emerald-400 border border-emerald-500/30 font-semibold text-xs px-3 py-1 shadow-lg">
                                    {post.category}
                                  </Badge>
                                </div>

                                <div className="absolute top-4 right-4 z-30">
                                  <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 border border-zinc-700/50">
                                    <span className="text-zinc-300 text-xs flex items-center">
                                      <Clock className="h-3 w-3 mr-1" /> {post.readTime}m
                                    </span>
                                  </div>
                                </div>

                                <img
                                  src={post.coverImage || "/placeholder.svg?height=300&width=400&query=blog post cover"}
                                  alt={post.title}
                                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                                />
                              </div>

                              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between relative">
                                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />

                                <div className="relative z-10">
                                  <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="text-emerald-400 text-sm flex items-center font-medium">
                                      <Calendar className="h-4 w-4 mr-2" /> {post.date}
                                    </span>
                                    <div className="w-1 h-1 bg-zinc-600 rounded-full" />
                                    <span className="text-zinc-400 text-sm">By {post.author.name}</span>
                                  </div>

                                  <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors duration-500 leading-tight line-clamp-2">
                                    {post.title}
                                  </h3>

                                  <p className="text-zinc-400 mb-6 leading-relaxed line-clamp-3 text-sm md:text-base">
                                    {post.excerpt}
                                  </p>
                                </div>

                                <div className="flex items-center justify-between relative z-10">
                                  <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500/30 group-hover:border-emerald-500/60 transition-colors duration-500">
                                      <img
                                        src={
                                          post.author.avatar ||
                                          "/placeholder.svg?height=40&width=40&query=author avatar" ||
                                          "/placeholder.svg"
                                        }
                                        alt={post.author.name}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="ml-3">
                                      <span className="text-sm text-zinc-300 font-medium block">
                                        {post.author.name}
                                      </span>
                                      <span className="text-xs text-zinc-500">Author</span>
                                    </div>
                                  </div>

                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/20 group/btn border border-transparent hover:border-emerald-500/30 backdrop-blur-sm transition-all duration-300"
                                  >
                                    <span className="mr-2">Read More</span>
                                    <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:scale-110" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 flex-wrap">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="border-zinc-700 hover:border-emerald-400 hover:text-emerald-400 bg-transparent backdrop-blur-sm disabled:opacity-50"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>

                      {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                        let page
                        if (totalPages <= 5) {
                          page = i + 1
                        } else if (currentPage <= 3) {
                          page = i + 1
                        } else if (currentPage >= totalPages - 2) {
                          page = totalPages - 4 + i
                        } else {
                          page = currentPage - 2 + i
                        }
                        return (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePageChange(page)}
                            className={
                              currentPage === page
                                ? "bg-emerald-500 hover:bg-emerald-600 text-black"
                                : "border-zinc-700 hover:border-emerald-400 hover:text-emerald-400 bg-transparent backdrop-blur-sm"
                            }
                          >
                            {page}
                          </Button>
                        )
                      })}

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="border-zinc-700 hover:border-emerald-400 hover:text-emerald-400 bg-transparent backdrop-blur-sm disabled:opacity-50"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="lg:col-span-4 space-y-6 sm:space-y-8">
              {/* Search */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800/50 hover:border-emerald-500/30 transition-colors">
                <h3 className="text-base sm:text-lg font-bold mb-4 flex items-center">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-emerald-400" />
                  Search
                </h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-zinc-800/50 border-zinc-700 focus:border-emerald-400 backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800/50 hover:border-emerald-500/30 transition-colors">
                <h3 className="text-base sm:text-lg font-bold mb-4 flex items-center">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-emerald-400" />
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                      <div className="flex gap-3 p-2 rounded-lg hover:bg-zinc-800/30 transition-colors">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={post.coverImage || "/placeholder.svg?height=64&width=64&query=popular post"}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-xs sm:text-sm line-clamp-2 group-hover:text-emerald-400 transition-colors">
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

              {/* Categories */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800/50 hover:border-emerald-500/30 transition-colors">
                <h3 className="text-base sm:text-lg font-bold mb-4 flex items-center">
                  <Tag className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-emerald-400" />
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
                        <Badge
                          variant="outline"
                          className="text-xs border-zinc-700 text-zinc-400 group-hover:border-emerald-400/50"
                        >
                          {count}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Editor's Pick */}
              <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-800/30 hover:border-emerald-600/50 transition-colors">
                <h3 className="text-base sm:text-lg font-bold mb-2 flex items-center">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-emerald-400" />
                  Stay Updated
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mb-4">
                  Get the latest articles delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-zinc-800/70 border-zinc-700 focus:border-emerald-400 text-sm backdrop-blur-sm"
                  />
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black text-sm transition-all duration-300 hover:scale-105">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
