import { Link } from "react-router-dom";
import type { Article } from "../types";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="latest-article-card">
      <div className="latest-article-card__media">
        <img src={article.image} alt={article.title} />
      </div>

      <div className="latest-article-card__body">
        <span>{article.category}</span>
        <h3>{article.title}</h3>
      </div>

      <div className="latest-article-card__footer">
        <Link to={`/learn/${article.slug}`} className="btn-read-more">
          Read More
        </Link>
      </div>
    </article>
  );
}
