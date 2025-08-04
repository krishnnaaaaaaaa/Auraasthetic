import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../assets/WhatsApp-Video-2024-01-01-at-13.32.44.mp4';
import galleryVideo1 from '../assets/WhatsApp-Video-2024-01-12-at-10.38.41.mp4';
import galleryVideo2 from '../assets/WhatsApp-Video-2023-04-14-at-9.56.21-PM.mp4';
import drSwatiImage from '../assets/2e81d608-6a1e-4cdd-8725-795c66c88dcb-1.jpeg';
import drShwetaImage from '../assets/160b1cd6-c72e-414b-8f62-9fd6a691d733.jpeg';
import drShilpaImage from '../assets/WhatsApp-Image-2024-01-12-at-10.31.47.jpeg';
import drAshwiniImage from '../assets/WhatsApp-Image-2024-01-12-at-10.36.08.jpeg';
import HeroCard from './Home/HeroCard';

// Play and Pause SVG Icons
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
  </svg>
);

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
  </svg>
);

// Video Player Component
const VideoPlayer = ({ src, aspectRatio, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Start with sound on
  const [volume, setVolume] = useState(0.5);
  const videoRef = useRef(null);
  const volumeSliderRef = useRef(null);
  const [showVolume, setShowVolume] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      if (newVolume === 0) {
        setIsMuted(true);
        videoRef.current.muted = true;
      } else if (isMuted) {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  // Handle user interaction to play video
  const handleUserInteraction = () => {
    if (videoRef.current) {
      // Toggle play/pause on user interaction
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Set initial volume and video settings
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5; // Set default volume to 50%
      videoRef.current.muted = false; // Ensure not muted initially
      videoRef.current.playsInline = true; // For better mobile experience
    }
  }, []);

  return (
    <div 
      className={`relative group ${className}`} 
      style={aspectRatio}
      onClick={handleUserInteraction}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-2xl"
        loop
        muted={false}
        playsInline
        style={{ aspectRatio: '9/16' }}
        controls={false}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play/Pause Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
        className="absolute inset-0 m-auto w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      
      {/* Volume Controls */}
      <div className="absolute bottom-3 right-3 flex items-center space-x-2">
        {showVolume && (
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-white/50 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
            onClick={(e) => e.stopPropagation()}
          />
        )}
        <button
          onClick={toggleMute}
          className="w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          onMouseEnter={() => setShowVolume(true)}
          onMouseLeave={() => setShowVolume(false)}
        >
          {isMuted || volume === 0 ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
              <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

const Testimonial = () => {
  // Testimonial data

  const testimonials = [
    {
      id: 1,
      name: "Dr. Swati Gadhe",
      text: "The cosmetology procedures taught at AURA AESTHETICS are really easy to understand. The institute is equipped with modern equipments which make learning easy. I am very glad that I enrolled myself in this Institute.",
      rating: 5,
      image: drSwatiImage
    },
    {
      id: 2,
      name: "Dr. Shweta Dhumal",
      text: "I had decided to learn cosmetology in my PG studies By joining Aura aesthetics my dream came true, I came to know advancements in cosmetology and tricology. Thanks to Aura Aesthetics and team.",
      rating: 5,
      image: drShwetaImage
    },
    {
      id: 3,
      name: "Dr. Shilpa",
      text: "It was great experience to learn at Aura Aesthetics. The most important thing I like is proper hands on practice on patients. Thanks Aura and team.",
      rating: 5,
      image: drShilpaImage
    },
    {
      id: 4,
      name: "Dr. Ashwini Ingale",
      text: "This Course was very interactive & Knowledgeble. Nice presentation style and hands on. Thank you Sonal mam for valuable sessions like this.",
      rating: 5,
      image: drAshwiniImage
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

      {/* Hero Video Section - 9:16 Aspect Ratio */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mt-12 mb-16 mx-auto max-w-5xl px-4"
      >
        <div className="w-full relative group" style={{ aspectRatio: '16/9' }}>
          <VideoPlayer 
            src={heroVideo}
            aspectRatio={{ width: '100%', height: '100%' }}
            className="w-full h-full rounded-2xl shadow-xl overflow-hidden"
          />
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-lg p-2 sm:p-3">
            <span className="text-white font-semibold text-xs sm:text-sm md:text-base">Join Now</span>
          </div>
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
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 bg-gray-200 flex-shrink-0 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{testimonial.name}</h4>
                    <div className="flex">{renderStars(testimonial.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Video Gallery - Side by Side Videos */}
          <div className="w-full max-w-3xl mx-auto px-4 mt-12">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {/* First Video (9:16) */}
              <motion.div 
                className="w-full max-w-[220px] md:max-w-[240px]"
                style={{ aspectRatio: '9/16' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <VideoPlayer 
                  src={galleryVideo1}
                  aspectRatio={{ width: '100%', height: '100%' }}
                  className="w-full h-full hover:scale-[1.02] transition-all duration-300 rounded-[20px] shadow-xl overflow-hidden"
                />
              </motion.div>
              
              {/* Second Video (9:16) */}
              <motion.div 
                className="w-full max-w-[220px] md:max-w-[240px]"
                style={{ aspectRatio: '9/16' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <VideoPlayer 
                  src={galleryVideo2}
                  aspectRatio={{ width: '100%', height: '100%' }}
                  className="w-full h-full hover:scale-[1.02] transition-all duration-300 rounded-[20px] shadow-xl overflow-hidden"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Card Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16"
      >
        <HeroCard />
      </motion.div>
    </div>
  );
};

export default Testimonial;
