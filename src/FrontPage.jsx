import React from 'react';
import Navbar from './Navbar.jsx';
import Button from './Button.jsx';

const FrontPage = () => {
  return (
    <div className="front-page">
      <Navbar />
      <div className="hero-section">
        <h1>Unlock Legal Clarity at Cobroz</h1>
        <Button text="Join Now" />
      </div>
      {/* Other sections */}
    </div>
  );
};

export default FrontPage;
