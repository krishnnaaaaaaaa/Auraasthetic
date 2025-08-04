
import React from 'react';
import trainingImage from "../../assets/4.png";

function Institute() {
  return (
    <section className="bg-[#fcfcf5] px-4 sm:px-6 md:px-10 lg:px-20 py-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        
        {/* Left Text Content */}
        <div className="flex-1 w-full max-w-full sm:max-w-[90%] md:max-w-none mx-auto">
         
         <h2 className="w-full bg-[#1b1f17] rounded-full text-white font-bold 
text-lg sm:text-xl md:text-2xl lg:text-3xl px-4 py-3 mb-4 
text-center whitespace-normal leading-snug">
  Aura Cosmetology Training Institute
</h2>

          <p className="text-gray-700 text-sm sm:text-base mb-3 leading-relaxed">
            At Aura, we believe quality education should be accessible to everyone. That’s why we offer 
            <span className="font-semibold text-gray-900"> flexible schedules </span> and 
            <span className="font-semibold text-gray-900"> affordable pricing </span> to support students from all backgrounds.
          </p>

          <p className="text-gray-700 text-sm sm:text-base mb-3 leading-relaxed">
            Our <span className="font-semibold text-gray-900">state-of-the-art facility</span> features the latest tools and technology, providing a truly hands-on learning experience. Students practice in a 
            <span className="font-semibold text-gray-900"> fully equipped cosmetology studio</span>, working on real patients to build confidence and skill.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            We foster a <span className="font-semibold text-gray-900">supportive, inclusive environment</span>, where every student receives the 
            <span className="font-semibold text-gray-900"> guidance and mentorship</span> they need to thrive.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-full sm:max-w-[80%] md:max-w-none mx-auto">
          <img
            src={trainingImage}
            alt="Aura Cosmetology Training Institute"
            className="rounded-2xl shadow-lg w-full h-auto object-cover max-h-[400px] sm:max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Institute;
