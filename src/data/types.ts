/**
 * Shared shapes for anything that renders as an artwork or product card
 * (Gallery originals, Shop prints, custom-portrait examples, kids' items).
 *
 * `Artwork` and `ShopItem` both extend this instead of repeating the same
 * six fields, so a change to the common shape only happens once.
 */
export interface ArtworkBase {
  id: number;
  img: string;
  title: string;
  medium: string;
  size?: string;
  price?: string;
}