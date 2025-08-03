
import React, { useState } from 'react';
import logo from '../assets/logo.png';
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
    sm:px-6 py-2 flex flex-wrap items-center justify-between 
    fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md ">

        {/* Logo */}
      
       <img
    src={logo}
    alt="Logo"
    className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28"
  />

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-4 text-black font-medium">
          {labels.map((item, index) => (
            <motion.li
              key={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={
                hoveredIndex === index
                  ? { y: [0, -20, 20, 0], opacity: [1, 0, 0, 1] }
                  : { y: 0, opacity: 1 }
              }
              transition={{ duration: 0.9 }}
              className="cursor-pointer"
            >
               <Link
            to={`/${item.toLowerCase()}`}
            className="text-black hover:text-gray-600 transition"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            {item}
          </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Contact Button */}
     
   


<button
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  className="sm:hidden mt-2 bg-lime-200 px-3 py-1.5 rounded-full text-black font-semibold text-sm flex items-center gap-1 max-w-[90%] whitespace-nowrap overflow-hidden"
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
        <FiArrowRight className="text-white text-base" />
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



        {/* Mobile Hamburger */}
        <div
          className={`sm:hidden text-xl ml-2 mt-2 cursor-pointer 
            ${isOpen ? 'text-cyan-800' : 'bg-lime-200 text-black'} 
            rounded-full w-10 h-10 flex items-center justify-center`}
          onClick={toggleMenu}
        >
          ☰
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden sm:block">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-lime-200 px-5 py-2 rounded-full text-black 
            font-semibold flex items-center gap-2 mr-12"
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
                    className="absolute left-0 text-white"
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
          animate={
            hoveredIndex === index
              ? { y: [0, -10, 10, 0], opacity: [1, 0.8, 0.8, 1] }
              : { y: 0, opacity: 1 }
          }
          transition={{ duration: 0.6 }}
          className="cursor-pointer"
        >

            <Link
            to={`/${item.toLowerCase()}`}
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
