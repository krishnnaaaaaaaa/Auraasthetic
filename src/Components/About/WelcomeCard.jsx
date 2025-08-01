
import React from 'react';

const WelcomeCard = () => {
  return (
    <section className="bg-[#C2EA66] py-8 px-2  md:px-16">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center sm:w-full ">
        
        {/* Images */}
        <div className="flex  sm:flex-row justify-center items-center relative gap-6 sm:px-10">
          {/* First Image */}
          <img
            src="https://framerusercontent.com/images/0QG2eemdKv0RN1rXzXDlBBpME.png?scale-down-to=1024"
            alt="Doctor with Patient"
            className="rounded-xl w-40 sm:w-40 md:w-60 lg:w-64 xl:w-72 object-cover shadow-lg
             max-h-[400px] z-10"
          />

          {/* Second Image */}
          <img
            src="https://framerusercontent.com/images/5WmJdglqGO8oJYIEmg8bi3llSzw.png?scale-down-to=1024"
            alt="Receptionist"
            className="rounded-xl w-36 sm:w-40 md:w-52 lg:w-60 object-cover shadow-lg max-h-[340px] z-20 -mt-2 sm:mt-0"
          />
        </div>

        {/* Text */}
        <div className=" md:text-left px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl
           font-bold mb-4 text-green-900 leading-snug">
            Welcome to Aura Aesthetics Cosmetology Clinic & Training Center (AACCTC)
          </h1>
          <p className="text-gray-800 text-sm sm:text-base mb-3 leading-relaxed">
            A premier beauty school dedicated to providing students with exceptional training and education in the field of cosmetology.
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
            Our mission is to equip our students with the knowledge, skills, and tools necessary to succeed in the beauty industry. We offer courses, including hair care and skin care, all taught by experienced doctors who are passionate about mentoring.
          </p>
          <button className="bg-[#233123] text-white font-semibold py-2 px-5 ml-14 rounded-full transition duration-300 hover:bg-green-900">
            Explore our Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeCard;
