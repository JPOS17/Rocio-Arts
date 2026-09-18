import "../styles/Global.css";
import "../styles/Gallery.css";

// Originals
import art1 from "../assets/oil/art1.png";
import art2 from "../assets/oil/art2.png";
import art3 from "../assets/oil/art3.png";

// Custom Portrait Commissions
import cust1 from "../assets/customs/cust1.png";
import cust2 from "../assets/customs/cust2.png";
import cust3 from "../assets/customs/cust3.png";
import cust4 from "../assets/customs/cust4.png";
import cust5 from "../assets/customs/cust5.png";
import cust6 from "../assets/customs/cust6.png";
import cust7 from "../assets/customs/cust7.png";
import cust8 from "../assets/customs/cust8.png";
import cust9 from "../assets/customs/cust9.png";

// Types
type Category = "All" | "Originals" | "Custom Portraits";

interface Artwork {
  id: number;
  img: string;
  title: string;
  medium: string;
  size?: string;
  category: Exclude<Category, "All">;
  available: boolean;
  price?: string;
  printsAvailable?: boolean;
  description?: string;
}

// Data
const artworks: Artwork[] = [
  {
    id: 1,
    img: art1,
    title: "Eucharistic Institution",
    medium: "Acrylic on canvas",
    size: '48" x 36"',
    category: "Originals",
    available: false,
    printsAvailable: true,
    description:
      "Drawing inspiration from the Last Supper, this painting invites the viewer into a quiet moment of reflection, evoking the profound presence of Christ during the Institution of the Eucharist. The abstract texture offers an impression of the scene while intentionally leaving space for personal interpretation, encouraging deeper emotional engagement. The color palette reflects the artist's intention to harmonize heaven and earth: blue evokes the divine, while the blend of green and earthy tones anchors the scene in the material world. Finally, gold represents God's eternal kingship, bringing together the divine and the human in a moment of profound connection.",
  },
  {
    id: 2,
    img: art2,
    title: "The Lion and Lamb",
    medium: "Acrylic on canvas",
    size: '12" x 16"',
    category: "Originals",
    available: false,
    printsAvailable: true,
    description:
      "In this original painting, the sovereign majesty of the Lion meets the gentle innocence of the Lamb — two images forever united in the Person of Jesus Christ. The Lion, fierce and kingly, speaks of His power, His justice, and His triumphant return. The Lamb, meek and pure, whispers of His sacrifice, His mercy, and His boundless love for a broken world. Together, they tell the one story that changes everything — that the God of all creation chose to save us not by force, but by laying down His life. This is the mystery at the heart of the Gospel: the King who became the sacrifice, and the Lamb who conquered death.",
  },
  {
    id: 3,
    img: art3,
    title: "Red Cardinal",
    medium: "Oil on canvas",
    size: '12" x 16"',
    category: "Originals",
    available: false,
    printsAvailable: true,
    description:
      "A single cardinal burns bright against the cool shadows of the forest — a vivid reminder that no matter how dark life feels, God is always present, always watching, and always closer than we think.",
  },
  {
    id: 4,
    img: cust1,
    title: "Family by the Lake",
    medium: "Digital illustration",
    size: "Digital",
    category: "Custom Portraits",
    available: true,
  },
  {
    id: 5,
    img: cust2,
    title: "Wedding Carriage",
    medium: "Digital illustration",
    size: "Digital",
    category: "Custom Portraits",
    available: true,
  },
  {
    id: 6,
    img: cust3,
    title: "Sunset Beach Couple",
    medium: "Digital illustration",
    size: "Digital",
    category: "Custom Portraits",
    available: true,
  },
  {
    id: 7,
    img: cust4,
    title: "First Communion",
    medium: "Digital illustration",
    size: "Digital",
    category: "Custom Portraits",
    available: true,
  },
  {
    id: 8,
    img: cust5,
    title: "Sisters at the Cathedral",
    medium: "Digital illustration",
    size: "Digital",
    category: "Custom Portraits",
    available: true,
  },
  {
    id: 9,
    img: cust6,
    title: "Porch Swing",
    medium: "Digital illustration",
    size: "Digital",
    category: "Custom Portraits",
    available: true,
  },
  {
    id: 10,
    img: cust7,
    title: "Mont Saint-Michel",
    medium: "Digital illustration",
    size: "Digital",
    category: "Custom Portraits",
    available: true,
  },
  {
    id: 11,
    img: cust8,
    title: "Our Lady's Blessing",
    medium: "Digital illustration",
    size: "Digital",
    category: "Custom Portraits",
    available: true,
  },
  {
    id: 12,
    img: cust9,
    title: "First Dance",
    medium: "Digital illustration",
    size: "Digital",
    category: "Custom Portraits",
    available: true,
  },
];

const CATEGORIES: Category[] = ["All", "Originals", "Custom Portraits"];

const customPortraits = artworks.filter(
  (a) => a.category === "Custom Portraits",
);

// Where the "See What's Available" tag should send someone: browse other
// available pieces in the same category, or the full gallery if none are
// left there.
const getPrintsLink = (category: Artwork["category"]) => {
  const hasAvailableInCategory = artworks.some(
    (a) => a.category === category && a.available,
  );
  return hasAvailableInCategory
    ? `/gallery?category=${encodeURIComponent(category)}`
    : "/gallery";
};

// Component imports
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

// Portrait Flipbook
const PortraitFlipbook = () => {
  const [displayed, setDisplayed] = useState(0);
  const [next, setNext] = useState(1);
  const [fading, setFading] = useState(false);

  const total = customPortraits.length;

  const go = (targetIndex: number) => {
    if (fading || targetIndex === displayed) return;
    setNext(targetIndex);
    setFading(true);
    setTimeout(() => {
      setDisplayed(targetIndex);
      setFading(false);
    }, 420);
  };

  const goDir = (dir: "prev" | "next") => {
    const target =
      dir === "next"
        ? (displayed + 1) % total
        : (displayed - 1 + total) % total;
    go(target);
  };

  return (
    <div className="portrait-flipbook">
      {/* CTA Banner */}
      <div className="portraits-cta-banner">
        <div className="portraits-cta-banner__text">
          <span className="portraits-cta-banner__eyebrow">Custom Work</span>
          <p className="portraits-cta-banner__heading">
            Want your own custom portrait?
          </p>
          <p className="portraits-cta-banner__sub">
            Each portrait is created uniquely for you — reach out to start
            yours.
          </p>
        </div>
        <Link to="/contact" className="btn btn--dark portraits-cta-banner__btn">
          Request a Custom Portrait →
        </Link>
      </div>

      {/* Flipbook card */}
      <div className="flipbook-card">
        {/* Main card — fixed size, never resizes */}
        <div className="flipbook-card__main">
          <div className="flipbook-card__img-wrap">
            <img
              key={`next-${next}`}
              src={customPortraits[next].img}
              alt={customPortraits[next].title}
              className="flipbook-img flipbook-img--below"
            />
            <img
              key={`cur-${displayed}`}
              src={customPortraits[displayed].img}
              alt={customPortraits[displayed].title}
              className={`flipbook-img flipbook-img--top${fading ? " flipbook-img--fading" : ""}`}
            />
          </div>

          {/* Info strip */}
          <div className="flipbook-card__info">
            <div className="flipbook-card__meta">
              <h3 className="flipbook-card__title">
                {customPortraits[displayed].title}
              </h3>
              <p className="flipbook-card__medium">
                {customPortraits[displayed].medium}
              </p>
            </div>
            <span className="flipbook-card__portfolio-label">
              Portrait Example
            </span>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div
        className="flipbook-dots"
        role="tablist"
        aria-label="Portrait examples"
      >
        {customPortraits.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === displayed}
            aria-label={`Portrait ${i + 1}`}
            className={`flipbook-dot${i === displayed ? " flipbook-dot--active" : ""}`}
            onClick={() => go(i)}
          />
        ))}
      </div>

      {/* Counter with inline arrows */}
      <div className="flipbook-counter">
        <button
          className="flipbook-nav-inline"
          onClick={() => goDir("prev")}
          aria-label="Previous portrait"
        >
          ←
        </button>
        <span className="flipbook-counter__num">{displayed + 1}</span>
        <span className="flipbook-counter__sep">/ {total}</span>
        <button
          className="flipbook-nav-inline"
          onClick={() => goDir("next")}
          aria-label="Next portrait"
        >
          →
        </button>
      </div>
    </div>
  );
};

// Main Gallery
const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const initialCategory: Category = CATEGORIES.includes(
    categoryParam as Category,
  )
    ? (categoryParam as Category)
    : "All";

  const [active, setActive] = useState<Category>(initialCategory);
  const [lightbox, setLightbox] = useState<Artwork | null>(null);

  // Keeps the filter in sync if the category changes via URL and
  // closes the lightbox whenever that happens.
  useEffect(() => {
    setActive(initialCategory);
    setLightbox(null);
  }, [categoryParam]);

  const handleSetActive = (cat: Category) => {
    setActive(cat);
    setSearchParams(cat === "All" ? {} : { category: cat });
  };

  const nonPortraitArtworks = artworks.filter(
    (a) => a.category !== "Custom Portraits",
  );

  const filtered =
    active === "All"
      ? nonPortraitArtworks
      : active === "Custom Portraits"
        ? []
        : artworks.filter((a) => a.category === active);

  const showFlipbook = active === "Custom Portraits";

  return (
    <div className="gallery-page">
      {/* ── HERO ── */}
      <section className="gallery-hero">
        <div
          className="gallery-hero__bg"
          style={{ backgroundImage: `url(${art1})` }}
        />
        <div className="gallery-hero__overlay" />
        <div className="gallery-hero__content">
          <p className="hero__eyebrow">Rocio Ortiz Studio</p>
          <h1 className="gallery-hero__headline">The Gallery</h1>
          <p className="gallery-hero__sub">
            Original paintings and prints — each one born in prayer
          </p>
        </div>
        <div className="hero__scroll-hint">
          <span />
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="gallery-filters">
        <div className="container gallery-filters__inner">
          <p className="gallery-filters__label">Filter by</p>
          <div className="gallery-filters__tabs" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`gallery-tab${active === cat ? " gallery-tab--active" : ""}`}
                onClick={() => handleSetActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="gallery-filters__count">
            {active === "All"
              ? nonPortraitArtworks.length
              : artworks.filter((a) => a.category === active).length}{" "}
            {(active === "All"
              ? nonPortraitArtworks.length
              : artworks.filter((a) => a.category === active).length) === 1
              ? "work"
              : "works"}
          </p>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="gallery-grid-section">
        <div className="container">
          {active !== "Custom Portraits" && (
            <>
              <div className="gallery-grid">
                {filtered.map((art, i) => (
                  <article
                    key={`${active}-${art.id}`}
                    className="art-card"
                    style={{ animationDelay: `${i * 0.06}s` }}
                    onClick={() => setLightbox(art)}
                  >
                    <div className="art-card__img-wrap">
                      <img src={art.img} alt={art.title} loading="lazy" />
                      <div className="art-card__overlay">
                        <span className="art-card__zoom">View</span>
                      </div>
                      {!art.available && (
                        <span className="art-card__badge art-card__badge--sold">
                          Sold
                        </span>
                      )}
                      <span className="art-card__category">{art.category}</span>
                    </div>
                    <div className="art-card__info">
                      <h3 className="art-card__title">{art.title}</h3>
                      <p className="art-card__medium">{art.medium}</p>
                      <div className="art-card__footer">
                        <span className="art-card__size">{art.size}</span>
                        {art.price && (
                          <span className="art-card__price">{art.price}</span>
                        )}
                      </div>
                      <div className="art-card__actions">
                        {art.available ? (
                          <button className="btn btn--dark btn--sm art-card__btn">
                            Inquire
                          </button>
                        ) : (
                          <button
                            className="btn btn--sm art-card__btn art-card__btn--disabled"
                            disabled
                          >
                            Sold
                          </button>
                        )}
                        {art.printsAvailable && (
                          <Link
                            to={getPrintsLink(art.category)}
                            className="art-card__prints-tag"
                            onClick={(e) => e.stopPropagation()}
                          >
                            See What's Available
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {showFlipbook && <PortraitFlipbook />}
        </div>
      </section>

      {/* ── COMMISSION STRIP ── */}
      <section className="commission">
        <div className="container commission__inner">
          <div className="commission__text">
            <span className="section-label">Custom Work</span>
            <h2 className="commission__heading">
              Commission an original piece
            </h2>
            <p className="commission__body">
              Looking for something created just for you? I take a limited
              number of commissions each year — faith-inspired subjects,
              personal devotions, and gifts that last a lifetime.
            </p>
            <Link to="/contact" className="btn btn--dark">
              Start a Conversation
            </Link>
          </div>
          <div className="commission__art">
            <img src={art2} alt="Commission example" />
            <div className="commission__art-accent" />
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div className="lightbox__card">
            <button
              className="lightbox__close"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="lightbox__img-wrap">
              <img src={lightbox.img} alt={lightbox.title} />
            </div>
            <div className="lightbox__details">
              <span className="section-label">{lightbox.category}</span>
              <h2 className="lightbox__title">{lightbox.title}</h2>
              <p className="lightbox__medium">{lightbox.medium}</p>
              <p className="lightbox__size">{lightbox.size}</p>
              {lightbox.price && (
                <p className="lightbox__price">{lightbox.price}</p>
              )}
              {lightbox.description && (
                <div className="lightbox__description">
                  <h3 className="lightbox__description-heading">
                    About This Painting
                  </h3>
                  <p>{lightbox.description}</p>
                </div>
              )}
              <div className="lightbox__actions">
                {lightbox.available ? (
                  <Link to="/contact" className="btn btn--dark">
                    Inquire About This Piece
                  </Link>
                ) : (
                  <p className="lightbox__sold">
                    This piece has found its home!
                  </p>
                )}
                {lightbox.printsAvailable && (
                  <Link
                    to={getPrintsLink(lightbox.category)}
                    className="art-card__prints-tag art-card__prints-tag--lightbox"
                    onClick={() => setLightbox(null)}
                  >
                    See What's Available
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;