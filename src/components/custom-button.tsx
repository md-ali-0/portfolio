"use client";

import type React from "react";

import { Button as NextButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef, useState, type ReactNode } from "react";

interface RippleProps {
    x: number;
    y: number;
    size: number;
}

interface ButtonProps {
    children: ReactNode;
    className?: string;
    variant?: "default" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    onClick?: () => void;
    dataCursor?: string;
    dataCursorText?: string;
    glowEffect?: boolean;
    animatedBorder?: boolean;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    className,
    variant = "default",
    size = "default",
    onClick,
    dataCursor = "button",
    dataCursorText,
    glowEffect = false, // Disabled by default for performance
    animatedBorder = false, // Disabled by default for performance
    disabled = false,
    type = "button",
}: ButtonProps) {
    const [ripples, setRipples] = useState<RippleProps[]>([]);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current || disabled) return;

        const button = buttonRef.current;
        const rect = button.getBoundingClientRect();

        // Calculate ripple position relative to button
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate ripple size (should be larger than the button for full effect)
        const size = Math.max(rect.width, rect.height) * 2.5;

        // Add new ripple
        const newRipple = {
            x,
            y,
            size,
        };

        setRipples([...ripples, newRipple]);

        // Remove ripple after animation completes
        setTimeout(() => {
            setRipples((prevRipples) =>
                prevRipples.filter((ripple) => ripple !== newRipple)
            );
        }, 600); // Reduced animation time for better performance

        // Call the original onClick handler if provided
        if (onClick) onClick();
    };

    // Determine base styles based on variant
    const getBaseStyles = () => {
        if (variant === "default") {
            return "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black";
        }
        if (variant === "outline") {
            return "bg-transparent border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10";
        }
        if (variant === "ghost") {
            return "bg-transparent hover:bg-emerald-500/10 text-emerald-400";
        }
        return "";
    };

    const baseClassName = cn(
        "relative overflow-hidden transition-all duration-200", // Reduced transition duration
        getBaseStyles(),
        disabled && "opacity-50 cursor-not-allowed",
        className
    );

    return (
        <div className="relative">
            {/* Button content */}
            <NextButton
                ref={buttonRef}
                variant={variant as any}
                size={size}
                className={baseClassName}
                onClick={handleClick}
                data-cursor={dataCursor}
                data-cursor-text={dataCursorText}
                disabled={disabled}
                type={type}
            >
                {/* Simplified ripple effects */}
                {ripples.map((ripple, i) => (
                    <span
                        key={i}
                        className="absolute rounded-full bg-white/20 pointer-events-none"
                        style={{
                            left: ripple.x,
                            top: ripple.y,
                            width: `${ripple.size}px`,
                            height: `${ripple.size}px`,
                            transform: "translate(-50%, -50%) scale(0)",
                            animation: "ripple 0.6s ease-out forwards", // Simplified animation
                        }}
                    />
                ))}

                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center">
                    {children}
                </span>
            </NextButton>
        </div>
    );
}
