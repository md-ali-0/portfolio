import type { Metadata } from "next"

// Base metadata that will be used across the site
export const baseMetadata: Metadata = {
  metadataBase: new URL("https://md-ali.vercel.app"),
  title: {
    default: "Ali - Full Stack Developer",
    template: "%s | Ali - Full Stack Developer",
  },
  description:
    "Personal portfolio of Ali, a dedicated Full-Stack Developer on a journey of continuous learning and growth.",
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Ali", url: "https://md-ali.vercel.app" }],
  creator: "Ali",
  publisher: "Ali",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://md-ali.vercel.app",
    siteName: "Ali - Full Stack Developer",
    title: "Ali - Full Stack Developer",
    description:
      "Personal portfolio of Ali, a dedicated Full-Stack Developer on a journey of continuous learning and growth.",
    images: [
      {
        url: "https://md-ali.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ali - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali - Full Stack Developer",
    description:
      "Personal portfolio of Ali, a dedicated Full-Stack Developer on a journey of continuous learning and growth.",
    images: ["https://md-ali.vercel.app/og-image.jpg"],
    creator: "@alidev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
  },
}

// Generate metadata for blog posts
export function generateBlogMetadata(post: any): Metadata {
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [...post.tags, "blog", "article", post.category],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://md-ali.vercel.app/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage || "https://md-ali.vercel.app/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage || "https://md-ali.vercel.app/og-image.jpg"],
    },
  }
}

// Generate metadata for project pages
export function generateProjectMetadata(project: any): Metadata {
  return {
    title: project.title,
    description: project.description,
    keywords: [...project.technologies, "project", "portfolio", project.category],
    openGraph: {
      type: "website",
      title: project.title,
      description: project.description,
      url: `https://md-ali.vercel.app/projects/${project.slug}`,
      images: [
        {
          url: project.image || "https://md-ali.vercel.app/og-image.jpg",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image || "https://md-ali.vercel.app/og-image.jpg"],
    },
  }
}

// Generate JSON-LD structured data for blog posts
export function generateBlogJsonLd(post: any) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage || "https://md-ali.vercel.app/og-image.jpg",
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: "https://md-ali.vercel.app",
    },
    publisher: {
      "@type": "Person",
      name: "Ali",
      logo: {
        "@type": "ImageObject",
        url: "https://md-ali.vercel.app/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://md-ali.vercel.app/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  }
}

// Generate JSON-LD structured data for project pages
export function generateProjectJsonLd(project: any) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: project.image || "https://md-ali.vercel.app/og-image.jpg",
    datePublished: project.completedAt,
    author: {
      "@type": "Person",
      name: "Ali",
      url: "https://md-ali.vercel.app",
    },
    creator: {
      "@type": "Person",
      name: "Ali",
    },
    keywords: project.technologies.join(", "),
  }
}

// Generate JSON-LD structured data for the person/portfolio owner
export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ali",
    jobTitle: "Full-Stack Developer",
    url: "https://md-ali.vercel.app",
    sameAs: ["https://github.com/username", "https://linkedin.com/in/username", "https://twitter.com/username"],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    image: "https://md-ali.vercel.app/professional-developer-portrait.png",
    description:
      "A dedicated Full-Stack Developer on a journey of continuous learning and growth, creating impactful projects with creativity and expertise.",
  }
}
