
import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Replace with your logo path
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

      const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleMouseEnter = () => {
    setShowLeftArrow(true);
  };

  const handleMouseLeave = () => {
    setShowLeftArrow(false);
  };
  const toggleMenu = () => setIsOpen(!isOpen);
const labels=[
  "About",
 " Services",
 " Courses",
 " Gallery",
  "Testimonial"
]
  return (
    <>
      <nav className="bg-[#FAFFF2] px-10 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl">
          <img src={logo} alt="Logo" className="w-20 inline-block mr-2" />
        </div>

        {/* Desktop Menu */}
        {/* <ul className="hidden md:flex space-x-8 text-black font-medium">
          <motion.li
      key={hovering ? "hovered" : "normal"} // key forces re-render
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setTimeout(() => setHovering(false), 150)}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="cursor-pointer text-black"
    >
     About
    </motion.li>
        
          <li>Services</li>
          <li>Courses</li>
          <li>Gallery</li>
          <li>Testimonial</li>
        </ul> */}


       
          <ul className=" hidden gap-4 sm:flex ">
      {labels.map((item, index) => (
        <motion.li
          key={item}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={false}
          animate={
            hoveredIndex === index
              ? { y: [0, -20, 20, 0], opacity: [1, 0, 0, 1] }
              : { y: 0, opacity: 1 }
          }
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="cursor-pointer text-black"
        >
          {item}
        </motion.li>
      ))}
    </ul>

        {/* Mobile Hamburger */}
        
          <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="md:hidden mt-4 bg-lime-200 px-6 py-2 rounded-full text-black font-semibold flex items-center gap-2 overflow-hidden relative"
    >
      {/* Left White Arrow on Hover */}
      <span className="relative w-4 h-5 inline-block">
        <AnimatePresence>
          {isHovered && (
            <motion.span
              key="left-arrow"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute left-0 text-white"
            >
              →
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      {/* Text with movement */}
      <motion.span
        className="relative"
        animate={{ x: isHovered ? 10 : 0 }}
        transition={{ duration: 0.4 }}
      >
        Contact us
      </motion.span>

      {/* Right Arrow */}
      <span className="relative w-4 h-5 inline-block">
        <AnimatePresence>
          {!isHovered && (
            <motion.span
              key="right-arrow"
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: 60, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute"
            >
              →
            </motion.span>
          )}
        </AnimatePresence>
      </span>
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
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-lime-200 px-6 py-2
         rounded-full text-black font-semibold flex items-center gap-2 overflow-hidden transition-all"
      >
        {/* Left Arrow (enters on hover, white color) */}
        <span className="relative w-4 h-5 inline-block">
          <AnimatePresence>
            {isHovered && (
              <motion.span
                key="left-arrow"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute left-0 text-white"
              >
                →
              </motion.span>
            )}
          </AnimatePresence>
        </span>

        {/* Contact us text that moves slightly on hover */}
        <motion.span
          className="relative"
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ duration: 0.4 }}
        >
          Contact us
        </motion.span>

        {/* Right Arrow (moves out on hover) */}
        <span className="relative w-4 h-5 inline-block">
          <motion.span
            key="right-arrow"
            initial={false}
            animate={
              isHovered
                ? { x: 60, opacity: 0 }
                : { x: 0, opacity: 1 }
            }
            transition={{ duration: 0.4 }}
            className="absolute"
          >
            →
          </motion.span>
        </span>
      </button>
    </div>
      </nav>

      {/* Mobile Menu List */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-3 bg-[#FAFFF2] py-4">
         
             <ul className="flex gap-4 flex-col gap-y-2">
      {labels.map((item, index) => (
        <motion.li
          key={item}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={false}
          animate={
            hoveredIndex === index
              ? { y: [0, -20, 20, 0], opacity: [1, 0, 0, 1] }
              : { y: 0, opacity: 1 }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="cursor-pointer text-black"
        >
          {item}
        </motion.li>
      ))}
    </ul>
         
        </div>
      )}
    </>
  );
};

export default Navbar;
