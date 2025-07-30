import React from "react";

export default function CareerSection() {
  return (
    <div className=" min-h-[500px] flex flex-col bg-[#C2EA66] items-center justify-center py-10 gap-7 ">
      {/* Left Sidebar */}
     
   
   <h1 className="text-[#C2EA66] font-extrabold text-lg sm:text-xl md:text-2xl lg:text-4xl text-center
bg-[#233123] px-4 py-6 rounded-full align-center">
  Start Your Professional Journey With Us Now
</h1>


      {/* Right Content */}
     
        <p className="text-gray-800 text-base md:text-lg max-w-xl">
          Our team is dedicated to helping students achieve their goals and is available to provide guidance and support throughout their journey. Whether you are just starting out in the beauty industry or looking to advance your career, Aura Cosmetology Training Institute is the perfect place to begin. Contact us today to learn more about our programs and start your journey toward a rewarding career in cosmetology.
        </p>
      
    </div>
  );
}