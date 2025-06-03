export const projects = [
  {
    slug: "modern-ecommerce-platform",
    title: "Modern E-commerce Platform",
    description: "A comprehensive e-commerce solution with advanced features and seamless user experience.",
    shortDescription: "Full-stack e-commerce platform with React, Node.js, and MongoDB.",
    category: "Web App",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    image: "/modern-ecommerce-website.png",
    images: ["/placeholder.svg?key=uq0lv", "/ecommerce-product-page.png", "/placeholder.svg?key=fb4p1"],
    featured: true,
    completedAt: "2023-12-15",
    client: "RetailNext",
    role: "Full-Stack Developer",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/username/ecommerce",
    content: `
      <h2>Project Overview</h2>
      <p>This modern e-commerce platform provides businesses with a complete solution for selling products online. The platform includes product management, user authentication, shopping cart functionality, payment processing, and order management.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Responsive design for all devices</li>
        <li>User authentication and profiles</li>
        <li>Product catalog with categories and filters</li>
        <li>Shopping cart and wishlist</li>
        <li>Secure checkout with Stripe integration</li>
        <li>Order tracking and history</li>
        <li>Admin dashboard for product and order management</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>The frontend is built with React and uses Redux for state management. The backend is powered by Node.js and Express, with MongoDB as the database. The application uses JWT for authentication and Stripe for payment processing.</p>
      
      <h3>Challenges and Solutions</h3>
      <p>One of the main challenges was implementing a real-time inventory system that could handle multiple concurrent users. This was solved by implementing a queue-based system with Socket.io to manage inventory updates and prevent overselling.</p>
    `,
  },
  {
    slug: "task-management-app",
    title: "Task Management Application",
    description:
      "A collaborative task management tool for teams to organize, track, and complete projects efficiently.",
    shortDescription: "Team-focused task management app with real-time updates.",
    category: "Web App",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    image: "/task-management-app.png",
    images: ["/task-management-dashboard.png", "/placeholder.svg?key=2bhz0", "/placeholder.svg?key=igcb7"],
    featured: true,
    completedAt: "2023-09-20",
    client: "ProductivityPro",
    role: "Frontend Developer",
    liveUrl: "https://example.com/taskapp",
    githubUrl: "https://github.com/username/taskapp",
    content: `
      <h2>Project Overview</h2>
      <p>This task management application helps teams organize their work, track progress, and collaborate effectively. It provides a visual interface for managing tasks across different stages of completion.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Kanban board for visual task management</li>
        <li>Real-time updates and collaboration</li>
        <li>Task assignments, due dates, and priorities</li>
        <li>File attachments and comments</li>
        <li>Project and team management</li>
        <li>Customizable workflows</li>
        <li>Reporting and analytics</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>The application is built with React for the frontend, using Redux for state management. Firebase provides the backend services, including authentication, real-time database, and storage. Tailwind CSS is used for styling.</p>
      
      <h3>Challenges and Solutions</h3>
      <p>A significant challenge was implementing real-time synchronization across multiple users. Firebase's real-time database was leveraged to ensure all team members see the most current state of tasks and projects without conflicts.</p>
    `,
  },
  {
    slug: "fitness-tracking-mobile-app",
    title: "Fitness Tracking Mobile App",
    description:
      "A comprehensive fitness tracking application that helps users monitor workouts, nutrition, and progress.",
    shortDescription: "Mobile app for tracking workouts, nutrition, and fitness goals.",
    category: "Mobile App",
    technologies: ["React Native", "Node.js", "Express", "MongoDB", "Redux"],
    image: "/fitness-tracking-app.png",
    images: [
      "/fitness-app-dashboard.png",
      "/placeholder.svg?key=r5onp",
      "/placeholder.svg?key=fitnessapp3&height=600&width=800&query=nutrition%20tracking%20screen",
    ],
    featured: false,
    completedAt: "2023-07-10",
    client: "FitLife",
    role: "Mobile Developer",
    liveUrl: "https://example.com/fitnessapp",
    githubUrl: "https://github.com/username/fitnessapp",
    content: `
      <h2>Project Overview</h2>
      <p>This fitness tracking mobile application helps users maintain a healthy lifestyle by tracking workouts, nutrition, and progress. It provides personalized recommendations and insights based on user data.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Workout tracking with custom routines</li>
        <li>Nutrition logging and meal planning</li>
        <li>Progress tracking with charts and statistics</li>
        <li>Goal setting and achievement tracking</li>
        <li>Social sharing and community features</li>
        <li>Integration with fitness wearables</li>
        <li>Personalized recommendations</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>The application is built with React Native for cross-platform compatibility. The backend uses Node.js and Express with MongoDB for data storage. Redux manages the application state, and the app integrates with various fitness APIs.</p>
      
      <h3>Challenges and Solutions</h3>
      <p>A major challenge was ensuring accurate data synchronization between the mobile app and fitness wearables. This was addressed by implementing a robust API integration layer with error handling and data validation.</p>
    `,
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing professional work and skills.",
    shortDescription: "Personal portfolio website with modern design and animations.",
    category: "Website",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/placeholder.svg?key=portfolio&height=600&width=800&query=modern%20portfolio%20website",
    images: [
      "/placeholder.svg?key=portfolio1&height=600&width=800&query=portfolio%20homepage",
      "/placeholder.svg?key=portfolio2&height=600&width=800&query=portfolio%20projects%20section",
      "/placeholder.svg?key=portfolio3&height=600&width=800&query=portfolio%20contact%20section",
    ],
    featured: false,
    completedAt: "2023-05-15",
    client: "Personal Project",
    role: "Frontend Developer",
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/username/portfolio",
    content: `
      <h2>Project Overview</h2>
      <p>This portfolio website showcases professional work, skills, and experience in a modern, responsive design. It features smooth animations, interactive elements, and a clean, minimalist aesthetic.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Responsive design for all devices</li>
        <li>Smooth animations and transitions</li>
        <li>Project showcase with filtering</li>
        <li>Skills and experience sections</li>
        <li>Contact form with validation</li>
        <li>Blog section for articles</li>
        <li>Dark/light mode toggle</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>The website is built with Next.js for server-side rendering and optimal performance. Tailwind CSS provides the styling framework, while Framer Motion powers the animations. TypeScript ensures type safety throughout the codebase.</p>
      
      <h3>Challenges and Solutions</h3>
      <p>Balancing performance with rich animations was a challenge. This was addressed by implementing code splitting, lazy loading, and optimizing animations to run on the GPU for smoother performance.</p>
    `,
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard providing real-time weather data and forecasts for locations worldwide.",
    shortDescription: "Real-time weather dashboard with forecasts and historical data.",
    category: "Web App",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    image: "/placeholder.svg?key=weather&height=600&width=800&query=weather%20dashboard%20app",
    images: [
      "/placeholder.svg?key=weather1&height=600&width=800&query=weather%20dashboard%20main%20view",
      "/placeholder.svg?key=weather2&height=600&width=800&query=weather%20forecast%20charts",
      "/placeholder.svg?key=weather3&height=600&width=800&query=weather%20location%20search",
    ],
    featured: false,
    completedAt: "2023-03-05",
    client: "WeatherNow",
    role: "Frontend Developer",
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/username/weather",
    content: `
      <h2>Project Overview</h2>
      <p>This weather dashboard provides users with real-time weather data, forecasts, and historical information for locations worldwide. It features an intuitive interface with interactive charts and visualizations.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Current weather conditions</li>
        <li>5-day forecast with hourly breakdowns</li>
        <li>Historical weather data</li>
        <li>Interactive charts and graphs</li>
        <li>Location search and favorites</li>
        <li>Weather alerts and notifications</li>
        <li>Responsive design for all devices</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>The dashboard is built with React for the frontend, using Chart.js for data visualization. It integrates with the OpenWeather API for weather data and uses Tailwind CSS for styling.</p>
      
      <h3>Challenges and Solutions</h3>
      <p>Handling large amounts of weather data efficiently was a challenge. This was addressed by implementing data caching, pagination, and optimized rendering to ensure smooth performance even with extensive datasets.</p>
    `,
  },
  {
    slug: "recipe-sharing-platform",
    title: "Recipe Sharing Platform",
    description: "A community-driven platform for sharing, discovering, and saving recipes from around the world.",
    shortDescription: "Social platform for sharing and discovering recipes.",
    category: "Web App",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    image: "/placeholder.svg?key=recipe&height=600&width=800&query=recipe%20sharing%20platform",
    images: [
      "/placeholder.svg?key=recipe1&height=600&width=800&query=recipe%20homepage",
      "/placeholder.svg?key=recipe2&height=600&width=800&query=recipe%20detail%20page",
      "/placeholder.svg?key=recipe3&height=600&width=800&query=recipe%20creation%20form",
    ],
    featured: false,
    completedAt: "2023-01-20",
    client: "CookShare",
    role: "Full-Stack Developer",
    liveUrl: "https://example.com/recipes",
    githubUrl: "https://github.com/username/recipes",
    content: `
      <h2>Project Overview</h2>
      <p>This recipe sharing platform allows users to discover, share, and save recipes from around the world. It features a social component with user profiles, comments, ratings, and the ability to follow other users.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Recipe creation and sharing</li>
        <li>Search and filtering by ingredients, cuisine, etc.</li>
        <li>User profiles and collections</li>
        <li>Comments, ratings, and reviews</li>
        <li>Social features (follow, like, share)</li>
        <li>Meal planning and shopping lists</li>
        <li>Responsive design for all devices</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>The platform is built with Vue.js for the frontend, using Vuex for state management. Firebase provides the backend services, including authentication, database, and storage. Tailwind CSS is used for styling.</p>
      
      <h3>Challenges and Solutions</h3>
      <p>Managing user-generated content and ensuring quality was a challenge. This was addressed by implementing a moderation system, content guidelines, and user reputation scores to promote high-quality contributions.</p>
    `,
  },
]
