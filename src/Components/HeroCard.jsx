
import React from 'react';

const HeroCard = () => {
  return (
    <div className="relative bg-[#c2ea66] text-white text-center px-6 py-20 rounded-2xl max-w-[90%] mx-auto my-8 flex flex-col justify-center items-center min-h-[70vh] font-sans overflow-hidden">
      {/* Dotted Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }} 
      />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Ready to Transform Your Skin or Career?
        </h1>
        
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover expert care and professional training — all under one roof. Let Aura be your first step toward confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            type="button"
            className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-900 transition-colors duration-300 shadow-lg"
          >
            Contact Us
          </button>
          
          <button 
            type="button"
            className="bg-transparent text-black border-2 border-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-black hover:bg-opacity-10 transition-colors duration-300"
          >
            Our Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
