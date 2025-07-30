
import React from 'react';
import logo from "../assets/logo.png";

function AccessCard() {
  return (
    <div className="w-[85%] h-[700px] rounded-md shadow-md p-5 flex flex-col items-center bg-[#C2EA66]">
      <h1 className="text-2xl font-semibold text-[#333] mb-4">Extended Access</h1>
      <h3 className="text-base text-[#233123] font-normal text-center px-8 py-4">
        Get 6 months extra studio time - Exclusive to Aura students
      </h3>
      <img
        src={logo}
        alt="Logo"
        className="mt-8 w-[543px] transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>
  );
}

export default AccessCard;
