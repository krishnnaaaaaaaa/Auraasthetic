
import React from 'react';
import ServiceCard from './ServiceCard';

function Services() {
  return (
    <div className="px-4 py-12 max-w-screen-xl mx-auto font-sans">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#333] mb-4">
        Our Services
      </h2>

      {/* Underline */}
      <div className="h-1 w-20 bg-[#C2EA66] rounded mx-auto mb-10"></div>

      {/* Grid of Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard 
          title="Laser Treatments" 
          Description="Precise, painless hair and skin correction." 
        />
        <ServiceCard 
          title="Chemical Peels" 
          Description="Dead skin removal, glow restoration." 
        />
        <ServiceCard 
          title="Micro Derma Abrasion" 
          Description="Skin polishing for smoother texture." 
        />
        <ServiceCard 
          title="Growth Factor Concentrate" 
          Description="Advanced therapy to boost hair regrowth." 
        />
        <ServiceCard 
          title="Tesla Therapy" 
          Description="Scalp stimulation for hair restoration." 
        />
        <ServiceCard 
          title="PRP" 
          Description="Natural hair and skin regeneration." 
        />
        <ServiceCard 
          title="Meso Therapy" 
          Description="Nutrient infusion for skin rejuvenation." 
        />
        <ServiceCard 
          title="Medicated Facials" 
          Description="Targeted facials with visible results. (Oxygeneo, Hollywood, Vampire, Hydra included)" 
        />
        <ServiceCard 
          title="Lipolysis" 
          Description="Fat melting for body contouring." 
        />
      </div>
    </div>
  );
}

export default Services;
