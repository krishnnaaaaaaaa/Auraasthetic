
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

const HeroCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [courseHovered, setCourseHovered] = useState(false);

  return (
    <div className="flex w-full items-center justify-center p-2 px-20 bg-white min-h-screen">
      <div className="relative w-full bg-[#c2ea66] rounded-3xl px-8 py-20 md:px-16 text-center shadow-lg overflow-hidden">

        {/* Inner Shadow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{ boxShadow: 'inset 0 0 80px rgba(0,0,0,0.15)' }}
        />

        {/*  Permanent Dotted Background at Bottom Area */}
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

        {/* Content Above Dots */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
          Ready to Transform Your Skin or Career?
        </h1>

        <p className="text-base md:text-lg text-gray-800 max-w-2xl mx-auto mb-10 relative z-10">
          Discover expert care and professional training — all under one roof. Let Aura be your first step toward confidence.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">

          {/* Contact Button */}
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="mt-4 bg-[#233123] px-6 py-2 rounded-full text-[#C2EA66] font-semibold flex items-center gap-0 overflow-hidden relative"
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

          {/* "Our Courses" Button */}
          <div
            className="inline-block"
            onMouseEnter={() => setCourseHovered(true)}
            onMouseLeave={() => setCourseHovered(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-black font-semibold text-base transition-colors"
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

        </div>
      </div>
    </div>
  );
};

export default HeroCard;
