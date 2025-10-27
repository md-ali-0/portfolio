export const blogPosts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js: A Beginner's Guide",
    excerpt: "Learn the basics of Next.js and build your first server-rendered React application.",
    category: "Web Development",
    date: "2024-01-20",
    readTime: 8,
    coverImage: "/placeholder.svg?key=nextjs",
    author: {
      name: "Ali",
      title: "Full-Stack Developer",
      avatar: "/profile-image.png",
      bio: "Passionate about building scalable and user-friendly web applications.",
    },
    tags: ["Next.js", "React", "JavaScript"],
    content: `
      <h2>Introduction</h2>
      <p>Next.js is a powerful React framework for building web applications. It offers server-side rendering, static site generation, and more.</p>
      <h3>Setting Up Your Environment</h3>
      <p>To get started, you'll need Node.js and npm or yarn installed. Then, create a new Next.js project:</p>
      <pre><code>npx create-next-app my-nextjs-app</code></pre>
    `,
    likes: 42,
    comments: 12,
    featured: true,
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS: From Zero to Hero",
    excerpt: "A comprehensive guide to using Tailwind CSS for styling your web projects efficiently.",
    category: "UI/UX Design",
    date: "2024-02-15",
    readTime: 12,
    coverImage: "/placeholder.svg?key=tailwindcss",
    author: {
      name: "Ali",
      title: "Full-Stack Developer",
      avatar: "/profile-image.png",
      bio: "Passionate about building scalable and user-friendly web applications.",
    },
    tags: ["Tailwind CSS", "CSS", "Frontend"],
    content: `
      <h2>Introduction</h2>
      <p>Tailwind CSS is a utility-first CSS framework that allows you to rapidly style your web applications.</p>
      <h3>Installation</h3>
      <p>Install Tailwind CSS using npm:</p>
      <pre><code>npm install -D tailwindcss postcss autoprefixer</code></pre>
    `,
    likes: 68,
    comments: 25,
    featured: false,
  },
  {
    slug: "best-practices-for-react-development",
    title: "Best Practices for React Development in 2024",
    excerpt: "Explore the latest best practices for writing clean, maintainable, and performant React code.",
    category: "Programming",
    date: "2024-03-01",
    readTime: 10,
    coverImage: "/placeholder.svg?key=react",
    author: {
      name: "Ali",
      title: "Full-Stack Developer",
      avatar: "/profile-image.png",
      bio: "Passionate about building scalable and user-friendly web applications.",
    },
    tags: ["React", "JavaScript", "Frontend"],
    content: `
      <h2>Introduction</h2>
      <p>React is a popular JavaScript library for building user interfaces. Following best practices ensures efficient development.</p>
      <h3>Component Structure</h3>
      <p>Organize your components into reusable and maintainable units.</p>
    `,
    likes: 55,
    comments: 18,
    featured: false,
  },
  {
    slug: "career-growth-for-developers",
    title: "Strategies for Career Growth as a Web Developer",
    excerpt: "Actionable tips and strategies to accelerate your career growth in the web development industry.",
    category: "Career",
    date: "2024-03-15",
    readTime: 7,
    coverImage: "/placeholder.svg?key=career",
    author: {
      name: "Ali",
      title: "Full-Stack Developer",
      avatar: "/profile-image.png",
      bio: "Passionate about building scalable and user-friendly web applications.",
    },
    tags: ["Career", "Development", "Web Development"],
    content: `
      <h2>Introduction</h2>
      <p>Career growth is essential for web developers. This article provides strategies to help you advance.</p>
      <h3>Continuous Learning</h3>
      <p>Stay updated with the latest technologies and trends.</p>
    `,
    likes: 32,
    comments: 8,
    featured: false,
  },
]
