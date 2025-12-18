import { Category } from "./Category";

export interface Post {
  id: string
  title: string
  slug: string
  content: string
  excerpt: any
  featuredImage: any
  published: boolean
  authorId: string
  categoryId: string
  tags: string[]
  commentsCount: number
  viewCount: number
  shareCount: number
  createdAt: string
  updatedAt: string
  deletedAt: any
  category: Category
  author: Author
}

export interface Author {
  id: string
  name: string
  email: string
}
