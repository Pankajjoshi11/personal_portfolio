import React, { useEffect, useState } from "react";

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
