import type { ArtworkBase } from "./types";

// Originals
import eucharistic from "../assets/originals/eucharistic.png";
import lion_lamb from "../assets/originals/lion_lamb.png";
import redcardinal from "../assets/originals/redcardinal.png";

export interface Artwork extends ArtworkBase {
  category: "Originals";
  available: boolean;
  printsAvailable?: boolean;
  description?: string;
}

/**
 * TO ADD A NEW ORIGINAL:
 *   1. Drop the image in src/assets/originals/
 *   2. Import it above
 *   3. Add an entry below — `id` just needs to be unique
 */
export const artworks: Artwork[] = [
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

// Re-exported so pages that need the hero/commission-strip images don't
// need a second import of the same file.
export { eucharistic, lion_lamb, redcardinal };