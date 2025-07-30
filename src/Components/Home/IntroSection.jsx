
import React from "react";
import introImage from "../../assets/introsectionimg.jpg"; // replace with your image path

const IntroSection = () => {
  return (
    <section className="bg-lime-300 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl">
          <img
            src={introImage}
            alt="Makeup artist"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-black">
         
         <h2 className="text-center text-3xl font-bold mb-6">
  <span className="bg-white px-12 py-2 rounded-full inline-block shadow-md w-full max-w-[500px]">
    Who We Are ?
  </span>
</h2>
          <p className="text-md mb-4 leading-relaxed font-medium">
            Welcome to Aura Aesthetics Cosmetology Clinic & Training Center (AACCTC), a premier aesthetic school dedicated to providing students with exceptional training and education in the field of cosmetology.
          </p>
          <p className="text-md leading-relaxed font-medium">
            Our mission is to equip our students with the knowledge, skills, and tools necessary to succeed in the beauty cosmetology and aesthetic industry. We offer courses, including hair care and skin care, all taught by experienced doctors who are passionate about mentoring.
          </p>
        </div>

      </div>
    </section>
  );
};

export default IntroSection;
