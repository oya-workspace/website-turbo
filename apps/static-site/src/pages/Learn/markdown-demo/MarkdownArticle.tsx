import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown, { type Components } from "react-markdown";
import { Badge } from "@twosteps/ui/badge";
import { Breadcrumb } from "@twosteps/ui/breadcrumb";
import "../article.css";
import "./markdown-article.css";

// Import the markdown file as raw text
import blogContent from "./blog1.md?raw";

// Import images
import imageMain from "./images/image1.svg";
import womanImg from "./images/image2.svg";
import frame1 from "./images/image3.svg";
import frame2 from "./images/image4.svg";
import frame3 from "./images/image5.svg";

const imageMap: Record<string, string> = {
  "./images/image1.svg": imageMain,
  "./images/image2.svg": womanImg,
  "./images/image3.svg": frame1,
  "./images/image4.svg": frame2,
  "./images/image5.svg": frame3,
};

// Article metadata (could come from frontmatter in the future)
const articleMeta = {
  title: "Peptides: The Molecule That Might Be Rewriting Your Biology",
  category: "Supplementation",
  subcategory: "HEALTH",
  author: "Oya.Health Team",
  date: "October 21, 2025",
  readTime: "12 min read",
  heroImage: "/assets/img/learn/featured-article.png",
  introQuestion: "What if the molecule isn't the problem—your biology is?",
  excerpt:
    "Peptides are having their cultural wave—weight-loss heroes, anti-aging secrets, metabolic fixers. But beneath the hype is a reality that never trends: peptides don't create new biology. They communicate with the biology you already have.",
  tags: ["Peptides", "Physiology", "GLP-1", "Metabolism", "Wellness"],
};

// Social share URLs
function getShareUrls() {
  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(articleMeta.title);

  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareTitle}`,
  };
}

interface QuoteBlockProps {
  children: React.ReactNode;
  author?: string;
}

function QuoteBlock({ children, author }: QuoteBlockProps) {
  return (
    <div className="md-quote-block">
      <div className="md-quote-content">
        {children}
        {author && <p className="md-quote-author">{author}</p>}
      </div>
    </div>
  );
}

function HighlightBlock({ children }: { children: React.ReactNode }) {
  return <div className="md-highlight-block">{children}</div>;
}

function CenterBlock({ children }: { children: React.ReactNode }) {
  return <div className="md-center-block">{children}</div>;
}

function StatementBlock({ children }: { children: React.ReactNode }) {
  return <div className="md-statement-block">{children}</div>;
}

// Custom markdown components
const markdownComponents: Components = {
  h2: ({ children }) => <h2 className="article-heading">{children}</h2>,
  h3: ({ children }) => <h3 className="article-heading">{children}</h3>,
  p: ({ children }) => <p className="article-paragraph">{children}</p>,
  ul: ({ children }) => <ul className="article-list">{children}</ul>,
  ol: ({ children }) => <ol className="article-list">{children}</ol>,
  li: ({ children }) => <li>{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="article-quote">{children}</blockquote>
  ),
  hr: () => <hr className="md-divider" />,
  strong: ({ children }) => <strong>{children}</strong>,
  img: ({ src, alt }) => {
    const resolvedSrc = src && imageMap[src] ? imageMap[src] : src;
    return (
      <figure className="md-figure">
        <img src={resolvedSrc} alt={alt || ""} className="md-image" />
      </figure>
    );
  },
};

// Custom component to parse and render custom directives
function parseCustomDirectives(content: string): React.ReactNode[] {
  const elements: React.ReactNode[] = [];
  const lines = content.split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Check for custom directive start
    if (line?.startsWith(":::quote")) {
      const startIdx = i + 1;
      let endIdx = startIdx;
      while (endIdx < lines.length && !lines[endIdx]?.startsWith(":::")) {
        endIdx++;
      }

      const directiveContent = lines.slice(startIdx, endIdx).join("\n").trim();
      const contentLines = directiveContent.split("\n");
      const authorLine = contentLines.find((l) => l.trim().startsWith("—"));
      const quoteLines = contentLines
        .filter((l) => !l.trim().startsWith("—") && l.trim() !== "");

      elements.push(
        <QuoteBlock key={`quote-${i}`} author={authorLine?.trim()}>
          {quoteLines.map((line, idx) => (
            <p key={idx} className="quote-line">{line.trim()}</p>
          ))}
        </QuoteBlock>
      );

      i = endIdx + 1;
      continue;
    }

    if (line?.startsWith(":::highlight")) {
      const startIdx = i + 1;
      let endIdx = startIdx;
      while (endIdx < lines.length && !lines[endIdx]?.startsWith(":::")) {
        endIdx++;
      }

      const directiveContent = lines.slice(startIdx, endIdx).join("\n").trim();

      elements.push(
        <HighlightBlock key={`highlight-${i}`}>
          <ReactMarkdown components={markdownComponents}>
            {directiveContent}
          </ReactMarkdown>
        </HighlightBlock>
      );

      i = endIdx + 1;
      continue;
    }

    if (line?.startsWith(":::center")) {
      const startIdx = i + 1;
      let endIdx = startIdx;
      while (endIdx < lines.length && !lines[endIdx]?.startsWith(":::")) {
        endIdx++;
      }

      const directiveContent = lines.slice(startIdx, endIdx).join("\n").trim();
      const centerLines = directiveContent
        .split("\n")
        .filter((l) => l.trim() !== "");

      elements.push(
        <CenterBlock key={`center-${i}`}>
          {centerLines.map((line, idx) => (
            <p key={idx} className="center-line">
              {line.trim()}
            </p>
          ))}
        </CenterBlock>
      );

      i = endIdx + 1;
      continue;
    }

    if (line?.startsWith(":::statement")) {
      const startIdx = i + 1;
      let endIdx = startIdx;
      while (endIdx < lines.length && !lines[endIdx]?.startsWith(":::")) {
        endIdx++;
      }

      const directiveContent = lines.slice(startIdx, endIdx).join("\n").trim();

      elements.push(
        <StatementBlock key={`statement-${i}`}>
          <ReactMarkdown components={markdownComponents}>
            {directiveContent}
          </ReactMarkdown>
        </StatementBlock>
      );

      i = endIdx + 1;
      continue;
    }

    // Regular markdown content - collect consecutive non-directive lines
    const startIdx = i;
    while (
      i < lines.length &&
      !lines[i]?.startsWith(":::quote") &&
      !lines[i]?.startsWith(":::highlight") &&
      !lines[i]?.startsWith(":::center") &&
      !lines[i]?.startsWith(":::statement")
    ) {
      i++;
    }

    const regularContent = lines.slice(startIdx, i).join("\n").trim();
    if (regularContent) {
      elements.push(
        <ReactMarkdown
          key={`content-${startIdx}`}
          components={markdownComponents}
        >
          {regularContent}
        </ReactMarkdown>
      );
    }
  }

  return elements;
}

export default function MarkdownArticle() {
  const [content, setContent] = useState<React.ReactNode[]>([]);
  const [shareUrls, setShareUrls] = useState({
    facebook: "",
    twitter: "",
    pinterest: "",
  });
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  useEffect(() => {
    const parsed = parseCustomDirectives(blogContent);
    setContent(parsed);
    setShareUrls(getShareUrls());
  }, []);

  return (
    <div className="article-page md:pt-[150px] pt-[50px]">
      {/* Split Header Section */}
      <header className="article-header-split">
        {/* Left Column - Content */}
        <div className="article-header-content">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "LEARN", href: "/learn" },
              { label: articleMeta.subcategory },
            ]}
          />

          {/* Category Badge */}
          <div className="article-header-badge">
            <Badge className="bg-white text-black font-light py-2">
              {articleMeta.category}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="article-title-large">{articleMeta.title}</h1>

          {/* Author Row */}
          <div className="article-author-row">
            <img src="/assets/img/learn/utils/Image.svg" alt="OYA Health" />
            <span className="author-name">{articleMeta.author}</span>
            <span className="author-separator">•</span>
            <span>{articleMeta.date}</span>
          </div>

          {/* Share Row */}
          <div className="article-share-row">
            <button
              type="button"
              className="share-label"
              onClick={handleCopyLink}
              aria-label="Copy link to clipboard"
            >
              <img src="/assets/img/learn/utils/Share.svg" alt="Share" />
              <span>{copied ? "Copied!" : "Share Post"}</span>
            </button>
            <span className="author-separator">•</span>
            <div className="social-icons">
              <a
                href={shareUrls.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
              >
                <img
                  src="/assets/img/learn/utils/facebook.svg"
                  alt="Facebook"
                />
              </a>
              <a
                href={shareUrls.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
              >
                <img src="/assets/img/learn/utils/x.svg" alt="X (Twitter)" />
              </a>
              <a
                href={shareUrls.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Pinterest"
              >
                <img
                  src="/assets/img/learn/utils/pinterest.svg"
                  alt="Pinterest"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Hero Image */}
        <div className="article-header-image">
          <img src={articleMeta.heroImage} alt={articleMeta.title} />
        </div>
      </header>

      {/* Article Content */}
      <section className="article-content-section">
        <div className="container">
          <article className="article-body">
            {/* Main Content - Markdown */}
            <div className="article-content">{content}</div>

            {/* Tags */}
            {articleMeta.tags && articleMeta.tags.length > 0 && (
              <div className="article-tags">
                <span className="tags-label">Topics:</span>
                {articleMeta.tags.map((tag, index) => (
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
