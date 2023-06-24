'use client';
import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const feedbackData = [
  {
    id: 1,
    name: 'Gregory Janco',
    comment:"DigiLev created a fantastic website for our company. They understood our needs and delivered an outstanding product. We highly recommend them!"
    ,
  },
  {
    id: 2,
    name: 'Reouven Levi',
    comment: "I am impressed by the professionalism of DigiLev. Their expertise in web development is remarkable, and their customer service is top-notch. Thank you for a great experience!",
  },
  {
    id: 3,
    name: 'Or Baruch',
    comment: "Working with DigiLev was a breeze! They brought our vision to life with their exceptional web design skills. The team was responsive, creative, and delivered results beyond our expectations. Highly recommended!",
  },
];

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-gray-800 py-10">
      <div className="container mx-auto">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl text-gray-200 underline decoration-orange-500 font-bold mb-6 text-center">Feedback</h2>
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <AnimatePresence initial={false} custom={activeIndex}>
              <motion.div
                key={activeIndex}
                className="text-gray-700 font-bold mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
              >
                <p className='mx-8'>{feedbackData[activeIndex].comment}</p>
                <p className="text-blue-500 font-extrabold mt-4">{feedbackData[activeIndex].name}</p>
              </motion.div>
            </AnimatePresence>
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg focus:outline-none transition duration-300 hover:bg-gray-300"
              onClick={handlePrev}
            >
              <FiArrowLeft className="text-gray-600 w-6 h-6" />
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg focus:outline-none transition duration-300 hover:bg-gray-300"
              onClick={handleNext}
            >
              <FiArrowRight className="text-gray-600 w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;


