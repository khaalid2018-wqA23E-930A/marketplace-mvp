import React, { useState } from "react";

export default function Home() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponse("Thinking... 🤔");
        try {
            const res = await fetch("/api/gateway", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });
            const data = await res.json();
            setResponse(data.reply || "No response from AI 🤖");
        } catch (err) {
            setResponse("Error connecting to AI Gateway ❌");
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-4xl font-bold mb-3 text-gray-900">🛍️ AminTrends Marketplace</h1>
            <p className="text-gray-600 mb-8">Ask anything about our products below 👇</p>

            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question..."
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none"
                />
                <button
                    type="submit"
                    className="mt-3 w-full bg-black text-white p-3 rounded hover:bg-gray-800 transition"
                >
                    Ask AI
                </button>
            </form>

            <div className="mt-8 text-left bg-white p-4 rounded shadow max-w-md w-full">
                <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
            </div>
        </main>
    );
}
