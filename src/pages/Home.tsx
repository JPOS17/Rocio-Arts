import "../styles/Home.css";

// Image imports
import art1 from "../assets/art1.png";
import art2 from "../assets/art2.png";
import art3 from "../assets/art3.png";
import headshot1 from "../assets/headshot1.png";
import headshot2 from "../assets/headshot2.png";

const Home = () => {
  return (
    <div className="home">
      {/* ── 1. HERO ── */}
      <section className="hero">
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
            {/* <a href="/prints" className="btn btn--light">
              Shop Prints
            </a> */}
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
                img: art3,
                title: "Prints",
                sub: "Affordable reproductions for every space",
                href: "/prints",
              },
              {
                img: art2,
                title: "Originals",
                sub: "One-of-a-kind oil & acrylic paintings",
                href: "/originals",
              },
              {
                img: art1,
                title: "Faith Series",
                sub: "Saints, scripture & sacred moments",
                href: "/faith",
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
            <img src={art2} alt="Lion and Lamb painting" />
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

      {/* ── 5. BEST SELLERS ── */}
      {/* <section className="products">
        <div className="container">
          <span className="section-label">Shop</span>
          <h2 className="section-heading">Best Sellers</h2>
          <div className="products__grid">
            {[
              {
                img: art1,
                title: "The Last Supper",
                price: "$45",
                tag: "Print",
              },
              {
                img: art2,
                title: "Lion & the Lamb",
                price: "$380",
                tag: "Original",
              },
              {
                img: art3,
                title: "Cardinal in Winter",
                price: "$55",
                tag: "Print",
              },
              {
                img: art1,
                title: "The Last Supper — Large",
                price: "$95",
                tag: "Print",
              },
              {
                img: art2,
                title: "Lion & the Lamb — Small",
                price: "$35",
                tag: "Print",
              },
              {
                img: art3,
                title: "Cardinal — Giclée",
                price: "$65",
                tag: "Print",
              },
            ].map((p, i) => (
              <div key={i} className="product-card">
                <div className="product-card__img-wrap">
                  <span className="product-card__tag">{p.tag}</span>
                  <img src={p.img} alt={p.title} />
                </div>
                <div className="product-card__info">
                  <h4>{p.title}</h4>
                  <p className="product-card__price">{p.price}</p>
                  <button className="btn btn--dark btn--sm">
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
              src={art3}
              alt="Detail of a painting"
              className="process__img process__img--accent"
            />
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ── */}
      {/* <section className="testimonials">
        <div className="container">
          <span className="section-label">Kind Words</span>
          <h2 className="section-heading">What Collectors Say</h2>
          <div className="testimonials__grid">
            {[
              {
                quote:
                  "This piece brought so much peace into my home. I find myself stopping just to look at it every day.",
                name: "Maria G.",
                location: "Houston, TX",
              },
              {
                quote:
                  "You can feel the faith behind every brushstroke. It's unlike anything I've ever bought — it's prayerful.",
                name: "James R.",
                location: "Austin, TX",
              },
              {
                quote:
                  "The Lion & the Lamb print is absolutely stunning. The gold tones are even more beautiful in person.",
                name: "Sofia M.",
                location: "San Antonio, TX",
              },
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-card__stars">★★★★★</div>
                <p className="testimonial-card__quote">"{t.quote}"</p>
                <div className="testimonial-card__author">
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── 8. EMAIL SIGNUP ── */}
      <section className="email-signup">
        <div
          className="email-signup__bg"
          style={{ backgroundImage: `url(${art3})` }}
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
          <img src={art1} alt="Faith artwork" className="final-cta__art" />
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
