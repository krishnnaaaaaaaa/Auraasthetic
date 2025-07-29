
import React from 'react';
import img from "../assets/IntroSectionimg.jpg";

function IntroSection() {
  return (
    <>
      <style>{`
        .intro-container {
          background-color: #057C8B;
          display: flex;
          flex-wrap: wrap;
          margin: 2rem 0;
          padding: 2rem 1rem;
          gap: 2rem;
          justify-content: center;
          align-items: center;
        }

        .intro-image-container {
          flex: 1;
          min-width: 300px;
          padding: 0 0rem;
        }

        .intro-image {
          width: 100%;
          border-radius: 3rem;
          object-fit: cover;
        }

        .intro-content {
          flex: 1;
          min-width: 300px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 0 1rem;
        }

        .intro-title-box {
          background-color: white;
          color: #057C8B;
          border-radius: 4rem;
          padding: 1rem 2rem;
          text-align: center;
        }

        .intro-title {
          font-size: 2rem;
          margin: 0;
        }

        .intro-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .intro-container {
            flex-direction: column;
            padding: 1rem;
            margin-top: 6rem;
          }

          .intro-title {
            font-size: 1.5rem;
          }

          .intro-text {
            font-size: 1rem;
          }

          .intro-image,
          .intro-image-container {
            width: 100%;
          }

          .intro-content {
            width: 100%;
            padding: 0;
          }
        }
      `}</style>

      <div className="intro-container">
        <div className="intro-image-container">
          <img className="intro-image" src={img} alt="Intro" />
        </div>

        <div className="intro-content">
          <div className="intro-title-box">
            <h1 className="intro-title">Who We Are ?</h1>
          </div>
          <div className="intro-text">
            <p>
              Welcome to Aura Aesthetics Cosmetology Clinic & Training Center (AACCTC), a premier beauty school 
              dedicated to providing students with exceptional training and education in the field of cosmetology.
            </p>
            <p>
              Our mission is to equip our students with the knowledge, skills, and tools necessary to succeed in the beauty industry. 
              We offer courses, including hair care and skin care, all taught by experienced doctors who are passionate about mentoring.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroSection;
