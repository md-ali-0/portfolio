"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Search, Filter, Calendar, Clock, ArrowRight, Tag, X, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import CursorAlternative from "@/components/cursor-alternative"
import DarkPatternBackground from "@/components/dark-pattern-background"
import RippleEffect from "@/components/ripple-effect"
import BackToTop from "@/components/back-to-top"
import MagneticElement from "@/components/magnetic-element"
import AnimatedButton from "@/components/animated-button"
import { useMobile } from "@/hooks/use-mobile"
import { blogPosts } from "@/data/blog-data"

export default function BlogClientPage() {
  const isMobile = useMobile()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const [isLoading, setIsLoading] = useState(true)
  const [featuredPost, setFeaturedPost] = useState<any>(null)

  // Get all unique categories
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  // Get all unique tags
  const allTags = blogPosts.flatMap((post) => post.tags)
  const uniqueTags = Array.from(new Set(allTags))

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true)
    setTimeout(() => {
      // Set featured post (first post with featured flag or first post)
      const featured = blogPosts.find((post) => post.featured) || blogPosts[0]
      setFeaturedPost(featured)
      setIsLoading(false)
    }, 500)
  }, [])

  useEffect(() => {
    // Filter posts based on search term, category, and tag
    let filtered = blogPosts

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    if (selectedTag) {
      filtered = filtered.filter((post) => post.tags.includes(selectedTag))
    }

    setFilteredPosts(filtered)
  }, [searchTerm, selectedCategory, selectedTag])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory(null)
    setSelectedTag(null)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-emerald-400/30 border-t-emerald-400 animate-spin"></div>
          <div className="mt-4 text-emerald-400 font-medium">Loading blog...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      {!isMobile && <CursorAlternative />}
      {!isMobile && <RippleEffect />}
      <DarkPatternBackground />
      <BackToTop />

      {/* Header */}
      <header className="relative py-6 border-b border-zinc-800/50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <MagneticElement strength={40}>
              <Link href="/" className="text-xl font-bold relative group" data-cursor="link" data-cursor-text="Home">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
                  Ali<span className="text-white">.</span>
                </span>
              </Link>
            </MagneticElement>
            <nav className="hidden md:flex gap-8 items-center">
              {[
                { name: "Home", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: "Projects", href: "/projects" },
                { name: "Contact", href: "/#contact" },
              ].map((item) => (
                <MagneticElement key={item.name} strength={40}>
                  <Link
                    href={item.href}
                    className={`relative group ${item.href === "/blog" ? "text-emerald-400" : "text-white"}`}
                    data-cursor="link"
                    data-cursor-text={item.name}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-400 transition-all duration-300 ${
                        item.href === "/blog" ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </MagneticElement>
              ))}
            </nav>
            <MagneticElement strength={60}>
              <Link href="/#contact">
                <AnimatedButton
                  variant="outline"
                  className="text-emerald-400 hover:text-emerald-300 transition-all duration-300"
                  dataCursorText="Contact Me"
                >
                  Contact Me
                </AnimatedButton>
              </Link>
            </MagneticElement>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-30"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Insights &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                Articles
              </span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8">
              Explore my thoughts, tutorials, and insights on web development, design, and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="relative pb-20">
          <div className="container mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <span className="bg-emerald-500/20 text-emerald-400 p-2 rounded-md mr-3">
                  <ArrowRight className="h-5 w-5" />
                </span>
                Featured Post
              </h2>
              <div className="grid md:grid-cols-2 gap-8 bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="h-full overflow-hidden">
                  <img
                    src={featuredPost.coverImage || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border-0">
                      {featuredPost.category}
                    </Badge>
                    <span className="text-zinc-400 flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-1" /> {featuredPost.date}
                    </span>
                    <span className="text-zinc-400 flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-1" /> {featuredPost.readTime} min read
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-zinc-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="mt-auto">
                    <MagneticElement strength={50}>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        <AnimatedButton dataCursorText="Read Article">
                          Read Article <ArrowRight className="ml-2 h-4 w-4" />
                        </AnimatedButton>
                      </Link>
                    </MagneticElement>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="relative pb-12">
        <div className="container mx-auto">
          <motion.div
            className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid md:grid-cols-3 gap-6">
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
              <div>
                <select
                  value={selectedCategory || ""}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md p-2 focus:outline-none focus:border-emerald-400 transition-colors"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className={`flex-1 ${
                    searchTerm || selectedCategory || selectedTag
                      ? "border-emerald-400 text-emerald-400"
                      : "border-zinc-700 text-zinc-400"
                  }`}
                  onClick={clearFilters}
                  disabled={!searchTerm && !selectedCategory && !selectedTag}
                >
                  <X className="mr-2 h-4 w-4" /> Clear Filters
                </Button>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">
                  <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {uniqueTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={`cursor-pointer hover:bg-zinc-800 transition-colors ${
                    selectedTag === tag
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-400"
                      : "border-zinc-700 text-zinc-400"
                  }`}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative pb-20">
        <div className="container mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-emerald-500/20 text-emerald-400 p-2 rounded-md mr-3">
                  <Tag className="h-5 w-5" />
                </span>
                {selectedCategory || selectedTag ? "Filtered Articles" : "All Articles"}
              </h2>
              <div className="text-zinc-400">
                {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
              </div>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-zinc-900/30 rounded-xl border border-zinc-800">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                <p className="text-zinc-400 mb-6">Try adjusting your search or filter criteria</p>
                <Button variant="outline" onClick={clearFilters} className="border-emerald-400 text-emerald-400">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredPosts.map((post) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ y: -10 }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block h-full bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700 hover:border-emerald-500/50 transition-colors group"
                        data-cursor="link"
                      >
                        <div className="h-48 overflow-hidden">
                          <img
                            src={post.coverImage || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs">
                              {post.category}
                            </span>
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
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
        <div className="container mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-zinc-300 mb-8">
              Subscribe to my newsletter to receive the latest articles, tutorials, and insights directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-zinc-800/70 border-zinc-700 focus:border-emerald-400"
              />
              <MagneticElement strength={50}>
                <AnimatedButton dataCursorText="Subscribe">Subscribe</AnimatedButton>
              </MagneticElement>
            </div>
            <p className="text-xs text-zinc-400 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900/80 py-8 border-t border-zinc-800 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <p className="text-zinc-400">© {new Date().getFullYear()} Ali. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            {[
              { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
              { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <Mail className="h-5 w-5" />, href: "mailto:contact@example.com", label: "Email" },
            ].map((social, index) => (
              <MagneticElement key={index} strength={80}>
                <motion.div whileHover={{ scale: 1.2, rotate: 5, y: -5 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href={social.href}
                    className="text-zinc-500 hover:text-emerald-400 transition-colors"
                    data-cursor="link"
                    data-cursor-text={social.label}
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              </MagneticElement>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
