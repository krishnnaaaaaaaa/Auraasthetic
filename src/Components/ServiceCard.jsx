import React from 'react'
import img from "../assets/bellicon.png"
function ServiceCard({title,Description}) {
  return (
    <div style={{display:"flex",width:"350px",hieght:"260px",display:"flex",flexDirection:"row",
    alignItems:"flex-start",justifyContent:"space-between",margin:"1rem",textAlign:"center",
    padding:"1rem ",
 
  borderRadius: "3rem" }}>
      <div style={{backgroundColor:"#233123",borderRadius:"50%",width:"55px",height:"52px",
display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginRight:"0.5rem"

      }}>

        <div style={{
          backgroundColor:"#C2EA66",height:"22px",width:"22px",borderRadius:"50%",
          display:"flex",alignItems:"center",justifyContent:"center"
        }}>

        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column",marginLeft:"1rem"}}>
<h3>{title}</h3>
      <div style={{maxWidth:"100%"}}>{Description}</div>
      </div>
      
    </div>
  );
}

export default ServiceCard;
