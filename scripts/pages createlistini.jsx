import React, { useState } from "react";

export default function CreateListing() {
    const [form, setForm] = useState({
        title: "",
        price: "",
        image: "",
        description: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New listing:", form);
        alert("✅ Item listed successfully!");
        setForm({ title: "", price: "", image: "", description: "" });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center py-10">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Sell an Item</h2>

                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Item Title"
                    className="border p-2 w-full mb-3 rounded"
                    required
                />

                <input
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="Price"
                    className="border p-2 w-full mb-3 rounded"
                    required
                />

                <input
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="border p-2 w-full mb-3 rounded"
                />

                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="border p-2 w-full mb-3 rounded"
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
