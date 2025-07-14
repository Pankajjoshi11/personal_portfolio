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
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a final-year IT student passionate about building impactful tech through{" "}
              <i>
                <b className="purple">Full Stack Development</b>
              </i>{" "}
              and
              <i>
                <b className="purple"> AI-driven solutions</b>
              </i>.
              <br />
              <br />
              I’ve worked with technologies like{" "}
              <i>
                <b className="purple">React.js, Node.js, MongoDB</b>
              </i>{" "}
              and have also explored{" "}
              <i>
                <b className="purple">data analytics</b>
              </i>{" "}
              and
              <i>
                <b className="purple"> machine learning</b>
              </i>{" "}
              to turn raw data into insights.
              <br />
              <br />
              I enjoy building real-world products and experimenting with{" "}
              <b className="purple">modern frameworks</b> like{" "}
              <i>
                <b className="purple">Next.js</b>
              </i>{" "}
              & cloud tools like{" "}
              <i>
                <b className="purple">Firebase</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={pankaj_profile} className="img-fluid profile-pic" alt="avatar" />
            </Tilt>

          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
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
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
