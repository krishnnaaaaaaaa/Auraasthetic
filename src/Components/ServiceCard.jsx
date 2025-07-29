import React from 'react';
import img from "../assets/bellicon.png";

function ServiceCard({ title, Description }) {
  return (
    <div style={{
      display: "flex",
      width: "350px",
      height: "260px",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      margin: "1rem",
      textAlign: "center",
      padding: "1rem",
      borderRadius: "3rem"
    }}>
      <img style={{ width: "2rem" }} src={img} alt="" />
      <div style={{ display: "flex", flexDirection: "column" }}>
<h3>{title}</h3>
      <div>{Description}</div>
      </div>
      
    </div>
  )
}

export default ServiceCard
