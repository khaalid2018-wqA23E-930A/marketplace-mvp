export const PRODUCTS = [
    {
        id: "p1",
        title: "Hydrating Face Cream",
        price: 24.99,
        image: "/assets/face-cream.jpg",
        description: "Lightweight moisturizer for daily use.",
        category: "Beauty",
        stock: 25
    },
    {
        id: "p2",
        title: "Wireless Earbuds",
        price: 49.99,
        image: "/assets/earbuds.jpg",
        description: "Bluetooth 5.3 with noise reduction.",
        category: "Electronics",
        stock: 50
    },
    {
        id: "p3",
        title: "Home Scented Candle",
        price: 14.5,
        image: "/assets/candle.jpg",
        description: "Lavender & vanilla, 40h burn time.",
        category: "Home",
        stock: 40
    }
];

export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find(p => p.id === id) || null;
}
