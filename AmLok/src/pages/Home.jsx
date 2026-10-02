import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';
import HeroVisualCarousel from '../components/home/HeroVisualCarousel';
import HomeLogoMarquee from '../components/home/HomeLogoMarquee';
import {
  differentiators,
  industries,
  services,
  stats,
  transformationAreas,
} from '../data/siteData';
import DigitalTransformationVisual from '../components/home/DigitalTransformationVisual';
import { clientLogos, technologyLogos } from '../data/homeLogoData';
import heroVideoSrc from '../assets/videos/vid1.mp4'

function AnimatedCounter({ value, suffix, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const nextValue = Math.floor(progress * value);
      setCount(nextValue);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <div className="stat-item">
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <p>{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Enterprise IT Services</span>
            <h1>Engineering Digital Excellence for a Smarter Future</h1>
            <p>
              AmLok delivers innovative technology solutions, engineering expertise, and digital
              transformation services that help organizations build, modernize, and scale their businesses.
            </p>
            <div className="cta-row">
              <Link to="/services" className="btn btn-primary">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Talk to Our Experts
              </Link>
            </div>
            <div className="hero-metadata">
              <div>
                <strong>24/7</strong>
                <span>Delivery support</span>
              </div>
              <div>
                <strong>99.9%</strong>
                <span>Service reliability</span>
              </div>
            </div>
          </div>

          <div className="hero-visual hero-carousel-visual">
            <HeroVisualCarousel />
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeading
            eyebrow="Trusted Technology Partner"
            title="A long-term partner for enterprise technology evolution"
            text="We work with organizations to simplify complexity, build resilient systems, and accelerate digital results with execution discipline and engineering depth."
          />
        </div>
      </section>

      <section className="home-why-showcase">
        <div className="home-why-backdrop" aria-hidden="true" />
        <div className="container home-why-overlay">
          <div className="home-why-intro">
            <span className="eyebrow">Why AmLok</span>
            <h2>We build technology around trust, speed, and outcomes.</h2>
            <p>
              AmLok combines engineering discipline, customer focus, and modern technology
              to help organizations move from ideas to dependable business results.
            </p>
          </div>

          <div className="home-why-panel">
            <span className="home-why-panel-label">Why partner with AmLok</span>
            <h3>Technology that moves your business forward.</h3>
            <div className="home-why-points">
              {differentiators.map((item, index) => (
                <article className="home-why-point" key={item.title}>
                  <span className="home-why-point-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section muted-section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Services"
            title="Technology capabilities built for business impact"
          />
          <div className="card-grid service-grid">
            {services.map((service) => (
              <article className="info-card service-card" key={service.title}>
                <div className="icon-badge">
                  <img src={service.img} alt='' />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services">Learn more</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container transformation-wrap">
          <div className="transformation-copy">
            <SectionHeading
              eyebrow="Digital Transformation"
              title="Helping enterprises modernize with clarity and momentum"
              text="From legacy modernization to intelligent automation, AmLok builds transformation programs that connect business goals to resilient technology execution."
            />
            <ul className="check-list">
              {transformationAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
          <div
            className="transformation-visual"
            role="img"
            aria-label="AmLok digital core connecting AI, cloud, data, applications, automation, and integration"
          >
            <DigitalTransformationVisual />
          </div>
        </div>
      </section>

      <section className="page-section muted-section">
        <div className="container">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Industry insight tailored to real operational demands"
          />
          <div className="card-grid industries-grid">
            {industries.map((industry) => (
              <article className="info-card industry-card" key={industry.name}>
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section home-technology-section">
        <div className="container">
          <SectionHeading
            eyebrow="Technology Expertise"
            title="Platforms and engineering capabilities designed for scale"
          />
          <HomeLogoMarquee
            logos={technologyLogos}
            direction="left"
            label="Technology expertise logos, moving right to left"
          />
        </div>
      </section>

      <section className="page-section muted-section home-clients-section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Clients"
            title="Trusted by organizations across industries"
          />
          <HomeLogoMarquee
            logos={clientLogos}
            direction="right"
            label="Client company logos, moving left to right"
          />
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <span className="eyebrow light">Let’s Build What’s Next</span>
            <h2>Partner with AmLok to transform your technology vision into measurable business outcomes.</h2>
          </div>
          <div className="cta-row right-align">
            <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
            <Link to="/services" className="btn btn-secondary light">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
