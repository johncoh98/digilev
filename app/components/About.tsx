'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div id='about' className=" bg-zinc-900 py-16 px-4 sm:px-6 lg:px-8 id='about'">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl my-4 font-extrabold text-center underline decoration-blue-500 text-gray-50">Why choosing DigiLev ?</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl lg:mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-lg shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:bg-blue-500"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black "></div>
            <div className="relative p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Service and Quality</h3>
              <p className="text-base text-gray-300 leading-relaxed">
              DigiLev is an experienced web agency offering quality services at affordable prices. We work closely with our clients to create websites that meet their needs and exceed their expectations.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-lg shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:bg-orange-500"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
            <div className="relative p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Exceptional Experience</h3>
              <p className="text-base text-gray-300 leading-relaxed">
              We focus on user experience when building websites. We ensure that your site is easy to navigate, aesthetically appealing and provides a smooth experience for your visitors.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative overflow-hidden rounded-lg shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:bg-blue-600"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
            <div className="relative p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Boost your business online</h3>
              <p className="text-base text-gray-300 leading-relaxed">
              An online presence is essential for the success of any business. With our website creation solutions, you can boost your online visibility, attract new customers and increase your sales.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
