// src/pages/api/products.js
let PRODUCTS = [
    {
        id: "p1",
        title: "Minimal Tee - Black",
        price: 2499, // cents
        image: "https://via.placeholder.com/400",
        description: "Clean black tee.",
    },
    {
        id: "p2",
        title: "Leather Wallet",
        price: 5999,
        image: "https://via.placeholder.com/400",
        description: "Handmade wallet.",
    },
];

export default function handler(req, res) {
    if (req.method === "GET") {
        return res.status(200).json({ products: PRODUCTS });
    }

    if (req.method === "POST") {
        const { title, price, image, description } = req.body || {};
        if (!title || !price) {
            return res.status(400).json({ error: "title and price are required" });
        }
        const item = {
            id: "p" + (Date.now()),
            title,
            price: Number(price), // expect cents, e.g. 5999
            image: image || "https://via.placeholder.com/400",
            description: description || "",
        };
        PRODUCTS.unshift(item);
        return res.status(201).json({ product: item });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end("Method Not Allowed");
}
