import React from 'react';
import img from "../assets/bellicon.png";

function ServiceCard({ title, description }) {
  return (
    <div style={{
      display: "flex",
      width: "350px",
      height: "260px",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      margin: "1rem",
      padding: "1.5rem",
      textAlign: "center",
      borderRadius: "3rem",
      background: "#ffffff",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s ease-in-out"
    }}>
      <img 
        style={{ 
          width: "2.5rem",
          height: "2.5rem",
          objectFit: "contain"
        }} 
        src={img} 
        alt="" 
      />
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
        flex: 1,
        marginLeft: "1rem"
      }}>
        <h3 style={{
          margin: "0 0 0.75rem 0",
          color: "#333",
          fontSize: "1.1rem"
        }}>
          {title}
        </h3>
        <div style={{
          color: "#666",
          fontSize: "0.9rem",
          lineHeight: "1.5"
        }}>
          {description}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
