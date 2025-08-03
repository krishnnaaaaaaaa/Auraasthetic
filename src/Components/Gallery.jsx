import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import carouselImage from '../assets/caleb-woods-292OcsAYBK8-unsplash.jpg';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Top row images (3 images)
  const topRowImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Beauty Treatment Session"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Group Training Session",
      isBig: true
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Practical Training"
    }
  ];

  // Bottom row images (5 images)
  const bottomRowImages = [
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Students Learning"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Skincare Training"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Professional Training"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Certificate Ceremony"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Advanced Training Session"
    }
  ];

  // Carousel images (20 images) - All using the same local image
  const carouselImages = Array(20).fill(carouselImage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  // Touch/Swipe functionality
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false); // Pause auto-play when user interacts
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
    
    // Resume auto-play after 3 seconds of no interaction
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 3000);
  };

  const handleManualNavigation = (action) => {
    setIsAutoPlaying(false);
    action();
    // Resume auto-play after 5 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
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
          className="relative rounded-2xl overflow-hidden"
        >
          <div 
            className="relative h-64 sm:h-80 md:h-96"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <img
              src={carouselImages[currentSlide]}
              alt={`Gallery Image ${currentSlide + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
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
            
            {/* Auto-play indicator */}
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1">
              {isAutoPlaying ? (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              ) : (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              )}
              <span className="text-white text-xs font-medium">
                {isAutoPlaying ? 'Auto' : 'Paused'}
              </span>
            </div>
            
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
      </div>
    </div>
  );
};

export default Gallery;
