import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <section className="footer-section">
          <h4>About BillboardNexus</h4>
          <p>Connecting advertisers to billboards across the globe.</p>
        </section>
        <section className="footer-section">
          <h4>Contact Us</h4>
          <p>contact@billboardnexus.com</p>
        </section>
        <section className="footer-section">
          <h4>Follow Us</h4>
          {/* Social media icons would go here */}
        </section>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} BillboardNexus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
