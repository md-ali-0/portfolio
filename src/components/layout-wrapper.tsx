"use client"

import type { ReactNode } from "react"
import { useTheme } from "next-themes"
import Navbar from "./navbar"
import Footer from "./footer"
import MouseTrailer from "./mouse-trailer"
import PageTransition from "./page-transition"
import ScrollProgress from "./scroll-progress"
import BackToTop from "./back-to-top"
import RippleEffect from "./ripple-effect"
import DarkPatternBackground from "./dark-pattern-background"
import LightPatternBackground from "./light-pattern-background"
import { useMobile } from "@/hooks/use-mobile"

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const isMobile = useMobile()
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {isDarkTheme ? <DarkPatternBackground /> : <LightPatternBackground />}
      {!isMobile && <MouseTrailer />}
      {!isMobile && <RippleEffect />}
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <main className="pt-16">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  )
}
