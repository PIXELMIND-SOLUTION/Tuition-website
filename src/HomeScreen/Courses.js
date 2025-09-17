// components/Courses.js
import React from "react";

const Courses = () => {
  const courses = [
    {
      title: "Mathematics",
      level: "All Levels",
      duration: "12 weeks",
      price: "$299",
      color: "bg-pink-200 text-pink-900",
    },
    {
      title: "Science",
      level: "Beginner to Advanced",
      duration: "10 weeks",
      price: "$279",
      color: "bg-blue-200 text-blue-900",
    },
    {
      title: "English Language",
      level: "Intermediate",
      duration: "8 weeks",
      price: "$249",
      color: "bg-green-200 text-green-900",
    },
    {
      title: "Computer Programming",
      level: "Beginner",
      duration: "14 weeks",
      price: "$349",
      color: "bg-yellow-200 text-yellow-900",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6">
          Our Popular Courses
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Browse our most popular courses and find the perfect fit for your
          learning needs.
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative w-56 h-56 rounded-full flex flex-col items-center justify-center shadow-lg ${course.color} hover:scale-105 transform transition`}
            >
              <h3 className="text-lg font-bold">{course.title}</h3>
              <p className="text-sm opacity-80">{course.level}</p>
              <p className="text-sm opacity-80">{course.duration}</p>
              <span className="text-xl font-bold mt-2">{course.price}</span>
              <button className="mt-3 px-4 py-1 bg-white rounded-full text-sm font-medium shadow hover:bg-opacity-90 transition">
                Enroll
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-md font-medium hover:bg-indigo-600 hover:text-white transition">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
