import type { CSSProperties } from "react";
import { Link } from "react-router-dom";

import { artworks, eucharistic, lion_lamb } from "../data/artworks";

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