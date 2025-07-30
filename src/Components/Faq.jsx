
import React, { useState } from 'react';
import rightarrow from '../assets/right-arrow.png'; 
import downarrow from '../assets/down-arrow.png';    

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
    answer: "Our courses are open to beginners and professionals looking to enhance their skills in the field of aesthetics and cosmetology.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl w-[90%] mx-auto py-10 px-4 sm:px-6 font-sans">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-black">
        Answers to your questions
      </h2>

      {faqData.map((faq, index) => (
        <div
          key={index}
          className="mb-4 border border-gray-300 rounded-xl overflow-hidden"
        >
          <div
            className="cursor-pointer flex justify-between items-center text-black font-semibold text-lg sm:text-xl px-4 py-4"
            onClick={() => toggleAnswer(index)}
          >
            <span>{faq.question}</span>
            <img
              src={openIndex === index ? downarrow : rightarrow}
              alt="arrow"
              className="w-6 h-6"
            />
          </div>

          {openIndex === index && (
            <div className="px-4 py-3 text-gray-700 text-base animate-fadeIn">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
