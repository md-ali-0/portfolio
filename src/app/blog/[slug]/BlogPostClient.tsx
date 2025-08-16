"use client"

import AnimatedButton from "@/components/animated-button"
import BackToTop from "@/components/back-to-top"
import CursorAlternative from "@/components/cursor-alternative"
import DarkPatternBackground from "@/components/dark-pattern-background"
import MagneticElement from "@/components/magnetic-element"
import RippleEffect from "@/components/ripple-effect"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/data/blog-data"
import { useMobile } from "@/hooks/use-mobile"
import { generateBlogJsonLd } from "@/lib/metadata"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Bookmark,
  Calendar,
  Clock,
  Github,
  Heart,
  Linkedin,
  Mail,
  MessageCircle,
  Share2,
  Tag,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useEffect, useState } from "react"

export default function BlogPostClient({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const [isLoading, setIsLoading] = useState(true)
  const isMobile = useMobile()
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true)
    setTimeout(() => {
      // Get related posts (excluding current post)
      const related = blogPosts.filter((p) => p.slug !== slug && p.category === post?.category).slice(0, 3)
      setRelatedPosts(related)

      setIsLoading(false)
    }, 500)
  }, [slug, post?.category])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-emerald-400/30 border-t-emerald-400 animate-spin"></div>
          <div className="mt-4 text-emerald-400 font-medium">Loading post...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogJsonLd(post)),
        }}
      />
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
                    className="relative group text-white"
                    data-cursor="link"
                    data-cursor-text={item.name}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </MagneticElement>
              ))}
            </nav>
            <MagneticElement strength={60}>
              <Link href="/blog">
                <AnimatedButton
                  variant="outline"
                  className="text-emerald-400 hover:text-emerald-300 transition-all duration-300"
                  dataCursorText="Back to Blog"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
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
            <div className="mb-4 flex items-center justify-center gap-2">
              <Link
                href={`/blog/category/${post.category.toLowerCase()}`}
                className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium hover:bg-emerald-500/30 transition-colors"
                data-cursor="link"
              >
                {post.category}
              </Link>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400 flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-1" /> {post.date}
              </span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400 flex items-center text-sm">
                <Clock className="h-4 w-4 mr-1" /> {post.readTime} min read
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-zinc-300 mb-8">{post.excerpt}</p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400">
                  <img
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-3 text-left">
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-zinc-400">{post.author.title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative mb-16">
        <div className="container mx-auto">
          <motion.div
            className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="relative pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800">
                <div className="prose prose-lg prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-zinc-800">
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Tag className="mr-2 h-5 w-5 text-emerald-400" /> Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag.toLowerCase()}`}
                        className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 rounded-full text-sm transition-colors"
                        data-cursor="link"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 pt-8 border-t border-zinc-800">
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Share2 className="mr-2 h-5 w-5 text-emerald-400" /> Share this post
                  </h3>
                  <div className="flex gap-3">
                    {[
                      { name: "Twitter", icon: "twitter.svg", color: "bg-[#1DA1F2]/10 text-[#1DA1F2]" },
                      { name: "Facebook", icon: "facebook.svg", color: "bg-[#4267B2]/10 text-[#4267B2]" },
                      { name: "LinkedIn", icon: "linkedin.svg", color: "bg-[#0077B5]/10 text-[#0077B5]" },
                      { name: "Copy Link", icon: "link.svg", color: "bg-zinc-700/10 text-zinc-400" },
                    ].map((social) => (
                      <MagneticElement key={social.name} strength={50}>
                        <button
                          className={`p-3 rounded-full ${social.color} hover:scale-110 transition-transform`}
                          data-cursor="button"
                          data-cursor-text={social.name}
                        >
                          <Share2 className="h-5 w-5" />
                        </button>
                      </MagneticElement>
                    ))}
                  </div>
                </div>

                {/* Engagement */}
                <div className="mt-8 pt-8 border-t border-zinc-800">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-6">
                      <button className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors">
                        <Heart className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                    <button className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors">
                      <Bookmark className="h-5 w-5" />
                      <span>Save</span>
                    </button>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 bg-zinc-800/50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-400 flex-shrink-0">
                      <img
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{post.author.name}</h3>
                      <p className="text-zinc-400 mb-3">{post.author.title}</p>
                      <p className="text-zinc-300">{post.author.bio}</p>
                      <div className="mt-4">
                        <MagneticElement strength={40}>
                          <AnimatedButton
                            variant="outline"
                            size="sm"
                            className="text-emerald-400"
                            dataCursorText="View Profile"
                          >
                            View Profile
                          </AnimatedButton>
                        </MagneticElement>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Related Posts */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 mb-8">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-zinc-800">Related Posts</h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="block group"
                      data-cursor="link"
                    >
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={relatedPost.coverImage || "/placeholder.svg"}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2 group-hover:text-emerald-400 transition-colors">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-zinc-400 mt-1">{relatedPost.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800">
                  <Link href="/blog">
                    <Button
                      variant="ghost"
                      className="w-full text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10"
                    >
                      View All Posts
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 mb-8">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-zinc-800">Categories</h3>
                <div className="space-y-2">
                  {[
                    { name: "Technology", count: 12 },
                    { name: "Web Development", count: 8 },
                    { name: "UI/UX Design", count: 6 },
                    { name: "Programming", count: 10 },
                    { name: "Career", count: 4 },
                  ].map((category) => (
                    <Link
                      key={category.name}
                      href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-zinc-800/50 transition-colors group"
                      data-cursor="link"
                    >
                      <span className="group-hover:text-emerald-400 transition-colors">{category.name}</span>
                      <span className="text-zinc-500 text-sm">{category.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20">
                <h3 className="text-xl font-bold mb-3">Subscribe to Newsletter</h3>
                <p className="text-zinc-300 mb-6">Get the latest posts and updates delivered to your inbox.</p>
                <form className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full bg-zinc-800/70 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                  <MagneticElement strength={40}>
                    <AnimatedButton className="w-full" dataCursorText="Subscribe">
                      Subscribe
                    </AnimatedButton>
                  </MagneticElement>
                </form>
                <p className="text-xs text-zinc-400 mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Posts */}
      <section className="relative py-20 bg-zinc-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">More Articles</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
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
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <MagneticElement strength={60}>
              <Link href="/blog">
                <AnimatedButton variant="outline" className="text-emerald-400" dataCursorText="View All Posts">
                  View All Posts
                </AnimatedButton>
              </Link>
            </MagneticElement>
          </div>
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
