;
// src/Components/Home/AccessCard.jsx


import React from 'react';
import logo from "../../assets/logo.png";
import { FiClipboard } from "react-icons/fi"; // import clipboard icon

function AccessCard() {
  return (
    <div className="w-[85%] h-[600px] rounded-2xl 
    shadow-md p-4 flex flex-col items-center bg-[#C2EA66] relative group overflow-hidden">

      {/* Top-right hover div */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-transparent rounded-full flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-white">
        <FiClipboard className="text-transparent group-hover:text-[#233123] text-xl transition-all duration-300 ease-in-out" />
      </div>

      <h1 className="text-2xl font-semibold text-[#333] mb-4">Extended Access</h1>

      <h3 className="text-base text-[#233123] font-normal text-center px-6 py-3">
        Get 6 months extra studio time - Exclusive to Aura students
      </h3>

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="mt-6 w-[500px] transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
    </div>
  );
}

export default AccessCard;
