// components/Courses.js
import React from 'react';

const Courses = () => {
  const courses = [
    {
      title: "Mathematics",
      level: "All Levels",
      duration: "12 weeks",
      price: "$299",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Science",
      level: "Beginner to Advanced",
      duration: "10 weeks",
      price: "$279",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "English Language",
      level: "Intermediate",
      duration: "8 weeks",
      price: "$249",
      image: "https://images.unsplash.com/photo-1581093458799-eea1cbb2ef36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Computer Programming",
      level: "Beginner",
      duration: "14 weeks",
      price: "$349",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="courses" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Popular Courses</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Browse our most popular courses and find the perfect fit for your learning needs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{course.level}</span>
                  <span>{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">{course.price}</span>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition">Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-md font-medium hover:bg-indigo-600 hover:text-white transition">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;