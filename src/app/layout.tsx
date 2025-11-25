import BackToTop from "@/components/back-to-top";
import Footer from "@/components/footer";
import MouseTrailer from "@/components/mouse-trailer";
import Navbar from "@/components/navbar";
import ScrollProgress from "@/components/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import { baseMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import type React from "react";
import "../styles/globals.css";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={outfit.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange={false}
                >
                    <div className="min-h-screen bg-zinc-950 text-white transition-colors duration-300">
                        <MouseTrailer />
                        <ScrollProgress />
                        <Navbar />
                        <main className="relative z-10">
                           {children}
                        </main>
                        <BackToTop />
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}