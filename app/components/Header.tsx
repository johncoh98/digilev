'use client';
import React from "react";
import Navbar from "./Navbar";
import { FiArrowDownCircle } from "react-icons/fi";
import { motion } from "framer-motion";


const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen">
      <Navbar />
      <div className="relative overflow-hidden bg-hero py-16 px-4 sm:px-6 lg:px-8 h-screen md:flex">
        <div className="w-7xl md:w-1/2 mx-auto">
          <div className="lg:text-center">
            <h1 className="text-4xl mx-4 md:mx-0 tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Welcome to</span>{" "}
              <br className="hidden md:block" />
              <span className="block text-blue-500 font-mono xl:inline">DIGILEV</span>
            </h1>
            <p className="mt-3 font-bold max-w-md mx-auto text-base text-orange-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We create modern and <br /> functional websites to meet
              to your business needs.
            </p>
            <div className="mt-40 ml-8 sm:flex sm:justify-center lg:justify-start">
              <button onClick={scrollToServices} className="rounded-md shadow">
                <a
                  href="#services"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  See our services
                </a>
              </button>
              <button onClick={scrollToContact}  className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-400 hover:bg-orange-100 hover:text-orange-400 md:py-4 md:text-lg md:px-10"
                >
                  Contact us
                </a>
              </button>
            </div>
          </div>
          
          <motion.div
            className="relative flex justify-center lg:absolute lg:top-0 lg:right-0 mt-[30%] mr-[90%]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="animate-blob w-96 h-96 rounded-full bg-blue-400 absolute top-0 right-0">
              <button onClick={scrollToAbout} className="ml-56 mt-16 animate-bounce">
              <FiArrowDownCircle
              size={100}
              color="white"
            />
            </button>
            
            </div>
          </motion.div>
          
        </div>
        <div className="w-1/2">

        </div>
      </div>
    </div>
  );
};

export default Hero;
