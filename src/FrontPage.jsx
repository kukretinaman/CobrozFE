// FrontPage.jsx
import React from 'react';
import Navbar from './Navbar.jsx';
import Button from './Button.jsx';
import { Link } from 'react-router-dom'; // Import Link

const FrontPage = () => {
  return (
    <div className="front-page">
      <Navbar />
      <div className="hero-section">
        <h1>Unlock Legal Clarity at Cobroz</h1>
        <Link to="/second"> {/* Use Link to navigate to /second */}
          <Button text="Join Now" />
        </Link>
      </div>
      {/* Other sections */}
    </div>
  );
};

export default FrontPage;
