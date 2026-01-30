export type ArticleCategory = "All" | "Health" | "Wellbeing" | "Lifestyle" | "Wellness" | "Product Updates" | "Supplementation" | "Data & Diagnostics";

export interface Article {
  id: number;
  documentId: string;
  slug: string;
  category: Exclude<ArticleCategory, "All">;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  content?: string; // Markdown content (was ContentBlock[] before migration)
  metaDescription?: string;
  introQuestion?: string;
  tags?: string[];
}

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'quote' | 'image';
  level?: number;
  format?: 'ordered' | 'unordered';
  children?: ContentChild[];
}

export interface ContentChild {
  type: 'text' | 'list-item';
  text?: string;
  children?: ContentChild[];
}

// Strapi API response types
export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: T;
  meta: {};
}

export interface StrapiArticle {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: ContentBlock[]; // Legacy blocks format (deprecated)
  markdownContent?: string; // New markdown content field
  category: string;
  tags: string[];
  author: string;
  publishedDate: string;
  readTime: string;
  metaDescription: string;
  introQuestion: string;
  image?: {
    url: string;
    alternativeText?: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
