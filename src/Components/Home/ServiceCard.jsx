
import React from 'react';

function ServiceCard({ title, Description }) {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-start gap-4 w-full max-w-[400px] p-4 mb-6 transition-all duration-300">
      {/* Outer Circle */}
      <div className="w-12 h-12 flex-shrink-0 bg-[#233123] rounded-full flex items-center justify-center">
        {/* Inner Circle */}
        <div className="w-[25px] h-[25px] rounded-full bg-[#C2EA66] border-[2.5px] border-white"></div>
      </div>

      {/* Text Section */}
      <div className="flex-1 pt-1 text-left">
        <h3 className="text-[#333] font-semibold text-lg mb-2 leading-snug">{title}</h3>
        <p className="text-[#666] text-sm leading-relaxed">{Description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
