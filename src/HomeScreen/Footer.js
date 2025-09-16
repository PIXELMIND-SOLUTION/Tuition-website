// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EduMentor</h3>
            <p className="text-gray-400">Quality education from the comfort of your home.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white">Courses</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Subjects</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Mathematics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">English</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Programming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Test Prep</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2023 EduMentor. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;