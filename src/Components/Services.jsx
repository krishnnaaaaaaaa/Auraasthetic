// import React from 'react'
// import ServiceCard from './ServiceCard'
// function Services() {
//   return (
//     <div>
//     <h1>
//      Our Services</h1>  
//      <div style={{display:"flex",gap:"0.3rem",flexWrap:"wrap",width:"100%",padding:"0 2rem"}}>
// <ServiceCard title="Laser Treatments"Description="Precise, painless hair and skin correction."/>
// <ServiceCard title="Chemical Peels"Description="Dead skin removal, glow restoration."/>

// <ServiceCard title="Micro Derma Abrasion"Description="Skin polishing for smoother texture."/>

// <ServiceCard title=" Growth Factor Concentrate"Description="Advanced therapy to boost regrowth."/>
// <ServiceCard title="Tesla Therapy "Description="Scalp stimulation for hair strengthening."/>
// <ServiceCard title="PRP "Description="Natural hair and skin regeneration."/>
// <ServiceCard title="Meso Therapy "Description="Nutrient infusion for skin rejuvenation."/>
// <ServiceCard title="Medicated Facials"Description="Targeted facials with visible results.  (Oxygeneo, Hollywood, Vampire, Hydra included)"/>

// <ServiceCard title=" Lipolysis"Description="Fat melting for body contouring."/>

//      </div>
//     </div>
//   )
// }

// export default Services







import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

function Services() {
  return (
    <div>
      <h1 className="services-heading">Our Services</h1>
      <div className="services-container">
        <ServiceCard title="Laser Treatments" Description="Precise, painless hair and skin correction." />
        <ServiceCard title="Chemical Peels" Description="Dead skin removal, glow restoration." />
        <ServiceCard title="Micro Derma Abrasion" Description="Skin polishing for smoother texture." />
        <ServiceCard title="Growth Factor Concentrate" Description="Advanced therapy to boost regrowth." />
        <ServiceCard title="Tesla Therapy" Description="Scalp stimulation for hair strengthening." />
        <ServiceCard title="PRP" Description="Natural hair and skin regeneration." />
        <ServiceCard title="Meso Therapy" Description="Nutrient infusion for skin rejuvenation." />
        <ServiceCard title="Medicated Facials" Description="Targeted facials with visible results.  (Oxygeneo, Hollywood, Vampire, Hydra included)" />
        <ServiceCard title="Lipolysis" Description="Fat melting for body contouring." />
      </div>
    </div>
  );
}

export default Services;

