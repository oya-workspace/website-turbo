import { useQuery } from "@tanstack/react-query";
import type {
  Article,
  StrapiResponse,
  StrapiSingleResponse,
  StrapiArticle,
  ArticleCategory,
} from "../pages/Learn/types";

const CMS_URL = "http://localhost:1337";

// Query keys for cache management
export const articleKeys = {
  all: ["articles"] as const,
  bySlug: (slug: string) => ["articles", "slug", slug] as const,
  byId: (id: number) => ["articles", "id", id] as const,
};

/**
 * Transform Strapi article to frontend Article format
 */
function transformArticle(strapiArticle: StrapiArticle): Article {
  const imageUrl = strapiArticle.image?.url
    ? `${CMS_URL}${strapiArticle.image.url}`
    : "/assets/img/learn/default.jpg";

  const date = strapiArticle.publishedDate
    ? new Date(strapiArticle.publishedDate).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  return {
    id: strapiArticle.id,
    documentId: strapiArticle.documentId,
    slug: strapiArticle.slug,
    title: strapiArticle.title,
    excerpt: strapiArticle.excerpt || "",
    category: strapiArticle.category as Exclude<ArticleCategory, "All">,
    date,
    author: strapiArticle.author || "Oya.Health Team",
    image: imageUrl,
    readTime: strapiArticle.readTime || "5 min read",
    // Use new markdownContent field, fallback to empty string
    content: strapiArticle.markdownContent || "",
    metaDescription: strapiArticle.metaDescription,
    introQuestion: strapiArticle.introQuestion,
    tags: strapiArticle.tags,
  };
}

/**
 * Fetch all articles from CMS
 */
async function fetchArticles(): Promise<Article[]> {
  const response = await fetch(
    `${CMS_URL}/api/articles?populate=image&sort=publishedDate:desc`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${response.status}`);
  }

  const data: StrapiResponse<StrapiArticle> = await response.json();
  return data.data.map(transformArticle);
}

/**
 * Fetch a single article by slug
 */
async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  const response = await fetch(
    `${CMS_URL}/api/articles?filters[slug][$eq]=${slug}&populate=image`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch article: ${response.status}`);
  }

  const data: StrapiResponse<StrapiArticle> = await response.json();

  if (data.data.length === 0) {
    return null;
  }

  return transformArticle(data.data[0]);
}

/**
 * Fetch a single article by ID
 */
async function fetchArticleById(id: number): Promise<Article | null> {
  const response = await fetch(`${CMS_URL}/api/articles/${id}?populate=image`);

  if (!response.ok) {
    throw new Error(`Failed to fetch article: ${response.status}`);
  }

  const data: StrapiSingleResponse<StrapiArticle> = await response.json();
  return transformArticle(data.data);
}

// React Query Hooks

/**
 * Hook to fetch all articles
 */
export function useArticles() {
  return useQuery({
    queryKey: articleKeys.all,
    queryFn: fetchArticles,
  });
}

/**
 * Hook to fetch a single article by slug
 */
export function useArticle(slug: string) {
  return useQuery({
    queryKey: articleKeys.bySlug(slug),
    queryFn: () => fetchArticleBySlug(slug),
    enabled: !!slug,
  });
}

/**
 * Hook to fetch a single article by ID
 */
export function useArticleById(id: number) {
  return useQuery({
    queryKey: articleKeys.byId(id),
    queryFn: () => fetchArticleById(id),
    enabled: !!id,
  });
}
