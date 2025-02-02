import React from 'react';
import { Trophy, Medal, Target, Users } from 'lucide-react';

const achievements = [
  {
    category: "Basketball",
    achievements: [
      "State Champions - Senior Boys Team 2023",
      "Runner-up - Junior Girls Team 2023",
      "Most Valuable Player - John Smith"
    ],
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80"
  },
  {
    category: "Swimming",
    achievements: [
      "National Gold - 100m Freestyle",
      "State Record - 200m Butterfly",
      "Best School Team Trophy 2023"
    ],
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80"
  },
  {
    category: "Athletics",
    achievements: [
      "Inter-School Athletics Champion 2023",
      "4x100m Relay Record Holders",
      "Best Athletic Performance Award"
    ],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80"
  }
];

export default function SportsAchievements() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <Trophy size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Sports Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sports Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating our athletes' dedication, sportsmanship, and outstanding achievements in various sports
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent z-10" />
                <img 
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white z-20">
                  {item.category}
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {item.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Medal size={16} className="text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Trophy, value: "50+", label: "Championships" },
            { icon: Medal, value: "200+", label: "Medals Won" },
            { icon: Target, value: "15", label: "Sports Offered" },
            { icon: Users, value: "300+", label: "Student Athletes" }
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