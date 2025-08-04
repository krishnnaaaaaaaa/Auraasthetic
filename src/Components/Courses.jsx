import React, { useState } from 'react';
import { motion } from 'framer-motion';
import coursesHeroImage from '../assets/visagiste-creating-professional-makeup-woman-studio.jpg';
import skillBadgeImage from '../assets/4.png';
import Faq from './Faq';
import HeroCard from './Home/HeroCard';

const Courses = () => {
  const [selectedBadges, setSelectedBadges] = useState([]);

  const toggleBadge = (index) => {
    setSelectedBadges(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Skills/Features badges
  const skillBadges = [
    "SKIN AESTHETICS & SCOPE",
    "CONCEPT OF TRICHOLOGY",
    "CHEMICAL PEELS",
    "ACNE MANAGEMENT /BRIGHTENING PEELS",
    "UNDEARM / UNDEREYE PEELS",
    "MELASMA, MOLE, WART MANAGEMENT",
    "OMEGA LIGHT THERAPY",
    "FACE PRP",
    "HAIR PRP",
    "HAIR LASER THERAPY",
    "HAIR GFC",
    "MESOTHERAPY",
    "MNRF",
    "TESLA FOR DANDRUFF",
    "LASER HAIR REMOVAL",
    "TATTOO REMOVAL",
    "LASER TONING",
    "WHITENING DRIP/GLUTA THERAPY",
    "LIPOLYSIS",
    "OXYGENEO FACIAL",
    "TESLA ELECTRODES FACIAL",
    "VAMPIRE FACIAL",
    "CARBON LASER FACIAL",
    "DERMAPLANING WITH MEDICATED FACIAL",
    "DIAMOND SKIN POLISHING",
    "BB GLOW KOREAN TREATMENT",
    "TCA CROSS"
  ];

  const faqItems = [
    "Are all treatments doctor supervised?",
    "Is there any downtime after cosmetic procedures?",
    "Do you offer personalized treatment plans?",
    "Who can join the cosmetology courses?",
    "Will I get hands-on training during the course?",
    "Do you provide best course support and guidance?"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans px-4 sm:px-6 pb-10 pt-24 relative overflow-hidden">
      {/* Hero Image Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mt-12 mb-16 mx-auto max-w-4xl"
      >
        <img
          src={coursesHeroImage}
          alt="Professional makeup artist at work"
          className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-lg p-2 sm:p-3">
          <span className="text-white font-semibold text-xs sm:text-sm md:text-base">Make a career</span>
        </div>
      </motion.div>

      {/* What Makes Us Stand Out Section */}
      <div className="mt-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Makes Us Stand Out From<br />The Rest
          </h2>
        </motion.div>

        {/* Skills Badges Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16"
        >
          {skillBadges.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => toggleBadge(index)}
              className={`${
                selectedBadges.includes(index) 
                  ? 'bg-[#233123] text-white' 
                  : 'bg-[#C2EA66] text-gray-800 hover:bg-[#a8d147]'
              } px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer flex items-center gap-2`}
            >
              {/* Profile Icon */}
              <div className="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
                <img 
                  src={skillBadgeImage} 
                  alt="Skill Badge" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span>{skill}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <Faq />
        </motion.div>

        {/* Hero Card Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24"
        >
          <HeroCard />
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
