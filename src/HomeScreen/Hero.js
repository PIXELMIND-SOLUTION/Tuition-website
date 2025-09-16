// components/Hero.js
import React from "react";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="bg-[#f9f6f3] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left content */}
        <div className="md:w-1/2 space-y-5 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-snug">
            Online tutoring that releases potential
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0">
            We can't stop you worrying about your child. But our expert tutors can help their grades 
            and confidence soar – and help you worry a little less.
          </p>

          {/* Search bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white shadow-md rounded-md overflow-hidden max-w-lg mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Search a subject"
              className="flex-grow px-4 py-3 text-gray-700 focus:outline-none text-base sm:text-lg"
            />
            <div className="flex items-center justify-between sm:justify-center">
              <FiSearch className="text-gray-500 mx-3 text-xl hidden sm:block" />
              <button className="bg-blue-400 hover:bg-blue-500 text-black font-semibold px-6 py-3 transition w-full sm:w-auto">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Right image with decorative shapes */}
        <div className="md:w-1/2 relative flex justify-center">
          {/* Image frame with attached shapes */}
          <div className="relative z-10 inline-block transform rotate-2">
            
            {/* Orange circle touching top-left */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 bg-orange-400 rounded-full opacity-90 z-0"></div>
            
            {/* Pink circle touching bottom-right */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-pink-300 rounded-full opacity-90 z-0"></div>
            
            <img
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Online Learning"
              className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 rounded-xl border-4 border-teal-400 shadow-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
