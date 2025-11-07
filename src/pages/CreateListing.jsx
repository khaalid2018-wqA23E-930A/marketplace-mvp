import { useState } from "react";

export default function CreateListing() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(""); // euros
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [saving, setSaving] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    price: Math.round(Number(price) * 100), // euros -> cents
                    image,
                    description,
                }),
            });
            if (res.ok) {
                alert("Listing created!");
                setTitle(""); setPrice(""); setImage(""); setDescription("");
            } else {
                const err = await res.json();
                alert(err.error || "Failed to create listing");
            }
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-2xl font-bold mb-4">Create New Listing</h1>
            <form onSubmit={submit} className="space-y-4 max-w-md">
                <input
                    type="text"
                    placeholder="Product name"
                    className="border p-2 w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Price (EUR)"
                    className="border p-2 w-full"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    min="0"
                    step="0.01"
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    className="border p-2 w-full"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    className="border p-2 w-full"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button
                    type="submit"
                    disabled={saving}
                    className="bg-blue-600 text-white p-2 rounded"
                >
                    {saving ? "Saving..." : "Submit"}
                </button>
            </form>
        </div>
    );
}
