import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/services/ServiceCard';
import { serviceCategories } from '../data/siteData';

export default function Services() {
  return (
    <div className="page-content">
      <section className="page-banner">
        <div className="container narrow">
          <SectionHeading
            eyebrow="Services"
            title="Comprehensive technology services for modern enterprises"
            text="AmLok helps organizations build resilient systems, optimize operations, and accelerate digital transformation with focused engineering capability."
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container services-list">
          {serviceCategories.map((category) => (
            <ServiceCard key={category.title} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
