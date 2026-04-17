import "../styles/About.css";

import headshot1 from "../assets/headshot1.png";

const credentials = [
  {
    icon: "🎓",
    title: "Savannah College of Art and Design",
    body: "BFA in Communication Arts, Illustration and Design — a foundation built on discipline, storytelling, and the craft of visual language.",
  },
  {
    icon: "✝️",
    title: "Faith as the foundation",
    body: "As a Catholic artist, every piece begins in prayer. Scripture, the saints, and sacred moments are not subjects — they are the source.",
  },
  {
    icon: "🎨",
    title: "Oil, acrylic & mixed media",
    body: "Working primarily in oil and acrylic, each painting is layered slowly over weeks — glazes, texture, and light built up with intention.",
  },
];

const values = [
  {
    title: "Faith",
    body: "Art rooted in the Catholic tradition — not as decoration, but as a genuine encounter with the sacred.",
  },
  {
    title: "Craft",
    body: "Every canvas is treated as a conversation with the Holy Spirit. The process is slow, deliberate, and never rushed.",
  },
  {
    title: "Intention",
    body: "No piece leaves the studio until it carries something real — something felt before it is understood.",
  },
  {
    title: "Connection",
    body: "The goal is always the same: to invite the viewer inside the moment, not merely to observe it.",
  },
];

const About = () => {
  return (
    <div className="about-page">
      {/* ── 1. EDITORIAL HERO ── */}
      <section className="about-hero">
        <div
          className="about-hero__bg"
          style={{ backgroundImage: `url(${headshot1})` }}
        />
        <div className="about-hero__overlay" />
        <div className="about-hero__content container">
          <span className="section-label section-label--light">The Artist</span>
          <h1 className="about-hero__name">Rocio Ortiz</h1>
          <p className="about-hero__title">
            Painter · Illustrator · Catholic Artist
          </p>
        </div>
      </section>

      {/* ── 2. STORY ── */}
      <section className="about-story">
        <div className="about-story__inner container">
          <span className="section-label">My Story</span>
          <h2 className="about-heading">
            Where faith meets
            <br />
            the painted canvas
          </h2>

          <p className="about-body">
            My name is Rocio Ortiz. I'm a graduate of the Savannah College of
            Art and Design with a BFA in Communication Arts, Illustration and
            Design. As a Catholic artist, I use my work to share stories, convey
            emotions, and express the deeper truths of faith.
          </p>

          <blockquote className="about-pull">
            "I believe art is a bridge that transforms abstract thoughts into
            something beautiful and tangible."
          </blockquote>

          <p className="about-body">
            Prayer and reflection play a key role in my process, where I seek
            new ways to express God's love and challenge myself as an artist. My
            greatest motivation is creating art that invites viewers to feel as
            though they're part of the piece — not a spectator, but a
            participant in the sacred moment unfolding before them.
          </p>

          <p className="about-body">
            I aim to capture scenes that deepen the soul's connection to the
            faith, and help the heart grasp truths that lie beyond the mind's
            understanding. Each painting is an act of prayer in itself — a
            conversation between the brush, the canvas, and the Holy Spirit.
          </p>
        </div>
      </section>

      {/* ── 3. CREDENTIALS ── */}
      <section className="credentials">
        <div className="container">
          <span className="section-label">Background</span>
          <h2 className="section-heading">Training &amp; Tradition</h2>
          <div className="cred-grid">
            {credentials.map((c) => (
              <div key={c.title} className="cred-card">
                <div className="cred-card__icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. VALUES ── */}
      <section className="values">
        <div className="values__texture" />
        <div className="container">
          <span className="section-label section-label--light">
            What Guides the Work
          </span>
          <h2 className="section-heading section-heading--light">
            The heart behind every piece
          </h2>
          <div className="values__grid">
            {values.map((v) => (
              <div key={v.title} className="value-item">
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <span className="section-label">See the Work</span>
          <h2 className="about-cta__heading">Ready to explore the gallery?</h2>
          <p className="about-cta__sub">
            Each painting is created slowly and with intention — never
            mass-produced, never rushed. Come see what that looks like.
          </p>
          <a href="/gallery" className="btn btn--dark">
            View Gallery
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
