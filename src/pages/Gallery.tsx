import type { CSSProperties } from "react";
import { Link } from "react-router-dom";

// Originals
import eucharistic from "../assets/originals/eucharistic.png";
import lion_lamb from "../assets/originals/lion_lamb.png";
import redcardinal from "../assets/originals/redcardinal.png";

interface Artwork {
  id: number;
  img: string;
  title: string;
  medium: string;
  size?: string;
  category: "Originals";
  available: boolean;
  price?: string;
  printsAvailable?: boolean;
  description?: string;
}

// Data
const artworks: Artwork[] = [
  {
    id: 1,
    img: eucharistic,
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
    img: lion_lamb,
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
    img: redcardinal,
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

// Where the "See What's Available" tag should send someone: browse other
// available originals, or the full shop if the medium isn't for sale there.
const getPrintsLink = () => {
  const hasAvailable = artworks.some((a) => a.available);
  return hasAvailable ? "/gallery" : "/shop";
};

// Main Gallery
const Gallery = () => {
  return (
    <div className="gallery-page">
      {/* ── HERO ── */}
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{ "--bg-image": `url(${eucharistic})` } as CSSProperties}
        />
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">Rocio Ortiz Studio</p>
          <h1 className="page-hero__headline">The Gallery</h1>
          <p className="page-hero__sub">
            Original paintings and prints — each one born in prayer
          </p>
        </div>
      </section>

      {/* ── ORIGINALS SHOWCASE ── */}
      <section className="originals-showcase-section">
        {artworks.map((art, i) => (
          <div
            key={art.id}
            className={`original-showcase${i % 2 === 1 ? " original-showcase--reverse" : ""}`}
          >
            <div className="container original-showcase__inner">
              <div className="original-showcase__image-wrap">
                <img src={art.img} alt={art.title} loading="lazy" />
                {!art.available && (
                  <span className="art-card__badge art-card__badge--sold">
                    Sold
                  </span>
                )}
              </div>
              <div className="original-showcase__details">
                <span className="section-label">{art.category}</span>
                <h2 className="original-showcase__title">{art.title}</h2>
                <p className="original-showcase__meta">
                  {art.medium}
                  {art.size ? ` · ${art.size}` : ""}
                </p>
                {art.price && (
                  <p className="lightbox__price">{art.price}</p>
                )}
                {art.description && (
                  <div className="lightbox__description lightbox__description--inline">
                    <h3 className="lightbox__description-heading">
                      About This Painting
                    </h3>
                    <p>{art.description}</p>
                  </div>
                )}
                <div className="original-showcase__actions">
                  {art.available ? (
                    <Link to="/contact" className="btn btn--dark">
                      Inquire About This Piece
                    </Link>
                  ) : (
                    <p className="lightbox__sold">
                      This piece has found its home!
                    </p>
                  )}
                  {art.printsAvailable && (
                    <Link
                      to={getPrintsLink()}
                      className="art-card__prints-tag art-card__prints-tag--lightbox"
                    >
                      See What's Available
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
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
            <img src={lion_lamb} alt="Commission example" />
            <div className="commission__art-accent" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;