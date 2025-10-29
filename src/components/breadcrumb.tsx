"use client";

import FloatingIcons from "@/components/floating-icons";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type BreadcrumbItem = {
    name: string;
    href: string;
};

export default function Breadcrumb() {
    const pathname = usePathname();

    // Generate breadcrumb items based on the current path
    const breadcrumbs: BreadcrumbItem[] = [];

    // Add home breadcrumb
    breadcrumbs.push({ name: "Home", href: "/" });

    // Split the pathname and generate breadcrumbs
    const pathSegments = pathname.split("/").filter((segment) => segment);

    pathSegments.forEach((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        let name = segment.charAt(0).toUpperCase() + segment.slice(1);

        // Special handling for dynamic routes
        if (segment === "[slug]") {
            name = "Details";
        }

        breadcrumbs.push({ name, href });
    });

    return (
        <section className="relative min-h-[285px] flex items-center overflow-hidden bg-gradient-to-l from-gray-800/10 via-emerald-500/10 to-gray-900/10">
            {/* Background pattern */}
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

            {/* Floating icons - contained within the container */}

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex items-center justify-between h-full">
                    {/* Content on the left side */}
                    <div className="w-2/3 pr-8">
                        {/* Title */}
                        <h1 className="mb-3 text-4xl md:text-5xl font-bold tracking-tight text-white">
                            {breadcrumbs[breadcrumbs.length - 1]?.name ||
                                "Page"}
                        </h1>

                        {/* Subtitle */}
                        <p className="mb-6 text-base md:text-lg text-zinc-400 max-w-xl">
                            {pathname.includes("/skills") &&
                                "Explore my technical skills and expertise"}
                            {pathname.includes("/projects") &&
                                "Browse my portfolio of projects"}
                            {pathname.includes("/blog") &&
                                "Read my latest articles and tutorials"}
                            {!pathname.includes("/skills") &&
                                !pathname.includes("/projects") &&
                                !pathname.includes("/blog") &&
                                "Navigate through the website"}
                        </p>

                        {/* Breadcrumb Navigation */}
                        <nav
                            aria-label="breadcrumb"
                            className="flex items-center space-x-2"
                        >
                            {breadcrumbs.map((breadcrumb, index) => (
                                <div
                                    key={breadcrumb.href}
                                    className="flex items-center"
                                >
                                    {index > 0 && (
                                        <ChevronRight className="w-4 h-4 text-zinc-600 mx-2" />
                                    )}
                                    {index === breadcrumbs.length - 1 ? (
                                        <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 font-medium">
                                            {breadcrumb.name}
                                        </span>
                                    ) : (
                                        <Link
                                            href={breadcrumb.href}
                                            className="px-3 py-1.5 rounded-lg text-zinc-400 hover:text-emerald-400 transition-colors font-medium flex items-center gap-1"
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

                    {/* Empty space on the right */}
                    <FloatingIcons />
                </div>
            </div>
        </section>
    );
}
