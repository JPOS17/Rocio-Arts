import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Global.css";
import "../styles/Contact.css";
import { Link } from "react-router-dom";
import { Clock, Mail, MapPin } from "lucide-react";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement) => {
    const newErrors: Record<string, string> = {};
    const get = (name: string) =>
      (
        form.elements.namedItem(name) as
          | HTMLInputElement
          | HTMLTextAreaElement
          | HTMLSelectElement
      )?.value?.trim();

    if (!get("first_name")) newErrors.first_name = "First name is required";
    if (!get("last_name")) newErrors.last_name = "Last name is required";
    if (!get("from_email")) newErrors.from_email = "Email address is required";
    if (!get("subject")) newErrors.subject = "Please select a topic";
    if (!get("message")) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current!;
    const newErrors = validate(form);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        form.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const clearError = (field: string) => {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

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
              an existing work, or want to start a commission, please reach out.
              I typically respond within 1–2 business days.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail__icon">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="contact-detail__label">Email</p>
                  <p className="contact-detail__value">
                    <a href="mailto:Rocioortiz.art@gmail.com">
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

            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="first-name">
                    First name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    name="first_name"
                    className={`form-input ${errors.first_name ? "form-input--error" : ""}`}
                    placeholder="Maria"
                    onChange={() => clearError("first_name")}
                  />
                  {errors.first_name && (
                    <span className="form-error">{errors.first_name}</span>
                  )}
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="last-name">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    name="last_name"
                    className={`form-input ${errors.last_name ? "form-input--error" : ""}`}
                    placeholder="Garcia"
                    onChange={() => clearError("last_name")}
                  />
                  {errors.last_name && (
                    <span className="form-error">{errors.last_name}</span>
                  )}
                </div>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  name="from_email"
                  className={`form-input ${errors.from_email ? "form-input--error" : ""}`}
                  placeholder="you@email.com"
                  onChange={() => clearError("from_email")}
                />
                {errors.from_email && (
                  <span className="form-error">{errors.from_email}</span>
                )}
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="subject">
                  What can I help with?
                </label>
                <div className="form-select-wrap">
                  <select
                    id="subject"
                    name="subject"
                    className={`form-select ${errors.subject ? "form-input--error" : ""}`}
                    onChange={() => clearError("subject")}
                  >
                    <option value="">Select a topic…</option>
                    <option value="Commission inquiry">
                      Commission inquiry
                    </option>
                    <option value="Original painting">Original painting</option>
                    <option value="Print order">Print order</option>
                    <option value="Wholesale / bulk">Wholesale / bulk</option>
                    <option value="Something else">Something else</option>
                  </select>
                </div>
                {errors.subject && (
                  <span className="form-error">{errors.subject}</span>
                )}
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="message">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-textarea ${errors.message ? "form-input--error" : ""}`}
                  placeholder="Tell me a bit about what you're looking for…"
                  onChange={() => clearError("message")}
                />
                <p className="form-hint">
                  For commissions, feel free to include subject, size
                  preference, and any meaningful details.
                </p>
                {errors.message && (
                  <span className="form-error">{errors.message}</span>
                )}
              </div>

              {/* Reference Image Link */}
              <div className="form-field">
                <label className="form-label" htmlFor="image-link">
                  Reference image (optional)
                </label>
                <input
                  id="image-link"
                  type="text"
                  name="image_link"
                  className="form-input"
                  placeholder="Paste a Google Drive, Dropbox, or photo link…"
                />
                <p className="form-hint">
                  Have a reference image? Share it via a Google Drive or Dropbox
                  link.
                </p>
              </div>

              {status === "success" && (
                <div className="form-toast form-toast--success">
                  Message Recieved! I'll be in touch as soon as possible.
                </div>
              )}
              {status === "error" && (
                <div className="form-toast form-toast--error">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                className="btn btn--dark form-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
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
