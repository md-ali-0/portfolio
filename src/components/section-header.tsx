"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    highlight?: string;
    description?: string;
    className?: string;
    descriptionClassName?: string;
}

export default function SectionHeader({
    title,
    highlight,
    description,
    className,
    descriptionClassName,
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "relative flex flex-col md:flex-row md:items-center md:justify-center mb-12 text-center md:text-left gap-4",
                className
            )}
        >
            <div className="relative z-10 flex flex-col justify-center items-center gap-4">
                <div className="flex items-baseline gap-3">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-white relative">
                        {title}
                    </h2>

                    {highlight && (
                        <div className="relative">
                            <span className="text-2xl md:text-5xl font-medium text-emerald-400 relative">
                                {highlight}
                                <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                            </span>
                        </div>
                    )}
                </div>

                <div className="flex-1">
                    {description && (
                        <p
                            className={cn(
                                "text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed mt-2 text-center",
                                descriptionClassName
                            )}
                        >
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
