
import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import AccessCard from './AccessCard';

function Features() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-4 px-4 sm:px-6 md:px-10 py-8">
      <h1 className="text-center text-xl sm:text-2xl font-semibold mb-4">
        What Makes Us Different From Others?
      </h1>

      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-8`}>
        {/* Feature Cards container */}
        <div className={`flex flex-wrap gap-6 ${isMobile ? 'w-full' : 'w-[70%]'}`}>
          <FeatureCard
            Title="Career Counseling"
            Description="Expert counseling to help you choose the right path and grow confidently."
          />
          <FeatureCard
            Title="Certified Courses"
            Description="Industry-recognized programs designed for real-world cosmetology careers."
          />
          <FeatureCard
            Title="Expert Mentorship"
            Description="Learn from experienced, practicing professionals in the aesthetics field"
          />
          <FeatureCard
            Title="Hands-On Studio"
            Description="Train in a live cosmetology setup with real client practice."
          />
        </div>

        {/* Access Card */}
        <div className={`${isMobile ? 'w-full' : 'w-[30%]'}`}>
          <AccessCard />
        </div>
      </div>
    </div>
  );
}

export default Features;
