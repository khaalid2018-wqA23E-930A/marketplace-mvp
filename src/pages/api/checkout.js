// src/pages/api/checkout.js
import Stripe from "stripe";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end("Method Not Allowed");
    }

    try {
        const { lineItems } = req.body; // [{ name, amount, quantity, currency }]
        if (!Array.isArray(lineItems) || lineItems.length === 0) {
            return res.status(400).json({ error: "Missing lineItems" });
        }

        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

        // If STRIPE secret key is not set, behave in mock mode and return a local success URL
        if (!process.env.STRIPE_SECRET_KEY) {
            // Create a simple mock redirect URL that includes basic info for debugging
            const mockId = Date.now();
            const params = new URLSearchParams({ mock: "1", id: String(mockId) });
            return res.status(200).json({ url: `${siteUrl}/success?${params.toString()}` });
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items: lineItems.map((i) => ({
                price_data: {
                    currency: i.currency || "eur",
                    product_data: { name: i.name },
                    unit_amount: i.amount, // in cents
                },
                quantity: i.quantity || 1,
            })),
            success_url: `${siteUrl}/success`,
            cancel_url: `${siteUrl}/cancel`,
        });

        return res.status(200).json({ url: session.url });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Stripe error" });
    }
}
