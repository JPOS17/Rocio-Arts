import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Illustrations (sold as prints)
import holyfamily from "../assets/illustrations/holyfamily.png";
import mary from "../assets/illustrations/mary.png";
import pastor from "../assets/illustrations/pastor.png";
import mary_jesus_water from "../assets/illustrations/mary_jesus_water.png";
import mary_jesus_pastel from "../assets/illustrations/mary_jesus_pastel.png";

// Custom Portrait Commission Examples
import family from "../assets/customs/family.png";
import wedding_carriage from "../assets/customs/wedding_carriage.png";
import sunset_couple from "../assets/customs/sunset_couple.png";
import first_communion from "../assets/customs/first_communion.png";
import sisters_cathedral from "../assets/customs/sisters_cathedral.png";
import porch_swing from "../assets/customs/porch_swing.png";
import mont_saint_michel from "../assets/customs/mont_saint_michel.png";
import our_ladys_blessing from "../assets/customs/our_ladys_blessing.png";
import first_dance from "../assets/customs/first_dance.png";

// Children's Activities (coloring book + puzzles)
// Each product has two photos: the box / cover, and the puzzle assembled or
// the book in use.
import coloring_book from "../assets/children_misc/coloring_book.jpeg";
import coloring_book1 from "../assets/children_misc/coloring_book1.jpeg";
import good_shepherd from "../assets/children_misc/good_shepherd.jpeg";
import good_shepherd1 from "../assets/children_misc/good_shepherd1.jpeg";
import nativity from "../assets/children_misc/nativity.jpeg";
import nativity1 from "../assets/children_misc/nativity1.jpeg";
import our_lady_of_guada from "../assets/children_misc/our_lady_of_guada.jpeg";
import our_lady_of_guada1 from "../assets/children_misc/our_lady_of_guada1.jpeg";
import st_joseph from "../assets/children_misc/st_joseph.jpeg";
import st_joseph1 from "../assets/children_misc/st_joseph1.jpeg";
import st_michael_archangel from "../assets/children_misc/st_michael_archangel.jpeg";
import st_michael_archangel1 from "../assets/children_misc/st_michael_archangel1.jpeg";

type ShopCategory =
  | "All"
  | "Watercolor"
  | "Pastel"
  | "Digital Custom Portraits"
  | "Children's Activities";

const KIDS = "Children's Activities" as const;

// SET YOUR PRICES HERE
const PUZZLE_PRICE = "";
const COLORING_BOOK_PRICE = "";

interface ShopItem {
  id: number;
  img: string;
  title: string;
  medium: string;
  size?: string;
  price?: string;
  category: Exclude<ShopCategory, "All">;
  images?: string[];
  viewLabels?: string[];
}

// Prints ready to sell today. "Original Prints" (prints of the paintings)
// will be added here once pricing and sizing are finalized.
const shopItems: ShopItem[] = [
  {
    id: 1,
    img: holyfamily,
    title: "Flight into Egypt",
    medium: "Digital watercolor print",
    size: '10" x 8"',
    price: "$9.99",
    category: "Watercolor",
  },
  {
    id: 2,
    img: mary,
    title: "Our Lady of Expectation",
    medium: "Digital watercolor print",
    size: '10" x 8"',
    price: "$9.99",
    category: "Watercolor",
  },
  {
    id: 3,
    img: pastor,
    title: "The Good Shepherd",
    medium: "Digital watercolor print",
    size: '10" x 8"',
    price: "$9.99",
    category: "Watercolor",
  },
  {
    id: 4,
    img: mary_jesus_water,
    title: "Madonna & Child",
    medium: "Digital watercolor print",
    size: '10" x 8"',
    price: "$9.99",
    category: "Watercolor",
  },
  {
    id: 5,
    img: mary_jesus_pastel,
    title: "Our Lady of Grace",
    medium: "Digital Pastel  print",
    size: '10" x 8"',
    price: "$9.99",
    category: "Pastel",
  },
  {
    id: 13,
    img: our_ladys_blessing,
    title: "Our Lady's Blessing",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 7,
    img: wedding_carriage,
    title: "Wedding Carriage",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 8,
    img: sunset_couple,
    title: "Sunset Beach Couple",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 9,
    img: family,
    title: "Family by the Lake",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 10,
    img: sisters_cathedral,
    title: "Sisters at the Cathedral",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 11,
    img: porch_swing,
    title: "Porch Swing",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 12,
    img: mont_saint_michel,
    title: "Mont Saint-Michel",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 6,
    img: first_communion,
    title: "First Communion",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 14,
    img: first_dance,
    title: "First Dance",
    medium: "Digital illustration",
    category: "Digital Custom Portraits",
  },
  {
    id: 15,
    img: coloring_book,
    title: "Coloring Book with the Saints",
    medium: "Coloring book",
    price: COLORING_BOOK_PRICE || undefined,
    category: KIDS,
    images: [coloring_book, coloring_book1],
    viewLabels: ["Cover", "In use"],
  },
  {
    id: 16,
    img: good_shepherd,
    title: "The Good Shepherd Puzzle",
    medium: "24-piece jigsaw puzzle",
    size: "Ages 2+",
    price: PUZZLE_PRICE || undefined,
    category: KIDS,
    images: [good_shepherd, good_shepherd1],
    viewLabels: ["Box", "Puzzle"],
  },
  {
    id: 17,
    img: nativity,
    title: "The Nativity of Our Lord Puzzle",
    medium: "24-piece jigsaw puzzle",
    size: "Ages 2+",
    price: PUZZLE_PRICE || undefined,
    category: KIDS,
    images: [nativity, nativity1],
    viewLabels: ["Box", "Puzzle"],
  },
  {
    id: 18,
    img: our_lady_of_guada,
    title: "Our Lady of Guadalupe Puzzle",
    medium: "24-piece jigsaw puzzle",
    size: "Ages 2+",
    price: PUZZLE_PRICE || undefined,
    category: KIDS,
    images: [our_lady_of_guada, our_lady_of_guada1],
    viewLabels: ["Box", "Puzzle"],
  },
  {
    id: 19,
    img: st_joseph,
    title: "St. Joseph Puzzle",
    medium: "24-piece jigsaw puzzle",
    size: "Ages 2+",
    price: PUZZLE_PRICE || undefined,
    category: KIDS,
    images: [st_joseph, st_joseph1],
    viewLabels: ["Box", "Puzzle"],
  },
  {
    id: 20,
    img: st_michael_archangel,
    title: "St. Michael the Archangel Puzzle",
    medium: "24-piece jigsaw puzzle",
    size: "Ages 2+",
    price: PUZZLE_PRICE || undefined,
    category: KIDS,
    images: [st_michael_archangel, st_michael_archangel1],
    viewLabels: ["Box", "Puzzle"],
  },
];

const CATEGORIES: ShopCategory[] = [
  "All",
  "Watercolor",
  "Pastel",
  KIDS,
  "Digital Custom Portraits",
];

// Where the "Buy" button sends someone: a pre-filled contact form, standing
// in as a simple order form until an Etsy/Shopify-style checkout is added.
const getBuyLink = (item: ShopItem) => {
  // Children's items: "Buy" when a price is set, otherwise "Inquire".
  if (item.category === KIDS) {
    const details = [item.size, item.price ? `${item.price} + shipping` : ""]
      .filter(Boolean)
      .join(", ");
    const params = new URLSearchParams({
      subject: "Children's activities",
      item: details ? `${item.title} (${details})` : item.title,
    });
    return `/contact?${params.toString()}`;
  }

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

  // Which photo is showing on each card (children's items have two).
  const [photoIndex, setPhotoIndex] = useState<Record<number, number>>({});

  // Pop-up (lightbox) for viewing a picture larger. Stores the item's id.
  const [openId, setOpenId] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const openItem =
    openId !== null ? (shopItems.find((i) => i.id === openId) ?? null) : null;

  // Move to the next/previous photo for an item (wraps around).
  const stepPhoto = useCallback((item: ShopItem, delta: number) => {
    const total = (item.images ?? [item.img]).length;
    setPhotoIndex((prev) => ({
      ...prev,
      [item.id]: (((prev[item.id] ?? 0) + delta) % total + total) % total,
    }));
  }, []);

  // While the pop-up is open: lock page scroll, focus the close button,
  // and support Esc / ← / → on the keyboard. Focus returns to the clicked
  // picture when it closes.
  useEffect(() => {
    if (!openItem) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
      else if (e.key === "ArrowLeft") stepPhoto(openItem, -1);
      else if (e.key === "ArrowRight") stepPhoto(openItem, 1);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [openItem, stepPhoto]);

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
    <div className="shop-page">
      {/* ── HERO ── */}
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{ "--bg-image": `url(${mary_jesus_pastel})` } as CSSProperties}
        />
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">Rocio Ortiz Studio</p>
          <h1 className="page-hero__headline">Shop</h1>
          <p className="page-hero__sub">
            Bring a piece of the studio into your home
          </p>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="filter-bar">
        <div className="container filter-bar__inner">
          <div className="filter-bar__tabs" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`filter-tab${active === cat ? " filter-tab--active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="filter-bar__count">
            {filtered.length} {filtered.length === 1 ? "item" : "items"}
          </p>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="card-grid-section">
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

          {active === KIDS && (
            <p className="shop-tab-intro">
              Faith-filled play for little ones — a coloring book and
              24-piece puzzles featuring beloved saints and sacred scenes.
            </p>
          )}

          {filtered.length > 0 ? (
            <div className="card-grid">
              {filtered.map((item, i) => {
                const photos = item.images ?? [item.img];
                const current = photoIndex[item.id] ?? 0;
                const isKids = item.category === KIDS;

                return (
                  <article
                    key={`${active}-${item.id}`}
                    className="art-card"
                    style={{ "--card-index": i } as CSSProperties}
                  >
                    <div className="art-card__img-wrap">
                      <button
                        type="button"
                        className="art-card__img-btn"
                        onClick={() => setOpenId(item.id)}
                        aria-label={`View ${item.title} larger`}
                      >
                        <img
                          src={photos[current] ?? item.img}
                          alt={
                            photos.length > 1 && item.viewLabels
                              ? `${item.title} — ${item.viewLabels[current]}`
                              : item.title
                          }
                          loading="lazy"
                        />
                        <span className="art-card__overlay">
                          <span className="art-card__zoom">View</span>
                        </span>
                      </button>
                      <span
                        className={`art-card__category${isKids ? " art-card__category--badge" : ""}`}
                      >
                        {item.category}
                      </span>

                      {photos.length > 1 && (
                        <>
                          <button
                            type="button"
                            className="art-card__arrow art-card__arrow--prev"
                            aria-label={`Previous photo of ${item.title}`}
                            onClick={() => stepPhoto(item, -1)}
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            type="button"
                            className="art-card__arrow art-card__arrow--next"
                            aria-label={`Next photo of ${item.title}`}
                            onClick={() => stepPhoto(item, 1)}
                          >
                            <ChevronRight size={20} />
                          </button>
                        </>
                      )}
                    </div>
                    <div className="art-card__info">
                      <h3 className="art-card__title">{item.title}</h3>
                      <p className="art-card__medium">{item.medium}</p>
                      {(item.size || item.price) && (
                        <div className="art-card__footer">
                          <span className="art-card__size">{item.size}</span>
                          {item.price && (
                            <span className="art-card__price">
                              {item.price}
                            </span>
                          )}
                        </div>
                      )}
                      {(item.price || isKids) && (
                        <div className="art-card__actions">
                          <Link
                            to={getBuyLink(item)}
                            className="btn btn--dark btn--sm art-card__btn"
                          >
                            {item.price ? "Buy" : "Inquire"}
                          </Link>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="shop-empty-note">
              Original prints are coming soon — check back shortly!
            </p>
          )}
        </div>
      </section>

      {/* ── PICTURE POP-UP ── */}
      {openItem && (() => {
        const photos = openItem.images ?? [openItem.img];
        const current = photoIndex[openItem.id] ?? 0;
        const label = openItem.viewLabels?.[current];
        return (
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={openItem.title}
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpenId(null);
            }}
          >
            <button
              ref={closeBtnRef}
              type="button"
              className="lightbox__close"
              aria-label="Close"
              onClick={() => setOpenId(null)}
            >
              <X size={22} />
            </button>

            {photos.length > 1 && (
              <button
                type="button"
                className="lightbox__arrow lightbox__arrow--prev"
                aria-label="Previous photo"
                onClick={() => stepPhoto(openItem, -1)}
              >
                <ChevronLeft size={28} />
              </button>
            )}

            <figure className="lightbox__figure">
              <img
                className="lightbox__img"
                src={photos[current] ?? openItem.img}
                alt={label ? `${openItem.title} — ${label}` : openItem.title}
              />
              <figcaption className="lightbox__caption">
                <span className="lightbox__title">{openItem.title}</span>
                <span className="lightbox__meta">
                  {openItem.medium}
                  {photos.length > 1 &&
                    ` · ${label ? `${label} · ` : ""}${current + 1} of ${photos.length}`}
                </span>
              </figcaption>
            </figure>

            {photos.length > 1 && (
              <button
                type="button"
                className="lightbox__arrow lightbox__arrow--next"
                aria-label="Next photo"
                onClick={() => stepPhoto(openItem, 1)}
              >
                <ChevronRight size={28} />
              </button>
            )}
          </div>
        );
      })()}
    </div>
  );
};

export default Shop;