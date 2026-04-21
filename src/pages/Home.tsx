import "../styles/Global.css";
import "../styles/Home.css";

// ─── Oil / Acrylic Originals ─────────────────────────────
import art1 from "../assets/oil/art1.png";
import art2 from "../assets/oil/art2.png";
import art3 from "../assets/oil/art3.png";

// ─── Custom Portraits ────────────────────────────────────
import cust3 from "../assets/customs/cust3.png";
import cust5 from "../assets/customs/cust5.png";
import cust6 from "../assets/customs/cust6.png";
import cust8 from "../assets/customs/cust8.png";

// ─── Watercolor Illustrations ────────────────────────────
import ill1 from "../assets/illustrations/ill1.png";
import ill2 from "../assets/illustrations/ill2.png";
import ill3 from "../assets/illustrations/ill3.png";
import ill4 from "../assets/illustrations/ill4.png";
import ill5 from "../assets/illustrations/ill5.png";

// ─── Headshots ───────────────────────────────────────────
import headshot1 from "../assets/headshots/headshot1.png";
import headshot2 from "../assets/headshots/headshot2.png";

const Home = () => {
  return (
    <div className="home">
      {/* ── 1. HERO ── */}
      <section className="hero">
        {/* Hero background: oil painting — The Last Supper */}
        <div className="hero__bg" style={{ backgroundImage: `url(${art1})` }} />
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__eyebrow">Rocio Ortiz Studio</p>
          <h1 className="hero__headline">
            Faith-inspired artwork that invites you
            <br />
            into prayerful moments
          </h1>
          <p className="hero__sub">
            Original paintings and prints created to deepen your connection with
            God
          </p>
          <div className="hero__ctas">
            <a href="/gallery" className="btn btn--outline-light">
              View Gallery
            </a>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span />
        </div>
      </section>

      {/* ── 2. INTRO ── */}
      <section className="intro">
        <div className="intro__inner container">
          <div className="intro__image-wrap">
            <img
              src={headshot1}
              alt="Rocio Ortiz, artist"
              className="intro__photo"
            />
            <div className="intro__image-accent" />
          </div>
          <div className="intro__text">
            <span className="section-label">The Artist</span>
            <h2 className="intro__heading">Hi, I'm Rocio&nbsp;🤍</h2>
            <p className="intro__body">
              I'm a graduate of the Savannah College of Art and Design with a
              BFA in Communication Arts, Illustration and Design. As a Catholic
              artist, I use my work to share stories, convey emotions, and
              express the deeper truths of faith.
            </p>
            <p className="intro__body">
              Prayer and reflection play a key role in my process, where I seek
              new ways to express God's love and challenge myself as an artist.
              My greatest motivation is creating art that invites viewers to
              feel as though they're part of the piece.
            </p>
            <a href="/about" className="btn btn--dark">
              Read My Story
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. COLLECTIONS ── */}
      <section className="collections">
        <div className="container">
          <span className="section-label">Explore</span>
          <h2 className="section-heading">Featured Collections</h2>
          <div className="collections__grid">
            {[
              {
                img: art2,
                title: "Originals",
                sub: "One-of-a-kind oil & acrylic paintings",
                href: "/gallery",
              },
              {
                img: cust6,
                title: "Custom Portraits",
                sub: "Illustrated portraits of your cherished moments",
                href: "/gallery",
              },
              {
                img: ill1,
                title: "Illustrations",
                sub: "Soft watercolor & devotional digital art",
                href: "/gallery",
              },
            ].map((col) => (
              <a key={col.title} href={col.href} className="collection-card">
                <div className="collection-card__img-wrap">
                  <img src={col.img} alt={col.title} />
                  <div className="collection-card__overlay" />
                </div>
                <div className="collection-card__text">
                  <h3>{col.title}</h3>
                  <p>{col.sub}</p>
                  <span className="collection-card__link">Explore →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. "WHY" / MISSION ── */}
      <section className="why">
        <div className="why__texture" />
        <div className="container why__inner">
          <div className="why__art">
            <img src={art3} alt="Red Cardinal" />
          </div>
          <div className="why__text">
            <span className="section-label section-label--light">
              The Heart Behind the Work
            </span>
            <h2 className="why__heading">
              Each piece begins in
              <br />
              prayer and reflection
            </h2>
            <p className="why__body">
              I believe art is a bridge that transforms abstract thoughts into
              something beautiful and tangible. I aim to capture scenes that
              deepen the soul's connection to the faith — and help the heart
              grasp truths beyond the mind's understanding.
            </p>
            <blockquote className="why__quote">
              "Art is not what you see, but what you make others see."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── 5. CUSTOM PORTRAITS SPOTLIGHT ── */}
      <section className="collections">
        <div className="container">
          <span className="section-label">Custom Work</span>
          <h2 className="section-heading">Portraits Made for You</h2>
          <p
            style={{
              textAlign: "center",
              maxWidth: "560px",
              margin: "0 auto 2.5rem",
              color: "var(--text-mid, #666)",
              lineHeight: 1.7,
            }}
          >
            Every family, wedding, and milestone deserves to be remembered
            beautifully. Commission a custom illustrated portrait — a
            one-of-a-kind gift that lasts a lifetime.
          </p>
          <div className="collections__grid">
            {[
              {
                img: cust8,
                title: "Wedding Portraits",
                sub: "Celebrate your vows with a keepsake illustration",
                href: "/gallery",
              },
              {
                img: cust3,
                title: "Couples & Families",
                sub: "Capture a treasured moment together",
                href: "/gallery",
              },
              {
                img: cust5,
                title: "Special Occasions",
                sub: "First communions, graduations & more",
                href: "/gallery",
              },
            ].map((col) => (
              <a key={col.title} href={col.href} className="collection-card">
                <div className="collection-card__img-wrap">
                  <img src={col.img} alt={col.title} />
                  <div className="collection-card__overlay" />
                </div>
                <div className="collection-card__text">
                  <h3>{col.title}</h3>
                  <p>{col.sub}</p>
                  <span className="collection-card__link">Inquire →</span>
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="/contact" className="btn btn--dark">
              Start a Commission
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. PROCESS ── */}
      <section className="process">
        <div className="container process__inner">
          <div className="process__text">
            <span className="section-label">Behind the Art</span>
            <h2 className="process__heading">
              Rooted in prayer,
              <br />
              made with intention
            </h2>
            <p className="process__body">
              Each canvas begins not with a brush but with silence. I spend time
              in prayer before the first stroke — letting the Holy Spirit guide
              the composition, the color, the feeling. Every painting is created
              slowly and intentionally, never rushed, never mass-produced.
            </p>
            <p className="process__body">
              From initial sketches to final glazes, the process can take weeks.
              This is how I ensure each piece carries something real — something
              you can feel when you stand before it.
            </p>
          </div>
          <div className="process__images">
            <img
              src={headshot2}
              alt="Rocio in her studio"
              className="process__img process__img--main"
            />
            <img
              src={ill4}
              alt="Child illustration"
              className="process__img process__img--accent"
            />
          </div>
        </div>
      </section>

      {/* ── 7. FAITH ILLUSTRATIONS STRIP ── */}
      <section className="why">
        <div className="why__texture" />
        <div
          className="container why__inner"
          style={{ flexDirection: "row-reverse" }}
        >
          <div className="why__art">
            {/* Illustration: The Good Shepherd */}
            <img src={ill3} alt="The Good Shepherd illustration" />
          </div>
          <div className="why__text">
            <span className="section-label section-label--light">
              Illustrations
            </span>
            <h2 className="why__heading">
              Devotional art
              <br />
              for every season
            </h2>
            <p className="why__body">
              From tender watercolor to luminous Nativity scenes, these soft
              digital illustrations were created to live in your home, your
              prayer space, or as a meaningful gift for someone you love.
            </p>
            <a href="/gallery" className="btn btn--dark">
              Browse Illustrations
            </a>
          </div>
        </div>
      </section>

      {/* ── 8. EMAIL SIGNUP ── */}
      <section className="email-signup">
        <div
          className="email-signup__bg"
          style={{ backgroundImage: `url(${ill2})` }}
        />
        <div className="email-signup__overlay" />
        <div className="container email-signup__inner">
          <span className="section-label section-label--light">
            Stay Connected
          </span>
          <h2 className="email-signup__heading">Join the Studio</h2>
          <p className="email-signup__sub">
            New artwork, early releases, and faith-filled inspiration —
            delivered to your inbox 🤍
          </p>
          <form
            className="email-signup__form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="email-signup__input"
            />
            <button type="submit" className="btn btn--light">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="final-cta">
        <div className="container final-cta__inner">
          <img src={ill5} alt="Our Lady of Grace" className="final-cta__art" />
          <div className="final-cta__text">
            <h2 className="final-cta__heading">
              Bring a moment of peace
              <br />
              into your space
            </h2>
            <p className="final-cta__sub">
              Handcrafted with prayer. Painted with purpose. Made for your home.
            </p>
            <a href="/gallery" className="btn btn--dark">
              Shop Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
