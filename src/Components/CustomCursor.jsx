import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    // Hide cursor when it leaves the window
    const handleMouseOut = () => setIsVisible(false);
    const handleMouseOver = () => setIsVisible(true);

    // Add event listeners for all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [tabindex]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseover', handleMouseOver);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1,
      opacity: isVisible ? 1 : 0,
      backgroundColor: 'rgba(194, 234, 102, 0.2)', // #C2EA66 with some transparency
      borderColor: 'rgba(168, 209, 71, 0.8)', // Darker shade of #C2EA66 for border
    },
    hover: {
      scale: 2,
      backgroundColor: 'rgba(194, 234, 102, 0.4)', // More opaque #C2EA66 on hover
      borderColor: 'rgba(194, 234, 102, 1)', // Solid #C2EA66 border on hover
      mixBlendMode: 'normal'
    }
  };

  return (
    <motion.div
      className="fixed w-5 h-5 rounded-full border-2 pointer-events-none z-50"
      variants={cursorVariants}
      animate={isHovered ? 'hover' : 'default'}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 300,
        mass: 0.5
      }}
    >
      <motion.div 
        className="w-1 h-1 bg-[#C2EA66] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: isHovered ? 0.5 : 1,
          opacity: isHovered ? 0 : 1
        }}
      />
    </motion.div>
  );
};

export default CustomCursor;
