// components/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-indigo-600">Tuitions</div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
            <a href="#courses" className="text-gray-700 hover:text-indigo-600 font-medium">Courses</a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600 font-medium">Pricing</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-indigo-600 font-medium">Login</button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition">Sign Up</button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
              <a href="#courses" className="text-gray-700 hover:text-indigo-600 font-medium">Courses</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 font-medium">Pricing</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
              <div className="flex flex-col space-y-2 pt-2">
                <button className="px-4 py-2 text-indigo-600 font-medium border border-indigo-600 rounded">Login</button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;