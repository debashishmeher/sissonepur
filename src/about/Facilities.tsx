import React from 'react';
import { Library, Monitor, Dumbbell, Beaker, Palette, Music } from 'lucide-react';

const facilities = [
  {
    icon: Library,
    title: "Modern Library",
    description: "Extensive collection of books, digital resources, and study spaces"
  },
  {
    icon: Monitor,
    title: "Computer Labs",
    description: "State-of-the-art computer facilities with latest technology"
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    description: "Indoor and outdoor sports facilities for physical development"
  },
  {
    icon: Beaker,
    title: "Science Labs",
    description: "Well-equipped laboratories for practical learning"
  },
  {
    icon: Palette,
    title: "Art Studio",
    description: "Creative space for visual and performing arts"
  },
  {
    icon: Music,
    title: "Music Room",
    description: "Professional music equipment and practice rooms"
  }
];

export default function Facilities() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <Library size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Our Facilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            World-Class Infrastructure
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our state-of-the-art facilities provide the perfect environment for learning and growth
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 group-hover:from-blue-100 group-hover:to-sky-100 transition-colors duration-300">
                  <facility.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}