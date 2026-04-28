import "../styles/Global.css";
import "../styles/Contact.css";
import { Link } from "react-router-dom";
import { Clock, Mail, MapPin } from "lucide-react";

const faqs = [
  {
    q: "How long does a commission take?",
    a: "Most commissions take between 4–8 weeks depending on size and complexity. I'll give you a realistic timeline during our initial conversation before any work begins.",
  },
  {
    q: "Do you ship originals?",
    a: "Yes — originals are carefully packaged and shipped with tracking. I currently ship within the US. International shipping can be arranged on a case-by-case basis.",
  },
  {
    q: "Can I request a specific subject or scripture?",
    a: "Absolutely. Commission subjects are always personal to the buyer — a favorite saint, a meaningful scripture passage, a sacred scene. That's exactly what commissions are for.",
  },
  {
    q: "What's the process for ordering a print?",
    a: "Prints are available directly through the gallery. Reach out via this form or through Instagram and I'll get you set up with sizing and shipping details.",
  },
];

const Contact = () => {
  return (
    <div className="contact-page">
      {/* ── 1. HERO ── */}
      <section className="contact-hero">
        <div className="contact-hero__texture" />
        <div className="contact-hero__content container">
          <span className="section-label section-label--light">
            Get in Touch
          </span>
          <h1 className="contact-hero__headline">Let's talk</h1>
          <p className="contact-hero__sub">
            Whether you're interested in an original, a print, or a custom
            commission — I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ── 2. MAIN BODY ── */}
      <section className="contact-body">
        <div className="container contact-body__inner">
          {/* ── LEFT: Info ── */}
          <div className="contact-info">
            <span className="section-label">Contact</span>
            <h2 className="contact-info__heading">
              Every piece begins
              <br />
              with a conversation
            </h2>
            <p className="contact-info__body">
              I read every message personally. Whether you have a question about
              an existing work, want to start a commission, or just want to say
              hello — please reach out. I typically respond within 1–2 business
              days.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail__icon">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="contact-detail__label">Email</p>
                  <p className="contact-detail__value">
                    <a href="mailto:hello@rocioortizstudio.com">
                      Rocioortiz.art@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail__icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="contact-detail__label">Based in</p>
                  <p className="contact-detail__value">
                    Charlotte, North Carolina
                  </p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail__icon">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="contact-detail__label">Response time</p>
                  <p className="contact-detail__value">1–2 business days</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a
                href="https://www.instagram.com/rocioortiz.art"
                target="_blank"
                rel="noreferrer"
                className="contact-social__link"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/rocioortiz.art"
                target="_blank"
                rel="noreferrer"
                className="contact-social__link"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="contact-form-wrap">
            <h3 className="contact-form__heading">Send a message</h3>
            <p className="contact-form__sub">
              Fill out the form below and I'll get back to you as soon as I can.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="first-name">
                    First name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    className="form-input"
                    placeholder="Maria"
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="last-name">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    className="form-input"
                    placeholder="Garcia"
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="you@email.com"
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="subject">
                  What can I help with?
                </label>
                <div className="form-select-wrap">
                  <select id="subject" className="form-select">
                    <option value="">Select a topic…</option>
                    <option value="commission">Commission inquiry</option>
                    <option value="original">Original painting</option>
                    <option value="print">Print order</option>
                    <option value="wholesale">Wholesale / bulk</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="message">
                  Your message
                </label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Tell me a bit about what you're looking for…"
                />
                <p className="form-hint">
                  For commissions, feel free to include subject, size
                  preference, and any meaningful details.
                </p>
              </div>

              <button type="submit" className="btn btn--dark form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── 3. COMMISSION CALLOUT ── */}
      <section className="commission-callout">
        <div className="container commission-callout__inner">
          <div>
            <span className="section-label">Custom Work</span>
            <h2 className="commission-callout__heading">
              Interested in a commission?
            </h2>
            <p className="commission-callout__body">
              I accept a limited number of commissions each year. Faith-inspired
              subjects, personal devotions, memorial pieces, and gifts that are
              truly one of a kind. Use the form above to start the conversation.
            </p>
          </div>
          <div>
            <Link to="/gallery" className="btn btn--dark">
              See Examples
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. FAQ ── */}
      <section className="faq">
        <div className="container faq__inner">
          <div>
            <span className="section-label section-label--light">FAQ</span>
            <h2 className="faq__heading">
              Common
              <br />
              questions
            </h2>
          </div>
          <div className="faq__list">
            {faqs.map((item) => (
              <div key={item.q} className="faq-item">
                <p className="faq-item__q">{item.q}</p>
                <p className="faq-item__a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
