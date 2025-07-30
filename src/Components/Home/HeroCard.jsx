
import React from 'react';

const HeroCard = () => {
  return (
    <div className="bg-[#c2ea66] text-white text-center px-5 py-16 rounded-2xl shadow-lg max-w-[90%] mx-auto my-12 flex flex-col justify-center items-center min-h-[60vh] font-sans">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug max-w-xl mb-6">
        Ready to Transform Your Skin or Career?
      </h1>
      <h3 className="text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-md mb-8">
        Discover expert care and professional training — all under one roof. Let Aura be your first step toward confidence.
      </h3>
      <div className="flex justify-center flex-wrap gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-md text-base font-medium hover:bg-gray-100 transition">
          Contact Us
        </button>
        <div className="text-white text-base font-medium px-6 py-3 cursor-pointer">
          Our Courses
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
