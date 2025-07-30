import { motion } from 'framer-motion';

const cards = [
  {
    title: "Our Mission",
    description:
      "To empower individuals by blending science-backed cosmetology with ethical, holistic care. We aim to boost confidence through safe, personalized treatments and education.",
  },
  {
    title: "Our Vision",
    description:
      "To be India’s most trusted doctor-led aesthetics brand, where beauty meets integrity. We envision a world where skincare is not vanity, but self-respect and empowerment.",
  },
  {
    title: "Future Goal",
    description:
      "To evolve as a trusted hub for advanced cosmetology and skill-based empowerment. Our focus is on innovation, training, and ethical care.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {cards.map((card, index) => (
          <div key={index} className="relative bg-white p-6 rounded-2xl">
            {/* Card Title */}
            <div
              className="inline-block px-5 py-2 mb-4 text-white 
                bg-[#233123] rounded-full text-base font-semibold"
            >
              {card.title}
            </div>

            {/* Card Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
              {card.description}
            </p>

            {/* Right Border Divider (only for 1st and 2nd cards) */}
            {index !== cards.length - 1 && (
              <div className="hidden md:block absolute right-[-20px] top-6
               bottom-6 w-[1px] bg-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
