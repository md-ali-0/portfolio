"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="bg-gray-50/80 dark:bg-zinc-900/80 py-16 border-t border-gray-200 dark:border-zinc-800 backdrop-blur-sm relative transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/5 dark:from-emerald-900/5 to-transparent opacity-50"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand */}
          <motion.div className="md:col-span-1" variants={item}>
            <Link href="/" className="text-2xl font-bold inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-500">
                Ali<span className="text-zinc-900 dark:text-white">.</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-zinc-400 leading-relaxed">
              Full-stack developer passionate about creating beautiful, functional, and user-centered digital
              experiences.
            </p>

            <div className="flex gap-4 mt-6">
              {[
                { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
                { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
                { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Mail className="h-5 w-5" />, href: "mailto:contact@example.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-zinc-800 p-3 rounded-full text-gray-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all duration-300 border border-gray-200 dark:border-zinc-700"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="md:col-span-1" variants={item}>
            <h3 className="text-lg font-semibold mb-6 flex items-center text-zinc-900 dark:text-white">
              <span className="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 p-1.5 rounded-md mr-2">
                <ArrowUp className="h-4 w-4 rotate-45" />
              </span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/projects" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/#contact" },
              ].map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 bg-emerald-600 dark:bg-emerald-400 rounded-full mr-2"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="md:col-span-1" variants={item}>
            <h3 className="text-lg font-semibold mb-6 flex items-center text-zinc-900 dark:text-white">
              <span className="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 p-1.5 rounded-md mr-2">
                <ArrowUp className="h-4 w-4 rotate-45" />
              </span>
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Frontend Development",
                "Backend Development",
                "UI/UX Design",
                "Mobile App Development",
              ].map((service) => (
                <motion.li key={service} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <span className="text-gray-600 dark:text-zinc-400 flex items-center">
                    <span className="h-1 w-1 bg-emerald-600 dark:bg-emerald-400 rounded-full mr-2"></span>
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div className="md:col-span-1" variants={item}>
            <h3 className="text-lg font-semibold mb-6 flex items-center text-zinc-900 dark:text-white">
              <span className="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 p-1.5 rounded-md mr-2">
                <ArrowUp className="h-4 w-4 rotate-45" />
              </span>
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-zinc-400 mb-4">
              Subscribe to my newsletter for the latest updates and articles
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 hover:from-emerald-700 hover:to-teal-700 dark:hover:from-emerald-600 dark:hover:to-teal-600 text-white dark:text-black">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-zinc-800 text-center flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-zinc-400 mb-4 md:mb-0">
            © {currentYear} Ali. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 border-gray-200 dark:border-zinc-700 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
