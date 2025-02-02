import React from 'react';
import { GraduationCap, Award, Star, BookOpen } from 'lucide-react';

const achievements = [
  {
    year: "2023",
    title: "National Science Olympiad",
    students: ["Sarah Johnson - Gold Medal", "Michael Chen - Silver Medal"],
    description: "Our students demonstrated exceptional performance in the National Science Olympiad, securing top positions among 500+ schools."
  },
  {
    year: "2023",
    title: "International Mathematics Competition",
    students: ["Emily Brown - First Place", "David Wilson - Third Place"],
    description: "Outstanding achievement in the International Mathematics Competition, showcasing our strong STEM education program."
  },
  {
    year: "2022",
    title: "World Robotics Championship",
    students: ["Robotics Team - Second Place"],
    description: "Our robotics team's innovative project earned recognition at the World Robotics Championship."
  }
];

export default function AcademicAchievements() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <GraduationCap size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Academic Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Academic Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our students consistently excel in academic competitions and examinations at national and international levels
          </p>
        </div>

        {/* Achievements Timeline */}
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b  from-gray-600 via-green-500" />
              
              {/* Timeline Point */}
              <div className="absolute left-0 top-0 w-8 h-8 -translate-x-1/2 rounded-full bg-gradient-to-br  from-gray-600 via-green-500 flex items-center justify-center shadow-lg">
                <Award size={16} className="text-white" />
              </div>

              {/* Content */}
              <div className="bg-white rounded-2xl shadow-lg p-6 ml-4 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-primary-600 text-sm font-medium rounded-full">
                    {achievement.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">{achievement.description}</p>
                  <div className="space-y-2">
                    {achievement.students.map((student, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <Star size={16} className="text-yellow-500" />
                        <span>{student}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}