import React from "react";
import { Book, Users, Monitor, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Book,
      title: "Wide Range of Subjects",
      description: "From math and science to languages and arts, we cover all subjects with comprehensive curriculum.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      rotation: "rotate-2",
      hoverRotation: "hover:rotate-0"
    },
    {
      icon: Users,
      title: "Expert Tutors",
      description: "All our tutors are highly qualified and experienced educators with proven track records.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      rotation: "-rotate-1",
      hoverRotation: "hover:rotate-1"
    },
    {
      icon: Monitor,
      title: "Interactive Classes",
      description: "Our virtual classroom makes learning engaging and effective with cutting-edge technology.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      rotation: "rotate-3",
      hoverRotation: "hover:-rotate-1"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Learn at your own pace with flexible time slots that fit your busy lifestyle.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      rotation: "-rotate-2",
      hoverRotation: "hover:rotate-2"
    },
  ];

  return (
    <section className="py-20 overflow-hidden">
      {/* Hanging Wire/String */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">
            Why Choose Our Platform
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experience education reimagined with our comprehensive learning ecosystem
          </p>
        </div>

        {/* Hanging Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="relative group"
                style={{
                  marginTop: `${20 + (index % 2) * 30}px`,
                  animation: `gentle-sway-${index + 1} 4s ease-in-out infinite alternate`
                }}
              >
                {/* Hanging String */}
                <div className="absolute top-0 left-1/2 transform -translate-x-0.5 w-0.5 bg-gray-300 h-8 shadow-sm"></div>

                {/* Paper Clip */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-sm shadow-md border border-gray-400">
                  <div className="absolute top-1 left-0.5 w-3 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="absolute bottom-1 left-0.5 w-3 h-1 bg-gray-200 rounded-sm"></div>
                </div>

                {/* Paper Sheet */}
                <div className={`
                  relative bg-white p-8 rounded-sm shadow-2xl border border-gray-200 
                  ${feature.rotation} ${feature.hoverRotation}
                  transition-all duration-500 ease-out
                  group-hover:shadow-3xl group-hover:-translate-y-2
                  before:absolute before:inset-0 before:bg-gradient-to-br before:from-white before:to-gray-50 before:rounded-sm before:-z-10
                `}
                  style={{
                    filter: 'drop-shadow(8px 12px 20px rgba(0,0,0,0.15))',
                    backgroundImage: `
                    linear-gradient(to right, #f8fafc 0px, #f1f5f9 1px, transparent 1px),
                    repeating-linear-gradient(transparent, transparent 24px, #e2e8f0 24px, #e2e8f0 25px)
                  `,
                    backgroundSize: '40px 25px',
                    paddingLeft: '3rem'
                  }}
                >
                  {/* Red Margin Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-red-300 opacity-60"></div>

                  {/* Paper Holes */}
                  <div className="absolute left-4 top-8 w-1.5 h-1.5 bg-gray-100 rounded-full border border-gray-200"></div>
                  <div className="absolute left-4 top-16 w-1.5 h-1.5 bg-gray-100 rounded-full border border-gray-200"></div>
                  <div className="absolute left-4 top-24 w-1.5 h-1.5 bg-gray-100 rounded-full border border-gray-200"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Highlight */}
                    <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} mb-6 ${feature.color} transform group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Title - handwritten style */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight font-serif">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed text-sm font-mono">
                      {feature.description}
                    </p>
                  </div>

                  {/* Paper Corner Fold */}
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-gray-100 border-l border-t border-gray-200 transform rotate-180 shadow-inner"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-20 relative">
          <div className="inline-block bg-[#f0f8ff] border border-yellow-200 px-6 py-3 rounded transform -rotate-1 shadow-lg">
            <p className="text-gray-700 font-handwriting text-lg">
              ✨ Trusted by thousands of students worldwide
            </p>
          </div>
        </div>

      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gentle-sway-1 {
          0%, 100% { transform: rotate(2deg) translateX(0px); }
          50% { transform: rotate(2deg) translateX(2px); }
        }
        @keyframes gentle-sway-2 {
          0%, 100% { transform: rotate(-1deg) translateX(0px); }
          50% { transform: rotate(-1deg) translateX(-1px); }
        }
        @keyframes gentle-sway-3 {
          0%, 100% { transform: rotate(3deg) translateX(0px); }
          50% { transform: rotate(3deg) translateX(1px); }
        }
        @keyframes gentle-sway-4 {
          0%, 100% { transform: rotate(-2deg) translateX(0px); }
          50% { transform: rotate(-2deg) translateX(-2px); }
        }
        .font-handwriting {
          font-family: 'Kalam', cursive;
        }
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}
      </style>
    </section >
  );
};

export default Features;