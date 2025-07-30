import React from "react";

const WSpecial = () => { const points = [ "Hands on Training", "Experienced Instructor", "Certified Professional Course", "Career Counselling" ];

return ( <div className="min-h-screen bg-white flex items-center justify-center p-6">
     <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
         {/* Text Section */} <div> <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"> Why We Are Special? </h2> <ul className="space-y-5 text-lg text-gray-700"> {points.map((point, index) => ( <li key={index} className="flex items-center"> <span className="w-4 h-4 bg-green-500 rounded-full border-4 border-black mr-4"></span> {point} </li> ))} </ul> </div>

{/* Image Section */}
    <div className="flex justify-center">
      <img
        src="https://framerusercontent.com/images/LdSetSBO6E5sof4y9T819dgbhCY.png"
        alt="Doctor"
        className="rounded-xl "
      />
    </div>
  </div>
</div>

); };

export default WSpecial;