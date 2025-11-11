// src/pages/api/products/[id].js
import { PRODUCTS } from "@/lib/data";

export default function handler(req, res) {
    const { id } = req.query;
    const item = PRODUCTS.find(p => p.id === id);
    if (!item) return res.status(404).json({ error: "Not found" });
    return res.status(200).json({ product: item });
}
