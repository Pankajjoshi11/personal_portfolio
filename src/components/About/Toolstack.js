import React from "react";
import { Col, Row, Container } from "react-bootstrap";

function Toolstack() {
  const tools = [
    "macOS",
    "Visual Studio Code",
    "Postman",
    "Slack",
    "Vercel",
  ];

  return (
    <Container fluid>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {tools.map((tool, index) => (
          <Col xs={10} sm={6} md={4} lg={3} className="tech-written" key={index}>
            <div className="tech-box">
              {tool}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Toolstack;
