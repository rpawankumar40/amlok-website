import SectionHeading from '../components/common/SectionHeading';
import { insights } from '../data/siteData';

export default function Insights() {
  return (
    <div className="page-content">
      <section className="page-banner">
        <div className="container narrow">
          <SectionHeading
            eyebrow="Insights"
            title="Perspective for leaders navigating technology change"
            text="Explore practical thinking on digital transformation, software engineering, cloud strategy, data modernization, and AI adoption."
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container card-grid article-grid">
          {insights.map((article) => (
            <article className="info-card article-card" key={article.title}>
              <span className="article-tag">{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <button type="button" className="text-link">Read more</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
