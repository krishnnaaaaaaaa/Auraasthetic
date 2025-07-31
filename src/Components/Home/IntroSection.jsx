
import React from "react";

const IntroSection = () => {
  return (
    <section className="bg-lime-300 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Image */}
        <div className="w-full md:w-2/5 rounded-xl overflow-hidden shadow-xl">
          <img
            src="https://framerusercontent.com/images/QdVYI8aTz18V1r1rjwLrdF7occ.jpeg"
            alt="Makeup artist"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-3/5 text-black">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center md:text-left">
            <span className="bg-white px-6 sm:px-10 md:px-12 py-2 rounded-full inline-block shadow-md">
              Who We Are?
            </span>
          </h2>
          <p className="text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed font-medium text-justify sm:text-left">
            Welcome to Aura Aesthetics Cosmetology Clinic & Training Center (AACCTC), a premier aesthetic school dedicated to providing students with exceptional training and education in the field of cosmetology.
          </p>
          <p className="text-sm sm:text-base leading-relaxed font-medium text-justify sm:text-left">
            Our mission is to empower aspiring beauty professionals with the skills, knowledge, and confidence needed to excel in their careers. We offer comprehensive courses in makeup artistry, skincare, hair styling, and more, all taught by industry experts in a supportive and creative environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
