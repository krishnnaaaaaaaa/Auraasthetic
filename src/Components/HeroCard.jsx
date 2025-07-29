import React from 'react';

const HeroCard = () => {
  return (
    <>
      <style>{`
        .hero-card {
          background-color:#057C8B;
          text-align: center;
          padding: 60px 20px;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: viewport-width;
            min-height: 60vh;
            align-items: center;
          margin: 50px 10%;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
        }

        .hero-card h1 {
          font-size: 2.7rem;
          color: White;
            max-width: 600px; 
              line-height: 1.3;
          Font-weight: 600;
          margin-bottom: 20px;
        }

        .hero-card h3 {
          font-size: 1.2rem;
          color: white;
            max-width: 490px;  
             line-height: 1.5;
          margin-bottom: 30px;
          font-weight: normal;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
          

         .hero-button.contact {
          background-color: white;
          color: black;
          padding: 12px 25px;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
        //   transition: background-color 0.3s ease;
        }
          .courses-text {
          color: white;
          font-size: 1rem;
          font-weight: 500;
          align-self: center;
          padding: 12px 25px;
          cursor: pointer;}

       
      `}</style>

      <div className="hero-card">
        <h1>Ready to Transform Your Skin or Career?</h1>
        <h3>
          Discover expert care and professional training — all under one roof. Let Aura be your first step toward confidence.
        </h3>
        <div className="hero-buttons">
          <button className="hero-button contact">Contact Us</button>
         <div className="courses-text">Our Courses</div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
