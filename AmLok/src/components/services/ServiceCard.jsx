import { Link } from 'react-router-dom';

export default function ServiceCard({ category }) {
  return (
    <article className="service-feature-card">
      <div className="card-visual">
        <img
          src={category.image}
          alt={category.imageAlt}
          className="card-visual-image"
        />
      </div>

      <h3>{category.title}</h3>
      <p className="service-card-description">{category.description}</p>

      <ul className="service-check-list">
        {category.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <Link to="/services" className="service-card-link">
        Explore Service <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
