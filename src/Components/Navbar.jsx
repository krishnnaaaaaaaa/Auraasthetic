
import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Replace with your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-[#FAFFF2] px-10 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl">
          <img src={logo} alt="Logo" className="w-20 inline-block mr-2" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li>About</li>
          <li>Services</li>
          <li>Courses</li>
          <li>Gallery</li>
          <li>Testimonial</li>
        </ul>

        {/* Mobile Hamburger */}
         <button className=" md:hidden mt-4
          bg-lime-200 px-6 py-2 rounded-full text-black font-semibold hover:scale-105 transition-all">
            Contact us →
          </button>
       

<div
  className={`md:hidden text-3xl cursor-pointer 
              ${isOpen ? 'text-cyan-800' : 'bg-lime-200 text-black'} 
              rounded-full w-12 h-12 flex items-center justify-center`}
  onClick={toggleMenu}
>
  ☰
</div>


        

        {/* Contact button (always visible on desktop, conditional on mobile) */}
        <div className="hidden md:block">

      
          <button className="bg-lime-200 px-6 py-2 rounded-full text-black 
          font-semibold hover:scale-105 transition-all">
            Contact us →
          </button>
        </div>
      </nav>

      {/* Mobile Menu List */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-3 bg-[#FAFFF2] py-4">
          <ul className="text-black font-medium space-y-2">
            <li>About</li>
            <li>Services</li>
            <li>Courses</li>
            <li>Gallery</li>
            <li>Testimonial</li>
          </ul>
         
        </div>
      )}
    </>
  );
};

export default Navbar;
