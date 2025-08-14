import BackToTop from "@/components/back-to-top";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageTransition from "@/components/page-transition";
import RippleEffect from "@/components/ripple-effect";
import ScrollProgress from "@/components/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import { baseMetadata, generatePersonJsonLd } from "@/lib/metadata";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="canonical" href="https://md-ali.vercel.app" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(generatePersonJsonLd()),
                    }}
                />
            </head>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange={false}
                >
                    <div className="min-h-screen bg-zinc-950 text-white transition-colors duration-300">
                        <ScrollProgress />
                        <Navbar />
                        <main className="relative z-10">
                            <PageTransition>{children}</PageTransition>
                        </main>
                        <RippleEffect />
                        <BackToTop />
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
