
import React from 'react';
import trainingImage from '../../assets/makeupart.jpg'; // Adjust the path as necessary

function Institute() {
  return (
    <section className="bg-[#fcfcf5] px-4 sm:px-6 md:px-10 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left Text Content */}
        <div className="flex-1 w-full max-w-[100%] sm:max-w-[85%] md:max-w-none mx-auto">
         
  
  <h2 className="block w-full whitespace-nowrap overflow-x-auto bg-[#1b1f17] rounded-full
  text-white font-bold text-xl sm:text-2xl md:text-3xl 
  lg:text-4xl px-6 py-3 mb-6 text-center lg:text-left">
  Aura Cosmetology Training Institute
</h2>


          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
            At Aura, we believe quality education should be accessible to everyone. That’s why we offer 
            <span className="font-semibold text-gray-900"> flexible schedules </span> and 
            <span className="font-semibold text-gray-900"> affordable pricing </span> to support students from all backgrounds.
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
            Our <span className="font-semibold text-gray-900">state-of-the-art facility</span> features the latest tools and technology, providing a truly hands-on learning experience. Students practice in a 
            <span className="font-semibold text-gray-900"> fully equipped cosmetology studio</span>, working on real patients to build confidence and skill.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We foster a <span className="font-semibold text-gray-900">supportive, inclusive environment</span>, where every student receives the 
            <span className="font-semibold text-gray-900"> guidance and mentorship</span> they need to thrive.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-[90%] sm:max-w-[60%] md:max-w-none mx-auto">
          <img
            src={trainingImage}
            alt="Students practicing makeup techniques at Aura Cosmetology Training Institute"
            className="rounded-2xl shadow-lg w-screen h-auto object-cover max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Institute;
