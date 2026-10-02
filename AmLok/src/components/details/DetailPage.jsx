import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { technologyLogos } from '../../data/homeLogoData';

const parentLinks = {
  service: { label: 'Services', path: '/services' },
  solution: { label: 'Solutions', path: '/solutions' },
  industry: { label: 'Industries', path: '/industries' },
};

function Breadcrumbs({ parent, title }) {
  return (
    <nav className="detail-breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      <span aria-hidden="true">/</span>
      <Link to={parent.path}>{parent.label}</Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{title}</span>
    </nav>
  );
}

function CapabilityShowcase({ items, image, imageAlt }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] || items[0];

  if (!activeItem) return null;

  return (
    <div className="detail-capability-showcase">
      <div className="detail-capability-list" role="tablist" aria-label="Capabilities">
        {items.map((item, index) => (
          <button
            type="button"
            className={`detail-capability-list-item${index === activeIndex ? ' is-active' : ''}`}
            key={item.title}
            onClick={() => setActiveIndex(index)}
            role="tab"
            aria-selected={index === activeIndex}
          >
            <span className="detail-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="detail-capability-list-title">{item.title}</span>
            <span className="detail-capability-list-arrow" aria-hidden="true">→</span>
          </button>
        ))}
      </div>

      <div className="detail-capability-feature">
        <img
          src={activeItem?.image}
          alt={imageAlt || ''}
          className="detail-capability-feature-image"
          loading="lazy"
        />
        <div className="detail-capability-feature-overlay" />
        <div className="detail-capability-feature-content">
          <span className="detail-number">
            {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
          <h3>{activeItem.title}</h3>
          <p>{activeItem.description}</p>
        </div>
      </div>
    </div>
  );
}

function StepList({ steps }) {
  return (
    <ol className="detail-step-list">
      {steps.map((step, index) => (
        <li className="detail-step" key={step.title}>
          <span className="detail-number">{String(index + 1).padStart(2, '0')}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </li>
      ))}
    </ol>
  );
}

function TechnologyGrid({ names }) {
  const logos = names.map((name) => technologyLogos.find((logo) => logo.name === name)).filter(Boolean);

  return (
    <div className="detail-technology-grid">
      {logos.map((logo) => (
        <div className="detail-technology-tile" key={logo.name}>
          <img src={logo.src} alt="" loading="lazy" />
          <span>{logo.name}</span>
        </div>
      ))}
    </div>
  );
}

function ItemList({ items, className = 'detail-outcome-list' }) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={item}>
          <span className="detail-number">{String(index + 1).padStart(2, '0')}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RelatedLinks({ title, items, kind }) {
  if (!items.length) return null;

  return (
    <section className="page-section detail-related-section">
      <div className="container">
        <div className="detail-section-heading">
          <span className="eyebrow">Explore More</span>
          <h2>{title}</h2>
        </div>
        <div className="detail-related-grid">
          {items.map((item) => (
            <Link className="detail-related-link" to={`/${kind === 'service' ? 'services' : 'solutions'}/${item.slug}`} key={item.slug}>
              <img src={item.image} alt="" loading="lazy" />
              <span>{item.title}</span>
              <span className="detail-related-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DetailPage({ kind, item, content, relatedServices = [], relatedSolutions = [] }) {
  const parent = parentLinks[kind];
  const isIndustry = kind === 'industry';
  const isSolution = kind === 'solution';
  const capabilities = isIndustry ? content.challenges : content.capabilities;
  const outcomes = isIndustry ? content.useCases : (isSolution ? content.value : content.outcomes);
  const heroDescription = content.heroDescription || item.description;
  const heroVideoSrc = content.heroVideo || '';

  console.log("itemitem", item)

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${item.title} | AmLok`;
    return () => { document.title = previousTitle; };
  }, [item.title]);

  return (
    <div className="page-content detail-page">
      <section className="page-section detail-hero-section detail-hero-video-section">
        <div className="detail-hero-video" aria-hidden="true">
          <video
            className="detail-hero-video-media"
            autoPlay
            muted
            loop
            playsInline
            poster={item.image}
            preload="metadata"
          >
            {heroVideoSrc ? <source src={heroVideoSrc} type="video/mp4" /> : null}
          </video>
          <div className="detail-hero-video-overlay" />
        </div>

        <div className="container detail-hero-content">
          <Breadcrumbs parent={parent} title={item.title} />
          <Link className="detail-back-link" to={parent.path}>← Back to {parent.label}</Link>

          <div className="detail-hero-copy">
            <span className="eyebrow">Connected delivery approach</span>
            <h1>{item.title}</h1>
            <p>{heroDescription}</p>
            <div className="detail-hero-actions">
              <Link to="/contact" className="btn btn-primary">Talk to Our Experts</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-snapshot-section" aria-label="Detail page snapshot">
        <div className="container">
          <div className="detail-snapshot">
            <div className="detail-snapshot-item">
              <span className="detail-snapshot-value">{String(capabilities.length).padStart(2, '0')}</span>
              <span className="detail-snapshot-label">{isIndustry ? 'Industry priorities' : 'Core capabilities'}</span>
            </div>
            <div className="detail-snapshot-item">
              <span className="detail-snapshot-value">{String(content.technologies?.length || 0).padStart(2, '0')}</span>
              <span className="detail-snapshot-label">Technology areas</span>
            </div>
            <div className="detail-snapshot-item">
              <span className="detail-snapshot-value">{String(isIndustry ? content.useCases.length : (isSolution ? content.steps.length : content.approach.length)).padStart(2, '0')}</span>
              <span className="detail-snapshot-label">{isIndustry ? 'Use cases' : 'Delivery stages'}</span>
            </div>
            <div className="detail-snapshot-item">
              <span className="detail-snapshot-value">01</span>
              <span className="detail-snapshot-label">Connected delivery approach</span>
            </div>
          </div>
        </div>
      </section>

      {isSolution && (
        <section className="page-section muted-section detail-problem-section">
          <div className="container detail-prose-grid">
            <div className="detail-section-heading">
              <span className="eyebrow">The Challenge</span>
              <h2>Addressing the issues behind {item.title.toLowerCase()}</h2>
            </div>
            <p>{content.challenge}</p>
          </div>
        </section>
      )}

      {isIndustry ? (
        <section className="page-section muted-section">
          <div className="container detail-prose-grid">
            <div className="detail-section-heading">
              <span className="eyebrow">Industry Landscape</span>
              <h2>Technology shaped around {item.name.toLowerCase()}</h2>
            </div>
            <p>{content.landscape}</p>
          </div>
        </section>
      ) : (
        <section className="page-section muted-section">
          <div className="container detail-prose-grid">
            <div className="detail-section-heading">
              <span className="eyebrow">{isSolution ? 'Our Solution' : 'Overview'}</span>
              <h2>{isSolution ? 'A practical path from challenge to capability' : `How AmLok approaches ${item.title.toLowerCase()}`}</h2>
            </div>
            <p>{isSolution ? content.approach : content.overview}</p>
          </div>
        </section>
      )}

      <section className="page-section detail-editorial-section">
        <div className="container detail-editorial-grid">
          <div className="detail-editorial-media">
            <img src={item.image} alt={item.imageAlt} loading="lazy" />
            <div className="detail-editorial-caption">
              <span>{isIndustry ? 'Industry perspective' : isSolution ? 'Solution perspective' : 'Engineering perspective'}</span>
              <strong>{item.title}</strong>
            </div>
          </div>
          <div className="detail-editorial-copy">
            <span className="eyebrow">{isIndustry ? 'Why It Matters' : isSolution ? 'Why This Approach' : 'Why This Matters'}</span>
            <h2>
              {isIndustry
                ? 'Technology decisions need to fit the operating environment.'
                : isSolution
                  ? 'Transformation works best when strategy connects directly to execution.'
                  : 'Technology should create a foundation for what comes next.'}
            </h2>
            <p>
              {isIndustry
                ? content.landscape
                : isSolution
                  ? content.approach
                  : (content.whyThisMatters || content.overview)}
            </p>
            <div className="detail-editorial-points">
              <span>Business context</span>
              <span>Engineering discipline</span>
              <span>Operational readiness</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section detail-capabilities-section">
        <div className="container">
          <div className="detail-section-heading">
            <span className="eyebrow">{isIndustry ? 'Industry Challenges' : 'Key Capabilities'}</span>
            <h2>{isIndustry ? 'Where focused technology can help' : `What ${isSolution ? 'the solution' : 'the service'} includes`}</h2>
          </div>
          <CapabilityShowcase
              items={capabilities}
              image={item.image}
              imageAlt={item.imageAlt || item.title}
            />
        </div>
      </section>

      {!isIndustry && (
        <section className="page-section muted-section detail-approach-section">
          <div className="container">
            <div className="detail-section-heading">
              <span className="eyebrow">{isSolution ? 'How It Works' : 'Our Approach'}</span>
              <h2>{isSolution ? 'A connected path to implementation' : 'From discovery through ongoing improvement'}</h2>
            </div>
            <StepList steps={isSolution ? content.steps : content.approach} />
          </div>
        </section>
      )}

      {isIndustry && (
        <section className="page-section muted-section detail-industry-links">
          <div className="container detail-links-grid">
            <div>
              <div className="detail-section-heading">
                <span className="eyebrow">How AmLok Helps</span>
                <h2>Capabilities for your operating context</h2>
              </div>
              <ul className="detail-link-list">
                {relatedServices.map((service) => (
                  <li key={service.slug}><Link to={`/services/${service.slug}`}>{service.title}<span aria-hidden="true">→</span></Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="detail-section-heading">
                <span className="eyebrow">Industry Solutions</span>
                <h2>Solution areas that connect the work</h2>
              </div>
              <ul className="detail-link-list">
                {relatedSolutions.map((solution) => (
                  <li key={solution.slug}><Link to={`/solutions/${solution.slug}`}>{solution.title}<span aria-hidden="true">→</span></Link></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="page-section detail-technology-section">
        <div className="container">
          <div className="detail-section-heading">
            <span className="eyebrow">Technology Ecosystem</span>
            <h2>Tools selected for the work</h2>
          </div>
          <TechnologyGrid names={content.technologies} />
        </div>
      </section>

      <section className="page-section muted-section detail-outcomes-section">
        <div className="container detail-prose-grid">
          <div className="detail-section-heading">
            <span className="eyebrow">{isIndustry ? 'Use Cases' : isSolution ? 'Business Value' : 'Business Outcomes'}</span>
            <h2>{isIndustry ? 'Areas to explore' : 'Designed for useful, sustainable progress'}</h2>
          </div>
          <ItemList items={outcomes} className={isIndustry ? 'detail-use-case-list' : 'detail-outcome-list'} />
        </div>
      </section>

      <section className="detail-insight-section">
        <div className="container">
          <div className="detail-insight">
            <div>
              <span className="eyebrow">AmLok Perspective</span>
              <h2>{isIndustry ? 'Build around the realities of the operating environment.' : 'Connect technology decisions to measurable progress.'}</h2>
            </div>
            <p>
              {isIndustry
                ? 'The strongest technology programs respect existing workflows, dependencies, and operational responsibilities while creating a practical path toward modernization.'
                : 'A connected approach brings business priorities, engineering execution, data, platforms, and ongoing improvement into one delivery conversation.'}
            </p>
          </div>
        </div>
      </section>

      {isSolution ? (
        <RelatedLinks title="Related Solutions" items={relatedSolutions} kind="solution" />
      ) : !isIndustry ? (
        <RelatedLinks title="Related Services" items={relatedServices} kind="service" />
      ) : null}

      <section className="cta-section detail-cta-section">
        <div className="container cta-box">
          <div>
            <span className="eyebrow light">{isIndustry ? 'Industry Partnership' : 'Next Steps'}</span>
            <h2>{isIndustry ? "Let's transform your industry together." : "Let's build what's next."}</h2>
            <p>{isIndustry ? `Discuss how AmLok can support technology priorities in ${item.name}.` : `Talk with AmLok about ${item.title.toLowerCase()} and your business priorities.`}</p>
          </div>
          <Link to="/contact" className="btn btn-primary">Talk to Our Experts</Link>
        </div>
      </section>
    </div>
  );
}