"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
    name: string;
    href: string;
    id: string;
}

interface MobileMenuProps {
    navItems: NavItem[];
}

export default function MobileMenu({ navItems }: MobileMenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

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
        <>
            {isMenuOpen && (
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
                                        <span className="font-medium">{item.name}</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
