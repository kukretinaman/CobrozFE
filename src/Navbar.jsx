import React from 'react';
import logo from './logo.jpeg'; // Import your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Legal Discussion Logo" />
      </div>
      <ul className="nav-links">
        <li>About Us</li>
        <li>Contact</li>
        <li>Join Now</li>
      </ul>
    </nav>
  );
};

export default Navbar;
