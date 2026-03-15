import { Category } from "./Category";

export interface Post {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  featuredImage: string | null
  published: boolean
  authorId: string
  categoryId: string
  tags: string[]
  commentsCount: number
  viewCount: number
  shareCount: number
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  category: Category | string | null
  author: Author
}

export interface Author {
  id: string
  name: string
  email: string
  avatar?: string | null
  title?: string | null
}
