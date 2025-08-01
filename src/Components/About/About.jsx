
import React from "react";
import { motion } from "framer-motion";
import ValuesSection from "./ValuesSection";
import WSpecial from "./WSpecial";
import WelcomeCard from "./WelcomeCard";
import CareerSection from "./CareerSection";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans px-4 sm:px-6 pb-10 pt-24 relative overflow-hidden">
      {/* Headings */}
      <div className="text-center mt-7 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug z-20">
          Building a healthier future through <br />
          <span className="text-black">expert care</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mt-4 ">
          Experience top-tier healthcare & treatment
        </p>
      </div>

      {/* Tilted Image Cards - Responsive & Stacked Overlapping */}
      <div className="relative flex flex-col md:flex-row justify-center items-center mt-16 gap-6 md:gap-0 h-auto md:h-[500px]">
        {/* Left Image */}
        <motion.img
          src="https://framerusercontent.com/images/iVtX0YCAZy7c9g1sllMckcjjtQs.png?scale-down-to=1024"
          alt="Doctor Left"
          className="w-64 sm:w-72 md:w-64 h-64 sm:h-72 md:h-[420px] object-cover rounded-3xl 
                     -mb-16 shadow-xl border-4 border-white 
                     md:absolute md:left-1/2 md:transform md:-translate-x-[140%]
                     rotate-[-6deg] md:rotate-[-20deg]"
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Middle Image */}
        <motion.img
          src="https://framerusercontent.com/images/Fx1ysnOe6p7rGFiO1jqn5Nro.png?scale-down-to=1024"
          alt="Doctor Center"
          className="w-64 sm:w-72 md:w-72 h-72 sm:h-80 md:h-[440px] object-cover rounded-3xl 
                     shadow-2xl border-4 border-white z-20 
                     -mb-16 rotate-[4deg] md:rotate-0"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Right Image */}
        <motion.img
          src="https://framerusercontent.com/images/vjZg97oAlzIO55UtNcg8xy13Rs8.png?scale-down-to=1024"
          alt="Doctor Right"
          className="w-64 sm:w-72 md:w-64 h-64 sm:h-72 md:h-[420px] object-cover rounded-3xl 
                     shadow-xl border-4 border-white 
                     rotate-[6deg] md:rotate-[20deg] z-10
                     md:absolute md:right-1/2 md:transform md:translate-x-[140%]"
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>

      {/* Other Sections */}
      <ValuesSection />
      <WelcomeCard />
      <WSpecial />
      <CareerSection />
    </div>
  );
};

export default About;
