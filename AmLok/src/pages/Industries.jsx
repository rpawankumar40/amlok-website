import SectionHeading from '../components/common/SectionHeading';
import IndustryCard from '../components/industries/IndustryCard';
import { industryCards } from '../data/industriesData';

export default function Industries() {
  return (
    <div className="page-content">
      <section className="page-banner">
        <div className="container narrow">
          <SectionHeading
            eyebrow="Industries"
            title="Sector expertise shaped by complex business realities"
            text="We help regulated and growth-oriented organizations modernize operations with technology strategies tailored to their market and delivery demands."
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container industry-showcase-list">
          {industryCards.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </section>
    </div>
  );
}
