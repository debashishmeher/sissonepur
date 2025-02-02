import React from 'react';
import { History as HistoryIcon, Award, Users, MapPin } from 'lucide-react';

const milestones = [
  {
    year: "1990",
    title: "Foundation",
    description: "Established with a vision to provide quality education",
    icon: MapPin
  },
  {
    year: "2000",
    title: "Expansion",
    description: "Added new facilities and expanded campus",
    icon: Users
  },
  {
    year: "2010",
    title: "Excellence",
    description: "Recognized as one of the top schools in the region",
    icon: Award
  },
  {
    year: "2020",
    title: "Innovation",
    description: "Introduced advanced learning technologies",
    icon: HistoryIcon
  }
];

export default function History() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
              <HistoryIcon size={16} className="text-primary-600" />
              <span className="text-primary-600 text-sm font-medium">Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Legacy of Educational Excellence
            </h2>
            <p className="text-gray-600">
              From our humble beginnings to becoming a leading educational institution, our journey has been marked by continuous growth and unwavering commitment to excellence.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b  from-gray-600 via-green-500" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="space-y-2">
                      <span className="inline-block text-primary-600 font-bold text-lg">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br  from-gray-600 via-green-500 flex items-center justify-center shadow-lg">
                    <milestone.icon size={20} className="text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}