
import React, { useState } from 'react';

const faqData = [
  {
    question: "What is FitFlex and how does it work?",
    answer: "FitFlex is a structured fitness platform offering personalized workout plans. You choose your goal and we guide you daily!"
  },
  {
    question: "Is FitFlex free to use?",
    answer: "Yes! FitFlex is completely free for users to follow fitness routines and track their progress."
  },
  {
    question: "Do I need any equipment to follow the exercises?",
    answer: "Not necessarily. Most workouts are bodyweight-based. Some advanced plans may include dumbbells or resistance bands."
  },
  {
    question: "Can I use FitFlex on mobile devices?",
    answer: "Absolutely! FitFlex is mobile-friendly and can be accessed via any browser on your phone or tablet."
  },
  {
    question: "How do I reset my workout progress?",
    answer: "Go to your profile settings and click 'Reset Progress' to start your fitness journey anew."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        .faq-container {
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          font-family: Arial, sans-serif;
      
        }

        .faq-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 40px;
          color: black;
        }

        .faq-item {
          border-bottom: 1px solid #ccc;
          border-radius: 10px;
          margin-bottom: 15px;
          overflow: hidden;
       
          
        }

     

        .faq-question {
       
          padding: 18px 24px;
          font-size: 1.3rem;
          font-weight: 600;
          color: black;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-answer {
          padding: 16px 24px;
       font-weight: 400;
          font-size: 1.1rem;
          color: #555;

           display: flex;
          justify-content: space-between;
          align-items: flex-start;
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .plus-minus {
          font-size: 1.5rem;
          color: #666;
        }
      `}</style>

      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              <span className="plus-minus">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;

