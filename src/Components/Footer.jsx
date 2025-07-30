import React from 'react';
import facebook from '../assets/facebookicon.svg';
import instagram from '../assets/instaicon.svg';
import twitter from '../assets/xicon.svg';
import youtube from '../assets/youtubeicon.svg';
import tiktok from '../assets/tiktok.svg';
import gmail from "../assets/gmailicon.svg";
import telephone from "../assets/telephone.png";
import location from "../assets/location.png";

function Footer() {
  return (
    <div className="flex flex-wrap justify-between gap-8 px-8 py-12 bg-white">
      {/* Branding Section */}
      <div className="flex flex-col min-w-[200px] gap-2">
        <h2 className="text-2xl font-bold text-black">AURA</h2>
        <h3 className="text-gray-600 font-medium text-base max-w-md">
          Stay up to date on the latest features and releases by joining our socials
        </h3>
        <div className="flex gap-3 mt-4">
          {[twitter, instagram, facebook, youtube, tiktok].map((icon, idx) => (
            <div key={idx} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#c2ea66]">
              <img src={icon} alt="icon" className="w-4" />
            </div>
          ))}
        </div>
      </div>

      {/* Page Links */}
      <div className="flex flex-col min-w-[200px] gap-2">
        <h1 className="text-lg font-semibold text-black">Pages</h1>
        <div className="text-sm text-gray-600">Home</div>
        <div className="text-sm text-gray-600">About</div>
        <div className="text-sm text-gray-600">Contact</div>
        <div className="text-sm text-gray-600">FAQs</div>
        <div className="text-sm text-gray-600">Error 404</div>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col min-w-[200px] gap-4">
        <h1 className="text-lg font-semibold text-black">Address</h1>
        <div className="flex items-center text-gray-600 text-sm">
          <img src={gmail} alt="gmail" className="w-5 mr-2" />
          testing@gmail.com
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <img src={telephone} alt="telephone" className="w-5 mr-2" />
          +1234567890
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <img src={location} alt="location" className="w-5 mr-2" />
          Amsterdam, NL
        </div>
      </div>
    </div>
  );
}

export default Footer;
