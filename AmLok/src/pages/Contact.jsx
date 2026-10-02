import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeading from '../components/common/SectionHeading';
import { faqItems } from '../data/siteData';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  // company: '',
  service: '',
  message: '',
  website: '',
};

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export default function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (submissionStatus !== 'success') return undefined;

    const timer = window.setTimeout(() => {
      setSubmissionStatus('');
      setSubmissionMessage('');
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [submissionStatus]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSubmissionStatus('');
    setSubmissionMessage('');
  };

  const validateForm = () => {
    const nextErrors = {};
    const fullName = formData.fullName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();

    if (fullName.length < 2 || fullName.length > 100) nextErrors.fullName = 'Enter a name between 2 and 100 characters.';
    if (!email) nextErrors.email = 'Email is required.';
    else if (email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!phone) nextErrors.phone = 'Phone number is required.';
    else if (!/^\+?[\d\s().-]+$/.test(phone) || (phone.match(/\d/g) ?? []).length < 7
      || (phone.match(/\d/g) ?? []).length > 15 || phone.length > 30) {
      nextErrors.phone = 'Enter a valid international phone number.';
    }
    // if (!formData.company.trim()) nextErrors.company = 'Company name is required.';
    // else if (formData.company.trim().length > 150) nextErrors.company = 'Company name must be 150 characters or fewer.';
    if (!formData.service.trim()) nextErrors.service = 'Please choose a service.';
    if (!formData.message.trim()) nextErrors.message = 'Message is required.';
    else if (formData.message.trim().length > 5000) nextErrors.message = 'Message must be 5000 characters or fewer.';

    return nextErrors;
  };

  const handleMessageTemplate = () => {
    const template = `Hello AmLok Team,

We are interested in discussing our technology requirements and would like to understand how AmLok can support us.

Our current requirement:
[Briefly describe your business or technology requirement]

Key areas we would like to discuss:
- [Requirement / capability 1]
- [Requirement / capability 2]
- [Requirement / capability 3]

Please let us know a convenient time to connect and discuss this further.

Thank you.`;

    setFormData((current) => ({ ...current, message: template }));
    setErrors((current) => ({ ...current, message: '' }));
    setSubmissionStatus('');
    setSubmissionMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    if (formData.website.trim()) return;

    console.log("emailJsConfig", emailJsConfig)

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setSubmissionStatus('error');
      setSubmissionMessage('Email submission is not configured yet. Please try again later.');
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmissionStatus('');
    setSubmissionMessage('');

    try {
      await emailjs.send(emailJsConfig.serviceId, emailJsConfig.templateId, {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        // company: formData.company.trim(),
        service: formData.service,
        message: formData.message.trim(),
      }, {
        publicKey: emailJsConfig.publicKey,
      });

      setSubmissionStatus('success');
      setSubmissionMessage("Thank you. Your inquiry has been submitted successfully. We'll get back to you soon.");
      setFormData(initialState);
    } catch (error) {
      console.error('EmailJS contact submission failed:', error);
      setSubmissionStatus('error');
      setSubmissionMessage("We couldn't submit your inquiry right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-content">
      <section className="page-banner">
        <div className="container narrow">
          <SectionHeading
            eyebrow="Contact Us"
            title="Discuss your next technology initiative"
            text="Tell us about your goals, constraints, and roadmap. We’ll help shape the right transformation approach."
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-honeypot" aria-hidden="true">
              <label>
                Website
                <input name="website" type="text" value={formData.website} tabIndex={-1} autoComplete="off" onChange={handleChange} />
              </label>
            </div>
            <div className="form-row">
              <label>
                <span>Full Name</span>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} maxLength={100} autoComplete="name" placeholder="Enter your full name" required disabled={isSubmitting} aria-invalid={Boolean(errors.fullName)} />
                {errors.fullName && <small className="error-message">{errors.fullName}</small>}
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" value={formData.email} onChange={handleChange} maxLength={254} autoComplete="email" placeholder="you@gmail.com" required disabled={isSubmitting} aria-invalid={Boolean(errors.email)} />
                {errors.email && <small className="error-message">{errors.email}</small>}
              </label>
            </div>

            <div className="form-row">
              <label>
                <span>Phone</span>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} maxLength={30} autoComplete="tel" placeholder="+1 555 123 4567" required disabled={isSubmitting} aria-invalid={Boolean(errors.phone)} />
                {errors.phone && <small className="error-message">{errors.phone}</small>}
              </label>

              <label>
                <span>Service Required</span>
                <select name="service" value={formData.service} onChange={handleChange} required disabled={isSubmitting} aria-invalid={Boolean(errors.service)}>
                  <option value="">Select a service</option>
                  <option value="Application Development">Application Development</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                  <option value="Data & Analytics">Data & Analytics</option>
                  <option value="AI & Automation">AI & Automation</option>
                  <option value="Quality Engineering">Quality Engineering</option>
                  <option value="IT Consulting">IT Consulting</option>
                </select>
                {errors.service && <small className="error-message">{errors.service}</small>}
              </label>
              {/* <label>
                <span>Company</span>
                <input type="text" name="company" value={formData.company} onChange={handleChange} maxLength={150} autoComplete="organization" placeholder="Enter your company name" required disabled={isSubmitting} aria-invalid={Boolean(errors.company)} />
                {errors.company && <small className="error-message">{errors.company}</small>}
              </label> */}
            </div>

            <label className="message-field">
              <span className="message-label-row">
                <span>Message</span>
                <button
                  type="button"
                  className="message-template-btn"
                  onClick={handleMessageTemplate}
                  disabled={isSubmitting}
                >
                  Use message template
                </button>
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                maxLength={5000}
                placeholder="Tell us about your requirements, goals, timeline, or the challenge you would like to discuss..."
                required
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <small className="error-message">{errors.message}</small>}
            </label>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting} aria-busy={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </button>
            {submissionMessage && (
              <p className={submissionStatus === 'success' ? 'success-message' : 'error-message'} role={submissionStatus === 'error' ? 'alert' : 'status'}>
                {submissionMessage}
              </p>
            )}
          </form>

          <aside className="contact-sidebar">
            <div className="info-card contact-card">
              <h3>Connect with AmLok</h3>
              <ul className="contact-info">
                <li><b>Email:</b> <a href="mailto:hr@amlokit.com">hr@amlokit.com</a></li>
                <li><b>Phone:</b> <a href="tel:+910000000000">+1 201-361-9988</a></li>
                <li><b>Office:</b> 30 N Gould St, STE R, Sheridan, WY 82801, USA</li>
                <li><b>Business hours:</b> Mon - Sat, 9:00 AM - 6:30 PM</li>
              </ul>
            </div>

            <div className="faq-box">
              <h3>Frequently Asked Questions</h3>
              {faqItems.map((item, index) => (
                <div key={item.question} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                  <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                    {item.question}
                    <span>{openFaq === index ? '−' : '+'}</span>
                  </button>
                  {openFaq === index && <p>{item.answer}</p>}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
