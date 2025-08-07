
import React, { useState } from 'react';

const faqData = [
  {
    question: "Are all treatments doctor-supervised?",
    answer: "Yes, every treatment at Aura Aesthetics is conducted under the supervision of qualified doctors to ensure safety and optimal results.",
  },
  {
    question: "Is there any downtime after cosmetic procedures?",
    answer: "Most of our treatments are non-surgical and involve minimal to no downtime, so you can return to your routine quickly.",
  },
  {
    question: "Do you offer personalized treatment plans?",
    answer: "Absolutely! We customize each treatment based on your skin type, concerns, and goals after a detailed consultation and skin analysis.",
  },
  {
    question: "Who can join the cosmetology courses?",
    answer: "MBBS, BDS, BAMS, & BHMS graduates etc.",
  },
  {
    question: "Will I get hands-on training during the course?",
    answer: "For every procedure complete hands-on training is given.",
  },
  {
    question: "Do you provide post-course support or guidance?",
    answer: "Yes, we offer 6 months of extended access and mentorship to support your journey even after the course ends.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '60px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '40px'
      }}>
        Answers to your questions
      </h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {faqData.map((faq, index) => (
          <div 
            key={index}
            style={{
              borderBottom: '1px solid #E5E7EB',
              paddingBottom: '16px'
            }}
          >
            <div
              onClick={() => toggleAnswer(index)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '12px 0'
              }}
            >
              <h3 style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: '600',
                color: '#111827'
              }}>
                {faq.question}
              </h3>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#C2EA66',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
                flexShrink: 0,
                marginLeft: '16px'
              }}>
                {openIndex === index ? '−' : '+'}
              </div>
            </div>

            {openIndex === index && (
              <p style={{
                margin: '8px 0 0 0',
                fontSize: '14px',
                color: '#6B7280',
                lineHeight: '1.6',
                paddingRight: '40px'
              }}>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
