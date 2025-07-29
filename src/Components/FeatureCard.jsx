import React from 'react'
import img from "../assets/download.png"
function FeatureCard({Title,Description}) {
  return (
    
 
      <div style={{
        width: "320px",
        minHeight: "240px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "1.5rem",
        margin: "1rem",
        borderRadius: "1.5rem",
        background: "#ffffff",
        position: "relative",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      }}>
        {/* dotted overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "30%",
          height: "30%",
          background: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
          borderTopRightRadius: "1.5rem",
          pointerEvents: "none",
        }} />
        <img  style={{ width:"8rem", position:"relative", zIndex:1 }}src={img} alt="" />

      
              <h2 style={{color:"grey"}}>{Title}</h2>
        <div  style={{maxWidth:"80%",color:"grey"}}>{Description}</div>
    </div>
  )
}

export default FeatureCard









