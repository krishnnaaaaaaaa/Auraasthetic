import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Your business WhatsApp number (replace with actual number)
  const whatsappNumber = '+918830062071';
  const message = 'Hello! I would like to know more about your services at Aura Aesthetics.';
  
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
      >
        <motion.button
          onClick={handleClick}
          onMouseEnter={() => {
            setIsHovered(true);
            setShowTooltip(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setShowTooltip(false);
          }}
          className="relative bg-[#C2EA66] hover:bg-[#a8d147] text-black p-4 rounded-full shadow-lg transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp className="text-2xl" />
          
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-[#C2EA66] animate-ping opacity-20"></div>
          
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
              >
                Chat with us on WhatsApp
                <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-gray-800 dark:border-l-gray-700"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </>
  );
};

export default WhatsAppFloat;
