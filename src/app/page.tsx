import ClientPage from "./ClientPage"
import type { Metadata } from "next"
import { baseMetadata } from "@/lib/metadata"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Ali - Full Stack Developer",
  description:
    "Personal portfolio of Ali, a dedicated Full-Stack Developer on a journey of continuous learning and growth.",
}

export default function HomePage() {
  return <ClientPage />
}
