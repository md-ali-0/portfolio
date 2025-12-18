"use client";

import { useMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import MobileMenu from "./mobile-menu";
import MobileMenuToggle from "./mobile-menu-toggle";

interface NavItem {
    name: string;
    href: string;
    id: string;
}

interface NavbarClientProps {
    navItems: NavItem[];
}

export default function NavbarClient({ navItems }: NavbarClientProps) {
    const isMobile = useMobile();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <MobileMenuToggle
                isMobile={isMobile}
                isMenuOpen={isMenuOpen}
                onToggle={() => setIsMenuOpen(!isMenuOpen)}
            />
            {isMobile && <MobileMenu navItems={navItems} />}
        </>
    );
}
