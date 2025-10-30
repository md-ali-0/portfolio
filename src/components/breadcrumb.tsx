"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Import react-icons
import {
    SiGithub,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiRedis,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";

const iconSet = [
    {
        icon: <SiNextdotjs />,
        label: "Next.js",
        left: "80%",
        bottom: "20%",
        rotate: "10deg",
    },
    {
        icon: <SiTypescript />,
        label: "TypeScript",
        left: "55%",
        bottom: "0%",
        rotate: "-20deg",
    },
    {
        icon: <SiTailwindcss />,
        label: "Tailwind",
        left: "70%",
        top: "45%",
        rotate: "15deg",
    },
    {
        icon: <SiNodedotjs />,
        label: "Node.js",
        left: "62%",
        bottom: "10%",
        rotate: "-10deg",
    },
    {
        icon: <SiPostgresql />,
        label: "PostgreSQL",
        left: "82%",
        top: "25%",
        rotate: "-25deg",
    },
    {
        icon: <SiMongodb />,
        label: "MongoDB",
        left: "88%",
        bottom: "0%",
        rotate: "12deg",
    },
    {
        icon: <SiRedis />,
        label: "Redis",
        left: "72%",
        bottom: "7%",
        rotate: "-18deg",
    },
    {
        icon: <SiGithub />,
        label: "GitHub",
        left: "90%",
        top: "35%",
        rotate: "-12deg",
    },
];

type BreadcrumbItem = {
    name: string;
    href: string;
};

interface BreadcrumbProps {
    title?: string;
    description?: string;
}

export default function Breadcrumb({ title, description }: BreadcrumbProps) {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const breadcrumbs: BreadcrumbItem[] = [];
    breadcrumbs.push({ name: "Home", href: "/" });

    const pathSegments = pathname.split("/").filter((segment) => segment);
    pathSegments.forEach((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        let name = segment.charAt(0).toUpperCase() + segment.slice(1);
        if (segment === "[slug]") name = "Details";
        breadcrumbs.push({ name, href });
    });

    // Determine title and description based on pathname if not provided
    const pageTitle = title || breadcrumbs[breadcrumbs.length - 1]?.name || "Page";
    const pageDescription = description || 
        (pathname.includes("/skills") && "Explore my technical skills and expertise") ||
        (pathname.includes("/projects") && "Browse my portfolio of projects") ||
        (pathname.includes("/blog") && "Read my latest articles and tutorials") ||
        (pathname.includes("/about") && "Learn more about my background and experience") ||
        (pathname.includes("/contact") && "Get in touch with me for collaborations") ||
        "Navigate through the website";

    return (
        <section className="flex items-center overflow-hidden bg-gradient-to-l from-gray-800/10 via-emerald-500/10 to-gray-900/10">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="flex items-center container mx-auto px-4 sm:px-6 relative z-10 min-h-[285px]">
                <div className="flex flex-col w-full">
                    <div className="pr-8 max-w-2xl">
                        <h1 className="mb-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
                            {pageTitle}
                        </h1>

                        <p className="mb-6 text-base md:text-lg text-zinc-400 max-w-xl text-pretty">
                            {pageDescription}
                        </p>

                        <nav
                            aria-label="breadcrumb"
                            className="flex items-center space-x-2 flex-wrap"
                        >
                            {breadcrumbs.map((breadcrumb, index) => (
                                <div
                                    key={breadcrumb.href}
                                    className="flex items-center mb-2"
                                >
                                    {index > 0 && (
                                        <ChevronRight className="w-4 h-4 text-zinc-600 mx-2" />
                                    )}
                                    {index === breadcrumbs.length - 1 ? (
                                        <span className="px-3 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium transition-all duration-300 whitespace-nowrap">
                                            {breadcrumb.name}
                                        </span>
                                    ) : (
                                        <Link
                                            href={breadcrumb.href}
                                            className="px-3 py-0.5 rounded-lg text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-300 font-medium flex items-center gap-1 whitespace-nowrap"
                                        >
                                            {index === 0 && (
                                                <Home className="w-4 h-4" />
                                            )}
                                            <span>{breadcrumb.name}</span>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
                    {iconSet.map((item, i) => (
                        <div
                            key={i}
                            className={`absolute opacity-0 transition-opacity duration-1000 ${
                                mounted ? "opacity-70" : ""
                            }`}
                            style={{
                                left: item.left,
                                top: item.top,
                                bottom: item.bottom,
                                transform: `translate(-50%, -50%) rotate(${item.rotate})`,
                            }}
                        >
                            <div
                                className={`p-1.5 md:p-3 rounded-2xl 
                                            bg-gradient-to-br from-emerald-600/10 to-emerald-500/15 
                                            backdrop-blur-sm 
                                            border border-emerald-600/20 
                                            shadow-2xl 
                                            flex items-center justify-center
                                            group
                                            `}
                            >
                                <div className="text-white text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}