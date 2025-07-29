
import React, { useState } from "react";

import logo from "../assets/logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);


  
  return (
    <div className="navbar">

      <style>

    {`
    
    .navbar {
  display: flex;
  
  align-items: center; 
   align-content: center;         
  padding: 0.4rem 0.2rem;
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(10px);

  z-index: 1000;
  gap: 2rem; 
}






.hamburger {
  display: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0.5rem;
  background-color: #C8EC75;
  color: white;
  border-radius: 50%;
}

/* Nav menu for large screens */
.nav-menu {

  // width:700px;
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
  display:flex-end;
margin-left:25rem;
  background-color: #C2EA66;
  width: 150px;
  color: black;
  border-radius: 2rem;
  padding: 10px 20px;
  border: none;
}
  .logo {
margin-right: 15rem; 
  marginLeft: 4rem;
  font-size: 3rem;
  font-weight: bold;
  color: black;
  
}

.logo img{
height:6rem;
width:8rem;


;
// object-position: 50% 50%;
width:90px;}

.contact-div{
margin-right:auto;
}

@media (max-width: 768px) {
.navbar{
gap:0.2rem;
flex-wrap:nowrap;
// justify-content: space-around;
min-width:310px;}
  .nav-menu {
    display: none;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 70px;
    right: 20px;
    background-color: white;
    border-radius: 8px;
    padding: 0.5rem;
    z-index: 999;
  }
.logo{
margin-right: 0rem;}
  .nav-menu.open {
    display: flex;
  }

  .hamburger {
    display: block;
    font-size: 24px;
    cursor: pointer;
    padding: 0.5rem;
    background-color: rgb(200, 236, 117);
    color: white;
    order:3;
    border-radius: 50%;
  }

 



  .right-section {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
.contact-div{
margin-right:auto;}
  .contact-button {
 
    width: 150px;
    margin: 0;
  }
}

    
    `}
  </style>
      {/* Left: Logo */}
      <div>

        
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" /></div>

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
         <div className="contact-div">
        <button className="contact-button">Contact Us</button>
      </div>
      </div>
     
    </div>
  );
}

export default Navbar;

