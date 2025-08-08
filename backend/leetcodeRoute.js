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

    // Get solved counts by difficulty
    const easySolved = user.submitStats.acSubmissionNum.find(d => d.difficulty === "Easy")?.count || 0;
    const totalEasy = user.submitStats.totalSubmissionNum.find(d => d.difficulty === "Easy")?.count || 0;

    const mediumSolved = user.submitStats.acSubmissionNum.find(d => d.difficulty === "Medium")?.count || 0;
    const totalMedium = user.submitStats.totalSubmissionNum.find(d => d.difficulty === "Medium")?.count || 0;

    const hardSolved = user.submitStats.acSubmissionNum.find(d => d.difficulty === "Hard")?.count || 0;
    const totalHard = user.submitStats.totalSubmissionNum.find(d => d.difficulty === "Hard")?.count || 0;

    // Total solved = sum of all difficulty counts
    const totalSolved = easySolved + mediumSolved + hardSolved;
    const totalQuestions = totalEasy + totalMedium + totalHard;

    const stats = {
      status: "success",
      totalSolved,
      totalQuestions,
      easySolved,
      totalEasy,
      mediumSolved,
      totalMedium,
      hardSolved,
      totalHard,
      submissionCalendar: JSON.parse(user.submissionCalendar || "{}")
    };

    res.json(stats);
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error.message);
    res.status(500).json({ error: 'Failed to fetch LeetCode stats' });
  }
});

export default router;
