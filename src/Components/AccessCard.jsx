
import React from 'react';
import './AccessCard.css'; // Import the CSS file
import logo from "../assets/logo.png";

function AccessCard() {
  return (
    <div className="access-card">
      <h1>Extended Access</h1>
      <h3>
        Get 6 months extra studio time - Exclusive to Aura students
      </h3>
      <img
        src={logo}
        alt="Logo"
        className="access-logo"
      />
    </div>
  );
}

export default AccessCard;
