export type Project = {
    thumbnail: string | null;
    id: string;
    title: string;
    slug: string;
    content: string;
    authorId: string;
    images: Image[] | null;
    liveUrl: string | null;
    SourceFront: string | null;
    SourceBack: string | null;
    StartDate: Date;
    EndDate: Date | null;
    category: string;
    languages: string[];
    technologies: string[];
    metaTitle: string | null;
    metaDesc: string | null;
    metaKey: string | null;
    createdAt: Date;
    updatedAt: Date;
};

export interface Image {
    id: string; // Unique identifier
    url: string; // Image URL
    projectId?: string | null; // Nullable foreign key for the Project model
    project?: Project | null; // Optional relation to the Project object
    createdAt: Date; // Timestamp when the record was created
    updatedAt: Date; // Timestamp when the record was last updated
  }
  