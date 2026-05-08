export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
    const { userId, points = 12 } = req.query;
    if (!userId || userId === '[userId]') return res.status(400).json({ error: 'Missing userId' });
    return res.status(200).json({ success: true, message: `Added ${points} points to ${userId}` });
      }
