import React from 'react';
import { motion } from 'framer-motion';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Collins",
      text: "The courses are incredibly taught at Aura Aesthetic. I learned so much and understand. The institute is equipped with modern equipment which made learning easy. I am so glad that I enrolled myself in Aura Aesthetic.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      id: 2,
      name: "Princess Dhawan",
      text: "I had decided to learn treatment here in my spare time. The course has been amazing and the staff is very supportive and understanding. I can't be more thankful to Aura Aesthetic and would recommend this to everyone.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      id: 3,
      name: "Dr Riya",
      text: "I am extremely impressed with Aura Aesthetic. The hands-on experience and expert hands on practicing on patients. The staff is very...",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      id: 4,
      name: "Dr Anmeet Vipasha",
      text: "The Course was very informative & knowledgeable.Nice presentation style also. The practical sessions were very good and would be awesome into this field.",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className="text-orange-400 text-sm sm:text-base md:text-lg">
        {index < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans px-4 sm:px-6 pb-10 pt-24 relative overflow-hidden">
      {/* Header Section - Similar to About Page */}
      <div className="text-center mt-7">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug z-20"
        >
          Testimonials<br />
          <span className="text-black">What Our Students Say About Us</span>
        </motion.h1>

      </div>

      {/* Small Ocean Background Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mt-12 mb-16 mx-auto max-w-4xl"
      >
        <img
          src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Ocean Background"
          className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-lg p-2 sm:p-3">
          <span className="text-white font-semibold text-xs sm:text-sm md:text-base">Join 5,000+</span>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4 px-2">
              What Our Students Say About Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 bg-gray-200 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{testimonial.name}</h4>
                    <div className="flex">{renderStars(testimonial.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Training Session"
                className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students Learning"
                className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Testimonial;
