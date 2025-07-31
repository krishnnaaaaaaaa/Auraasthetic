import React from 'react';
import logo from "../assets/logo.png";

function AccessCard() {
  return (
    <div className="w-full h-full rounded-2xl shadow-md p-6 flex flex-col items-center
     justify-between bg-[#C2EA66] overflow-hidden">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#333] mb-3">Extended Access</h1>
        <h3 className="text-lg text-[#233123] font-medium px-4">
          Get 6 months extra studio time - Exclusive to Aura students
        </h3>
      </div>
      
      <div className="flex-1 flex items-center justify-center w-full p-4">
        <div className="w-full max-w-[600px]">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-auto object-contain rounded-xl
             transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default AccessCard;
