import React, { useState, useEffect } from 'react';
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

  const features = [
    {
      title: "Career Counseling",
      description: "Expert counseling to help you choose the right path and grow confidently."
    },
    {
      title: "Certified Courses",
      description: "Industry-recognized programs designed for real-world cosmetology careers."
    },
    {
      title: "Expert Mentorship",
      description: "Learn from experienced, practicing professionals in the aesthetics field"
    },
    {
      title: "Hands-On Studio",
      description: "Train in a live cosmetology setup with real client practice."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Makes Us Different From Others?
          </h2>
          <div className="w-20 h-1 bg-lime-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:col-span-2">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                Title={feature.title}
                Description={feature.description}
              />
            ))}
          </div>

          {/* Access Card */}
          <div className="lg:col-span-1">
            <AccessCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
