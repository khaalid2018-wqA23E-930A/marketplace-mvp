export default async function handler(req, res) {
    try {
        const r = await fetch(`${process.env.OPENAI_BASE_URL}/chat/completions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-5",
                messages: [{ role: "user", content: "Hello AI Gateway!" }]
            })
        });

        if (!r.ok) throw new Error(`Upstream error: ${r.status}`);
        const data = await r.json();
        res.status(200).json({ ok: true, reply: data });
    } catch (err) {
        res.status(500).json({ ok: false, error: String(err) });
    }
}
