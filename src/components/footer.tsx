"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-900 text-zinc-300 py-16 border-t border-zinc-800 backdrop-blur-sm relative transition-colors duration-300 dark:bg-zinc-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-zinc-900 to-teal-900/20 opacity-60"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.1),transparent_50%)] opacity-50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(20,184,166,0.08),transparent_50%)] opacity-40"></div>



            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    {/* Brand */}
                    <div className="md:col-span-1 group">
                        <Link
                            href="/"
                            className="text-2xl font-bold inline-block group transform hover:scale-105 transition-all duration-300"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-size-200 animate-gradient-x relative">
                                Ali
                                <span className="text-white group-hover:text-emerald-300 transition-colors duration-300">
                                    .
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </span>
                        </Link>
                        <p className="mt-4 text-zinc-400 leading-relaxed">
                            Full-stack developer passionate about creating
                            beautiful, functional, and user-centered digital
                            experiences.
                        </p>

                        <div className="flex gap-4 mt-6">
                            {[
                                {
                                    icon: <Github className="h-5 w-5" />,
                                    href: "https://github.com",
                                    label: "GitHub",
                                },
                                {
                                    icon: <Twitter className="h-5 w-5" />,
                                    href: "https://twitter.com",
                                    label: "Twitter",
                                },
                                {
                                    icon: <Linkedin className="h-5 w-5" />,
                                    href: "https://linkedin.com",
                                    label: "LinkedIn",
                                },
                                {
                                    icon: <Mail className="h-5 w-5" />,
                                    href: "mailto:contact@example.com",
                                    label: "Email",
                                },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-zinc-800/80 backdrop-blur-sm p-3 rounded-full text-zinc-400 hover:text-emerald-400 hover:bg-zinc-700/80 transition-all duration-300 border border-zinc-700/50 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 transform hover:-translate-y-1 hover:scale-110"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1 group">
                        <h3 className="text-lg font-semibold mb-6 flex items-center text-white">
                            <span className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/30 text-emerald-400 p-1.5 rounded-md mr-2 border border-emerald-700/30">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 rotate-45"
                                >
                                    <path d="m7 15 5 5 5-5" />
                                    <path d="m7 9 5-5 5 5" />
                                </svg>
                            </span>
                            <span className="bg-gradient-to-r from-white to-zinc-200 bg-clip-text text-transparent">
                                Quick Links
                            </span>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Projects", href: "/projects" },
                                { name: "Blog", href: "/blog" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-zinc-400 hover:text-emerald-400 transition-all duration-300 flex items-center group hover:drop-shadow-sm transform hover:translate-x-1"
                                    >
                                        <span className="h-1 w-1 bg-emerald-400 rounded-full mr-2 group-hover:shadow-sm group-hover:shadow-emerald-400/50 transform group-hover:scale-150 transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-1 group">
                        <h3 className="text-lg font-semibold mb-6 flex items-center text-white">
                            <span className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/30 text-emerald-400 p-1.5 rounded-md mr-2 border border-emerald-700/30">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 rotate-45"
                                >
                                    <path d="m7 15 5 5 5-5" />
                                    <path d="m7 9 5-5 5 5" />
                                </svg>
                            </span>
                            <span className="bg-gradient-to-r from-white to-zinc-200 bg-clip-text text-transparent">
                                Services
                            </span>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Web Development",
                                "Frontend Development",
                                "Backend Development",
                                "UI/UX Design",
                                "Mobile App Development",
                            ].map((service) => (
                                <li key={service}>
                                    <span className="text-zinc-400 flex items-center group hover:text-zinc-300 transition-colors duration-300 transform hover:translate-x-1">
                                        <span className="h-1 w-1 bg-emerald-400 rounded-full mr-2 group-hover:shadow-sm group-hover:shadow-emerald-400/50 transform group-hover:scale-150 transition-all duration-300"></span>
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-1 group">
                        <h3 className="text-lg font-semibold mb-6 flex items-center text-white">
                            <span className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/30 text-emerald-400 p-1.5 rounded-md mr-2 border border-emerald-700/30">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 rotate-45"
                                >
                                    <path d="m7 15 5 5 5-5" />
                                    <path d="m7 9 5-5 5 5" />
                                </svg>
                            </span>
                            <span className="bg-gradient-to-r from-white to-zinc-200 bg-clip-text text-transparent">
                                Stay Updated
                            </span>
                        </h3>
                        <p className="text-zinc-400 mb-4">
                            Subscribe to my newsletter for the latest updates
                            and articles
                        </p>
                        <form className="space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-lg px-4 py-3 text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/70 focus:bg-zinc-800 transition-all duration-300 hover:border-zinc-600/70"
                                />
                            </div>
                            <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 transform hover:-translate-y-0.5">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-zinc-800/60 text-center flex flex-col md:flex-row justify-center items-center">
                    <p className="text-zinc-500 mb-4 md:mb-0">
                        © {currentYear} Mohammad Ali. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
