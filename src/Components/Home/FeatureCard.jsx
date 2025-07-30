import React from 'react';
import img from "../../assets/download.png";

function FeatureCard({ Title, Description }) {
  return (
    
 
      <div style={{
        display: "flex",
        width: "350px",
        height: "220px",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        margin: "0.5rem",
        padding: "1rem",
        border: "1px solid #ccc",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "1rem"
      }}>
        <img  style={{ width:"8rem"}}src={img} alt="" />

      
              <h2 style={{color:"grey"}}>{Title}</h2>
        <div  style={{maxWidth:"80%",color:"grey"}}>{Description}</div>
    </div>
  );
}

export default FeatureCard;









