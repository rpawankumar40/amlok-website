import SectionHeading from '../components/common/SectionHeading';
import aboutusvideo from '../assets/videos/aboutUs1.mp4'

const values = [
  'Client-first execution',
  'Engineering integrity',
  'Transparent partnership',
  'Continuous learning',
];

export default function About() {
  return (
    <div className="page-content">
      <section className="page-banner">
        <div className="container narrow">
          <SectionHeading
            eyebrow="About Us"
            title="Building enterprise technology capability for lasting business value"
            text="AmLok brings together strategy, engineering, and transformation expertise to help organizations adapt, compete, and grow in a digital-first market."
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container split-layout">
          <div>
            <SectionHeading eyebrow="Our Story" title="A technology company shaped by measurable outcomes" />
          </div>
          <div>
            <p>
              We help ambitious organizations reimagine how technology powers growth. From modern applications and cloud platforms to analytics and AI enablement, we deliver practical solutions that connect engineering quality with real business goals.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section muted-section VMVStyle">
        <div className="container three-column">
          <div className="info-card metric-panel">
            <h3>Vision</h3>
            <p>To become the trusted partner for enterprises seeking secure, scalable, and future-ready digital transformation.</p>
          </div>
          <div className="info-card metric-panel">
            <h3>Mission</h3>
            <p>To design and deliver technology solutions that create lasting value, accelerate performance, and simplify complexity.</p>
          </div>
          <div className="info-card metric-panel">
            <h3>Values</h3>
            <ul className="inline-list">
              {values.map((value) => <li key={value}>{value}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section leadership-section">
        <div className="container">
          <div className="leadership-heading">
            <SectionHeading
              eyebrow="Leadership & Culture"
              title="A delivery culture built around engineering excellence"
              text="We bring together strategic thinking, engineering discipline, operational excellence, and close client partnership to create technology outcomes that are dependable, scalable, and built for long-term value."
            />
          </div>

          <div className="leadership-showcase">
            <div className="leadership-copy">
              <span className="leadership-kicker">How we work</span>
              <h3>Engineering with purpose. Delivering with accountability.</h3>
              <p>
                Our teams combine business context with strong engineering practices to turn
                complex technology priorities into clear, measurable outcomes.
              </p>

              <div className="leadership-points">
                <article className="leadership-point">
                  <span className="leadership-point-number">01</span>
                  <div>
                    <h4>Strategic Advisory</h4>
                    <p>We guide technology decisions with business context, risk awareness, and long-term ROI thinking.</p>
                  </div>
                </article>

                <article className="leadership-point">
                  <span className="leadership-point-number">02</span>
                  <div>
                    <h4>Product Engineering</h4>
                    <p>Our teams design and build software that performs reliably across modern enterprise requirements.</p>
                  </div>
                </article>

                <article className="leadership-point">
                  <span className="leadership-point-number">03</span>
                  <div>
                    <h4>Operational Excellence</h4>
                    <p>We focus on quality, observability, automation, and continuous improvement across the delivery lifecycle.</p>
                  </div>
                </article>

                <article className="leadership-point">
                  <span className="leadership-point-number">04</span>
                  <div>
                    <h4>Client Partnership</h4>
                    <p>We work as an extension of your teams, aligning engineering decisions with measurable business outcomes.</p>
                  </div>
                </article>
              </div>
            </div>

            <div className="leadership-visual" aria-label="AmLok engineering team collaboration">
              <video
                src={aboutusvideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                tabIndex={-1}
              />
              <div className="leadership-visual-overlay">
                <span>AmLok delivery culture</span>
                <strong>People + Engineering + Outcomes</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
