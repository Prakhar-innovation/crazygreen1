import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand-col">
            <h3 className="footer-logo">CazyGreen</h3>
            <p className="footer-tagline">
              Elevating indoor spaces with premium, sustainably sourced plants.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><Link to="/shop">Shop Plants</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/care">Plant Care</Link></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:hello@cazygreen.com">hello@cazygreen.com</a></li>
              <li>123 Botanical Way, NY</li>
            </ul>
          </div>

          <div className="footer-social-col">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-links">
              <a href="#instagram" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#twitter" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#facebook" aria-label="Facebook"><Facebook size={20} /></a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} CazyGreen. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
