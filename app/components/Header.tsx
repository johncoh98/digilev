"use client";
import React from "react";
import Navbar from "./Navbar";
import { FiArrowDownCircle } from "react-icons/fi";

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
      <div className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-hero bg-cover bg-opacity-50 md:flex">
        <div className=" items-center ">
          <div className="lg:text-center ">
            <h1 className="text-4xl mx-4 md:mx-0 tracking-tight font-extrabold text-gray-800  sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Welcome to</span>{" "}
              <br className="hidden md:block" />
              <span className="block text-blue-500 font-mono xl:inline">
                DIGILEV
              </span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-base text-gray-600  font-bold sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
              We are a team of passionate web developers <br /> and designers. <br /> Our goal is to create stunning and <br /> user-friendly websites that help <br /> businesses succeed online.
            </p>
            <div className="mt-8">
              <button onClick={scrollToAbout} className="rounded-md shadow mr-4">
                <a
                  href="#about"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </button>
              <button onClick={scrollToContact} className="rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-400 hover:bg-orange-100 hover:text-orange-400 md:py-4 md:text-lg md:px-10"
                >
                  Contact Us
                </a>
              </button>
            </div>
            <button onClick={scrollToAbout} className="mt-12 animate-bounce">
              <FiArrowDownCircle size={100} color="blue" />
            </button>
          </div>
        </div>
      </div>
      </div>
  );

};

export default Hero;
