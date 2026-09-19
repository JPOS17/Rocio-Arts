import "../styles/Global.css";
import "../styles/Gallery.css";

// Originals
import art1 from "../assets/oil/art1.png";
import art2 from "../assets/oil/art2.png";
import art3 from "../assets/oil/art3.png";

// Types
type Category = "All" | "Originals";

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
];

const CATEGORIES: Category[] = ["All", "Originals"];

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

  const filtered =
    active === "All"
      ? artworks
      : artworks.filter((a) => a.category === active);

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
            {filtered.length} {filtered.length === 1 ? "work" : "works"}
          </p>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="gallery-grid-section">
        <div className="container">
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