
import React, { useState } from 'react';
import logo from '../assets/Aura Aesthetic logo.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const labels = ["Home", "About", "Courses", "Gallery", "Testimonial"];

  return (
    <>
    
    <nav className="px-4 
    sm:px-4 py-2 flex flex-wrap items-center justify-between 
    fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md ">

        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto hover:scale-105 transition-all duration-200"
          />
        </Link>

        {/* Desktop Menu - Centered */}
        <ul className="hidden sm:flex gap-6 text-black font-medium absolute left-1/2 transform -translate-x-1/2">
          {labels.map((item, index) => (
            <motion.li
              key={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                duration: 0.2, 
                type: "spring", 
                stiffness: 400, 
                damping: 25 
              }}
              className="cursor-pointer"
            >
               <Link
            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            className="text-black hover:text-gray-600 transition"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            {item}
          </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Contact Button */}
     
   


<Link to="/contact">
  <button
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className="sm:hidden mt-2 bg-[#C2EA66] hover:bg-[#a8d147] px-3 py-1.5 rounded-full text-black font-semibold text-sm flex items-center gap-1 max-w-[90%] whitespace-nowrap overflow-hidden transition-colors duration-200"
  >
  {/* Left arrow - only visible when hovered */}
  <AnimatePresence>
    {isHovered && (
      <motion.span
        key="left-arrow"
        initial={{ x: -15, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center"
      >
        <FiArrowRight className="text-black text-base" />
      </motion.span>
    )}
  </AnimatePresence>

  {/* Contact text */}
  <motion.span
    animate={{ x: isHovered ? 4 : 0 }}
    transition={{ duration: 0.3 }}
    className="flex items-center"
  >
    Contact us
  </motion.span>

  {/* Right arrow - visible when not hovered */}
  <AnimatePresence>
    {!isHovered && (
      <motion.span
        key="right-arrow"
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: 15, opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center"
      >
        <FiArrowRight className="text-black text-base" />
      </motion.span>
    )}
  </AnimatePresence>
  </button>
</Link>



        {/* Mobile Hamburger */}
        <div
          className={`sm:hidden text-xl ml-2 mt-2 cursor-pointer 
            ${isOpen ? 'text-cyan-800' : 'bg-[#C2EA66] text-black'} 
            rounded-full w-10 h-10 flex items-center justify-center`}
          onClick={toggleMenu}
        >
          ☰
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden sm:block">
          <Link to="/contact">
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="bg-[#C2EA66] hover:bg-[#a8d147] px-5 py-2 rounded-full text-black 
              font-semibold flex items-center gap-2 mr-12 transition-colors duration-200"
            >
            <span className="relative w-4 h-4 inline-block">
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    key="left-arrow"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-0 text-black"
                  >
                    <FiArrowRight className="text-lg" />
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
            <motion.span animate={{ x: isHovered ? 6 : 0 }} transition={{ duration: 0.4 }}>
              Contact us
            </motion.span>
            <span className="relative w-4 h-4 inline-block">
              <motion.span
                key="right-arrow"
                animate={isHovered ? { x: 30, opacity: 0 } : { x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute"
              >
              <FiArrowRight className="text-black text-lg" />
              </motion.span>
            </span>
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
   
   {isOpen && (
  <div className="sm:hidden fixed top-0 left-0 right-0 mt-20 z-40 bg-white/95 backdrop-blur-md shadow-lg py-5 px-4">
    <ul className="flex flex-col gap-4 items-center text-lg">
      {labels.map((item, index) => (
        <motion.li
          key={item}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            duration: 0.2, 
            type: "spring", 
            stiffness: 400, 
            damping: 25 
          }}
          className="cursor-pointer"
        >

            <Link
            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            className="text-black hover:text-gray-600 transition"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            {item}
          </Link>
         
        </motion.li>
      ))}
    </ul>
  </div>
)}

    </>
  );
};

export default Navbar;
