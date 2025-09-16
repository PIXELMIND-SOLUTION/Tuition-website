// components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
              alt="Our Team" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">About EduMentor</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2015, EduMentor started with a simple mission: to make quality education accessible to everyone, everywhere.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experienced educators and technologists have created a learning platform that combines the best of traditional teaching with modern technology.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-2xl font-bold text-indigo-600">5000+</h4>
                <p className="text-gray-600">Students Taught</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-indigo-600">200+</h4>
                <p className="text-gray-600">Expert Tutors</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-indigo-600">95%</h4>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-indigo-600">15+</h4>
                <p className="text-gray-600">Subjects Covered</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;