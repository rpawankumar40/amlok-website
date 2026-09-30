import SectionHeading from '../components/common/SectionHeading';
import { jobs } from '../data/siteData';

const careerLookItems = [
  {
    title: 'Positive attitude',
    text: 'Bring an optimistic, constructive approach to challenges and contribute positively to the team and workplace.',
  },
  {
    title: 'Excellent team player',
    text: 'Collaborate effectively, respect different perspectives, and contribute to shared team and client goals.',
  },
  {
    title: 'Learn and grow',
    text: 'Stay curious, embrace new challenges, and continuously develop both technical and professional skills.',
  },
  {
    title: 'Self motivated individuals',
    text: 'Take initiative, work independently when needed, and stay focused on delivering meaningful results.',
  },
  {
    title: 'Work ethics',
    text: 'Demonstrate integrity, accountability, professionalism, and respect in every interaction and responsibility.',
  },
  {
    title: 'Knowledge and capabilities',
    text: 'Apply strong technical knowledge, practical capabilities, and sound problem-solving skills to real-world challenges.',
  },
  {
    title: 'Continuous learning',
    text: 'Keep learning as technology evolves and actively build expertise across modern platforms, tools, and practices.',
  },
];

function CareerLookCarousel() {
  return (
    <div className="career-look-carousel">
      {careerLookItems.map((_, index) => (
        <input
          key={`career-look-control-${index}`}
          className="career-look-radio"
          type="radio"
          name="career-look"
          id={`career-look-${index}`}
          defaultChecked={index === 0}
        />
      ))}

      <div className="career-look-track-window">
        <div className="career-look-track">
          {careerLookItems.map((item, index) => (
            <article className="career-look-card" key={item.title}>
              <span className="career-look-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="career-look-controls">
        <div className="career-look-progress" aria-hidden="true">
          {careerLookItems.map((_, index) => (
            <span key={`career-look-progress-${index}`} className={`career-look-progress-item progress-${index}`}>
              {String(index + 1).padStart(2, '0')}
            </span>
          ))}
          <span> / {String(careerLookItems.length).padStart(2, '0')}</span>
        </div>

        <div className="career-look-arrows">
          {careerLookItems.map((_, index) => (
            <span className="career-look-arrow-set" key={`career-look-arrows-${index}`}>
              <label
                className={`career-look-arrow career-look-prev prev-${index}`}
                htmlFor={`career-look-${index - 1 < 0 ? 0 : index - 1}`}
                aria-label="Previous qualities we look for"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </label>

              <label
                className={`career-look-arrow career-look-next next-${index}`}
                htmlFor={`career-look-${index + 1 >= careerLookItems.length ? index : index + 1}`}
                aria-label="Next qualities we look for"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </label>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Careers() {
  return (
    <div className="page-content">
      <section className="page-banner">
        <div className="container narrow">
          <SectionHeading
            eyebrow="Careers"
            title="Join a team building the next generation of enterprise technology"
            text="We believe great engineering comes from thoughtful people, collaborative delivery, and continuous learning."
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container split-layout">
          <div>
            <SectionHeading eyebrow="Why Work With Us" title="An engineering-first culture with room to grow" />
          </div>
          <div>
            <ul className="check-list">
              <li>Learning and development investment</li>
              <li>Collaborative, high-trust engineering environment</li>
              <li>Clear career growth and mentoring paths</li>
              <li>Exposure to modern platforms, cloud, AI, and product delivery</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="career-look-section" aria-labelledby="career-look-title">
        <div className="container career-look-layout">
          <div className="career-look-intro">
            <span className="career-look-eyebrow">What we look for?</span>
            <h2 id="career-look-title">People who turn ideas into meaningful technology.</h2>
            <p>
              We look for curious, accountable, collaborative professionals who enjoy solving
              complex problems and growing with modern enterprise technology.
            </p>
          </div>

          <CareerLookCarousel />
        </div>
      </section>

      <section className="page-section muted-section">
        <div className="container">
          <SectionHeading eyebrow="Open Positions" title="Current opportunities" />
          <div className="job-list">
            {jobs.map((job) => (
              <div className="job-card" key={job.title}>
                <div>
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span>{job.experience}</span>
                    <span>{job.location}</span>
                    <span>{job.tech}</span>
                  </div>
                </div>
                <button type="button" className="btn btn-primary small-btn">Apply</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
