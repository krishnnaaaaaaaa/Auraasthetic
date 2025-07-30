
import React from 'react';
import ServiceCard from './ServiceCard';

function Services() {
  return (
    <div style={{
      padding: '60px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '36px',
        fontWeight: '700',
        color: '#333',
        marginBottom: '15px'
      }}>Our Services</h2>
      <div style={{
        height: '4px',
        width: '80px',
        background: '#C2EA66',
        margin: '0 auto 50px',
        borderRadius: '2px'
      }}></div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '0 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
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
