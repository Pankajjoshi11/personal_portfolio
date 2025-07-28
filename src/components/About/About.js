import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import LeetCodeStats from "./LeetCodeStats";

function About() {
  return (
    <main>
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <section aria-labelledby="about-heading">
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
              >
                <h1 id="about-heading" style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                  Know Who <strong className="purple">I am</strong>
                </h1>
                <article>
                  <Aboutcard />
                </article>
              </Col>

              <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
                as="figure"
              >
                <img src={laptopImg} alt="About me illustration" className="img-fluid" />
              </Col>
            </Row>
          </section>

          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="project-heading">
              Professional <strong className="purple">Skillset</strong>
            </h2>
            <Techstack />
          </section>

          <section aria-labelledby="leetcode-heading">
            <h2 id="leetcode-heading" className="project-heading">
              Leetcode <strong className="purple">Stats</strong>
            </h2>
              <LeetCodeStats />
          </section>

          <section aria-labelledby="github-heading">
            <h2 id="github-heading" className="project-heading">
              <strong className="purple">GitHub</strong> Activity
            </h2>
            <Github />
          </section>
        </Container>
      </Container>
    </main>
  );
}

export default About;
