/**
 * PRICING CATALOG — the ONLY file that decides what can actually be
 * purchased and for how much.
 *
 * ── TO PUT AN ITEM UP FOR SALE ──
 *   1. Add an entry below. `id` must match the id used in shopItems.ts.
 *   2. `priceCents` is the price in cents ($9.99 → 999). Stripe works in
 *      integer cents, never dollars-as-a-float, to avoid rounding bugs.
 *   3. `requiresShipping: true` if it ships physically (a mailed print,
 *      a puzzle); `false` if it's delivered digitally (no address is
 *      collected at checkout for these).
 *
 * Any item NOT listed here has no price and stays "Inquire" — its Buy
 * button sends the person to the contact form instead of Stripe.
 */

export interface CatalogEntry {
  id: number;
  priceCents: number;
  requiresShipping: boolean;
}

export const checkoutCatalog: CatalogEntry[] = [
  // ── Watercolor / Pastel prints ──
  { id: 1, priceCents: 999, requiresShipping: true }, // Flight into Egypt
  { id: 2, priceCents: 999, requiresShipping: true }, // Our Lady of Expectation
  { id: 3, priceCents: 999, requiresShipping: true }, // The Good Shepherd
  { id: 4, priceCents: 999, requiresShipping: true }, // Madonna & Child
  // { id: 5, priceCents: 999, requiresShipping: true }, // Our Lady of Grace

  // ── Children's Activities ──
  // Not listed yet: PUZZLE_PRICE / COLORING_BOOK_PRICE in shopItems.ts
  // are still blank, so these stay "Inquire" automatically
];

/** The price in cents for an item, or undefined if it isn't for sale yet. */
export const priceForId = (id: number): number | undefined =>
  checkoutCatalog.find((c) => c.id === id)?.priceCents;

/** Whether checkout should collect a shipping address for this item. */
export const requiresShippingForId = (id: number): boolean =>
  checkoutCatalog.find((c) => c.id === id)?.requiresShipping ?? false;

/** 999 → "$9.99" */
export const formatPrice = (cents: number): string => `$${(cents / 100).toFixed(2)}`;

/** The customer-facing price string for an item, or undefined if unpriced. */
export const displayPrice = (id: number): string | undefined => {
  const cents = priceForId(id);
  return cents === undefined ? undefined : formatPrice(cents);
};
