import React from 'react';

const HeroCard = () => {
  return (
    <div className="flex items-center justify-center p-4 bg-white min-h-screen">
      {/* Green Card */}
      <div className="relative w-full max-w-6xl bg-[#c2ea66] rounded-3xl px-8 py-20 md:px-16 text-center shadow-lg overflow-hidden">
        {/* Vignette overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{
            boxShadow: 'inset 0 0 80px rgba(0,0,0,0.15)',
          }}
        />
        {/* Content */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Skin or Career?
        </h1>

        <p className="text-base md:text-lg text-gray-800 max-w-2xl mx-auto mb-10">
          Discover expert care and professional training — all under one roof. Let Aura be your first step toward confidence.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* Primary Button */}
          <button
            type="button"
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-gray-900 transition-colors group"
          >
            Contact us
            <span className="transform group-hover:translate-x-0.5 transition-transform">➜</span>
          </button>

          {/* Secondary Link Button */}
          <button
            type="button"
            className="flex items-center gap-2 text-black font-semibold text-base hover:underline transition-colors"
          >
            Our Courses
            <span className="transform translate-y-px">➜</span>
          </button>
        </div>

        {/* Dotted Bottom Texture */}
        <div
          className="absolute inset-x-0 bottom-0 h-28"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
            opacity: 0.25,
          }}
        />
      </div>
    </div>
  );
};

export default HeroCard;
