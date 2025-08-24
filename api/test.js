module.exports = async (req, res) => {
    if (req.method !== "POST") return res.status(405).end();

    res.status(200).json({ ok: true });
}