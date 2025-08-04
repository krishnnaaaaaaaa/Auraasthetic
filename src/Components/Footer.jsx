import React from 'react';
import facebook from '../assets/facebookicon.svg';
import instagram from '../assets/instaicon.svg';
import gmail from "../assets/gmailicon.svg";
import telephone from "../assets/telephone.png";
import location from "../assets/location.png";
import logo from '../assets/logo.png';
import { motion } from "framer-motion";
function Footer() {
  const socialLinks = [
    { icon: facebook, url: 'https://www.facebook.com/profile.php?id=61550647280588&mibextid=ZbWKwL', alt: 'Facebook' },
    { icon: instagram, url: 'https://www.instagram.com/aura_edutech_drantapurkar?utm_source=qr&igsh=YzU1NGVlODEzOA==', alt: 'Instagram' }
  ];
  return (
    <div className="flex flex-wrap justify-between gap-8 px-8 py-12 bg-white">
      {/* Branding Section */}
      <div className="flex flex-col min-w-[200px] gap-2">
        <img src={logo} alt="AURA Logo" className="w-16 h-auto mb-2" />
        <h3 className="text-gray-600 font-medium text-base max-w-md">
          Stay up to date on the latest features and releases by joining our socials
        </h3>
        <div className="flex gap-3 mt-4">
          {socialLinks.map((social, idx) => (
            <a 
              key={idx} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#c2ea66] hover:bg-[#a8d147] transition-colors duration-200"
            >
              <img src={social.icon} alt={social.alt} className="w-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Page Links */}
      <div className="flex flex-col min-w-[200px] gap-2">
        <h1 className="text-lg font-semibold text-black">Pages</h1>
        <a href="/" className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">Home</a>
        <a href="/about" className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">About</a>
        <a href="/contact" className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">Contact</a>
        <a href="/courses" className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">Our Courses</a>
        <a href="/testimonial" className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">Testimonial</a>
      </div>

      {/* Contact Info */}
     
      <div className="flex flex-col min-w-[200px] gap-4">
      <h1 className="text-lg font-semibold text-black">Address</h1>

      {/* Gmail Row */}
      <div className="flex items-center text-gray-600 text-sm">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#c2ea66] overflow-hidden mr-2">
          <motion.img
            src={gmail}
            alt="gmail"
            className="w-4"
            animate={{ y: 0, opacity: 1 }}
            whileHover={{
              y: [0, -15, 15, 0],
              opacity: [1, 0, 0, 1],
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
        cosmetologydoc28@gmail.com
      </div>

      {/* Telephone Row */}
      <div className="flex items-center text-gray-600 text-sm">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#c2ea66] overflow-hidden mr-2">
          <motion.img
            src={telephone}
            alt="telephone"
            className="w-4"
            animate={{ y: 0, opacity: 1 }}
            whileHover={{
              y: [0, -15, 15, 0],
              opacity: [1, 0, 0, 1],
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
        +918830062071
      </div>

      {/* Location Row */}
      <div className="flex items-center text-gray-600 text-sm">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#c2ea66] overflow-hidden mr-2">
          <motion.img
            src={location}
            alt="location"
            className="w-4"
            animate={{ y: 0, opacity: 1 }}
            whileHover={{
              y: [0, -15, 15, 0],
              opacity: [1, 0, 0, 1],
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
        <div className="leading-relaxed">
          AURA AESTHETICS COSMETOLOGY CLINIC & TRAINING CENTER,<br />
          Agastya Tower, 102, Opp Shanti Nursing Home,<br />
          Paithan Road, Kanchan Wadi, Ch.Sambhajinagar, Maharashtra 431002
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
