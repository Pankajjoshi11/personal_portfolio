import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaInstagram } from "react-icons/fa";
import Particle from "../Particle";
import "./Contact.css"; // Assuming you have a CSS file for styling
function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section>
      <Container fluid className="contact-section" id="contact">
        <Particle />
        <Container className="contact-content">
          <div className={`fade-in-up ${isVisible ? "visible" : ""}`}>
            <Row className="justify-content-center align-items-start">
              {/* Left Column - Info */}
              <Col md={6} className="contact-info">
                <h2 className="contact-heading">
                  Contact <span className="purple">Information</span>
                </h2>
                <p className="contact-description">
                  I'm interested in freelance opportunities, internships, and collaborations on innovative projects. If you have any questions or want to discuss potential opportunities, don't hesitate to contact me.
                </p>
                <div className="contact-details">
                  <p><FaEnvelope className="icon purple" /> <strong>Email</strong><br />aniruddhs105@gmail.com</p>
                  <p><FaPhone className="icon purple" /> <strong>Phone</strong><br />+91 9321538768</p>
                  <p><FaMapMarkerAlt className="icon purple" /> <strong>Location</strong><br />Mumbai, India</p>
                </div>
                <div className="social-links">
                  <h5 className="follow-title">Follow Me</h5>
                  <div className="social-icons">
                    <a href="#"><FaLinkedin className="icon purple" /></a>
                    <a href="#"><FaGithub className="icon purple" /></a>
                    <a href="#"><FaInstagram className="icon purple" /></a>
                  </div>
                </div>
              </Col>

              {/* Right Column - Form */}
              <Col md={6} className="contact-form">
                <h2 className="form-heading">Send Me a Message</h2>
                <form>
                  <label className="form-label">Name *</label>
                  <input type="text" className="form-control form-input" />

                  <label className="form-label">Email *</label>
                  <input type="email" className="form-control form-input" />

                  <label className="form-label">Subject</label>
                  <input type="text" className="form-control form-input" />

                  <label className="form-label">Message *</label>
                  <textarea className="form-control form-input" rows="5"></textarea>

                  <button type="submit" className="submit-btn">
                    Send Message <span className="send-icon">📨</span>
                  </button>
                </form>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
