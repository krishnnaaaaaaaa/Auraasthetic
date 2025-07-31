import React from 'react';
import { FiBookOpen, FiUsers, FiAward, FiLayers } from 'react-icons/fi';

const iconComponents = {
  'Career Counseling': <FiUsers className="text-white text-xl" />,
  'Certified Courses': <FiAward className="text-white text-xl" />,
  'Expert Mentorship': <FiUsers className="text-white text-xl" />,
  'Hands-On Studio': <FiLayers className="text-white text-xl" />
};

function FeatureCard({ Title, Description }) {
  return (
    <div className="relative p-6 rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col">
      {/* Dotted texture in top right corner */}
      <div 
        className="absolute top-0 right-0 w-24 h-24 -mr-6 -mt-6 z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
          opacity: 0.4,
        }}
      />
      
      <div className="relative z-10">
        {/* Icon container */}
        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-3">
          {iconComponents[Title] || <FiBookOpen className="text-white text-xl" />}
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2">{Title}</h3>
        
        {/* Description */}
        <p className="text-gray-500 text-sm mb-4">{Description}</p>
        
        {/* Arrow icon */}
        <div className="w-6 h-6 rounded-full bg-lime-100 flex items-center justify-center mt-auto">
          {/* <FiArrowRight className="text-lime-600 w-4 h-4" /> */}
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
