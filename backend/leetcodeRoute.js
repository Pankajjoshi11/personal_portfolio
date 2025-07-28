// routes/leetcodeRoute.js
import express from 'express';
import axios from 'axios';

const router = express.Router();

// Proxy route to fetch LeetCode stats
router.get('/leetcode', async (req, res) => {
  try {
    const response = await axios.get('https://leetcode-api-faisalshohag.vercel.app/Pankaj08');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error.message);
    res.status(500).json({ error: 'Failed to fetch LeetCode stats' });
  }
});

export default router;
