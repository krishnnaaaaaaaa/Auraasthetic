
import React from "react";
import { motion } from "framer-motion";
import ValuesSection from "./ValuesSection";
import WSpecial from "./WSpecial";
import WelcomeCard from "./WelcomeCard";
import CareerSection from "./CareerSection";
const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-6 relative overflow-hidden">
      {/* Headings */}
      <div className="text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-semibold leading-snug">
          Building a healthier future through <br />
          <span className="text-black">expert care</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Experience top-tier healthcare & treatment
        </p>
      </div>

      {/* Tilted Image Cards */}
      <div className="relative flex justify-center items-center mt-16 h-[400px] md:h-[500px]">
        {/* Left Image */}
        <motion.img
          src="https://framerusercontent.com/images/iVtX0YCAZy7c9g1sllMckcjjtQs.png?scale-down-to=1024"
          alt="Doctor Left"
          className="w-52 sm:w-60 md:w-64 h-80 sm:h-96 md:h-[420px] object-cover rounded-3xl shadow-xl border-4 border-white absolute left-1/2 transform -translate-x-[140%] z-10"
          initial={{ opacity: 0, rotate: -25, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, rotate: -20, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Middle Image */}
        <motion.img
          src="https://framerusercontent.com/images/Fx1ysnOe6p7rGFiO1jqn5Nro.png?scale-down-to=1024"
          alt="Doctor Center"
          className="w-56 sm:w-64 md:w-72 h-80 sm:h-96 md:h-[440px] object-cover rounded-3xl shadow-2xl border-4 border-white z-20"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Right Image */}
        <motion.img
          src="https://framerusercontent.com/images/vjZg97oAlzIO55UtNcg8xy13Rs8.png?scale-down-to=1024"
          alt="Doctor Right"
          className="w-52 sm:w-60 md:w-64 h-80 sm:h-96 md:h-[420px] object-cover rounded-3xl shadow-xl border-4 border-white absolute right-1/2 transform translate-x-[140%] z-10"
          initial={{ opacity: 0, rotate: 25, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 20, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>
      <ValuesSection/>
      <WelcomeCard />
      <WSpecial />
      <CareerSection/>
    </div>
  );
};

export default About;
