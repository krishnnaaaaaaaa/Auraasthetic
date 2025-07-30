
import React ,{useEffect,useState} from 'react';
import mainImage from '../assets/frontimg.jpeg';      // Foreground image
import backgroundImage from '../assets/backimg.jpg'; // Background tilted image
import { motion } from "framer-motion";


const HeroSection = () => {

   const [years, setYears] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    let yearsInterval = setInterval(() => {
      setYears(prev => {
        if (prev >= 11) {
          clearInterval(yearsInterval);
          return 11;
        }
        return prev + 1;
      });
    }, 100); // 1 step every 100ms → total ~1.1s

    let hoursInterval = setInterval(() => {
      setHours(prev => {
        if (prev >= 2000) {
          clearInterval(hoursInterval);
          return 2000;
        }
        return prev + 40;
      });
    }, 10); // 40 per 10ms → total ~0.5s

    return () => {
      clearInterval(yearsInterval);
      clearInterval(hoursInterval);
    };
  }, []);
  return (
    <section className="flex flex-col 
    md:flex-row
 
     items-center px-16 py-20 gap-x-36
    bg-[#FAFFF2] relative overflow-hidden">
      
      {/* Left Text Content */}
      <div className="max-w-xl z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-black">
          AURA AESTHETICS <br />
          COSMETOLOGY CLINIC & <br />
          TRAINING CENTER
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Experience leading healthcare services with expert treatments tailored to your work needs
        </p>

        {/* Stats */}
        <div className="flex space-x-16 text-left">
          <div>
            <p className="text-3xl font-bold text-black">{years}+</p>
            <p className="text-gray-500 text-sm">Years of Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-black">{hours}+</p>
            <p className="text-gray-500 text-sm">More than Hours of Teaching</p>
          </div>
        </div>
      </div>

      {/* Right Image Stack */}
   


 <div className="relative mt-12 md:mt-0 w-[320px] md:w-[350px] lg:w-[420px] xl:w-[480px] h-[450px]">
      {/* Background Image */}
      <motion.img
        src={backgroundImage}
        alt="Tilted Background"
        initial={{ rotate: 60, opacity: 0 }}
        animate={{ rotate: -6, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute top-5 left-5 w-full h-full object-cover rounded-[2rem] shadow-xl rotate-[-6deg] z-0"
      />

      {/* Foreground Image */}
      <motion.img
        src={mainImage}
        alt="Main Display"
        initial={{  opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl z-10"
      />
    </div>
    </section>
  );
};

export default HeroSection;
