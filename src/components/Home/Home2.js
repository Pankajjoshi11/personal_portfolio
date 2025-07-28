import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pankaj_profile from "../../Assets/pankaj_profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <section className="home-about-section" id="about">
      <Container>
        <Row as="header">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <article className="home-about-body">
              <p>
                I’m a final-year IT student passionate about building impactful tech through{" "}
                <strong className="purple">Full Stack Development</strong> and{" "}
                <strong className="purple">AI-driven solutions</strong>.
              </p>
              <p>
                I’ve worked with technologies like{" "}
                <strong className="purple">React.js, Node.js, MongoDB</strong> and have also explored{" "}
                <strong className="purple">data analytics</strong> and{" "}
                <strong className="purple">machine learning</strong> to turn raw data into insights.
              </p>
              <p>
                I enjoy building real-world products and experimenting with{" "}
                <strong className="purple">modern frameworks</strong> like{" "}
                <strong className="purple">Next.js</strong> & cloud tools like{" "}
                <strong className="purple">Firebase</strong>.
              </p>
            </article>
          </Col>

          <Col md={4} className="myAvtar">
            <figure>
              <Tilt>
                <img
                  src={pankaj_profile}
                  className="img-fluid profile-pic"
                  alt="Pankaj Joshi"
                />
              </Tilt>
            </figure>
          </Col>
        </Row>

        <Row as="footer">
          <Col md={12} className="home-about-social">
            <h2>FIND ME ON</h2>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Pankajjoshi11"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pankaj-joshi-0b8103255/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home2;
