import React from "react";
import { MessageCircle, Users, Video } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Share your goals",
    description:
      "Let us know what type of tutoring you need and when, so we can find you the right matches for your needs.",
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    bubbleColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "Find the perfect fit",
    description:
      "Browse our tutors, get in touch, and book as many free meetings as you need to find the tutor they click with most.",
    icon: <Users className="w-6 h-6 text-white" />,
    bubbleColor: "bg-green-500",
  },
  {
    id: 3,
    title: "Let the learning begin",
    description:
      "Once you’ve found the right fit, it’s time to book your lessons and start learning with MyTutor.",
    icon: <Video className="w-6 h-6 text-white" />,
    bubbleColor: "bg-purple-500",
  },
];

const FlowChatSteps = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          How It Works
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-start gap-4 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse text-right"
              }`}
            >
              {/* Icon bubble */}
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${step.bubbleColor}`}
              >
                {step.icon}
              </div>

              {/* Chat bubble */}
              <div
                className={`p-4 rounded-2xl shadow-md max-w-md ${
                  index % 2 === 0
                    ? "bg-white text-left"
                    : "bg-blue-50 text-right"
                }`}
              >
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowChatSteps;
