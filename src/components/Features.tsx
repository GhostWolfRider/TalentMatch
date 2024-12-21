import React from 'react';
import { Brain, Rocket, LineChart, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Matching',
    description: 'Our intelligent algorithm matches candidates with the perfect opportunities based on skills, experience, and culture fit.'
  },
  {
    icon: Rocket,
    title: 'Streamlined Process',
    description: 'Automated screening and scheduling tools save time and reduce hiring cycles by up to 50%.'
  },
  {
    icon: LineChart,
    title: 'Advanced Analytics',
    description: 'Get detailed insights into your recruitment process with real-time analytics and reporting.'
  },
  {
    icon: Users,
    title: 'Smart Collaboration',
    description: 'Built-in tools for team collaboration and candidate evaluation make hiring decisions easier.'
  }
];

const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose TalentMatch?
          </h2>
          <p className="text-xl text-gray-600">
            Revolutionize your hiring process with our cutting-edge features
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;