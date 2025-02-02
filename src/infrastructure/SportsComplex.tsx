import React from 'react';
import { Trophy, Users, Target, Timer } from 'lucide-react';

const facilities = [
  {
    title: "Indoor Stadium",
    description: "Multi-purpose indoor stadium for basketball, volleyball, and badminton",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80"
  },
  {
    title: "Swimming Pool",
    description: "Olympic-size swimming pool with trained instructors",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80"
  },
  {
    title: "Football Ground",
    description: "Professional football field with synthetic turf",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80"
  },
  {
    title: "Fitness Center",
    description: "Modern gym equipment and professional trainers",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
  }
];

export default function SportsComplex() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <Trophy size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Sports Complex</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sports Facilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            State-of-the-art sports facilities for physical education and competitive sports
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <h3 className="text-xl font-bold text-white mb-2">{facility.title}</h3>
                  <p className="text-gray-200">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Trophy, value: "20+", label: "Sports Activities" },
            { icon: Users, value: "10+", label: "Professional Coaches" },
            { icon: Target, value: "50+", label: "Championships Won" },
            { icon: Timer, value: "12+", label: "Training Hours Daily" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 mb-4">
                <stat.icon size={24} className="text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}