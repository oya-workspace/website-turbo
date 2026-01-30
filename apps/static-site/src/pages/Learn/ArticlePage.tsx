import { useParams, Link } from "react-router-dom";
import { useArticle } from "../../api/articles";
import { MarkdownRenderer } from "../../Components/markdown";
import "./article.css";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading, error } = useArticle(slug || "");

  if (isLoading) {
    return (
      <div className="article-page">
        <div className="container text-center py-5">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="article-page">
        <div className="container text-center py-5">
          <h1 className="text-2xl mb-4">Error Loading Article</h1>
          <p className="text-muted mb-4">Failed to load the article. Please try again.</p>
          <Link to="/learn" className="btn-back-to-blog">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="article-page">
        <div className="container text-center py-5">
          <h1 className="text-2xl mb-4">Article Not Found</h1>
          <p className="text-muted mb-4">The article you're looking for doesn't exist.</p>
          <Link to="/learn" className="btn-back-to-blog">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="article-page">
      {/* Hero Section */}
      <section
        className="article-hero"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="article-hero-overlay">
          <div className="container">
            <Link to="/learn" className="article-back-link">
              ← Back to Blog
            </Link>
            <span className="article-category-pill">{article.category}</span>
            <h1 className="article-title">{article.title}</h1>
            <div className="article-meta">
              <img src="/assets/img/favicon.ico" width={24} height={24} alt="" />
              <span>{article.author}</span>
              <span className="meta-separator">•</span>
              <span>{article.date}</span>
              <span className="meta-separator">•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="article-content-section">
        <div className="container">
          <article className="article-body">
            {/* Intro Question */}
            {article.introQuestion && (
              <p className="article-intro-question">{article.introQuestion}</p>
            )}

            {/* Excerpt as lead paragraph */}
            {article.excerpt && (
              <p className="article-lead">{article.excerpt}</p>
            )}

            {/* Main Content - Markdown with custom directives */}
            <div className="article-content">
              <MarkdownRenderer content={article.content || ''} />
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="article-tags">
                <span className="tags-label">Topics:</span>
                {article.tags.map((tag, index) => (
                  <span key={index} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>

          {/* Back to Blog CTA */}
          <div className="article-footer">
            <Link to="/learn" className="btn-back-to-blog">
              ← Explore More Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
