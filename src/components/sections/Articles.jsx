import { articles } from "../../data/data";

export default function Articles() {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="section-padding" id="articles" aria-label="Articles">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="editorial-section-header">
          <div className="editorial-header-top">
            <span className="editorial-index">PUBLICATIONS & ARTICLES</span>
            <span className="editorial-tag">Technical Writing</span>
          </div>
          <h2 className="editorial-title">Articles.</h2>
          <p className="editorial-subtitle">
            In-depth technical writing, architectural deep-dives, and open-source tooling shared with the engineering community.
          </p>
        </div>

        {/* Articles Grid / Showcase */}
        <div className="articles-showcase">
          {articles.map((article, index) => (
            <article className="article-card" key={article.url || index}>
              {/* Media Preview Column */}
              <div className="article-media-col">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-media-link"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="article-cover-img"
                    loading="lazy"
                    onError={(e) => {
                      if (article.fallbackImage && e.currentTarget.src !== article.fallbackImage) {
                        e.currentTarget.src = article.fallbackImage;
                      }
                    }}
                  />
                  <div className="article-media-overlay">
                    <span className="article-media-badge">
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H5.34v4.36h1.24c.38 0 .66-.08.84-.24.18-.16.27-.45.27-.88v-2.13c0-.43-.09-.72-.27-.88zM2 6v12h20V6H2zm6.75 6.2c0 .66-.2 1.18-.6 1.54-.4.37-.99.55-1.77.55H4.1V9.71h2.28c.78 0 1.37.18 1.77.55.4.37.6.88.6 1.54v.4zm3.65-2.49h-1.8v4.58h1.8v-4.58zm6.5 0h-2.18l-1.33 3.32-1.33-3.32h-2.18l2.36 5.89h2.3l2.36-5.89z" />
                      </svg>
                      {article.platform}
                    </span>
                  </div>
                </a>
              </div>

              {/* Content Details Column */}
              <div className="article-content-col">
                {/* Meta info bar */}
                <div className="article-meta-bar">
                  <span className="article-source-tag">
                    <span className="article-source-dot" />
                    {article.platform}
                  </span>
                  <span className="article-meta-divider">/</span>
                  <span className="article-meta-item">{article.date}</span>
                  <span className="article-meta-divider">/</span>
                  <span className="article-meta-item">{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="article-title">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-title-link"
                  >
                    {article.title}
                  </a>
                </h3>

                {/* Subtitle / Hook */}
                {article.subtitle && (
                  <p className="article-subtitle">{article.subtitle}</p>
                )}

                {/* Short Description */}
                <p className="article-description">{article.description}</p>

                {/* Tags */}
                {article.tags && article.tags.length > 0 && (
                  <div className="article-tags-wrap">
                    {article.tags.map((tag) => (
                      <span className="article-tag-pill" key={tag}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Card Action / Link Button */}
                <div className="article-actions">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-read-btn"
                    aria-label={`Read full article: ${article.title}`}
                  >
                    <span>Read Full Article</span>
                    <span className="article-btn-arrow" aria-hidden="true">↗</span>
                  </a>
                  <span className="article-direct-url">
                    dev.to ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
