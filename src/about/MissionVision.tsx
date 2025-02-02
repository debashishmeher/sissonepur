import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Excellence",
    description: "Striving for the highest standards in education and character development"
  },
  {
    icon: Heart,
    title: "Innovation",
    description: "Embracing new ideas and methods to enhance learning experiences"
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Maintaining strong moral principles and ethical standards"
  }
];

export default function MissionVision() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Mission & Vision */}
          <div className="space-y-12">
            {/* Mission */}
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
                <Target size={16} className="text-primary-600" />
                <span className="text-primary-600 text-sm font-medium">Our Mission</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Empowering Students for Global Success
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional education that nurtures intellectual curiosity, fosters creativity, and develops well-rounded individuals prepared for the challenges of tomorrow's world.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
                <Eye size={16} className="text-primary-600" />
                <span className="text-primary-600 text-sm font-medium">Our Vision</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Leading Education Into the Future
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To be recognized globally as a center of academic excellence, producing leaders who contribute positively to society through innovation, character, and purpose.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="lg:pl-12 lg:border-l border-gray-200">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
                  <Heart size={16} className="text-primary-600" />
                  <span className="text-primary-600 text-sm font-medium">Our Values</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Guiding Principles
                </h2>
              </div>

              <div className="grid gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 group-hover:from-blue-100 group-hover:to-sky-100 transition-colors duration-300">
                        <value.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}