"use client"
import Breadcrumb from "@/components/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { blogPosts } from "@/data/blog-data"
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Clock, Search, Tag, TrendingUp } from "lucide-react"
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
      {/* Breadcrumb */}
      <Breadcrumb />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
                <h2 className="text-xl sm:text-2xl font-bold flex items-center">
                  <span className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg mr-3 backdrop-blur-sm">
                    <Tag className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  Latest Posts
                </h2>
                <div className="text-zinc-400 text-sm">
                  {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
                </div>
              </div>

              {currentPosts.length === 0 ? (
                <div className="text-center py-12 sm:py-16 bg-zinc-900/30 backdrop-blur-sm rounded-xl border border-zinc-800/50">
                  <div className="text-3xl sm:text-4xl mb-3">🔍</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">No articles found</h3>
                  <p className="text-zinc-400 mb-4 text-sm">Try adjusting your search criteria</p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchTerm("")}
                    className="border-emerald-400 text-emerald-400 bg-transparent hover:bg-emerald-400/10 text-sm px-4 py-2"
                  >
                    Clear Search
                  </Button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-8">
                    {currentPosts.map((post, index) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block group"
                      >
                        <div className="relative bg-zinc-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-emerald-500/30 transition-all duration-300">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-64 h-40 md:h-auto overflow-hidden relative flex-shrink-0">
                              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-900/60 via-zinc-900/20 to-transparent" />
                              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                              <div className="absolute top-3 left-3">
                                <Badge className="bg-black/70 backdrop-blur-sm text-emerald-400 border border-emerald-500/30 font-semibold text-xs px-2 py-0.5">
                                  {post.category}
                                </Badge>
                              </div>

                              <div className="absolute top-3 right-3">
                                <div className="bg-black/70 backdrop-blur-sm rounded-full px-2 py-0.5 border border-zinc-700/50">
                                  <span className="text-zinc-300 text-xs flex items-center">
                                    <Clock className="h-2.5 w-2.5 mr-1" /> {post.readTime}m
                                  </span>
                                </div>
                              </div>

                              <img
                                src={post.coverImage || "/placeholder.svg?height=200&width=300&query=blog post cover"}
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="text-emerald-400 text-xs flex items-center">
                                  <Calendar className="h-3 w-3 mr-1" /> {post.date}
                                </span>
                                <div className="w-1 h-1 bg-zinc-600 rounded-full" />
                                <span className="text-zinc-400 text-xs">By {post.author.name}</span>
                              </div>

                              <h3 className="text-lg font-bold mb-2 leading-tight">
                                {post.title}
                              </h3>

                              <p className="text-zinc-400 mb-4 text-sm leading-relaxed line-clamp-2">
                                {post.excerpt}
                              </p>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="w-8 h-8 rounded-full overflow-hidden border border-emerald-500/30">
                                    <img
                                      src={
                                        post.author.avatar ||
                                        "/placeholder.svg?height=32&width=32&query=author avatar" ||
                                        "/placeholder.svg"
                                      }
                                      alt={post.author.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="ml-2">
                                    <span className="text-xs text-zinc-300 font-medium block">
                                      {post.author.name}
                                    </span>
                                  </div>
                                </div>

                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 text-xs px-2 py-1"
                                >
                                  <span className="mr-1">Read</span>
                                  <ArrowRight className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-1 flex-wrap">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="border-zinc-700 hover:border-emerald-400 hover:text-emerald-400 bg-transparent w-8 h-8 p-0"
                      >
                        <ChevronLeft className="h-3 w-3" />
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
                                ? "bg-emerald-500 hover:bg-emerald-600 text-black w-8 h-8 p-0 text-sm"
                                : "border-zinc-700 hover:border-emerald-400 hover:text-emerald-400 bg-transparent w-8 h-8 p-0 text-sm"
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
                        className="border-zinc-700 hover:border-emerald-400 hover:text-emerald-400 bg-transparent w-8 h-8 p-0"
                      >
                        <ChevronRight className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="lg:col-span-4 space-y-4 sm:space-y-6">
              {/* Search */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-800/50">
                <h3 className="text-base font-bold mb-3 flex items-center">
                  <Search className="h-4 w-4 mr-2 text-emerald-400" />
                  Search
                </h3>
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-zinc-500 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 bg-zinc-800/50 border-zinc-700 focus:border-emerald-400 text-sm"
                  />
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-800/50">
                <h3 className="text-base font-bold mb-3 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2 text-emerald-400" />
                  Popular Posts
                </h3>
                <div className="space-y-3">
                  {popularPosts.map((post, index) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                      <div className="flex gap-2 p-2 rounded-lg hover:bg-zinc-800/30 transition-colors">
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={post.coverImage || "/placeholder.svg?height=48&width=48&query=popular post"}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-xs line-clamp-2 group-hover:text-emerald-400">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-1 mt-1">
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
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-800/50">
                <h3 className="text-base font-bold mb-3 flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-emerald-400" />
                  Categories
                </h3>
                <div className="space-y-1">
                  {categories.map((category) => {
                    const count = blogPosts.filter((post) => post.category === category).length
                    return (
                      <div
                        key={category}
                        className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-pointer"
                      >
                        <span className="text-sm">{category}</span>
                        <Badge
                          variant="outline"
                          className="text-xs border-zinc-700 text-zinc-400"
                        >
                          {count}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Subscribe */}
              <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-800/30">
                <h3 className="text-base font-bold mb-2 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-emerald-400" />
                  Stay Updated
                </h3>
                <p className="text-xs text-zinc-300 mb-3">
                  Get the latest articles delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-zinc-800/70 border-zinc-700 focus:border-emerald-400 text-xs"
                  />
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black text-xs py-2">
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