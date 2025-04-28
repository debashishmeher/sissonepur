import React from 'react';
import { Users, BookOpen, Trophy, Target } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Students', value: '750+' },
  { icon: BookOpen, label: 'Courses', value: '25+' },
  { icon: Trophy, label: 'Awards', value: '100+' },
  { icon: Target, label: 'Success Rate', value: '100%' }
];

export default function AboutSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r  from-gray-600 via-green-500 opacity-20" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="inline-block text-primary-600 text-sm font-medium tracking-wider uppercase relative group">
                ABOUT US
                <div className="h-0.5 w-full bg-gradient-to-r  from-gray-600 via-green-500 transform origin-left group-hover:scale-x-110 transition-transform duration-300" />
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              WHY SUKANTI INTERNATIONAL SCHOOL
                <span className="block text-transparent bg-clip-text bg-gradient-to-r  from-gray-600 via-green-500">
                  
                </span>
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                At SUKANTI, we believe in providing an education that goes beyond textbooks. Our commitment to academic excellence, combined with a focus on character development, creates an environment where students can truly thrive and reach their full potential.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 group-hover:from-blue-100 group-hover:to-sky-100 transition-colors duration-300">
                      <stat.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80" 
                  alt="Students studying" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80" 
                  alt="Classroom discussion" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80" 
                  alt="Laboratory work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
                  alt="Group project" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br  from-gray-600 via-green-500 rounded-full blur-lg" />
            <div className="absolute -left-4 top-1/3 -translate-y-1/2 w-12 h-12 bg-gradient-to-br text-primary-400 to-sky-300 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
    // created by GigaX - WEES PATEL
  );
}