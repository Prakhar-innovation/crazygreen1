import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="contact-page container section fade-in-up">
      <div className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          We're here to help. Whether you have questions about plant care, your recent order, or just want to say hello.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info-section">
          <h2>Get in Touch</h2>
          
          <div className="info-block">
            <div className="info-icon">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <div className="info-details">
              <h3>Email</h3>
              <p>hello@cazygreen.com</p>
              <p className="info-sub">We aim to reply within 24 hours.</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <Phone size={24} strokeWidth={1.5} />
            </div>
            <div className="info-details">
              <h3>Phone</h3>
              <p>+1 (800) 123-4567</p>
              <p className="info-sub">Mon-Fri from 8am to 5pm EST.</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <MapPin size={24} strokeWidth={1.5} />
            </div>
            <div className="info-details">
              <h3>Studio</h3>
              <p>123 Botanical Way</p>
              <p>Green District, NY 10012</p>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name" 
                required 
                className="contact-input" 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address" 
                required 
                className="contact-input" 
              />
            </div>
            
            <div className="form-group">
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?" 
                required 
                className="contact-input contact-textarea"
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              {isSubmitted ? 'Message Sent' : 'Send Message'}
              {!isSubmitted && <ArrowRight size={18} />}
            </button>
            
            {isSubmitted && (
              <p className="success-feedback fade-in-up">
                Thank you for reaching out! We'll get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
