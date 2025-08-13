"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Clock, Github, Instagram, Linkedin, Mail, MapPin, Phone, Send, Sparkles, Twitter } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-emerald-400" />,
      title: "Email",
      value: "contact@example.com",
      link: "mailto:contact@example.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-blue-400" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-5 w-5 text-purple-400" />,
      title: "Location",
      value: "New York, NY",
      link: "#",
    },
    {
      icon: <Clock className="h-5 w-5 text-orange-400" />,
      title: "Response Time",
      value: "Within 24 hours",
      link: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:bg-gray-600",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:bg-sky-600",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-emerald-950/20 to-zinc-950">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(20, 184, 166, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <motion.div
            className="relative mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-center relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-400 to-white">
                Get In
              </span>
              <motion.span
                className="text-emerald-400 mx-4 relative z-10"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(16, 185, 129, 0.5)",
                    "0 0 40px rgba(16, 185, 129, 0.8)",
                    "0 0 20px rgba(16, 185, 129, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Touch
              </motion.span>

              {/* Floating sparkles */}
              <motion.div
                className="absolute -top-8 -right-8"
                animate={{
                  rotate: 360,
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <Sparkles className="h-8 w-8 text-emerald-400/70" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6"
                animate={{
                  rotate: -360,
                  y: [0, -15, 0],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  y: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <Sparkles className="h-6 w-6 text-teal-400/70" />
              </motion.div>
            </h2>

            {/* Enhanced animated underline */}
            <motion.div
              className="h-1.5 w-40 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 mt-8 rounded-full mx-auto relative overflow-hidden"
              initial={{ width: 0 }}
              whileInView={{ width: 160 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                animate={{ x: [-100, 260] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          <motion.p
            className="text-zinc-400 text-lg text-center max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-2xl border border-zinc-700/50">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Let's Connect</h3>
              <p className="text-zinc-300 mb-6">
                Feel free to reach out for collaborations or just a friendly chat about technology.
              </p>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.link}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-700/50 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="p-2 rounded-full bg-zinc-700/50">{contact.icon}</div>
                    <div>
                      <p className="font-medium text-white">{contact.title}</p>
                      <p className="text-sm text-zinc-400">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-zinc-700/50">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`p-3 rounded-full bg-zinc-700/50 text-white transition-colors duration-200 ${social.color}`}
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-2xl border border-zinc-700/50">
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">Send Me a Message</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-900/50 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:border-emerald-400 focus:outline-none transition-colors duration-200"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-900/50 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:border-emerald-400 focus:outline-none transition-colors duration-200"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900/50 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:border-emerald-400 focus:outline-none transition-colors duration-200"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900/50 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:border-emerald-400 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </motion.button>
              </form>

              <div className="mt-6 text-center text-zinc-400">
                <p className="text-sm">
                  I'll respond to your message within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
