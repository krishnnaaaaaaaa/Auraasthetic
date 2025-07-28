
import React, { useState } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      {/* Left: Logo */}
      <div className="logo">Aura</div>

 
      

      
      <div className="right-section">
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <div className={`nav-menu ${isOpen ? "open" : ""}`}>
          <p className="navpara">About</p>
          <p className="navpara">Services</p>
          <p className="navpara">Courses</p>
          <p className="navpara">Gallery</p>
          <p className="navpara">Testimonial</p>
        </div>
      </div>
      <div >
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
}

export default Navbar;

