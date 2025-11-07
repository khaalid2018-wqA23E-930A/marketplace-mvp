import { useEffect, useState } from "react";

export default function ProductList() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/products")
            .then((r) => r.json())
            .then((data) => setItems(data.products || []))
            .finally(() => setLoading(false));
    }, []);

    const buyNow = async (item) => {
        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    lineItems: [
                        {
                            name: item.title,
                            amount: item.price, // cents
                            quantity: 1,
                            currency: "eur", // change if you need usd/gbp/etc
                        },
                    ],
                }),
            });
            const data = await res.json();
            if (data.url) window.location.href = data.url;
            else alert(data.error || "Could not start checkout");
        } catch (e) {
            console.error(e);
            alert("Checkout failed");
        }
    };

    if (loading) return <div className="p-6">Loading…</div>;

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-2xl font-bold mb-6">Featured Products</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                    <div key={p.id} className="border rounded p-4">
                        <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded" />
                        <h2 className="mt-3 text-lg font-semibold">{p.title}</h2>
                        <p className="text-gray-600">{p.description}</p>
                        <div className="mt-2 font-bold">
                            €{(p.price / 100).toFixed(2)}
                        </div>
                        <button
                            onClick={() => buyNow(p)}
                            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
