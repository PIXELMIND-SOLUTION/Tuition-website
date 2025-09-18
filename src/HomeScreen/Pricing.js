// components/Pricing.js
import React, { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic",
      price: { monthly: "$49", annual: "$39" },
      features: ["4 hours tutoring per month", "1 subject", "Email support", "Basic progress reports"]
    },
    {
      name: "Standard",
      price: { monthly: "$79", annual: "$69" },
      features: ["8 hours tutoring per month", "2 subjects", "Priority support", "Detailed progress reports", "Monthly parent meetings"]
    },
    {
      name: "Premium",
      price: { monthly: "$129", annual: "$99" },
      features: ["16 hours tutoring per month", "Unlimited subjects", "24/7 support", "Advanced progress analytics", "Weekly parent meetings", "Custom learning plans"]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-[#f0f8ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Affordable Pricing Plans</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Choose the plan that works best for you and start learning today.</p>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md p-1 bg-gray-100">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md ${!isAnnual ? 'bg-indigo-600 text-white' : 'text-gray-700'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md ${isAnnual ? 'bg-indigo-600 text-white' : 'text-gray-700'}`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white p-8 rounded-lg shadow-md ${index === 1 ? 'border-2 border-indigo-600 transform scale-105' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{isAnnual ? plan.price.annual : plan.price.monthly}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-md font-medium ${index === 1 ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;