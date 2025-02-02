import React from 'react';
import { BookOpen, Brain, Target, Lightbulb } from 'lucide-react';

const subjects = [
  {
    category: "Core Subjects",
    items: [
      "Mathematics",
      "Science",
      "English",
      "Social Studies"
    ]
  },
  {
    category: "Languages",
    items: [
      "Hindi",
      "Sanskrit",
      "French",
      "German"
    ]
  },
  {
    category: "Sciences",
    items: [
      "Physics",
      "Chemistry",
      "Biology",
      "Computer Science"
    ]
  },
  {
    category: "Arts & Humanities",
    items: [
      "Literature",
      "History",
      "Geography",
      "Economics"
    ]
  }
];

export default function Curriculum() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <Brain size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Curriculum</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Curriculum
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our curriculum is designed to provide a balanced education that develops both academic excellence and life skills
          </p>
        </div>

        {/* Curriculum Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map((subject, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="space-y-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 group-hover:from-blue-100 group-hover:to-sky-100 transition-colors duration-300 inline-block">
                  {index === 0 && <BookOpen className="w-6 h-6 text-primary-600" />}
                  {index === 1 && <Target className="w-6 h-6 text-primary-600" />}
                  {index === 2 && <Brain className="w-6 h-6 text-primary-600" />}
                  {index === 3 && <Lightbulb className="w-6 h-6 text-primary-600" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{subject.category}</h3>
                  <div className="space-y-2">
                    {subject.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                        <span className="text-gray-700">{item}</span>
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