
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

const HeroCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [courseHovered, setCourseHovered] = useState(false);

  return (
   
    <div className="flex w-full 
    items-start sm:items-center justify-center px-4 sm:px-6 md:px-20 bg-white 
    ">
  <div className="relative w-full sm:max-w-full max-w-[360px] bg-[#c2ea66] rounded-3xl px-4 sm:px-8 md:px-16 py-6 sm:py-20 text-center shadow-lg overflow-hidden">


        {/* Inner Shadow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{ boxShadow: 'inset 0 0 80px rgba(0,0,0,0.15)' }}
        />

        {/* Dotted Background */}
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{
            height: '20%',
            backgroundImage: 'radial-gradient(#6b7280 1px, transparent 1px)',
            backgroundSize: '14px 14px',
            opacity: 0.5,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        {/* Heading */}
      
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 relative z-10 leading-snug">
  <span className="block sm:inline">Ready to Transform</span>{' '}


  <span className="block sm:inline">Your Skin</span>{' '}
  <span className="block sm:hidden">or Career?</span>
  <span className="hidden sm:inline"> or Career?</span>
</h1>


        {/* Paragraph */}
        <p className="text-sm sm:text-large md:text-lg text-gray-800 max-w-[90%] sm:max-w-xl mx-auto mb-8 sm:mb-10 relative z-10">
          Discover expert care and professional training — all under one roof. Let Aura be your first step toward confidence.
        </p>

        {/* Buttons */}
        <div className="flex
        flex-row justify-center items-center gap-3 sm:gap-6 relative z-10 w-full">

          {/* Contact Button */}
          <Link to="/contact" className="w-full sm:w-auto">
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full sm:w-auto bg-[#233123] px-6 py-2 rounded-full text-[#C2EA66] font-semibold flex items-center gap-0 overflow-hidden relative justify-center"
            >
            <motion.span
              className="w-5 h-5 absolute left-4"
              initial={false}
              animate={{
                x: isHovered ? 0 : -20,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              <FaArrowRight className="text-[#101828]" />
            </motion.span>

            <motion.span
              className="flex items-center"
              animate={{ x: isHovered ? 10 : 0 }}
              transition={{ duration: 0.4 }}
            >
              Contact us
              <motion.span
                className="ml-2"
                initial={false}
                animate={{
                  x: isHovered ? 20 : 0,
                  opacity: isHovered ? 0 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                <FaArrowRight className="text-[#C2EA66]" />
              </motion.span>
            </motion.span>
            </button>
          </Link>

          {/* Our Courses */}
          <Link to="/courses" className="inline-block w-full sm:w-auto text-center">
            <div
              onMouseEnter={() => setCourseHovered(true)}
              onMouseLeave={() => setCourseHovered(false)}
            >
              <button
                type="button"
                className="flex justify-center items-center gap-1 text-black font-semibold text-sm sm:text-base transition-colors w-full sm:w-auto"
              >
              Our Courses
              <span className="relative w-3 h-4 inline-block">
                <AnimatePresence mode="wait">
                  {courseHovered ? (
                    <motion.span
                      key="arrow-out"
                      initial={{ x: 0, y: 0, opacity: 1 }}
                      animate={{ x: 8, y: -8, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute"
                    >
                      <FaArrowRight className="text-sm" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="arrow-in"
                      initial={{ x: -8, y: 8, opacity: 0, rotate: -18 }}
                      animate={{ x: 0, y: 0, opacity: 1, rotate: -18 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute"
                    >
                      <FaArrowRight className="text-sm" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
              </button>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default HeroCard;
