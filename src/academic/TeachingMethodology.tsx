import React from 'react';
import { Lightbulb, Users, Target, Laptop } from 'lucide-react';

const methodologies = [
  {
    icon: Lightbulb,
    title: "Interactive Learning",
    description: "Engaging classroom discussions and participatory learning methods",
    features: [
      "Group discussions",
      "Peer learning",
      "Hands-on activities",
      "Interactive sessions"
    ]
  },
  {
    icon: Laptop,
    title: "Digital Integration",
    description: "Modern technology integration in teaching and learning process",
    features: [
      "Smart classrooms",
      "Online resources",
      "Digital assignments",
      "Virtual labs"
    ]
  },
  {
    icon: Target,
    title: "Personalized Approach",
    description: "Tailored learning experiences based on individual needs",
    features: [
      "Individual attention",
      "Customized assignments",
      "Progress tracking",
      "Regular feedback"
    ]
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Emphasis on teamwork and collective knowledge building",
    features: [
      "Group projects",
      "Team activities",
      "Peer reviews",
      "Joint presentations"
    ]
  }
];

export default function TeachingMethodology() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <Lightbulb size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Teaching Methodology</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Teaching Approach
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Innovative teaching methods that foster critical thinking, creativity, and comprehensive learning
          </p>
        </div>

        {/* Methodology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodologies.map((method, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="space-y-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 group-hover:from-blue-100 group-hover:to-sky-100 transition-colors duration-300 inline-block">
                  <method.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="space-y-2">
                    {method.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}