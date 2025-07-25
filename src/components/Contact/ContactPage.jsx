import React from 'react';
import ContactForm from './ContactForm';
import { Mail, Phone } from 'lucide-react';
import './ContactPage.css';
import Particle from '../Particle';

const ContactPage = () => {
  return (
    <div className="page-container">
      <Particle />
      {/* Background decorative elements */}
      <div className="bg-decor">
        <div className="circle circle-one"></div>
        <div className="circle circle-two"></div>
        <div className="circle circle-three"></div>
      </div>

      <div className="page-content">
        <div className="page-inner">
          {/* Header */}
          <div className="page-header">
            <h1 className="page-title">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="page-subtitle">
              Have an idea, a project, or just want to say hello? Let’s connect and bring your vision to life.
            </p>
          </div>

          <div className="content-grid">
            {/* Contact Form */}
            <div className="grid-item-form">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="grid-item-info">
              <div className="info-card">
                <h3 className="info-title">Let’s Build Something Great</h3>
                <p className="info-description">
                  Whether you're starting a new project, need a design refresh, or simply have questions—
                  I’m here to help you stand out online with clean code and creative ideas.
                </p>

                <div className="info-list">
                  <div className="info-item">
                    <div className="info-icon-wrapper">
                      <Mail className="info-icon" />
                    </div>
                    <div>
                      <p className="info-label">Email</p>
                      <p className="info-value">pankaj70451@gmail.com</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-wrapper">
                      <Phone className="info-icon" />
                    </div>
                    <div>
                      <p className="info-label">Phone</p>
                      <p className="info-value">+91 7045191561</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="response-card">
                <div className="response-header">
                  <div className="pulse-dot"></div>
                  <span className="response-text">Fast Replies</span>
                </div>
                <p className="response-description">
                  I aim to respond to all messages within 24 hours. Let's start the conversation today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
