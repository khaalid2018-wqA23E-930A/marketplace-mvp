// src/pages/api/gateway.js
export default async function handler(req, res) {
    try {
        const { message } = req.body;

        const r = await fetch(`${process.env.OPENAI_BASE_URL}/chat/completions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-4-turbo",
                messages: [{ role: "user", content: message || "Hello!" }],
            }),
        });

        const data = await r.json();
        res.status(200).json({ reply: data.choices?.[0]?.message?.content || "No response" });
    } catch (err) {
        res.status(500).json({ error: "Gateway request failed" });
    }
}
