import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <main>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} as="header" className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h2 className="heading-name">
                I'M
                <strong className="main-name"> Pankaj Joshi</strong>
              </h2>

              <section aria-label="Typewriter roles" style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </section>

              <nav style={{ paddingTop: 15, paddingLeft: 50, textAlign: "left" }}>
                <Link to="/contact">
                  <button className="contact-button">
                    Contact Me
                  </button>
                </Link>
              </nav>
            </Col>

            <Col md={5} as="aside" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Illustration of Pankaj Joshi working on a computer"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <section aria-label="About Section">
        <Home2 />
      </section>
    </main>
  );
}

export default Home;
