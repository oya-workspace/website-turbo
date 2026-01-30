import ReactMarkdown, { type Components } from "react-markdown";

// Custom directive block components
interface BlockProps {
  children: React.ReactNode;
}

interface QuoteBlockProps extends BlockProps {
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

function HighlightBlock({ children }: BlockProps) {
  return <div className="md-highlight-block">{children}</div>;
}

function CenterBlock({ children }: BlockProps) {
  return <div className="md-center-block">{children}</div>;
}

function StatementBlock({ children }: BlockProps) {
  return <div className="md-statement-block">{children}</div>;
}

// Base markdown components for react-markdown
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
    return (
      <figure className="md-figure">
        <img src={src} alt={alt || ""} className="md-image" loading="lazy" />
      </figure>
    );
  },
};

/**
 * Parse custom directives (:::directive) and split content into renderable elements
 */
function parseCustomDirectives(content: string): React.ReactNode[] {
  const elements: React.ReactNode[] = [];
  const lines = content.split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Check for :::quote directive
    if (line?.startsWith(":::quote")) {
      const startIdx = i + 1;
      let endIdx = startIdx;
      while (endIdx < lines.length && !lines[endIdx]?.startsWith(":::")) {
        endIdx++;
      }

      const directiveContent = lines.slice(startIdx, endIdx).join("\n").trim();
      const contentLines = directiveContent.split("\n");
      const authorLine = contentLines.find((l) => l.trim().startsWith("—"));
      const quoteLines = contentLines.filter(
        (l) => !l.trim().startsWith("—") && l.trim() !== ""
      );

      elements.push(
        <QuoteBlock key={`quote-${i}`} author={authorLine?.trim()}>
          {quoteLines.map((line, idx) => (
            <p key={idx} className="quote-line">
              {line.trim()}
            </p>
          ))}
        </QuoteBlock>
      );

      i = endIdx + 1;
      continue;
    }

    // Check for :::highlight directive
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

    // Check for :::center directive
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

    // Check for :::statement directive
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

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * Renders markdown content with support for custom directives:
 * - :::center - Centered text block
 * - :::quote - Styled quote block with optional author
 * - :::statement - Bold statement/callout
 * - :::highlight - Highlighted content block
 */
export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  if (!content) return null;

  const elements = parseCustomDirectives(content);

  return (
    <div className={className}>
      {elements}
    </div>
  );
}

export default MarkdownRenderer;
