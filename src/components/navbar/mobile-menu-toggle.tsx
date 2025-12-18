"use client";

import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface MobileMenuToggleProps {
    isMobile: boolean;
    isMenuOpen: boolean;
    onToggle: () => void;
}

export default function MobileMenuToggle({ isMobile, isMenuOpen, onToggle }: MobileMenuToggleProps) {
    if (!isMobile) return null;

    return (
        <button
            onClick={onToggle}
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
    );
}
