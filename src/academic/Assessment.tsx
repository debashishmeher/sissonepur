import React from 'react';
import { ClipboardCheck, BarChart, Calendar, FileCheck } from 'lucide-react';

const assessmentTypes = [
  {
    title: "Continuous Evaluation",
    description: "Regular assessment of student progress through various methods",
    methods: [
      "Class participation",
      "Homework assignments",
      "Project work",
      "Quizzes"
    ]
  },
  {
    title: "Term Examinations",
    description: "Comprehensive evaluation at the end of each term",
    methods: [
      "Written examinations",
      "Practical tests",
      "Oral assessments",
      "Portfolio evaluation"
    ]
  },
  {
    title: "Performance Analysis",
    description: "Detailed analysis of student performance and progress",
    methods: [
      "Progress reports",
      "Parent-teacher meetings",
      "Performance graphs",
      "Improvement plans"
    ]
  },
  {
    title: "Skill Assessment",
    description: "Evaluation of practical skills and application of knowledge",
    methods: [
      "Laboratory work",
      "Field projects",
      "Presentations",
      "Group activities"
    ]
  }
];

export default function Assessment() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <ClipboardCheck size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Assessment System</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Evaluation & Assessment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive assessment system designed to evaluate academic progress and overall development
          </p>
        </div>

        {/* Assessment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {assessmentTypes.map((assessment, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="space-y-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 group-hover:from-blue-100 group-hover:to-sky-100 transition-colors duration-300 inline-block">
                  {index === 0 && <ClipboardCheck className="w-6 h-6 text-primary-600" />}
                  {index === 1 && <Calendar className="w-6 h-6 text-primary-600" />}
                  {index === 2 && <BarChart className="w-6 h-6 text-primary-600" />}
                  {index === 3 && <FileCheck className="w-6 h-6 text-primary-600" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{assessment.title}</h3>
                  <p className="text-gray-600 mb-4">{assessment.description}</p>
                  <div className="space-y-2">
                    {assessment.methods.map((method, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                        <span className="text-gray-700 text-sm">{method}</span>
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