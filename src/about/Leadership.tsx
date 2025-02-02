import React from 'react';
import { Users } from 'lucide-react';

const leaders = [
  {
    name: "Dr. Robert Anderson",
    position: "Principal",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    description: "With over 25 years of experience in education, Dr. Anderson leads our institution with vision and dedication."
  },
  {
    name: "Dr. Sarah Mitchell",
    position: "Vice Principal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    description: "A passionate educator focused on curriculum development and student welfare."
  },
  {
    name: "Prof. James Wilson",
    position: "Academic Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    description: "Spearheading academic excellence and innovative teaching methodologies."
  }
];

export default function Leadership() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <Users size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Our Leadership</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guided by experienced educators and visionaries committed to excellence in education
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {leader.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">{leader.position}</p>
                <p className="text-gray-600 text-sm">
                  {leader.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}