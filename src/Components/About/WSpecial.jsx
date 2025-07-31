
import React from 'react';

const WSpecial = () => {
  const features = [
    "Career Counselling",
    "Certified Professional Course",
    "Experienced Instructor",
    "Hands on Training"
  ];

  return (
    <section className="w-full px-4 py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
        
        {/* Left Content */}
        <div className="flex-[1_1_300px] min-w-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
            Why We Are Special ?
          </h2>
          <ul className="space-y-4">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full
                 bg-[#233123] flex items-center justify-center">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 bg-[#C2EA66] rounded-full"></span>
                </span>
                <p className="text-base sm:text-lg text-[#B8B8B8]font-medium">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
       
       <div className="flex-[1_1_300px] flex justify-center min-w-0 relative">
  {/* Background Layer */}
  <div className="absolute bottom-0 w-full h-[60%] bg-[#FFF3EB] rounded-b-2xl z-0" />

  {/* Image */}
  <img
    src="https://framerusercontent.com/images/LdSetSBO6E5sof4y9T819dgbhCY.png"
    alt="Doctor"
    className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-md lg:max-w-lg rounded-2xl object-cover relative z-10"
  />
</div>

      </div>
    </section>
  );
};

export default WSpecial;
