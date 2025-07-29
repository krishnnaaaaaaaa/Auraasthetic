import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import AccessCard from './AccessCard';

function Features() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center' }}>What Make Us Different From Others ?</h1>

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '2rem',
        }}
      >
        {/* Feature Cards container */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            width: isMobile ? '100%' : '70%',
          }}
        >
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

        {/* Access card */}
        <div style={{ width: isMobile ? '100%' : '30%' }}>
          <AccessCard />
        </div>
      </div>
    </div>
  );
}

export default Features;
