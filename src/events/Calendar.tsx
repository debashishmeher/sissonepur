import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

const events = [
  {
    date: "25",
    month: "MAR",
    title: "Annual Science Exhibition",
    time: "9:00 AM - 4:00 PM",
    location: "School Auditorium"
  },
  {
    date: "05",
    month: "APR",
    title: "Inter-School Sports Meet",
    time: "8:00 AM - 6:00 PM",
    location: "Sports Complex"
  },
  {
    date: "15",
    month: "APR",
    title: "Cultural Festival 2024",
    time: "5:00 PM - 9:00 PM",
    location: "Main Campus"
  },
  {
    date: "20",
    month: "APR",
    title: "Parent-Teacher Meeting",
    time: "10:00 AM - 2:00 PM",
    location: "Classrooms"
  }
];

export default function Calendar() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <CalendarIcon size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Event Calendar</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Schedule
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan ahead with our comprehensive event calendar
          </p>
        </div>

        {/* Calendar Events */}
        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                {/* Date Box */}
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg flex flex-col items-center justify-center group-hover:from-blue-100 group-hover:to-sky-100 transition-colors duration-300">
                  <span className="text-2xl font-bold text-primary-600">{event.date}</span>
                  <span className="text-sm font-medium text-primary-600">{event.month}</span>
                </div>

                {/* Event Details */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock size={18} className="text-primary-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin size={18} className="text-primary-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Add to Calendar Button */}
                <button className="flex-shrink-0 bg-gray-50 hover:bg-blue-50 text-primary-600 font-medium px-4 py-2 rounded-lg transition-colors duration-300">
                  Add to Calendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}