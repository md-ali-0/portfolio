export interface Project {
    id: string;
    title: string;
    slug: string;
    content: string;
    thumbnail: string;
    authorId: string;
    liveUrl: string;
    SourceFront: string;
    SourceBack: string;
    StartDate: string;
    EndDate: string;
    technologies: string[];
    languages: string[];
    images: ProjectImage[];
    metaTitle: string;
    metaDesc: string;
    metaKey: string;
    deletedAt: any;
    createdAt: string;
    updatedAt: string;
}

export interface ProjectImage {
  id: string
  url: string
  projectId: string
  createdAt: string
  updatedAt: string
}
