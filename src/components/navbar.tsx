import { getAboutMe } from "@/service/about-me";
import { Download } from "lucide-react";
import Link from "next/link";
import Button from "./custom-button";
import NavbarClient from "./navbar/navbar-client";

export default async function Navbar() {
    // Fetch about-me data for resume URL
    const aboutMe = await getAboutMe();
    const resumeUrl = aboutMe?.resume;

    const navItems = [
        { name: "Home", href: "/", id: "home" },
        { name: "About", href: "/about", id: "about" },
        { name: "Skills", href: "/skills", id: "skills" },
        { name: "Projects", href: "/projects", id: "projects" },
        { name: "Blog", href: "/blog", id: "blog" },
        { name: "Contact", href: "/contact", id: "contact" },
    ];

    return (
        <header className="sticky top-0 left-0 right-0 z-50 transition-all duration-500">
            {/* Enhanced Background with Multiple Layers */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Base background */}
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-zinc-900/70 to-zinc-950/60" />
                {/* Static shimmer effect */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(90deg, 
                                transparent 0%, 
                                rgba(16, 185, 129, 0.1) 40%, 
                                rgba(16, 185, 129, 0.15) 50%, 
                                rgba(16, 185, 129, 0.1) 60%, 
                                transparent 100%)`,
                    }}
                />

                {/* Border gradients */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />
            </div>

            <div className="container mx-auto py-5 relative z-10 sm:px-6 lg:px-8">
                <nav className="flex justify-between items-center">
                    {/* Enhanced Logo */}
                    <Link
                        href="/"
                        className="relative group"
                        data-cursor="link"
                        data-cursor-text="Home"
                    >
                        {/* Glowing background */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative text-2xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
                                Ali
                            </span>
                            <span className="text-white ml-1">.</span>

                            {/* Static underline */}
                            <span
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                                style={{ width: "0%" }}
                            />

                            {/* Static particles around logo */}
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={`particle-${i}`}
                                    className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-60"
                                    style={{
                                        top: `${-10 + i * 5}px`,
                                        left: `${60 + i * 10}px`,
                                    }}
                                />
                            ))}
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-8 items-center">
                        {navItems.map((item, index) => (
                            <Link
                                href={item.href}
                                className="relative group py-2 px-1 transition-all duration-300 text-zinc-200 hover:text-emerald-400"
                                data-cursor="link"
                                data-cursor-text={item.name}
                                key={index}
                            >
                                <span className="relative font-medium">{item.name}</span>

                                {/* Enhanced underline with hover effects */}
                                <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-300 w-0 opacity-0 group-hover:w-full group-hover:opacity-100" />
                            </Link>
                        ))}
                    </div>

                    {/* Enhanced Resume Button */}
                    <div className="flex items-center gap-4">
                        {resumeUrl ? (
                            <Link href={resumeUrl} target="_blank" download>
                                <Button
                                    variant="outline"
                                    className="relative bg-transparent hover:bg-emerald-500/10 border-2 border-emerald-400/50 text-emerald-400 hover:text-white hover:border-emerald-400/60 transition-all duration-300 overflow-hidden group text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5"
                                >
                                    {/* Button content with responsive sizing */}
                                    <span className="relative flex items-center">
                                        <Download className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                        <span className="hidden sm:inline">Resume</span>
                                        <span className="sm:hidden">CV</span>
                                    </span>

                                    {/* Static border */}
                                    <div className="absolute inset-0 border-2 border-emerald-400/0 rounded-md" />
                                </Button>
                            </Link>
                        ) : (
                            <Button
                                variant="outline"
                                className="relative bg-transparent border-2 border-zinc-600/50 text-zinc-500 cursor-not-allowed opacity-50 text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5"
                                disabled
                            >
                                <span className="relative flex items-center">
                                    <Download className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    <span className="hidden sm:inline">Resume</span>
                                    <span className="sm:hidden">CV</span>
                                </span>
                            </Button>
                        )}

                        {/* Mobile Menu Toggle - Client Component */}
                        <NavbarClient navItems={navItems} />
                    </div>
                </nav>
            </div>
        </header>
    );
}
