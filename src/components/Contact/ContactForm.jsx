import React, { useState } from 'react';
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import './Contact.css'; // ← Import the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: 'idle',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('https://personal-portfolio-pankaj.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ fullName: '', mobile: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    }
  };

  const isFormValid =
    formData.fullName && formData.mobile && formData.email && formData.message;

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-header">
          <div className="contact-icon-wrapper">
            <Mail className="contact-icon" />
          </div>
          <h2 className="contact-title">Get In Touch</h2>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-fields">
            <div className="input-group">
              <div className="input-icon">
                <User />
              </div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group">
              <div className="input-icon">
                <Phone />
              </div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group">
              <div className="input-icon">
                <Mail />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group textarea">
              <div className="input-icon top">
                <MessageSquare />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                required
              />
            </div>
          </div>

          {status.message && (
            <div className={`status-box ${status.type}`}>
              {status.type === 'success' && <CheckCircle />}
              {status.type === 'error' && <AlertCircle />}
              <span>{status.message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={!isFormValid || status.type === 'loading'}
            className="submit-button"
          >
            {status.type === 'loading' ? (
              <>
                <div className="loader"></div> Sending...
              </>
            ) : (
              <>
                <Send /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
