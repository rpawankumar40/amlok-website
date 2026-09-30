import { Link } from 'react-router-dom';

export default function IndustryCard({ industry }) {
  return (
    <article className="industry-showcase-card">
      <div className="industry-image">
        <img
          src={industry.image}
          alt={industry.imageAlt}
        />
      </div>

      <div className="industry-content">
        <div className="industry-title-row">
          <span className="industry-number" aria-label={`Industry ${industry.number}`}>
            {industry.number}
          </span>
          <h3>{industry.name}</h3>
        </div>
        <p className="industry-description">{industry.description}</p>

        <ul className="industry-capabilities" aria-label={`${industry.name} capabilities`}>
          {industry.capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>

        <Link to={industry.route} className="industry-cta">
          Explore Industry <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}