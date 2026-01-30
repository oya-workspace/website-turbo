import type { Article } from "../types";

interface FeaturedArticleProps {
  article: Article;
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <article className="featured-article-card">
      <div className="featured-article-card__media">
        <img key={article.id} src={article.image} alt={article.title} />
      </div>
      <div className="featured-article-card__body">
        <p className="article-pill">{article.category}</p>
        <h3 className="article-title">{article.title}</h3>
        <p className="article-excerpt">{article.excerpt}</p>
        <div className="article-meta">
          <span className="article-meta-by"><img src="/assets/img/favicon.ico" width={20} height={20} alt="" /></span>
          <span>{article.author}</span>
          <span>{article.date}</span>
        </div>
      </div>
    </article>
  );
}

