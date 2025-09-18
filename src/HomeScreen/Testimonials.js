import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      content:
        "My daughter's math grades improved dramatically after just a month of tutoring. The instructors are patient and knowledgeable.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      name: "Michael Chen",
      role: "Student",
      content:
        "The programming course was exactly what I needed to start my coding journey. The projects were challenging but fun!",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      name: "Emma Rodriguez",
      role: "Parent",
      content:
        "Flexible scheduling made it possible for my son to continue with his sports while getting the academic support he needed.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our students and parents about their transformative
            learning experience with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Gradient Glow Layer */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
              ></div>

              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform group-hover:-translate-y-2">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-6">
                  {/* Quote Text */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-2xl object-cover shadow-lg"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-2xl opacity-20`}
                      ></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-50 -z-10"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-pink-50 to-yellow-50 rounded-full opacity-40 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Dots */}
        <div className="absolute top-1/4 left-8 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-12 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default Testimonials;
