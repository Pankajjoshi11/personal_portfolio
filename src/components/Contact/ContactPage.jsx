import React from 'react';
import ContactForm from './ContactForm';
import { Mail, Phone } from 'lucide-react';
import './ContactPage.css';
import Particle from '../Particle';

const ContactPage = () => {
  return (
    <main className="page-container">
      <Particle />

      {/* Decorative Background */}
      <div className="bg-decor">
        <div className="circle circle-one"></div>
        <div className="circle circle-two"></div>
        <div className="circle circle-three"></div>
      </div>

      <section className="page-content">
        <div className="page-inner">
          {/* Page Header */}
          <header className="page-header">
            <h1 className="page-title">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="page-subtitle">
              Have an idea, a project, or just want to say hello? Let’s connect and bring your vision to life.
            </p>
          </header>

          <div className="content-grid">
            {/* Contact Form */}
            <section className="grid-item-form" aria-label="Contact Form">
              <ContactForm />
            </section>

            {/* Contact Info */}
            <aside className="grid-item-info" aria-label="Contact Information">
              <article className="info-card">
                <h2 className="info-title">Let’s Build Something Great</h2>
                <p className="info-description">
                  Whether you're starting a new project, need a design refresh, or simply have questions—
                  I’m here to help you stand out online with clean code and creative ideas.
                </p>

                <div className="info-list">
                  <div className="info-item">
                    <div className="info-top-row">
                      <div className="info-icon-wrapper">
                        <Mail className="info-icon" />
                      </div>
                      <p className="info-label">Email</p>
                      <p className="info-value">pankaj70451@gmail.com</p>
                    </div>
                    
                  </div>

                  <div className="info-item">
                    <div className="info-top-row">
                      <div className="info-icon-wrapper">
                        <Phone className="info-icon" />
                      </div>
                      <p className="info-label">Phone</p>
                      <p className="info-value">+91 7045191561</p>
                    </div>
                    
                  </div>


                </div>
              </article>

              <section className="response-card" aria-label="Response Time Info">
                <div className="response-header">
                  <div className="pulse-dot"></div>
                  <span className="response-text">Fast Replies</span>
                </div>
                <p className="response-description">
                  I aim to respond to all messages within 24 hours. Let's start the conversation today!
                </p>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
