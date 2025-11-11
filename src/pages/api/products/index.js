// src/pages/api/products/index.js
import { PRODUCTS } from "@/lib/data";

export default function handler(req, res) {
    if (req.method === "GET") {
        // return under `products` key for compatibility with existing frontend
        return res.status(200).json({ products: PRODUCTS });
    }
    return res.status(405).json({ error: "Method Not Allowed" });
}
