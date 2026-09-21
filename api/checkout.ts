import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";
import {
  priceForId,
  requiresShippingForId,
} from "../src/data/checkoutCatalog.js";

// apiVersion is intentionally left unset — Stripe defaults to whatever
// version the installed `stripe` package supports.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "");

// set a real flat-rate shipping cost before going live.
const FLAT_SHIPPING_CENTS = 500; // $5.00 placeholder

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    // Fails loudly in local/dev if the env var was never set, instead of
    // silently sending an unauthenticated request to Stripe.
    res.status(500).json({ error: "Stripe is not configured on the server." });
    return;
  }

  const { itemId, title } = req.body as { itemId?: number; title?: string };

  if (typeof itemId !== "number") {
    res.status(400).json({ error: "Missing itemId." });
    return;
  }

  // The price is looked up here, server-side, from the catalog — never
  // taken from the request body. A client could otherwise submit any
  // price it wanted.
  const priceCents = priceForId(itemId);
  if (priceCents === undefined) {
    res.status(400).json({ error: "This item isn't available for purchase." });
    return;
  }

  const requiresShipping = requiresShippingForId(itemId);

  // Vercel sets VERCEL_URL on deployed environments; req.headers.origin
  // covers local dev (e.g. http://localhost:5173).
  const origin =
    req.headers.origin ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:5173");

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: priceCents,
            product_data: {
              name: title ?? `Item #${itemId}`,
            },
          },
        },
      ],
      ...(requiresShipping
        ? {
            shipping_address_collection: { allowed_countries: ["US"] },
            shipping_options: [
              {
                shipping_rate_data: {
                  type: "fixed_amount" as const,
                  fixed_amount: {
                    amount: FLAT_SHIPPING_CENTS,
                    currency: "usd",
                  },
                  display_name: "Standard shipping",
                },
              },
            ],
          }
        : {}),
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
      metadata: { itemId: String(itemId) },
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session creation failed:", err);
    res.status(500).json({ error: "Could not start checkout." });
  }
}
