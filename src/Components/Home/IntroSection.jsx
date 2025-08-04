
import React from "react";
import whoWeAreImage from '../../assets/young-woman-lying-cosmetologist-s-table-rejuvenation-procedure-cosmetologist-take-care-about-neck-face-skin-youthfull-wellness-hardware-face-cleaning-procedure.jpg';

const IntroSection = () => {
  return (
    <section className="bg-lime-300 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Image */}
        <div className="w-full md:w-[35%] rounded-2xl overflow-hidden shadow-xl">
          <img
            src={whoWeAreImage}
            alt="Professional skin treatment"
            className="w-full h-[280px] sm:h-[320px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-300"
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
