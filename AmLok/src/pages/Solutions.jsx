import SectionHeading from '../components/common/SectionHeading';
import SolutionCard from '../components/solutions/SolutionCard';
import { solutions } from '../data/siteData';

export default function Solutions() {
  return (
    <div className="page-content">
      <section className="page-banner">
        <div className="container narrow">
          <SectionHeading
            eyebrow="Solutions"
            title="Purpose-built solutions for digital momentum and operational resilience"
            text="Our solution portfolios combine platform strategy, engineering excellence, and measurable business outcomes across strategic growth areas."
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container card-grid solution-grid">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} solution={solution} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
