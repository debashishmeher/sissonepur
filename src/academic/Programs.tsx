import { BookOpen, Users, Clock, Award } from "lucide-react";

const programs = [
  {
    description:
      "Transitional phase with expanded subject choices and deeper learning Comprehensive academic programs designed to nurture intellectual growth and prepare students for ",
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <BookOpen size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">
              Academic Programs
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Educational Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive academic programs designed to nurture intellectual
            growth and prepare students for future success
          </p>
        </div>

        {/* Programs Grid */}
        <div className="mx-auto max-w-5xl">
          {programs.map((program, index) => (
            <div key={index} className="mt-20 ">
              <div className="p-6">
                <p className="text-gray-600 text-center text-lg mb-6">{program.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Users, value: "750+", label: "Students" },
            { icon: BookOpen, value: "25+", label: "Subjects" },
            { icon: Clock, value: "12:1", label: "Student-Teacher Ratio" },
            { icon: Award, value: "100%", label: "Pass Rate" },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 text-center">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 mb-4">
                <stat.icon size={24} className="text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
