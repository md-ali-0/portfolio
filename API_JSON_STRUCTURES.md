# API JSON Structures

## Authentication

### Login Request
```json
{
  "email": "admin@example.com",
  "password": "your_password"
}
```

### Login Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60f7b3b3d3a5a80015f3b3d3",
    "name": "Admin User",
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

### Register Request
```json
{
  "name": "New Admin",
  "email": "newadmin@example.com",
  "password": "secure_password",
  "role": "admin"
}
```

### Register Response
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "60f7b3b3d3a5a80015f3b3d4",
    "name": "New Admin",
    "email": "newadmin@example.com",
    "role": "admin"
  }
}
```

## Resume

### Upload Resume Response
```json
{
  "message": "Resume uploaded successfully",
  "resume": {
    "id": "60f7b3b3d3a5a80015f3b3d5",
    "filename": "resume.pdf",
    "originalName": "My Resume.pdf",
    "path": "/uploads/resume.pdf",
    "size": 123456,
    "uploadedAt": "2023-07-21T10:30:00Z"
  }
}
```

### Get Resume Response
```json
{
  "id": "60f7b3b3d3a5a80015f3b3d5",
  "filename": "resume.pdf",
  "originalName": "My Resume.pdf",
  "path": "/uploads/resume.pdf",
  "size": 123456,
  "uploadedAt": "2023-07-21T10:30:00Z"
}
```

## About Section

### Get About Information Response
```json
{
  "id": "60f7b3b3d3a5a80015f3b3d6",
  "title": "About Me",
  "content": "<p>Hello! I'm a passionate full-stack developer...</p>",
  "image": "/uploads/about-image.jpg",
  "skills": [
    {
      "name": "JavaScript",
      "level": 90,
      "category": "Frontend"
    },
    {
      "name": "Node.js",
      "level": 85,
      "category": "Backend"
    }
  ]
}
```

### Update About Information Request
```json
{
  "title": "About Me",
  "content": "<p>Updated content...</p>",
  "skills": [
    {
      "name": "JavaScript",
      "level": 95,
      "category": "Frontend"
    }
  ]
}
```

### Update About Information Response
```json
{
  "message": "About information updated successfully",
  "about": {
    "id": "60f7b3b3d3a5a80015f3b3d6",
    "title": "About Me",
    "content": "<p>Updated content...</p>",
    "skills": [
      {
        "name": "JavaScript",
        "level": 95,
        "category": "Frontend"
      }
    ]
  }
}
```

### Upload About Image Response
```json
{
  "message": "Image uploaded successfully",
  "image": "/uploads/about-image-new.jpg"
}
```

## Blog

### Get All Blog Posts Response
```json
{
  "posts": [
    {
      "id": "60f7b3b3d3a5a80015f3b3d7",
      "slug": "getting-started-with-nextjs",
      "title": "Getting Started with Next.js",
      "excerpt": "Learn the basics of Next.js...",
      "content": "<p>Next.js is a powerful React framework...</p>",
      "category": "Web Development",
      "tags": ["Next.js", "React", "JavaScript"],
      "author": {
        "id": "60f7b3b3d3a5a80015f3b3d8",
        "name": "Ali",
        "email": "ali@example.com"
      },
      "featured": true,
      "published": true,
      "coverImage": "/uploads/blog/nextjs-cover.jpg",
      "readTime": 8,
      "likes": 42,
      "comments": 12,
      "createdAt": "2023-07-21T10:30:00Z",
      "updatedAt": "2023-07-21T10:30:00Z"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalPosts": 45,
    "perPage": 10
  }
}
```

### Get Blog Post by Slug Response
```json
{
  "id": "60f7b3b3d3a5a80015f3b3d7",
  "slug": "getting-started-with-nextjs",
  "title": "Getting Started with Next.js",
  "excerpt": "Learn the basics of Next.js...",
  "content": "<p>Next.js is a powerful React framework...</p>",
  "category": "Web Development",
  "tags": ["Next.js", "React", "JavaScript"],
  "author": {
    "id": "60f7b3b3d3a5a80015f3b3d8",
    "name": "Ali",
    "email": "ali@example.com"
  },
  "featured": true,
  "published": true,
  "coverImage": "/uploads/blog/nextjs-cover.jpg",
  "readTime": 8,
  "likes": 42,
  "comments": [
    {
      "id": "60f7b3b3d3a5a80015f3b3d9",
      "author": "John Doe",
      "content": "Great article!",
      "createdAt": "2023-07-22T10:30:00Z"
    }
  ],
  "createdAt": "2023-07-21T10:30:00Z",
  "updatedAt": "2023-07-21T10:30:00Z"
}
```

### Create Blog Post Request
```json
{
  "title": "New Blog Post",
  "excerpt": "Short description",
  "content": "<p>Full content...</p>",
  "category": "Web Development",
  "tags": ["React", "JavaScript"],
  "featured": false,
  "published": true
}
```

### Create Blog Post Response
```json
{
  "message": "Blog post created successfully",
  "post": {
    "id": "60f7b3b3d3a5a80015f3b3da",
    "slug": "new-blog-post",
    "title": "New Blog Post",
    "excerpt": "Short description",
    "content": "<p>Full content...</p>",
    "category": "Web Development",
    "tags": ["React", "JavaScript"],
    "author": {
      "id": "60f7b3b3d3a5a80015f3b3d8",
      "name": "Ali",
      "email": "ali@example.com"
    },
    "featured": false,
    "published": true,
    "readTime": 5,
    "likes": 0,
    "comments": 0,
    "createdAt": "2023-07-21T10:30:00Z",
    "updatedAt": "2023-07-21T10:30:00Z"
  }
}
```

### Update Blog Post Request
```json
{
  "title": "Updated Blog Post",
  "content": "<p>Updated content...</p>",
  "featured": true
}
```

### Update Blog Post Response
```json
{
  "message": "Blog post updated successfully",
  "post": {
    "id": "60f7b3b3d3a5a80015f3b3da",
    "slug": "new-blog-post",
    "title": "Updated Blog Post",
    "excerpt": "Short description",
    "content": "<p>Updated content...</p>",
    "category": "Web Development",
    "tags": ["React", "JavaScript"],
    "author": {
      "id": "60f7b3b3d3a5a80015f3b3d8",
      "name": "Ali",
      "email": "ali@example.com"
    },
    "featured": true,
    "published": true,
    "readTime": 5,
    "likes": 0,
    "comments": 0,
    "createdAt": "2023-07-21T10:30:00Z",
    "updatedAt": "2023-07-21T11:30:00Z"
  }
}
```

### Delete Blog Post Response
```json
{
  "message": "Blog post deleted successfully"
}
```

### Upload Blog Cover Image Response
```json
{
  "message": "Cover image uploaded successfully",
  "imageUrl": "/uploads/blog/new-cover.jpg"
}
```

### Add Comment to Blog Post Request
```json
{
  "author": "John Doe",
  "content": "Great article!"
}
```

### Add Comment to Blog Post Response
```json
{
  "message": "Comment added successfully",
  "comment": {
    "id": "60f7b3b3d3a5a80015f3b3db",
    "author": "John Doe",
    "content": "Great article!",
    "createdAt": "2023-07-21T10:30:00Z"
  }
}
```

### Like Blog Post Response
```json
{
  "message": "Post liked successfully",
  "likes": 43
}
```

## Projects

### Get All Projects Response
```json
{
  "projects": [
    {
      "id": "60f7b3b3d3a5a80015f3b3dc",
      "slug": "ecommerce-platform",
      "title": "E-commerce Platform",
      "description": "Full-stack e-commerce solution",
      "shortDescription": "E-commerce platform with React and Node.js",
      "category": "Web App",
      "technologies": ["React", "Node.js", "MongoDB"],
      "images": ["/uploads/projects/ecommerce1.jpg", "/uploads/projects/ecommerce2.jpg"],
      "featured": true,
      "completedAt": "2023-06-15T00:00:00Z",
      "client": "RetailCorp",
      "role": "Full-Stack Developer",
      "liveUrl": "https://example.com",
      "githubUrls": [
        {
          "name": "Frontend",
          "url": "https://github.com/user/ecommerce-frontend"
        }
      ],
      "createdAt": "2023-07-21T10:30:00Z",
      "updatedAt": "2023-07-21T10:30:00Z"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 3,
    "totalProjects": 25,
    "perPage": 10
  }
}
```

### Get Project by Slug Response
```json
{
  "id": "60f7b3b3d3a5a80015f3b3dc",
  "slug": "ecommerce-platform",
  "title": "E-commerce Platform",
  "description": "Full-stack e-commerce solution",
  "shortDescription": "E-commerce platform with React and Node.js",
  "content": "<p>Detailed project description...</p>",
  "category": "Web App",
  "technologies": ["React", "Node.js", "MongoDB"],
  "images": ["/uploads/projects/ecommerce1.jpg", "/uploads/projects/ecommerce2.jpg"],
  "featured": true,
  "completedAt": "2023-06-15T00:00:00Z",
  "client": "RetailCorp",
  "role": "Full-Stack Developer",
  "liveUrl": "https://example.com",
  "githubUrls": [
    {
      "name": "Frontend",
      "url": "https://github.com/user/ecommerce-frontend"
    }
  ],
  "createdAt": "2023-07-21T10:30:00Z",
  "updatedAt": "2023-07-21T10:30:00Z"
}
```

### Create Project Request
```json
{
  "title": "New Project",
  "description": "Project description",
  "shortDescription": "Short description",
  "category": "Web App",
  "technologies": ["React", "Node.js"],
  "featured": false,
  "completedAt": "2023-07-20T00:00:00Z",
  "client": "Client Name",
  "role": "Developer Role",
  "liveUrl": "https://example.com",
  "githubUrls": [
    {
      "name": "Frontend",
      "url": "https://github.com/user/project-frontend"
    }
  ]
}
```

### Create Project Response
```json
{
  "message": "Project created successfully",
  "project": {
    "id": "60f7b3b3d3a5a80015f3b3dd",
    "slug": "new-project",
    "title": "New Project",
    "description": "Project description",
    "shortDescription": "Short description",
    "category": "Web App",
    "technologies": ["React", "Node.js"],
    "featured": false,
    "completedAt": "2023-07-20T00:00:00Z",
    "client": "Client Name",
    "role": "Developer Role",
    "liveUrl": "https://example.com",
    "githubUrls": [
      {
        "name": "Frontend",
        "url": "https://github.com/user/project-frontend"
      }
    ],
    "createdAt": "2023-07-21T10:30:00Z",
    "updatedAt": "2023-07-21T10:30:00Z"
  }
}
```

### Update Project Request
```json
{
  "title": "Updated Project",
  "description": "Updated description"
}
```

### Update Project Response
```json
{
  "message": "Project updated successfully",
  "project": {
    "id": "60f7b3b3d3a5a80015f3b3dd",
    "slug": "new-project",
    "title": "Updated Project",
    "description": "Updated description",
    "shortDescription": "Short description",
    "category": "Web App",
    "technologies": ["React", "Node.js"],
    "featured": false,
    "completedAt": "2023-07-20T00:00:00Z",
    "client": "Client Name",
    "role": "Developer Role",
    "liveUrl": "https://example.com",
    "githubUrls": [
      {
        "name": "Frontend",
        "url": "https://github.com/user/project-frontend"
      }
    ],
    "createdAt": "2023-07-21T10:30:00Z",
    "updatedAt": "2023-07-21T11:30:00Z"
  }
}
```

### Delete Project Response
```json
{
  "message": "Project deleted successfully"
}
```

### Upload Project Images Response
```json
{
  "message": "Images uploaded successfully",
  "images": ["/uploads/projects/project1.jpg", "/uploads/projects/project2.jpg"]
}
```

## Skills

### Get All Skills Response
```json
{
  "skills": [
    {
      "id": "60f7b3b3d3a5a80015f3b3de",
      "name": "JavaScript",
      "level": 90,
      "category": "Frontend",
      "icon": "js-icon",
      "createdAt": "2023-07-21T10:30:00Z",
      "updatedAt": "2023-07-21T10:30:00Z"
    }
  ]
}
```

### Create Skill Request
```json
{
  "name": "TypeScript",
  "level": 85,
  "category": "Frontend",
  "icon": "ts-icon"
}
```

### Create Skill Response
```json
{
  "message": "Skill created successfully",
  "skill": {
    "id": "60f7b3b3d3a5a80015f3b3df",
    "name": "TypeScript",
    "level": 85,
    "category": "Frontend",
    "icon": "ts-icon",
    "createdAt": "2023-07-21T10:30:00Z",
    "updatedAt": "2023-07-21T10:30:00Z"
  }
}
```

### Update Skill Request
```json
{
  "level": 90
}
```

### Update Skill Response
```json
{
  "message": "Skill updated successfully",
  "skill": {
    "id": "60f7b3b3d3a5a80015f3b3df",
    "name": "TypeScript",
    "level": 90,
    "category": "Frontend",
    "icon": "ts-icon",
    "createdAt": "2023-07-21T10:30:00Z",
    "updatedAt": "2023-07-21T11:30:00Z"
  }
}
```

### Delete Skill Response
```json
{
  "message": "Skill deleted successfully"
}
```

## Categories

### Get All Blog Categories Response
```json
{
  "categories": [
    {
      "id": "60f7b3b3d3a5a80015f3b3e0",
      "name": "Web Development",
      "postCount": 15,
      "createdAt": "2023-07-21T10:30:00Z"
    }
  ]
}
```

### Get All Project Categories Response
```json
{
  "categories": [
    {
      "id": "60f7b3b3d3a5a80015f3b3e1",
      "name": "Web App",
      "projectCount": 10,
      "createdAt": "2023-07-21T10:30:00Z"
    }
  ]
}
```

### Create Category Request
```json
{
  "name": "Mobile App",
  "type": "projects"
}
```

### Create Category Response
```json
{
  "message": "Category created successfully",
  "category": {
    "id": "60f7b3b3d3a5a80015f3b3e2",
    "name": "Mobile App",
    "type": "projects",
    "createdAt": "2023-07-21T10:30:00Z"
  }
}
```

### Delete Category Response
```json
{
  "message": "Category deleted successfully"
}
```

## Contact

### Get Contact Messages Response
```json
{
  "messages": [
    {
      "id": "60f7b3b3d3a5a80015f3b3e3",
      "name": "John Doe",
      "email": "john@example.com",
      "subject": "Project Inquiry",
      "message": "I'd like to discuss a project...",
      "read": false,
      "createdAt": "2023-07-21T10:30:00Z"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 2,
    "totalMessages": 15,
    "perPage": 10
  }
}
```

### Mark Message as Read Response
```json
{
  "message": "Message marked as read",
  "messageData": {
    "id": "60f7b3b3d3a5a80015f3b3e3",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I'd like to discuss a project...",
    "read": true,
    "createdAt": "2023-07-21T10:30:00Z"
  }
}
```

### Delete Contact Message Response
```json
{
  "message": "Message deleted successfully"
}
```

## Social Links

### Get All Social Links Response
```json
{
  "socialLinks": [
    {
      "id": "60f7b3b3d3a5a80015f3b3e4",
      "name": "GitHub",
      "url": "https://github.com/username",
      "icon": "github",
      "order": 1,
      "createdAt": "2023-07-21T10:30:00Z",
      "updatedAt": "2023-07-21T10:30:00Z"
    }
  ]
}
```

### Create Social Link Request
```json
{
  "name": "LinkedIn",
  "url": "https://linkedin.com/in/username",
  "icon": "linkedin",
  "order": 2
}
```

### Create Social Link Response
```json
{
  "message": "Social link created successfully",
  "socialLink": {
    "id": "60f7b3b3d3a5a80015f3b3e5",
    "name": "LinkedIn",
    "url": "https://linkedin.com/in/username",
    "icon": "linkedin",
    "order": 2,
    "createdAt": "2023-07-21T10:30:00Z",
    "updatedAt": "2023-07-21T10:30:00Z"
  }
}
```

### Update Social Link Request
```json
{
  "order": 3
}
```

### Update Social Link Response
```json
{
  "message": "Social link updated successfully",
  "socialLink": {
    "id": "60f7b3b3d3a5a80015f3b3e5",
    "name": "LinkedIn",
    "url": "https://linkedin.com/in/username",
    "icon": "linkedin",
    "order": 3,
    "createdAt": "2023-07-21T10:30:00Z",
    "updatedAt": "2023-07-21T11:30:00Z"
  }
}
```

### Delete Social Link Response
```json
{
  "message": "Social link deleted successfully"
}
```

## Statistics

### Get Dashboard Statistics Response
```json
{
  "stats": {
    "totalBlogPosts": 45,
    "totalProjects": 25,
    "totalSkills": 15,
    "totalContactMessages": 150,
    "unreadMessages": 12,
    "totalLikes": 1250,
    "totalComments": 340
  }
}
```

## Error Responses

### 400 Bad Request
```json
{
  "error": "Validation failed",
  "details": [
    {
      "field": "title",
      "message": "Title is required"
    }
  ]
}
```

### 401 Unauthorized
```json
{
  "error": "Unauthorized access"
}
```

### 403 Forbidden
```json
{
  "error": "Access forbidden"
}
```

### 404 Not Found
```json
{
  "error": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error"
}
```

## Data Models

### User
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "password": "string (hashed)",
  "role": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
```

### BlogPost
```json
{
  "id": "string",
  "slug": "string",
  "title": "string",
  "excerpt": "string",
  "content": "string (HTML)",
  "category": "string",
  "tags": ["string"],
  "author": "User",
  "featured": "boolean",
  "published": "boolean",
  "coverImage": "string (URL)",
  "readTime": "number (minutes)",
  "likes": "number",
  "comments": "array of Comment",
  "createdAt": "date",
  "updatedAt": "date"
}
```

### Project
```json
{
  "id": "string",
  "slug": "string",
  "title": "string",
  "description": "string",
  "shortDescription": "string",
  "content": "string (HTML)",
  "category": "string",
  "technologies": ["string"],
  "images": ["string (URLs)"],
  "featured": "boolean",
  "completedAt": "date",
  "client": "string",
  "role": "string",
  "liveUrl": "string",
  "githubUrls": [
    {
      "name": "string",
      "url": "string"
    }
  ],
  "createdAt": "date",
  "updatedAt": "date"
}
```

### Skill
```json
{
  "id": "string",
  "name": "string",
  "level": "number (0-100)",
  "category": "string",
  "icon": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
```

### Category
```json
{
  "id": "string",
  "name": "string",
  "type": "string",
  "createdAt": "date"
}
```

### ContactMessage
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string",
  "read": "boolean",
  "createdAt": "date"
}
```

### SocialLink
```json
{
  "id": "string",
  "name": "string",
  "url": "string",
  "icon": "string",
  "order": "number",
  "createdAt": "date",
  "updatedAt": "date"
}
```

### Resume
```json
{
  "id": "string",
  "filename": "string",
  "originalName": "string",
  "path": "string",
  "size": "number",
  "uploadedAt": "date"
}
```

## Environment Variables
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/portfolio

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d

# File Upload
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=10000000

# CORS
CLIENT_URL=http://localhost:3000

# Email (for contact form)
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```