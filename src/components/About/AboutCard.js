import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pankaj Joshi </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently studying B.E. in I.T. from Thadomal Shahani Engineering College. <span className="purple"> (Mumbai University) </span>
            <br />
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Calisthenics
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Guitar
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
