import type { ArtworkBase } from "./types";

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

export type ShopCategory =
  | "All"
  | "Watercolor"
  | "Pastel"
  | "Digital Custom Portraits"
  | "Children's Activities";

export const KIDS = "Children's Activities" as const;

// SET YOUR PRICES HERE
const PUZZLE_PRICE = "";
const COLORING_BOOK_PRICE = "";

export interface ShopItem extends ArtworkBase {
  category: Exclude<ShopCategory, "All">;
  images?: string[];
  viewLabels?: string[];
}

/**
 * TO ADD A NEW ITEM:
 *   1. Drop the image(s) in the matching src/assets/ subfolder
 *      (illustrations/, customs/, children_misc/, ...)
 *   2. Import it in the matching section above
 *   3. Add an entry below — `id` just needs to be unique across this file
 *
 * Prints ready to sell today. "Original Prints" (prints of the paintings)
 * will be added here once pricing and sizing are finalized.
 */
export const shopItems: ShopItem[] = [
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

export const CATEGORIES: ShopCategory[] = [
  "All",
  "Watercolor",
  "Pastel",
  KIDS,
  "Digital Custom Portraits",
];

// Where the "Buy" button sends someone: a pre-filled contact form, standing
// in as a simple order form until an Etsy/Shopify-style checkout is added.
export const getBuyLink = (item: ShopItem) => {
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

// Re-exported so the "Custom Portraits" CTA banner (which shows the same
// commission examples) doesn't need its own import of this file.
export { mary_jesus_pastel };