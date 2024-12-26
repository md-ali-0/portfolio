"use client";

import logo from "@/assets/logo/Ali.png";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, House, Menu, Phone, Rss, SquareChartGantt, UserRound, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/", icon: <House className="mr-1" /> },
        { name: "Projects", path: "/projects", icon: <SquareChartGantt className="mr-1" /> },
        { name: "Skills", path: "/skills", icon: <BrainCircuit className="mr-1" /> },
        { name: "Blogs", path: "/blogs", icon: <Rss className="mr-1" /> },
        { name: "About", path: "/about", icon: <UserRound className="mr-1" /> },
        { name: "Contact", path: "/contact", icon: <Phone className="mr-1" /> },
    ];

    return (
        <motion.header
            className="sticky top-0 w-full z-50 bg-background/90 backdrop-blur-lg"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="container mx-auto px-4 py-3.5">
                <div className="flex justify-between items-center">
                    <Link href="/" className="z-50">
                        <Image
                            className="size-10"
                            width={50}
                            height={50}
                            src={logo.src}
                            alt="Logo"
                        />
                    </Link>
                    <div className="hidden md:flex space-x-2">
                        {navItems.map((item) => (
                            <Button
                                key={item.name}
                                variant="ghost"
                                className={`text-foreground hover:text-primary transition-colors duration-200 text-[16px] ${
                                    pathname === item.path
                                        ? "bg-[#1C1E20] text-accent-foreground"
                                        : ""
                                }`}
                                asChild
                            >
                                <Link href={item.path}>
                                    {item.icon}
                                    {item.name}
                                </Link>
                            </Button>
                        ))}
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden z-50"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="size-8" />
                        ) : (
                            <Menu className="size-8" />
                        )}
                    </Button>
                </div>
            </nav>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`fixed top-0 left-0 w-full h-screen bg-background/90 backdrop-blur-lg md:hidden p-4 ${
                        isOpen
                            ? "flex flex-col items-center justify-center"
                            : "hidden"
                    }`}
                >
                    {navItems.map((item) => (
                        <Button
                            key={item.name}
                            variant="ghost"
                            className={`text-foreground hover:text-primary transition-colors duration-200 mb-4 md:w-full ${
                                pathname === item.path
                                    ? "bg-accent text-accent-foreground"
                                    : ""
                            }`}
                            asChild
                            onClick={() => setIsOpen(false)}
                        >
                            <Link href={item.path} className="text-lg">
                                {item.icon}
                                {item.name}
                            </Link>
                        </Button>
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.header>
    );
}
