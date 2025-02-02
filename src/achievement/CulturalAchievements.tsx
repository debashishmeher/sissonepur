import React from 'react';
import { Music, Palette, Theater, Mic2 } from 'lucide-react';

const achievements = [
  {
    year: "2023",
    category: "Music",
    title: "National Youth Orchestra",
    description: "First place in the National Youth Orchestra Competition with our original composition.",
    participants: ["School Orchestra - Gold Medal", "Sarah Chen - Best Conductor"]
  },
  {
    year: "2023",
    category: "Dance",
    title: "International Dance Festival",
    description: "Grand prize winners at the International Youth Dance Festival in Paris.",
    participants: ["Dance Ensemble - First Place", "Contemporary Group - Special Mention"]
  },
  {
    year: "2023",
    category: "Drama",
    title: "State Theater Competition",
    description: "Best production award for our original play 'Dreams of Tomorrow'.",
    participants: ["Drama Club - Best Production", "John Smith - Best Actor"]
  },
  {
    year: "2023",
    category: "Art",
    title: "Young Artists Exhibition",
    description: "Multiple awards at the National Young Artists Exhibition.",
    participants: ["Emily Brown - Gold Medal", "Art Club - Best School Award"]
  }
];

export default function CulturalAchievements() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <Palette size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Cultural Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cultural Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing our students' artistic talents and cultural accomplishments across various forms of expression
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 group-hover:from-blue-100 group-hover:to-sky-100 transition-colors duration-300">
                    {achievement.category === "Music" && <Music className="w-6 h-6 text-primary-600" />}
                    {achievement.category === "Dance" && <Theater className="w-6 h-6 text-primary-600" />}
                    {achievement.category === "Drama" && <Mic2 className="w-6 h-6 text-primary-600" />}
                    {achievement.category === "Art" && <Palette className="w-6 h-6 text-primary-600" />}
                  </div>
                  <div>
                    <span className="text-sm text-primary-600 font-medium">{achievement.year}</span>
                    <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <div className="space-y-2">
                  {achievement.participants.map((participant, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                      <span>{participant}</span>
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
            { icon: Music, value: "25+", label: "Music Awards" },
            { icon: Theater, value: "15+", label: "Dance Trophies" },
            { icon: Mic2, value: "10+", label: "Drama Awards" },
            { icon: Palette, value: "30+", label: "Art Exhibitions" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100">
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