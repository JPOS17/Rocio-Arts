import "../styles/Global.css";
import "../styles/Home.css";
import { useState } from "react";

// Oil / Acrylic Originals
import eucharistic from "../assets/originals/eucharistic.png";
import lion_lamb from "../assets/originals/lion_lamb.png";
import redcardinal from "../assets/originals/redcardinal.png";

// Custom Portraits
import sunset_couple from "../assets/customs/sunset_couple.png";
import sisters_cathedral from "../assets/customs/sisters_cathedral.png";
import porch_swing from "../assets/customs/porch_swing.png";
import our_ladys_blessing from "../assets/customs/our_ladys_blessing.png";

// Watercolor Illustrations
import holyfamily from "../assets/illustrations/holyfamily.png";
import mary from "../assets/illustrations/mary.png";
import pastor from "../assets/illustrations/pastor.png";
import mary_jesus_water from "../assets/illustrations/mary_jesus_water.png";
import mary_jesus_pastel from "../assets/illustrations/mary_jesus_pastel.png";

// personal
import headshot1 from "../assets/personal/headshot1.png";
import headshot2 from "../assets/personal/headshot2.png";
import { Link } from "react-router-dom";

const KIT_FORM_ID = import.meta.env.VITE_KIT_FORM_ID;
const KIT_API_KEY = import.meta.env.VITE_KIT_API_KEY;

const Home = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(
        `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ api_key: KIT_API_KEY, email }),
        },
      );
      if (!res.ok) throw new Error("Failed to subscribe");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="home">
      {/* ── 1. HERO ── */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: `url(${eucharistic})` }} />
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__eyebrow">Art Studio</p>
          <h1 className="hero__headline">
            Faith-inspired artwork
            <br /> 
            that invites you
            <br />
            into prayerful moments
          </h1>
          <p className="hero__sub">
            Original paintings and prints created to deepen your connection with
            God
          </p>
          <div className="hero__ctas">
            <Link to="/gallery" className="btn btn--outline-light">
              View Gallery
            </Link>
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
            <h2 className="intro__heading">Hi, I'm Rocio</h2>
            <p className="intro__body">
              A Catholic artist and illustrator creating art that celebrates the beauty of our faith and the stories that bring us closer to God.
            </p>
            <p className="intro__body">
              From meaningful artwork to joyful designs for Christian families and homes, my hope is that each piece invites you to pause, reflect, and carry a little more of God’s love into your everyday life.
            </p>
            <Link to="/about" className="btn btn--dark">
              Read My Story
            </Link>
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
                img: lion_lamb,
                title: "Originals",
                sub: "One-of-a-kind oil & acrylic paintings",
                to: "/gallery",
              },
              {
                img: porch_swing,
                title: "Custom Portraits",
                sub: "Illustrated portraits of your cherished moments",
                to: "/shop?category=Digital Custom Portraits",
              },
              {
                img: holyfamily,
                title: "Illustrations",
                sub: "Soft watercolor & devotional digital art",
                to: "/shop?category=Prints",
              },
            ].map((col) => (
              <Link key={col.title} to={col.to} className="collection-card">
                <div className="collection-card__img-wrap">
                  <img src={col.img} alt={col.title} />
                  <div className="collection-card__overlay" />
                </div>
                <div className="collection-card__text">
                  <h3>{col.title}</h3>
                  <p>{col.sub}</p>
                  <span className="collection-card__link">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. "WHY" / MISSION ── */}
      <section className="why">
        <div className="why__texture" />
        <div className="container why__inner">
          <div className="why__art">
            <img src={redcardinal} alt="Red Cardinal" />
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
                img: our_ladys_blessing,
                title: "Wedding Portraits",
                sub: "Celebrate your vows with a keepsake illustration",
                to: "/shop?category=Digital Custom Portraits",
              },
              {
                img: sunset_couple,
                title: "Couples & Families",
                sub: "Capture a treasured moment together",
                to: "/shop?category=Digital Custom Portraits",
              },
              {
                img: sisters_cathedral,
                title: "Special Occasions",
                sub: "First communions, graduations & more",
                to: "/shop?category=Digital Custom Portraits",
              },
            ].map((col) => (
              <Link key={col.title} to={col.to} className="collection-card">
                <div className="collection-card__img-wrap">
                  <img src={col.img} alt={col.title} />
                  <div className="collection-card__overlay" />
                </div>
                <div className="collection-card__text">
                  <h3>{col.title}</h3>
                  <p>{col.sub}</p>
                  <span className="collection-card__link">Inquire →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/contact" className="btn btn--dark">
              Start a Commission
            </Link>
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
              src={mary_jesus_water}
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
            <img src={pastor} alt="The Good Shepherd illustration" />
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
            <Link to="/shop?category=Prints" className="btn btn--dark">
              Browse Illustrations
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. EMAIL SIGNUP ── */}
      <section className="email-signup">
        <div
          className="email-signup__bg"
          style={{ backgroundImage: `url(${mary})` }}
        />
        <div className="email-signup__overlay" />
        <div className="container email-signup__inner">
          <span className="section-label section-label--light">
            Stay Connected
          </span>
          <h2 className="email-signup__heading">Join the Studio</h2>
          <p className="email-signup__sub">
            New artwork, early releases, and faith-filled inspiration —
            delivered to your inbox
          </p>
          {status === "success" ? (
            <p style={{ color: "#fff", fontSize: "1.1rem", marginTop: "1rem" }}>
              Thank you for subscribing to the studio!
            </p>
          ) : (
            <>
              <form className="email-signup__form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="email-signup__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="btn btn--light"
                  disabled={status === "loading"}
                  style={{ transform: "none" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "none")
                  }
                >
                  {status === "loading" ? "Subscribing…" : "Subscribe"}
                </button>
              </form>
              {status === "error" && (
                <p
                  style={{
                    color: "#ffaaaa",
                    marginTop: "0.75rem",
                    fontSize: "0.9rem",
                  }}
                >
                  Please enter a valid email address.
                </p>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="final-cta">
        <div className="container final-cta__inner">
          <img src={mary_jesus_pastel} alt="Our Lady of Grace" className="final-cta__art" />
          <div className="final-cta__text">
            <h2 className="final-cta__heading">
              Bring a moment of peace
              <br />
              into your space
            </h2>
            <p className="final-cta__sub">
              Handcrafted with prayer. Painted with purpose. Made for your home.
            </p>
            <Link to="/gallery" className="btn btn--dark">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;