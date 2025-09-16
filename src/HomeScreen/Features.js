// components/Features.js
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "📚",
      title: "Wide Range of Subjects",
      description: "From math and science to languages and arts, we cover all subjects."
    },
    {
      icon: "👨‍🏫",
      title: "Expert Tutors",
      description: "All our tutors are highly qualified and experienced educators."
    },
    {
      icon: "💻",
      title: "Interactive Classes",
      description: "Our virtual classroom makes learning engaging and effective."
    },
    {
      icon: "⏰",
      title: "Flexible Scheduling",
      description: "Learn at your own pace with flexible time slots."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;