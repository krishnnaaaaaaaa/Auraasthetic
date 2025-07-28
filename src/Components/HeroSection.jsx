
import React, { useState, useEffect } from 'react';
import frontimg from '../assets/frontimg.jpeg';
import backimg from '../assets/backimg.jpg';
import './HeroSection.css'; // 👈 Import the CSS

function HeroSection() {
  const [years, setYears] = useState(0);
  const [experience, setExperience] = useState(1950);

  useEffect(() => {
    const yearsInterval = setInterval(() => {
      setYears((prev) => {
        if (prev >= 12) {
          clearInterval(yearsInterval);
          return 12;
        }
        return prev + 1;
      });
    }, 100);

    const experienceInterval = setInterval(() => {
      setExperience((prev) => {
        if (prev >= 2000) {
          clearInterval(experienceInterval);
          return 2000;
        }
        return prev + 5;
      });
    }, 100);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(experienceInterval);
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="firsthalf">
        <div className="text-wrapper">
          <h1 className="hero-heading">
            AURA AESTHETICS COSMETOLOGY CLINIC & TRAINING CENTER
          </h1>
          <h3 className="hero-subtext">
            Experience leading healthcare services with expert treatments tailored to your work needs
          </h3>
          <div className="experience-wrapper">
            <div className="exp-box">
              <p className="exp-number">{years}+</p>
              <span className="exp-label">Years of Experience</span>
            </div>
            <div className="exp-box">
              <p className="exp-number">{experience}+</p>
              <span className="exp-label">More than Hours of Teaching Experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="secondhalf">
        <img src={frontimg} className="frontimg" alt="front" />
        <img src={backimg} className="backimg" alt="back" />
      </div>
    </div>
  );
}

export default HeroSection;
