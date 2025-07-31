import React from "react";



import introImage from "../../assets/makeupart.jpg";


const IntroSection = () => {
  return (
    <section className="bg-lime-300 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image - Moved to left side */}
        <div className="w-full md:w-2/5 rounded-xl overflow-hidden shadow-xl">
          <img
            src={introImage}
            alt="Makeup artist"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Text - Moved to right side */}
        <div className="w-full md:w-3/5 text-black text-left">
          <h2 className="text-3xl font-bold mb-6 text-left">
            <span className="bg-white px-12 py-2 rounded-full inline-block shadow-md">
              Who We Are ?
            </span>
          </h2>
          <p className="text-md mb-4 leading-relaxed font-medium">
            Welcome to Aura Aesthetics Cosmetology Clinic & Training Center (AACCTC), a premier aesthetic school dedicated to providing students with exceptional training and education in the field of cosmetology.
          </p>
          <p className="text-md leading-relaxed font-medium">
            Our mission is to empower aspiring beauty professionals with the skills, knowledge, and confidence needed to excel in their careers. We offer comprehensive courses in makeup artistry, skincare, hair styling, and more, all taught by industry experts in a supportive and creative environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
