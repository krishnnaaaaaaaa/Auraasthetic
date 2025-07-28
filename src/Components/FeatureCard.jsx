import React from 'react'
import img from "../assets/download.png"
function FeatureCard({Title,Description}) {
  return (
    
 
      <div style={{display:"flex",width:"350px",hieght:"260px",display:"flex",flexDirection:"column",
    alignItems:"flex-start",justifyContent:"space-between",margin:"1rem",
      border:" 1px solid #ccc",padding:"1rem ",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "3rem"  }}>
        <img  style={{ width:"8rem"}}src={img} alt="" />

      
              <h2 style={{color:"grey"}}>{Title}</h2>
        <div  style={{maxWidth:"80%",color:"grey"}}>{Description}</div>
    </div>
  )
}

export default FeatureCard









