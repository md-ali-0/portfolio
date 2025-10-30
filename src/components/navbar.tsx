"use client";

import { useMobile } from "@/hooks/use-mobile";
import { AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "./custom-button";

export default function Navbar() {
    const isMobile = useMobile();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/", id: "home" },
        { name: "About", href: "/about", id: "about" },
        { name: "Skills", href: "/skills", id: "skills" },
        { name: "Projects", href: "/projects", id: "projects" },
        { name: "Blog", href: "/blog", id: "blog" },
        { name: "Contact", href: "/contact", id: "contact" },
    ];

    // Function to determine if a nav item is active
    const isActive = (href: string) => {
        // For home page
        if (href === "/" && pathname === "/") return true;
        
        // For other pages, remove hash for comparison
        if (href.includes("#")) {
            const basePath = href.split("#")[0];
            return pathname === basePath || pathname === href;
        }
        
        // Direct path matching
        return pathname === href;
    };

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
                                className={`relative group py-2 px-1 transition-all duration-300 ${
                                    isActive(item.href)
                                        ? "text-emerald-400"
                                        : "text-zinc-200 hover:text-emerald-400"
                                }`}
                                data-cursor="link"
                                data-cursor-text={item.name}
                                key={index}
                            >
                                <span className="relative font-medium">
                                    {item.name}
                                </span>

                                {/* Enhanced underline with hover and active effects */}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-300 ${
                                        isActive(item.href)
                                            ? "w-full opacity-100"
                                            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                                    }`}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Enhanced Resume Button */}
                    <div className="flex items-center gap-4">
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

                        {/* Mobile Menu Toggle */}
                        {isMobile && (
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-3 text-emerald-400 relative min-w-[44px] min-h-[44px] flex items-center justify-center"
                                data-cursor="button"
                            >
                                <AnimatePresence mode="wait">
                                    {isMenuOpen ? (
                                        <div>
                                            <X className="h-6 w-6" />
                                        </div>
                                    ) : (
                                        <div>
                                            <Menu className="h-6 w-6" />
                                        </div>
                                    )}
                                </AnimatePresence>

                                {/* Static ripple effect */}
                                <div className="absolute inset-0 rounded-full border border-emerald-400/30" />
                            </button>
                        )}
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && isMobile && (
                <div className="md:hidden border-t border-zinc-700/50 backdrop-blur-xl">
                    {/* Base background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/95 to-zinc-950/95" />

                    {/* Container with responsive max-widths */}
                    <div className="container mx-auto py-4 sm:py-6 px-4 sm:px-6 relative z-10 max-w-7xl">
                        <div className="flex flex-col space-y-2 sm:space-y-3">
                            {navItems.map((item, index) => (
                                <div key={index}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 min-h-[48px] text-base sm:text-lg ${
                                            isActive(item.href)
                                                ? "bg-emerald-500/20 text-emerald-400 border-l-4 border-emerald-400"
                                                : "text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800/50"
                                        }`}
                                        data-cursor="link"
                                    >
                                        <span className="font-medium">
                                            {item.name}
                                        </span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
