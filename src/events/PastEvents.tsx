import React from 'react';
import { History, Calendar, MapPin, Users } from 'lucide-react';

const events = [
  {
    title: "Annual Day Celebration",
    date: "December 15, 2023",
    location: "School Auditorium",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
    highlights: [
      "Outstanding student performances",
      "Award ceremony",
      "Cultural showcase"
    ]
  },
  {
    title: "Sports Day 2023",
    date: "November 20, 2023",
    location: "Sports Complex",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80",
    highlights: [
      "Track and field events",
      "Team sports competitions",
      "Prize distribution"
    ]
  }
];

export default function PastEvents() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <History size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Past Events</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Event Highlights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Relive the memorable moments from our past events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="space-y-2">
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-white">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar size={18} className="text-primary-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={18} className="text-primary-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Calendar, value: "50+", label: "Events Organized" },
            { icon: Users, value: "5000+", label: "Participants" },
            { icon: MapPin, value: "10+", label: "Venues" },
            { icon: History, value: "25+", label: "Years of Excellence" }
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