
import React, { useState } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);


  
  return (
    <div className="navbar">

      <style>

    {`
    
    .navbar {
  display: flex;
  justify-content: space-evenly; 
  align-items: center;            
  padding: 1rem 0.2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000;
  gap: 2rem; 
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: black;
  marginRight: 0rem;
}


.contact-button  {
  /* background-color: black; */
  color: white;
width: 150px; 
  padding: 10px 20px;
  border-radius: 2rem;
  border: none;
}


.hamburger {
  display: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0.5rem;
  background-color: #057C8B;
  color: white;
  border-radius: 50%;
}

/* Nav menu for large screens */
.nav-menu {
  margin-top: 1rem;
  // width:100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-weight: 600;
  color: black;
}

/* Right section for layout purposes */
.right-section {
  display: flex;
  align-items: center;
  // gap: 1rem;
}
.contact-button{
  display:"flex-end"
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
    width: 449px;
    flex-direction: column;
    column-gap: 25px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 70px;
    right: 20px;
    background-color: white;
    border-radius: 8px;
    /* box-shadow: 0 0 10px rgba(0,0,0,0.2); */
    padding: 0.2rem;
    z-index: 999;
  }

  .nav-menu.open {
    display: flex;
  }

  .hamburger {
    display: block;
  }

 
  .navbar {
    flex-wrap: wrap;
  }

  .logo,
  .contact-button,
  .hamburger {
    margin-bottom: 0.5rem;
  }
 

  .logo {
    padding:0;
  }

  .contact-button {
  width:150px; margin-left: 6rem;
  margin:0 0.5rem;
    order: 2;
  }

  .hamburger {
    order: 3;
  }

  // /* .right-section {
  //   order: 3;
  // } */
}

    
    `}
  </style>
      {/* Left: Logo */}
      <div>

        
      </div>
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
         <div >
        <button className="contact-button">Contact Us</button>
      </div>
      </div>
     
    </div>
  );
}

export default Navbar;

