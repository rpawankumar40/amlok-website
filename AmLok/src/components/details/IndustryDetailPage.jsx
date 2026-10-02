import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { technologyLogos } from '../../data/homeLogoData';
import './IndustryDetailPage.css';

const parent = { label: 'Industries', path: '/industries' };

function Breadcrumbs({ title }) {
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

function TechnologyGrid({ names = [] }) {
  const logos = names
    .map((name) => technologyLogos.find((logo) => logo.name === name))
    .filter(Boolean);

  return (
    <div className="industry-tech-grid">
      {logos.length ? logos.map((logo) => (
        <div className="industry-tech-item" key={logo.name}>
          <img src={logo.src} alt="" loading="lazy" />
          <span>{logo.name}</span>
        </div>
      )) : names.map((name) => (
        <span className="industry-tech-fallback" key={name}>{name}</span>
      ))}
    </div>
  );
}

function UseCaseShowcase({ useCases = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!useCases.length) return null;

  return (
    <div className="industry-usecase-list" role="list" aria-label="Industry use cases">
      {useCases.map((useCase, index) => {
        const isActive = index === activeIndex;
        const number = String(index + 1).padStart(2, '0');

        return (
          <button
            type="button"
            className={`industry-usecase${isActive ? ' is-active' : ''}`}
            key={useCase?.title}
            onClick={() => setActiveIndex(index)}
            aria-pressed={isActive}
          >
            <span className="industry-usecase-number">{number}</span>

            <span className="industry-usecase-content">
              <span className="industry-usecase-title">{useCase?.title}</span>
              {
                isActive &&
                <p>{useCase?.description}</p>
              }

              {/* {isActive && (
                <span className="industry-usecase-expanded">
                  <span className="industry-usecase-label">USE CASE {number}</span>
                  <span className="industry-usecase-expanded-title">{useCase}</span>
                  <span className="industry-usecase-action">
                    Explore this use case <span aria-hidden="true">→</span>
                  </span>
                </span>
              )} */}
            </span>

            <span className="industry-usecase-arrow" aria-hidden="true">→</span>
          </button>
        );
      })}
    </div>
  );
}

export default function IndustryDetailPage({ item, content }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${item.name} | AmLok`;
    return () => { document.title = previousTitle; };
  }, [item.name]);

  const heroVideoSrc = content.heroVideo || '';
  const challenges = content.challenges || [];
  const useCases = content.useCases || [];
  const technologies = content.technologies || [];
  const serviceLinks = content.serviceSlugs || [];
  const industryServices = item.industryServiceCards || [];


  return (
    <div className="page-content industry-detail-page">
      {/* Same connected-delivery hero treatment used by the existing detail experience. */}
      <section className="page-section detail-hero-section detail-hero-video-section">
        <div className="detail-hero-video" aria-hidden="true">
          <video
            className="detail-hero-video-media"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            {heroVideoSrc ? <source src={heroVideoSrc} type="video/mp4" /> : null}
          </video>
          <div className="detail-hero-video-overlay" />
        </div>

        <div className="container detail-hero-content">
          <Breadcrumbs title={item.name} />
          <Link className="detail-back-link" to={parent.path}>← Back to Industries</Link>

          <div className="detail-hero-copy">
            <span className="eyebrow">Connected delivery approach</span>
            <h1>{item.name}</h1>
            <p>{content.landscape || item.description}</p>
            <div className="detail-hero-actions">
              <Link to="/contact" className="btn btn-primary">Talk to Our Experts</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-intro-section">
        <div className="container industry-intro-grid">
          <div>
            <span className="eyebrow">Industry Perspective</span>
            <h2>Technology shaped around the realities of {item.name.toLowerCase()}.</h2>
          </div>
          <p>{content.landscape}</p>
        </div>
      </section>

      <section className="page-section industry-challenges-section">
        <div className="container">
          <div className="industry-section-heading">
            <span className="eyebrow">Industry Challenges</span>
            <h2>Where technology can create practical progress</h2>
          </div>

          <div className="industry-challenge-grid">
            {challenges.map((challenge, index) => (
              <article className="industry-challenge" key={challenge.title}>
                <span className="industry-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section industry-capability-section">
        <div className="container">
          <div className="industry-capability-panel">
            <div className="industry-capability-copy">
              <span className="eyebrow">AmLok Industry Capability</span>
              <h2>Connect strategy, engineering, data, and operations.</h2>
              <p>
                Our approach keeps modernization grounded in the systems, workflows, and operating priorities that matter to the industry.
              </p>
              <Link to="/contact" className="industry-text-link">Discuss your technology priorities <span aria-hidden="true">→</span></Link>
            </div>
            <div className="industry-capability-rail">
              <div><span>01</span><strong>Business context</strong><p>Start with the operating model, users, and priorities.</p></div>
              <div><span>02</span><strong>Engineering execution</strong><p>Build around dependable platforms and integration boundaries.</p></div>
              <div><span>03</span><strong>Operational readiness</strong><p>Design for adoption, visibility, reliability, and change.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section industry-usecase-section">
        <div className="container">
          <div className="industry-usecase-header">
            <div className="industry-section-heading">
              <span className="eyebrow">Use Cases</span>
              <h2>Areas where AmLok can help</h2>
            </div>
            <p>Explore focused technology opportunities without forcing every industry into the same modernization path.</p>
          </div>

          <UseCaseShowcase useCases={useCases} />
        </div>
      </section>

      <section className="page-section industry-services-section">
        <div className="container">
          <div className="industry-section-heading">
            <span className="eyebrow">Connected Services</span>
            <h2>Our Targeted Solutions</h2>
          </div>

          <div className="industry-capability-mosaic">
            {industryServices.map((industryService, index) => {
              const title =
                typeof industryService === 'string'
                  ? industryService
                  : industryService.title;

              const description =
                typeof industryService === 'object'
                  ? industryService.description
                  : '';

              const image =
                typeof industryService === 'object'
                  ? industryService.image
                  : null;

              const link =
                typeof industryService === 'object' && industryService.path
                  ? industryService.path
                  : '/contact';

              const cardNumber = String(index + 1).padStart(2, '0');
              const imageFirst = index === 0 || index === 1 || index === 4 || index === 5;

              const imageTile = (
                <Link
                  key={`${title}-image`}
                  to={link}
                  className={`industry-capability-mosaic-tile industry-capability-mosaic-image image-tile-${index + 1}`}
                  aria-label={`Explore ${title}`}
                >
                  {image ? (
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                    />
                  ) : (
                    <span className="industry-capability-mosaic-image-placeholder" aria-hidden="true" />
                  )}
                </Link>
              );

              const contentTile = (
                <Link
                  key={`${title}-content`}
                  to={link}
                  className={`industry-capability-mosaic-tile industry-capability-mosaic-content content-tile-${index + 1} ${imageFirst ? 'content-points-left' : 'content-points-right'}`}
                >
                  <span className="industry-capability-mosaic-number">{cardNumber}</span>
                  <span className="industry-capability-mosaic-title">{title}</span>

                  {description ? (
                    <span className="industry-capability-mosaic-description">
                      {description}
                    </span>
                  ) : null}
                </Link>
              );

              return imageFirst
                ? [imageTile, contentTile]
                : [contentTile, imageTile];
            })}
          </div>
        </div>
      </section>

      <section className="cta-section detail-cta-section industry-detail-cta">
        <div className="container cta-box">
          <div>
            <span className="eyebrow light">Industry Partnership</span>
            <h2>Let's transform your industry together.</h2>
            <p>Discuss how AmLok can support technology priorities in {item.name}.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">Talk to Our Experts</Link>
        </div>
      </section>
    </div>
  );
}
