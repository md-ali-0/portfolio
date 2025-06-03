import BackToTop from "@/components/back-to-top";
import Footer from "@/components/footer";
import MouseTrailer from "@/components/mouse-trailer";
import Navbar from "@/components/navbar";
import PageTransition from "@/components/page-transition";
import ScrollProgress from "@/components/scroll-progress";
import ThemeBackground from "@/components/theme-background";
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
                    <ClientLayout>{children}</ClientLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}

// Client component to handle client-side features
function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
            <ThemeBackground />
            <MouseTrailer />
            <ScrollProgress />
            <BackToTop />
            <Navbar />
            <main className="pt-16 relative z-10">
                <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
        </div>
    );
}
