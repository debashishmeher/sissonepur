import React from 'react';
import { Trophy, Award, Star, Users, BookOpen, Target } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: "National Excellence Award",
    value: "2023",
    description: "Recognized for outstanding academic performance"
  },
  {
    icon: Users,
    title: "Student Success Rate",
    value: "98%",
    description: "Students achieving their academic goals"
  },
  {
    icon: BookOpen,
    title: "Academic Programs",
    value: "50+",
    description: "Diverse range of courses and specializations"
  },
  {
    icon: Star,
    title: "Student Satisfaction",
    value: "4.8/5",
    description: "Based on annual student surveys"
  },
  {
    icon: Target,
    title: "College Placement",
    value: "95%",
    description: "Students admitted to top universities"
  },
  {
    icon: Award,
    title: "Teaching Excellence",
    value: "100%",
    description: "Qualified and experienced faculty"
  }
];

export default function Achievements() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <Trophy size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Our Achievements</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recognition & Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence has earned us numerous accolades and recognition in the field of education
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 group-hover:from-blue-100 group-hover:to-sky-100 transition-colors duration-300">
                  <achievement.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-bold text-3xl text-gray-900 mb-2">
                    {achievement.value}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
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