
// import React from 'react';

// const WelcomeCard = () => {
//   return (
//     <section className="bg-[#C2EA66] py-10 px-4 md:px-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Images */}
       
//        <div className="flex flex-col md:flex-row justify-center items-center md:items-start relative">
//   {/* First Image (Taller) */}
//   <img
//     src="https://framerusercontent.com/images/0QG2eemdKv0RN1rXzXDlBBpME.png?scale-down-to=1024"
//     alt="Doctor with Patient"
//     className="rounded-xl w-40 sm:w-52 md:w-60 lg:w-64 xl:w-72 object-cover shadow-lg max-h-[400px]"
//   />

//   {/* Second Image (Shorter, 30% less) */}
//   <img
//     src="https://framerusercontent.com/images/5WmJdglqGO8oJYIEmg8bi3llSzw.png?scale-down-to=1024"
//     alt="Receptionist"
//     className="rounded-xl w-32 sm:w-44 md:w-48 object-cover shadow-lg
//       absolute md:relative
//        md:top-1/2 left-20 md:left-4 lg:left-6 xl:left-8 flex align-middle
//       md:translate-y-1
//       max-h-[280px]"
//   />
// </div>

//         {/* Text */}
//         <div>
//           <h1 className="text-3xl md:text-4xl font-bold mb-4">
//             Welcome to Aura Aesthetics Cosmetology Clinic & Training Center (AACCTC)
//           </h1>
//           <p className="text-gray-800 mb-4">
//             A premier beauty school dedicated to providing students with exceptional training and education in the field of cosmetology.
//           </p>
//           <p className="text-gray-700 mb-6">
//             Our mission is to equip our students with the knowledge, skills, and tools necessary to succeed in the beauty industry. We offer courses, including hair care and skin care, all taught by experienced doctors who are passionate about mentoring.
//           </p>
//           <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-5 rounded-full transition duration-300">
//             Explore our Courses
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WelcomeCard;


import React from 'react';

const WelcomeCard = () => {
  return (
    <section className="bg-[#C2EA66] py-10 px-4 md:px-16 flex flex-wrap">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Images */}
        <div className="relative flex justify-center md:justify-start">
          {/* First Image */}
          <img
            src="https://framerusercontent.com/images/0QG2eemdKv0RN1rXzXDlBBpME.png?scale-down-to=1024"
            alt="Doctor with Patient"
            className="rounded-xl w-40 sm:w-52 md:w-60 lg:w-64 xl:w-72 object-cover shadow-lg max-h-[400px] z-10"
          />

          {/* Second Image - Overlapping */}
 
 <img
  src="https://framerusercontent.com/images/5WmJdglqGO8oJYIEmg8bi3llSzw.png?scale-down-to=1024"
  alt="Receptionist"
  className=" top-0.5 left-1/2 translate-x-6 translate-y-6 
  md:translate-x-10 md:translate-y-12 
  h-[320px]
  rounded-xl w-40 sm:w-32 md:w-52 lg:w-60 object-cover shadow-lg 
  z-20"
/>
        </div>

        {/* Text */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">
            Welcome to Aura Aesthetics Cosmetology Clinic & Training Center (AACCTC)
          </h1>
          <p className="text-gray-800 mb-4">
            A premier beauty school dedicated to providing students with exceptional training and education in the field of cosmetology.
          </p>
          <p className="text-gray-700 mb-6">
            Our mission is to equip our students with the knowledge, skills, and tools necessary to succeed in the beauty industry. We offer courses, including hair care and skin care, all taught by experienced doctors who are passionate about mentoring.
          </p>
          <button className="bg-[#233123] 
           text-white font-semibold py-2 px-5 rounded-full transition duration-300">
            Explore our Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeCard;