import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaInstagram } from "react-icons/fa";
import Particle from "../Particle";
import "./Contact.css"; // Assuming you have a CSS file for styling
import ContactPage from "./ContactPage";
function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section>
      <ContactPage />
      
    </section>
  );
}

export default Contact;
