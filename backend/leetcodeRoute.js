// routes/leetcodeRoute.js
import express from 'express';
import axios from 'axios';

const router = express.Router();

const LEETCODE_GRAPHQL = 'https://leetcode.com/graphql/';

const query = `
query getUserProfile($username: String!) {
  matchedUser(username: $username) {
    username
    submitStats: submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
      }
      totalSubmissionNum {
        difficulty
        count
      }
    }
    submissionCalendar
  }
}
`;

router.get('/leetcode', async (req, res) => {
  try {
    const { data } = await axios.post(
      LEETCODE_GRAPHQL,
      {
        query,
        variables: { username: "Pankaj08" }
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    const user = data.data.matchedUser;
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Convert to your frontend's expected format
    const stats = {
      status: "success",
      totalSolved: user.submitStats.acSubmissionNum.reduce((a, b) => a + b.count, 0),
      totalQuestions: user.submitStats.totalSubmissionNum.reduce((a, b) => a + b.count, 0),
      easySolved: user.submitStats.acSubmissionNum.find(d => d.difficulty === "Easy")?.count || 0,
      totalEasy: user.submitStats.totalSubmissionNum.find(d => d.difficulty === "Easy")?.count || 0,
      mediumSolved: user.submitStats.acSubmissionNum.find(d => d.difficulty === "Medium")?.count || 0,
      totalMedium: user.submitStats.totalSubmissionNum.find(d => d.difficulty === "Medium")?.count || 0,
      hardSolved: user.submitStats.acSubmissionNum.find(d => d.difficulty === "Hard")?.count || 0,
      totalHard: user.submitStats.totalSubmissionNum.find(d => d.difficulty === "Hard")?.count || 0,
      submissionCalendar: JSON.parse(user.submissionCalendar || "{}")
    };

    res.json(stats);
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error.message);
    res.status(500).json({ error: 'Failed to fetch LeetCode stats' });
  }
});

export default router;
