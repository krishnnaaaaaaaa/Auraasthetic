import React from 'react';
import img from "../../assets/download.png";

function FeatureCard({ Title, Description }) {
  return (
    <div className="relative p-6 rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col">
      {/* Dotted background pattern */}
      <div 
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.2) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}
      />
      
      <div className="relative z-10">
        {/* Icon container */}
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
          <div className="w-6 h-6 bg-lime-300 rounded-full"></div>
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
