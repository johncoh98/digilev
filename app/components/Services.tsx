'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div id='services' className=" bg-zinc-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center underline decoration-blue-500 text-gray-900">Our Services</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl lg:mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800 transform transition duration-300 hover:scale-105 hover:bg-blue-500"
          >
            <div className="absolute top-0 left-0 w-full h-full "></div>
            <div className="relative p-6">
              <h3 className="text-xl font-medium text-gray-50 mb-3">E-Commerce</h3>
              <p className="text-base text-gray-300 leading-relaxed">
              We create personalized, easy to manage and optimized e-commerce sites to increase your online sales.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800 transform transition duration-300 hover:scale-105 hover:bg-orange-500"
          >
            <div className="absolute top-0 left-0 w-full h-full"></div>
            <div className="relative p-6">
              <h3 className="text-xl font-medium text-gray-50 mb-3">Landing Page</h3>
              <p className="text-base text-gray-300 leading-relaxed">
              We design impactful landing pages that captivate your visitors and convert leads into customers.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800 transform transition duration-300 hover:scale-105 hover:bg-blue-600"
          >
            <div className="absolute top-0 left-0 w-full h-full"></div>
            <div className="relative p-6">
              <h3 className="text-xl font-medium text-gray-50 mb-3">Consulting</h3>
              <p className="text-base text-gray-300 leading-relaxed">
              Need expert advice? We offer consulting services to help you improve your online presence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
