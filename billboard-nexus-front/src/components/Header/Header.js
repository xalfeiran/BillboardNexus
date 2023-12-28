import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">
        <a href="/">BillboardNexus</a> {/* Update with your logo and home link */}
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/about">About</a></li> {/* Update these as needed */}
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
