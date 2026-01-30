import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import FeaturedArticle from "./components/FeaturedArticle";
import ArticleCard from "./components/ArticleCard";
import { useArticles } from "../../api/articles";
import { ArticleCardSkeleton } from "@twosteps/ui/article-card-skeleton";
import type { ArticleCategory } from "./types";

const categories: ArticleCategory[] = [
  "All",
  "Health",
  "Wellness",
  "Wellbeing",
  "Lifestyle",
  "Supplementation",
  "Data & Diagnostics",
];

export default function LearnPage() {
  const { data: articles = [], isLoading, error } = useArticles();
  const [activeCategory, setActiveCategory] = useState<ArticleCategory>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" || article.category === activeCategory;
      const matchesSearch = article.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [articles, activeCategory, searchTerm]);

  const featuredArticle = filteredArticles[0];
  const latestArticles = filteredArticles.slice(1);

  return (
    <>
      <section
        className="learn-hero"
        style={{ backgroundImage: 'url("/assets/img/learn/bg-learn.png")' }}
      >
        <div className="container">
          <h1 className="text-[#2B2B2B]">Blog</h1>
          <p className="lead mt-4">
            Your biology has a story, and it is worth understanding.
          </p>
          <p className="lead">
            The OYA.health Learning portal will guide you to living in sync with your body's design through emotional decoding to meet longevity.
          </p>
          <a href="https://form.typeform.com/to/FUJjZtpw" className="get-started-btn">
            Get Started
            <img src="/assets/img/partner/line-arrow-right.svg" />
          </a>
        </div>
      </section>

      <section className="learn-filters">
        <div className="container filters-row">
          <div className="learn-tabs">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={category === activeCategory ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <label className="learn-search">
            <span className="sr-only">Search articles</span>
            <input
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <i className="fa fa-search" aria-hidden="true"></i>
          </label>
        </div>
      </section>

      {isLoading ? (
        <>
          {/* Featured skeleton */}
          <section className="learn-featured">
            <div className="container">
              <h2 className="featured-heading">Featured Article</h2>
              <div className="featured-article-skeleton animate-pulse bg-[#E8D5C4] rounded-2xl h-[400px]" />
            </div>
          </section>

          {/* Grid skeleton */}
          <section className="learn-latest mt-5">
            <div className="container">
              <h2 className="featured-heading">Latest</h2>
              <div className="latest-grid">
                {[...Array(6)].map((_, i) => (
                  <ArticleCardSkeleton key={i} />
                ))}
              </div>
            </div>
          </section>
        </>
      ) : error ? (
        <section className="learn-error">
          <div className="container text-center py-5">
            <p className="text-danger">Failed to load articles. Please try again later.</p>
            <button
              className="btn btn-outline-secondary mt-3"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </section>
      ) : (
        <>
          {featuredArticle && (
            <section className="learn-featured">
              <div className="container">
                <h2 className="featured-heading">Featured Article</h2>
                <Link
                  to={`/learn/${featuredArticle.slug}`}
                  className="featured-article-link"
                >
                  <FeaturedArticle key={featuredArticle.id} article={featuredArticle} />
                </Link>
              </div>
            </section>
          )}

          <section className="learn-latest mt-5">
            <div className="container">
              <h2 className="featured-heading">Latest</h2>
              {latestArticles.length > 0 ? (
                <div className="latest-grid">
                  {latestArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <p className="empty-state">
                  No articles match your filters yet. Try a different tab or
                  clear the search field.
                </p>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
}
