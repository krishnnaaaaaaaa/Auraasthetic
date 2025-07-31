
import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { FaArrowRight } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";

function AccessCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full h-[750px] rounded-2xl shadow-md p-6 flex flex-col items-center
     justify-between bg-[#C2EA66] overflow-hidden transition-all duration-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top left icon */}
      <div className="self-start mb-2 relative">
        <div
          className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center
            ${isHovered ? "bg-white text-black" : " text-black"}`}
        >
          {isHovered ? (
           <FaPaperclip className="text-xl rotate-[180deg]" />

          ) : (
            <FaArrowRight className="text-xl" />
          )}
        </div>
      </div>

      {/* Text */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#333] mb-3">Extended Access</h1>
        <h3 className="text-lg text-[#233123] font-medium px-4">
          Get 6 months extra studio time - Exclusive to Aura students
        </h3>
      </div>

      {/* Logo */}
      <div className="flex-1 flex items-center justify-center w-full p-4">
        <div className="w-full max-w-[600px]">
          <img
            src={logo}
            alt="Logo"
            className={`w-full h-auto object-contain rounded-xl 
              transition-transform duration-400 ease-in-out 
              ${isHovered ? "scale-220" : "scale-100"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default AccessCard;
