import React from 'react';

function AccessCard() {
  return (
    <>
      <style>
        {`
          .access-card {
        width:30%;
            height: 700px;
            background-color: #f5f5f5;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            display: flex;
            background-color: #057C8B;
       
            flex-direction: column;
           
            align-items: center;
           
            
          }

          .access-card h1 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #333;
          }

          .access-card h3 {
            font-size: 1rem;
            font-weight: normal;
            color: white;
          }
        `}
      </style>

      <div className="access-card">
        <h1>Extended Access</h1>
        <h3>
          Get premium features and uninterrupted service with our extended plan. Explore more benefits today.
        </h3>
        <h1 style={{color:"white",marginTop:"15rem",fontSize:"6rem"}}   onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}>AURA</h1>
      </div>
    </>
  );
}

export default AccessCard;
