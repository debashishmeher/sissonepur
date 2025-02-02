import React from 'react';
import { Monitor, Users, Wifi, Sun } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: "Smart Boards",
    description: "Interactive digital boards in every classroom for enhanced learning"
  },
  {
    icon: Users,
    title: "Optimal Size",
    description: "Spacious classrooms designed for comfortable student capacity"
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Campus-wide Wi-Fi coverage for digital learning"
  },
  {
    icon: Sun,
    title: "Natural Lighting",
    description: "Well-lit classrooms with large windows for a conducive environment"
  }
];

export default function Classrooms() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <Monitor size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Modern Classrooms</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Classrooms
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our classrooms are equipped with modern technology and designed to create an optimal learning environment
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 group-hover:from-blue-100 group-hover:to-sky-100 transition-colors duration-300 mb-6">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80"
              alt="Modern Classroom"
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
              alt="Interactive Learning"
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}