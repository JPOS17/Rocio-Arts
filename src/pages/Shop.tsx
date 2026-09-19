import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../styles/Global.css";
import "../styles/Gallery.css";

// Watercolor Illustrations (sold as prints)
import ill1 from "../assets/illustrations/ill1.png";
import ill2 from "../assets/illustrations/ill2.png";
import ill3 from "../assets/illustrations/ill3.png";
import ill4 from "../assets/illustrations/ill4.png";
import ill5 from "../assets/illustrations/ill5.png";

// Custom Portrait Commission Examples
import cust1 from "../assets/customs/cust1.png";
import cust2 from "../assets/customs/cust2.png";
import cust3 from "../assets/customs/cust3.png";
import cust4 from "../assets/customs/cust4.png";
import cust5 from "../assets/customs/cust5.png";
import cust6 from "../assets/customs/cust6.png";
import cust7 from "../assets/customs/cust7.png";
import cust8 from "../assets/customs/cust8.png";
import cust9 from "../assets/customs/cust9.png";

type ShopCategory = "All" | "Watercolor" | "Pastel" | "Digital Custom Portraits";

interface ShopItem {
  id: number;
  img: string;
  title: string;
  medium: string;
  size?: string;
  price?: string;
  category: Exclude<ShopCategory, "All">;
}

// Prints ready to sell today. "Original Prints" (prints of the paintings)
// will be added here once pricing and sizing are finalized.
const shopItems: ShopItem[] = [
  {
    id: 1,
    img: ill1,
    title: "Flight into Egypt",
    medium: "Digital watercolor print",
    size: '10" x 8"',
    price: "$9.99",
    category: "Watercolor",
  },
  {
    id: 2,
    img: ill2,
    title: "Our Lady of Expectation",
    medium: "Digital watercolor print",
    size: '10" x 8"',
    price: "$9.99",
    category: "Watercolor",
  },
  {
    id: 3,
    img: ill3,
    title: "The Good Shepherd",
    medium: "Digital watercolor print",
    size: '10" x 8"',
    price: "$9.99",
    category: "Watercolor",
  },
  {
    id: 4,
    img: ill4,
    title: "Madonna & Child",
    medium: "Digital watercolor print",
    size: '10" x 8"',
    price: "$9.99",
    category: "Watercolor",
  },
  {
    id: 5,
    img: ill5,
    title: "Our Lady of Grace",
    medium: "Digital Pastel  print",
    size: '10" x 8"',
    price: "$9.99",
    category: "Pastel",
  },
  {
    id: 13,
    img: cust8,
    title: "Our Lady's Blessing",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 7,
    img: cust2,
    title: "Wedding Carriage",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 8,
    img: cust3,
    title: "Sunset Beach Couple",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 9,
    img: cust1,
    title: "Family by the Lake",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 10,
    img: cust5,
    title: "Sisters at the Cathedral",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 11,
    img: cust6,
    title: "Porch Swing",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 12,
    img: cust7,
    title: "Mont Saint-Michel",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 6,
    img: cust4,
    title: "First Communion",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 14,
    img: cust9,
    title: "First Dance",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
];

const CATEGORIES: ShopCategory[] = [
  "All",
  "Watercolor",
  "Pastel",
  "Digital Custom Portraits",
];

// Where the "Buy" button sends someone: a pre-filled contact form, standing
// in as a simple order form until an Etsy/Shopify-style checkout is added.
const getBuyLink = (item: ShopItem) => {
  const params = new URLSearchParams({
    subject: "Print order",
    item: `${item.title} print (${item.size}, ${item.price} + shipping)`,
  });
  return `/contact?${params.toString()}`;
};

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const initialCategory: ShopCategory = CATEGORIES.includes(
    categoryParam as ShopCategory,
  )
    ? (categoryParam as ShopCategory)
    : "All";

  const [active, setActive] = useState<ShopCategory>(initialCategory);

  // Keeps the tab in sync if the category changes via URL (e.g. a link from
  // the Home page landing directly on a specific tab).
  useEffect(() => {
    setActive(initialCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryParam]);

  const filtered =
    active === "All"
      ? shopItems.filter((item) => item.category !== "Digital Custom Portraits")
      : shopItems.filter((item) => item.category === active);

  return (
    <div className="gallery-page">
      {/* ── HERO ── */}
      <section className="gallery-hero">
        <div
          className="gallery-hero__bg"
          style={{ backgroundImage: `url(${ill5})` }}
        />
        <div className="gallery-hero__overlay" />
        <div className="gallery-hero__content">
          <p className="hero__eyebrow">Rocio Ortiz Studio</p>
          <h1 className="gallery-hero__headline">Shop</h1>
          <p className="gallery-hero__sub">
            Bring a piece of the studio into your home
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
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="gallery-filters__count">
            {filtered.length} {filtered.length === 1 ? "item" : "items"}
          </p>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="gallery-grid-section">
        <div className="container">
          {active === "Digital Custom Portraits" && (
            <div className="portraits-cta-banner">
              <div className="portraits-cta-banner__text">
                <span className="portraits-cta-banner__eyebrow">
                  Custom Work
                </span>
                <p className="portraits-cta-banner__heading">
                  Want your own custom portrait?
                </p>
                <p className="portraits-cta-banner__sub">
                  Each portrait is created uniquely for you — reach out to
                  start yours.
                </p>
              </div>
              <Link
                to="/contact?subject=Commission%20inquiry&item=Digital%20Custom%20Portrait"
                className="btn btn--dark portraits-cta-banner__btn"
              >
                Inquire About Digital Custom Portraits →
              </Link>
            </div>
          )}

          {filtered.length > 0 ? (
            <div className="gallery-grid">
              {filtered.map((item, i) => (
                <article
                  key={`${active}-${item.id}`}
                  className="art-card"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div className="art-card__img-wrap">
                    <img src={item.img} alt={item.title} loading="lazy" />
                    <span className="art-card__category">
                      {item.category}
                    </span>
                  </div>
                  <div className="art-card__info">
                    <h3 className="art-card__title">{item.title}</h3>
                    <p className="art-card__medium">{item.medium}</p>
                    <div className="art-card__footer">
                      <span className="art-card__size">{item.size}</span>
                      {item.price && (
                        <span className="art-card__price">{item.price}</span>
                      )}
                    </div>
                    {item.price && (
                      <div className="art-card__actions">
                        <Link
                          to={getBuyLink(item)}
                          className="btn btn--dark btn--sm art-card__btn"
                        >
                          Buy
                        </Link>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="shop-empty-note">
              Original prints are coming soon — check back shortly!
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;