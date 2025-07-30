
import React from 'react';
import img from "../assets/bellicon.png";

function ServiceCard({ title, Description }) {
  return (
    <div className="flex flex-row w-[350px] h-[260px] mx-4 my-1 text-center p-4 rounded-[3rem]">
      {/* Outer Circle */}
      <div className="bg-[#233123] rounded-full w-[60px] h-[60px] flex items-center justify-center mr-2">
        {/* Inner Circle */}
        <div className="bg-[#C2EA66] w-[22px] h-[22px] rounded-full flex items-center justify-center"></div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col ml-2 text-left">
        <h3 className="text-lg font-semibold text-[#233123]">{title}</h3>
        <p className="max-w-full text-sm text-[#333333]">{Description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
