import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./LeetCodeStats.css";

const LeetCodeStats = () => {
  const [data, setData] = useState(null);
  const [submissions, setSubmissions] = useState(0);
  const [activeDays, setActiveDays] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  useEffect(() => {
    axios
      .get("https://personal-portfolio-tku6.onrender.com/api/leetcode")
      .then((res) => {
        const stats = res.data;
        setData(stats);

        const calendar = stats.submissionCalendar || {};
        const timestamps = Object.keys(calendar).map((ts) =>
          parseInt(ts, 10)
        );

        if (timestamps.length === 0) return;

        const daysSorted = timestamps
          .map((ts) => new Date(ts * 1000))
          .sort((a, b) => a - b);

        const dateSet = new Set();
        let totalSubs = 0;
        let streak = 0;
        let maxStreakTemp = 0;

        for (let i = 0; i < daysSorted.length; i++) {
          const day = daysSorted[i];
          const dateStr = day.toDateString();
          dateSet.add(dateStr);

          totalSubs += calendar[timestamps[i]];

          if (i === 0) {
            streak = 1;
            maxStreakTemp = 1;
            continue;
          }

          const prev = daysSorted[i - 1];
          const diff = (day - prev) / (1000 * 60 * 60 * 24);

          if (diff === 1) {
            streak++;
          } else if (diff > 1) {
            streak = 1;
          }

          if (streak > maxStreakTemp) {
            maxStreakTemp = streak;
          }
        }

        setSubmissions(totalSubs);
        setActiveDays(dateSet.size);
        setMaxStreak(maxStreakTemp);
      })
      .catch((err) => console.error("Failed to fetch LeetCode stats:", err));
  }, []);

  if (!data || data.status !== "success") {
    return <p style={{ color: "white" }}>Loading LeetCode stats...</p>;
  }

  const {
    totalSolved,
    totalQuestions,
    easySolved,
    totalEasy,
    mediumSolved,
    totalMedium,
    hardSolved,
    totalHard,
  } = data;

  const percentage = ((totalSolved / totalQuestions) * 100).toFixed(1);

  return (
    <Container fluid className="leetcode-section" id="leetcode">
      <Container>
        <h1 className="project-heading text-center">
          <strong className="purple">LeetCode </strong> Stats
        </h1>
        <Row className="justify-content-center align-items-center mt-4">
          <Col md={6} className="d-flex flex-column align-items-center">
            <div className="chart-wrapper mb-4">
              <CircularProgressbar
                value={totalSolved}
                maxValue={totalQuestions}
                text={`${totalSolved}/${totalQuestions}`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "#facc15",
                  trailColor: "#3a3a3a",
                  textSize: "16px",
                })}
              />
              <div className="status-text">✔ Solved</div>
            </div>
            <div className="stats-boxes">
              <div className="stat-box easy">
                <strong>Easy</strong>
                <div>{easySolved}/{totalEasy}</div>
              </div>
              <div className="stat-box medium">
                <strong>Medium</strong>
                <div>{mediumSolved}/{totalMedium}</div>
              </div>
              <div className="stat-box hard">
                <strong>Hard</strong>
                <div>{hardSolved}/{totalHard}</div>
              </div>
            </div>
          </Col>

          <Col md={6} className="text-start text-light info-text">
            <p>
              <span className="highlight">📆 Submissions:</span> {submissions} in the last year
            </p>
            <p>
              <span className="highlight">🔥 Max Streak:</span> {maxStreak} days
            </p>
            <p>
              <span className="highlight">📊 Active Days:</span> {activeDays}
            </p>
            <p>
              <span className="highlight">🏅 Badges:</span> 2 
            </p>
            <a
              href="https://leetcode.com/Pankaj08/"
              target="https://leetcode.com/Pankaj08/"
              rel="noreferrer"
              className="btn btn-outline-warning mt-3"
            >
              View Full Profile on LeetCode
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LeetCodeStats;
