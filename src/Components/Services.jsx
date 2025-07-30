
import React from 'react';
import ServiceCard from './ServiceCard';

function Services() {
  return (
    <div className="py-6 px-4">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Our Services</h1>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <ServiceCard title="Laser Treatments" Description="Precise, painless hair and skin correction." />
        <ServiceCard title="Chemical Peels" Description="Dead skin removal, glow restoration." />
        <ServiceCard title="Micro Derma Abrasion" Description="Skin polishing for smoother texture." />
        <ServiceCard title="Growth Factor Concentrate" Description="Advanced therapy to boost regrowth." />
        <ServiceCard title="Tesla Therapy" Description="Scalp stimulation for hair strengthening." />
        <ServiceCard title="PRP" Description="Natural hair and skin regeneration." />
        <ServiceCard title="Meso Therapy" Description="Nutrient infusion for skin rejuvenation." />
        <ServiceCard title="Medicated Facials" Description="Targeted facials with visible results. (Oxygeneo, Hollywood, Vampire, Hydra included)" />
        <ServiceCard title="Lipolysis" Description="Fat melting for body contouring." />
      </div>
    </div>
  );
}

export default Services;
