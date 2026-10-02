import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo2.png';

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Leadership', to: '/about' },
  { label: 'Careers', to: '/careers' },
//   { label: 'Insights', to: '/insights' },
  { label: 'Contact Us', to: '/contact' },
];

const serviceLinks = [
  { label: 'Software Engineering', to: '/services' },
  { label: 'Cloud & DevOps', to: '/services' },
  { label: 'Data & Analytics', to: '/services' },
  { label: 'AI & Automation', to: '/solutions' },
  { label: 'Quality Engineering', to: '/services' },
  { label: 'Enterprise Solutions', to: '/solutions' },
  { label: 'IT Consulting', to: '/services' },
];

const industryLinks = [
  { label: 'Banking & Financial Services', to: '/industries' },
  { label: 'Healthcare', to: '/industries' },
  { label: 'Retail & E-Commerce', to: '/industries' },
  { label: 'Manufacturing', to: '/industries' },
  { label: 'Telecommunications', to: '/industries' },
  { label: 'Technology', to: '/industries' },
  { label: 'Logistics', to: '/industries' },
  { label: 'Energy & Utilities', to: '/industries' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
  { label: 'X / Twitter', href: 'https://x.com', icon: 'x' },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram' },
];

function SocialIcon({ type }) {
  const icons = {
    linkedin: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5A1.5 1.5 0 1 1 6.94 5.5a1.5 1.5 0 0 1 0 3Zm-1.2 1.6h2.4V18h-2.4V10.1Zm4.2 0h2.3v1.08h.03c.32-.61 1.1-1.25 2.26-1.25 2.42 0 2.86 1.59 2.86 3.67V18h-2.4v-16.8h-2.4v11.43c0-.96-.02-2.19-1.34-2.19-1.34 0-1.54 1.05-1.54 2.12V18h-2.4V10.1Z" />
      </svg>
    ),
    x: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.9 2h3.32l-7.26 8.3L22.7 22h-6.55l-5.12-7.45L5.4 22H2.08l7.77-8.87L1.3 2h6.71l4.64 6.77L18.9 2Zm-1.16 18h1.82L7.14 3.9H5.2L17.74 20Z" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V7.7c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.2V14h2.7v8h3.6Z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Zm4.7-3.2a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
      </svg>
    ),
  };

  return icons[type] || null;
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta-shell">
        <div className="container footer-cta">
          <div>
            <span className="eyebrow light">Ready to transform?</span>
            <h3>Ready to transform your business?</h3>
            <p>Let’s discuss how AmLok can help you build, modernize, and scale your technology.</p>
          </div>
          <Link to="/contact" className="btn btn-primary footer-cta-button">
            Talk to Our Experts <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-column brand-column">
            <div className="brand footer-brand">
              <img src={logoImage} alt='AL' />
            </div>
            <p className="footer-copy">
              Engineering digital excellence through technology, innovation, and transformation.
            </p>
            <div className="social-links" aria-label="AmLok social media">
              {socialLinks.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="social-link" aria-label={label}>
                  <SocialIcon type={icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              {companyLinks.map(({ label, to }) => (
                <li key={label}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              {serviceLinks.map(({ label, to }) => (
                <li key={label}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Industries</h4>
            <ul className="footer-links">
              {industryLinks.map(({ label, to }) => (
                <li key={label}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <p className="footer-cta-line">Let’s build what’s next.</p>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25V6.75Zm2.5-.25 6.5 5.05 6.5-5.05H6.5Zm13 2.3-6.86 5.33a1 1 0 0 1-1.28 0L5.5 8.8v8.45c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25V8.8Z" /></svg>
                </span>
                <a href="mailto:hr@amlokit.com">hr@amlokit.com</a>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M6.6 2.5a1.5 1.5 0 0 1 1.5 1.5v1.23A13.6 13.6 0 0 1 18.8 17.9h1.7a1.5 1.5 0 0 1 1.5 1.5v2.7a2 2 0 0 1-2 2A18.8 18.8 0 0 1 4.5 4.5a2 2 0 0 1 2-2h2.1Zm1.5 2.9a12 12 0 0 0 10.5 10.5v-1.73l-2.12-1.05-1.27.6a2.3 2.3 0 0 1-2.31-.45L9.7 11.7a2.3 2.3 0 0 1-.45-2.31l.6-1.27L8.8 7.3V5.4Z" /></svg>
                </span>
                <a href="tel:+910000000000">+1 201-361-9988</a>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 2.25a7.5 7.5 0 0 1 7.5 7.5c0 5.44-7.5 12-7.5 12S4.5 15.19 4.5 9.75a7.5 7.5 0 0 1 7.5-7.5Zm0 3.75a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 12 6Z" /></svg>
                </span>
                <span>30 N Gould St, STE R, Sheridan, WY 82801, USA</span>
              </li>
            </ul>
            <Link to="/contact" className="btn btn-primary footer-contact-btn">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 AmLok. All rights reserved.</span>
          <div className="legal-links">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Use</Link>
            <Link to="/">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
