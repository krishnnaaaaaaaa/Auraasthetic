
import React from 'react';

const HeroCard = () => {
  return (
    <div className="relative bg-[#c2ea66] min-h-screen flex items-center justify-center p-4">
      {/* White Card */}
      <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-xl">
        {/* Content */}
        <div className="p-8 md:p-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Skin or Career?
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover expert care and professional training — all under one roof. Let Aura be your first step toward confidence.
          </p>
          
          <div className="flex justify-center">
            <button 
              type="button"
              className="bg-[#c2ea66] hover:bg-[#b3d95c] text-black px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
        
        {/* Dotted Bottom Section */}
        <div 
          className="h-16 bg-[#c2ea66] relative overflow-hidden"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
            opacity: 0.2
          }}
        />
      </div>
    </div>
  );
};

export default HeroCard;
