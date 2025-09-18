import React from "react";

const Courses = () => {
  const courses = [
    {
      title: "Mathematics",
      level: "All Levels",
      duration: "12 weeks",
      price: "$299",
      stickyColor: "bg-yellow-200",
      textColor: "text-gray-800",
      rotation: "rotate-3",
      hoverRotation: "hover:rotate-1"
    },
    {
      title: "Science",
      level: "Beginner to Advanced", 
      duration: "10 weeks",
      price: "$279",
      stickyColor: "bg-blue-200",
      textColor: "text-blue-900",
      rotation: "-rotate-2",
      hoverRotation: "hover:-rotate-1"
    },
    {
      title: "English Language",
      level: "Intermediate",
      duration: "8 weeks", 
      price: "$249",
      stickyColor: "bg-green-200",
      textColor: "text-green-900",
      rotation: "rotate-1",
      hoverRotation: "hover:rotate-2"
    },
    {
      title: "Computer Programming",
      level: "Beginner",
      duration: "14 weeks",
      price: "$349",
      stickyColor: "bg-pink-200",
      textColor: "text-pink-900",
      rotation: "-rotate-3",
      hoverRotation: "hover:-rotate-2"
    },
  ];

  return (
    <section id="courses" className="py-20 relative overflow-hidden bg-[#f0f8ff]">
      {/* Cork board texture background */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: `radial-gradient(circle at 25% 25%, #8B4513 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #A0522D 1.5px, transparent 1.5px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 font-serif">
            Our Popular Courses
          </h2>
          <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto text-lg">
            Browse our most popular courses and find the perfect fit for your learning needs.
          </p>
        </div>

        {/* Sticky Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`
                relative group cursor-pointer
                ${course.rotation} ${course.hoverRotation}
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:scale-105
              `}
              style={{
                marginTop: `${10 + (index % 2) * 20}px`,
                animation: `gentle-float-${index + 1} 6s ease-in-out infinite alternate`
              }}
            >
              {/* Push Pin */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg border-2 border-red-300">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-red-200 rounded-full opacity-60"></div>
                </div>
                <div className="absolute top-2 left-1/2 transform -translate-x-0.5 w-1 h-3 bg-gray-400 shadow-sm"></div>
              </div>

              {/* Sticky Note */}
              <div className={`
                ${course.stickyColor} ${course.textColor}
                w-64 h-64 p-6 relative
                shadow-lg transform transition-all duration-300
                group-hover:shadow-2xl
              `}
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)',
                filter: 'drop-shadow(4px 6px 12px rgba(0,0,0,0.15))',
                backgroundImage: `
                  repeating-linear-gradient(
                    transparent,
                    transparent 19px,
                    rgba(0,0,0,0.1) 19px,
                    rgba(0,0,0,0.1) 20px
                  )
                `,
              }}>
                
                {/* Folded Corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-black bg-opacity-10 transform"
                     style={{ clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)' }}>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between pt-4">
                  {/* Course Title */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3 font-serif leading-tight">
                      {course.title}
                    </h3>
                  </div>

                  {/* Course Details */}
                  <div className="space-y-3 text-center font-mono text-sm">
                    <div className="bg-white bg-opacity-40 rounded px-2 py-1">
                      📚 {course.level}
                    </div>
                    <div className="bg-white bg-opacity-40 rounded px-2 py-1">
                      ⏰ {course.duration}
                    </div>
                  </div>

                  {/* Price and Button */}
                  <div className="text-center space-y-3">
                    <div className="text-2xl font-bold">
                      {course.price}
                    </div>
                    <button className="
                      bg-white bg-opacity-80 hover:bg-opacity-100
                      px-4 py-2 rounded-full text-sm font-semibold
                      shadow-md hover:shadow-lg
                      transform hover:scale-105 transition-all duration-200
                      border border-black border-opacity-10
                    ">
                      Enroll Now
                    </button>
                  </div>
                </div>

                {/* Tape Effect */}
                <div className="absolute top-8 -left-2 w-8 h-6 bg-yellow-100 opacity-80 transform -rotate-12 shadow-md border border-yellow-200">
                  <div className="absolute inset-1 border border-yellow-300 opacity-50"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block transform hover:scale-105 transition-all duration-300">
            <button className="
              px-8 py-4 bg-white border-3 border-indigo-600 
              text-indigo-600 rounded-lg font-semibold text-lg
              shadow-lg hover:shadow-xl
              hover:bg-indigo-600 hover:text-white 
              transform hover:-translate-y-1 transition-all duration-300
              relative overflow-hidden
            ">
              <span className="relative z-10">View All Courses</span>
              <div className="absolute inset-0 bg-indigo-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gentle-float-1 {
          0%, 100% { transform: rotate(3deg) translateY(0px); }
          50% { transform: rotate(3deg) translateY(-5px); }
        }
        @keyframes gentle-float-2 {
          0%, 100% { transform: rotate(-2deg) translateY(0px); }
          50% { transform: rotate(-2deg) translateY(-3px); }
        }
        @keyframes gentle-float-3 {
          0%, 100% { transform: rotate(1deg) translateY(0px); }
          50% { transform: rotate(1deg) translateY(-4px); }
        }
        @keyframes gentle-float-4 {
          0%, 100% { transform: rotate(-3deg) translateY(0px); }
          50% { transform: rotate(-3deg) translateY(-6px); }
        }
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </section>
  );
};

export default Courses;