import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Faq from './Faq';
import HeroCard from './Home/HeroCard';

// Import all gallery images
import img1 from '../assets/WhatsApp-Image-2024-01-17-at-13.01.32 (1).jpeg';
import img2 from '../assets/WhatsApp-Image-2024-01-17-at-13.01.32.jpeg';
import img3 from '../assets/WhatsApp-Image-2024-01-17-at-13.04.08.jpeg';
import img4 from '../assets/WhatsApp-Image-2024-01-17-at-13.05.56.jpeg';
import img5 from '../assets/WhatsApp-Image-2024-01-17-at-13.05.57-1.jpeg';
import img6 from '../assets/WhatsApp-Image-2024-01-17-at-13.05.57.jpeg';
import img7 from '../assets/WhatsApp-Image-2024-01-17-at-13.05.58-1.jpeg';
import img8 from '../assets/WhatsApp-Image-2024-01-17-at-13.05.58-2.jpeg';
import img9 from '../assets/WhatsApp-Image-2024-01-17-at-13.05.58-1536x1152.jpeg';
import img10 from '../assets/WhatsApp-Image-2024-01-17-at-13.05.58.jpeg';
import img11 from '../assets/WhatsApp-Image-2024-01-17-at-13.10.33.jpeg';
import img12 from '../assets/WhatsApp-Image-2024-01-17-at-13.12.12-1.jpeg';
import img13 from '../assets/WhatsApp-Image-2024-01-17-at-13.12.12.jpeg';
import img14 from '../assets/WhatsApp-Image-2024-01-17-at-13.12.13-1.jpeg';
import img15 from '../assets/WhatsApp-Image-2024-01-17-at-13.12.13.jpeg';
import img16 from '../assets/WhatsApp-Image-2024-01-17-at-13.12.14.jpeg';
import img17 from '../assets/WhatsApp-Image-2024-01-17-at-13.12.17-1.jpeg';
import img18 from '../assets/WhatsApp-Image-2024-01-17-at-13.12.17-2.jpeg';
import img19 from '../assets/WhatsApp-Image-2024-01-17-at-13.12.17.jpeg';
import img20 from '../assets/WhatsApp-Image-2024-01-17-at-13.12.18.jpeg';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Top row images (3 images)
  const topRowImages = [
    {
      id: 1,
      src: img1,
      alt: "Beauty Training Session"
    },
    {
      id: 2,
      src: img2,
      alt: "Group Training Session",
      isBig: true
    },
    {
      id: 3,
      src: img3,
      alt: "Practical Training"
    }
  ];

  // Bottom row images (5 images)
  const bottomRowImages = [
    {
      id: 4,
      src: img4,
      alt: "Students Learning"
    },
    {
      id: 5,
      src: img5,
      alt: "Skincare Training"
    },
    {
      id: 6,
      src: img6,
      alt: "Professional Training"
    },
    {
      id: 7,
      src: img7,
      alt: "Certificate Ceremony"
    },
    {
      id: 8,
      src: img8,
      alt: "Advanced Training Session"
    }
  ];

  // Carousel images (all 20 images in rotation)
  const carouselImages = [
    img1, img2, img3, img4, img5, 
    img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15,
    img16, img17, img18, img19, img20
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };



  // Touch/Swipe functionality
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    

  };

  const handleManualNavigation = (action) => {
    action();
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
          Gallery<br />
          <span className="text-black">Our Training Moments</span>
        </motion.h1>
      </div>

      {/* Gallery Layout - Top Row (3 images with one big) */}
      <div className="mt-16 max-w-6xl mx-auto">
        {/* Top Row - 3 images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {topRowImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative overflow-hidden rounded-2xl ${
                image.isBig ? 'md:col-span-1 md:row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover ${
                  image.isBig 
                    ? 'h-64 sm:h-80 md:h-96' 
                    : 'h-48 sm:h-56 md:h-64'
                }`}
                style={{ aspectRatio: image.isBig ? '16/9' : '9/16' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - 5 images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {bottomRowImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
                style={{ aspectRatio: '9/16' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Carousel Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl sm:rounded-4xl overflow-hidden max-w-6xl mx-auto w-full px-2 sm:px-4"
        >
          <div 
            className="relative h-72 sm:h-96 md:h-[32rem] overflow-hidden rounded-2xl sm:rounded-3xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={carouselImages[currentSlide]}
              alt={`Gallery Image ${currentSlide + 1}`}
              className="w-full h-full object-cover transition-all duration-500 rounded-2xl sm:rounded-3xl"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={() => handleManualNavigation(prevSlide)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition-all duration-200 z-10"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => handleManualNavigation(nextSlide)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition-all duration-200 z-10"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualNavigation(() => setCurrentSlide(index))}
                  className={`w-2 h-2 rounded-full transition-all duration-200 hover:bg-white/80 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <Faq />
        </motion.div>

        {/* Hero Card Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24"
        >
          <HeroCard />
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
